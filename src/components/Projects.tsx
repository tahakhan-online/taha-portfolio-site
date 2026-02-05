import React from 'react';

const Projects = React.memo(() => {
  const projects = [
    {
      title: "TraveleX – Travel Booking Web UI",
      period: "Dec 2025 - Jan 2026",
      description: "Developed a responsive travel booking web interface using HTML, CSS, and Bootstrap 5. Implemented Login and Sign-up authentication modals, hero landing section with call-to-action, and interactive destination cards with hover effects. Ensured mobile-first responsiveness and deployed on Vercel.",
      tech: ["HTML", "CSS", "Bootstrap 5"],
      link: "https://travele-x.vercel.app/"
    },
    {
      title: "Netflix UI Clone",
      period: "Jan 2026",
      description: "Developed a responsive Netflix-style UI clone using HTML5, Tailwind CSS, and Vanilla JavaScript. Implemented interactive components including horizontal content slider and FAQ accordion with smooth animations. Applied accessibility best practices using semantic HTML and ARIA attributes.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/98-tahakhan/Netfix-UI-Clone-Frontend-Project"
    },
    {
      title: "Spotify UI Clone",
      period: "Dec 2025",
      description: "Built a responsive Spotify Web Player UI clone using semantic HTML5, CSS3, Flexbox, and custom media queries. Optimized for mobile with conditional layouts, horizontal scrolling playlists, and bottom navigation bar. Enhanced UX through CSS-only animations and hover effects.",
      tech: ["HTML5", "CSS3", "Flexbox"],
      link: "https://github.com/98-tahakhan/Spotify-UI-Clone"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group will-change-transform flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{project.period}</p>
                <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                
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
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-cyan-400 text-black font-medium px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
