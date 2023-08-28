import React from "react";
import styles from "../styles/Portfolio.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { useSection } from "../hooks/useSection";
import SpanSwipe from "./SpanSwipe";
import hangman from "../assets/images/hangman.png";
import minesweeper from "../assets/images/minesweeper.png";
import travel from "../assets/images/travel-app.png";
import bitwise from "../assets/images/bitwise.png";

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
          <img src={bitwise} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 1</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <div>
              <a href="#">
                <BiLinkExternal className={styles.link} />
              </a>
              <a href="#">
                <BiLinkExternal className={styles.link} />
              </a>
            </div>
          </div>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={2}
          />
        </div>

        <div className={styles.portfolioBox}>
          <img src={travel} alt="" />
          <div className={styles.portfolioLayer}>
            <h4>Portfolio 2</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              unde?
            </p>
            <div>
              <a href="#">
                <BiLinkExternal className={styles.link} />
              </a>
              <a href="#">
                <BiLinkExternal className={styles.link} />
              </a>
            </div>
          </div>
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={3}
          />
        </div>

        <div className={styles.portfolioBox}>
          <img src={minesweeper} alt="" />
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
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={4}
          />
        </div>

        <div className={styles.portfolioBox}>
          <img src={hangman} alt="" />
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
          <SpanSwipe
            activeSection={activeSection}
            colour={"animateBg"}
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
