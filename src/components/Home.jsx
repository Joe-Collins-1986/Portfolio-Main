import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";
import smoke from "../assets/videos/test.webm";

const Home = () => {
  const activeSection = useSection(["home"]);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if user is on an iOS device
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

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

        {activeSection &&
          (!isIOS ? (
            <div className={styles.smoke}>
              <video src={smoke} autoPlay muted playsInline></video>
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
            </div>
          ) : (
            <div className={styles.textAnimate}>
              <h3>
                FULLSTACK DEVELOPER
                <SpanSwipe
                  activeSection={activeSection}
                  colour={"animateBg"}
                  delay={3}
                />
              </h3>
            </div>
          ))}

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

        <a href="#" className={uStyles.btn}>
          Let's Talk
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={5}
          />
        </a>

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
          delay={8}
          image={true}
        />
      </div>
    </section>
  );
};

export default Home;
