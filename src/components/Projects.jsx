import React from 'react';

const projects = [
  {
    name: 'XenderMall Online Shop',
    description: 'Brief description of XenderMall Online Shop.',
    technologies: ['React', 'Tailwind CSS', 'NodeJS', 'Firebase'],
    link: 'https://gardenmart.netlify.app/',
    image: 'link-to-project-one-image',
  },
  {
    name: 'Home Care Management System',
    description: 'Brief description of Home Care Management System.',
    technologies: ['React', 'Tailwind CSS', 'NodeJS', 'Firebase'],
    link: 'https://homecaremgt.netlify.app/',
    image: 'link-to-project-two-image',
  },
  {
    name: 'Eventify - Ticket selling Platform',
    description: 'Brief description of Eventify.',
    technologies: ['Django', 'HTML', 'Tailwind CSS', 'ProgreSQL'],
    link: 'https://eventifypro.onrender.com',
    image: 'link-to-project-two-image',
  },
  {
    name: 'Eventify - Ticket selling Platform',
    description: 'Brief description of Eventify.',
    technologies: ['Django', 'HTML', 'Tailwind CSS', 'ProgreSQL'],
    link: 'https://eventifypro.onrender.com',
    image: 'link-to-project-two-image',
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-textPrimary py-10 px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-darkRich p-4 rounded-xl">
              <img src={project.image} alt={project.name} className="rounded mb-4" />
              <h3 className="text-accent text-xl font-semibold">{project.name}</h3>
              <p className="text-textSecondary mt-2">{project.description}</p>
              <a href={project.link} className="text-accent mt-4 inline-block hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
