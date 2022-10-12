import "./Header.scss";

import { useState } from "react";
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

import logo from "../../assets/images/logo.svg";
import HamburgerMenu from "../../assets/images/icon-hamburger.svg";

export const Header = () => {
  const { ref: headerRef , inView: headerIsVisible } = useInView();

  const [openMenu, setOpenMenu] = useState(false);

  if (openMenu) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <header ref={headerRef} 
      className={`header-menu init-hidden ${headerIsVisible ? 'init-hidden-off' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="sunnyside" />
      </div>

      <div className="menu-mobile">
        <img
          className="open-menu"
          onClick={() => setOpenMenu(!openMenu)}
          src={HamburgerMenu}
          alt="menu"
        />
      </div>

      <div className={openMenu ? "menu-nav active" : "menu-nav"}>
        <div
          className={
            openMenu ? "menu-mobile-arrow active" : "menu-mobile-arrow"
          }
        ></div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} offset={-40} duration={500}
                className="nav-link"
                onClick={() => setOpenMenu(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true} offset={-40} duration={500} 
                className="nav-link"
                onClick={() => setOpenMenu(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="products" spy={true} smooth={true} offset={-40} duration={500} 
                className="nav-link"
                onClick={() => setOpenMenu(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}  
                className="nav-btn"
                onClick={() => setOpenMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className={openMenu ? "fade active" : "fade"}
      ></div>
    </header>
  );
};
