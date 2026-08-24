import React from "react";
import { Shield, Sparkles, Star, Check, ArrowRight } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedPlan } from "../../redux/slices/planSlice";

const plans = [
  {
    icon: Shield,
    iconBg: "bg-blue-500/20 text-blue-400",
    badge: "Best Value",
    name: "Essential",
    tagline: "Reliable protection for everyday peace of mind.",
    price: "$349",
    priceColor: "text-white",
    features: [
      { text: "24/7 Roadside Assistance", included: true },
      { text: "Engine & Transmission", included: true },
      { text: "Air Conditioning Coverage", included: false },
      { text: "Electrical System", included: false },
    ],
    highlighted: false,
  },
  {
    icon: Sparkles,
    iconBg: "bg-white/15 text-white",
    badge: "Most Popular",
    name: "Premium Plus",
    tagline: "Enhanced coverage for complete confidence.",
    price: "$549",
    priceColor: "bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent",
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Electrical System Coverage", included: true },
      { text: "Dent and Body Damage Coverage", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
    highlighted: true,
  },
  {
    icon: Star,
    iconBg: "bg-amber-500/20 text-amber-400",
    name: "Ultimate",
    tagline: "Our most comprehensive coverage for total protection.",
    price: "$749",
    priceColor: "text-white",
    features: [
      { text: "Everything in Premium Plus", included: true },
      { text: "High-Tech Component Coverage", included: true },
      { text: "Zero Deductible (Optional)", included: true },
      { text: "Nationwide VIP Support", included: true },
    ],
    highlighted: false,
  },
];

// export default function PricingCards() {



//   const navigate = useNavigate();
//   return (
//     <section className="relative w-full h-[700px] bg-[#0b1220] py-16 px-6 md:px-10 flex items-center justify-center">
//       <div className="absolute top-6 max-w-8xl h-[600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 ">
//         {plans.map((plan) => {
//           const Icon = plan.icon;
//           return (
//             <div
//               key={plan.name}
//               className={`relative w-[450px] h-[550px] rounded-4xl p-7 flex flex-col ${
//                 plan.highlighted
//                   ? "bg-gradient-to-b from-violet-700/70 to-indigo-900/70 border border-violet-400/30 md:-mt-3 md:mb-[-0.75rem]"
//                   : "bg-white/[0.03] border border-white/10"
//               }`}
//             >
//               {plan.highlighted && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-md">
//                   {plan.badge}
//                 </span>
//               )}
//               {!plan.highlighted && plan.badge && (
//                 <span className="absolute top-6 right-6 bg-indigo-500/15 text-indigo-300 text-[11px] font-semibold px-3 py-1 rounded-full">
//                   {plan.badge}
//                 </span>
//               )}

//               <div
//                 className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.iconBg}`}
//               >
//                 <Icon size={20} strokeWidth={2} />
//               </div>

//               <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
//               <p
//                 className={`text-sm leading-relaxed mb-6 ${
//                   plan.highlighted ? "text-indigo-100" : "text-slate-400"
//                 }`}
//               >
//                 {plan.tagline}
//               </p>

//               <div className="mb-7 flex items-baseline gap-1">
//                 <span className={`text-4xl font-extrabold ${plan.priceColor}`}>
//                   {plan.price}
//                 </span>
//                 <span
//                   className={`text-sm ${
//                     plan.highlighted ? "text-indigo-200" : "text-slate-400"
//                   }`}
//                 >
//                   / Year
//                 </span>
//               </div>

//               <ul className="flex flex-col gap-3 mb-8 flex-1">
//                 {plan.features.map((f) => (
//                   <li key={f.text} className="flex items-center gap-2.5">
//                     {f.included ? (
//                       <Check size={15} className="text-violet-400 shrink-0" strokeWidth={2.5} />
//                     ) : (
//                       <span className="w-[15px] shrink-0" />
//                     )}
//                     <span
//                       className={`text-sm ${
//                         f.included
//                           ? plan.highlighted
//                             ? "text-white"
//                             : "text-slate-200"
//                           : "text-slate-600"
//                       }`}
//                     >
//                       {f.text}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 onClick={() => navigate(`/warranty-plans/premium`)}
//                 className={`w-full font-semibold text-sm py-3 rounded-lg hover:bg-transparent cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${
//                   plan.highlighted
//                     ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
//                     : "bg-white/10 text-white"
//                 }`}
//               >
//                 View Plan Details <ArrowRight size={15} />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

export default function PricingCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectPlan = (plan)=>{
    dispatch(setSelectedPlan(plan));
    navigate(`/warranty-plans/premium`);
  }

  return (
    <section className="relative w-full h-[1900px] md:h-[1900px] lg:h-[700px] bg-[#0b1220]  px-6 md:px-10 flex  justify-center">
      <div className=" w-full h-[1800px]  sm:h-[1700px] lg:h-[1200px] p-2 flex mt-6 justify-center flex-wrap gap-4 ">
        {plans.map((plan) => {
          const Icon = plan.icon; 
          return (
            <div
              key={plan.name}
              className={`relative w-[450px] h-[550px] rounded-4xl p-7 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-violet-700/70 to-indigo-900/70 border border-violet-400/30 md:-mt-3 md:mb-[-0.75rem]"
                  : "bg-white/[0.03] border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              )}
              {!plan.highlighted && plan.badge && (
                <span className="absolute top-6 right-6 bg-indigo-500/15 text-indigo-300 text-[11px] font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.iconBg}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>

              <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.highlighted ? "text-indigo-100" : "text-slate-400"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mb-7 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.priceColor}`}>
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-indigo-200" : "text-slate-400"
                  }`}
                >
                  / Year
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5">
                    {f.included ? (
                      <Check size={15} className="text-violet-400 shrink-0" strokeWidth={2.5} />
                    ) : (
                      <span className="w-[15px] shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        f.included
                          ? plan.highlighted
                            ? "text-white"
                            : "text-slate-200"
                          : "text-slate-600"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={()=>handleSelectPlan(plan)}
                className={`w-full font-semibold text-sm py-3 rounded-lg hover:bg-transparent cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                    : "bg-white/10 text-white"
                }`}
              >
                View Plan Details <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}