import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "7how2 Platform",
      description: "A comprehensive educational platform built with modern web technologies. Features include course management, user authentication, and interactive learning materials.",
      image: "https://7how2.com/wp-content/uploads/2023/12/7how2-1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://7how2.com"
    },
    {
      title: "Plombier Global",
      description: "A professional plumbing service website with appointment scheduling and service management features.",
      image: "https://plombierglobal.com/wp-content/uploads/2023/12/plombier-global.png",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      liveUrl: "https://plombierglobal.com"
    },
    {
      title: "Task Manager",
      description: "A feature-rich task management application with real-time updates and collaborative features.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/mansourtheonly",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white section-fade-in">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow section-fade-in hover-scale">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  )}
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    Live Demo
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

export default Projects