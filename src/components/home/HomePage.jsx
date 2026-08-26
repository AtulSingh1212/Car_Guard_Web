import React from 'react'
import Navbar from '../layout/Navbar'
import { ArrowRight, BadgeCheck, CircleCheck, Headphones, Play, UserRound, Wrench } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
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

  const handleExploreWarrantyPlans = () => {
    navigate('/warranty-plans');
  }

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
          <div className='w-full max-w-7xl gap-9 flex sm:items-center lg:items-start gl:flex-col'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-3xl uppercase text-[#F2745F] font-bold tracking-widest'>Drive Worry-Free </h4>
              <h1 className='text-8xl font-bold text-white'>Every Mile <br /> <span className='text-[#F2745F]'>Protected</span></h1>
              <p className='text-2xl text-gray-200'>CarGuard Extended Warranty gives you complete <br /> protection
                and peace of mind on every journey</p>
            </div>

            <div className='flex gap-4 p-2'>
              <button 
              onClick={handleExploreWarrantyPlans}
              className='bg-[#F2745F] cursor-pointer text-black font-semubold text-xl px-4 py-2 rounded-2xl h-18 w-[300px] flex items-center justify-center gap-2'>Explore Warranty Plans <ArrowRight /></button>
              <button className='text-white font-semubold text-xl px-4 py-2 rounded-2xl h-18 w-[220px]
              backdrop-blur-sm bg-white/10 flex items-center justify-center gap-2 cursor-pointer'
              > <span className='text-2xl p-2 border-3 cursor-pointer rounded-full'><Play /></span> Watch Video</button>
            </div>
          </div>

        </main>

        <div className="flex items-center justify-center w-auto bottom-0 sm:left-0 lg:w-full lg:h-30 h-auto px-4 sm:px-6 lg:px-10">
          <div className='w-auto lg:w-[500px] overflow-hidden p-2 flex justify-around h-auto lg:h-full lg:w-full items-center rounded-lg bg-white gap-4 flex-col lg:flex-row'>
              {bottomSection.map((btm)=>(
                <div key={btm.id} className='flex items-center justify-between h-auto w-auto gap-3 '>
                  <span className={`flex items-center justify-center text-auto lg:text-2xl p-1 lg:p-3 size-12 lg:size-16  cursor-pointer rounded-full ${btm.bgColor} `}>{btm.icon}</span>
                  <div className='flex flex-col items-start justify-center'>
                    <h1 className={`${btm.textBold?'text-md font-semibold text-gray-500':'lg:text-2xl text-md font-bold '}`}>{btm.count}</h1>
                    <p className={` ${btm.textBold?'text-autofont-bold lg:text-2xl text-black':'text-sm text-gray-500'}`}>{btm.description}</p>
                  </div>
                </div>
              ))}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage