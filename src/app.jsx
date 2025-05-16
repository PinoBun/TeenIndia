import React from 'react';
import HeroSection from './components/HeroSection';
import WrappedStats from './components/WrappedStats';
import MemeCarousel from './components/MemeCarousel';
import Timeline from './components/Timeline';
import PersonalityQuiz from './components/PersonalityQuiz';
import MessageWall from './components/MessageWall';
import EasterEggs from './components/EasterEggs';
import ThankYouSection from './components/ThankYouSection';
import './App.css';

const App = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <WrappedStats />
      <MemeCarousel />
      <Timeline />
      <PersonalityQuiz />
      <MessageWall />
      <EasterEggs />
      <ThankYouSection />
    </div>
  );
};

export default App;
