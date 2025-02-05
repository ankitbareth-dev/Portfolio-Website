import projectImage from "../../assets/Images/Project1.png";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: projectImage,
      title: "Todo-App",
      description:
        "A streamlined task management application that helps you to organize, track, and complete your daily activities efficiently and effectively.",
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
    {
      id: 2,
      image: projectImage,
      title: "Todo-App",
      description:
        "A streamlined task management application that helps you to organize, track, and complete your daily activities efficiently and effectively.",
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
    {
      id: 2,
      image: projectImage,
      title: "Todo-App",
      description:
        "A streamlined task management application that helps you to organize, track, and complete your daily activities efficiently and effectively.",
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
    {
      id: 2,
      image: projectImage,
      title: "Todo-App",
      description:
        "A streamlined task management application that helps you to organize, track, and complete your daily activities efficiently and effectively.",
      demoLink: "https://todo-app-alpha-five-45.vercel.app/",
      githubLink: "https://github.com/ankitbareth-dev/Todo-App",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Featured Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                <a href={project.demoLink} className={styles.btn}>
                  Live Demo
                </a>
                <a href={project.githubLink} className={styles.btn}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
