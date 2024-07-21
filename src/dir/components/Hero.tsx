import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { F01} from "./images";

const FadeInOutText: React.FC = () => {
  const phrases: string[] = [
    "Food",
    "Export",
    "Import",
    "Packaging",
    "Fast",
    "Groceries",
    "Reliable Service",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setShowText(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  const fadeInOutStyles = {
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    '@keyframes fadeOut': {
      '0%': { opacity: 1 },
      '100%': { opacity: 0 },
    },
    fadeIn: {
      animation: 'fadeIn 1s ease-in-out',
    },
    fadeOut: {
      animation: 'fadeOut 1s ease-in-out',
    },
  };

  return (
    <motion.div
      animate={{ y: 1, opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeIn" }}
      initial={{ y: 260, opacity: 0 }}
      className="text-center text-white mt-10"
    >
      <h3
        style={showText ? fadeInOutStyles.fadeIn : fadeInOutStyles.fadeOut}
        className="text-xl md:text-2xl font-roboto"
      >
        {phrases[currentPhraseIndex]}
      </h3>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Parallax
        blur={{ min: -8, max: 8 }}
        className="bg-cover object-cover bg-gradient-to-r from-gray-700 via-gray-900 to-black"
        bgImage={F01}
      >
        <div style={{ height: "100vh" }} className="bg-black/40 pt-28">
          <div
            style={{ height: "70vh" }}
            className="flex items-center w-full justify-center h-full"
          >
            <div className="flex-wrap space-y-12 mt-24 text-white">
              <motion.div
                animate={{ y: 1, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeIn" }}
                initial={{ y: 260, opacity: 0 }}
                className="text-3xl md:text-7xl open-sans font-extrabold text-center playfair"
              >
                The{" "}
                <span className="text-[#7b0f0f]">Food Processing</span>{" "}
                Service You Can Trust.
              </motion.div>
              <motion.div
                animate={{ y: 1, opacity: 1 }}
                transition={{ delay: 0.75, ease: "easeIn" }}
                initial={{ y: 260, opacity: 0 }}
                className="px-3 md:px-18 text-center text-base md:text-xl tracking-wider md:tracking-widest lora"
              >
               We specialize in transforming and transporting raw ingredients into high-quality, delicious, and nutritious products that bring convenience and joy to your dining table.
              </motion.div>
              <FadeInOutText />
              
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
