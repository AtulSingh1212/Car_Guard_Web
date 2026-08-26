import { ShieldCheck, Headset, ArrowRight } from "lucide-react";

export default function QuestionsCTA() {
  return (
    <section
      className="
        bg-[#0d0e17]
        px-4
        py-10
        font-sans
        sm:px-6
        sm:py-12
        lg:px-8
    "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-2xl
          border
          border-[#3a2f52]
          bg-[radial-gradient(120%_160%_at_15%_20%,#4a2a6e_0%,#241a3d_42%,#171522_70%,#100e18_100%)]
        "
      >
        {/* Light streak */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(115deg,transparent_40%,rgba(233,110,60,0.12)_55%,transparent_70%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative
            flex
            flex-col
            gap-6
            p-5
            sm:p-6
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-8
            lg:px-8
            lg:py-7
          "
        >
          {/* ================================= */}
          {/* Left: Icon + Text */}
          {/* ================================= */}

          <div
            className="
              flex
              min-w-0
              items-start
              gap-3
              sm:gap-4
              md:max-w-[650px]
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[linear-gradient(135deg,#c2418f_0%,#7c3aed_100%)]
                shadow-lg
                shadow-purple-900/20
              "
            >
              <ShieldCheck
                size={20}
                color="#ffffff"
                strokeWidth={2}
              />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <h2
                className="
                  mb-1.5
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-2xl
                "
              >
                Have more questions?
              </h2>

              <p
                className="
                  max-w-[520px]
                  text-sm
                  leading-6
                  text-[#a9abbd]
                  sm:text-base
                  lg:text-lg
                "
              >
                Our warranty experts are ready to provide the clarity you
                need for your specific vehicle protection goals.
              </p>
            </div>
          </div>

          {/* ================================= */}
          {/* Right: Buttons */}
          {/* ================================= */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              md:w-auto
              md:shrink-0
            "
          >
            {/* Talk to expert */}
            <button
              onClick={() =>
                alert("Connecting you to an expert...")
              }
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[10px]
                border-none
                bg-[#5a3ec8]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                duration-200
                hover:bg-[#6b4ade]
                active:scale-[0.98]
                sm:w-auto
                sm:whitespace-nowrap
              "
            >
              Talk to an expert
              <Headset size={16} />
            </button>

            {/* Free quote */}
            <button
              onClick={() =>
                alert("Redirecting to free quote form...")
              }
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[10px]
                border-none
                bg-[linear-gradient(90deg,#8b3fd4_0%,#e0663f_100%)]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                duration-200
                hover:brightness-110
                active:scale-[0.98]
                sm:w-auto
                sm:whitespace-nowrap
              "
            >
              Get a free quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
