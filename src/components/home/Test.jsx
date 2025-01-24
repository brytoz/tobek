import React from "react";
// JSX
import HeroSlider, { Slide, SideNav, ButtonsNav, Overlay } from "hero-slider";
import "./wrap.css";
import { X01, X02, X03, X04 } from "../images";
import "hero-slider/dist/index.css";

// Images
const rockyWaterfall = "https://i.imgur.com/OE5CoEX.jpg";
const palauPacificOcean = "https://i.imgur.com/8sPDZCg.jpg";
const queposCostaRica = "https://i.imgur.com/cdKGQ0Z.jpg";
const mountainView = "https://i.imgur.com/w4jfAOJ.jpg";

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
        autoplayDuration: 1000,
        height: "100vh",
      }}
    >
      <Overlay>
        <div className="wrap">
          <div className="title ubuntu-bold">
            The Food Processing Service You Can Trust.
          </div>
          <div className="sub logo">
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
