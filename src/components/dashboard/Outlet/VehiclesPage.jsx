import { useState } from "react";
import { PageHeader } from "./PageHeader";
import { Card } from "./PageHeader";
// import { FileText, Plus, Eye } from "lucide-react";
// import { PageHeader } from "./PageHeader";
// import { Card } from "./PageHeader";
import { ShieldCheck, FileText, Plus, Eye } from "lucide-react";
export default function VehiclesPage() {
  

    const vehicles = [
      { id: 1, name: "2022 Toyota RAV4 XLE", plate: "ABC-1234", vin: "JTMDFREV1NJ123456", mileage: "32,450 mi", status: "Active", tag: "Primary Commuter", plan: "Ultimate Protection Plan", planNote: "Expires: Oct 2026", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=60" },
      { id: 2, name: "2019 Porsche 911", plate: "FST-992", vin: "WP0AB2A90KS123456", mileage: "14,200 mi", status: "Pending Renewal", tag: "Weekend Driver", plan: "Powertrain Plus", planNote: "Expires in 14 days", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=60" },
    ];

    return (
      <div>
        <PageHeader
          title="Vehicle Information"
          subtitle="Manage your registered vehicles, monitor mileage, and check current coverage status for your premium automotive assets."
          action={
            <button onClick={() => alert("Opening add vehicle form...")} className="flex items-center gap-2 border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-[13px] font-semibold rounded-lg px-4 py-2.5 transition">
              <Plus size={15} /> Add New Vehicle
            </button>
          }
        />
        <div className="flex flex-col gap-5">
          {vehicles.map((v) => (
            <Card key={v.id} className="p-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative w-full sm:w-44 h-32 flex-shrink-0">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover rounded-xl" />
                  <span className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    v.status === "Active" ? "bg-green-500/80 text-white" : "bg-amber-500/80 text-white"
                  }`}>
                    {v.status}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-white text-[18px] font-bold">{v.name}</h3>
                    <button onClick={() => alert("Editing vehicle...")} className="text-gray-500 hover:text-gray-300 transition">
                      <FileText size={15} />
                    </button>
                  </div>
                  <p className="text-amber-400 text-[12.5px] font-medium mb-4">{v.tag}</p>
  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><p className="text-gray-500 text-[10px] mb-1">LICENSE PLATE</p><p className="text-gray-100 text-[13.5px] font-semibold">{v.plate}</p></div>
                    <div><p className="text-gray-500 text-[10px] mb-1">MILEAGE</p><p className="text-gray-100 text-[13.5px] font-semibold">{v.mileage}</p></div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-500 text-[10px] mb-1">VIN</p>
                    <p className="text-gray-400 text-[12.5px] font-mono">{v.vin}</p>
                  </div>
  
                  <div className="flex items-center justify-between border-t border-[#262939] pt-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-purple-300" />
                      <div>
                        <p className="text-gray-200 text-[13px] font-medium">{v.plan}</p>
                        <p className={`text-[11px] ${v.status === "Active" ? "text-gray-500" : "text-red-400"}`}>{v.planNote}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(v.status === "Active" ? "Viewing details..." : "Renewing coverage...")}
                      className={`flex items-center gap-1.5 text-[12.5px] font-semibold rounded-lg px-4 py-2 transition ${
                        v.status === "Active" ? "bg-[#1d1f30] hover:bg-[#242639] border border-[#2a2d3d] text-gray-200" : "border border-amber-500/50 text-amber-300 hover:bg-amber-500/10"
                      }`}
                    >
                      {v.status === "Active" ? <><Eye size={13} /> View Details</> : "Renew Coverage"}
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }