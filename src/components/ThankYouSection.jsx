import React from 'react';

const ThankYouSection = () => {
  return (
    <section className="py-16 bg-yellow-300 flex flex-col items-center text-center">
      <h2 className="text-5xl font-bold text-black">Thank You For 200K</h2>
      <div className="mt-4 flex space-x-4">
        <div className="h-16 w-48 bg-pink-400 rounded-full"></div>
        <div className="h-16 w-48 bg-yellow-400 rounded-full"></div>
        <div className="h-16 w-48 bg-orange-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default ThankYouSection;
