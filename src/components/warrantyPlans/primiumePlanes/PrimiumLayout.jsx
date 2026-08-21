import React from 'react'  
import { ArrowRight, BadgeCheck, CircleCheck, Headphones, Play, UserRound, Wrench } from 'lucide-react'
import PremiumPlan from './PrimiumPlanes'
import Navbar from '../../layout/Navbar'
import { useNavigate } from 'react-router-dom'

const PrimiumLayout = () => {
  const navigate = useNavigate();

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


      <div className="relative z-10 flex items-center justify-between min-h-screen flex-col">


        <div className="w-full bg-black/10">
          <Navbar />
        </div>


        <main className="flex  justify-center items-center w-full h-[100vh]">
         <PremiumPlan/>

        </main>

        {/* <div className=" absolute bottom-0 left-0 w-full h-30  px-10">
          <div className='flex justify-around h-full w-full items-center rounded-lg bg-white'>
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
        </div> */}

      </div>
    </div>
  )
}

export default PrimiumLayout