

import "./Testimonials.scss";
import { TestimonialUser } from "./TestimonialSingle";

import EmilyAvatar from "../../assets/images/image-emily.jpg";
import thomasAvatar from "../../assets/images/image-thomas.jpg";
import JennieAvatar from "../../assets/images/image-jennie.jpg";

export const Testimonals = () => {



  return (
    <section id="testimonials">
      <div className="testimonials__container">
        <div className="container-title">
          <h4 className="title-testimonial"> Client testimonials</h4>
        </div>

        <div className="testimonials__row">
          <TestimonialUser
            img={EmilyAvatar}
            text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            business="Marketing Director"
          />

          <TestimonialUser
            img={thomasAvatar}
            text=" Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            name="Thomas S."
            business="Chief Operating Officer"
          />

          <TestimonialUser
            img={JennieAvatar}
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            business="Business Owner"
          />
        </div>
      </div>
    </section>
  );
};
