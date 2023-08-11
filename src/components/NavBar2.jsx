import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar2.module.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useSection } from "../hooks/useSection";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamActive, setHamActive] = useState(false);
  const activeSection = useSection([
    "home",
    "about",
    "experience",
    "skills",
    "contact",
  ]);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", scrollListener);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header
      className={`${styles.navContainer} ${isScrolled ? styles.sticky : ""}`}
    >
      <a href="#" className={styles.logo}>
        Joe
      </a>

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
          href="#experience"
          className={activeSection === "experience" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Experience
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
          onClick={() => setHamActive(false)}
        >
          Skills
        </a>
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
