import React from "react";
import styles from "../styles/Home.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h1>
          Hello, I'm <span>Joe Collins</span>
        </h1>
        <div className={styles.textAnimate}>
          <h3>Fullstack Developer</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          aperiam? Dolore sit dignissimos corrupti hic amet exercitationem,
          tenetur culpa, temporibus minima iste quae ab vel dolorum esse?
        </p>

        <div className={uStyles.btnBox}>
          <a href="#" className={uStyles.btn}>
            Hire Me
          </a>
          <a href="#" className={uStyles.btn}>
            Let's Talk
          </a>
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
      </div>

      <div className={styles.homeImgHover}></div>
    </section>
  );
};

export default Home;
