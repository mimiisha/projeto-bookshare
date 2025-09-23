// components/BlackScreenChallenge.jsx
import React, { useState, useEffect } from 'react';

const BlackScreenChallenge = () => {
  const [challengeActive, setChallengeActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [currentReflection, setCurrentReflection] = useState('');

  const reflectionPhrases = [
    "Sinta o ar ao seu redor.",
    "Pense em três coisas pelas quais você é grato.",
    "Feche os olhos e ouça os sons distantes.",
    "Imagine seu lugar favorito no mundo real.",
    "Respire profundamente e solte o ar lentamente."
  ];

  useEffect(() => {
    const storedPoints = localStorage.getItem('desconectaPoints');
    if (storedPoints) {
      setTotalPoints(parseInt(storedPoints));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (challengeActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (challengeActive && timeLeft === 0) {
      finishChallenge();
    }
    return () => clearInterval(interval);
  }, [challengeActive, timeLeft]);

  useEffect(() => {
    let reflectionInterval;
    if (challengeActive) {
      reflectionInterval = setInterval(() => {
        setCurrentReflection(reflectionPhrases[Math.floor(Math.random() * reflectionPhrases.length)]);
      }, 7000);
    }
    return () => clearInterval(reflectionInterval);
  }, [challengeActive]);

  const startChallenge = (duration) => {
    setChallengeActive(true);
    setTimeLeft(duration * 60);
    setShowCompletion(false);
    setCurrentReflection(reflectionPhrases[Math.floor(Math.random() * reflectionPhrases.length)]);
  };

  const finishChallenge = () => {
    setChallengeActive(false);
    setShowCompletion(true);
    
    let points = 0;
    if (timeLeft === 15 * 60) points = 50;
    else if (timeLeft === 30 * 60) points = 100;
    else if (timeLeft === 60 * 60) points = 200;
    
    setPointsEarned(points);
    const newTotalPoints = totalPoints + points;
    setTotalPoints(newTotalPoints);
    localStorage.setItem('desconectaPoints', newTotalPoints.toString());
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = challengeActive ? ((timeLeft / (15 * 60)) * 100) : 0;

  return (
    <section id="black-screen-challenge" className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">O Desafio do Modo Tela Preta</h2>
      <p className="mb-6">Escolha a duração e desafie-se a uma pausa consciente!</p>
      
      {!challengeActive ? (
        <>
          <div className="challenge-options mb-6">
            <button 
              className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(15)}
            >
              15 Minutos (+50 pontos)
            </button>
            <button 
              className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(30)}
            >
              30 Minutos (+100 pontos)
            </button>
            <button 
              className="bg-[#5A7E7B] text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(60)}
            >
              60 Minutos (+200 pontos)
            </button>
          </div>
          
          {showCompletion && (
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <h3 className="text-xl font-bold text-green-800">Parabéns! Desafio concluído.</h3>
              <p className="text-green-700">Você ganhou <span className="font-bold">{pointsEarned}</span> pontos!</p>
            </div>
          )}
        </>
      ) : (
        <div className="challenge-container flex flex-col items-center">
          <div className="text-5xl font-bold text-[#5A7E7B] my-8">
            {formatTime(timeLeft)}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-[#8CC0DE] h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xl italic my-8 animate-pulse">
            {currentReflection}
          </div>
        </div>
      )}
      
      <p className="points-display mt-6">
        Seus pontos: <span className="font-bold">{totalPoints}</span>
      </p>
    </section>
  );
};

export default BlackScreenChallenge;