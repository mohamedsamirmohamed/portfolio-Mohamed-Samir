import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import styles from '../Navbar/Navbar.module.css';
import { PortfolioContext } from '../Context/PortfolioContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(PortfolioContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>
      <a href="#home" className={styles.logo}>Mohamed Samir</a>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={0} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={0} onClick={closeMenu}>About Me</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={0} onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={0} onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={0} onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      <div className={styles.navControls}>
        <div className={styles.themeToggle}>
          {darkMode ? (
            <FaMoon className={styles.themeIcon} style={{ pointerEvents: 'none' }} />
          ) : (
            <FaSun className={styles.themeIcon} style={{ pointerEvents: 'none' }} />
          )}

          <label className={styles.toggleWrapper}>
            <input
              type="checkbox"
              className={styles.toggleInput}
              checked={darkMode}
              onChange={toggleDarkMode}
              aria-label="Toggle dark mode"
            />
            <span className={styles.toggleSlider}></span>
          </label>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ outline: 'none', border: 'none' }}
        >
          {isMenuOpen ? <FaTimes style={{ pointerEvents: 'none' }} /> : <FaBars style={{ pointerEvents: 'none' }} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
