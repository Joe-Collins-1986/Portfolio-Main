import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsGithub } from "react-icons/bs";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (name) => {
    setActiveLink(name);
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    NavBar.classList.toggle("expanded");
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`${styles.NavBar} ${scrolled ? styles.Scrolled : ""}`}
    >
      <Container fluid={true}>
        <Navbar.Brand href="#home" className={styles.Brand}>
          LOGO
        </Navbar.Brand>

        <Navbar.Toggle
          // aria-controls="basic-navbar-nav"
          aria-expanded={expanded ? true : false}
          className={styles.NavBarToggler}
          onClick={handleToggle}
        >
          <span className={styles.NavBarTogglerIcon}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.CenteredNav}`}>
            <Nav.Link
              href="#home"
              className={`${styles.NavBarLink} ${
                activeLink === "home" ? styles.NavBarLinkActive : ""
              }`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${styles.NavBarLink} ${
                activeLink === "skills" ? styles.NavBarLinkActive : ""
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${styles.NavBarLink} ${
                activeLink === "projects" ? styles.NavBarLinkActive : ""
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#cv"
              className={`${styles.NavBarLink} ${
                activeLink === "cv" ? styles.NavBarLinkActive : ""
              }`}
              onClick={() => onUpdateActiveLink("cv")}
            >
              CV
            </Nav.Link>
          </Nav>

          <span className={styles.NavBarText}>
            <div className={styles.SocialContactWrapper}>
              <div className={styles.SocialIcons}>
                <a href="#">
                  <BsGithub className={styles.SocialIconComponent} />
                </a>
                <a href="#">
                  <BiLogoLinkedin className={styles.SocialIconComponent} />
                </a>
                <a href="#">
                  <BsFacebook className={styles.SocialIconComponent} />
                </a>
              </div>

              <button
                className={styles.ContactButton}
                onClick={() => console.log("connect")}
              >
                <span>Contact Me</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
