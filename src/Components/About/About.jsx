import profileImage from "../../assets/Images/Profile.png";
import styles from "./About.module.css";

const About = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Full Stack Developer with expertise in modern web technologies</p>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        <div className={styles.aboutImage}>
          <img src={profileImage} alt="Developer Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
