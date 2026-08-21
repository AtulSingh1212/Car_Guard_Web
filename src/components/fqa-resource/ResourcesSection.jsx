import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Car,
  Download,
  Play,
  Headphones,
  MessageCircle,
  Mail,
} from "lucide-react";

const resources = [
  {
    id: "warranty-brochure",
    title: "Warranty Brochure",
    desc: "Complete overview of our plans and coverage details.",
    icon: BookOpen,
    color: "purple",
  },
  {
    id: "claim-guide",
    title: "Claim Guide",
    desc: "Step-by-step guide to filing a claim successfully.",
    icon: CheckCircle2,
    color: "green",
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    desc: "Read our official service terms and conditions.",
    icon: FileText,
    color: "blue",
  },
  {
    id: "coverage-guide",
    title: "Coverage Guide",
    desc: "Detailed list of covered components and exclusions.",
    icon: Car,
    color: "amber",
  },
];

const videos = [
  {
    id: "file-a-claim",
    title: "How to File a Claim",
    desc: "A quick guide to filing your claim online or via phone.",
    duration: "2:45",
    gradient: "linear-gradient(135deg,#3a4a68,#1a2233)",
  },
  {
    id: "roadside-assistance",
    title: "Roadside Assistance",
    desc: "Learn how to request help when you're stranded.",
    duration: "1:58",
    gradient: "linear-gradient(135deg,#2a3d4a,#141c26)",
  },
];

const colorMap = {
  purple: { bg: "#4c2f8f", fg: "#c9b3f5" },
  green: { bg: "#14493a", fg: "#6ee7b7" },
  blue: { bg: "#1e3a6e", fg: "#93c5fd" },
  amber: { bg: "#6e3f1e", fg: "#f5b876" },
};

function ResourceCard({ item, onDownload }) {
  const [hover, setHover] = useState(false);
  const Icon = item.icon;
  const c = colorMap[item.color];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#171926",
        border: `1px solid ${hover ? "#3d4058" : "#2a2d3d"}`,
        borderRadius: 12,
        padding: 22,
        transition: "border-color 0.15s ease",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: c.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Icon size={20} color={c.fg} strokeWidth={2} />
      </div>

      <h3
        style={{
          color: "#e8e8ec",
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          color: "#8b8ea0",
          fontSize: 13.5,
          lineHeight: 1.55,
          marginBottom: 16,
        }}
      >
        {item.desc}
      </p>

      <button
        onClick={() => onDownload(item.title)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: "#5b8def",
          fontSize: 13.5,
          fontWeight: 500,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <Download size={14} />
        Download PDF
      </button>
    </div>
  );
}

function VideoCard({ item, onPlay }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => onPlay(item.title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        gap: 14,
        background: "#171926",
        border: `1px solid ${hover ? "#3d4058" : "#2a2d3d"}`,
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        cursor: "pointer",
        transition: "border-color 0.15s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          flexShrink: 0,
          width: 100,
          height: 68,
          borderRadius: 8,
          overflow: "hidden",
          background: item.gradient,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Play size={12} color="#171926" fill="#171926" style={{ marginLeft: 2 }} />
        </div>
        <span
          style={{
            position: "absolute",
            bottom: 5,
            right: 6,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            fontSize: 10.5,
            padding: "1px 5px",
            borderRadius: 4,
          }}
        >
          {item.duration}
        </span>
      </div>

      <div>
        <h3
          style={{
            color: "#e8e8ec",
            fontSize: 14.5,
            fontWeight: 600,
            marginBottom: 5,
          }}
        >
          {item.title}
        </h3>
        <p style={{ color: "#8b8ea0", fontSize: 13, lineHeight: 1.5 }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function ResourcesSection() {
  const [toast, setToast] = useState("");

  function handleDownload(name) {
    setToast(`Downloading: ${name}.pdf`);
    setTimeout(() => setToast(""), 2000);
  }

  function handlePlay(title) {
    setToast(`Playing video: ${title}`);
    setTimeout(() => setToast(""), 2000);
  }

  function handleChat() {
    setToast("Starting live chat...");
    setTimeout(() => setToast(""), 2000);
  }

  return (
    <div
      style={{
        fontFamily:
          "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        background: "#0d0e17",
        minHeight: "100vh",
        padding: "48px 20px",
        position: "relative",
      }}
    >
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#232640",
            color: "#e8e8ec",
            fontSize: 13.5,
            padding: "10px 18px",
            borderRadius: 8,
            border: "1px solid #3d4058",
            zIndex: 50,
          }}
        >
          {toast}
        </div>
      )}

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 32,
        }}
        className="resources-grid-wrap  h-[700px] "
      >
        {/* Resources & Downloads */}
        <div className=" flex flex-col justify-between ">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: "-0.3px",
              }}
            >
              Resources & downloads
            </h1>
            <a
              href="#"
              style={{
                color: "#5b8def",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View all ›
            </a>
          </div>

          <p style={{ color: "#7d8092", fontSize: 18, marginBottom: 20 }}>
            Access helpful documents and guides anytime.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            className="grid grid-cols-2 gap-4 w-full lg:h-[560px]"
          >
            {resources.map((item) => (
              <ResourceCard key={item.id} item={item} onDownload={handleDownload} />
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 26,
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.3px",
              }}
            >
              Video tutorials
            </h1>
            <a
              href="#"
              style={{
                color: "#5b8def",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              All videos ›
            </a>
          </div>

          {videos.map((item) => (
            <VideoCard key={item.id} item={item} onPlay={handlePlay} />
          ))}

          {/* Direct Support */}
          <div
          className=" h-[410px] rounded-lg"
            style={{
                position: "relative",
                background: "#141625",
                border: "1px solid #2a2d3d",
                borderRadius: 12,
                padding: "26px 24px",
                overflow: "hidden",
              }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 170,
                height: 190,
                background:
                  "radial-gradient(circle, rgba(91,141,239,0.18) 0%, rgba(91,141,239,0) 70%)",
                pointerEvents: "none",
              }}
              
            />

            <h2
              style={{
                position: "relative",
                color: "#ffffff",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Direct support
            </h2>

            <div style={{ position: "relative", display: "flex", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "#1e3a6e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Headphones size={18} color="#93c5fd" />
              </div>
              <div>
                <h3 style={{ color: "#e8e8ec", fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>
                  Call us anytime
                </h3>
                <p style={{ color: "#9698a8", fontSize: 13 }}>(800) 123-4567</p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 4,
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    color: "#5b8def",
                  }}
                >
                  AVAILABLE 24/7
                </span>
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "#14493a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle size={18} color="#6ee7b7" />
              </div>
              <div>
                <h3 style={{ color: "#e8e8ec", fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>
                  Live chat
                </h3>
                <p style={{ color: "#9698a8", fontSize: 13, marginBottom: 4 }}>
                  Chat with our experts instantly.
                </p>
                <button
                  onClick={handleChat}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    color: "#4ade80",
                  }}
                >
                  Start chat now
                </button>
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", gap: 14 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "#6e3f1e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail size={18} color="#f5b876" />
              </div>
              <div>
                <h3 style={{ color: "#e8e8ec", fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>
                  Email support
                </h3>
                <p style={{ color: "#9698a8", fontSize: 13 }}>support@carguard.com</p>
                <p style={{ color: "#9698a8", fontSize: 13, marginTop: 2 }}>
                  Typical response within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .resources-grid-wrap {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}