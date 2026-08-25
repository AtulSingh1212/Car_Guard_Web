import { useState } from "react";
import { PageHeader,Card } from "./PageHeader";
import { Car, Battery, Gauge, Fuel, Key, Phone, MapPin, AlertTriangle, ChevronRight, MessageSquare } from "lucide-react";

export default function RoadsidePage() {

    const [requested, setRequested] = useState(null);
    const services = [
      { icon: Car, label: "Towing" },
      { icon: Battery, label: "Jumpstart" },
      { icon: Gauge, label: "Flat Tire" },
      { icon: Fuel, label: "Fuel Delivery" },
      { icon: Key, label: "Lockout" },
    ];
  
    return (
      <div>
        <PageHeader title="Roadside Assistance" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 mb-6">
          <Card className="overflow-hidden">
            <div className="relative h-[260px] bg-gray-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=40')] bg-cover bg-center opacity-70" />
              <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" /> TRACKING ACTIVE
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-[#12131f]/95 backdrop-blur px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-white text-[14px] font-bold">Tow Truck Dispatched</p>
                    <p className="text-gray-400 text-[11.5px]">Driver: Michael S. • License: 8XF39A</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-300 text-lg font-extrabold leading-none">12</p>
                    <p className="text-gray-500 text-[9.5px]">MINUTES AWAY</p>
                  </div>
                </div>
                <div className="h-1 bg-[#2a2d3d] rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-2/3" />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => alert("Calling driver...")} className="flex-1 flex items-center justify-center gap-1.5 bg-[#1d1f30] border border-[#2a2d3d] text-gray-200 text-[12px] font-medium rounded-lg py-2">
                    <Phone size={12} /> Call Driver
                  </button>
                  <button onClick={() => alert("Sharing status...")} className="flex-1 flex items-center justify-center gap-1.5 bg-[#1d1f30] border border-[#2a2d3d] text-gray-200 text-[12px] font-medium rounded-lg py-2">
                    <MapPin size={12} /> Share Status
                  </button>
                </div>
              </div>
            </div>
          </Card>
  
          <div className="flex flex-col gap-4">
            <Card className="p-5 text-center border-red-900/40">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <p className="text-red-400 text-[15px] font-bold mb-1">Emergency SOS</p>
              <p className="text-gray-500 text-[12px] leading-relaxed">Tap immediately if you are in danger or require medical assistance.</p>
            </Card>
  
            <Card className="p-5">
              <h3 className="text-white text-[14px] font-bold mb-3">Need Help Now?</h3>
              <div className="flex flex-col gap-2.5">
                <button onClick={() => (window.location.href = "tel:1800276607")} className="flex items-center gap-3 bg-[#1a1c2b] hover:bg-[#1f2233] border border-[#2a2d3d] rounded-lg px-3.5 py-2.5 transition text-left">
                  <Phone size={15} className="text-amber-400 flex-shrink-0" />
                  <span className="flex-1">
                    <span className="block text-gray-500 text-[10px] font-semibold">TOLL-FREE</span>
                    <span className="block text-gray-100 text-[12.5px] font-semibold">1-800-ARMOR-US 24/7 HOTLINE</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-500" />
                </button>
                <button onClick={() => alert("Starting live chat...")} className="flex items-center gap-3 bg-[#1a1c2b] hover:bg-[#1f2233] border border-[#2a2d3d] rounded-lg px-3.5 py-2.5 transition text-left">
                  <MessageSquare size={15} className="text-purple-400 flex-shrink-0" />
                  <span className="flex-1">
                    <span className="block text-gray-100 text-[12.5px] font-semibold">Live Chat</span>
                    <span className="block text-gray-500 text-[10.5px]">Agent typing...</span>
                  </span>
                  <ChevronRight size={14} className="text-gray-500" />
                </button>
              </div>
            </Card>
          </div>
        </div>
  
        <h2 className="text-white text-xl font-bold mb-4">Request Service</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const active = requested === s.label;
            return (
              <button
                key={i}
                onClick={() => setRequested(s.label)}
                className={`flex flex-col items-center justify-center gap-2.5 rounded-xl py-6 border transition ${
                  active ? "bg-purple-600/20 border-purple-500" : "bg-[#141625] border-[#2a2d3d] hover:border-purple-500/50"
                }`}
              >
                <Icon size={20} className={active ? "text-purple-300" : "text-gray-300"} />
                <span className="text-gray-200 text-[13px] font-medium">{s.label}</span>
              </button>
            );
          })}
        </div>
        {requested && (
          <p className="text-purple-300 text-[13px] mt-4">
            ✓ {requested} request sent. A dispatcher will contact you shortly.
          </p>
        )}
      </div>
    );
  }