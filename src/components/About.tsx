import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const About = React.memo(() => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

  const skills = [
    'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 
    'Responsive Design', 'Cybersecurity', 'Networks', 
    'AWS', 'API Integration', 'DSA', 'Game Design'
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div ref={sectionRef}>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hi, I'm Taha Khan — a tech enthusiast with a strong interest in web development, 
              cybersecurity, and game design. I'm passionate about building creative digital 
              experiences and constantly exploring how technology can solve real-world problems.
            </p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div>
                  <p className="text-white font-medium">Bachelor of Computer Applications</p>
                  <p className="text-gray-400">Amity University - Currently Pursuing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ease-out ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-900 border border-gray-700 text-cyan-400 px-4 py-2 rounded-full text-sm hover:border-cyan-400 transition-colors duration-300 will-change-transform"
                  style={{ 
                    transitionDelay: rightVisible ? `${index * 50}ms` : '0ms',
                    opacity: rightVisible ? 1 : 0,
                    transform: rightVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, border-color 0.3s'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
