import React, { useState } from "react";
import { LOGO } from "./images";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="logo transition-all duration-500   absolute top-0 left-0 right-0 z-10">
      <div className="transition-all duration-500 w-full p-3 flex justify-start items-center px-6  backdrop-blur-md  bg-black/20 text-white  font-bold   shadow-xlg glass2">
        <div className="w-1/5">
          <a href="/" className="flex items-center ">
            <img src={LOGO} alt="logo" className="w-6 md:w-8 h-6 md:h-8" />
            <span className="ml-2 textbase md:text-2xl font-black logo-color">
              TOBEKFOODS
            </span>
          </a>
        </div>
        <div className="w-1/5"></div>
        <div className="w-3/5 flex justify-end md:justify-around  ">
          <a
            href="/"
            className="hidden md:block transition-all duration-500 hover:text-[#7b0f0f]"
          >
            Home
          </a>
          <a
            href="/about"
            className="hidden md:block transition-all duration-500 hover:text-[#7b0f0f]"
          >
            About Us
          </a>

          <a
            href="/products"
            className="hidden md:block transition-all duration-500 hover:text-[#7b0f0f]"
          >
            Products
          </a>
          <a
            href="/contact"
            className="hidden md:block transition-all duration-500 hover:text-[#7b0f0f]"
          >
            Contact Us
          </a>

          <button
            className=" flex md:hidden text-xl  justify-end"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? <span> &#9776;</span> : <span> &times;</span>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="transition-all duration-500 absolute top-0 right-0 w-1/2 h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-30">
            <button
              className="block md:hidden text-5xl absolute top-2 right-2"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <a
              href="/"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lg transition-all duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="/products"
              className="text-lg transition-all duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="/contact"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Nav;
