import { Download, Eye, FileText, Settings } from "lucide-react";
import { Card, PageHeader } from "./PageHeader";

export default function ContractsPage() {
    const contracts = [
      { id: "AA-88392X", name: "Premium Plus Plan", status: "ACTIVE", statusColor: "text-purple-400",
        vehicle: "2022 Toyota RAV4 XLE", period: "Oct 2022 - Oct 2025", icon: Settings, action: "Download Policy", primary: true },
      { id: "AA-44112Y", name: "Standard Powertrain", status: "EXPIRED", statusColor: "text-red-400",
        vehicle: "2018 Honda Civic EX", period: "Jan 2018 - Jan 2021", icon: FileText, action: "Archive Policy", primary: false },
    ];
  
    return (
      <div>
        <PageHeader title="My Contracts" subtitle="Manage your active warranties and view past coverage history. Ensure your premium protection is up to date." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contracts.map((c, i) => {
            const Icon = c.icon;
            return (
              <Card key={i} className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.primary ? "bg-purple-600/20" : "bg-[#232639]"}`}>
                      <Icon size={17} className={c.primary ? "text-purple-300" : "text-gray-400"} />
                    </div>
                    <div>
                      <h3 className="text-white text-[16px] font-bold">{c.name}</h3>
                      <span className={`text-[11px] font-bold ${c.statusColor}`}>{c.status}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-[11px]">ID: {c.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div><p className="text-gray-500 text-[10.5px] mb-1">Vehicle</p><p className="text-gray-200 text-[13px] font-semibold">{c.vehicle}</p></div>
                  <div><p className="text-gray-500 text-[10.5px] mb-1">Coverage Period</p><p className="text-gray-200 text-[13px] font-semibold">{c.period}</p></div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => alert(`${c.action}...`)}
                    className={`flex items-center gap-2 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition ${
                      c.primary ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-[#1d1f30] hover:bg-[#242639] text-gray-200 border border-[#2a2d3d]"
                    }`}
                  >
                    <Download size={13} /> {c.action}
                  </button>
                  <button onClick={() => alert("Viewing details...")} className="flex items-center gap-2 bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
                    <Eye size={13} /> View Details
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }