import React from "react";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactComponent: React.FC = () => {
  return (
    <section id="contact" className="pb-20 pt-6 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-12  ">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="relative pb-2 text">
              <span className="md:pl-12 text-4xl  lg:text-5xl font-extrabold ">
                Contact Us
              </span>
              <span className="mt-4 absolute inset-x-0 bottom-0 h-1 bg-[#7b0f0f] mx-auto w-1/4"></span>
            </h1>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-black/75">
              Need help? Contact us now.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-around">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full lg:w-3/12 px-4 text-center"
          >
            <div className="transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center cursor-pointer">
              <a href="https://instagram.com/TobekFoods">
                <TiSocialInstagram size={40} />
              </a>{" "}
            </div>
            <h6 className="text-xl mt-5 font-semibold text-black/75 ">
              Instagram
            </h6>
            <p className="mt-2 mb-4 text-black/75">
              We are available on Instagram. Need help? you can send us a direct
              message and we will reply shortly.
            </p>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full lg:w-3/12 px-4 text-center"
          >
            <div className="transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center cursor-pointer">
              <a href="mailto:info@tobekfoods.com">
                <MdEmail size={40} className="text-red-500" />
              </a>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-black/75 ">Email</h5>
            <p className="mt-2 mb-4 text-black/75">
              Send us an email at info@tobekfoods.com and we will reply within
              24hrs.
            </p>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.42 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full lg:w-3/12 px-4 text-center"
          >
            <div className="transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center cursor-pointer">
              <a href="https://twitter.com/TobekFoods">
                <FaXTwitter size={40} className="text-black" />
              </a>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-black/75 ">
              X <span className="text-sm">(Formerly Twitter)</span>
            </h5>
            <p className="mt-2 mb-4 text-black/75">
              You can follow us on twitter to get the latest updates and tweets.
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
