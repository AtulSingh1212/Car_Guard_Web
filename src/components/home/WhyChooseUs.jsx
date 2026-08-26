import React from "react";
import { Shield, Building2, Headphones, FileEdit } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Wide range of plans tailored to your specific vehicle needs.",
  },
  {
    icon: Building2,
    title: "Trusted Repair Network",
    description: "Access 1,500+ trusted repair partners nationwide.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "We're here for you, anytime, anywhere for any concerns.",
  },
  {
    icon: FileEdit,
    title: "Hassle-Free Claims",
    description: "Quick, easy and transparent claim settlement process.",
  },
];

const stats = [
  { value: "10K+", label: "HAPPY CUSTOMERS", color: "text-sky-400" },
  { value: "25K+", label: "ACTIVE CONTRACTS", color: "text-pink-400" },
  { value: "1.5K+", label: "REPAIR PARTNERS", color: "text-orange-400" },
  { value: "98%", label: "CLAIMS SETTLED", color: "text-emerald-400" },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full relative overflow-hidden border border-white/10 lg:h-[500px] h-auto flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(6,10,25,0.94) 20%, rgba(6,10,25,0.75) 60%, rgba(6,10,25,0.55) 100%), url('/assets/images/why-choose-us-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-15 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
        {/* Left: heading + features */}
        <div className=" h-[400px] w-[600px] flex flex-col justify-center items-start">
          <h2 className="text-white text-3xl p-2 md:text-4xl font-bold mb-8">
            Why Choose CarGuard?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 h-[200px] w-[500px]">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-transparent border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-orange-400" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1 leading-snug">
                    {title}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stats card */}
        <div className="bg-[#0d1420]/80 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-9">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map(({ value, label, color }) => (
              <div key={label}>
                <p className={`text-3xl font-extrabold mb-1 ${color}`}>{value}</p>
                <p className="text-slate-400 text-[11px] font-medium tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}