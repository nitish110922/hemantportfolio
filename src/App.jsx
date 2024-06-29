import React from 'react'
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Achievements from './components/achievements/Achievements';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
