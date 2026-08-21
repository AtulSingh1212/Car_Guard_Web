import { ArrowRight, ChevronDown, Headphones, HelpCircle, MessageSquare, Ticket } from "lucide-react";

const faqs = [
    { q: "How do I check the status of my claim?", a: "Go to My Claims from the sidebar. Each claim card shows a live status badge and progress tracker." },
    { q: "What is covered under the Ultimate Plan?", a: "The Ultimate Plan covers engine, transmission, electrical systems, A/C, and 24/7 roadside assistance." },
    { q: "Can I transfer my warranty if I sell my car?", a: "Yes, warranties are transferable to a new owner. Contact support to initiate a transfer." },
  ];

export default function ContactPage() {
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