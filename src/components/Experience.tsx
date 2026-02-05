
import React from 'react';

const Experience = React.memo(() => {
  const experiences = [
    {
      title: "Subject Matter Expert",
      company: "Startek",
      period: "Nov 2023 – Aug 2025",
      achievements: [
        "Led teams and improved CSAT by 25%",
        "Upskilled 50+ staff members",
        "Promoted within 6 months"
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Niftel Communications",
      period: "May 2023 – Oct 2023",
      achievements: [
        "CRM integration and system optimization",
        "Boosted FCR by 20%",
        "Achieved 98% SLA adherence"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                <div className="absolute left-2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2"></div>
                
                <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-cyan-400/50 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
