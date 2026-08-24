import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      to: "/home",
    },
    {
      name: "About Us",
      to: "/about-us",
    },
    {
      name: "Warranty Plans",
      to: "/warranty-plans",
    },
    {
      name: "FAQ / Resources",
      to: "/fqa-resources",
    },
    {
      name: "Contact Us",
      to: "/contact-us",
    },
  ];

  return (
    <section className="w-full min-h-20 px-4 py-4 backdrop-blur-md bg-blue-900/20 text-white">
      <div className="w-full flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10"
            src="/assets/images/logo.png"
            alt="logo"
          />

          <h1 className="text-xl sm:text-2xl font-bold">
            <Link to="/">Car Engyisi</Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative text-lg tracking-wide py-2
              text-sky-100 hover:text-white
              after:absolute after:bottom-0 after:left-0
              after:h-[2px] after:w-0
              after:bg-[#e66109]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login/Register - Desktop */}
        <div className="hidden lg:flex items-center gap-2 text-lg">
          <Link
            to="/login"
            className="hover:text-gray-300 transition"
          >
            Login
          </Link>

          <span>/</span>

          <Link
            to="/register"
            className="hover:text-gray-300 transition"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden mt-5 pb-3">

          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2
                text-lg text-sky-100
                hover:text-white
                hover:bg-blue-800/30
                rounded-md transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Login/Register */}
          <div className="flex justify-center items-center gap-3 mt-4 text-lg">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Login
            </Link>

            <span>/</span>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Register
            </Link>
          </div>

        </div>
      )}
    </section>
  );
};

export default Navbar;  