import React from "react";
import styles from "../styles/AboutTest.module.css";
import uStyles from "../styles/MultiUse.module.css";
import image from "../assets/images/portfolio_face.png";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";

const AboutTest = () => {
  const activeSection = useSection(["about"]);

  return (
    <section className={styles.about} id="about">
      <h2 className={uStyles.heading}>
        About <span>Me</span>
        <SpanSwipe
          activeSection={activeSection}
          colour={"animateSecBg"}
          delay={1}
        />
      </h2>

      <div className={styles.aboutImg}>
        <img src={image} alt="face"></img>
        <span className={styles.circleSpin}></span>
        <SpanSwipe
          activeSection={activeSection}
          colour={"animateSecBg"}
          delay={2}
        />
      </div>

      <div className={styles.aboutContent}>
        <h3>
          FullStack Developer!
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={3}
          />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          ratione sed. Quia enim veniam excepturi. Tenetur, accusantium. Eos,
          unde impedit consequatur reiciendis sequi minima aperiam temporibus
          voluptates. Earum, facilis cum voluptatibus dicta culpa, dolor
          possimus ex, ipsa excepturi nisi corporis debitis sequi voluptate
          impedit dolorem quia facere? Distinctio, natus aliquam.
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={4}
          />
        </p>

        <div className={`${uStyles.btnBox} ${uStyles.btns}`}>
          <a href="#" className={uStyles.btn}>
            Read More
          </a>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTest;
