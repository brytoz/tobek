import React from "react";
import { ERROR } from "../components/images";
import Footer from "../components/Footer";

const Errors: React.FC = () => {
  return (
    <section className="bg-inherit  bg-gradient-to-r from-orange-400 to-yellow-500 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="text-center flex justify-center w-full">
            <img src={ERROR} className="w-72 " />
          </div>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            Your food process request is unavailable.
          </p>
          <p className="mb-4 text-lg font-light text-white ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            className="inline-flex font-extrabold text-white bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900   px-6 py-4  my-4 rounded-full"
          >
            Back to Homepage
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Errors;