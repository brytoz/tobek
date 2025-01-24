import React from "react";
// JSX
import HeroSlider, { Slide, SideNav, ButtonsNav, Overlay } from "hero-slider";
import "./wrap.css";
import { X01, X02, X03, X04 } from "../images";
import 'hero-slider/dist/index.css';

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
        backgroundColor: "#000",
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: "100vh",
      }}
    >
      <Overlay>
        <div className="wrap">
          <div className="title">Basic Slider</div>
          <div className="sub">Slides' background attachment set to fixed</div>
        </div>
      </Overlay>

      <Slide
        shouldRenderMask
        navDescription="Rocky Waterfall"
        background={{
          backgroundColor: "#2D7791",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: X04,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Palau - Pacific Ocean"
        background={{
          backgroundColor: "#8A8A8A",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: X02,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Quepos - Costa Rica"
        background={{
          backgroundColor: "#EA2329",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: X03,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Mountain View"
        background={{
          backgroundColor: "#6D9B98",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: X04,
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
