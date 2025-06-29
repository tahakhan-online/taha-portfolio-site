
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-cyan-400">T</span>
          <span className="text-blue-400">K</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</Link>
          <Link to="/experience" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Experience</Link>
          <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</Link>
        </div>

        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
          Download Resume
        </button>
      </nav>
    </header>
  );
};

export default Header;
