import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section
      className="
        relative min-h-[580px] w-full
        bg-[url('/assets/images/background_image.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#071225]/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1200px] items-center px-8 md:px-12 lg:px-16">
        <div className="max-w-[500px]">

          {/* Small heading */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#ff7655]">
            About CarGuard
          </p>

          {/* Main heading */}
          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-5xl">
            Built on Trust.
            <br />
            Driven by{" "}
            <span className="text-[#ff7655]">
              Protection.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[450px] text-sm leading-6 text-slate-300">
            CarGuard Extended Warranty was created with a simple
            belief — every driver deserves peace of mind on the road.
            We make vehicle ownership worry-free with reliable
            coverage, transparent pricing, and support that’s always
            there when you need it most.
          </p>

          {/* Button */}
          <button
            type="button"
            className="
              mt-7 flex items-center gap-2
              rounded-lg
              bg-gradient-to-r from-[#ff6b4a] to-[#ffb46b]
              px-6 py-3
              text-sm font-semibold text-black
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-lg hover:shadow-orange-500/20
            "
          >
            View Our Plans

            <ArrowRight size={17} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;