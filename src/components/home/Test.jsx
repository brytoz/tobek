import React from "react";
// JSX
import HeroSlider, { Slide,  Overlay } from "hero-slider";
import "./wrap.css";
import { X01, X02, X03, X04 } from "../images";
import "hero-slider/dist/index.css";


const Test = () => {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.40)",
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 2000,
        height: "100vh",
      }}
    >
      <Overlay>
        <div className="wrap" style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}  >
          <div className="title ubuntu-bold text-white text-[2.9rem] md:text-[3.5rem]">
            The <span className="text-[#d27219]"> Food  Processing </span> Service You Can Trust.
          </div>
          <div className="sub logo text-white text-xl text-[1.5rem]">
            We specialize in transforming and transporting raw ingredients into
            high-quality, delicious, and nutritious products that bring
            convenience and joy to your dining table.
          </div>
        </div>
      </Overlay>

      <Slide
        shouldRenderMask
        navDescription="Rocky Waterfall"
        background={{
        backgroundColor: "rgba(0, 0, 0, 0.40)",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImageSrc: X04,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Palau - Pacific Ocean"
        background={{
          backgroundColor: "#8A8A8A",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImageSrc: X02,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Quepos - Costa Rica"
        background={{
          backgroundColor: "#EA2329",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImageSrc: X03,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Mountain View"
        background={{
          backgroundColor: "#6D9B98",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImageSrc: X04,
        }}
      />

      {/* <ButtonsNav /> */}
      {/* <SideNav
        position={{
          top: "0",
          right: "0"
        }}
      /> */}
    </HeroSlider>
  );
};

export default Test;
