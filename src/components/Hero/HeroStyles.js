import styled, { css, keyframes } from "styled-components/macro";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import "animate.css";

const FadeInImg = keyframes`
  0% {
    opacity: 0.5;
  }
  50%{
    opacity: 1;
  }
`;

export const FadeInText = keyframes`
  0%{
    transform: translateY(-50px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: ${FadeInImg} 4s ease-in-out;
  /* transition: 0.5s ease-in-out; */
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 7rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    animation: ${FadeInText} 1s ease-in-out;
  }

  p {
    margin-bottom: 1.2rem;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); */
    /* text-shadow: #000 1px 0 50px; */
    text-shadow: 2px 4px 5px #474747;
    /* text-shadow: 0 -1px 4px #fff, 0 -2px 10px #000, 0 -10px 20px #000, 0 -18px 40px #f00; */
    /* text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); */
    /* textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" */
    animation: ${FadeInText} 1s ease-in-out;
  }

  a {
    text-align: center;
  }
`;

// const Arrow = styled(IoMdArrowRoundForward)`
//   vertical-align: middle;
//   margin-left: 0.5rem;
// `;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  opacity: 0.5;

  &:hover {
    color: #cd853f;
    opacity: 1;
    transform: scale(1.3);
  }
`;

export const SliderButtonsRight = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  z-index: 10;
`;

export const SliderButtonsLeft = styled.div`
  position: absolute;
  left: 30px;
  display: flex;
  z-index: 10;
`;

export const PrevArrow = styled(MdArrowBackIos)`
  ${arrowButtons}
`;

export const NextArrow = styled(MdArrowForwardIos)`
  ${arrowButtons}
`;
