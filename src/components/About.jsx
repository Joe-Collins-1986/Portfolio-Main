import React from "react";
import styles from "../styles/About.module.css";
import uStyles from "../styles/MultiUse.module.css";
import image from "../assets/images/portfolio_face.png";
import { useSection } from "../hooks/useSection";

const About = () => {
  const activeSection = useSection(["about"]);

  return (
    <section className={styles.about} id="about">
      <h2 className={uStyles.heading}>
        About <span>Me</span>
        {activeSection ? (
          <span
            className={`${uStyles.animateSecBg} ${uStyles.animate1}`}
            style={{ "--i": 1 }}
          ></span>
        ) : (
          <span className={uStyles.animateSecBg}></span>
        )}
      </h2>

      <div className={styles.aboutImg}>
        <img src={image} alt="face"></img>
        <span className={styles.circleSpin}></span>
        {activeSection ? (
          <span
            className={`${uStyles.animateSecBg} ${uStyles.animate1}`}
            style={{ "--i": 2 }}
          ></span>
        ) : (
          <span className={uStyles.animateSecBg}></span>
        )}
      </div>

      <div className={styles.aboutContent}>
        <h3>
          FullStack Developer!
          {activeSection ? (
            <span
              className={`${uStyles.animateSecBg} ${uStyles.animate1}`}
              style={{ "--i": 3 }}
            ></span>
          ) : (
            <span className={uStyles.animateSecBg}></span>
          )}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          ratione sed. Quia enim veniam excepturi. Tenetur, accusantium. Eos,
          unde impedit consequatur reiciendis sequi minima aperiam temporibus
          voluptates. Earum, facilis cum voluptatibus dicta culpa, dolor
          possimus ex, ipsa excepturi nisi corporis debitis sequi voluptate
          impedit dolorem quia facere? Distinctio, natus aliquam.
          {activeSection ? (
            <span
              className={`${uStyles.animateSecBg} ${uStyles.animate1}`}
              style={{ "--i": 4 }}
            ></span>
          ) : (
            <span className={uStyles.animateSecBg}></span>
          )}
        </p>

        <div className={`${uStyles.btnBox} ${uStyles.btns}`}>
          <a href="#" className={uStyles.btn}>
            Read More
          </a>
          {activeSection ? (
            <span
              className={`${uStyles.animateSecBg} ${uStyles.animate1}`}
              style={{ "--i": 5 }}
            ></span>
          ) : (
            <span className={uStyles.animateSecBg}></span>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
