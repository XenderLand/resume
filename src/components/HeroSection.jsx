// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="h-screen bg-black text-white flex justify-center items-center">
//       <div className="container mx-auto p-4">
//         <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
//         <p className="text-lg">I'm Jamal Siraj, a software engineer with a passion for building innovative solutions.</p>
//         <button className="bg-secondary-color hover:bg-accent-color text-white font-bold py-2 px-4 rounded">
//           View my projects
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/images/HERO.png";
import {
  Download,
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  X,
} from "@mui/icons-material";

const projects = [
  {
    name: "XenderMall Online Shop",
    description: "Brief description of XenderMall Online Shop.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "Firebase"],
    link: "https://gardenmart.netlify.app/",
    image: "link-to-project-one-image",
  },
  {
    name: "Home Care Management System",
    description: "Brief description of Home Care Management System.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "Firebase"],
    link: "https://homecaremgt.netlify.app/",
    image: "link-to-project-two-image",
  },
  {
    name: "Eventify - Ticket selling Platform",
    description: "Brief description of Eventify.",
    technologies: ["Django", "HTML", "Tailwind CSS", "ProgreSQL"],
    link: "https://eventifypro.onrender.com",
    image: "link-to-project-two-image",
  },
  {
    name: "Eventify - Ticket selling Platform",
    description: "Brief description of Eventify.",
    technologies: ["Django", "HTML", "Tailwind CSS", "ProgreSQL"],
    link: "https://eventifypro.onrender.com",
    image: "link-to-project-two-image",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-textPrimary min-h-screen">
      {/* About  */}
      <section id="about" className="bg-black text-textPrimary h-3/4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" title justify-center mt-24 mx-12">
            <h2 className="text-3xl font-bold italic ">Hello,</h2>
            <h1 className="text-5xl font-bold mt-2">I'm Jamal Siraj</h1>
            <h2 className="text-3xl font-bold mt-2">a Full Stack Developer</h2>
            <p className=" text-textSecondary mt-8">
              I am a passionate Software Engineer with experience in Python,
              Java, JavaScript, and more. I specialize in building full-stack
              applications and have a strong background in web development.
            </p>

            <div className="light_btn mt-8 gap-4">
              <a href="#about">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Facebook />
              </a>
              <a href="#skills">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <LinkedIn />
              </a>
              <a href="#experience">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <X />
              </a>
              <a href="#projects">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <GitHub />
              </a>
              <a href="#contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Instagram />
              </a>
              <a href="mailto:sirajjamal005@gmail.com">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Google />
              </a>
            </div>

            <div className="download_btn mt-8">
              <Link>
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
            <img src={profile} alt="profile" className="w-auto " />
          </div>
        </div>
      </section>

      {/* TechnicalSkills */}
      <section id="skills" className="bg-darkRich text-black px-12 py-4">
        <h2 className="text-xl font-bold bg-black text-lightBlue p-2 rounded-lg">
          Technical Skills
        </h2>
        <ul className="flex flex-wrap gap-8 justify-center mt-2">
          <li className="mr-4">
            <span className="text-xl font-bold bg-black px-4 rounded-lg text-lightBlue py-1">
              Programming Languages:
            </span>
            <ul className="list-decimal text-white font-mono mt-2 pl-4">
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>HTML5/CSS</li>
            </ul>
          </li>
          <li className="mr-4">
            <span className="text-xl font-bold bg-black px-4 rounded-lg text-lightBlue py-1">
              Frameworks/Tools:
            </span>
            <ul className="list-decimal text-white font-mono mt-2 pl-4">
              <li>Django</li>
              <li>React</li>
              <li>React Native</li>
              <li>Firebase</li>
              <li>AWS</li>
              <li>NodeJS</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>GitHub</li>
            </ul>
          </li>
          <li>
            <span className="text-xl font-bold bg-black px-4 rounded-lg text-lightBlue py-1">
              Databases:
            </span>
            <ul className="list-decimal font-mono text-white mt-2 pl-4">
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* WorkExperience */}
      <section
        id="experience"
        className="bg-black text-textPrimary py-10 px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="mt-6">
            <div className="bg-darkRich p-6 rounded">
              <h3 className="text-xl font-semibold">
                Software Engineer Intern
              </h3>
              <p className="text-textSecondary">
                Logic Kids | May 2024 – November 2024 | Anaji, Takoradi
              </p>
              <ul className="mt-4 list-disc list-inside">
                <li>
                  Partnered with senior developers to build the front-end and
                  back-end of an advertising web application platform using
                  React and Firebase.
                </li>
                <li>
                  Collaborated on various projects, improving my skills in
                  full-stack development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-black text-textPrimary py-10 px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-darkRich p-4 rounded-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded mb-4"
                />
                <h3 className="text-accent text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-textSecondary mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-accent mt-4 inline-block hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-darkRich text-textPrimary p-10 mx-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4">Feel free to reach out to me via</p>
          <div className="light_btn mt-8 gap-4">
            <a href="#about">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Facebook />
            </a>
            <a href="#skills">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <LinkedIn />
            </a>
            <a href="#experience">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <X />
            </a>
            <a href="#projects">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <GitHub />
            </a>
            <a href="#contact">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Instagram />
            </a>
            <a href="mailto:sirajjamal005@gmail.com">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Google />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
