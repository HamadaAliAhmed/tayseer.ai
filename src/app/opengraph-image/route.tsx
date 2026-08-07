import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#090B0E",
          color: "#F7F6F2",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(13,90,140,0.30)",
            filter: "blur(90px)",
            right: -120,
            top: -150,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 18, height: 18, background: "#5CF0CE" }} />
          Tayseer Innovations
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              fontSize: 70,
              lineHeight: 0.98,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              textTransform: "uppercase",
            }}
          >
            Future-ready AI &amp; Digital Banking Solutions
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 27,
              color: "#B7C0C8",
              lineHeight: 1.35,
            }}
          >
            Core banking, digital banking, AI and managed technology solutions for financial institutions across the Middle East.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#8F9AA4",
          }}
        >
          <span>Saudi Arabia · UAE</span>
          <span style={{ color: "#5CF0CE" }}>tayseer.me</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
