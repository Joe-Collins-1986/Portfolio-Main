import React, { useState } from "react";
import styles from "../styles/About.module.css";
import uStyles from "../styles/MultiUse.module.css";
import image from "../assets/images/portfolio_face.png";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";

const About = () => {
  const activeSection = useSection(["about"]);
  const [isreadMore, setreadMore] = useState(false);

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

      {activeSection && (
        <div className={styles.box}>
          <div className={styles.aboutImg}>
            <img src={image} alt="face"></img>
            <h2>Joe Collins</h2>
            <a href="#contact" className={uStyles.btn}>
              Let's talk!
            </a>
          </div>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={2}
          />
        </div>
      )}

      <div className={styles.aboutContent}>
        <h3>
          FullStack Developer!
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={3}
          />
        </h3>

        <div className={styles.skillTags}>
          <button>HTML</button>
          <button>CSS</button>
          <button>JS</button>
          <button>Python</button>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={4}
          />
        </div>

        <div className={styles.skillTags}>
          <button>React</button>
          <button>Django</button>
          <button>DRF</button>
          <button>Flask</button>
          <button>FireBase</button>
          <button>Git</button>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={4}
          />
        </div>
        <p>
          I've dedicated over a decade to the financial and procurement sectors,
          specializing in the development and implementation of procedures, and
          training for a wide array of processes and systems. Through this role,
          I often collaborated with software developers, which ignited my drive
          to transition into this field. To achieve this, I self-funded a
          rigorous one-year online course at the Code Institute, and graduated
          with a distinction in Full Stack Development.
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={5}
          />
        </p>

        {isreadMore && (
          <p>
            On a personal note, I love traveling the world with my wife, walking
            my giant, lovable dog, and indulging with friends over good food and
            drink.
            <br />
            <br />
            P.S. If you find yourself enviously eyeing the handsome face on this
            portfolio, don’t be fooled! As much as I wish it were mine, that's
            just Midjourney's imaginative depiction of a techie version of me.
            If only mirrors were as imaginative!
          </p>
        )}

        <a className={uStyles.btn} onClick={() => setreadMore(!isreadMore)}>
          {isreadMore ? "Read Less" : "Read More"}
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={6}
          />
        </a>
      </div>
    </section>
  );
};

export default About;
