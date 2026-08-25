import { useState, useRef } from "react";
import {
  ShieldCheck,
  Info,
  Car,
  Hash,
  Gauge,
  FileText,
  Calendar,
  ChevronDown,
  Check,
  Upload,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const imageSlots = [
  { key: "frontView", label: "Front view", required: true },
  { key: "rearView", label: "Rear view", required: true },
  { key: "leftSide", label: "Left side view", required: true },
  { key: "rightSide", label: "Right side view", required: true },
  { key: "dashboard", label: "Dashboard / odometer", required: true },
  { key: "engine", label: "Engine compartment", required: true },
  { key: "vinPlate", label: "VIN plate / door sticker", required: true },
  { key: "regDoc", label: "Registration document", required: false },
];

const planIncludes = [
  "Engine Coverage",
  "Rental Car Reimbursement",
  "Transmission Coverage",
  "Trip Interruption",
  "Electrical System",
  "24/7 Roadside Assistance",
  "Drive Axle Coverage",
  "+ 10 More Benefits",
];

export default function AddVehicle() {
  const selectedPlan = useSelector((state)=>state.plan.selectedPlan);
  console.log(selectedPlan);


  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    year: "2022",
    make: "Toyota",
    model: "RAV4",
    trim: "XLE",
    vin: "",
    mileage: "",
    registration: "",
    purchaseDate: "",
    condition: "Excellent - well maintained",
  });

  const [images, setImages] = useState({});
  const fileInputRefs = useRef({});

  function updateField(key, value) {
    setVehicle((prev) => ({ ...prev, [key]: value }));
  }

  function handleImageChange(key, e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImages((prev) => ({ ...prev, [key]: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function triggerUpload(key) {
    fileInputRefs.current[key]?.click();
  }

  const inputBase =
    "w-full bg-[#1a1c2b] border border-[#2e3143] rounded-lg text-gray-100 text-[13px] placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition";

  return (
    <div className="min-h-screen  font-sans px-4 py-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-5 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5 bg--300 ">

          {/* Vehicle Details */}
          <div className="backdrop backdrop-blur-2xl lg:ml-6 bg-gray/50 bg-gray-900/50  border border-[#2a2d3d] rounded-2xl p-6 lg:w-[860px]  lg:h-[550px]">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
              <h2 className="text-white text-[26px] font-bold">Add your vehicle information</h2>
              <span className="flex items-center gap-1.5  rounded-2xl px-2 py-1 bg-gray-800/50 text-amber-400 text-[12.5px] font-medium">
                <ShieldCheck size={13} />
                All information is secure
              </span>
            </div>
            <p className="text-gray-400 text-[14px] mb-6">
              Please provide accurate details and images of your vehicle.
            </p>

            <h3 className="text-orange-400 text-[13px] font-bold uppercase tracking-wide mb-4">
              Vehicle details
            </h3>

            {/* Row 1: Year, Make, Model, Trim */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">Year *</label>
                <div className="relative">
                  <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    value={vehicle.year}
                    onChange={(e) => updateField("year", e.target.value)}
                    className={`${inputBase} pl-8 pr-2 py-2.5`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">Make *</label>
                <div className="relative">
                  <select
                    value={vehicle.make}
                    onChange={(e) => updateField("make", e.target.value)}
                    className={`${inputBase} pl-3 pr-7 py-2.5 appearance-none`}
                  >
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Ford</option>
                    <option>Audi</option>
                    <option>BMW</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">Model *</label>
                <div className="relative">
                  <select
                    value={vehicle.model}
                    onChange={(e) => updateField("model", e.target.value)}
                    className={`${inputBase} pl-3 pr-7 py-2.5 appearance-none`}
                  >
                    <option>RAV4</option>
                    <option>Camry</option>
                    <option>Corolla</option>
                    <option>Highlander</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">Trim (Optional)</label>
                <input
                  value={vehicle.trim}
                  onChange={(e) => updateField("trim", e.target.value)}
                  className={`${inputBase} px-3 py-2.5`}
                />
              </div>
            </div>

            {/* Row 2: VIN, Mileage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">
                  VIN (Vehicle Identification Number) *
                </label>
                <div className="relative">
                  <Hash size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    value={vehicle.vin}
                    onChange={(e) => updateField("vin", e.target.value)}
                    placeholder="2T3MWRFV8NW123456"
                    className={`${inputBase} pl-8 pr-8 py-2.5 font-mono tracking-wide`}
                  />
                  {vehicle.vin.length >= 11 && (
                    <Check size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400" />
                  )}
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">Current mileage *</label>
                <div className="relative">
                  <Gauge size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    value={vehicle.mileage}
                    onChange={(e) => updateField("mileage", e.target.value)}
                    placeholder="28,450"
                    className={`${inputBase} pl-8 pr-10 py-2.5`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[11px]">
                    miles
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: Registration, Purchase Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">
                  Registration number (Optional)
                </label>
                <div className="relative">
                  <FileText size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    value={vehicle.registration}
                    onChange={(e) => updateField("registration", e.target.value)}
                    placeholder="ABC-1234"
                    className={`${inputBase} pl-8 pr-3 py-2.5`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-[11.5px] mb-1.5">
                  Purchase date (Optional)
                </label>
                <div className="relative">
                  <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="date"
                    value={vehicle.purchaseDate}
                    onChange={(e) => updateField("purchaseDate", e.target.value)}
                    className={`${inputBase} pl-8 pr-3 py-2.5`}
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Condition */}
            <div>
              <label className="flex items-center gap-1.5 text-gray-400 text-[11.5px] mb-1.5">
                Vehicle condition
                <HelpCircle size={12} className="text-gray-500" />
                <span className="text-gray-500">What's this?</span>
              </label>
              <div className="relative">
                <select
                  value={vehicle.condition}
                  onChange={(e) => updateField("condition", e.target.value)}
                  className={`${inputBase} pl-3 pr-7 py-2.5 appearance-none`}
                >
                  <option>Excellent - well maintained</option>
                  <option>Good - minor wear</option>
                  <option>Fair - visible wear</option>
                  <option>Needs attention</option>
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Upload Vehicle Images */}
          <div className="bg-[#141625]/50 backdrop backdrop-blur-2xl lg:ml-5 order border-[#2a2d3d] rounded-2xl p-6">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
              <h3 className="text-orange-400 text-[22px] font-bold">Upload vehicle images</h3>
              <span className="text-gray-500 text-[16px] text-right">
                Accepted formats: JPG, PNG
                <br />
                Max file size: 5MB
              </span>
            </div>
            <p className="text-gray-400 text-[18px] mb-5">
              Clear images help us verify your vehicle and activate your coverage quickly.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
              {imageSlots.map((slot) => {
                const uploaded = images[slot.key];
                return (
                  <div key={slot.key} className="bg-gray-500/40 rounded-lg backdrop backdrop-blur-2xl lg:h-[220px] p-1">
                    <button
                      type="button"
                      onClick={() => triggerUpload(slot.key)}
                      className={`w-full aspect-square rounded-lg border lg:h-[150px] ${
                        uploaded
                          ? "border-purple-500"
                          : "border-dashed border-[#3a3d4d] hover:border-purple-500/60"
                      } bg-[#1a1c2b] flex items-center justify-center overflow-hidden transition relative group`}
                    >
                      {uploaded ? (
                        <>
                          <img
                            src={uploaded}
                            alt={slot.label}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-[10.5px] font-medium transition">
                              Change
                            </span>
                          </div>
                          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        </>
                      ) : (
                        <Upload size={18} className="text-gray-600" />
                      )}
                    </button>
                    <input
                      ref={(el) => (fileInputRefs.current[slot.key] = el)}
                      type="file"
                      accept="image/jpeg,image/png"
                      className="hidden "
                      onChange={(e) => handleImageChange(slot.key, e)}
                    />
                    <p className="text-gray-300 text-[16px] font-medium mt-1.5 leading-tight">
                      {slot.label} {slot.required && <span className="text-red-400">*</span>}
                    </p>
                    <p className="text-gray-500 text-[14px] mt-0.5">
                      {uploaded ? "Uploaded ✓" : "Upload image"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-center gap-3">
            <button className="flex items-center gap-2 text-gray-300 text-[13.5px] font-medium bg-[#171926] border border-[#2a2d3d] rounded-xl px-5 py-3 hover:bg-[#1d1f30] transition">
              <ArrowLeft size={15} />
              Back to plan selection
            </button>
            <button
              onClick={() => {
                navigate(`/warranty-plans/review-information`)
                alert("Continuing with order...")
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:brightness-110 transition text-white font-semibold text-[13.5px] rounded-xl px-6 py-3"
            >
              Continue with order
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: selected plan summary */}
        <div className="flex flex-col gap-4 backdrop backdrop-blur-2xl bg-gray-900/50 w-full p-4 lg:w-[370px] rounded-lg">
          <div className=" w-full h-full p-4 rounded-2xl">
            <h3 className="text-white text-[26px] font-bold mb-3 px-1">Your selected plan</h3>

            <div className="bg-gradient-to-b from-[#2e2461] lg:w-[300px] lg:h-[800px] to-[#1a1530] border border-[#4a3a8f]/60 rounded-lg p-5">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-9 h-9 rounded-lg bg-purple-800/50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} className="text-purple-300" />
                </div>
                <h4 className="text-white text-[18px] font-bold">{selectedPlan?.name} Plan</h4>
              </div>
              <p className="text-gray-400 text-[16px] mb-4">Our most comprehensive coverage</p>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent text-3xl font-extrabold">
                  {selectedPlan?.price}
                </span>
                <span className="text-gray-400 text-[12px]">/year</span>
              </div>

              <span className="inline-block bg-amber-400/15 text-amber-300 text-[10.5px] font-semibold px-2.5 py-1 rounded-full mb-4">
                Best Value
              </span>

              <p className="text-gray-300 text-[12.5px] font-semibold mb-2.5">Plan includes:</p>
              <ul className="space-y-1.5 mb-4">
                {planIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-[12.5px]">
                    <Check size={12} className="text-orange-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-3 flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-gray-400 text-[11.5px]">
                  <Clock size={12} />
                  Coverage duration: 24 months
                </span>
                <span className="flex items-center gap-1.5 text-gray-400 text-[11.5px]">
                  <Sparkles size={12} />
                  Coverage starts: Immediately after purchase
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#141625] border border-[#2a2d3d] ml-6  rounded-lg p-4 w-full lg:w-[290px]  lg:h-[250px]">
            <div className="flex items-start gap-2">
              <HelpCircle size={20} className="text-purple-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-200 text-[19.5px] font-bold mb-1">
                  Why we need your vehicle information?
                </p>
                <p className="text-gray-500 text-[15.5px] leading-relaxed">
                  Your vehicle details help us verify eligibility, activate your
                  warranty, and provide the right protection for your vehicle.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#141625] border border-[#2a2d3d] rounded-lg p-4 lg:ml-6 lg:w-[290px]  lg:h-[90px]">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-300 text-[10px] font-bold">
              30
            </div>
            <p className="text-gray-300 text-[12px] leading-snug">
              <span className="font-semibold text-gray-100">30-Day money back guarantee</span>
              <br />
              Hassle-free refund if you're not satisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}