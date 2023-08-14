import React from "react";
import styles from "../styles/Home.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>
          Hello, I'm <span>Joe Collins</span>
          <span
            className={`${uStyles.animate} ${uStyles.animate1}`}
            style={{ "--i": 2 }}
          ></span>
        </h1>

        <div className={styles.textAnimate}>
          <h3>Fullstack Developer</h3>
          <span
            className={`${uStyles.animate} ${uStyles.animate1}`}
            style={{ "--i": 3 }}
          ></span>
        </div>
        <p>
          Work with me to bring your digital dreams to life through the seamless
          blend of Python and Django's robust functionality with React's dynamic
          JavaScript library.
          <br />
          <br />
          Let's explore what's possible together!
          <span
            className={`${uStyles.animate} ${uStyles.animate1}`}
            style={{ "--i": 4 }}
          ></span>
        </p>

        <div className={uStyles.btnBox}>
          <a href="#" className={uStyles.btn}>
            Hire Me
          </a>
          <a href="#" className={uStyles.btn}>
            Let's Talk
          </a>
          <span
            className={`${uStyles.animate} ${uStyles.animate1}`}
            style={{ "--i": 5 }}
          ></span>
        </div>
      </div>

      <div className={styles.homeSci}>
        <a href="#">
          <BiLogoFacebook />
        </a>
        <a href="#">
          <BiLogoTwitter />
        </a>
        <a href="#">
          <PiGithubLogoFill />
        </a>
        <span
          className={`${uStyles.animate} ${uStyles.animate1}`}
          style={{ "--i": 6 }}
        ></span>
      </div>

      <div className={styles.homeImgHover}></div>
      <span
        className={`${uStyles.animate} ${uStyles.animate1} ${uStyles.animateImage}`}
        style={{ "--i": 7 }}
      ></span>
    </section>
  );
};

export default Home;
