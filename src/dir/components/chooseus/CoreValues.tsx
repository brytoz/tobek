import React from "react";
import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import { IoIosNutrition } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const CoreValues: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-wrap justify-around md:spa">
        <motion.div
          initial={{ y: 260, opacity: 0 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.005, ease: "easeIn" }}
          className="lg:pt-12 pt-6 w-[90%] md:w-[27%] px-4 text-center"
        >
          <div className="relative border border-opacity-10 flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-[#7b0f0f] bg-opacity-75">
                <IoIosNutrition size={30} />
              </div>
              <h6 className="text-xl font-semibold">Nutrition</h6>
              <p className="mt-2 mb-4 text-gray-600">
                At TobekFoods, we are dedicated to delivering nutritious and
                delectable food products, we carefully craft each item using the
                finest herbs, cereals, and vegetables.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 260, opacity: 0 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.05, ease: "easeIn" }}
          className="w-[90%] md:w-[27%] px-4 text-center"
        >
          <div className="border border-opacity-10 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-[#7b0f0f] bg-opacity-75">
                <MdOutlineWorkspacePremium size={30} />
              </div>
              <h6 className="text-xl font-semibold">Premium Products </h6>
              <p className="mt-2 mb-4 text-gray-600">
                Rooted in West African heritage, we deliver premium products
                with a commitment to cost and time efficiency, continuous
                enhancement, and unwavering accountability.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 260, opacity: 0 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.05, ease: "easeIn" }}
          className="pt-6 w-[90%] md:w-[27%] px-4 text-center"
        >
          <div className="border border-opacity-10 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-[#7b0f0f] bg-opacity-75">
                <BiBadgeCheck size={30} />
              </div>
              <h6 className="text-xl font-semibold">Licensed Company</h6>
              <p className="mt-2 mb-4 text-gray-600">
                As a registered Food processing company, we prioritize
                transparency, and regulatory compliance. Your requests are in
                safe hands with us.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
