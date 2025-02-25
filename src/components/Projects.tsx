import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with detailed forecasts and interactive maps",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container px-6 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center text-white">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 overflow-hidden transition-transform transform border rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border-white/20 hover:scale-105 hover:shadow-xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-48 rounded-lg"
              />
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm text-white rounded-full bg-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;