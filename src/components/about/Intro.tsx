import { F16, LOGO7, LOGO8, LOGO9 } from "../images";

const Intro = () => {
  return (
    <div className="py-12 space-y-12 md:space-y-0 w-full flex-wrap md:flex  justify-around    bg-white px-4 relative ">
      <div className="w-full md:w-1/3 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <img src={LOGO7} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
        </div>
        <div className="text-xl  logo-color font-bold leading-6">
          Farm food{" "}
        </div>
        <div className="text-base md:text-sm text-black/80 leading-6">
          The benefits of wholesome, sustainable eating. Embrace fresh,
          unprocessed foods that nourish your body while reducing environmental
          impact.
        </div>
      </div>

      <div className="w-full md:w-1/3 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <img src={LOGO8} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
        </div>
        <div className="text-xl  logo-color font-bold leading-6">
          100% organic food
        </div>
        <div className="text-base md:text-sm text-black/80 leading-6">
          Enjoy the pure goodness of nature with our 100% organic food. Grown
          without synthetic chemicals or additives, our products deliver fresh,
          natural flavors while supporting your health and the environment.
          Taste the difference in every bite!
        </div>
      </div>

      <div className="w-full md:w-1/3 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <img src={LOGO9} alt="" className="w-20 h-20 md:w-auto md:h-auto" />
        </div>
        <div className="text-xl  logo-color font-bold leading-6">
          Grown naturally
        </div>
        <div className="text-base md:text-sm text-black/80 leading-6">
          Our foods are fresh from farm, nature certified to give rich
          nutrients.
        </div>
      </div>

      <img
        src={F16}
        className="h-96 absolute bottom-0 left-0 md:left-50   z-5"
      />
    </div>
  );
};

export default Intro;
