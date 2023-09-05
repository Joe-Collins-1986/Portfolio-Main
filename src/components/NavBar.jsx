import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NavBar.module.css";
import { useSection } from "../hooks/useSection";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamActive, setHamActive] = useState(false);
  const navRef = useRef(null);
  const activeSection = useSection(["home", "about", "portfolio", "contact"]);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isHamActive
      ) {
        setHamActive(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHamActive]);

  return (
    <header
      ref={navRef}
      className={`${styles.navContainer} ${isScrolled ? styles.sticky : ""}`}
    >
      <a href="#" className={styles.logo}>
        My <span>Portfolio</span>
      </a>

      <div>
        <div
          className={`${styles.NavBarToggler} ${
            isHamActive ? styles.NavBarTogglerX : ""
          }`}
          onClick={() => setHamActive(!isHamActive)}
        >
          <span className={styles.NavBarTogglerIcon}></span>
        </div>
      </div>

      <nav
        className={`${styles.navBar} ${isHamActive ? styles.navActive : ""}`}
      >
        <a
          href="#home"
          className={activeSection === "home" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          About
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Portfolio
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Contact
        </a>

        <div className={styles.homeSci}>
          <a
            href="https://www.linkedin.com/in/joseph-collins-129788b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="https://github.com/Joe-Collins-1986/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiGithubLogoFill />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;
