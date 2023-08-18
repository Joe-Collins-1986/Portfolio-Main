import React from "react";
import styles from "../styles/Home.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { useSection } from "../hooks/useSection";

const Home = () => {
  const activeSection = useSection(["home"]);

  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>
          Hello, I'm <span>Joe Collins</span>
          {activeSection ? (
            <span
              className={`${uStyles.animateBg} ${uStyles.animate1}`}
              style={{ "--i": 2 }}
            ></span>
          ) : (
            <span className={uStyles.animateBg}></span>
          )}
        </h1>

        <div className={styles.textAnimate}>
          <h3>Fullstack Developer</h3>
          {activeSection ? (
            <span
              className={`${uStyles.animateBg} ${uStyles.animate1}`}
              style={{ "--i": 3 }}
            ></span>
          ) : (
            <span className={uStyles.animateBg}></span>
          )}
        </div>
        <p>
          Work with me to bring your digital dreams to life through the seamless
          blend of Python and Django's robust functionality with React's dynamic
          JavaScript library.
          <br />
          <br />
          Let's explore what's possible together!
          {activeSection ? (
            <span
              className={`${uStyles.animateBg} ${uStyles.animate1}`}
              style={{ "--i": 4 }}
            ></span>
          ) : (
            <span className={uStyles.animateBg}></span>
          )}
        </p>

        <div className={uStyles.btnBox}>
          <a href="#" className={uStyles.btn}>
            Hire Me
          </a>
          <a href="#" className={uStyles.btn}>
            Let's Talk
          </a>
          {activeSection ? (
            <span
              className={`${uStyles.animateBg} ${uStyles.animate1}`}
              style={{ "--i": 5 }}
            ></span>
          ) : (
            <span className={uStyles.animateBg}></span>
          )}
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
        {activeSection ? (
          <span
            className={`${uStyles.animateBg} ${uStyles.animate1}`}
            style={{ "--i": 6 }}
          ></span>
        ) : (
          <span className={uStyles.animate}></span>
        )}
      </div>

      <div className={styles.homeImgHover}></div>

      {activeSection ? (
        <span
          className={`${uStyles.animateBg} ${uStyles.animate1} ${uStyles.animateImage}`}
          style={{ "--i": 7 }}
        ></span>
      ) : (
        <span className={uStyles.animateBg}></span>
      )}
    </section>
  );
};

export default Home;
