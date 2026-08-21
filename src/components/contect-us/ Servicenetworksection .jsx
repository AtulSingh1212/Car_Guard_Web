import { useState } from "react";
import { ShieldCheck, MapPin, Wrench, Phone, ArrowRight, Lock, Search, User } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "2,500+ certified repair facilities",
    desc: "Trusted by thousands of drivers across the country.",
  },
  {
    icon: MapPin,
    title: "Coverage in all 50 states",
    desc: "Nationwide protection you can count on.",
  },
  {
    icon: Wrench,
    title: "Quality you can trust",
    desc: "All facilities are pre-screened and held to high performance standards.",
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  department: "",
  date: "",
  time: "",
  message: "",
};

export default function ServiceNetworkSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }));
  }

  function handleSubmit() {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Enter your name";
    if (!form.phone.trim()) nextErrors.phone = "Enter a phone number";
    if (!form.email.trim()) nextErrors.email = "Enter your email";
    if (!form.department) nextErrors.department = "Select a department";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
    alert('Will Connect You Soon')
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 2500);
  }

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "#171926",
    border: `1px solid ${hasError ? "#e24b4a" : "#2a2d3d"}`,
    borderRadius: 8,
    color: "#e8e8ec",
    fontSize: 13.5,
    padding: "11px 14px",
    outline: "none",
  });

  return (
    <div
    className="w-full h-[100vh] flex items-start justify-start bg-[#111a2d]"
      style={{
        fontFamily:
          "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        // background: "#0d0e17",
        width: "100%",
        height: "80vh",
      }}

    >

      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 32,
          alignItems: "start",
        }}
        className="sn-grid flex items-center justify-center"
      >
        {/* Left column */}
        <div className="">
          <h1
            style={{
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-0.3px",
              marginBottom: 12,
            }}
            className="text-start"
          >
            Our nationwide service network
          </h1>

          <p
            style={{
              color: "#a9abbd",
              fontSize: 17.5,
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 460,
            }}
          >
            Wherever the road takes you, CarGuard has you covered. Our
            trusted network of certified repair facilities is always ready
            to help.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 32 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} style={{ display: "flex", gap: 14 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#1d2030",
                      border: "1px solid #2a2d3d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#c7c9d6" />
                  </div>
                  <div>
                    <h3 style={{ color: "#e8e8ec", fontSize: 15, fontWeight: 600, marginBottom: 3 }}>
                      {f.title}
                    </h3>
                    <p style={{ color: "#8b8ea0", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map visualization card */}
          <div
            style={{
              background: "#0f111c",
              border: "1px solid #2a2d3d",
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="h-[200px] w-[800px]"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderBottom: "1px solid #22243330",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <ShieldCheck size={14} color="#8b8ff0" />
                <span style={{ color: "#c7c9d6", fontSize: 12.5, fontWeight: 600 }}>
                  CarGuard
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Search size={14} color="#7d8092" />
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#2a2d3d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="bg-red-500"
                >
                  <User size={12} color="#9698a8" />
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: 210, background: "#12141f" }}>
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 12,
                  background: "rgba(0,0,0,0.5)",
                  color: "#e8e8ec",
                  fontSize: 11.5,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 4,
                }}
              >
                Contact & service network
              </div>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5c5f70",
                  fontSize: 16,
                }}
                className="bg-red"
              >
                Map visualization area
              </div>

              {/* scatter of purple dots to imply a map */}
              {Array.from({ length: 45 }).map((_, i) => {
                const left = (Math.sin(i * 12.9898) * 43758.5453) % 1;
                const top = (Math.sin(i * 78.233) * 12543.234) % 1;
                const l = 5 + Math.abs(left) * 90;
                const t = 5 + Math.abs(top) * 90;
                return (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${l}%`,
                      top: `${t}%`,
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#a855f7",
                      opacity: 0.6,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <div
          style={{
            background: "#141625",
            border: "1px solid #2a2d3d",
            borderRadius: 16,
            padding: "28px 26px",
            height: "600px",
            width: "500px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#2a2d3d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Phone size={16} color="#e8e8ec" />
            </div>
            <h2 style={{ color: "#ffffff", fontSize: 19, fontWeight: 700 }}>
              Request a callback
            </h2>
          </div>

          <p style={{ color: "#8b8ea0", fontSize: 13, lineHeight: 1.55, marginBottom: 22 }}>
            Prefer to talk later? Schedule a callback at your convenience and
            we'll reach out to you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <input
                  placeholder="Full name *"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  style={inputStyle(errors.fullName)}
                />
                {errors.fullName && (
                  <span style={{ color: "#e24b4a", fontSize: 12, marginTop: 4, display: "block" }}>
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div>
                <input
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  style={inputStyle(errors.phone)}
                />
                {errors.phone && (
                  <span style={{ color: "#e24b4a", fontSize: 12, marginTop: 4, display: "block" }}>
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <input
                  placeholder="Email address *"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  style={inputStyle(errors.email)}
                />
                {errors.email && (
                  <span style={{ color: "#e24b4a", fontSize: 12, marginTop: 4, display: "block" }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <select
                  value={form.department}
                  onChange={(e) => updateField("department", e.target.value)}
                  style={{ ...inputStyle(errors.department), color: form.department ? "#e8e8ec" : "#6c6f80" }}
                >
                  <option value="">Preferred department *</option>
                  <option value="claims">Claims</option>
                  <option value="warranty">Warranty plans</option>
                  <option value="roadside">Roadside assistance</option>
                  <option value="billing">Billing</option>
                </select>
                {errors.department && (
                  <span style={{ color: "#e24b4a", fontSize: 12, marginTop: 4, display: "block" }}>
                    {errors.department}
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input
                type="date"
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                style={inputStyle(false)}
              />
              <input
                type="time"
                value={form.time}
                onChange={(e) => updateField("time", e.target.value)}
                style={inputStyle(false)}
              />
            </div>

            <textarea
              placeholder="How can we help you?"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              rows={3}
              style={{ ...inputStyle(false), resize: "vertical", fontFamily: "inherit" }}
            />

            <button
              onClick={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: submitted
                  ? "#2f9e5f"
                  : "linear-gradient(90deg, #e0663f 0%, #a855f7 100%)",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 600,
                border: "none",
                borderRadius: 10,
                padding: "13px 20px",
                cursor: "pointer",
                marginTop: 4,
                transition: "background 0.2s ease",
              }}
              
            >
              {submitted ? "Callback requested" : "Request callback"}
              {!submitted && <ArrowRight size={16} />}
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                color: "#7d8092",
                fontSize: 12,
                marginTop: 4,
              }}
            >
              <Lock size={12} />
              We respect your privacy. Your information is safe with us.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .sn-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}