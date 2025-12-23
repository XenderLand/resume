import React from "react";

const TechnicalSkills = () => {
  return (
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
  );
};

export default TechnicalSkills;
