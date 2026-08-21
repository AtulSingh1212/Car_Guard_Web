import { CreditCard, Download, Receipt, ShieldCheck, Trash2 } from "lucide-react";
import { Card, PageHeader } from "./PageHeader";

const transactions = [
  { date: "Sep 20, 2024", invoice: "#INV-8492", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
  { date: "Aug 20, 2024", invoice: "#INV-7321", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
  { date: "Jul 20, 2024", invoice: "#INV-6110", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
];


export default function PaymentsPage() {
    return (
      <div>
        <PageHeader title="Payments & Invoices" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-[12.5px]">Total Amount Paid</p>
              <div className="w-7 h-7 rounded-lg bg-[#232639] flex items-center justify-center"><CreditCard size={13} className="text-gray-300" /></div>
            </div>
            <p className="text-white text-2xl font-extrabold mb-1">$1,245.00</p>
            <p className="text-green-400 text-[11.5px]">↗ Lifetime</p>
          </Card>
          <Card className="p-5 border-purple-500/40">
            <div className="flex items-center justify-between mb-3">
              <p className="text-purple-300 text-[12.5px]">Next Scheduled Payment</p>
              <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center"><Receipt size={13} className="text-purple-300" /></div>
            </div>
            <p className="text-white text-2xl font-extrabold mb-1">$49.10</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-[11.5px]">Due on Oct 20</p>
              <button onClick={() => alert("Redirecting to payment...")} className="text-purple-400 text-[11.5px] font-semibold hover:underline">Pay Now →</button>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-[12.5px]">Active Warranty Plans</p>
              <div className="w-7 h-7 rounded-lg bg-[#232639] flex items-center justify-center"><ShieldCheck size={13} className="text-gray-300" /></div>
            </div>
            <p className="text-white text-2xl font-extrabold mb-1">1</p>
            <p className="text-gray-500 text-[11.5px]">Premium Plus Plan</p>
          </Card>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">
          <Card className="p-6">
            <h2 className="text-white text-lg font-bold mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-[11px] border-b border-[#262939]">
                    <th className="pb-2.5 font-medium">Date</th>
                    <th className="pb-2.5 font-medium">Invoice ID</th>
                    <th className="pb-2.5 font-medium">Description</th>
                    <th className="pb-2.5 font-medium">Amount</th>
                    <th className="pb-2.5 font-medium">Status</th>
                    <th className="pb-2.5 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t, i) => (
                    <tr key={i} className="border-b border-[#20222f] last:border-0">
                      <td className="py-3 text-gray-300 text-[12.5px]">{t.date}</td>
                      <td className="py-3 text-gray-400 text-[12.5px]">{t.invoice}</td>
                      <td className="py-3 text-gray-300 text-[12.5px]">{t.desc}</td>
                      <td className="py-3 text-gray-100 text-[12.5px] font-medium">{t.amount}</td>
                      <td className="py-3">
                        <span className="flex items-center gap-1 bg-green-500/15 text-green-400 text-[11px] font-medium px-2 py-0.5 rounded-full w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {t.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <button onClick={() => alert(`Downloading ${t.invoice}...`)} className="text-gray-400 hover:text-gray-200 transition"><Download size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="text-purple-400 text-[12.5px] font-medium hover:underline mt-4">View All Transactions</button>
          </Card>
  
          <div className="flex flex-col gap-5">
            <Card className="p-5">
              <h3 className="text-white text-[14.5px] font-bold mb-4">Payment Methods</h3>
              <div className="flex items-center justify-between bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg px-3.5 py-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-[13px] font-bold italic">VISA</span>
                  <span className="text-gray-300 text-[12.5px]">•••• 4242</span>
                  <span className="bg-[#2a2d3d] text-gray-400 text-[9.5px] font-semibold px-1.5 py-0.5 rounded">DEFAULT</span>
                </div>
                <button onClick={() => alert("Removing card...")} className="text-gray-500 hover:text-red-400 transition"><Trash2 size={14} /></button>
              </div>
              <p className="text-gray-500 text-[11px] mb-3">Expires 12/25</p>
              <button onClick={() => alert("Adding payment method...")} className="w-full text-purple-400 border border-[#2a2d3d] hover:bg-white/5 text-[12.5px] font-medium rounded-lg py-2.5 transition">
                + Add New Payment Method
              </button>
            </Card>
  
            <Card className="p-5">
              <h3 className="text-white text-[14.5px] font-bold mb-4">Billing Settings</h3>
              <label className="block text-gray-500 text-[11px] mb-1.5">Billing Email</label>
              <div className="flex gap-2">
                <input defaultValue="alex.j@example.com" className="flex-1 bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[12.5px] px-3 py-2 outline-none focus:border-purple-500" />
                <button onClick={() => alert("Email updated!")} className="bg-[#232639] hover:bg-[#2a2d42] text-gray-200 text-[12px] font-medium rounded-lg px-3.5">Update</button>
              </div>
              <p className="text-gray-500 text-[11px] mt-2">Invoices and receipts will be sent to this email address.</p>
            </Card>
          </div>
        </div>
      </div>
    );
  }