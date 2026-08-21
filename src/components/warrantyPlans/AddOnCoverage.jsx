import {
    CircleHelp,
    KeyRound,
    ShieldCheck,
    Sparkles,
    Check,
    Smartphone,
    ArrowRight,
  } from "lucide-react";
import { useNavigate } from "react-router-dom";
  
  const addOns = [
    {
      id: 1,
      title: "Tire & Wheel",
      price: "$99 / Year",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Key Replacement",
      price: "$49 / Year",
      icon: KeyRound,
    },
    {
      id: 3,
      title: "Dent Repair",
      price: "$79 / Year",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Glass Protection",
      price: "$69 / Year",
      icon: Check,
    },
  ];
  
  const AddOnCoverage = () => {
    const navigate = useNavigate();
    return (
      <section className="w-full bg-[#111a2e] px-6 py-12 md:px-10 lg:px-[8%]">
  
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Add-On Coverage (Optional)
          </h2>
  
          <p className="mt-2 text-sm text-slate-400">
            Enhance your plan with additional protection for specific needs.
          </p>
        </div>
  
        {/* Add-on cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addon) => {
            const Icon = addon.icon;
  
            return (
              <div
                key={addon.id}
                className="
                  flex h-[74px]
                  items-center gap-3
                  rounded-xl
                  border border-white/[0.08]
                  bg-[#111a2e]
                  px-4
                  transition-all duration-300
                  hover:border-purple-500/40
                  hover:bg-[#172137]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-md
                    bg-[#1d2940]
                    text-purple-500
                  "
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
  
                {/* Content */}
                <div>
                  <h3 className="text-xs font-medium text-white">
                    {addon.title}
                  </h3>
  
                  <p className="mt-[2px] text-[10px] text-slate-400">
                    {addon.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
  
        {/* =====================================================
            QUOTE / EXPERT BANNER
        ====================================================== */}
  
        <div
          className="
            mt-14
            flex
            flex-col
            gap-6
            rounded-xl
            border border-purple-500/30
            bg-gradient-to-r
            from-[#39318f]
            to-[#24205f]
            px-9
            py-9
  
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
  
          {/* Left */}
          <div className="flex items-center gap-5">
  
            {/* Question icon */}
            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-lg
                border border-white/30
                bg-white/15
                text-white
              "
            >
              <CircleHelp size={24} />
            </div>
  
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Not Sure Which Plan is Right for You?
              </h3>
  
              <p className="mt-1 text-xs text-slate-300">
                Our experts are here to help you find the perfect coverage
                for your vehicle.
              </p>
            </div>
          </div>
  
          {/* Buttons */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
  
            {/* Quote */}
            <button
              onClick={()=>navigate('/home')}
              type="button"
              className="
                flex h-12
                items-center justify-center
                gap-1
                hover:cursor-pointer
                hover:bg-slate-500
                rounded-lg
                bg-white
                px-6
                text-xs
                font-semibold
                text-[#171c2d]
                transition
                hover:bg-slate-100
              "
            >
              Get My Quote
              <ArrowRight size={15} />
            </button>
  
            {/* Expert */}
            <button
              onClick={()=>alert('Coming Soon')}
              type="button"
              className="
                flex h-11
                items-center justify-center
                gap-2
                rounded-lg
                border border-white/20
                bg-white/10
                px-6
                text-xs
                font-medium
                text-white
                transition
                hover:bg-white/20
              "
            >
              <Smartphone size={14} />
              Talk to an Expert
            </button>
  
          </div>
        </div>
  
      </section>
    );
  };
  
  export default AddOnCoverage;