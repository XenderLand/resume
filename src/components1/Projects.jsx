// components/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with payment integration, inventory management, and responsive design. Built for scalability and performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather analytics platform with interactive charts, historical data visualization, and location-based forecasting.",
      technologies: ["Angular", "Python Flask", "Redis", "Chart.js"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Portfolio
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Showcase
              </span>
            </h2>
            <p className="text-gray-400 text-xl">
              Featured projects built with modern technologies
            </p>
          </div>
          <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border ${project.color} hover:border-gray-600 transition-all duration-300 hover:-translate-y-2`}>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-sm rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
