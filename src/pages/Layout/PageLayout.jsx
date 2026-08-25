import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function PageLaout ({children}) {
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
            {children}
          </main>
        </div>
      </div>
    );
  };
  
