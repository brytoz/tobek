import React, { useEffect, useState } from "react";
import { LOGO } from "./images";
import { Link } from "react-router-dom";
import SmallBar from "./SmallBar";

const Navbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white shadow-md border-b text-white ");
      } else {
        setNavbarBg("bg-transparent border-0 text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [closeModal, setCloseModal] = useState(true);

  const toggle = () => {
    setCloseModal(!closeModal);
  };

  return (
    <nav
      className={`${navbarBg} dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600 transition-colors duration-300`}
    >
      {!closeModal ? <SmallBar close={toggle} /> : null}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LOGO} className="h-8" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/contact"
            type="button"
            className="text-white bg-[#7b0f0f] hover:bg-[#7b0f0f] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#7b0f0f] dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Contact Us
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggle}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="."
                className="block py-2 px-3  bg-orange-700 rounded md:bg-transparent  md:p-0 md:dark:hover:text-orange-500 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="about" className="block py-2 px-3  rounded md:p-0  ">
                About
              </a>
            </li>

            {/* <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
