import React, { useState } from "react";
import "./Animation.scss";

const leftObjects = [
  { name: "Apple", emoji: "🍎" },
  { name: "Banana", emoji: "🍌" },
  { name: "Cheese", emoji: "🧀" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Ice Cream", emoji: "🍦" },
  { name: "Taco", emoji: "🌮" },
  { name: "Donut", emoji: "🍩" },
  { name: "Watermelon", emoji: "🍉" },
];

const rightObjects = [
  { name: "Mouse", emoji: "🐭" },
  { name: "Dog", emoji: "🐶" },
  { name: "Cat", emoji: "🐱" },
  { name: "Monkey", emoji: "🐵" },
  { name: "Sparrow", emoji: "🐦" },
  { name: "Parrot", emoji: "🦜" },
  { name: "Owl", emoji: "🦉" },
  { name: "Eagle", emoji: "🦅" },
];

export default function EatingGame() {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [eatingProgress, setEatingProgress] = useState(100);
  const [cursorSize, setCursorSize] = useState(32);
  const [foodFinished, setFoodFinished] = useState(false);

  const handleLeftClick = (object) => {
    setSelectedLeft(object);
    setEatingProgress(100);
    setCursorSize(32);
    setFoodFinished(false); // Reset food finished state
  };

  const handleRightClick = (object) => {
    setSelectedRight(object);
    setEatingProgress(100);
    setCursorSize(32);
    setFoodFinished(false); // Reset food finished state
  };

  const handleEat = () => {
    if (selectedLeft && selectedRight && eatingProgress > 0) {
      setEatingProgress((prev) => {
        const newProgress = Math.max(prev - 5, 0);
        if (newProgress === 0) {
          setFoodFinished(true);
        }
        return newProgress;
      });
      setCursorSize((size) => Math.min(size + 10, 104));
    }
  };

  const cursorStyle = selectedRight
    ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${cursorSize}" height="${cursorSize}" viewBox="0 0 ${cursorSize} ${cursorSize}"><text x="0" y="${
        cursorSize - 4
      }" font-size="${cursorSize - 4}">${selectedRight.emoji}</text></svg>') ${
        cursorSize / 2
      } ${cursorSize / 2}, auto`
    : "default";

  return (
    <div className="eating-game">
      <div className="side-panel left-panel">
        <h2 className="panel-title">Select Food</h2>
        {leftObjects.map((object) => (
          <button
            key={object.name}
            onClick={() => handleLeftClick(object)}
            className="game-button"
          >
            <span className="button-emoji">{object.emoji}</span>
            <span className="button-text">{object.name}</span>
          </button>
        ))}
      </div>
      <div
        className="center-display"
        style={{ cursor: cursorStyle }}
        onClick={handleEat}
      >
        {selectedLeft && (
          <div className="food-container">
            <div
              className="food-emoji"
              style={{
                clipPath: `inset(0 ${100 - eatingProgress}% 0 0)`,
              }}
            >
              {selectedLeft.emoji}
            </div>
            {foodFinished && (
              <div className="finished-circle">
                <span className="finished-text">Food Finished!</span>
              </div>
            )}
            <div className="progress-label">
              {eatingProgress > 0 ? `${eatingProgress}%` : "Eaten!"}
            </div>
          </div>
        )}
      </div>
      <div className="side-panel right-panel">
        <h2 className="panel-title">Select Eater</h2>
        {rightObjects.map((object) => (
          <button
            key={object.name}
            onClick={() => handleRightClick(object)}
            className="game-button"
          >
            <span className="button-emoji">{object.emoji}</span>
            <span className="button-text">{object.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
