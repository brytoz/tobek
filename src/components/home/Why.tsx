import { motion } from 'framer-motion';
import { F18, FLOWER, LOGO4, LOGO5, LOGO6, X01 } from "../images";

const Why = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

  return (
    <div className="w-full h-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="flex-wrap md:flex justify-around w-full h-full space-y-5 md:space-y-0 p-4 md:p-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center relative"
          variants={itemVariants}
        >
          <img src={F18} className="h-96 absolute top-0 left-0 -z-10 opacity-30" />
          
          <motion.div
            className="relative bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={X01} alt="image" className="rounded-xl h-4/5 w-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 relative flex items-center justify-center mt-12 md:mt-0"
          variants={containerVariants}
        >
          <div className="pr-4">
            <motion.div
              className="font-bold text-base text-orange-600/90 mb-3"
              variants={itemVariants}
            >
              Fresh From Farm
            </motion.div>
            
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4"
              variants={itemVariants}
            >
              It's always better with TobekFoods.
            </motion.div>

            <motion.div
              className="mb-6 text-base md:text-sm leading-8 text-gray-700"
              variants={itemVariants}
            >
              At TobekFoods, we specialize in processing a wide variety of
              premium food products that capture the vibrant flavors and
              heritage of West Africa. Using the finest ingredients and
              meticulous techniques, we ensure every product delivers
              exceptional taste and quality straight to your table.
            </motion.div>

            <motion.div
              className="flex justify-center w-full mb-6 space-x-5 md:space-x-0"
              variants={itemVariants}
            >
              <div className="flex justify-start w-1/5">
                <motion.div
                  className="bg-gradient-to-br from-emerald-400/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={LOGO4} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
                </motion.div>
              </div>
              <div className="w-4/5 space-y-2">
                <div className="text-orange-600/90 font-bold text-base">
                  Eat clean and green
                </div>
                <div className="text-base md:text-sm md:w-4/5 text-gray-600">
                  The benefits of wholesome, sustainable eating. Embrace fresh,
                  unprocessed foods that nourish your body while reducing
                  environmental impact.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center w-full mb-6 space-x-5 md:space-x-0"
              variants={itemVariants}
            >
              <div className="flex justify-start w-1/5">
                <motion.div
                  className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={LOGO5} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
                </motion.div>
              </div>
              <div className="w-4/5 space-y-2">
                <div className="text-orange-600/90 font-bold text-base">
                  Grown by Nature
                </div>
                <div className="text-base md:text-sm md:w-4/5 text-gray-600">
                  Our foods are fresh from farm, nature certified to give rich
                  nutrients.
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center w-full mb-6 space-x-5 md:space-x-0"
              variants={itemVariants}
            >
              <div className="flex justify-start w-1/5">
                <motion.div
                  className="bg-gradient-to-br from-rose-400/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={LOGO6} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
                </motion.div>
              </div>
              <div className="w-4/5 space-y-2">
                <div className="text-orange-600/90 font-bold text-base">
                  Eat good, Feel good
                </div>
                <div className="text-base md:text-sm md:w-4/5 text-gray-600">
                  Fuel your body with nutritious, delicious meals that energize
                  your day. Eating well isn't just about food—it's about feeling
                  your best. Enjoy balanced, flavorful options that boost your
                  mood, enhance well-being.
                </div>
              </div>
            </motion.div>
          </div>

          <motion.img
            src={FLOWER}
            className="absolute top-5 right-10 -z-10 opacity-40"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Why;