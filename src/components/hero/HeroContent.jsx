import "./HeroContent.scss";

import { useInView } from 'react-intersection-observer'

import ArrowDown from "../../assets/images/icon-arrow-down.svg";

export const HeroContent = () => {
  const { ref: heroRef, inView: heroIsVisible} = useInView()

  return (
    <div ref={heroRef} className={`text-container init-hidden ${heroIsVisible ? 'init-hidden-off' : ''}`}>
      <h1 className="hero-title">We are creatives</h1>
      <img
        className="arrow-animation"
        src={ArrowDown}
        alt=""
        aria-hidden={true}
      />
    </div>
  );
};
