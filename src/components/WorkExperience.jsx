import React from 'react';

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-black text-textPrimary py-10 px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <div className="mt-6">
          <div className="bg-darkRich p-6 rounded">
            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
            <p className="text-textSecondary">Logic Kids | May 2024 – November 2024 | Anaji, Takoradi</p>
            <ul className="mt-4 list-disc list-inside">
              <li>Partnered with senior developers to build the front-end and back-end of an advertising web application platform using React and Firebase.</li>
              <li>Collaborated on various projects, improving my skills in full-stack development.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;