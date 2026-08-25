import { useState } from "react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { Settings } from "lucide-react";   
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

    const [query, setQuery] = useState("");
    return (
      <div className="flex items-center justify-between gap-4 px-8 py-4 border-b border-[#20222f] bg-[#0d0e17] sticky top-0 z-20">
        <div className="relative w-full max-w-[380px]">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-[#171926] border border-[#2a2d3d] rounded-full text-gray-200 text-[13px] placeholder-gray-500 pl-9 pr-4 py-2 outline-none focus:border-purple-500 transition"
          />
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
          onClick={() => navigate("/dashboard/notifications")}
          className="relative text-gray-400 hover:text-gray-200 transition cursor-pointer">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-purple-500 rounded-full text-[8px] flex items-center justify-center text-white font-bold">2</span>
          </button>
          <button 
          onClick={() => navigate("/dashboard/settings")}
          className="text-gray-400 hover:text-gray-200 transition cursor-pointer">
            <Settings size={18} />
          </button>
          <div 
          onClick={() => navigate("/dashboard/profile")}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[12px] font-bold cursor-pointer">
            A
          </div>
        </div>
      </div>
    );
  }
