import { ImageResponse } from "next/og";

// App Router Open Graph convention — supplies /opengraph-image at build time.
export const alt =
  "Glasgow ECG Program — University of Glasgow Electrocardiology Section";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#011451",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#4DBBC6",
            }}
          >
            University of Glasgow · Electrocardiology
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 94,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.02,
            }}
          >
            Glasgow ECG Program
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              color: "#A5A1CE",
            }}
          >
            Over 50 years of automated ECG interpretation
          </div>
        </div>

        <svg width="1048" height="110" viewBox="0 0 1048 110" fill="none">
          <path
            d="M0 62 H300 l16 0 l10 -40 l18 80 l14 -40 H520 l18 0 l12 -54 l18 96 l12 -42 H760 l14 0 l10 -30 l16 60 l12 -30 H1048"
            stroke="#4DBBC6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
