import React from "react";
import { MapPin, Heart, ThumbsUp, Award, ShieldCheck, HandHeart, Trophy } from "lucide-react";

import { ArrowRight, BadgeCheck, CircleCheck, Headphones, Play, UserRound, Wrench } from 'lucide-react'
import CtaBenner from "./CtaBenner";

const values = [
  {
    icon: ShieldCheck,
    iconBg: "bg-violet-500/90",
    title: "Integrity",
    description: "Honest coverage, clear terms, and no hidden surprises.",
  },
  {
    icon: Heart,
    iconBg: "bg-pink-500/90",
    title: "Reliability",
    description: "Dependable protection you can count on, mile after mile.",
  },
  {
    icon: HandHeart,
    iconBg: "bg-orange-500/90",
    title: "Customer First",
    description: "Your satisfaction drives everything we do as a brand.",
  },
  {
    icon: Trophy,
    iconBg: "bg-emerald-600/90",
    title: "Excellence",
    description: "High standards in service, support, and innovative solutions.",
  },
];

export default function JourneySection() {
    const bottomSection = [
        {
          id:1,
          icon:<UserRound size={38} className='text-2xl text-black rounded-full p-2'/>,
          count:"10K+",
          description:"HAPPY CUSTOMERS",
          bgColor:"bg-red-300"
        },
        {
          id:2,
          icon:<BadgeCheck size={38} color='blue'className='text-2xl text-blue-500 rounded-full p-2'/>,
          count:"25K+",
          description:"ACTIVE CONTRACTS",
          bgColor:"bg-sky-300"
        },
        {
          id:3,
          icon:<Wrench size={38} color='white' bgColor='white' className='text-2xl text-black rounded-full p-2'/>,
          count:"1.5K+",
          description:"REPAIRED PARTNERS",
          bgColor:"bg-orange-300"
        },
        {
          id:4,
          icon:<CircleCheck size={38} color='green'className='text-2xl text-green rounded-full p-2'/>,
          count:"98%",
          description:"CLAIM SETTLED",
          bgColor:"bg-green-200"
        },
        {
          id:5,
          icon:<Headphones size={38} color='white'className='text-2xl text-[#F2745F] rounded-full p-2'/>,
          count:"24/7 SUPPORT",
          description:"Always Here For You",
          bgColor:"bg-[#F2745F]",
          textBold:true
        },
      ]

  return (
    <div className="h-auto w-auto bg-[#0b1220] gap-10 flex flex-col">
        <div className=" flex justify-center items-center bottom-0 left-0  h-35  px-10">
          <div className='flex justify-around h-full w-full max-w-[1400px] items-center rounded-xl bg-white'>
              {bottomSection.map((btm)=>(
                <div key={btm.id} className='flex items-center justify-between h-auto w-auto gap-3 '>
                  <span className={`text-2xl p-3  cursor-pointer rounded-full ${btm.bgColor} `}>{btm.icon}</span>
                  <div className='flex flex-col items-start justify-center'>
                    <h1 className={`${btm.textBold?'text-md font-semibold text-gray-500':'text-2xl font-bold '}`}>{btm.count}</h1>
                    <p className={` ${btm.textBold?'font-bold text-2xl text-black':'text-md text-gray-500'}`}>{btm.description}</p>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
    <section className="w-full bg-[#0b1220] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left: image collage */}
        <div className="flex flex-col gap-3  h-140 justify-between items-center" >
          <div className="rounded-2xl rouneded h-92 md:h-80">
            <img
              src="assets/images/carMountain.png"
              alt="SUV driving on a mountain road"
              className="w-full object-cover h-92 rounded-2xl w-full cover-center"
            />
          </div>
          <div className="grid grid-cols-3 gap-10  items-center justify-between">
            <div className="rounded-xl overflow-hidden h-38">
              <img
                src="assets/images/handshak.png"
                alt="Business handshake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-38">
              <img
                src="assets/images/computer_girl.png"
                alt="Customer care representative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-38">
              <img
                src="assets/images/machanics.png"
                alt="Mechanic servicing a car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex flex-col">
          <span className="text-[#F2745F] text-md tracking-[0.15em] uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Your Journey, Our Commitment
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-md">
            We're more than just a warranty provider — we're your driving
            partner. CarGuard is backed by automotive experts and customer
            care professionals who are passionate about protecting what
            matters most to you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, iconBg, title, description }) => (
              <div
                key={title}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 hover:border-2 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon size={17} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-snug">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaBenner />
    </section>
    
    </div>
  );
}
