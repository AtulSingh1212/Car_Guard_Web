import { Check, Mail, LayoutGrid, ArrowRight, Download, CreditCard, HelpCircle } from "lucide-react";
import PageLayout from "../../pages/Layout/PageLayout";
import { useNavigate } from "react-router-dom";

const nextSteps = [
  {
    icon: Mail,
    text: "Check your email for policy documents and digital ID cards.",
  },
  {
    icon: LayoutGrid,
    text: "Your dashboard is now active. You can manage your policy and view details anytime.",
  },
];

export default function PurchaseSuccessPage() {
  const navigate = useNavigate();

  const handleRedirectToDashboard = () => {
    navigate("/dashboard");
    alert("Redirecting to your dashboard...")

  }
  
  return (
    <PageLayout>
        <div className="min-h-screen font-sans relative overflow-hidden">
      {/* Background */}
     
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-[920px]  mx-auto px-5 py-14 ">
        <div className="bg-[#12131f]/95 backdrop lg:h-[620px]  backdrop-blur-xl border border-white/10 rounded-2xl p-7 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-6 items-start">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                  <Check size={22} className="text-orange-400" strokeWidth={3} />
                </div>
                <div>
                  <h1 className="text-white text-2xl sm:text-[26px] font-extrabold leading-tight">
                    Purchase successful
                  </h1>
                  <p className="text-gray-400 text-[13.5px] mt-1.5 leading-relaxed">
                    Thank you for choosing AutoArmor.
                  </p>
                </div>
              </div>

              {/* Order details */}
              <div className="bg-[#171926] border border-[#2a2d3d] rounded-xl p-5">
                <div className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b border-[#262939]">
                  <div>
                    <p className="text-gray-500 text-[10.5px] font-semibold uppercase tracking-wide mb-1">
                      Order number
                    </p>
                    <p className="text-orange-400 text-[14px] font-bold">#AA-98234</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10.5px] font-semibold uppercase tracking-wide mb-1">
                      Date
                    </p>
                    <p className="text-gray-100 text-[14px] font-medium">Oct 26, 2024</p>
                  </div>
                </div>

                <p className="text-gray-500 text-[10.5px] font-semibold uppercase tracking-wide mb-1.5">
                  Payment method
                </p>
                <div className="flex items-center gap-2">
                  <CreditCard size={15} className="text-gray-300" />
                  <span className="text-gray-200 text-[13.5px]">
                    Visa ending in •••• 4242
                  </span>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-[#1a1730] border border-[#332a55] rounded-xl p-5">
                <h2 className="text-amber-400 text-[15px] font-bold mb-4">Next steps</h2>
                <div className="flex flex-col gap-4">
                  {nextSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#241f42] flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-amber-300" />
                        </div>
                        <p className="text-gray-300 text-[13px] leading-relaxed">{step.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4">
              {/* Policy Summary */}
              <div className="bg-[#171926] border border-[#2a2d3d] rounded-xl p-5">
                <p className="text-gray-500 text-[10.5px] font-semibold uppercase tracking-wide mb-4">
                  Policy summary
                </p>

                <div className="mb-4 pb-4 border-b border-[#262939]">
                  <p className="text-gray-500 text-[11px] mb-1">Vehicle</p>
                  <p className="text-white text-[16px] font-bold">2022 Toyota RAV4</p>
                </div>

                <div className="mb-4 pb-4 border-b border-[#262939]">
                  <p className="text-gray-500 text-[11px] mb-1.5">Plan selected</p>
                  <span className="inline-flex items-center gap-1.5 text-amber-400 text-[13.5px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Premium Plus Plan
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide mb-1">
                      Coverage starts
                    </p>
                    <p className="text-orange-400 text-[13.5px] font-semibold">Immediate</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide mb-1">
                      Duration
                    </p>
                    <p className="text-gray-100 text-[13.5px] font-semibold">24 months</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <button
                onClick={handleRedirectToDashboard}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:brightness-110 transition text-white font-semibold text-[13.5px] rounded-xl py-3.5"
              >
                Go to dashboard
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => alert("Downloading receipt...")}
                className="w-full flex items-center justify-center gap-2 bg-transparent border border-[#2e3143] hover:bg-white/5 transition text-gray-200 font-medium text-[13.5px] rounded-xl py-3.5"
              >
                <Download size={14} />
                Download receipt
              </button>
            </div>
          </div>
        </div>

        {/* Footer support line */}
        <div className="flex items-center justify-center gap-1.5 text-gray-400 text-[12px] mt-6">
          <HelpCircle size={13} />
          Have questions? Contact our support team at{" "}
          <a href="mailto:support@autoarmor.com" className="text-purple-400 hover:underline">
            support@autoarmor.com
          </a>{" "}
          or call 1-800-555-0199.
        </div>
      </div>
    </div>
    </PageLayout>
    
  );
}