import "./TestimonialSingle.scss";

import { useInView } from 'react-intersection-observer';

export const TestimonialUser = (props) => {
  const { ref: testimonialRef , inView: testimonialIsVisible } = useInView();

  return (
    <div ref={testimonialRef} className={`testimonial-col init-hidden ${testimonialIsVisible ? 'init-hidden-off' : '' }`}>
      <img className="test-avatar" src={props.img} alt="" aria-hidden={true} />
      <p className="test-text">{props.text}</p>
      <h4 className="test-name">{props.name}</h4>
      <span className="test-business">{props.business}</span>
    </div>
  );
};
