import styles from "./Herostyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-Dark.svg";
import linkdlnLight from "../../assets/linkedin-light.svg";
import linkdlnDark from "../../assets/linkedin-Dark.svg";
import CV from "../../assets/Resume Rahul.pdf.pdf";
import { useTheme } from "../../Common/Themecontext";
import HeroImg from "../../assets/hero-img.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";

function hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkdlnIcon = theme === "light" ? linkdlnLight : linkdlnDark;
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImg} alt="profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>
          Rahul <br />
          Singh
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkdlnIcon} alt="LinkedIn icon" />
          </a>
        </span>

        <p className={styles.description}>
          Innovative React Developer with a strong foundation in building
          dynamic,
          <br /> scalable applications using React.js <br />
          and modern frontend technologies.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default hero;
