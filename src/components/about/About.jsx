import "./About.scss";
import { AboutBanner } from "./AboutBanner";
import { AboutText } from "./AboutText";

import ImgEgg from "../../assets/images/desktop/image-transform.jpg";
import ImgEggMobile from "../../assets/images/mobile/image-transform.jpg";
import ImgGlass from "../../assets/images/desktop/image-stand-out.jpg";
import ImgGlassMobile from "../../assets/images/mobile/image-stand-out.jpg";

export const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__row about__row-primary">
          <AboutText
            colorButton="yellow"
            title="Transform your brand"
            text="We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you."
            link="Learn more"
          />

          <AboutBanner image={ImgEgg} imageMobile={ImgEggMobile} />
        </div>

        <div id="services" className="about__row about__row-secondary">
          <AboutBanner image={ImgGlass} imageMobile={ImgGlassMobile} />

          <AboutText
            colorButton="salmon"
            title="Stand out to the right audience"
            text="Using a collaborative formula of designers, researchers, photographers, videographers, 
                        and copywriters, we’ll build and extend your brand in digital places."
            link="Learn more"
          />
        </div>
      </div>
    </section>
  );
};
