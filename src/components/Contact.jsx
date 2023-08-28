import React from "react";
import styles from "../styles/Contact.module.css";
import uStyles from "../styles/MultiUse.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={uStyles.heading}>
        Contact <span>Me</span>
      </h2>

      <form action="#">
        <div className={styles.inputBox}>
          <div className={styles.inputField}>
            <input type="text" placeholder="Full Name*" required />
            <span className={styles.focus}></span>
          </div>

          <div className={styles.inputField}>
            <input type="text" placeholder="Email Address*" required />
            <span className={styles.focus}></span>
          </div>
        </div>

        <div className={styles.textareaField}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message*"
            required
          ></textarea>
          <span className={styles.focus}></span>
        </div>

        <div className={`${uStyles.btnBox} ${uStyles.btns}`}>
          <button type="submit" className={uStyles.btn}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
