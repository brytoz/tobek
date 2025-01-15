import React from "react";
import { X01, X02, X03, X04, X05, X06, X07 } from "./images";

const Gallery: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-12">
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X01}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X02}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X06}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X06}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X04}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X05}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X03}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X07}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={X06}
              alt=""
            />
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Gallery;
