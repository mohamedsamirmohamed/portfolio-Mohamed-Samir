import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { usePortfolio } from '../Context/PortfolioContext';
import styles from '../Projects/Projects.module.css';

const Projects = () => {
  const { darkMode, projects } = usePortfolio();

  const titleAnimation = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 800 }
  });

  return (
    <section id="projects" className={`${styles.projectsSection} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        
        {/* Title */}
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>My Projects</h2>
          <div className={styles.titleUnderline}></div>
        </animated.div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>

              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.techStack}>
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.demoBtn}>🔗 Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.githubBtn}>💻 GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
