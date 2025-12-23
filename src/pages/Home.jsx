// pages/Home.js
import React from "react";

import About from "../components1/About";
import Skills from "../components1/Skills";
import Hero from "../components1/Hero";
import Projects from "../components1/Projects";
import Contact from "../components1/Contact";

const Home = () => {
  return (
    <div className="bg-black text-textPrimary min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
