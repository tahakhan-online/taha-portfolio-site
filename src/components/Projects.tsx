
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Google Form Bot",
      description: "Automated form filler with error handling and 90% accuracy rate",
      tech: ["JavaScript", "Automation", "Error Handling"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "Canvas Shooter Game",
      description: "Real-time gameplay with animations, scoring system, and restart logic",
      tech: ["JavaScript", "HTML5 Canvas", "Game Design"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-6xl text-gray-600 group-hover:text-cyan-400 transition-colors duration-300">
                  &lt;/&gt;
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-black border border-gray-700 text-cyan-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="text-cyan-400 hover:text-white transition-colors duration-300">
                    View Code
                  </button>
                  <button className="text-cyan-400 hover:text-white transition-colors duration-300">
                    Live Demo
                  </button>
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
