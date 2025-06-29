
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Modern, responsive websites built with latest technologies"
    },
    {
      title: "Website Optimization",
      description: "Performance optimization and SEO improvements"
    },
    {
      title: "Cybersecurity Support",
      description: "Security audits and vulnerability assessments"
    },
    {
      title: "API Integration",
      description: "Seamless third-party service integrations"
    },
    {
      title: "Automation Scripts",
      description: "Custom automation solutions for repetitive tasks"
    },
    {
      title: "Game Design Support",
      description: "Interactive game development and testing"
    }
  ];

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
              className="bg-black border border-gray-800 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                <span className="text-black font-bold text-xl">&lt;/&gt;</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
