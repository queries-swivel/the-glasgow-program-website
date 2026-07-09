"use client";

import { useEffect, useRef } from "react";

interface ECGAnimationProps {
  className?: string;
  /** Render the ECG-paper grid + calibration pulse. Defaults to true. */
  paper?: boolean;
}

/**
 * A clinically-credible lead-II rhythm strip on ECG paper.
 *
 * Standard scaling: 25 mm/s (horizontal) and 10 mm/mV (vertical). The grid is
 * a subtle brand-tinted 1 mm / 5 mm graticule; a 1 mV (10 mm) calibration pulse
 * precedes the trace, exactly as on a real recording. Decorative only — hence
 * `aria-hidden`. The animation pauses when off-screen and renders a single
 * static frame under `prefers-reduced-motion`.
 */
export function ECGAnimation({ className, paper = true }: ECGAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const brand = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-ecg-line")
        .trim();
      return v || "#011451";
    };

    let width = 0;
    let height = 0;
    let pxPerMm = 6;
    let calWidth = 0;
    let offset = 0;
    let last = 0;
    let running = false;
    let gridCanvas: HTMLCanvasElement | null = null;

    // Lead-II morphology, in millivolts, over one cardiac cycle (phase p ∈ [0,1)).
    const mvAt = (p: number): number => {
      if (p >= 0.1 && p < 0.18) return 0.15 * Math.sin(((p - 0.1) / 0.08) * Math.PI); // P
      if (p >= 0.235 && p < 0.255) return -0.1 * Math.sin(((p - 0.235) / 0.02) * Math.PI); // Q
      if (p >= 0.255 && p < 0.285) return 1.2 * Math.sin(((p - 0.255) / 0.03) * Math.PI); // R
      if (p >= 0.285 && p < 0.315) return -0.28 * Math.sin(((p - 0.285) / 0.03) * Math.PI); // S
      if (p >= 0.42 && p < 0.62) return 0.32 * Math.sin(((p - 0.42) / 0.2) * Math.PI); // T
      return 0;
    };

    const buildGrid = () => {
      if (!paper) {
        gridCanvas = null;
        return;
      }
      const dpr = window.devicePixelRatio || 1;
      const g = document.createElement("canvas");
      g.width = Math.round(width * dpr);
      g.height = Math.round(height * dpr);
      const gc = g.getContext("2d");
      if (!gc) return;
      gc.setTransform(dpr, 0, 0, dpr, 0, 0);
      const baseline = height / 2;

      gc.lineWidth = 1;
      gc.strokeStyle = "rgba(1, 20, 81, 0.05)"; // 1 mm minor lines
      gc.beginPath();
      for (let x = 0; x <= width; x += pxPerMm) {
        gc.moveTo(Math.round(x) + 0.5, 0);
        gc.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = baseline % pxPerMm; y <= height; y += pxPerMm) {
        gc.moveTo(0, Math.round(y) + 0.5);
        gc.lineTo(width, Math.round(y) + 0.5);
      }
      gc.stroke();

      const major = pxPerMm * 5;
      gc.strokeStyle = "rgba(1, 20, 81, 0.11)"; // 5 mm major lines
      gc.beginPath();
      for (let x = 0; x <= width; x += major) {
        gc.moveTo(Math.round(x) + 0.5, 0);
        gc.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = baseline % major; y <= height; y += major) {
        gc.moveTo(0, Math.round(y) + 0.5);
        gc.lineTo(width, Math.round(y) + 0.5);
      }
      gc.stroke();
      gridCanvas = g;
    };

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pxPerMm = Math.max(3, height / 24); // ~4.8 large squares tall
      calWidth = paper ? pxPerMm * 9 : 0;
      buildGrid();
    };

    const draw = () => {
      if (width === 0 || height === 0) return;
      const baseline = height / 2;
      const color = brand();
      ctx.clearRect(0, 0, width, height);

      if (gridCanvas) ctx.drawImage(gridCanvas, 0, 0, width, height);

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // 1 mV (10 mm) calibration pulse
      if (paper) {
        const calH = pxPerMm * 10;
        const x0 = pxPerMm * 1.5;
        const x1 = x0 + pxPerMm * 1.5;
        const x2 = x1 + pxPerMm * 3.5;
        ctx.beginPath();
        ctx.moveTo(0, baseline);
        ctx.lineTo(x0, baseline);
        ctx.lineTo(x0, baseline - calH);
        ctx.lineTo(x2, baseline - calH);
        ctx.lineTo(x2, baseline);
        ctx.lineTo(calWidth, baseline);
        ctx.stroke();
      }

      // Scrolling lead-II trace (25 mm/s · 10 mm/mV), clipped past the cal pulse.
      const beatPx = 25 * 0.857 * pxPerMm; // ~70 bpm
      ctx.save();
      ctx.beginPath();
      ctx.rect(calWidth, 0, width - calWidth, height);
      ctx.clip();
      ctx.beginPath();
      for (let x = calWidth; x <= width; x++) {
        const p = (((x - calWidth + offset) % beatPx) + beatPx) % beatPx / beatPx;
        const y = baseline - mvAt(p) * pxPerMm * 10;
        if (x === calWidth) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    };

    const loop = (t: number) => {
      if (!running) return;
      if (last) offset += 25 * pxPerMm * ((t - last) / 1000); // 25 mm/s
      last = t;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      if (reduce.matches) {
        draw();
        return;
      }
      running = true;
      last = 0;
      rafRef.current = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    setup();
    draw();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onResize = () => {
      setup();
      draw();
    };
    window.addEventListener("resize", onResize);

    const onReduceChange = () => {
      stop();
      draw();
      start();
    };
    reduce.addEventListener("change", onReduceChange);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      reduce.removeEventListener("change", onReduceChange);
    };
  }, [paper]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
