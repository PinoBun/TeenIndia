import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { date: "Jan 2024", event: "Mod accidentally deleted half the rules" },
    { date: "Mar 2024", event: "Monthly relationship rant tradition started" },
    { date: "Jul 2024", event: "Peak lurking hour: 3 AM" },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Timeline of Chaos</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 w-1 bg-purple-600 h-full"></div>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1/2 p-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">{event.date}</p>
                <p className="mt-2">{event.event}</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
