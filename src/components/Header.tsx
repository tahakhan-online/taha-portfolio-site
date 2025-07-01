
import React, { useState } from 'react';
import ResumeModal from './ResumeModal';

const Header = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
            <span className="text-cyan-400">T</span>
            <span className="text-blue-400">K</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={scrollToTop} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</button>
          </div>

          <button 
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
          >
            Download Resume
          </button>
        </nav>
      </header>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
};

export default Header;
