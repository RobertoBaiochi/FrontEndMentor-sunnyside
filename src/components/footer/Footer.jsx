import "./Footer.scss";
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

import LogoFooter from "../../assets/images/logoFooter.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import PinterestIcon from "../../assets/images/icon-pinterest.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";

export const Footer = () => {
  const { ref: footerRef , inView: footerIsVisible } = useInView();

  return (
    <footer id="footer">
      <div ref={footerRef}
        className={`footer-container footer-row init-hidden ${footerIsVisible ? 'init-hidden-off' : ''}`}>
        <div className="footer-logo">
          <Link to="hero" spy={true} smooth={true} offset={-40} duration={500} className="logo-link">
            <img src={LogoFooter} alt="sunnyside" />
          </Link>
        </div>

        <div className="footer-menu">
          <nav className="footer-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-40} duration={500} 
                  className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="services" spy={true} smooth={true} offset={-40} duration={500} 
                  className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="products" spy={true} smooth={true} offset={-40} duration={500} 
                  className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="hero" spy={true} smooth={true} offset={-40} duration={500} 
                  className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="media-menu">
          <nav className="media-nav">
            <ul className="media-list">
              <li className="media-item">
                <a href="#void">
                  <img src={FacebookIcon} alt="go to facebook page." />
                </a>
              </li>
              <li className="media-item">
                <a href="#void">
                  <img src={InstagramIcon} alt="go to instagram profile." />
                </a>
              </li>
              <li className="media-item">
                <a href="#void">
                  <img src={TwitterIcon} alt="go to twitter profile." />
                </a>
              </li>
              <li className="media-item">
                <a href="#void">
                  <img src={PinterestIcon} alt="Go to pinterest page." />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/roberto-baiochi/">
            Roberto Baiochi
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
