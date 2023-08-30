import { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import uStyles from "../styles/MultiUse.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(true);
  const [emailMessage, setEmailMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.elements.user_email.value;

    if (!isValidEmail(email)) {
      console.log("Invalid email address");
      setEmailValid(false);
      return;
    }

    setEmailValid(true);

    emailjs
      .sendForm(
        "service_ykurkup",
        "template_wlv7j99",
        form.current,
        "W5iYcUFqpkkb1khwW"
      )
      .then(
        (result) => {
          setEmailMessage(true);
          setAlertMessage("Your message has been sent successfully");
          console.log("Sent:", result);

          setTimeout(() => {
            setEmailMessage(false);
          }, 3000);
        },
        (error) => {
          setEmailMessage(true);
          setAlertMessage("Something went wrong, try again later");
          console.log("Didn't send:", error);

          setTimeout(() => {
            setEmailMessage(false);
          }, 3000);
        }
      );

    e.target.reset();
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={uStyles.heading}>
        Contact <span>Me</span>
      </h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.inputBox}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Full Name*"
              name="user_name"
              required
            />
            <span className={styles.focus}></span>
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Email Address*"
              name="user_email"
              required
            />
            <span className={styles.focus}></span>
          </div>
        </div>

        {!emailValid && (
          <div className={styles.errorBox}>Please input a valid email</div>
        )}

        <div className={styles.textareaField}>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message*"
            required
          ></textarea>
          <span className={styles.focus}></span>
        </div>

        {emailMessage && (
          <div className={styles.messageAlert}>{alertMessage}</div>
        )}

        <button type="submit" className={uStyles.btn}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
