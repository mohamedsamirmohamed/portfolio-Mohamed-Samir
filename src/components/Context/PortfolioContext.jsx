import React, { createContext, useContext, useState, useEffect } from 'react';
import profileImage1 from '../image/Screenshot 2025-09-25 110102.png';
import profileImage2 from '../image/Screenshot 2025-09-25 112114.png';
import profileImage3 from '../image/Screenshot 2025-09-25 112802.png';
import profileImage4 from '../image/Screenshot 2025-09-25 114518.png';
import profileImage5 from '../image/Screenshot 2025-09-25 115136.png';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // اقرأ الوضع من localStorage أو خلي الوضع الافتراضي true (Dark Mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Projects Data
  const projectsData = [
    {
      id: 1,
      title: "E-commerce",
      description: "A full-featured E-Commerce web application built with React.js. Includes product listing, product details, shopping cart, add/remove items, checkout flow, and integration with APIs for dynamic data.",
      image: profileImage1,
      technologies: ["React.js", "Context API", "React Router", "CSS/Bootstrap", "Swiper", "Axios"],
      demoLink: "https://mohamedsamirmohamed.github.io/Ecommerce/",
      githubLink: "https://github.com/mohamedsamirmohamed/Ecommerce"
    },
    {
      id: 2,
      title: "Ecommerce2",
      description: "A modern, responsive e-commerce web application built with React, featuring user authentication, product browsing, cart functionality, and secure checkout process.",
      image: profileImage2,
      technologies: ["React", "Context API", "React Router", "CSS/Bootstrap"],
      demoLink: "https://mohamedsamirmohamed.github.io/Ecommerce2/",
      githubLink: "https://github.com/mohamedsamirmohamed/Ecommerce2"
    },
    {
      id: 3,
      title: "MoonFlix - Movie & TV Series Streaming Platform",
      description: "MoonFlix is an interactive movie and TV series streaming platform that allows users to explore and watch the latest films and shows. Built with React, Tailwind, and Clerk for secure authentication.",
      image: profileImage3,
      technologies: [
        "React.js", "Tailwind CSS", "Bootstrap 5", "React Router DOM",
        "Context API", "Clerk Authentication", "Axios", "React Icons", "Lucide Icons"
      ],
      demoLink: "https://mohamedsamirmohamed.github.io/MoonFlix/",
      githubLink: "https://github.com/mohamedsamirmohamed/MoonFlix"
    },
    {
      id: 4,
      title: "PowerZone Gym",
      description: "A comprehensive web application for PowerZone Gym, providing users with an integrated system for managing memberships, workout programs, nutrition, and an e-commerce store.",
      image: profileImage4,
      technologies: [
        "React.js", "Bootstrap 5", "React Router DOM", "Axios", "Swiper", "React Icons", "Context Data"
      ],
      demoLink: "https://mohamedsamirmohamed.github.io/PowerZone-Gym/",
      githubLink: "https://github.com/mohamedsamirmohamed/PowerZone-Gym"
    },
    {
      id: 5,
      title: "Car Services website",
      description: "A comprehensive car service management web application that allows users to book maintenance appointments, browse available cars, and access various maintenance services with an easy-to-use interface.",
      image: profileImage5,
      technologies: ["React.js", "Tailwind CSS", "Bootstrap 5", "React Router DOM", "Axios", "React Hook Form", "Context Data"],
      demoLink: "https://mohamedsamirmohamed.github.io/Car-Services/",
      githubLink: "https://github.com/mohamedsamirmohamed/Car-Services"
    }
  ];

  // Skills Data
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 }
      ]
    }
  ];

  // حفظ الوضع في localStorage كل مرة يتغير
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <PortfolioContext.Provider value={{
      darkMode,
      toggleDarkMode,
      activeSection,
      setActiveSection,
      projects: projectsData,
      skills: skillsData,
      isScrolled
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within a PortfolioProvider');
  return context;
};

export default PortfolioProvider;
