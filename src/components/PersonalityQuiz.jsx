import React, { useState } from 'react';

const PersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: "How often do you post on r/TeenIndia?",
      options: ["Never, I just lurk", "Once in a blue moon", "Daily, I’m the main character", "Only reposts, I’m lazy"],
    },
  ];
  const personalities = ["Endless Yapper", "Karma Police", "1% Poster", "The Watcher"];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = personalities[Math.floor(Math.random() * personalities.length)];
      alert(`You are: ${result}! Share this chaos!`);
    }
  };

  return (
    <section className="py-16 bg-pink-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Which TeenIndian Are You?</h2>
      {currentQuestion < questions.length ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="block w-full p-2 mb-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center">Quiz complete! Check your results!</p>
      )}
    </section>
  );
};

export default PersonalityQuiz;
