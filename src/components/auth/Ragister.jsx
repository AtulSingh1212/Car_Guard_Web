import React, { useState } from "react";
import {
  ShieldCheck,
  User,
  Mail,
  Phone,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Clock3,
  Headphones,
  Apple,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({
  onSubmit,
  onLogin,
  onForgotPassword,
  onGoogleSignup,
  onAppleSignup,
  backgroundImage = "/images/carguard-bg.jpg",
}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Handle input
  // -----------------------------
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (errors.form) {
      setErrors((prev) => ({
        ...prev,
        form: "",
      }));
    }
  };

  // -----------------------------
  // Validation
  // -----------------------------
  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^[+]?[0-9\s\-()]{7,20}$/;

    // First name
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (form.firstName.trim().length < 2) {
      newErrors.firstName =
        "First name must be at least 2 characters";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName =
        "Please enter a valid first name";
    }

    // Last name
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (form.lastName.trim().length < 2) {
      newErrors.lastName =
        "Last name must be at least 2 characters";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName =
        "Please enter a valid last name";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email =
        "Please enter a valid email";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone =
        "Please enter a valid phone number";
    }

    // Password
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password =
        "Password must contain an uppercase letter";
    } else if (!/[a-z]/.test(form.password)) {
      newErrors.password =
        "Password must contain a lowercase letter";
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password =
        "Password must contain a number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Submit
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;
    alert("Account created successfully please login to continue");
    navigate("/login");
    try {
      setLoading(true);

      if (onSubmit) {
      ;
        await onSubmit(form);
      }
    } catch (error) {
      setErrors({
        form:
          error?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081225]/95 via-[#0b1529]/85 to-[#10182b]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1180px] items-center px-5 py-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_335px] lg:gap-16">

          {/* =====================================
              LEFT SIDE
          ====================================== */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <span className="mb-5 w-fit rounded-full border border-purple-500/30 bg-purple-600/20 px-3 py-1 text-[10px] text-purple-200">
              Join CarGuard
            </span>

            {/* Heading */}
            <h1 className="max-w-[500px] text-[48px] font-bold leading-[1.05] tracking-[-2px] sm:text-[55px]">
              Start Your
              <span className="block bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[400px] text-[13px] leading-6 text-slate-300">
              Create an account to manage your warranty,
              track claims instantly, and enjoy ultimate
              peace of mind on the road.
            </p>

            {/* Divider */}
            <div className="my-8 max-w-[410px] border-t border-slate-700/60" />

            {/* Features */}
            <div className="grid max-w-[550px] grid-cols-1 gap-6 sm:grid-cols-3">
              <Feature
                icon={<ShieldCheck size={17} />}
                title="Secure & Trusted"
                description="Your data is always protected"
              />

              <Feature
                icon={<Clock3 size={17} />}
                title="Quick & Easy"
                description="Manage everything in just a few clicks"
              />

              <Feature
                icon={<Headphones size={17} />}
                title="24/7 Access"
                description="Your account, anytime, anywhere"
              />
            </div>
          </div>

          {/* =====================================
              FORM CARD
          ====================================== */}
          <div className="w-full max-w-[400px] justify-self-center lg:justify-self-end">

            <div className="rounded-xl border lg:w-[500px] border-slate-700/60 bg-[#1b2438]/95 p-6 shadow-2xl backdrop-blur-xl">

              {/* Header */}
              <div className="mb-6 flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ">
                  <img src="assets/images/logo.png" alt="logo" className="w-full h-full object-cover" />
                </div>

                <div>
                  <h2 className="text-[25px] font-semibold">
                    Create Account 
                  </h2>

                  <p className="mt-1 text-[16px] text-slate-400">
                    Enter your details to get started.
                  </p>
                </div>
              </div>

              {/* General Error */}
              {errors.form && (
                <div className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-[10px] text-red-400">
                  {errors.form}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
              >
                {/* First + Last Name */}
                <div className="grid grid-cols-2 gap-4 ">
                  <Input
                  className="text-[18px] h-[90px] px-4"
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    error={errors.firstName}
                    onChange={handleChange}
                    icon={<User size={18} />}
                    
                  />

                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    error={errors.lastName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="mt-4 text-[22px]">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                    icon={<Mail size={14} />}
                  />
                </div>

                {/* Phone */}
                <div className="mt-4">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    error={errors.phone}
                    onChange={handleChange}
                    icon={<Phone size={14} />}
                  />
                </div>

                {/* Password */}
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[10px] font-medium text-slate-300">
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={onForgotPassword}
                      className="text-[9px] text-purple-400 hover:text-purple-300"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={14}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Create your password"
                      value={form.password}
                      onChange={handleChange}
                      className={`h-[34px] w-full rounded-md border bg-slate-50 pl-9 pr-9 text-[11px] text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 ${
                        errors.password
                          ? "border-red-400 focus:ring-red-400/20"
                          : "border-slate-300 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((v) => !v)
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500"
                    >
                      {showPassword ? (
                        <EyeOff size={14} />
                      ) : (
                        <Eye size={14} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-[9px] text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember */}
                <div className="mb-5 mt-4 flex items-center justify-between">
                  <label className="flex items-center gap-1.5 text-[9px] text-slate-400">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChange}
                      className="h-3 w-3 accent-purple-500"
                    />
                    Remember Me
                  </label>

                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-[9px] text-slate-400"
                  >
                    Need Help?{" "}
                    <span className="text-purple-400">
                      Contact Support
                    </span>
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[42px] cursor-pointer w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-500 text-[18px] 
                  font-medium transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  {loading ? (
                    <>
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="relative my-7">
                  <div className="border-t border-slate-700" />

                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#1b2438] px-2 text-[9px] text-slate-500">
                    or continue with
                  </span>
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={onGoogleSignup}
                    className="flex h-[48px] px-4 items-center justify-center gap-2 rounded-md border border-slate-600 bg-slate-800/50 text-[17px] text-slate-200 transition hover:bg-slate-700"
                  >
                    <GoogleIcon size={21}/>
                    Google
                  </button>

                  <button
                    type="button"
                    onClick={onAppleSignup}
                    className="flex h-[48px] px-4 items-center justify-center gap-2 rounded-md border border-slate-600 bg-slate-800/50 text-[17px] text-slate-200 transition hover:bg-slate-700"
                  >
                    <Apple size={18} />
                    Apple
                  </button>
                </div>

                {/* Login */}
                <p className="mt-6 text-center text-[14px] text-slate-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    <Link to="/login">
                    Login
                    <ArrowRight
                      size={12}
                      className="ml-0.5 inline"
                    />
                    </Link>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   REUSABLE INPUT
========================================= */

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  icon,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10px] font-medium text-slate-300"
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500">
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-[34px] w-full rounded-md border bg-slate-50 ${
            icon ? "pl-9" : "px-3"
          } text-[11px] text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 ${
            error
              ? "border-red-400 focus:ring-red-400/20"
              : "border-slate-300 focus:border-purple-500 focus:ring-purple-500/20"
          }`}
        />
      </div>

      {error && (
        <p className="mt-1 text-[9px] leading-tight text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

/* =========================================
   FEATURE
========================================= */

const Feature = ({
  icon,
  title,
  description,
}) => (
  <div className="flex gap-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-purple-300">
      {icon}
    </div>

    <div>
      <p className="text-[10px] font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 max-w-[100px] text-[8px] leading-3.5 text-slate-500">
        {description}
      </p>
    </div>
  </div>
);

/* =========================================
   GOOGLE ICON
========================================= */

const GoogleIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
  >
    <path
      fill="#4285F4"
      d="M21.8 12.23c0-.7-.06-1.38-.18-2.03H12v3.84h5.49a4.69 4.69 0 01-2.04 3.08v2.55h3.3c1.93-1.78 3.05-4.4 3.05-7.44z"
    />
    <path
      fill="#34A853"
      d="M12 22c2.76 0 5.07-.91 6.76-2.46l-3.3-2.55c-.92.62-2.1.99-3.46.99-2.66 0-4.92-1.8-5.73-4.22H2.86v2.63A10.2 10.2 0 0012 22z"
    />
    <path
      fill="#FBBC05"
      d="M6.27 13.76A6.1 6.1 0 015.95 12c0-.61.11-1.2.32-1.76V7.61H2.86A10 10 0 002 12c0 1.61.39 3.13 1.08 4.39l3.19-2.63z"
    />
    <path
      fill="#EA4335"
      d="M12 6.02c1.5 0 2.85.52 3.91 1.54l2.93-2.93C17.07 2.99 14.76 2 12 2a10.2 10.2 0 00-9.14 5.61l3.41 2.63C7.08 7.82 9.34 6.02 12 6.02z"
    />
  </svg>
);

export default Register;
