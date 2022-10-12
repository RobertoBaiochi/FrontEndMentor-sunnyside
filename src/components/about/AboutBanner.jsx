import "./AboutBanner.scss";

import { useInView } from 'react-intersection-observer'

export const AboutBanner = (props) => {
  const {ref: aboutImgRef , inView: aboutImgIsVisible} = useInView();

  return (
    <div ref={aboutImgRef} 
      className={`about-col-banner init-hidden ${aboutImgIsVisible ? 'init-hidden-off' : ''}`}>
      <picture>
        <source media="(max-width: 768px)" srcSet={props.imageMobile} />
        <img src={props.image} alt="" aria-hidden={true} />
      </picture>
    </div>
  );
};
