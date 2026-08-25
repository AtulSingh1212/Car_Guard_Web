import { Car, ShieldCheck, Pencil, Check, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const planFeatures = [
  "Powertrain Protection",
  "Electrical Systems",
  "24/7 Roadside Assistance",
  "$0 Deductible",
];

export default function ReviewInformationPage() {
    const selectedPlan = useSelector((state)=>state.plan.selectedPlan)
    console.log(selectedPlan);
    const navigate = useNavigate();
  return (
    <div className="min-h-screen font-sans relative overflow-hidden lg:mt-10 lg:mr-30">
      {/* Background */}
      
      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 py-10">
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2">
          Review your information
        </h1>
        <p className="text-gray-300 text-[14.5px] mb-8">
          Please verify that the details below are correct before proceeding to payment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-5 items-start lg:w-[1200px] lg:h-[550px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Vehicle Summary */}
            <div className="backdrop backdrop-blur-xl bg-[#141625]/20 border border-[#2a2d3d]  rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#241b2e] flex items-center justify-center">
                    <Car size={15} className="text-pink-300" />
                  </div>
                  <h2 className="text-white text-[16px] font-bold">Vehicle summary</h2>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-gray-200 text-[12.5px] transition">
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-[11px] font-medium mb-1">Make & Model</p>
                  <p className="text-white text-[15px] font-semibold">2022 Toyota RAV4 XLE</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] font-medium mb-1">VIN</p>
                  <p className="text-white text-[15px] font-semibold font-mono tracking-wide">
                    JTMDFREV1ND******
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] font-medium mb-1">Current Mileage</p>
                  <p className="text-white text-[15px] font-semibold">32,450 mi</p>
                </div>
              </div>
            </div>

            {/* Selected Plan */}
            <div className="backdrop backdrop-blur-xl bg-[#141625]/20 border border-[#2a2d3d] border-l-4 border-l-amber-400 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#2a2417] flex items-center justify-center">
                    <ShieldCheck size={15} className="text-amber-300" />
                  </div>
                  <h2 className="text-white text-[16px] font-bold">Selected plan</h2>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-gray-200 text-[12.5px] transition">
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-amber-400 text-[17px] font-bold mb-1.5">Premium Plus Plan</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed max-w-[340px]">
                    Comprehensive coverage including powertrain, electronics,
                    and roadside assistance.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white text-xl font-bold">$549.00</p>
                  <p className="text-gray-500 text-[12px]">/ year</p>
                </div>
              </div>

              <div className="border-t border-[#262939] pt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
                {planFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-[13px]">
                    <Check size={13} className="text-amber-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="backdrop backdrop-blur-xl bg-[#141625]/20 border border-[#2a2d3d] rounded-lg p-6 lg:w-[450px] lg:h-[490px]">
            <h2 className="text-white text-[24px] font-bold mb-4 border-b border-[#262939] pb-4 ">Order summary</h2>

            <div className="border-b border-[#262939] pb-4 mb-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-gray-300 text-[14px]">{selectedPlan?.name} Plan (1 Year)</span>
                <span className="text-gray-100 font-medium ">{selectedPlan?.price} Plan (1 Year)</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-gray-300 text-[14px]">Taxes & Fees</span>
                <span className="text-gray-100 font-medium">$0.00</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-white text-[25px] font-bold">Total Due Today</span>
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent text-4xl font-extrabold">
                {selectedPlan?.price}
              </span>
            </div>

            <button
              onClick={() => {
                navigate("/warranty-plans/payment")
                alert("Continuing to payment...")
            }}
              className="w-full flex items-center cursor-pointer justify-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:brightness-110 transition text-white font-semibold text-[14px] rounded-xl py-3.5 mb-3"
            >
              Continue with payment
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => {
                navigate("/warranty-plans/add-vehicle")
                alert("Going back to vehicle info...")
            }}
              className="w-full flex items-center justify-center gap-2 bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] transition text-gray-200 font-medium text-[14px] rounded-xl py-3.5 mb-4"
            >
              <ArrowLeft size={15} />
              Back to vehicle info
            </button>

            <div className="flex items-center justify-center gap-1.5 text-gray-500 text-[11px] lg:mt-8">
              <Lock size={11} />
              SSL SECURED ENCRYPTED TRANSACTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}