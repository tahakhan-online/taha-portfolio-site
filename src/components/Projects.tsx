import React from 'react';
import travelexPreview from '@/assets/travelex-preview.png';
import netflixPreview from '@/assets/netflix-preview.png';
import spotifyPreview from '@/assets/spotify-preview.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Projects = React.memo(() => {
  const projects = [
    {
      title: "TraveleX – Travel Booking Web UI",
      period: "Dec 2025 - Jan 2026",
      image: travelexPreview,
      highlights: [
        "Responsive travel booking interface using HTML, CSS, and Bootstrap 5",
        "Login/Sign-up modals with hero landing section and call-to-action",
        "Interactive destination cards with hover effects and mobile-first design"
      ],
      tech: ["HTML", "CSS", "Bootstrap 5"],
      link: "https://travele-x.vercel.app/"
    },
    {
      title: "Netflix UI Clone",
      period: "Jan 2026",
      image: netflixPreview,
      highlights: [
        "Netflix-style UI clone using HTML5, Tailwind CSS, and JavaScript",
        "Interactive horizontal content slider and FAQ accordion with animations",
        "Accessibility best practices with semantic HTML and ARIA attributes"
      ],
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/98-tahakhan/Netfix-UI-Clone-Frontend-Project"
    },
    {
      title: "Spotify UI Clone",
      period: "Dec 2025",
      image: spotifyPreview,
      highlights: [
        "Spotify Web Player UI clone with HTML5, CSS3, and Flexbox",
        "Mobile-optimized with horizontal scrolling playlists and bottom navigation",
        "CSS-only animations, hover effects, and interactive playback controls"
      ],
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
        
        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group will-change-transform flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-cyan-400 text-sm mb-3">{project.period}</p>
                      
                      <ul className="text-gray-300 text-sm mb-4 flex-1 space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-cyan-400" />
            <CarouselNext className="border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-cyan-400" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
