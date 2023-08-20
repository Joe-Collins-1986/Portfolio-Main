import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NavBar.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamActive, setHamActive] = useState(false);
  const navRef = useRef(null);
  const activeSection = useSection([
    "home",
    "about",
    "portfolio",
    "experience",
    // "skills",
    "contact",
  ]);

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
        Joe
      </a>

      <div>
        {!isHamActive ? (
          <HiMenu
            className={styles.menuIcon}
            onClick={() => setHamActive(true)}
          />
        ) : (
          <AiOutlineClose
            className={styles.menuIcon}
            onClick={() => setHamActive(false)}
          />
        )}
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
          href="#experience"
          className={activeSection === "experience" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Experience
        </a>
        {/* <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Skills
        </a> */}
        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar2;
