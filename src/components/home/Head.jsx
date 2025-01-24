import React from "react";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";
import "./wrap.css";
import { X01, X03, X05, X07 } from "../images";
import 'hero-slider/dist/index.css';

// Images

const Head = () => {

const rockyWaterfall = "https://i.imgur.com/OE5CoEX.jpg";

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.10)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh",
      }}
    >
      <Overlay>
        <div className="wrap">
          <div className="title">The Food Processing Service You Can Trust.</div>
          <div className="sub">We specialize in transforming and transporting raw ingredients into high-quality, delicious, and nutritious products that bring convenience and joy to your dining table.</div>
        </div>
      </Overlay>
      <Slide
        background={{
          backgroundImageSrc: rockyWaterfall,
          backgroundAttachment: "fixed",
          // backgroundColor:"red",
        }}
        className="100vh"
      />

      <Slide
        background={{
          backgroundImageSrc: X01,
          backgroundAttachment: "fixed",
        }}
        className="100vh"
      />

      <Slide
        background={{
          backgroundImageSrc: X07,
          backgroundAttachment: "fixed",
        }}
        className="100vh"
      />

      <Slide
        background={{
          backgroundImageSrc: X05,
          backgroundAttachment: "fixed",
        }}
        className="100vh"
      />

      <Nav />
    </HeroSlider>
  );
};

export default Head;
