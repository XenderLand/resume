// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiExternalLink,
  FiCode,
  FiDatabase,
  FiCloud,
  FiTool,
  FiBriefcase,
  FiShield,
  FiCheckCircle,
  FiUserPlus,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import profile from "../assets/images/076eefc3-1aa0-473a-ad12-1f62d05f5cf4.jpg";
import HMS from "../assets/images/Screenshot 2025-01-19 at 20-02-10 HMS.png";
import XenderMall from "../assets/images/XenderMall Online Shop.png";
import Eventify from "../assets/images/Eventify - Events.png";
import HMS_UI from "../assets/images/Home 11.jpg";
import AdsNet from "../assets/images/Picture1 Ads.png";
import DarkEntity from "../assets/images/Screenshot 2025-12-26 at 12-05-42 DarkEntity.png";
import uniHub from "../assets/images/Screenshot 2025-08-02 192256.png";
import resumePDF from "../assets/Jamal Siraj Resume.pdf"

  const handleDownload = () => {
    // Create blob URL for the imported file
    fetch(resumePDF)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Jamal_Siraj_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch(error => console.error('Download failed:', error));
  };

function Port1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  //   const navItems = [
  //     { label: "Home", href: "#home" },
  //     { label: "Tech Stack", href: "#tech" },
  //     { label: "Projects", href: "#projects" },
  //     { label: "Experience", href: "#experience" },
  //     { label: "Skills", href: "#skills" },
  //     { label: "Contact", href: "#contact" },
  //   ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FiCode className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jamal Siraj
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "Tech Stack", id: "tech" },
              { label: "Projects", id: "projects" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium hover:scale-105 bg-transparent border-none p-0 cursor-pointer">
                {item.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-semibold">
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile menu button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 bg-transparent border-none p-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2">
            {[
              { label: "Home", id: "home" },
              { label: "Tech Stack", id: "tech" },
              { label: "Projects", id: "projects" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-300 bg-transparent border-none">
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-blue-400">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Future with Code
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Full Stack Engineer specializing in scalable applications, cloud
              architecture, and cutting-edge web technologies. Transforming
              complex problems into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                Contact Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-6 py-3 border border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 transition-colors duration-300">
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  value: "3+",
                  label: "Years Experience",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: "5+",
                  label: "Projects Delivered",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "95%",
                  label: "Client Satisfaction",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center">
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 perspective-1000">
            <div className="relative transform-style-3d group hover:rotate-y-5 transition-transform duration-500">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
                {/* Profile Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-gray-800 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                      <img src={profile} alt="profile" className="w-auto " />

                      {/* <div className="text-6xl">👨‍💻</div> */}
                    </div>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Jamal Siraj</h3>
                  <p className="text-gray-400">Full Stack Engineer</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <FaReact className="text-cyan-400" />
                    <FaNodeJs className="text-green-500" />
                    <SiTypescript className="text-blue-500" />
                    <SiFirebase className="text-yellow-400" />
                    <FaAws className="text-orange-500" />
                    <SiJavascript className="text-yellow-400" />
                    <SiMongodb className="text-green-500" />
                  </div>
                </div>

                {/* Currently Working On */}
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">
                      Currently working on
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    React + JavaScript + Firebase SaaS Platform
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-xl -rotate-12 group-hover:-rotate-45 transition-transform duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Tech Stack Section
function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-400" />,
      technologies: [
        { name: "React", icon: <FaReact />, level: 95 },
        { name: "JavaScript", icon: <SiJavascript />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
        { name: "Figma", icon: <FaFigma />, level: 95 },
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500" />,
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "Java", icon: <FaJava />, level: 80 },
        { name: "Firebase", icon: <SiFirebase />, level: 85 },
        { name: "GraphQL", icon: <SiGraphql />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaAws className="text-orange-500" />,
      technologies: [
        { name: "AWS", icon: <FaAws />, level: 75 },
        { name: "Google Cloud", icon: <FaCloud />, level: 80 },
        { name: "Docker", icon: <FaDocker />, level: 70 },
        { name: "Firebase", icon: <SiFirebase />, level: 90 },
        { name: "CI/CD", icon: <FaGitAlt />, level: 70 },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + techIndex * 0.1 }}
                    className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{tech.icon}</div>
                      <span>{tech.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.2 + techIndex * 0.1,
                          }}
                          className={`h-full rounded-full ${
                            tech.level > 85
                              ? "bg-green-500"
                              : tech.level > 75
                              ? "bg-blue-500"
                              : "bg-purple-500"
                          }`}></motion.div>
                      </div>
                      <span className="text-sm text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "XenderMall E-Commerce Platform",
      description:
        "Modern Full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "PayStack",
        "Node.js",
      ],
      category: "E-Commerce",
      liveUrl: "https://xendermall.netlify.app/",
      githubUrl: "https://github.com/XenderLand/XenderMall",
      // gradient: "from-blue-600 to-cyan-500",
      image: XenderMall,
    },
    {
      title: "Home Care Management System",
      description:
        "Comprehensive platform for managing home care services, scheduling, and client communication.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
        "MongoDB",
        "PayStack",
      ],
      category: "Healthcare",
      liveUrl: "https://homecaremgt.netlify.app/",
      githubUrl: "https://github.com/XenderLand/HMS-Frontend",
      image: HMS,
    },
      {
      title: "UI/UX for Home Care Management System",
      description:
        "UI/UX for the Home Care Management System using Figma Front-end designer tool .",
      technologies: [
        "Figma", "Adobe PhotoShop",
      ],
      category: "Healthcare",
      liveUrl: "https://homecaremgt.netlify.app/",
      githubUrl: "https://github.com/XenderLand/HMS-Frontend",
      image: HMS_UI,
    },
    {
      title: "Eventify - Ticket selling Platform",
      description:
        "A dynamic event ticketing platform enabling users to browse, purchase, and manage event tickets seamlessly.",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "Tailwind CSS",
        "ProgreSQL",
        "PayStack",
      ],
      category: "Event Management",
      liveUrl: "https://eventifypro.onrender.com",
      githubUrl: "https://github.com/XenderLand/eventifyPro",
      image: Eventify,
    },
    {
      title: "DarkEntity - Movies and Series Platform",
      description:
        "A respontive MERN platform where all latest movies & series can be downloaded for free. ",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS "],
      category: "Entertainment",
      liveUrl: "https://darkentity.netlify.app/",
      githubUrl: "https://github.com/XenderLand/DarkEntity-FrontEnd",
      image: DarkEntity,
    },
    {
      title: "AdzNet Advertisement Platform",
      description:
        "An e-commerce platform for food and beverages , resturant management, and payment integration.",
 technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "PayStack",
        "Node.js",
      ],
      category: "Advertisement",
      liveUrl: "#",
      githubUrl: "https://github.com/XenderLand/eventifyPro",
      image: AdsNet,
    },
     {
      title: "uniHub - Social Media App UI/UX ",
      description:" Mobile application for university where student can communicate, share media and learn",

      technologies: ["Figma", "Adobe PhotoShop"],
      category: " Social Media",
      liveUrl: "#",
      githubUrl: "https://github.com/XenderLand/eventifyPro",
      image: uniHub,
    },
         {
      title: "DziDzi - E-Commerce Platform",
      description:
        "An e-commerce platform for food and beverages , resturant management, and payment integration.",
      technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "PayStack"],
      category: " E-Commerce",
      liveUrl: "#",
      githubUrl: "https://github.com/XenderLand/eventifyPro",
      gradient: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-950/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Innovative solutions for complex challenges
            </p>
          </div>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://github.com/XenderLand?tab=repositories",
                "_blank"
              )
            }
            className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
            View All
          </motion.button> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open(
                "https://github.com/XenderLand?tab=repositories",
                "_blank"
              );
            }}
            className="px-6 py-3 border border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 transition-colors duration-300">
            View All Projects
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group">
              <div className="h-full bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded mb-4"
                  />
                    )}

                {project.gradient && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}></div>
                )}
                    
 
                  
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 text-sm rounded-lg text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300"
                        aria-label={`View live demo of ${project.title}`}>
                        <FiExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300"
                        aria-label={`View source code of ${project.title} on GitHub`}>
                        <FiGithub className="w-4 h-4" />
                      </motion.a>
                    </div>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.liveUrl}
                        target="_blank"
                                                rel="noopener noreferrer"

                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold bg-transparent border-none">
                      Live demo
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Section
function Experience() {
  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Independent / Freelance",
      period: "2025 - Present",
      description:
        "Designed and developed full-stack web and mobile applications using React, React Native, Node.js, Express, MongoDB, Firebase, and Django.",
      technologies: ["Figma","React", "React Native(Expo)", "Node.js", "AWS", "Firebase", "Django", "MongoDB","PostgreSQL", "Tailwind CSS" ],
    },
    {
      role: "Full Stack Developer",
      company: "Logic Kids",
      period: "2024 - 2025",
      description:
        "Built scalable web applications for clients, reduced deployment time by 60% with CI/CD pipelines.",
      technologies: ["Vue.js", "React", "Figma", "Spring Boot","Django", "Python", "Docker", "MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      role: "Frontend Developer",
      company: "Logic Kids",
      period: "2023 - 2024",
      description:
        "Created responsive interfaces for 5+ client projects using my experience in UI/UX (Figma), improved user engagement by 35%.",
      technologies: ["React", "Figma", "JavaScript", "CSS3", "Tailwind CSS", "Firebase", "WordPress"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Years of experience building scalable solutions and leading
            technical teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start md:items-center mb-12`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skills = [
    {
      name: "UI/UX Design",
      icon: <FaFigma />,
      description: "Wireframing, Prototyping, Design Systems",
    },
    {
      name: "Coding & Development",
      icon: <FaCode />,
      description: "JavaScript, Python, Java, C#, C++",
    },
    {
      name: "Database Design",
      icon: <FiDatabase />,
      description: "SQL, NoSQL, Data Modeling",
    },
    {
      name: "DevOps & CI/CD",
      icon: <FiCloud />,
      description: "Docker, Kubernetes, AWS, GitLab",
    },
     {
      name: "IT Support",
      icon: <FiTool />,
      description: "Troubleshooting, Networking, Installation",
    },
    {
      name: "Team Leadership",
      icon: <FiUserPlus />,
      description: "Agile, Mentoring, Code Reviews",
    },
    {
      name: "Testing & QA",
      icon: <FiCheckCircle />,
      description: "Unit Testing, Integration Testing, E2E Testing",
    },
    {
      name: "Security Best Practices",
      icon: <FiShield />,
      description: "Encryption, Secure Coding",
    },
    {
      name: "Project Management",
      icon: <FiBriefcase />,
      description: "Scrum, Kanban, Jira, Trello",
    },

    {
      name: "IT Support & Troubleshooting",
      icon: <FiTool />,
      description: "System Maintenance, User Support",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-950/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Competencies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Beyond technical skills – delivering complete solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <div className="text-xl text-blue-400">{skill.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can create something
            amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <FiMail />,
                    title: "Email",
                    value: "sirajjamal005@gmail.com",
                    link: "mailto:sirajjamal005@gmail.com",
                  },
                  {
                    icon: <FiGithub />,
                    title: "GitHub",
                    value: "github.com/XenderLand",
                    link: "https://github.com",
                  },
                  {
                    icon: <FiLinkedin />,
                    title: "LinkedIn",
                    value: "www.linkedin.com/in/jamalraj5757",
                    link: "https://linkedin.com",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 no-underline">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Current Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Open to full-time positions, contract work, and consulting
                engagements.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FiCode className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jamal Siraj
            </span>
          </button>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile">
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@alexjohnson.dev"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Send Email">
              <FiMail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jamal Siraj. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Port1;
