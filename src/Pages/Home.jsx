import React from 'react'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home