import React from "react";
import styles from "../styles/Experience.module.css";
import uStyles from "../styles/MultiUse.module.css";
import { BsFillCalendarEventFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={uStyles.heading}>
        My <span>Journey</span>
      </h2>

      <div className={styles.experienceRow}>
        <div className={styles.experienceColumn}>
          <h3 className={styles.title}>Education</h3>

          <div className={styles.experienceBox}>
            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2019-2020
                </div>
                <h3>Code Institute</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2019-2020
                </div>
                <h3>Uni</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2017-2018
                </div>
                <h3>School</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.experienceColumn}>
          <h3 className={styles.title}>Experience</h3>

          <div className={styles.experienceBox}>
            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2019-2020
                </div>
                <h3>Latest Work</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2019-2020
                </div>
                <h3>Work 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <BsFillCalendarEventFill className={styles.icon} />
                  2017-2018
                </div>
                <h3>Work 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  suscipit iure animi cupiditate earum adipisci dolorum
                  quibusdam, quod voluptas exercitationem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
