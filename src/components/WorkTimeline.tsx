
import React from 'react';
import { motion } from 'framer-motion';

interface Work {
  id: number;
  years: string;
  job: string;
  workPlace: string;
  keyDuties: string;
}

const WorkTimeline: React.FC = () => {
  const workData: Work[] = [
    {
      id: 1,
      years: "Jul 2020 – Current",
      job: "Systems Administrator, Supervisor",
      workPlace: "U.S. Air Force",
      keyDuties: "Administer Windows and Linux servers for 9000+ users and 32 mission partners, ensuring system security, performance, and compliance with DoD standards. Lead a technical team while automating processes, troubleshooting vCenter/ESXi environments, and providing reports to leadership."
    },
    {
      id: 1,
      years: "Apr 2018 – Jul 2020",
      job: "Graphic Designer, Freelance",
      workPlace: "BigGVisualz",
      keyDuties: "Created custom logos, flyers, business cards, cover art, and more, helping businesses build strong, impactful brands. My designs were tailored to each client's vision, ensuring standout visuals that captured their unique identity."
    },
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
          Work History
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          {workData.map((item, index) => (
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
                <h3 className="text-xl font-bold mb-1">{item.job}</h3>
                <p className="text-white/80 mb-1">{item.workPlace}</p>
                <p className="text-white/60">{item.keyDuties}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
