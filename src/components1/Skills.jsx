// components/Skills.jsx
import React from "react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 90, color: "from-cyan-400 to-blue-600" },
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Python", level: 85, color: "from-blue-400 to-indigo-600" },
    { name: "Docker", level: 80, color: "from-blue-500 to-cyan-500" },
    { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Expertise
          </span>
        </h2>
        <p className="text-gray-400 text-center text-xl mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks, refined
          through real-world projects and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700
               hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold">{skill.name}</div>
                <div className="text-blue-400 font-bold">{skill.level}%</div>
              </div>

              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML5/CSS3",
              "Tailwind CSS",
              "Redux",
              "Next.js",
              "Express.js",
              "REST APIs",
              "GraphQL",
              "PostgreSQL",
              "Redis",
              "Git",
              "CI/CD",
              "Kubernetes",
              "Firebase",
              "Jest",
              "Webpack",
              "Nginx",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 cursor-pointer">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
