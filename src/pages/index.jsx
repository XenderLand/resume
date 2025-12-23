// pages/Home.js
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
    description:
      "An e-commerce platform for seamless online shopping with secure payments and user-friendly design.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "Firebase"],
    link: "https://gardenmart.netlify.app/",
    image: "link-to-project-one-image",
  },
  {
    name: "Home Care Management System",
    description:
      "A management system for home care services, streamlining scheduling and client tracking.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "Firebase"],
    link: "https://homecaremgt.netlify.app/",
    image: "link-to-project-two-image",
  },
  {
    name: "Eventify - Ticket Selling Platform",
    description:
      "A ticket-selling platform for events, featuring secure payments and event management.",
    technologies: ["Django", "HTML", "Tailwind CSS", "PostgreSQL"],
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
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 text-center">
            Work Experience
          </h2>
          <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white">
              Software Engineer Intern
            </h3>
            <p className="text-gray-300">
              Logic Kids | May 2024 – November 2024 | Anaji, Takoradi
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              <li>
                Collaborated with senior developers to build a full-stack
                advertising web platform using React and Firebase.
              </li>
              <li>
                Enhanced skills in full-stack development through diverse
                project contributions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-800 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <p className="text-gray-400 mt-2">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.technologies.join(", ")}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} project`}>
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400">Contact Me</h2>
          <p className="mt-4 text-gray-300">
            Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            {[
              {
                Icon: Facebook,
                href: "https://facebook.com/yourprofile",
                label: "Facebook",
              },
              {
                Icon: LinkedIn,
                href: "https://linkedin.com/in/yourprofile",
                label: "LinkedIn",
              },
              { Icon: X, href: "https://x.com/yourprofile", label: "X" },
              {
                Icon: GitHub,
                href: "https://github.com/yourprofile",
                label: "GitHub",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com/yourprofile",
                label: "Instagram",
              },
              {
                Icon: Google,
                href: "mailto:sirajjamal005@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label={`Visit my ${label} profile`}
                target="_blank"
                rel="noopener noreferrer">
                <Icon fontSize="large" />
              </a>
            ))}
          </div>
          <form
            className="mt-8 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
