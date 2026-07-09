"use client";

import { useEffect, useRef, useState } from "react";

interface EcgData {
  source: string;
  citation: string;
  license: string;
  diagnosis: string;
  fs: number;
  durationSec: number;
  units: string;
  leadOrder: string[];
  signals: Record<string, number[]>;
}

interface TwelveLeadECGProps {
  /** Path to the extracted ECG JSON in /public. */
  src: string;
  className?: string;
}

// Standard 3x4 simultaneous layout: each column is a consecutive 2.5 s window.
const GRID = [
  ["I", "aVR", "V1", "V4"],
  ["II", "aVL", "V2", "V5"],
  ["III", "aVF", "V3", "V6"],
];
const RHYTHM_LEAD = "II";

// Page geometry in millimetres of real ECG paper.
const MM = {
  left: 9, // calibration-pulse margin
  right: 4,
  col: 62.5, // 2.5 s at 25 mm/s
  rowH: 27,
  gap: 3,
  top: 6,
  bottom: 8,
};
const COLS = 4;
const CONTENT_W = MM.left + COLS * MM.col; // to right edge of traces
const TOTAL_W = CONTENT_W + MM.right;
const BANDS = 4; // 3 grid rows + rhythm strip
const TOTAL_H =
  MM.top + BANDS * MM.rowH + (BANDS - 1) * MM.gap + MM.bottom;

export function TwelveLeadECG({ src, className }: TwelveLeadECGProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<EcgData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: EcgData) => alive && setData(d))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [src]);

  useEffect(() => {
    if (!data) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const grid = "rgba(1, 20, 81, 0.07)";
    const gridMajor = "rgba(1, 20, 81, 0.16)";
    const trace = "#011451";

    const draw = () => {
      const cssW = canvas.parentElement?.clientWidth ?? canvas.clientWidth;
      if (!cssW) return;
      const mm = cssW / TOTAL_W; // pixels per millimetre
      const cssH = TOTAL_H * mm;
      const dpr = window.devicePixelRatio || 1;
      canvas.style.height = `${cssH}px`;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr * mm, 0, 0, dpr * mm, 0, 0); // 1 unit = 1 mm

      ctx.clearRect(0, 0, TOTAL_W, TOTAL_H);

      // ECG-paper graticule
      ctx.lineWidth = 0.15;
      ctx.strokeStyle = grid;
      ctx.beginPath();
      for (let x = 0; x <= TOTAL_W; x += 1) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, TOTAL_H);
      }
      for (let y = 0; y <= TOTAL_H; y += 1) {
        ctx.moveTo(0, y);
        ctx.lineTo(TOTAL_W, y);
      }
      ctx.stroke();
      ctx.lineWidth = 0.25;
      ctx.strokeStyle = gridMajor;
      ctx.beginPath();
      for (let x = 0; x <= TOTAL_W; x += 5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, TOTAL_H);
      }
      for (let y = 0; y <= TOTAL_H; y += 5) {
        ctx.moveTo(0, y);
        ctx.lineTo(TOTAL_W, y);
      }
      ctx.stroke();

      const bandTop = (b: number) => MM.top + b * (MM.rowH + MM.gap);
      const baseOf = (b: number) => bandTop(b) + MM.rowH / 2;
      const fs = data.fs;
      const uvToMm = (uv: number) => -uv / 100; // 10 mm/mV, µV → mm (up = negative y)

      ctx.strokeStyle = trace;
      ctx.lineWidth = 0.3;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      const calPulse = (baseline: number) => {
        ctx.beginPath();
        ctx.moveTo(1, baseline);
        ctx.lineTo(3, baseline);
        ctx.lineTo(3, baseline - 10); // 1 mV = 10 mm
        ctx.lineTo(6, baseline - 10);
        ctx.lineTo(6, baseline);
        ctx.lineTo(MM.left - 1, baseline);
        ctx.stroke();
      };

      const drawSegment = (
        lead: string,
        baseline: number,
        xStart: number,
        tStart: number,
        tEnd: number
      ) => {
        const sig = data.signals[lead];
        if (!sig) return;
        const i0 = Math.round(tStart * fs);
        const i1 = Math.min(Math.round(tEnd * fs), sig.length);
        ctx.beginPath();
        for (let i = i0; i < i1; i++) {
          const x = xStart + ((i - i0) / fs) * 25; // 25 mm/s
          const y = baseline + uvToMm(sig[i]);
          if (i === i0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      // 3x4 grid
      for (let b = 0; b < 3; b++) {
        const baseline = baseOf(b);
        calPulse(baseline);
        for (let c = 0; c < COLS; c++) {
          const lead = GRID[b][c];
          const xStart = MM.left + c * MM.col;
          ctx.save();
          ctx.beginPath();
          ctx.rect(xStart, bandTop(b), MM.col, MM.rowH);
          ctx.clip();
          drawSegment(lead, baseline, xStart, c * 2.5, c * 2.5 + 2.5);
          ctx.restore();
          // lead label
          ctx.save();
          ctx.fillStyle = trace;
          ctx.font = "600 3.4px system-ui, sans-serif";
          ctx.fillText(lead, xStart + 1.2, bandTop(b) + 4);
          ctx.restore();
        }
      }

      // rhythm strip (lead II, full duration)
      const rb = baseOf(3);
      calPulse(rb);
      ctx.save();
      ctx.beginPath();
      ctx.rect(MM.left, bandTop(3), COLS * MM.col, MM.rowH);
      ctx.clip();
      drawSegment(RHYTHM_LEAD, rb, MM.left, 0, data.durationSec);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = trace;
      ctx.font = "600 3.4px system-ui, sans-serif";
      ctx.fillText(RHYTHM_LEAD, MM.left + 1.2, bandTop(3) + 4);
      // scale annotation
      ctx.font = "3px system-ui, sans-serif";
      ctx.fillStyle = "rgba(1, 20, 81, 0.55)";
      ctx.fillText("25 mm/s   10 mm/mV", MM.left, TOTAL_H - 2.5);
      ctx.restore();
    };

    draw();
    const ro = new ResizeObserver(draw);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", draw);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", draw);
    };
  }, [data]);

  if (failed) return null;

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", display: "block" }}
      role="img"
      aria-label={
        data
          ? `Twelve-lead electrocardiogram showing ${data.diagnosis.toLowerCase()}, from the open PTB-XL dataset.`
          : "Twelve-lead electrocardiogram"
      }
    />
  );
}
