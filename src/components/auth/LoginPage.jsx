
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Zap,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const perks = [
  {
    icon: ShieldCheck,
    title: "Secure & trusted",
    desc: "Your data is always protected",
  },
  {
    icon: Zap,
    title: "Quick & easy",
    desc: "Manage everything in just a few clicks",
  },
  {
    icon: Headphones,
    title: "24/7 access",
    desc: "Your account, anytime, anywhere",
  },
];

function validateEmail(value) {
  if (!value.trim()) return "Enter your email address";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(value)) return "Enter a valid email address";
  return "";
}

function validatePassword(value) {
  if (!value) return "Enter your password";
  if (value.length < 6) return "Password must be at least 6 characters";
  return "";
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function handleBlur(field) {
    if (field === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
    } else if (field === "password") {
      setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const nextErrors = { email: emailError, password: passwordError };
    setErrors(nextErrors);

    if (emailError || passwordError) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      navigate("/dashboard");
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-transparent font-sans">
      <div className="relative min-h-screen overflow-hidden">
      
        
        
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/60" /> */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#081225]/95 via-[#0b1529]/85 to-[#10182b]/70" />


        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto min-h-screen px-6 py-10 gap-10">
          {/* Left: marketing copy */}
          <div className="max-w-[520px] pt-4 md:pt-0">
            <span className="inline-block bg-purple-600/30 text-purple-300 text-[12px] font-medium px-3 py-1 rounded-full mb-5 border border-purple-500/30">
              Welcome back!
            </span>

            <h1 className="text-white text-5xl sm:text-5xl font-extrabold leading-tight mb-2">
              Log in to your
            </h1>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CarGuard
            </h1>
            <h1 className="text-white text-5xl sm:text-5xl font-extrabold leading-tight mb-6">
              Account
            </h1>

            <p className="text-gray-300 text-[18px] leading-relaxed mb-10 max-w-[420px]">
              Access your coverage, track claims, and manage your plan—all in
              one place.
            </p>

            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-start gap-3 max-w-[150px]">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
                      <Icon size={16} className="text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-white text-[13.5px] font-semibold leading-tight">
                        {perk.title}
                      </h3>
                      <p className="text-gray-400 text-[12px] leading-snug mt-1">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: login card */}
          <div className="w-full max-w-[400px] bg-[#12131f]/95 backdrop-blur border border-white/10 rounded-2xl p-7 shadow-2xl">
            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                  <ShieldCheck size={26} className="text-green-400" />
                </div>
                <h2 className="text-white text-lg font-bold mb-2">You're logged in</h2>
                <p className="text-gray-400 text-sm">Redirecting to your dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center flex-shrink-0">
                    <img src={'assets/images/logo.png'} alt="logo" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-white text-2xl font-bold">Login to your account</h2>
                </div>
                <p className="text-gray-400 text-[16px] mb-6">
                  Enter your credentials to continue
                </p>

                {/* Email */}
                <label className="block text-gray-200 text-[15px] font-medium mb-1.5">
                  Email address
                </label>
                <div className="relative mb-1">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="Enter your email address"
                    className={`w-full bg-white text-gray-900 text-[13.5px] rounded-lg pl-10 pr-3.5 py-2.5 outline-none border ${
                      errors.email ? "border-red-500" : "border-transparent"
                    } focus:ring-2 focus:ring-purple-400`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-[12px] mb-3">{errors.email}</p>
                )}
                {!errors.email && <div className="mb-4" />}

                {/* Password */}
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-gray-200 text-[15px] font-medium">Password</label>
                  <a href="#" className="text-purple-400 text-[12.5px] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative mb-1">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    placeholder="Enter your password"
                    className={`w-full bg-white text-gray-900 text-[13.5px] rounded-lg pl-10 pr-10 py-2.5 outline-none border ${
                      errors.password ? "border-red-500" : "border-transparent"
                    } focus:ring-2 focus:ring-purple-400`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-[12px] mb-3">{errors.password}</p>
                )}
                {!errors.password && <div className="mb-4" />}

                {/* Remember me / support */}
                <div className="flex items-center justify-between mb-5">
                  <label className="flex items-center gap-2 text-gray-300 text-[13px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="w-3.5 h-3.5 rounded accent-purple-500"
                    />
                    Remember me
                  </label>
                  <span className="text-gray-400 text-[12.5px]">
                    Need help?{" "}
                    <a href="#" className="text-purple-400 hover:underline">
                      Contact support
                    </a>
                  </span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 hover:brightness-110 transition text-white font-semibold text-[14.5px] rounded-lg py-3 disabled:opacity-70"
                >
                  {status === "submitting" ? "Logging in..." : "Login"}
                  {status !== "submitting" && <ArrowRight size={16} />}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-gray-500 text-[12px]">or continue with</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    type="button"
                    onClick={() => alert("Continuing with Google...")}
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg py-2.5 text-white text-[13.5px] transition"
                  >
                    
                    <svg width="16" height="16" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 5.3 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"/>
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 7.3 29.5 5 24 5c-7.6 0-14.1 4.3-17.7 10.7z"/>
                      <path fill="#4CAF50" d="M24 45c5.4 0 10.3-2.1 14-5.5l-6.5-5.4C29.6 35.8 26.9 37 24 37c-5.3 0-9.7-3.5-11.3-8.3l-6.6 5.1C9.8 40.6 16.4 45 24 45z"/>
                      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3.1 5.2-5.8 6.7l6.5 5.4C39.5 37.8 43 32.4 43 24c0-1.4-.1-2.7-.4-3.5z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Continuing with Apple...")}
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg py-2.5 text-white text-[13.5px] transition"
                  >
                    <svg width="14" height="16" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    Apple
                  </button>
                </div>

                <p className="text-center text-gray-400 text-[13px]">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-purple-400 font-medium hover:underline">
                    Create account →
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
