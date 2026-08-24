import React from "react";
import {
  Shield,
  Sparkles,
  Star,
  ChevronRight,
  FileText,
  Truck,
  ShieldCheck,
  DollarSign,
  Lock,
  BatteryCharging,
  Disc,
  Fuel,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    icon: Shield,
    iconBg: "bg-blue-500/15 text-blue-400",
    name: "Essential",
    price: "$349",
    highlighted: false,
  },
  {
    icon: Sparkles,
    iconBg: "bg-white/15 text-white",
    name: "Premium Plus",
    price: "$549",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    icon: Star,
    iconBg: "bg-amber-500/15 text-amber-400",
    name: "Ultimate",
    price: "$749",
    highlighted: false,
  },
];

const steps = [
  {
    icon: FileText,
    color: "bg-blue-500",
    number: "1",
    title: "Choose Plan",
    description: "Pick a plan that suits your needs.",
  },
  {
    icon: Truck,
    color: "bg-pink-500",
    number: "2",
    title: "Register Vehicle",
    description: "Provide vehicle details and get covered.",
  },
  {
    icon: ShieldCheck,
    color: "bg-orange-500",
    number: "3",
    title: "Drive with Confidence",
    description: "We've got you covered on every mile.",
  },
  {
    icon: DollarSign,
    color: "bg-emerald-500",
    number: "4",
    title: "Claim & Support",
    description: "Raise a claim and get quick assistance.",
  },
];

const assistance = [
  { icon: Truck, color: "text-emerald-400", label: "Towing Assistance" },
  { icon: BatteryCharging, color: "text-blue-400", label: "Battery Assistance" },
  { icon: Disc, color: "text-amber-400", label: "Flat Tire Assistance" },
  { icon: Fuel, color: "text-orange-400", label: "Fuel Delivery" },
];


const cardShell =
  "bg-[#111827]/70 border border-white/[0.06] rounded-lg p-6";

export default function WarrantyPanels() {
  const navigate = useNavigate();
const handleExploreWarrantyPlans = () => {
  navigate('/warranty-plans');
}
  return (
    <section className="w-full h-auto  bg-[#0b1220] py-18 lg:h-[700px] flex items-center justify-center px-6 md:px-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 items-stretch h-[500px]">
        {/* Warranty Plans */}
        <div className={`${cardShell} h-[460px] w-[460px] flex flex-col gap-6`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-xl font-bold">Our Warranty Plans</h3>
            <a
              href="/warranty-plans"
              className="text-orange-400 text-xs font-semibold flex items-center gap-1 hover:text-orange-300 transition-colors shrink-0"
            >
              View All Plans <ArrowRight size={12} />
            </a>
          </div>

          <div className="flex flex-col gap-4 ">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <button
                  onClick={handleExploreWarrantyPlans}
                  key={plan.name}
                  className={`relative rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.01] ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600"
                      : "bg-white/[0.03] border border-white/[0.06]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-[10px] font-bold tracking-wide px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      plan.highlighted ? "bg-white/15 text-white" : plan.iconBg
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{plan.name}</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        plan.highlighted ? "text-indigo-100" : "text-slate-400"
                      }`}
                    >
                      Starting from <span className="font-semibold">{plan.price}</span> / Year
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className={plan.highlighted ? "text-white" : "text-slate-500"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className={`${cardShell} h-[460px] w-[500px] flex flex-col justify-between`}>
          <h3 className="text-white text-xl font-bold mb-1">How It Works</h3>
          <p className="text-slate-400 text-sm mb-8">Simple. Fast. Reliable.</p>

          <div className="relative flex items-start justify-between mb-8 px-1">
            <div className="absolute top-6 left-6 right-6 border-t border-dashed border-white/15 -z-0" />
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center w-1/4 px-1">
                  <div className="relative mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center relative z-10`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0b1220] border-2 border-[#111827] text-white text-[10px] font-bold flex items-center justify-center z-20"
                      style={{ backgroundColor: "#1e293b" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <p className="text-white text-xs font-semibold mb-1 leading-tight">
                    {step.title}
                  </p>
                  <p className="text-slate-500 text-[11px] leading-snug">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center gap-4 ">
            <div className="w-11 h-11 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
              <Lock size={17} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">100% Secure Transactions</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Your data and payments are always safe with us.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-blue-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck size={17} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Roadside Assistance */}
        <div className={`${cardShell} h-[460px] w-[400px] flex flex-col justify-between`}>
          <h3 className="text-white text-xl font-bold mb-1">Roadside Assistance</h3>
          <p className="text-slate-400 text-sm mb-6">We're here for you 24/7.</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {assistance.map(({ icon: Icon, color, label }) => (
              <div
                key={label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                <Icon size={20} className={color} />
                <p className="text-white text-xs font-semibold leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <button 
          onClick={()=>alert('Coming Soon')}
           className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            
            <Phone size={15} />
            Request Assistance
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}