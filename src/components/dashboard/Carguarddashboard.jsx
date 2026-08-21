import { useState } from "react";
import {
  ShieldCheck, LayoutGrid, FileText, Briefcase, Wrench, Car, Receipt, Bell,
  User, Headphones, LogOut, Search, Settings, ChevronRight, ChevronDown,
  Download, Eye, MapPin, Plus, ArrowRight, Check, Phone, MessageSquare,
  Battery, Fuel, Key, Gauge, CreditCard, Trash2, Upload, Star, AlertTriangle,
  Ticket, HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ---------------------------------- DATA --------------------------------- */

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "contracts", label: "My Contracts", icon: FileText },
  { id: "claims", label: "My Claims", icon: Briefcase },
  { id: "roadside", label: "Roadside Assistance", icon: Wrench },
  { id: "vehicles", label: "My Vehicles", icon: Car },
  { id: "payments", label: "Payments & Invoices", icon: Receipt },
  { id: "notifications", label: "Notifications", icon: Bell, badge: 2 },
  { id: "profile", label: "My Profile", icon: User },
  { id: "contact", label: "Contact Us", icon: Headphones },
];

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

const transactions = [
  { date: "Sep 20, 2024", invoice: "#INV-8492", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
  { date: "Aug 20, 2024", invoice: "#INV-7321", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
  { date: "Jul 20, 2024", invoice: "#INV-6110", desc: "Premium Plus Plan - Monthly", amount: "$49.10", status: "Paid" },
];

const notificationsData = [
  { id: 1, type: "Claims", time: "Just now", title: "Claim CL-2024-1009 Approved",
    desc: "Your claim for the transmission repair has been fully approved. Funds will be dispersed to the repair facility within 24 hours.",
    icon: Settings, color: "text-amber-400 bg-amber-500/10", link: "View Claim Details", unread: true },
  { id: 2, type: "Account", time: "2 hours ago", title: "Policy Renewal Successful",
    desc: "Your AutoArmor Ultimate plan for the 2021 BMW M3 has been successfully renewed for another year.",
    icon: Check, color: "text-blue-400 bg-blue-500/10", unread: true },
  { id: 3, type: "System", time: "Yesterday", title: "New Feature: Roadside Tracking Now Available",
    desc: "You can now track your assigned tow truck or assistance vehicle in real-time directly from the app.",
    icon: Settings, color: "text-gray-400 bg-gray-500/10", link: "Learn More", unread: false },
];

const faqs = [
  { q: "How do I check the status of my claim?", a: "Go to My Claims from the sidebar. Each claim card shows a live status badge and progress tracker." },
  { q: "What is covered under the Ultimate Plan?", a: "The Ultimate Plan covers engine, transmission, electrical systems, A/C, and 24/7 roadside assistance." },
  { q: "Can I transfer my warranty if I sell my car?", a: "Yes, warranties are transferable to a new owner. Contact support to initiate a transfer." },
];

/* ------------------------------- UI HELPERS ------------------------------- */

const Card = ({ children, className = "" }) => (
  <div className={`bg-[#141625] border border-[#2a2d3d] rounded-2xl ${className}`}>{children}</div>
);

const PageHeader = ({ title, subtitle, action }) => (
  <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
    <div>
      <h1 className="text-white text-3xl font-extrabold mb-1.5">{title}</h1>
      {subtitle && <p className="text-gray-400 text-[14px] max-w-[560px]">{subtitle}</p>}
    </div>
    {action}
  </div>
);

/* --------------------------------- SIDEBAR -------------------------------- */

function Sidebar({ active, setActive }) {
    const navigate = useNavigate();
  return (
    <div className="w-[220px] flex-shrink-0 bg-[#0f1119] border-r border-[#20222f] flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={16} className="text-white" />
        </div>
        <span className="text-white font-bold text-[16px]">Car Engyisi</span>
      </div>

      <nav className="flex-1 px-3 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition text-left ${
                isActive ? "bg-gradient-to-r from-purple-600/90 to-purple-700/70 text-white" : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
              }`}
            >
              <Icon size={16} className="flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-4">
        <div className="bg-[#171926] border border-[#2a2d3d] rounded-xl p-4 text-center mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center mx-auto mb-2">
            <Star size={16} className="text-white" />
          </div>
          <p className="text-white text-[13px] font-semibold mb-0.5">Refer & Earn</p>
          <p className="text-gray-500 text-[11px] mb-3 leading-snug">
            Invite your friends and earn exciting rewards.
          </p>
          <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-[12px] font-semibold rounded-lg py-2 flex items-center justify-center gap-1.5">
            Refer Now <ArrowRight size={12} />
          </button>
        </div>

        <button
        onClick={() => navigate("/login")}
         className="flex items-center gap-2.5 px-3 py-2.5 text-gray-400 hover:text-gray-200 text-[13px] w-full transition">
          
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </div>
  );
}

/* --------------------------------- TOPBAR --------------------------------- */

function Topbar() {
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
        <button className="relative text-gray-400 hover:text-gray-200 transition">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-purple-500 rounded-full text-[8px] flex items-center justify-center text-white font-bold">2</span>
        </button>
        <button className="text-gray-400 hover:text-gray-200 transition">
          <Settings size={18} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[12px] font-bold">
          A
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- DASHBOARD -------------------------------- */

function DashboardPage({ go }) {
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
            <button onClick={() => go("vehicles")} className="text-purple-400 text-[13px] font-medium hover:underline flex items-center gap-1">
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
            <button onClick={() => go("claims")} className="text-purple-400 text-[13px] font-medium hover:underline flex items-center gap-1">
              View All Claims <ArrowRight size={13} />
            </button>
          </div>

          <Card className="p-10 flex flex-col items-center justify-center text-center">
            <FileText size={44} className="text-[#333650] mb-4" />
            <p className="text-white text-[15px] font-semibold mb-1">No claims submitted yet.</p>
            <p className="text-gray-500 text-[13px] mb-5">If you need repair assistance, you can file a claim.</p>
            <button onClick={() => go("claims")} className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[13.5px] font-semibold rounded-lg px-5 py-2.5 flex items-center gap-2">
              File a Claim <ArrowRight size={14} />
            </button>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="p-5">
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
            <button onClick={() => go("contracts")} className="w-full mt-4 text-purple-400 border border-purple-500/40 hover:bg-purple-500/10 text-[13px] font-medium rounded-lg py-2.5 transition flex items-center justify-center gap-1.5">
              View Contract Details <ArrowRight size={13} />
            </button>
          </Card>

          <Card className="p-5">
            <h3 className="text-white text-[15px] font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: CreditCard, label: "Buy a New Plan", page: "payments" },
                { icon: Ticket, label: "File a Claim", page: "claims" },
                { icon: Wrench, label: "Roadside Assistance", page: "roadside" },
                { icon: Headphones, label: "Contact Support", page: "contact" },
              ].map((a, i) => {
                const Icon = a.icon;
                return (
                  <button
                    key={i}
                    onClick={() => go(a.page)}
                    className="flex flex-col items-center justify-center gap-2 bg-[#1a1c2b] border border-[#2a2d3d] hover:border-purple-500/50 rounded-xl py-4 transition"
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

/* -------------------------------- CONTRACTS -------------------------------- */

function ContractsPage() {
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

/* ---------------------------------- CLAIMS ---------------------------------- */

function ClaimsPage() {
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

/* ------------------------------ ROADSIDE ASSIST ------------------------------ */

function RoadsidePage() {
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

/* -------------------------------- MY VEHICLES -------------------------------- */

function VehiclesPage() {
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

/* ------------------------------ PAYMENTS -------------------------------- */

function PaymentsPage() {
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

/* ------------------------------ NOTIFICATIONS ------------------------------ */

function NotificationsPage() {
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

/* --------------------------------- PROFILE --------------------------------- */

function ProfilePage() {
  const [prefs, setPrefs] = useState({ claims: true, account: true, marketing: false });
  const [profile, setProfile] = useState({
    name: "Alex Sterling",
    email: "alex.sterling@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Horizon Drive, Cyber City, CA 90210",
  });
  const [editing, setEditing] = useState(false);

  function updateField(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Manage your personal information, security settings, and preferences." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-5">
          <Card className="p-6 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=60" alt="Alex Sterling" className="w-full h-full rounded-full object-cover border-2 border-amber-400" />
            </div>
            <h3 className="text-white text-[17px] font-bold mb-1">{profile.name}</h3>
            <p className="text-amber-400 text-[12px] font-medium mb-4 flex items-center justify-center gap-1">
              <Check size={12} /> Premium Member
            </p>
            <button onClick={() => alert("Opening file picker...")} className="flex items-center gap-2 mx-auto border border-[#2a2d3d] hover:bg-white/5 text-gray-200 text-[12.5px] font-medium rounded-lg px-4 py-2 transition">
              <Upload size={13} /> Upload New Picture
            </button>
          </Card>

          <Card className="p-6">
            <h3 className="text-white text-[14.5px] font-bold mb-4">Account Status</h3>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <div className="flex justify-between"><span className="text-gray-500">Member Since</span><span className="text-gray-200">Oct 2022</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Active Vehicles</span><span className="text-gray-200">2</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Active Claims</span><span className="text-gray-200">0</span></div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-[14.5px] font-bold flex items-center gap-2"><User size={15} /> Personal Information</h3>
              <button onClick={() => setEditing(!editing)} className="text-purple-400 text-[12.5px] font-medium hover:underline flex items-center gap-1">
                <FileText size={12} /> {editing ? "Done" : "Edit"}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 text-[11px] mb-1.5">Full Name</label>
                <input disabled={!editing} value={profile.name} onChange={(e) => updateField("name", e.target.value)}
                  className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[12.5px] px-3 py-2 outline-none focus:border-purple-500 disabled:opacity-70" />
              </div>
              <div>
                <label className="block text-gray-500 text-[11px] mb-1.5">Email Address</label>
                <input disabled={!editing} value={profile.email} onChange={(e) => updateField("email", e.target.value)}
                  className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[12.5px] px-3 py-2 outline-none focus:border-purple-500 disabled:opacity-70" />
              </div>
              <div>
                <label className="block text-gray-500 text-[11px] mb-1.5">Phone Number</label>
                <input disabled={!editing} value={profile.phone} onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[12.5px] px-3 py-2 outline-none focus:border-purple-500 disabled:opacity-70" />
              </div>
              <div>
                <label className="block text-gray-500 text-[11px] mb-1.5">Residential Address</label>
                <input disabled={!editing} value={profile.address} onChange={(e) => updateField("address", e.target.value)}
                  className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[12.5px] px-3 py-2 outline-none focus:border-purple-500 disabled:opacity-70" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-white text-[14.5px] font-bold mb-4">Preferences</h3>
            <div className="flex flex-col gap-4">
              {[
                { key: "claims", title: "Claims Notifications", desc: "Receive updates on your active warranty claims." },
                { key: "account", title: "Account Updates", desc: "Important notices regarding your account status." },
                { key: "marketing", title: "Marketing Emails", desc: "Receive offers and news from AutoArmor." },
              ].map((p) => (
                <div key={p.key} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-200 text-[13px] font-medium">{p.title}</p>
                    <p className="text-gray-500 text-[11.5px]">{p.desc}</p>
                  </div>
                  <button
                    onClick={() => setPrefs((prev) => ({ ...prev, [p.key]: !prev[p.key] }))}
                    className={`w-10 h-[22px] rounded-full flex items-center px-0.5 transition flex-shrink-0 ${prefs[p.key] ? "bg-purple-600 justify-end" : "bg-[#2a2d3d] justify-start"}`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white block" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-500 text-[11.5px] border-t border-[#20222f] pt-5 flex-wrap gap-3">
        <span>© 2024 AutoArmor Financial Services. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- CONTACT --------------------------------- */

function ContactPage() {
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit() {
    if (!subject.trim() || !issue.trim()) {
      alert("Please fill in both the subject and description.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubject("");
      setIssue("");
    }, 2000);
  }

  return (
    <div>
      <PageHeader title="How can we help?" subtitle="Access expert assistance, manage your tickets, or find quick answers to common questions about your premium coverage." />

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 mb-6">
        <Card className="p-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-lg bg-purple-600/20 flex items-center justify-center">
              <Ticket size={16} className="text-purple-300" />
            </div>
            <h3 className="text-white text-[16px] font-bold">Raise Ticket</h3>
          </div>
          <p className="text-gray-400 text-[13px] mb-5">
            Need specific help with a claim or your contract? Open a detailed support ticket and our experts will investigate immediately.
          </p>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[13px] placeholder-gray-500 px-3.5 py-2.5 outline-none focus:border-purple-500 mb-3"
          />
          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Describe your issue..."
            rows={4}
            className="w-full bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg text-gray-200 text-[13px] placeholder-gray-500 px-3.5 py-2.5 outline-none focus:border-purple-500 mb-4 resize-none"
          />
          <button
            onClick={handleSubmit}
            className={`flex items-center gap-2 text-white text-[13.5px] font-semibold rounded-lg px-5 py-2.5 transition ${submitted ? "bg-green-600" : "bg-purple-600 hover:bg-purple-700"}`}
          >
            {submitted ? "Ticket Submitted ✓" : "Submit Ticket"}
            {!submitted && <ArrowRight size={14} />}
          </button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Headphones size={16} className="text-orange-400" />
            </div>
            <h3 className="text-white text-[16px] font-bold">Contact Support</h3>
          </div>
          <p className="text-gray-400 text-[13px] mb-5">
            Immediate assistance is available during business hours for urgent inquiries.
          </p>
          <button onClick={() => (window.location.href = "tel:1800288276")} className="w-full flex items-center gap-3 bg-[#1a1c2b] hover:bg-[#1f2233] border border-[#2a2d3d] rounded-lg px-3.5 py-3 mb-3 transition text-left">
            <Phone size={15} className="text-purple-300" />
            <span>
              <span className="block text-gray-500 text-[10px] font-semibold">TOLL-FREE</span>
              <span className="block text-gray-100 text-[13px] font-semibold">1-800-AUTO-ARM</span>
            </span>
          </button>
          <button onClick={() => alert("Starting live chat...")} className="w-full flex items-center gap-3 bg-[#1a1c2b] hover:bg-[#1f2233] border border-[#2a2d3d] rounded-lg px-3.5 py-3 transition text-left">
            <MessageSquare size={15} className="text-gray-300" />
            <span className="text-gray-100 text-[13px] font-semibold">Start Live Chat</span>
          </button>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <HelpCircle size={16} className="text-amber-400" />
          </div>
          <h3 className="text-white text-[16px] font-bold">Frequently Asked Questions</h3>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#1a1c2b] border border-[#2a2d3d] rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="text-gray-100 text-[13.5px] font-medium">{f.q}</span>
                <ChevronDown size={15} className={`text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-gray-400 text-[12.5px] leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ----------------------------------- APP ----------------------------------- */

export default function CarGuardDashboard() {
  const [active, setActive] = useState("dashboard");
  
  function renderPage() {
    switch (active) {
      case "dashboard": return <DashboardPage go={setActive} />;
      case "contracts": return <ContractsPage />;
      case "claims": return <ClaimsPage />;
      case "roadside": return <RoadsidePage />;
      case "vehicles": return <VehiclesPage />;
      case "payments": return <PaymentsPage />;
      case "notifications": return <NotificationsPage />;
      case "profile": return <ProfilePage />;
      case "contact": return <ContactPage />;
      default: return <DashboardPage go={setActive} />;
    }
  }

  return (
    <div className="flex bg-[#0d0e17] min-h-screen font-sans">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 min-w-0">
        <Topbar />
        <div className="px-8 py-8">{renderPage()}</div>
      </div>
    </div>
  );
}