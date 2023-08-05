import React from "react";
import styles from "../styles/About.module.css";
import uStyles from "../styles/MultiUse.module.css";
import image from "../assets/images/portfolio_face.png";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={uStyles.heading}>
        About <span>Me</span>
      </h2>

      <div className={styles.aboutImg}>
        <img src={image} alt="face"></img>
        <span className={styles.circleSpin}></span>
      </div>

      <div className={styles.aboutContent}>
        <h3>FullStack Developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          ratione sed. Quia enim veniam excepturi. Tenetur, accusantium. Eos,
          unde impedit consequatur reiciendis sequi minima aperiam temporibus
          voluptates. Earum, facilis cum voluptatibus dicta culpa, dolor
          possimus ex, ipsa excepturi nisi corporis debitis sequi voluptate
          impedit dolorem quia facere? Distinctio, natus aliquam.
        </p>

        <div className={`${uStyles.btnBox} ${uStyles.btns}`}>
          <a href="#" className={uStyles.btn}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
