import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = React.memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 text-center">
        <div 
          className={`mb-8 transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl sm:text-4xl font-bold text-white">
              TK
            </div>
          </div>
        </div>
        
        <h1 
          className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-200 ease-out ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          Taha <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Khan</span>
        </h1>
        
        <p 
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-700 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          Web Developer | Cybersecurity Learner | Game Designer
        </p>
        
        <p 
          className={`text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto px-4 transition-all duration-700 delay-[400ms] ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building secure and creative digital experiences with code.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center px-4 transition-all duration-700 delay-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 will-change-transform"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-gray-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 will-change-transform"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowDown className="text-cyan-400 w-6 h-6 animate-bounce" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
