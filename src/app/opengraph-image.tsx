import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#ffffff",
          color: "#09090b",
          border: "1px solid #e4e4e7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#52525b",
          }}
        >
          Shuai Shuai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "920px" }}>
          <div style={{ fontSize: 74, fontWeight: 600, lineHeight: 1.08 }}>AI Automation Developer</div>
          <div style={{ fontSize: 46, fontWeight: 500, color: "#27272a" }}>Full Stack Developer</div>
        </div>
        <div style={{ fontSize: 24, color: "#52525b" }}>
          Enterprise websites, CRM systems, AI automation, and business dashboards.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
