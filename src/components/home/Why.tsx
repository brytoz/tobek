import { F18, FLOWER, LOGO4, LOGO5, LOGO6, X01 } from "../images";

const Why = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex-wrap md:flex justify-around w-full h-full space-y-5 md:space-y-0 p-4 md:p-0">
        <div className="w-full md:w-1/2 bg-re d-400 flex items-center justify-center relative">
          <img src={F18} className="h-96 absolute top-0 left-0 -z-10" />

          <img src={X01} alt="image" className="rounded h-4/5 w-auto" />
        </div>
        <div className="w-full md:w-1/2  relative flex items-center justify-center mt-12 md:mt-0 ">
          <div className=" pr-4">
            <div className="font-bold text-base text-[#7b0f0f]/80 mb-3">
              Fresh From Farm
            </div>
            <div className="text-2xl font-bold logo-color mb-4">
              It’s always better with TobekFoods.
            </div>

            <div className=" mb-6 text-base md:text-sm leading-8">
              At TobekFoods, we specialize in processing a wide variety of
              premium food products that capture the vibrant flavors and
              heritage of West Africa. Using the finest ingredients and
              meticulous techniques, we ensure every product delivers
              exceptional taste and quality straight to your table.
            </div>

            <div className="flex justify-center  w-full mb-6 space-x-5 md:space-x-0">
              <div className=" flex justify-start w-1/5">
                <img src={LOGO4} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
              </div>
              <div className="w-4/5 space-y-2  ">
                <div className="text-[#7b0f0f] font-bold text-base">
                  Eat clean and green
                </div>
                <div className="text-base md:text-sm md:w-4/5 ">
                  The benefits of wholesome, sustainable eating. Embrace fresh,
                  unprocessed foods that nourish your body while reducing
                  environmental impact.
                </div>
              </div>
            </div>

            <div className="flex justify-center  w-full mb-6 space-x-5 md:space-x-0">
              <div className=" flex justify-start w-1/5">
                <img src={LOGO5} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
              </div>
              <div className="w-4/5 space-y-2  ">
                <div className="text-[#7b0f0f] font-bold text-base">
                  Grown by Nature
                </div>
                <div className="text-base md:text-sm md:w-4/5  ">
                  Our foods are fresh from farm, nature certified to give rich
                  nutrients.
                </div>
              </div>
            </div>

            <div className="flex justify-center  w-full mb-6 space-x-5 md:space-x-0">
              <div className=" flex justify-start w-1/5">
                <img src={LOGO6} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
              </div>
              <div className="w-4/5 space-y-2  ">
                <div className="text-[#7b0f0f] font-bold text-base">
                  Eat good, Feel good
                </div>
                <div className="text-base md:text-sm md:w-4/5  ">
                  Fuel your body with nutritious, delicious meals that energize
                  your day. Eating well isn’t just about food—it’s about feeling
                  your best. Enjoy balanced, flavorful options that boost your
                  mood, enhance well-being.
                </div>
              </div>
            </div>
          </div>

          <img src={FLOWER} className="absolute top-5 right-10 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Why;
