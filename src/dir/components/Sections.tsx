import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {   X01 } from "./images";
import { Link } from "react-router-dom";

const Sections: React.FC = () => {
  return (
    <Fragment>
      <div
        style={{ zIndex: 80 }}
        className=" py-12 overflow-hidden  w-full flex md:px-12 overflow-x-hidden"
      >
        <div className=" w-full h-full bg-inherit  md:w-[40%]    justify-center items-center  hidden md:inline-block lg:mr-6 ">
          <motion.img
            src={X01}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            alt="image"
            className="w-full flex  items-center h-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110   "
          />
        </div>

        <div className="bg-white overflow-hidden relative  w-full md:mt-0 justify-center  content-center flex  lg:pl-8 md:w-[60%]">
          <div className="overflow-hidden w-full flex-wrap justify-begin  items-start pt-12 md:pt-0 space-y-4 md:space-y-12  px-4 md:px-0 text-center md:text-left  text-[#2b3544]">
            {/* <div
              className="relative overflow-hidden "
              style={{ zIndex: 1, opacity: 1 }}
            ></div> */}
            <motion.div
              animate={{ x: 1, opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeIn" }}
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0, x: -150 }}
              className="w-full flex justify-center md:justify-start items-center  font-extrabold   md:pt-[-8] "
            >
              <h1 className="text-4xl lg:text-6xl  relative pb-2 ">
                Tobek Foods
                <span className="mt-4 absolute inset-x-0 bottom-0 h-1 bg-[#7b0f0f]  mx-auto w-1/3"></span>
              </h1>
            </motion.div>
            <motion.div
              animate={{ x: 1, opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeIn" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0, x: -150 }}
              className="w-full   text-sm md:text-base  font-n ormal  tracking-wide leading-[2em]"
            >
              With a history of excellence in large-scale and retail food
              processing, we have the capability to deliver products efficiently
              at any volume. Our commitment to international growth fuels our
              ambition to expand globally, ensuring we meet the diverse needs of
              customers around the world.
            </motion.div>

            <div className="flex-row space-x-4 pb-3 md:pb-8">
              <Link to="/">
                <motion.div
                  animate={{ x: 1, opacity: 1 }}
                  transition={{ delay: 0.5, ease: "easeIn" }}
                  initial={{ x: -260, opacity: 0 }}
                  className="inline-flex"
                >
                  <span className="bg-[#7b0f0f] inline-flex items-center justify-center px-6 py-1 md:py-1.5 border border-transparent text-base md:text-xl    focus:outline-none  rounded-lg   transition duration-500 ease-in-out  text-white">
                    Contact Us
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sections;
