import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar2.module.css";
import { HiMenu } from "react-icons/hi";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#home" className={styles.active}>
          Home
        </a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar2;
