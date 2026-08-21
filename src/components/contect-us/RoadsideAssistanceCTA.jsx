import { Phone, Truck, MessageSquare, AlertTriangle } from "lucide-react";

export default function RoadsideAssistanceCTA() {
  return (
    <div className=" bg-[#111a2d] min-h-[400px] px-5 py-12 font-sans">
      <div className="max-w-[1480px] mx-auto">
        <div className="relative rounded-2xl border border-[#2a2d3d] overflow-hidden bg-[#12141f] px-2">
          {/* background image + overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=60')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e17] via-[#0d0e17]/85 to-[#0d0e17]/40 px-5" />

          {/* warning triangle watermark */}
          <AlertTriangle
            size={140}
            strokeWidth={1.5}
            className="absolute -right-2 top-1/2 -translate-y-1/2 text-red-700/40 hidden sm:block mr-5"
          />

          <div className="relative px-6 sm:px-8 py-8">
            <p className="text-orange-400 text-[12.5px] font-bold tracking-wider uppercase mb-2">
              Need immediate roadside assistance?
            </p>
            <h2 className="text-white text-3xl sm:text-[28px] font-bold mb-6 leading-tight">
              We're just a call away. Get help fast, 24/7.
            </h2>

            <div className="flex flex-wrap gap-3">
              {/* Call Now */}
              <button
                onClick={() => (window.location.href = "tel:8001234567")}
                className="flex items-center h-[90px] min-w-[340px] gap-3 bg-gradient-to-r from-orange-500 to-purple-600
                 hover:brightness-110 transition rounded-xl px-8 py-8 text-left min-w-[200px]"
              >
                <Phone size={22} className="text-white flex-shrink-0" />
                <span>
                  <span className="block text-white text-[18px] font-medium leading-tight">
                    Call now
                  </span>
                  <span className="block text-white text-[18px] font-semibold leading-tight">
                    (800) 123-4567
                  </span>
                </span>
              </button>

              {/* Request Assistance */}
              <button
                onClick={() => alert("Starting a service request...")}
                className="flex items-center h-[90px] gap-3 min-w-[340px] bg-white/5 hover:bg-white/10 border border-white/15 transition rounded-xl px-5 text-left"
              >
                <Truck size={22} className="text-gray-200 flex-shrink-0" />
                <span>
                  <span className="block text-gray-300 text-[18px] leading-tight">
                    Request assistance
                  </span>
                  <span className="block text-white text-[18px] font-semibold leading-tight">
                    Start a service request
                  </span>
                </span>
              </button>

              {/* Start Live Chat */}
              <button
                onClick={() => alert("Connecting you to live chat...")}
                className="flex items-center h-[90px] min-w-[340px] gap-3 bg-white/5 hover:bg-white/10 border border-white/15 transition rounded-xl px-5 py-3 text-left"
              >
                <MessageSquare size={22} className="text-gray-200 flex-shrink-0" />
                <span>
                  <span className="block text-gray-300 text-[18px] leading-tight">
                    Start live chat
                  </span>
                  <span className="block text-white text-[18px] font-semibold leading-tight">
                    Chat with an expert
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}