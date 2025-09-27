import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
// لو عندك باقي الأقسام: Skills, Projects, Contact
// import Skills from '../Skills/Skills';
import Projects from './components/Projects/Projects';// import Contact from '../Contact/Contact';
// import Projects from '../Projects/Projects';
 import Contact from './components/Contact/Contact';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>

         <section id="Projects">
          <Projects />
        </section>

      <section id="Contact">
          <Contact />
        </section>
     
      </main>
      <Footer />
    </>
  );
};

export default Layout;
