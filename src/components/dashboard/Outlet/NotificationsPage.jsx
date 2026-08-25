import { useState } from "react";
import { Card, PageHeader } from "./PageHeader";
import { Check, CreditCard, Settings, ShieldCheck, Wrench } from "lucide-react";

const notificationsData = [
  { id: 1, type: "Claims", time: "Just now", title: "Claim CL-2024-1009 Approved",
    desc: "Your claim for the transmission repair has been fully approved. Funds will be dispersed to the repair facility within 24 hours.",
    icon: Settings, color: "text-amber-400 bg-amber-500/10", link: "View Claim Details", unread: true },
  { id: 2, type: "Account", time: "2 hours ago", title: "Policy Renewal Successful",
    desc: "Your AutoArmor Ultimate plan for the 2021 BMW M3 has been successfully renewed for another year.",
    icon: Check , color: "text-blue-400 bg-blue-500/10", unread: true },
  { id: 3, type: "System", time: "Yesterday", title: "New Feature: Roadside Tracking Now Available",
    desc: "You can now track your assigned tow truck or assistance vehicle in real-time directly from the app.",
    icon: Settings, color: "text-gray-400 bg-gray-500/10", link: "Learn More", unread: false },
];

export default function NotificationsPage() {
    const [filter, setFilter] = useState("All");
    const [items, setItems] = useState(notificationsData);
    const tabs = ["All", "Claims", "Account", "Payments", "System"];
    const filtered = filter === "All" ? items : items.filter((n) => n.type === filter);
  
    return (
      <div>
        <PageHeader
          title="Notifications"
          subtitle="Stay updated on your vehicle protection."
          action={
            <button onClick={() => setItems(items.map((n) => ({ ...n, unread: false })))} className="flex items-center gap-2 bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
              <Check size={14} /> Mark all as read
            </button>
          }
        />
  
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-[13px] font-medium px-4 py-1.5 rounded-full transition ${
                filter === t ? "bg-purple-600 text-white" : "bg-[#1a1c2b] text-gray-400 hover:text-gray-200 border border-[#2a2d3d]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">
          <div className="flex flex-col gap-4">
            {filtered.map((n) => {
              const Icon = n.icon;
              return (
                <Card key={n.id} className={`p-5 border-l-4 ${n.unread ? "border-l-purple-500" : "border-l-[#2a2d3d]"}`}>
                  <div className="flex items-start gap-3.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${n.color}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 text-[10.5px] font-bold uppercase tracking-wide">{n.type}</span>
                        <span className="text-gray-600 text-[10.5px]">• {n.time}</span>
                        {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 ml-auto" />}
                      </div>
                      <h3 className="text-white text-[14.5px] font-bold mb-1">{n.title}</h3>
                      <p className="text-gray-400 text-[12.5px] leading-relaxed mb-2">{n.desc}</p>
                      {n.link && (
                        <button onClick={() => alert(n.link)} className="text-amber-400 text-[12.5px] font-medium hover:underline">
                          {n.link} →
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
            <button onClick={() => alert("Loading more...")} className="text-gray-300 text-[13px] font-medium border border-[#2a2d3d] hover:bg-white/5 rounded-lg py-2.5 transition">
              Load More
            </button>
          </div>
  
          <div className="flex flex-col gap-5">
            <Card className="p-5">
              <h3 className="text-white text-[14.5px] font-bold mb-4">Account Status</h3>
              <div className="flex flex-col gap-3 text-[13px]">
                <div className="flex justify-between items-center"><span className="text-gray-400 flex items-center gap-1.5"><ShieldCheck size={13} className="text-amber-400" />Active Coverage</span><span className="text-amber-400 font-semibold">Ultimate Plan</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400 flex items-center gap-1.5"><Wrench size={13} />Open Claims</span><span className="text-gray-100 font-semibold">0</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400 flex items-center gap-1.5"><CreditCard size={13} />Next Payment</span><span className="text-gray-100 font-semibold">Oct 15, 2024</span></div>
              </div>
            </Card>
  
            <div className="relative rounded-2xl overflow-hidden border border-[#2a2d3d] p-5 bg-gradient-to-br from-[#241b3d] to-[#171422]">
              <span className="inline-block bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded mb-3">OFFER</span>
              <h3 className="text-white text-[15px] font-bold mb-1.5">Add Tire & Wheel Protection</h3>
              <p className="text-gray-400 text-[12.5px] mb-4 leading-relaxed">Extend your peace of mind with comprehensive coverage for road hazards.</p>
              <button onClick={() => alert("Viewing offer details...")} className="w-full bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] text-gray-200 text-[12.5px] font-semibold rounded-lg py-2.5 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }