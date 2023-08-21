import React from "react";
import styles from "../styles/Home.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";
import smoke from "../assets/videos/smoke.mp4";

const Home = () => {
  const activeSection = useSection(["home"]);

  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>
          Hello, I'm <span>Joe Collins</span>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={2}
          />
        </h1>

        <div className={styles.textAnimate}>
          <video src={smoke} autoPlay muted></video>

          <h3>
            <span>F</span>
            <span>U</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>&nbsp;</span>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </h3>
          {/* <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={3}
          /> */}
        </div>
        <p>
          Work with me to bring your digital dreams to life through the seamless
          blend of Python and Django's robust functionality with React's dynamic
          JavaScript library.
          <br />
          <br />
          Let's explore what's possible together!
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={4}
          />
        </p>

        <div className={uStyles.btnBox}>
          <a href="#" className={uStyles.btn}>
            Hire Me
          </a>
          <a href="#" className={uStyles.btn}>
            Let's Talk
          </a>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={5}
          />
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
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={6}
          />
        </div>

        <div className={styles.homeImgHover}></div>

        <SpanSwipe
          activeSection={activeSection}
          colour={"animateBg"}
          delay={6}
          image={true}
        />
      </div>
    </section>
  );
};

export default Home;
