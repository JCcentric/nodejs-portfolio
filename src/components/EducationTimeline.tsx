
import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  grade: string;
}

const EducationTimeline: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      years: "2023–2025",
      degree: "B.S. Software Engineering",
      institution: "IIT Dholakpur",
      grade: ""
    },
    {
      id: 2,
      years: "2017–2019",
      degree: "B.S. Business Studies",
      institution: "Johnson & Wales University",
      grade: "CGPA: 3.2"
    },
    {
      id: 3,
      years: "2015–2017",
      degree: "Associates - Culinary Arts",
      institution: "Johnson & Wales University",
      grade: "CGPA: 3.2"
    },
    {
      id: 4,
      years: "2011–2015",
      degree: "Highschool Graduate",
      institution: "Cary Highschool",
      grade: ""
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.2 }}
            >
              {/* Timeline dot with glow */}
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40" style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}></div>
              
              <div className="glow-card p-6">
                <span className="text-white/60 block mb-1">{item.years}</span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-white/80 mb-1">{item.institution}</p>
                <p className="text-white/60">{item.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
