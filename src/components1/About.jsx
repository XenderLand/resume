// components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Me
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              I'm a passionate software engineer with over 2 years of experience
              building scalable web applications and digital solutions. My
              expertise spans across the full stack, from creating intuitive
              user interfaces to designing robust backend systems.
            </p>

            <p className="text-gray-400">
              I believe in writing clean, maintainable code and following best
              practices to deliver high-quality software. My approach combines
              technical excellence with a deep understanding of user needs and
              business requirements.
            </p>

            <div className="pt-6">
              <button className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                Frontend
              </div>
              <div className="text-gray-400">
                React, Vue, Angular, TypeScript
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                Backend
              </div>
              <div className="text-gray-400">Node.js, Python, Java, C# </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">
                Cloud & DevOps
              </div>
              <div className="text-gray-400">
                AWS, Docker, Kubernetes, CI/CD
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                Database
              </div>
              <div className="text-gray-400">
                MongoDB, PostgreSQL, Redis, MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
