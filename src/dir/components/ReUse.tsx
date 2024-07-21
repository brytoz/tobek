import React from "react";
import { motion } from "framer-motion";

 
interface ReUseProps {
  heading: string;
}

 const ReUse:React.FC<ReUseProps> = ({ heading }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
      whileInView={{ y: 1, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      whileTap={{ scale: 0.8 }}
      className="device-bg  w-full flex-wrap md:flex h-72 md:h-96 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-300  bg-opacity-75 overflow-x-hidden"
    >
      <div className="overflow-x-hidden w-full md:w-1/2 px-12  flex justify-center md:justify-start items-center">
        <div className="text-5xl md:text-6xl font-bold text-white md:pl-12 overflow-hidden mt-16 md:mt-0 pb-6">
          {heading}
        </div>
      </div>
    </motion.div>
  );
};

export default ReUse