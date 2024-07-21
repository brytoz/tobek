import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#11273e] via-[#131613]-300 to-[#0d100f] bg-opacity-75   pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white/75">
              TobekFoods
            </h4>
              <p className="text-white/75 ">Quality is our priority.</p>
            <h5 className="pb-4 pt-3 text-sm mt-0 mb-2 text-white/75 space-y-2">
              <a className="hover:text-orange-700" href="mailto:info@tobekfoods.com">info@tobekfoods.com</a>
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex  items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-orange-800 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled light">
                <li>
                    <a
                      className="text-white/75 hover:text-gray-100    block pb-2 text-sm"
                      href="https://tobekfoods.com/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                   
                  <li>
                    <a
                      className="text-white/75 hover:text-gray-100     block pb-2 text-sm"
                      href="https://tobekfoods.com/about"
                    >
                      About
                    </a>
                  </li>
 
                </ul>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-orange-800 text-sm font-extrabold mb-2">
                  Socials
                </span>
                <ul className="list-unstyled light">
                  <li>
                    <a
                      className="text-white/75 hover:text-gray-100   block pb-2 text-sm"
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/75 hover:text-gray-100   block pb-2 text-sm"
                      href="#"
                    >
                      Twitter
                    </a>
                  </li>
                  
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white/50  py-1">
              Copyright © {new Date().getFullYear()}, Tobekfoods
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;