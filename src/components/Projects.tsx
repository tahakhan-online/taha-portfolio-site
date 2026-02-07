import React from 'react';
import travelexPreview from '@/assets/travelex-preview.png';
import netflixPreview from '@/assets/netflix-preview.png';
import spotifyPreview from '@/assets/spotify-preview.png';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import LazyImage from './LazyImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Projects = React.memo(() => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
      <div className="container mx-auto px-6" ref={sectionRef}>
        <h2 
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        
        <div 
          className={`max-w-6xl mx-auto px-1 sm:px-0 transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-3 basis-[80%] sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group will-change-transform flex flex-col h-full">
                    <div className="relative h-28 sm:h-44 lg:h-52 overflow-hidden">
                      <LazyImage
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-cyan-400 text-xs mb-2">{project.period}</p>
                      
                      <ul className="text-gray-300 text-xs mb-3 flex-1 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-black border border-gray-700 text-cyan-400 px-2 py-0.5 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-cyan-400 text-black font-medium px-3 py-1.5 rounded-lg hover:bg-cyan-300 transition-colors duration-300 text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
