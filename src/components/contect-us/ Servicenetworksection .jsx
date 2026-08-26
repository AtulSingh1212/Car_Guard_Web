import { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Wrench,
  Phone,
  ArrowRight,
  Lock,
  Search,
  User,
} from "lucide-react";

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
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: null,
      }));
    }
  }

  function handleSubmit() {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Enter your name";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Enter a phone number";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Enter your email";
    }

    if (!form.department) {
      nextErrors.department = "Select a department";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);

    alert("Will Connect You Soon");

    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 2500);
  }

  return (
    <section
      className="
        w-full
        bg-[#111a2d]
        px-4
        py-10
        font-sans
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1480px]
          grid-cols-1
          items-start
          gap-8
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-10
          xl:gap-12
        "
      >
        {/* ========================================= */}
        {/* LEFT COLUMN */}
        {/* ========================================= */}

        <div className="min-w-0">
          {/* Heading */}
          <h1
            className="
              mb-3
              text-3xl
              font-bold
              tracking-[-0.3px]
              text-white
              sm:text-4xl
              md:text-[42px]
              lg:text-[48px]
            "
          >
            Our nationwide service network
          </h1>

          {/* Description */}
          <p
            className="
              mb-8
              max-w-[600px]
              text-[15px]
              leading-[1.6]
              text-[#a9abbd]
              sm:text-base
              lg:text-[17.5px]
            "
          >
            Wherever the road takes you, CarGuard has you covered. Our
            trusted network of certified repair facilities is always ready
            to help.
          </p>

          {/* ========================================= */}
          {/* FEATURES */}
          {/* ========================================= */}

          <div className="mb-8 flex flex-col gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3.5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#2a2d3d]
                      bg-[#1d2030]
                    "
                  >
                    <Icon
                      size={16}
                      className="text-[#c7c9d6]"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3
                      className="
                        mb-[3px]
                        text-[14px]
                        font-semibold
                        text-[#e8e8ec]
                        sm:text-[15px]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        text-[12px]
                        leading-[1.5]
                        text-[#8b8ea0]
                        sm:text-[13px]
                      "
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================= */}
          {/* MAP CARD */}
          {/* ========================================= */}

          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#2a2d3d]
              bg-[#0f111c]
            "
          >
            {/* Map Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#22243330]
                px-3.5
                py-2.5
              "
            >
              {/* Brand */}
              <div className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  className="text-[#8b8ff0]"
                />

                <span
                  className="
                    text-[12px]
                    font-semibold
                    text-[#c7c9d6]
                  "
                >
                  CarGuard
                </span>
              </div>

              {/* Right icons */}
              <div className="flex items-center gap-2.5">
                <Search
                  size={14}
                  className="text-[#7d8092]"
                />

                <div
                  className="
                    flex
                    h-[22px]
                    w-[22px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2a2d3d]
                  "
                >
                  <User
                    size={12}
                    className="text-[#9698a8]"
                  />
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="
                relative
                h-[200px]
                overflow-hidden
                bg-[#12141f]
                sm:h-[220px]
                lg:h-[210px]
              "
            >
              {/* Label */}
              <div
                className="
                  absolute
                  left-3
                  top-2.5
                  z-10
                  rounded
                  bg-black/50
                  px-2
                  py-[3px]
                  text-[11px]
                  font-semibold
                  text-[#e8e8ec]
                  backdrop-blur-sm
                "
              >
                Contact & service network
              </div>

              {/* Center text */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-sm
                  text-[#5c5f70]
                "
              >
                Map visualization area
              </div>

              {/* Map dots */}
              {Array.from({ length: 45 }).map((_, i) => {
                const left =
                  (Math.sin(i * 12.9898) * 43758.5453) % 1;

                const top =
                  (Math.sin(i * 78.233) * 12543.234) % 1;

                const l =
                  5 + Math.abs(left) * 90;

                const t =
                  5 + Math.abs(top) * 90;

                return (
                  <span
                    key={i}
                    className="
                      absolute
                      h-1
                      w-1
                      rounded-full
                      bg-purple-500
                      opacity-60
                    "
                    style={{
                      left: `${l}%`,
                      top: `${t}%`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN - FORM */}
        {/* ========================================= */}

        <div
          className="
            w-full
            rounded-2xl
            border
            border-[#2a2d3d]
            bg-[#141625]
            p-5
            sm:p-6
            lg:p-7
          "
        >
          {/* Form Header */}
          <div className="mb-2 flex items-center gap-3">
            <div
              className="
                flex
                h-[38px]
                w-[38px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#2a2d3d]
              "
            >
              <Phone
                size={16}
                className="text-[#e8e8ec]"
              />
            </div>

            <h2
              className="
                text-lg
                font-bold
                text-white
                sm:text-[19px]
              "
            >
              Request a callback
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              mb-5
              text-[12px]
              leading-[1.55]
              text-[#8b8ea0]
              sm:text-[13px]
            "
          >
            Prefer to talk later? Schedule a callback at your convenience and
            we'll reach out to you.
          </p>

          {/* ========================================= */}
          {/* FORM */}
          {/* ========================================= */}

          <div className="flex flex-col gap-3">
            {/* Name + Phone */}
            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full name *"
                  value={form.fullName}
                  onChange={(e) =>
                    updateField(
                      "fullName",
                      e.target.value
                    )
                  }
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#171926]
                    px-3.5
                    py-[11px]
                    text-[13px]
                    text-[#e8e8ec]
                    outline-none
                    placeholder:text-[#6c6f80]
                    focus:border-[#5b8def]
                    ${
                      errors.fullName
                        ? "border-[#e24b4a]"
                        : "border-[#2a2d3d]"
                    }
                  `}
                />

                {errors.fullName && (
                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-[#e24b4a]
                    "
                  >
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value
                    )
                  }
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#171926]
                    px-3.5
                    py-[11px]
                    text-[13px]
                    text-[#e8e8ec]
                    outline-none
                    placeholder:text-[#6c6f80]
                    focus:border-[#5b8def]
                    ${
                      errors.phone
                        ? "border-[#e24b4a]"
                        : "border-[#2a2d3d]"
                    }
                  `}
                />

                {errors.phone && (
                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-[#e24b4a]
                    "
                  >
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Email + Department */}
            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={form.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#171926]
                    px-3.5
                    py-[11px]
                    text-[13px]
                    text-[#e8e8ec]
                    outline-none
                    placeholder:text-[#6c6f80]
                    focus:border-[#5b8def]
                    ${
                      errors.email
                        ? "border-[#e24b4a]"
                        : "border-[#2a2d3d]"
                    }
                  `}
                />

                {errors.email && (
                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-[#e24b4a]
                    "
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Department */}
              <div>
                <select
                  value={form.department}
                  onChange={(e) =>
                    updateField(
                      "department",
                      e.target.value
                    )
                  }
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#171926]
                    px-3.5
                    py-[11px]
                    text-[13px]
                    outline-none
                    focus:border-[#5b8def]
                    ${
                      form.department
                        ? "text-[#e8e8ec]"
                        : "text-[#6c6f80]"
                    }
                    ${
                      errors.department
                        ? "border-[#e24b4a]"
                        : "border-[#2a2d3d]"
                    }
                  `}
                >
                  <option value="">
                    Preferred department *
                  </option>

                  <option value="claims">
                    Claims
                  </option>

                  <option value="warranty">
                    Warranty plans
                  </option>

                  <option value="roadside">
                    Roadside assistance
                  </option>

                  <option value="billing">
                    Billing
                  </option>
                </select>

                {errors.department && (
                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-[#e24b4a]
                    "
                  >
                    {errors.department}
                  </span>
                )}
              </div>
            </div>

            {/* Date + Time */}
            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  updateField(
                    "date",
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-lg
                  border
                  border-[#2a2d3d]
                  bg-[#171926]
                  px-3.5
                  py-[11px]
                  text-[13px]
                  text-[#e8e8ec]
                  outline-none
                  focus:border-[#5b8def]
                "
              />

              <input
                type="time"
                value={form.time}
                onChange={(e) =>
                  updateField(
                    "time",
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-lg
                  border
                  border-[#2a2d3d]
                  bg-[#171926]
                  px-3.5
                  py-[11px]
                  text-[13px]
                  text-[#e8e8ec]
                  outline-none
                  focus:border-[#5b8def]
                "
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="How can we help you?"
              value={form.message}
              onChange={(e) =>
                updateField(
                  "message",
                  e.target.value
                )
              }
              rows={3}
              className="
                w-full
                resize-y
                rounded-lg
                border
                border-[#2a2d3d]
                bg-[#171926]
                px-3.5
                py-[11px]
                text-[13px]
                leading-5
                text-[#e8e8ec]
                outline-none
                placeholder:text-[#6c6f80]
                focus:border-[#5b8def]
              "
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className={`
                mt-1
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[10px]
                border-none
                px-5
                py-[13px]
                text-sm
                font-semibold
                text-white
                transition
                duration-200
                ${
                  submitted
                    ? "bg-[#2f9e5f]"
                    : "bg-[linear-gradient(90deg,#e0663f_0%,#a855f7_100%)] hover:brightness-110"
                }
              `}
            >
              {submitted
                ? "Callback requested"
                : "Request callback"}

              {!submitted && (
                <ArrowRight size={16} />
              )}
            </button>

            {/* Privacy */}
            <div
              className="mt-1 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7d8092] sm:text-xs "
            >
              <Lock size={12} />

              <span>
                We respect your privacy. Your information
                is safe with us.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
