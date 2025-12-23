import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/HERO.png';
import { Download, Facebook, GitHub, Google, Instagram, LinkedIn, X } from '@mui/icons-material';
function About() {
  return (
    <section id="about" className="bg-black text-textPrimary h-3/4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" title justify-center mt-24 mx-12">
        <h2 className="text-3xl font-bold italic ">Hello,</h2>
        <h1 className="text-5xl font-bold mt-2">I'm Jamal Siraj</h1>
        <h2 className="text-3xl font-bold mt-2">a Full Stack Developer</h2>
        <p className=" text-textSecondary mt-8">
          I am a passionate Software Engineer with experience in Python, Java, JavaScript, and more. 
          I specialize in building full-stack applications and have a strong background in web development.
        </p>
      
            <div className="light_btn mt-8 gap-4">
              <a href="#about">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Facebook/>
              </a>
              <a href="#skills">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <LinkedIn/>
              </a>
              <a href="#experience">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <X/>
              </a>
              <a href="#projects">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <GitHub/>
              </a>
              <a href="#contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                < Instagram/>
              </a>
              <a href="mailto:sirajjamal005@gmail.com">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                < Google/>
              </a>
            </div>

            <div className="download_btn mt-8">
          <Link >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Download CV
                <Download fontSize="small" />
              </Link>
            </div>
        </div>
        <div className="contaner mx-8">
        <img src={profile} alt="profile" className='w-auto ' />
        </div>
       
      </div>
     
    </section>
  );
}

export default About;
