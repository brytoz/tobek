import { motion, AnimatePresence } from "framer-motion";
import { X01, X02, X03 } from "../images";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: X01,
    title: "White Processed garri",
    description: "Delicious and hygienic food processed with care.",
  },
  {
    id: 2,
    imageUrl: X03,
    title: "Crafish",
    description: "We source only the best for your kitchen.",
  },
  {
    id: 3,
    imageUrl: X02,
    title: "Palm Oil (Red Oil) - Fresh from farm",
    description: "Your satisfaction is our priority.",
  },
];

const HeroSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as any},
    },
  };

 
  // bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-900 via-rose-900 to-purple-900
 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-red-500/10 rounded-full blur-lg"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            className="space-y-8 text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.02, color: "#FCD34D" }}
                  transition={{ duration: 0.2 }}
                >
                  Food
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{
        backgroundImage: "linear-gradient(to bottom right, #dfd7c3, #cbbba0, #a6987a)"
      }}
                >
                  Processing service
                </motion.span>{" "}
                you can trust
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl text-blue-100 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Using the finest ingredients and meticulous techniques, we ensure
              every product delivers exceptional taste and quality straight to
              your table.
            </motion.p>
           

            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a
                href="/contact"
                className="bg-gradient-to-r text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #dfd7c3, #cbbba0, #a6987a)"
                }}
              >
                Order now
              </motion.a>
              <motion.a
                href="/products"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#FCD34D",
                  color: "#FCD34D",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Products
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative z-10">
               {/* bg-gradient-to-br from-orange-500 via-red-500 to-red-600 */}
      <div 
      style={{
        backgroundImage: "linear-gradient(to bottom right, #dfd7c3, #cbbba0, #a6987a)"
      }}
      className="relative bg-gradient-to-br  rounded-3xl p-8 shadow-2xl">
        <motion.div
          className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg z-20"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        >
          FEATURED
        </motion.div>

        {/* Carousel Image */}
        <div className="w-full h-80 rounded-2xl shadow-inner relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* Dish Info */}
        <div className="mt-6 text-gray-700">
          <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
          <p className="text-gray-900 text-sm">{slide.description}</p>
        </div>
      </div>
    </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
              animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
          <motion.path
            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            animate={{
              d: [
                "M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
