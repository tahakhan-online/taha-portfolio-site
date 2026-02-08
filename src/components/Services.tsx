import React, { useState } from 'react';
import LazyImage from './LazyImage';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Services = React.memo(() => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
      <div className="container mx-auto px-6" ref={sectionRef}>
        <h2 
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          How I Can <span className="text-cyan-400">Help You</span>
        </h2>
        <p 
          className={`text-gray-400 text-center mb-16 max-w-2xl mx-auto transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Comprehensive digital solutions tailored to your needs
        </p>
        
        <div 
          className={`max-w-6xl mx-auto px-1 sm:px-0 transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
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
              {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-3 basis-[80%] sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group will-change-transform h-full">
                    <div className="relative h-28 sm:h-48 mb-2 sm:mb-4 bg-gray-800">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full"
                        onLoad={() => handleImageLoad(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    
                    <div className="p-3 sm:p-6 pt-0">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-2 sm:mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                        <span className="text-black font-bold text-base sm:text-xl">&lt;/&gt;</span>
                      </div>
                      
                      <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-3">{service.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-cyan-400" />
            <CarouselNext className="hidden sm:flex border-gray-700 bg-gray-900 text-white hover:bg-gray-800 hover:text-cyan-400" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
