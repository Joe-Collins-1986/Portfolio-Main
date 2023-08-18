import React from "react";
import styles from "../styles/Portfolio.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";
import image from "../assets/images/temp1.jpg";
import image2 from "../assets/images/temp2.jpg";
import image3 from "../assets/images/temp3.jpg";
import image4 from "../assets/images/temp4.jpg";
import image5 from "../assets/images/temp5.jpg";
import image6 from "../assets/images/temp6.jpg";

import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
  const activeSection = useSection(["portfolio"]);

  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={uStyles.heading}>
        Latest <span>Projects</span>
        <SpanSwipe
          activeSection={activeSection}
          colour={"animateBg"}
          delay={1}
        />
      </h2>

      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioBox}>
          <img src={image} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 1</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>

        <div className={styles.portfolioBox}>
          <img src={image2} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 2</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>

        <div className={styles.portfolioBox}>
          <img src={image3} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 3</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>

        <div className={styles.portfolioBox}>
          <img src={image4} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 4</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>

        <div className={styles.portfolioBox}>
          <img src={image5} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 5</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>

        <div className={styles.portfolioBox}>
          <img src={image6} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 6</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <a href="#">
              <BiLinkExternal className={styles.link} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
