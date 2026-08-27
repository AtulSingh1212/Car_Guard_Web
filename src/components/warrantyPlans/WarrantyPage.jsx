import React from 'react'
import Navbar from '../layout/Navbar'
import {
  Check,
  FileText,
  ShoppingCart,
} from "lucide-react";
import PageLayout from '../../pages/Layout/PageLayout';

const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Pick the coverage that best fits.",
  },
  {
    number: "2",
    title: "Get an Instant Quote",
    description: "See your price in seconds.",
  },
  {
    number: "3",
    title: "Purchase & Activate",
    description: "Complete activation online.",
  },
];

const WarrantyPage = () => {
  return (
    <PageLayout>

      <main className="flex-1 items-center px-6 justify-center relative w-full overflow-hidden ">

        <div className="absolute inset-0 w-full h-full"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
        />

        <div
          className="relative w-auto z-10 mx-auto min-h-[760px]  px-8 pt-[80px] sm:px-8 lg:px-6" >
          <div className="absolute mt-10 lg:mt-0 top-30 flex flex-col justify-center gap-3 h-[500px] w-[700px] max-w-[720px]">

            {/* Small title */}
            <p className="  mt-20 text-[20px] font-semibold uppercase tracking-[3px] text-[#ff7655]"
            >
              WARRANTY PLANS
            </p>

            {/* Main heading */}
            <h1 className="text-[48px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[90px]"
            >
              Protection that
              <br />

              Fits Every{" "}
              <span className="text-[#ff7655]">
                Drive.
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-5 text-lg lg:text-2xl py-2 w-[300px] lg:w-full font-normal leading-[1.65] text-slate-300"
            >
              Choose the right plan for your vehicle and enjoy complete
              <br className="hidden sm:block" />
              peace of mind on every mile you drive.
            </p>

          </div>
          <div
            className="absolute top-1 lg:top-[12px] px-10 rounded-[17px] border-4 border-white/20 w-auto  h-auto overflow-hidden lg:w-[350px] lg:h-[330px]
              bg-white/[0.10] backdrop-blur-md py-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.15)]


              sm:right-8
              lg:right-0
            "
          >

            {/* Card heading */}
            <h2
              className="
                text-[28px]
                font-semibold
                text-white
  "
            >
              How It Works
            </h2>


            {/* Steps */}
            <div className="mt-3 space-y-[1px] p-4  flex flex-col justify-between items-start gap-5">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start h-10 w-50  gap-2 "
                >

                  {/* Number */}
                  <div
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[3px] bg-[#8b4cf6]
             text-[14px] font-semibold text-white"
                  >
                    {step.number}
                  </div>

                  {/* Text */}
                  <div className="mt-[1px] gap-2 flex flex-col ">

                    <p
                      className="
                          whitespace-nowrap
                          text-[18px]
                          font-medium
                          leading-[12px]
                          text-white
                        "
                    >
                      {step.title}
                    </p>

                    <p
                      className="mt-[1px] whitespace-nowrap
                          text-[14px]
                          leading-[9px]
                          text-slate-400
          "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div
            className="
            mt-120 lg:mt-0  lg:absolute
              bottom-[-2px]
              left-0
              lg:w-full
              w-auto
              lg:text-center 
              p-4
              
            "
                      >

                        <h2
               className=" text-[30px] mt-2  font-semibold leading-tight tracking-[-1px] text-white
                sm:text-[60px]
              "
                        >
                          Choose Your Warranty Plan
                        </h2>

                        <p
                          className=" mt-2 w-[300px]  text-[20px] text-slate-400 tracking-widest lg:w-full md:w-auto"
            >
              Comprehensive coverage options designed for your vehicle
              and your peace of mind.
            </p>

          </div>

        </div>

      </main>
    </PageLayout>
  )
}

export default WarrantyPage