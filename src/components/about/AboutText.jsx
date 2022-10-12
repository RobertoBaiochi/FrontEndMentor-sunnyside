import "./AboutText.scss";

import { useInView } from 'react-intersection-observer'; 

export const AboutText = (props) => {
  
  const { ref: aboutTextRef, inView: aboutTextIsVisible } = useInView();

  return (
    <div ref={aboutTextRef} 
      className={`about-col-text ${props.colorButton} 
                      init-hidden ${aboutTextIsVisible ? 'init-hidden-off' : ''}` }>
      <div className="text-content">
        <h2 className="about__title">{props.title}</h2>
        <p className="about__content">{props.text}</p>
        <a className="about__link" href="#void">
          {props.link}
        </a>
      </div>
    </div>
  );
};
