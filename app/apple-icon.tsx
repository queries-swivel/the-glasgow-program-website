import { ImageResponse } from "next/og";

// App Router icon convention — supplies /apple-icon at build time (no static asset needed).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#011451",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 120 120" fill="none">
          <path
            d="M6 60 H40 l6 0 l6 -30 l10 60 l7 -30 H74 l6 0 l6 -18 l8 36 H114"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
