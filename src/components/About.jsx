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

      <div className={styles.box}>
        <div className={styles.aboutImg}>
          <img src={image} alt="face"></img>
          <h2>Joe Collins</h2>
          <a href="#" className={uStyles.btn}>
            Let's talk!
          </a>
        </div>
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

        {isreadMore && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            ratione sed. Quia enim veniam excepturi. Tenetur, accusantium. Eos,
            unde impedit consequatur reiciendis sequi minima aperiam temporibus
            voluptates. Earum, facilis cum voluptatibus dicta culpa, dolor
            possimus ex, ipsa excepturi nisi corporis debitis sequi voluptate
            impedit dolorem quia facere? Distinctio, natus aliquam.
          </p>
        )}

        <a className={uStyles.btn} onClick={() => setreadMore(!isreadMore)}>
          {isreadMore ? "Read Less" : "Read More"}
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateSecBg"}
            delay={5}
          />
        </a>
      </div>
    </section>
  );
};

export default About;
