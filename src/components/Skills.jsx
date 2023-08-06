import React from "react";
import styles from "../styles/Skills.module.css";
import uStyles from "../styles/MultiUse.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={uStyles.heading}>
        My <span>Skills</span>
      </h2>
      <div className={styles.skillsRow}>
        <div className={styles.skillsColumn}>
          <h3 className={styles.title}>Coding Skills</h3>

          <div className={styles.skillsBox}>
            <div className={styles.skillsContent}>
              <div className={styles.progress}>
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  CSS <span>80%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  JavaScript <span>65%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Python <span>75%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skillsColumn}>
          <h3 className={styles.title}>Professional Skills</h3>

          <div className={styles.skillsBox}>
            <div className={styles.skillsContent}>
              <div className={styles.progress}>
                <h3>
                  Web Design <span>80%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Web Development <span>85%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Graphic Design <span>70%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  SEO Marketing <span>55%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
