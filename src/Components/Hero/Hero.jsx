import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import styles from "./Hero.module.css";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.glitchText} data-text="Full Stack Developer">
          Full Stack Developer
        </h1>
        <p className={styles.typingText}>
          Building digital experiences that matter
        </p>
        <div className={styles.ctaButtons}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={(e) => scrollToSection(e)}
          >
            View Work
          </a>
          <a
            href="#contact"
            className={styles.btnSecondary}
            onClick={(e) => scrollToSection(e)}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
      </div>
    </section>
  );
};

export default Hero;
