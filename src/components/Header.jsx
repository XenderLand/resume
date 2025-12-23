// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <header className=" p-6 text-lightBlue bg-black ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-mono italic  ">PortFolio.</Link>
        <nav className="space-x-4">
          <div className="light_btn">
              <a href="#about">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About
              </a>
              <a href="#skills">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Skills
              </a>
              <a href="#experience">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Experience
              </a>
              <a href="#projects">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Projects
              </a>
              <a href="#contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
              </a>
            </div>
            
          {/* <a href="#skills" className=" text-lightBlue hover:underline">Skills</a>
          <a href="#experience" className=" text-lightBlue hover:underline">Experience</a>
          <a href="#projects" className=" text-lightBlue hover:underline">Projects</a>
          <a href="#contact" className=" text-lightBlue hover:underline">Contact</a>
         */}
        </nav>
      </div>
    </header>
  );
};

export default Header;