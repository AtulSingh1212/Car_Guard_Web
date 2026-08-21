import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from "react";
const Navbar = () => {

    const navItems = [
        {
            name: 'Home',
            to: '/home'
        },
        {
            name: 'About Us',
            to: '/about-us'
        },
        {
            name: 'Warranty Plans',
            to: '/warranty-plans'
        },
        {
            name: 'FQA  / Resources',
            to: '/fqa-resources'
        },
        {
            name: 'Contact Us',
            to: '/contact-us'
        }
    ]

  return (
    <section className='w-full h-20 px-4 py-4 backdrop-blur-md bg-blue-900/20  text-white'>
        <div className='w-full h-full flex justify-between items-center py-2'>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10'
                 src={"/assets/images/logo.png"} alt="logo" />
                <h1 className='text-2xl font-bold '><Link to="/">Car Engyisi</Link></h1>
            </div>
            <div className='flex gap-5 text-lg'>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        className='relative text-xl tracking-wide py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px]
                        text-sky-100 hover:text-white after:w-0 after:bg-[#e66109] after:transition-all after:duration-300 hover:after:w-full'
                        to={item.to}>{item.name}</Link>
                ))}

            </div>

            <div className='flex items-center gap-2 p-2 text-xl hover:text-gray-300 transition-all duration-100'>
                <Link to="/login">Login </Link>
                <span> /</span>
                <Link to="/register"> Register</Link>
            </div>
        </div>
    </section>)
    



  

}


export default Navbar