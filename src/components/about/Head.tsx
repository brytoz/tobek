import { X07 } from "../images";

const Head = () => {
  return (
    <div className="w-full h-[80vh] ">
      <div className="flex-wrap md:flex justify-center  h-full mt-14">
        <div className="w-full md:w-1/2 p-4 space-y-2 flex flex-col justify-center  h-full">
          <div className=" text-[#7b0f0f]/80 font-bold">ABOUT US</div>
          <div className=" text-[#7b0f0f] capitalize text-3xl font-black ubuntu-bold">
            We are Organic
          </div>
          <div className="text-black/60 leading-7 font-medium ubuntu-regular">
            At TobekFoods, we specialize in processing a wide variety of premium
            food products that capture the vibrant flavors and heritage of West
            Africa. Using the finest ingredients and meticulous techniques, we
            ensure every product delivers exceptional taste and quality straight
            to your table.
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={X07} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Head;
