import React, { useState, useEffect } from "react";
import "./MathTableLearn.css";

const MathTableLearn = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [speaking, setSpeaking] = useState(false);

  const numberObjects = [
    "🍎",
    "🐶",
    "🌟",
    "🌈",
    "🌸",
    "🦋",
    "🌙",
    "🐱",
    "🐘",
    "🍕",
    "⚽️",
    "🎈",
    "🚀",
    "🌞",
    "🦁",
    "🐠",
    "🌳",
    "🦜",
    "🍦",
    "🐵",
  ];

  const getObjects = (number) => {
    const objectIndex = (number - 1) % numberObjects.length;
    const object = numberObjects[objectIndex];
    return Array(number).fill(object).join(" ");
  };

  const speakNumber = (number) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(`This is ${number}`);
      speechSynthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  useEffect(() => {
    speakNumber(currentNumber);
  }, [currentNumber]);

  const handlePrevious = () => {
    setCurrentNumber((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    setCurrentNumber((prev) => (prev < 100 ? prev + 1 : 100));
  };

  return (
    <div className="alphabet-learn">
      <h1>Table 1 to 100</h1>
      <div className="number-display">
        <div className="number-item">
          <div className="objects">{getObjects(currentNumber)}</div>
          <div className="number">{currentNumber}</div>
        </div>
      </div>
      <div className="button-container">
        {currentNumber > 1 && (
          <button onClick={handlePrevious} disabled={speaking}>
            Previous
          </button>
        )}
        {currentNumber < 100 && (
          <button onClick={handleNext} disabled={speaking}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MathTableLearn;
