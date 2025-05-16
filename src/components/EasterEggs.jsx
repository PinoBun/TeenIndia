import React from 'react';

const EasterEggs = () => {
  const handleReport = () => {
    new Audio('/assets/funny-sound.mp3').play();
    alert("Lol, you thought this would do something?");
  };

  const handleModMe = () => {
    alert("Mod request denied. Try bribing with chai first.");
  };

  return (
    <section className="py-16 bg-purple-200 text-center">
      <h2 className="text-4xl font-bold mb-8 text-purple-600">Find the Chaos</h2>
      <button onClick={handleReport} className="bg-red-500 text-white p-2 rounded mx-2">
        Report This Site
      </button>
      <button onClick={handleModMe} className="bg-blue-500 text-white p-2 rounded mx-2">
        Mod Me
      </button>
    </section>
  );
};

export default EasterEggs;
