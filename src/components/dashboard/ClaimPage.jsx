import { ArrowRight, Download, Eye, Headphones, MapPin, Plus } from "lucide-react";
import { Card, PageHeader } from "./PageHeader";
const claims = [
  {
    id: "CL-2023-1104", status: "PENDING REVIEW", statusColor: "bg-amber-500/20 text-amber-300",
    title: "Engine Diagnostics & Repair", vehicle: "2022 Tesla Model S",
    submitted: "Oct 24, 2024", cost: "$1,250.00", shop: "Elite Motors Group",
  },
  {
    id: "CL-2024-0852", status: "APPROVED", statusColor: "bg-green-500/20 text-green-300",
    title: "Transmission Replacement", vehicle: "2020 BMW X5",
    date: "Aug 12, 2024", payout: "$3,400.00",
  },
  {
    id: "CL-2024-0511", status: "DENIED", statusColor: "bg-red-500/20 text-red-300",
    title: "Windshield Replacement", vehicle: "2022 Tesla Model S",
    date: "May 05, 2024", reason: "Not Covered",
  },
  {
    id: "CL-2023-1104b", status: "RESOLVED", statusColor: "bg-purple-500/20 text-purple-300",
    title: "A/C Compressor Issue", vehicle: "2020 BMW X5",
    date: "Nov 18, 2023", payout: "$850.00",
  },
];

export default function ClaimsPage() {
    const steps = ["SUBMITTED", "REVIEWING", "APPROVED", "PAID"];
    return (
      <div>
        <PageHeader
          title="My Claims"
          subtitle="Track and manage your current and historical protection claims. We aim for rapid resolution to get you back on the road."
          action={
            <button onClick={() => alert("Opening new claim form...")} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[13.5px] font-semibold rounded-lg px-5 py-2.5">
              <Plus size={15} /> File New Claim
            </button>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-gray-500 text-[11px] font-mono">{claims[0].id}</span>
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${claims[0].statusColor}`}>{claims[0].status}</span>
            </div>
            <h3 className="text-white text-[17px] font-bold mb-4">{claims[0].title}</h3>
            <div className="grid grid-cols-2 gap-4 mb-5 text-[12.5px]">
              <div><p className="text-gray-500 mb-1">VEHICLE</p><p className="text-gray-200 font-medium">{claims[0].vehicle}</p></div>
              <div><p className="text-gray-500 mb-1">SUBMITTED</p><p className="text-gray-200 font-medium">{claims[0].submitted}</p></div>
              <div><p className="text-gray-500 mb-1">ESTIMATED COST</p><p className="text-gray-200 font-medium">{claims[0].cost}</p></div>
              <div><p className="text-gray-500 mb-1">SHOP</p><p className="text-gray-200 font-medium">{claims[0].shop}</p></div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between text-[10px] text-gray-500 font-semibold mb-1.5">
                {steps.map((s, i) => <span key={i} className={i === 0 ? "text-amber-400" : ""}>{s}</span>)}
              </div>
              <div className="h-1 bg-[#232639] rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: "20%" }} />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => alert("Viewing claim details...")} className="flex items-center gap-1.5 bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
                <Eye size={13} /> View Details
              </button>
              <button onClick={() => alert("Tracking claim...")} className="flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
                <MapPin size={13} /> Track Claim
              </button>
            </div>
          </Card>
  
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-gray-500 text-[11px] font-mono">{claims[1].id}</span>
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${claims[1].statusColor}`}>{claims[1].status}</span>
            </div>
            <h3 className="text-white text-[17px] font-bold mb-4">{claims[1].title}</h3>
            <div className="flex justify-between text-[12.5px] mb-6">
              <div><p className="text-gray-500 mb-1">Vehicle</p><p className="text-gray-200 font-medium">{claims[1].vehicle}</p></div>
              <div><p className="text-gray-500 mb-1">Date</p><p className="text-gray-200 font-medium">{claims[1].date}</p></div>
              <div><p className="text-gray-500 mb-1">Payout</p><p className="text-purple-300 font-bold">{claims[1].payout}</p></div>
            </div>
            <button onClick={() => alert("Downloading documents...")} className="flex items-center gap-1.5 border border-[#2a2d3d] hover:bg-white/5 text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
              <Download size={13} /> View Documents
            </button>
          </Card>
  
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-gray-500 text-[11px] font-mono">{claims[2].id}</span>
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${claims[2].statusColor}`}>{claims[2].status}</span>
            </div>
            <h3 className="text-white text-[17px] font-bold mb-4">{claims[2].title}</h3>
            <div className="flex justify-between text-[12.5px] mb-6">
              <div><p className="text-gray-500 mb-1">Vehicle</p><p className="text-gray-200 font-medium">{claims[2].vehicle}</p></div>
              <div><p className="text-gray-500 mb-1">Date</p><p className="text-gray-200 font-medium">{claims[2].date}</p></div>
              <div><p className="text-gray-500 mb-1">Reason</p><p className="text-red-400 font-medium">{claims[2].reason}</p></div>
            </div>
            <button onClick={() => alert("Reviewing decision...")} className="flex items-center gap-1.5 border border-[#2a2d3d] hover:bg-white/5 text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
              Review Decision <ArrowRight size={13} />
            </button>
          </Card>
  
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-gray-500 text-[11px] font-mono">{claims[3].id}</span>
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${claims[3].statusColor}`}>{claims[3].status}</span>
            </div>
            <h3 className="text-white text-[17px] font-bold mb-4">{claims[3].title}</h3>
            <div className="flex justify-between text-[12.5px] mb-6">
              <div><p className="text-gray-500 mb-1">Vehicle</p><p className="text-gray-200 font-medium">{claims[3].vehicle}</p></div>
              <div><p className="text-gray-500 mb-1">Date</p><p className="text-gray-200 font-medium">{claims[3].date}</p></div>
              <div><p className="text-gray-500 mb-1">Payout</p><p className="text-purple-300 font-bold">{claims[3].payout}</p></div>
            </div>
            <button onClick={() => alert("Downloading documents...")} className="flex items-center gap-1.5 border border-[#2a2d3d] hover:bg-white/5 text-gray-200 text-[12.5px] font-semibold rounded-lg px-4 py-2.5 transition">
              <Download size={13} /> View Documents
            </button>
          </Card>
  
          <Card className="p-6 flex flex-col items-center justify-center text-center md:col-span-2">
            <div className="w-11 h-11 rounded-full bg-[#232639] flex items-center justify-center mb-3">
              <Headphones size={18} className="text-gray-300" />
            </div>
            <h3 className="text-white text-[15px] font-bold mb-1.5">Need Assistance?</h3>
            <p className="text-gray-500 text-[12.5px] mb-4 leading-relaxed">Our claims experts are available 24/7 to help you navigate the process.</p>
            <button onClick={() => alert("Connecting to expert...")} className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-[12.5px] font-semibold rounded-lg px-4 py-2 transition">
              Talk to an Expert
            </button>
          </Card>
        </div>
      </div>
    );
  }