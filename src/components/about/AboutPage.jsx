import React from 'react'
import Navbar from '../layout/Navbar'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="
          relative
          min-h-screen
          w-full
          bg-[url('/assets/images/background_image.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
    >

      <div className="absolute inset-0 bg-[#071225]/65" />


      <div className="relative z-10 flex min-h-screen flex-col">


        <div className="w-full bg-black/10">
          <Navbar />
        </div>


        <main className="flex-1">


          <section
            className="
        relative min-h-[580px] w-full
        bg-cover bg-center bg-no-repeat
      "
          >
            {/* Dark overlay */}
            <div className="absolute inset-0  " />

            {/* Content */}
            <div className="relative z-10 mt-20 mx-auto flex min-h-[580px] max-w-[1400px] items-center px-8 md:px-12 lg:px-16">
              <div className="w-[900px] h-[400px] justify-between">

                {/* Small heading */}
                <p className="mb-3 text-md font-semibold uppercase tracking-[3px] text-[#ff7655]">
                  About CarGuard
                </p>

                {/* Main heading */}
                <h1 className="text-7xl font-bold leading-[1.05] text-white">
                  Built on Trust.
                  <br />
                  Driven by{" "}
                  <span className="text-7xl text-[#ff7655]">
                    Protection.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-[450px] text-md leading-6 text-slate-300">
                  CarGuard Extended Warranty was created with a simple
                  belief — every driver deserves peace of mind on the road.
                  We make vehicle ownership worry-free with reliable
                  coverage, transparent pricing, and support that’s always
                  there when you need it most.
                </p>

                {/* Button */}
                <button
                onClick={()=>navigate('/warranty-plans')}
                  type="button"
                  className="
                  mb-2 lg:mb-0
              mt-7 flex items-center gap-2
              rounded-lg
              bg-gradient-to-r from-[#ff6b4a] to-[#ffb46b]
              px-6 py-3
              text-md font-semibold text-black
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-lg hover:shadow-orange-500/20
              h-15 w-60
            "
                >
                  View Our Plans

                  <ArrowRight size={17} />
                </button>

              </div>
            </div>
          </section>

        </main>

        <div className="w-full bg-black/10">
          {/* <footer /> */}
        </div>

      </div>
    </div>
  )
}

export default AboutPage