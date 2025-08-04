import React, { useState, useEffect } from 'react';
import './main.css';  
import {  X02, X03, X04 } from "../../images";

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample slides data - replace with your actual content
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl:X04,
      title: 'The Food Processing Service You Can Trust',
      description: ''
    //   description: 'Create stunning visuals that captivate your audience from the first glance.'
    },
    {
      id: 2,
      imageUrl:X03,
      title: 'The Food Processing Service You Can Trust',
      description: ''
    },
    {
      id: 3,
      imageUrl:X02,
      title: 'The Food Processing Service You Can Trust',
      description: ''
    }
  ];

  useEffect(() => {
    let interval: number;
    
    if (isAutoPlaying && slides.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="slide-content">
              <h1 className="slide-title ">{slide.title}</h1>
              {/* <p className="slide-description">{slide.description}</p> */}
              {/* <button className="cta-button">Learn More</button> */}
            </div>
          </div>
        ))}
        
        {slides.length > 1 && (
          <>
            <button className="carousel-control prev" onClick={goToPrev}>
              &lt;
            </button>
            <button className="carousel-control next" onClick={goToNext}>
              &gt;
            </button>
            
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;