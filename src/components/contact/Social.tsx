import { F16 } from "../images";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Social = () => {
  return (
    <div className="py-12 space-y-12 md:space-y-0 w-full flex-wrap md:flex  justify-around    bg-white px-4 relative ">
      <div className="w-full md:w-1/4 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <a href="mailto:info@tobekfoods.com">
            <FaEnvelope className="text-8xl md:text-5xl" />
          </a>
        </div>
        <a href="#">
          <div className="text-xl  logo-color font-bold leading-6">
            Email
          </div>
        </a>
      </div>

      <div className="w-full md:w-1/4 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <a href="#">
            <FaSquareInstagram className="text-8xl md:text-5xl" />
          </a>
        </div>
        <a href="#">
          <div className="text-xl  logo-color font-bold leading-6">
            Instagram
          </div>
        </a>
      </div>

      <div className="w-full md:w-1/4 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <a href="#">
            <FaFacebook className="text-8xl md:text-5xl" />
          </a>
        </div>
        <a href="#">
          <div className="text-xl  logo-color font-bold leading-6">
            Facebook
          </div>
        </a>
      </div>

      <div className="w-full md:w-1/4 text-center space-y-3 z-10">
        <div className="flex justify-center">
          <a href="#">
            <FaTiktok className="text-8xl md:text-5xl" />
          </a>
        </div>
        <a href="#">
          <div className="text-xl  logo-color font-bold leading-6">Tiktok</div>
        </a>
      </div>

      <img
        src={F16}
        className="h-96 absolute bottom-0 left-0 md:left-50   z-5"
      />
    </div>
  );
};

export default Social;
