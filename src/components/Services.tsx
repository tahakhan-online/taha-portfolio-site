
import React, { useState } from 'react';
import LazyImage from './LazyImage';

const Services = React.memo(() => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const services = [
    {
      title: "Web Design & Development",
      description: "Modern, responsive websites built with latest technologies",
      image: "/lovable-uploads/88d44f81-db7e-40e0-a339-965ea6e81423.png"
    },
    {
      title: "Website Optimization",
      description: "Performance optimization and SEO improvements",
      image: "/lovable-uploads/5cafe5df-f702-4da3-a01e-f70c78b63343.png"
    },
    {
      title: "Cybersecurity Support",
      description: "Security audits and vulnerability assessments",
      image: "/lovable-uploads/21114c31-b247-4e06-a43a-887f7de1ce1b.png"
    },
    {
      title: "API Integration",
      description: "Seamless third-party service integrations",
      image: "/lovable-uploads/858bc008-d8a5-41f5-8893-009ec8ede811.png"
    },
    {
      title: "Automation Scripts",
      description: "Custom automation solutions for repetitive tasks",
      image: "/lovable-uploads/4c3ada29-b71d-4f1c-b33c-ccfe244d6a90.png"
    },
    {
      title: "Game Design Support",
      description: "Interactive game development and testing",
      image: "/lovable-uploads/357b905b-fe4e-405c-bbc4-08c5d1527df5.png"
    }
  ];

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          How I Can <span className="text-cyan-400">Help You</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group will-change-transform"
            >
              <div className="relative h-48 mb-4 bg-gray-800">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full"
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6 pt-0">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                  <span className="text-black font-bold text-xl">&lt;/&gt;</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
