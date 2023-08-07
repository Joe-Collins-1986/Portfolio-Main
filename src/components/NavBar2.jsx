import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar2.module.css";
import { HiMenu } from "react-icons/hi";
import { useSection } from "../hooks/useSection";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

      <HiMenu
        className={`${styles.bx} ${styles.bxMenu}`}
        id={styles.menuIcon}
      />

      <nav className={styles.navBar}>
        <a
          href="#home"
          className={activeSection === "home" ? styles.active : ""}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? styles.active : ""}
        >
          About
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? styles.active : ""}
        >
          Experience
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : ""}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar2;
