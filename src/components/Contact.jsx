import {  Facebook, GitHub, Google, Instagram, LinkedIn, X } from '@mui/icons-material';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-darkRich text-textPrimary p-10 mx-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">
          Feel free to reach out to me via 
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
      </div>
    </section>
  );
}

export default Contact;
