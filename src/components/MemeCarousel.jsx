import React from 'react';
import { motion } from 'framer-motion';

const MemeCarousel = () => {
  const memes = [
    { src: "/assets/meme1.jpg", caption: "This meme got 2k upvotes" },
    { src: "/assets/meme2.jpg", caption: "Peak TeenIndia chaos" },
  ];

  return (
    <section className="py-16 bg-purple-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Meme Mania</h2>
      <motion.div className="flex overflow-x-auto space-x-4 max-w-6xl mx-auto">
        {memes.map((meme, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] bg-white p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <img src={meme.src} alt="Meme" className="w-full h-48 object-cover rounded" />
            <p className="mt-2 text-center">{meme.caption}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MemeCarousel;
