import { useState } from "react";
import {
  CreditCard,
  Wallet,
  MapPin,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import PageLayout from "../../pages/Layout/PageLayout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [saveCard, setSaveCard] = useState(false);
  const [sameAsRegistration, setSameAsRegistration] = useState(true);
  const selectedPlan = useSelector((state)=>state.plan.selectedPlan)

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [billing, setBilling] = useState({
    street: "123 Automotive Way, Suite 400",
    city: "Detroit",
    state: "MI",
    zip: "48226",
  });

  const [errors, setErrors] = useState({});

  function updateCard(key, value) {
    setCard((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }));
  }

  function updateBilling(key, value) {
    setBilling((prev) => ({ ...prev, [key]: value }));
  }
  function handlePayNow() {
    
    if (method !== "card") {
      
      alert("Redirecting to PayPal...");
      return;
    }
    
    const nextErrors = {};
    if (!card.name.trim()) nextErrors.name = "Enter the cardholder name";
    if (card.number.replace(/\s/g, "").length < 16)
      nextErrors.number = "Enter a valid 16-digit card number";
    if (!/^\d{2}\/\d{2}$/.test(card.expiry)) nextErrors.expiry = "Use MM/YY format";
    if (!/^\d{3,4}$/.test(card.cvv)) nextErrors.cvv = "Enter a valid CVV";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    navigate("/success");
    alert("Processing payment of $494.10...");
  }

  const inputClass = (key) =>
    `w-full bg-[#1a1c2b] border ${
      errors[key] ? "border-red-500" : "border-[#2e3143]"
    } rounded-lg text-gray-100 text-[13px] placeholder-gray-500 px-3.5 py-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition`;

  return (
    <PageLayout>
    <div className="min-h-screen  font-sans relative overflow-hidden">
      {/* Background */}
      
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-white text-2xl font-bold mb-1 capitalize lg:text-4xl">Select payment method</h1>
              <p className="text-gray-400 text-[13px] lg:text-[16px]">
                All transactions are secure and encrypted.
              </p>
            </div>

            {/* Payment method toggle */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMethod("card")}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 border transition text-left ${
                  method === "card"
                    ? "border-orange-400 bg-[#1c1a2b]"
                    : "border-[#2a2d3d] bg-[#141625] hover:border-[#3d4058]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    method === "card" ? "border-orange-400" : "border-gray-500"
                  }`}
                >
                  {method === "card" && <span className="w-2 h-2 rounded-full bg-orange-400" />}
                </span>
                <CreditCard size={16} className="text-gray-200 flex-shrink-0" />
                <span className="text-gray-100 text-[13.5px] font-medium">Credit / Debit card</span>
              </button>

              <button
                onClick={() => setMethod("paypal")}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 border transition text-left ${
                  method === "paypal"
                    ? "border-orange-400 bg-[#1c1a2b]"
                    : "border-[#2a2d3d] bg-[#141625] hover:border-[#3d4058]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    method === "paypal" ? "border-orange-400" : "border-gray-500"
                  }`}
                >
                  {method === "paypal" && <span className="w-2 h-2 rounded-full bg-orange-400" />}
                </span>
                <Wallet size={16} className="text-gray-200 flex-shrink-0" />
                <span className="text-gray-100 text-[13.5px] font-medium">PayPal</span>
              </button>
            </div>

            {/* Card Details */}
            {method === "card" && (
              <div className="bg-[#141625] border border-[#2a2d3d] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CreditCard size={16} className="text-orange-400" />
                  <h2 className="text-white text-[15px] font-bold">Card details</h2>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="block text-gray-400 text-[11.5px] mb-1.5">
                      Cardholder name
                    </label>
                    <input
                      value={card.name}
                      onChange={(e) => updateCard("name", e.target.value)}
                      placeholder="Name on card"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[11.5px] mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-400 text-[11.5px] mb-1.5">
                      Card number
                    </label>
                    <div className="relative">
                      <input
                        value={card.number}
                        onChange={(e) => updateCard("number", e.target.value)}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className={`${inputClass("number")} pr-9`}
                      />
                      <Lock size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.number && (
                      <p className="text-red-400 text-[11.5px] mt-1">{errors.number}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 text-[11.5px] mb-1.5">
                        Expiry date
                      </label>
                      <input
                        value={card.expiry}
                        onChange={(e) => updateCard("expiry", e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        className={inputClass("expiry")}
                      />
                      {errors.expiry && (
                        <p className="text-red-400 text-[11.5px] mt-1">{errors.expiry}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-400 text-[11.5px] mb-1.5">CVV</label>
                      <input
                        value={card.cvv}
                        onChange={(e) => updateCard("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className={inputClass("cvv")}
                      />
                      {errors.cvv && (
                        <p className="text-red-400 text-[11.5px] mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>

                  <label className="flex items-center gap-2 text-gray-400 text-[12.5px] mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={saveCard}
                      onChange={(e) => setSaveCard(e.target.checked)}
                      className="w-3.5 h-3.5 rounded accent-purple-500"
                    />
                    Save this card for future renewals
                  </label>
                </div>
              </div>
            )}

            {method === "paypal" && (
              <div className="bg-[#141625] border border-[#2a2d3d] rounded-2xl p-8 text-center">
                <Wallet size={28} className="text-gray-400 mx-auto mb-3" />
                <p className="text-gray-300 text-[13.5px]">
                  You'll be redirected to PayPal to complete your payment securely.
                </p>
              </div>
            )}

            {/* Billing Address */}
            <div className="bg-[#141625] border border-[#2a2d3d] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={16} className="text-orange-400" />
                <h2 className="text-white text-[15px] font-bold">Billing address</h2>
              </div>

              <label className="flex items-center gap-2.5 bg-[#1c1a2b] border border-amber-400/40 rounded-lg px-3.5 py-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameAsRegistration}
                  onChange={(e) => setSameAsRegistration(e.target.checked)}
                  className="w-3.5 h-3.5 rounded accent-amber-400"
                />
                <span className="text-gray-100 text-[13px]">
                  Same as vehicle registration address
                </span>
              </label>

              <div className={`flex flex-col gap-3 ${sameAsRegistration ? "opacity-50 pointer-events-none" : ""}`}>
                <div>
                  <label className="block text-gray-400 text-[11.5px] mb-1.5">
                    Street address
                  </label>
                  <input
                    value={billing.street}
                    onChange={(e) => updateBilling("street", e.target.value)}
                    className={inputClass("street")}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-gray-400 text-[11.5px] mb-1.5">City</label>
                    <input
                      value={billing.city}
                      onChange={(e) => updateBilling("city", e.target.value)}
                      className={inputClass("city")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-[11.5px] mb-1.5">State</label>
                    <input
                      value={billing.state}
                      onChange={(e) => updateBilling("state", e.target.value)}
                      className={inputClass("state")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-[11.5px] mb-1.5">ZIP</label>
                    <input
                      value={billing.zip}
                      onChange={(e) => updateBilling("zip", e.target.value)}
                      className={inputClass("zip")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-[11px] pt-1">
              <span className="flex items-center gap-1.5">
                <Lock size={11} className="text-green-500" />
                256-bit SSL Encryption
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-green-500" />
                Secure transaction
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="bg-[#141625] border border-[#2a2d3d] rounded-2xl p-6 sticky top-6">
            <h2 className="text-white text-[16px] font-bold mb-4">Order summary</h2>

            <div className="bg-gradient-to-br from-[#2e2461] to-[#1a1530] border border-[#4a3a8f]/50 rounded-xl p-4 mb-4">
              <p className="text-gray-400 text-[10.5px] font-semibold uppercase tracking-wide mb-1">
                Selected plan
              </p>
              <div className="flex items-start justify-between mb-1">
                <span className="text-white text-[15px] font-bold">{selectedPlan?.name} Plus</span>
                <span className="text-white text-[15px] font-bold">
                  {selectedPlan?.price}<span className="text-gray-400 text-[11px] font-normal">/yr</span>
                </span>
              </div>
              <p className="text-gray-400 text-[11.5px]">Coverage for 2021 Tesla Model 3</p>
            </div>

            <div className="flex flex-col gap-2.5 border-b border-[#262939] pb-4 mb-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-gray-300">Base plan (12 months)</span>
                <span className="text-gray-100">{selectedPlan?.price}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-gray-300">Taxes & fees</span>
                <span className="text-gray-100">$0.00</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-orange-400">Promo applied (SAVE10)</span>
                <span className="text-orange-400">-$54.90</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <span className="text-white text-[15px] font-bold">Total due today</span>
              <span className="text-white text-2xl font-extrabold">{selectedPlan?.price}</span>
            </div>

            <button
              onClick={handlePayNow}
              className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:brightness-110 transition text-white font-semibold text-[14px] rounded-xl py-3.5 mb-3"
            >
              <Lock size={14} />
              Pay now
              <ArrowRight size={15} />
            </button>

            <p className="text-gray-500 text-[10.5px] text-center leading-relaxed">
              By clicking "Pay Now", you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}