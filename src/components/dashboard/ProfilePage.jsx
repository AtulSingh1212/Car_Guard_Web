import { useState } from "react";
import { PageHeader } from "./PageHeader";
import { Check, Upload } from "lucide-react";

export default function ProfilePage() {
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
  