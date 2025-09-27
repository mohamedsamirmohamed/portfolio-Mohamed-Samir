import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import { usePortfolio } from '../Context/PortfolioContext';
import { Link } from 'react-router-dom'; // فقط للروابط الداخلية
import styles from '../Hero/Hero.module.css';
import sphereImage from '../image/IMG_1843.jpg';

export default function Hero() {
  const { darkMode } = usePortfolio();

  const animation = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1000 },
  });

  const socialAnimation = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  const sphereAnimation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)' },
    to: { transform: 'scale(1) rotate(360deg)' },
    config: { duration: 2000 },
  });

  return (
    <div className={`${styles.hero} ${darkMode ? styles.dark : styles.light}`}>
      <animated.div style={animation} className={styles.content}>
        <h2>Hello, I'm</h2>
        <h1>Mohamed Samir</h1>
        <h3>Frontend Developer</h3>
        <p>Turning Ideas into Code, Towards a Purpose</p>

        <div className={styles.cta}>
          <a href="#Contact" className={styles.hireBtn}>Hire Me</a>

          <a href="/Mohamed Samir frontend.pdf" download className={styles.downloadBtn}>
            Download Resume
          </a>
        </div>

        <animated.div style={socialAnimation} className={styles.social}>
          <a 
            href="https://www.linkedin.com/in/mohamed-samir-73a4ba237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/mohamedsamirmohamed" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          {/* <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a> */}
        </animated.div>
      </animated.div>

      <animated.div style={sphereAnimation} className={styles.sphere}>
        <img src={sphereImage} alt="Sphere" />
      </animated.div>
    </div>
  );
}
