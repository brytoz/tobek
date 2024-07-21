import React from "react";

interface CompProps {
  title: string;
  content: string;
}
const Comp: React.FC<CompProps> = ({ title, content }) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:pt-12  ">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-4xl  mb-4   lg:text-6xl  relative pb-2 ">
              {title}
              <span className="mt-4 absolute inset-x-0 bottom-0 h-1 bg-[#7b0f0f]  mx-auto w-1/3"></span>
            </h1>
            <p className="text-lg leading-relaxed mt-4 mb-4  ">{content}</p>
          </div>
        </div>
        <div className="relative mb-8 flex flex-wrap mt-12 justify-center"></div>
      </div>
    </>
  );
};

export default Comp;
