import React from "react";
import { ShieldCheck, ArrowRight, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CtaBenner=() =>{
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#0b1220] py-10 px-6 md:px-10 mt-10">
      <div
        className="max-w-7xl mx-auto rounded-[28px] px-6 py-16 md:py-20 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 160% at 20% 20%, #4c3d9e 0%, #2c2560 45%, #191333 100%)",
        }}
      >
        <div className="relative flex flex-col items-center max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6">
            <ShieldCheck size={26} className="text-indigo-700" strokeWidth={2.5} />
          </div>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            We're Here for Every Mile Ahead
          </h2>

          <p className="text-indigo-200/80 text-[15px] leading-relaxed mb-8">
            Join thousands of drivers who trust CarGuard for complete peace of
            mind. Experience protection that moves with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
             onClick={()=>navigate('/warranty-plans')}
             className="flex items-center gap-2 cursor-pointer bg-white text-slate-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              Explore Warranty Plans
              <ArrowRight size={16} />
            </button>
            <button
            
             className="flex items-center cursor-pointer gap-2 border border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              <PlayCircle size={17} />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBenner