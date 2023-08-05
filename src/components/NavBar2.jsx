import React from "react";
import styles from "../styles/NavBar2.module.css";
import { HiMenu } from "react-icons/hi";

const NavBar2 = () => {
  return (
    <div className={styles.navContainer}>
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
    </div>
  );
};

export default NavBar2;
