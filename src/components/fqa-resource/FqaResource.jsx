import React from 'react'
import Navbar from '../layout/Navbar'

const FqaResource = () => {
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
        relative
        mt-10
        min-h-[460px]
        h-[500px]
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        flex items-center justify-between
        px-6 md:px-10
      "
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 " />

            {/* Bottom dark gradient */}

            {/* Content */}
            <div
              className="
          relative
          z-10
          mx-auto
          flex
          min-h-[405px]
          
          w-full
          
          items-start
          px-6
          pt-[88px] 
          md:px-8
          lg:px-8
        "
            >
              <div className="w-[920px] px-20 py-10">

                {/* Small heading */}
                <p
                  className="
            w-full
              mb-4
              text-2xl
              font-semibold
              uppercase
              tracking-[3px]
              text-[#ff7655]
            "
                >
                  FAQ / RESOURCES
                </p>

                {/* Main heading */}
                <h1
                  className="
            
              text-6xl
              font-semibold
              leading-[1.08]
              tracking-[-1.5px]
              text-white
              w-full
              text-center
              md:text-left
            "
                >
                  Find Answers.
                  <br />

                  Drive with{" "}
                  <span className="text-[#ff7655]">
                    Confidence.
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="
            
              mt-5
              max-w-[990px]
              text-[20px]
              leading-[1.6]
              text-slate-300
            "
                >
                  Helpful guides, tools, and answers to keep you informed and
                  protected throughout your
                  vehicle ownership journey.
                </p>

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

export default FqaResource