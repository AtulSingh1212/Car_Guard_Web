import React from "react";
import { ChevronDown, Check } from "lucide-react";

const plans = [
  { name: "Essential", price: "$349 / yr", highlighted: false },
  { name: "Premium Plus", price: "$549 / yr", highlighted: true },
  { name: "Ultimate", price: "$749 / yr", highlighted: false },
];

const rows = [
  { feature: "Engine & Transmission", values: [true, true, true] },
  { feature: "Drive Axle Coverage", values: [true, true, true] },
  { feature: "Electrical System", values: [false, true, true] },
  { feature: "Air Conditioning System", values: [false, true, true] },
  { feature: "24/7 Roadside Assistance", values: [false, true, true] },
  { feature: "High-Tech Components", values: [false, false, true] },
];

export default function ComparePlansTable() {
  return (
    <section className=" bg-[#0b1220] w-full mx-auto py-10 px-6 md:px-10 ">
      <div className="max-w-8xl h-[600px] mx-auto">
        <h2 className="text-white text-4xl md:text-4xl lg:text-4xl font-bold mb-10">
          Compare Plans Side by Side
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full  border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left pb-4 pr-4 align-bottom">
                  <span className="text-slate-400 text-2xl font-normal">Features</span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="pb-4 px-4 align-bottom text-center ">
                    <p
                      className={`text-2xl font-bold mb-0.5 ${
                        plan.highlighted ? "text-pink-500" : "text-white"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p className="text-slate-500 text-xl font-normal">{plan.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/[0.06] ${
                    i % 2 === 1 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-1.5 text-slate-300 text-lg">
                      {row.feature}
                      <ChevronDown size={15} className="text-slate-500" />
                    </div>
                  </td>
                  {row.values.map((included, idx) => (
                    <td key={idx} className="py-4 px-4 text-center">
                      {included ? (
                        <Check
                          size={16}
                          strokeWidth={3}
                          className={`inline-block ${
                            idx === 1 ? "text-pink-500" : "text-violet-400"
                          }`}
                        />
                      ) : (
                        <span className="text-slate-600 text-sm">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}