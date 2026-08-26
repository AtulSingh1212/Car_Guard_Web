import { useNavigate } from "react-router-dom";

import { ShieldCheck, Star, ArrowRight, LogOut, LayoutGrid, FileText, Briefcase, Wrench, Car, Receipt, Bell, User, Headphones, Settings } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ active, setActive }) {
  const  [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const navItems = [
      { id: "/dashboard", label: "Dashboard", icon: LayoutGrid },
      { id: "contracts", label: "My Contracts", icon: FileText },
      { id: "claims", label: "My Claims", icon: Briefcase },
      { id: "roadside", label: "Roadside Assistance", icon: Wrench },
      { id: "vehicles", label: "My Vehicles", icon: Car },
      { id: "payments", label: "Payments & Invoices", icon: Receipt },
      { id: "notifications", label: "Notifications", icon: Bell, badge: 2 },
      { id: "profile", label: "My Profile", icon: User },
      { id: "contact", label: "Contact Us", icon: Headphones },
      { id: "settings", label: "Settings", icon: Settings },
    ];
    
    
    
    
  return (
    <div 
    
    className={` ${!isOpen?"w-[220px] transition-all duration-300":"sm:w-[70px] transition-all duration-300"} w-[70px] flex-shrink-0 bg-[#0f1119] border-r border-[#20222f] flex flex-col h-screen sticky top-0`}>
      <div className="relative flex items-center gap-2.5 px-5 py-5">
        <div className="w-8 h-8 rounded-lg object-cover flex items-center justify-center flex-shrink-0">
        
          <img
          onClick={() => navigate("/dashboard")}
           src="/assets/images/logo.png" alt="" />
        </div>
        {!isOpen && (
          <span className="text-white font-bold text-[16px]">Car Engyisi</span>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl cursor-pointer absolute right-[1px] top-[2px]">{!isOpen ? "✕" : "☰"}</button>
      </div>

      <nav className="flex-1 px-3 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition text-left ${
                isActive ? "bg-gradient-to-r from-purple-600/90 to-purple-700/70 text-white" : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
              }`}
            >
              <Icon size={16} className="flex-shrink-0" />
              {!isOpen && (
                <span className="flex-1">{item.label}</span>
              )}
              {!isOpen && (item.badge && (
                <span className="bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              ))}
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-4">
        {!isOpen && (<div className="bg-[#171926] border border-[#2a2d3d] rounded-xl p-4 text-center mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center mx-auto mb-2">
            <Star size={16} className="text-white" />
          </div>
          <p className="text-white text-[13px] font-semibold mb-0.5">Refer & Earn</p>
          <p className="text-gray-500 text-[11px] mb-3 leading-snug">
            Invite your friends and earn exciting rewards.
          </p>
          <button className="w-full bg-gradient-to-r cursor-pointer from-purple-600 to-orange-500 text-white text-[12px] font-semibold rounded-lg py-2 flex items-center justify-center gap-1.5">
            Refer Now <ArrowRight size={12} />
          </button>
        </div>)}

        <button
        onClick={() => navigate("/login")}
         className="flex items-center cursor-pointer gap-2.5 px-3 py-2.5 text-gray-400 hover:text-gray-200 text-[13px] w-full transition">
          {!isOpen && ( 
            <>
              <LogOut size={15} />
              Logout
            </>
          )}
          {isOpen && (
            <LogOut size={15} />
          )}
        </button>
      </div>
    </div>
  );
}
