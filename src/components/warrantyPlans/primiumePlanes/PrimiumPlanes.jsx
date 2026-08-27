
import {
  CalendarDays,
  Gauge,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PremiumPlan() {
  const navigate = useNavigate();
  const selectedPlan = useSelector((state)=>state.plan.selectedPlan);
  console.log(selectedPlan);

  if(!selectedPlan){
     return( <div className="flex items-center justify-center h-full w-full text-2xl font-bold text-white">No plan selected</div>)
    }
  return (
    <section className="relative h-[900px] lg:h-[455px]  w-full overflow-hidden ">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/car-bg.jpg')",
        }}
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-[#071226]/80" /> */}

      {/* Extra gradient */}
      <div className="absolute inset-0 " />

      {/* Main container */}
      <div className="relative mx-auto  flex max-w-[1380px] items-center px-6 py-10">
        <div
          className="w-full w-[1480px] h-full lg:h-[455px]
            rounded-lg
            border border-white/[0.09]
            bg-white/[0.07]
            px-6 py-6
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            backdrop-blur-md
            sm:px-8 sm:py-6
            
          "
        >
          <div className="flex mt-10 flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Content */}
            <div className="flex-1">
              {/* Badge */}
              <div
                className="
                  mb-2 inline-flex
                  rounded-md
                  bg-gradient-to-r from-orange-500 to-purple-600
                  px-3 py-1
                  text-[10px] font-medium text-white
                "
              >
                Most Popular
              </div>

              {/* Title */}
              <h2 className="lg:text-[62px] font-bold leading-[1.1] tracking-[-1.5px] text-[#d9e1ff] sm:text-[48px]">
                {selectedPlan?.name}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-[#c0c6d8]">
                Enhanced coverage for complete confidence.
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-2">
                <span
                  className="
                    bg-gradient-to-r
                    from-orange-500
                    via-pink-500
                    to-purple-500
                    bg-clip-text
                    text-[30px]
                    font-bold
                    leading-none
                    text-transparent
                  "
                >
                  {selectedPlan?.price}
                </span>

                <span className="text-xs text-[#c0c6d8]">
                  / Year
                </span>
              </div>
              
              {/* Plan Details */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#bfc5d5]">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={15}
                    strokeWidth={1.8}
                    className="text-orange-500"
                  />
                  <span>5 Years</span>
                </div>

                <span className="text-[#707789]">•</span>

                <div className="flex items-center gap-2">
                  <Gauge
                    size={16}
                    strokeWidth={1.8}
                    className="text-orange-400"
                  />
                  <span>100,000 Miles</span>
                </div>
              </div>

              {/* Button */}
              <button
                className="
                  mt-6
                  inline-flex
                  h-11
                  items-center
                  gap-2
                  rounded-md
                  bg-gradient-to-r
                  from-orange-500
                  to-purple-600
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_8px_25px_rgba(168,85,247,0.3)]
                "
                onClick={() => navigate(`/warranty-plans/add-vehicle`)}
              >
                Purchase This Plan

                <ArrowRight size={17} strokeWidth={2} />
              </button>
            </div>

            {/* Right Coverage Card */}
            <div
              className="
                w-full
                rounded-md
                border border-white/[0.10]
                bg-[#111a2d]/50
                px-5 py-5
                lg:min-w-[288px]
                max-w-[400px]
                h-[260px]
                flex flex-col justify-between items-start
              "
            >
              <h3 className="text-[24px] font-semibold text-[#dce4ff]">
                Coverage Overview
              </h3>

              <div className="mt-4 space-y-3 h-[180px] flex flex-col justify-around items-start">
                <CoverageItem>
                  Everything in Essential Plan
                </CoverageItem>

                <CoverageItem>
                  Comprehensive Electrical System
                </CoverageItem>

                <CoverageItem>
                  Complete Air Conditioning
                </CoverageItem>

                <CoverageItem>
                  24/7 Priority Support Access
                </CoverageItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageItem({ children }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2
        size={18}
        strokeWidth={2}
        className="mt-[2px] shrink-0 text-orange-500"
      />

      <span className="text-[18px] leading-4 text-[#b9bfce]">
        {children}
      </span>
    </div>
  );
}