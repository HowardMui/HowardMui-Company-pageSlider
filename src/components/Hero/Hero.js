/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
// import styled, { css, keyframes } from "styled-components/macro";
import { Button } from "../Button";
import {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtonsLeft,
  SliderButtonsRight,
} from "./HeroStyles";

const Hero = ({ slides }) => {
  const [isSlide, setSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setSlide(isSlide === length - 1 ? 0 : isSlide + 1);
  };

  const PrevSlide = () => {
    setSlide(isSlide === 0 ? length - 1 : isSlide - 1);
  };

  // auto change slide
  useEffect(() => {
    const autonextSlide = () => {
      setSlide((isSlide) => (isSlide === length - 1 ? 0 : isSlide + 1));
    };
    // console.log(timeout.current);
    timeout.current = setTimeout(autonextSlide, 10000);

    return function () {
      if (timeout.current) {
        // console.log("clearnup");
        clearTimeout(timeout.current);
      }
    };
  });

  // Check if slides is an array or not enought link

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === isSlide && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary
                      animation
                      css={`
                        display: inline-block;
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                    </Button>
                    <p style={{ marginTop: "60px", color: "#fff" }}>{slide.showcase1}</p>
                    <p style={{ color: "#fff" }}>{slide.showcase2}</p>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtonsLeft>
          <PrevArrow onClick={PrevSlide} />
        </SliderButtonsLeft>
        <SliderButtonsRight>
          <NextArrow onClick={nextSlide} />
        </SliderButtonsRight>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
