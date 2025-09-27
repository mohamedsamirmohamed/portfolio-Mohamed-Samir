import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { usePortfolio } from '../Context/PortfolioContext';
import styles from '../About/About.module.css';
import profileImage from '../image/freepik__the-style-is-candid-image-photography-with-natural__17596.png'; // ضع صورتك هنا

const About = () => {
  const { darkMode } = usePortfolio();

  const titleAnimation = useSpring({ from: { y: -50, opacity: 0 }, to: { y: 0, opacity: 1 }, config: { duration: 800 } });
  const contentAnimation = useSpring({ from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 400, config: { duration: 1000 } });
  const imageAnimation = useSpring({ from: { x: 100, opacity: 0, scale: 0.8 }, to: { x: 0, opacity: 1, scale: 1 }, delay: 600, config: { duration: 1200 } });
  const statsAnimation = useSpring({ from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 800, config: { duration: 1000 } });

  return (
    <section className={`${styles.aboutSection} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </animated.div>

        <div className={styles.aboutContent}>
          {/* النصوص */}
          <animated.div style={contentAnimation} className={styles.aboutText}>
            <h3>Who am I?</h3>
            <div className={styles.textUnderline}></div>

            <div className={styles.description}>
              <p>Front-End Developer skilled in React.js with experience building responsive and user-friendly web applications. Passionate about creating innovative solutions and continuously improving my skills in JavaScript and modern web technologies.</p>
              <p>I'm constantly learning, growing, and exploring new technologies....</p>
            </div>

            <div className={styles.statsContainer}>
              <animated.div style={statsAnimation} className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Projects</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Dedicated</div>
                </div>
              </animated.div>
            </div>
          </animated.div>

          {/* الصورة بدل الشكل */}
          <animated.div style={imageAnimation} className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <img 
                src={profileImage} 
                alt="Profile" 
                className={styles.profileImage} 
              />
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default About;
