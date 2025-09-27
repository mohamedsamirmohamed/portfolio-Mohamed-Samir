import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { usePortfolio } from "../Context/PortfolioContext";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaCode, FaTools, FaLaptopCode } from "react-icons/fa"; // أيقونات

import styles from "../Skills/Skills.module.css";

const Skills = () => {
  const { darkMode } = usePortfolio();
  const { ref, inView } = useInView({ triggerOnce: true });

  const titleAnimation = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 800 },
  });

  const cardAnimation = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 400,
    config: { duration: 1000 },
  });

  // مكون فرعي لكل مهارة
  const SkillBar = ({ label, value }) => {
    const barAnimation = useSpring({
      width: inView ? `${value}%` : "0%",
      config: { duration: 2000 },
    });

    return (
      <div className={styles.skillItem}>
        <span>{label}</span>
        <div className={styles.progress}>
          <animated.div style={barAnimation}></animated.div>
        </div>
        <span className={styles.percent}>
          {inView && <CountUp end={value} duration={2} />}%
        </span>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className={`${styles.skillsSection} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        {/* العنوان */}
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>My Skills</h2>
          <div className={styles.titleUnderline}></div>
        </animated.div>

        <div className={styles.skillsContent}>
          {/* الكارت الأول */}
          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaCode className={styles.icon}/> Coding Skills</h3>
            <SkillBar label="HTML" value={90} />
            <SkillBar label="CSS" value={65} />
            <SkillBar label="JavaScript" value={70} />
            <SkillBar label="React" value={90} />
          </animated.div>

          {/* الكارت الثاني */}
          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaTools className={styles.icon}/> Tools & Technologies</h3>
            <SkillBar label="VS Code" value={90} />
            <SkillBar label="Bootstrap" value={75} />
            <SkillBar label="Git & GitHub" value={63} />
          </animated.div>

          {/* الكارت الثالث */}
          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaLaptopCode className={styles.icon}/> Professional Skills</h3>
            <SkillBar label="Web Design" value={66} />
            <SkillBar label="Web Development" value={60} />
            <SkillBar label="Graphic Design" value={55} />
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
