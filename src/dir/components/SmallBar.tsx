import React  from "react";
import { IoCloseCircle } from "react-icons/io5";

interface SmallBarProps {
  close: () => void;
}

const SmallBar: React.FC<SmallBarProps> = ({ close }) => {
 
 

  return (
    <section
      className="bg-white z-50 fixed   top-0 left-0 right-0 h-full text-black"
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="flex-wrap space-y-4 text-center">
          <a className="block hover:text-orange-600" href="/">
            Home
          </a>
          <a className="block hover:text-orange-600" href="/about">
            About Us
          </a>
          <a className="block hover:text-orange-600" href="/contact">
            Contact
          </a>
        </div>
      </div>

      <div
        onClick={close}
        className="absolute top-0 right-0 pr-6 pt-4  hover:cursor-pointer"
        title="close"
      >
        <IoCloseCircle className="text-4xl" />
      </div>
    </section>
  );
};

export default SmallBar;
