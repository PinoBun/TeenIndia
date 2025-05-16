import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audio = new Audio('/assets/glue-song.mp3');

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <motion.div
      className="h-screen bg-gradient-to-b from-purple-600 to-pink-500 flex flex-col items-center justify-center text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/assets/teenindia-logo.png"
        alt="TeenIndia Logo - Four characters with Indian flag background"
        className="w-32 h-32 mb-4"
      />
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        TeenIndia Wrapped: 200k kids 1 braincell
      </h1>
      <p className="text-xl text-white mt-4">Scroll down to unwrap the chaos ↓</p>
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg"
      >
        {isMusicPlaying ? 'Pause Lo-Fi' : 'Play Lo-Fi'}
      </button>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ y: [0, -50], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className="w-full h-full bg-[url('/assets/confetti.png')] bg-contain opacity-50"></div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
