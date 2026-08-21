import React from 'react'
import { ArrowRight } from 'lucide-react'
import AddVehicle from './ AddVehicle'
import Navbar from '../../layout/Navbar'

const AddVehicleLayout = () => {
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
            <AddVehicle />

        </main>

        <div className="w-full bg-black/10">
          {/* <footer /> */}
        </div>

      </div>
    </div>
  )
}

export default AddVehicleLayout