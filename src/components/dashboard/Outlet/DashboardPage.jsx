import { ArrowRight, CreditCard, FileText, Headphones, ShieldCheck, Ticket, Wrench } from "lucide-react";
import { Card } from "./PageHeader";
import { useNavigate } from "react-router-dom";
const vehicles = [
  {
    id: 1,
    name: "2022 Toyota RAV4 XLE",
    plate: "ABC-1234",
    vin: "JTMDFREV1NJ123456",
    mileage: "32,450 mi",
    status: "Active",
    tag: "Primary Commuter",
    plan: "Ultimate Protection Plan",
    planNote: "Expires: Oct 2026",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=60",
  },
  {
    id: 2,
    name: "2019 Porsche 911",
    plate: "FST-992",
    vin: "WP0AB2A90KS123456",
    mileage: "14,200 mi",
    status: "Pending Renewal",
    tag: "Weekend Driver",
    plan: "Powertrain Plus",
    planNote: "Expires in 14 days",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=60",
  },
];

 function DashboardPage({ go }) {
  const navigate = useNavigate();
    return (
      <div>
        <div className="relative rounded-2xl overflow-hidden mb-8 p-8 bg-gradient-to-br from-[#241b3d] via-[#1a1730] to-[#12131f] border border-[#2a2d3d]">
          <h1 className="text-white text-3xl font-extrabold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-400 text-[14px]">Here's what's happening with your coverage today.</p>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-bold">My Vehicles</h2>
              <button onClick={() => navigate("/dashboard/vehicles")} className="text-purple-400 cursor-pointer text-[13px] font-medium hover:underline flex items-center gap-1">
                View All Vehicles <ArrowRight size={13} />
              </button>
            </div>
  
            <Card className="p-5 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <img src={vehicles[0].img} alt="" className="w-full sm:w-40 h-28 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-white text-[16px] font-bold mb-1">{vehicles[0].name}</h3>
                  <p className="text-gray-500 text-[11.5px] font-mono bg-[#1a1c2b] inline-block px-2 py-0.5 rounded mb-3">
                    VIN: {vehicles[0].vin}
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <p className="text-gray-500 text-[10.5px] mb-1">Coverage Status</p>
                      <span className="bg-green-500/15 text-green-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10.5px] mb-1">Plan</p>
                      <p className="text-gray-200 text-[13px] font-semibold">Premium Plus</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10.5px] mb-1">Coverage Ends On</p>
                      <p className="text-gray-200 text-[13px] font-semibold">Jul 20, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
  
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-bold">Recent Claims</h2>
              <button onClick={() => navigate("/dashboard/claims")} className="text-purple-400 cursor-pointer text-[13px] font-medium hover:underline flex items-center gap-1">
                View All Claims <ArrowRight size={13} />
              </button>
            </div>
  
            <Card className="p-10 flex flex-col items-center justify-center text-center">
              <FileText size={44} className="text-[#333650] mb-4" />
              <p className="text-white text-[15px] font-semibold mb-1">No claims submitted yet.</p>
              <p className="text-gray-500 text-[13px] mb-5">If you need repair assistance, you can file a claim.</p>
              <button onClick={() => navigate("/dashboard/claims")} className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-500 text-white text-[13.5px] font-semibold rounded-lg px-5 py-2.5 flex items-center gap-2">
                File a Claim <ArrowRight size={14} />
              </button>
            </Card>
          </div>
  
          <div className="flex flex-col gap-6">
            <Card className="p-5 hover:bg-indigo-900/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-[15px] font-bold">Active Contract</h3>
                <span className="bg-green-500/15 text-green-400 text-[10.5px] font-semibold px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={16} className="text-purple-300" />
                </div>
                <div>
                  <p className="text-white text-[13.5px] font-bold">Premium Plus Plan</p>
                  <p className="text-gray-500 text-[11px]">Contract ID: CGU-2025-1001</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[12.5px] border-t border-[#262939] pt-4">
                <div className="flex justify-between"><span className="text-gray-500">Coverage Start Date</span><span className="text-gray-200">Jul 20, 2024</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Coverage End Date</span><span className="text-gray-200">Jul 20, 2026</span></div>
              </div>
              <button onClick={() => navigate("/dashboard/contracts")} className="w-full mt-4 text-purple-400 border border-purple-500/40 hover:bg-purple-500/10 text-[13px]
               cursor-pointer font-medium rounded-lg py-2.5 transition flex items-center justify-center gap-1.5">
                View Contract Details <ArrowRight size={13} />
              </button>
            </Card>
  
            <Card className="p-5">
              <h3 className="text-white text-[15px] font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CreditCard, label: "Buy a New Plan", page: "/warranty-plans" },
                  { icon: Ticket, label: "File a Claim", page: "/dashboard/claims" },
                  { icon: Wrench, label: "Roadside Assistance", page: "/dashboard/roadside" },
                  { icon: Headphones, label: "Contact Support", page: "/dashboard/contact" },
                ].map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => navigate(a.page)}
                      className="flex flex-col cursor-pointer items-center justify-center gap-2 bg-[#1a1c2b] border border-[#2a2d3d] hover:border-purple-500/50 rounded-xl py-4 transition"
                    >
                      <Icon size={17} className="text-gray-300" />
                      <span className="text-gray-300 text-[11.5px] font-medium text-center leading-tight">{a.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  export default DashboardPage;