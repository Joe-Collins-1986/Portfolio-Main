import React from "react";
import styles from "../styles/Footer.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <p>By Joe Collins</p>
      </div>

      <div className={styles.footerIconTop}>
        <a href="#">
          <AiOutlineArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
