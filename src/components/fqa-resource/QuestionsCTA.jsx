import { ShieldCheck, Headset, ArrowRight } from "lucide-react";

export default function QuestionsCTA() {
  return (
    <div
      style={{
        fontFamily:
          "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        background: "#0d0e17",
        padding: "48px 20px",
      }}
    >
      <div
        className=" items-center"
        style={{
          position: "relative",
          maxWidth: 1440,
          height: 200,
          margin: "0 auto",
          borderRadius: 16,
          border: "1px solid #3a2f52",
          overflow: "hidden",
          background:
            "radial-gradient(120% 160% at 15% 20%, #4a2a6e 0%, #241a3d 42%, #171522 70%, #100e18 100%)",
        }}
      >
        {/* subtle light streak layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, transparent 40%, rgba(233,110,60,0.12) 55%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            padding: "28px 32px",
          }}
          className="cta-row"
        >
          {/* Left: icon + text */}
          <div className=" relative flex items-center justify-center" style={{ display: "flex", gap: 16, alignItems: "flex-start", minWidth: 280 }}>
            <div
              style={{
                flexShrink: 0,
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "linear-gradient(135deg, #c2418f 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mt-5 flex items-center justify-center "
            >
              <ShieldCheck size={20} color="#ffffff" strokeWidth={2} />
            </div>

            <div className=" min-h-30 h-full flex flex-col justify-center">
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Have more questions?
              </h2>
              <p
                style={{
                  color: "#a9abbd",
                  fontSize: 18,
                  lineHeight: 1.55,
                  maxWidth: 420,
                  margin: 0,
                }}
              >
                Our warranty experts are ready to provide the clarity you need
                for your specific vehicle protection goals.
              </p>
            </div>
          </div>

          {/* Right: buttons */}
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <button
              onClick={() => alert("Connecting you to an expert...")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#5a3ec8",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 500,
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#6b4ade")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#5a3ec8")}
            >
              Talk to an expert
              <Headset size={16} />
            </button>

            <button
              onClick={() => alert("Redirecting to free quote form...")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(90deg, #8b3fd4 0%, #e0663f 100%)",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 500,
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
            >
              Get a free quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-row {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}