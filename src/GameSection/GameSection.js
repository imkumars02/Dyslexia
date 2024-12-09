import React from "react";
import './GameSection.scss';
import { Link } from "react-router-dom";

// Importing images for each game section
import puzzleImage from "../Image/puzzle.png";
import animationImage from "../Image/animate.png";
import quizImage from "../Image/quiz.png";

const GameSection = () => {
  return (
    <div className="game-section">
      <div className="game-container">
        <img src={puzzleImage} alt="Puzzles" className="game-image" />
        <h3>Puzzles</h3>
        <p>Word Jumble and Crossword Challenge.</p>
        <Link to={'/GamesDashboard'}>Explore</Link>
      </div>
      <div className="game-container">
        <img src={animationImage} alt="Animation Games" className="game-image" />
        <h3>Animation Games</h3>
        <p>Story Builder and Math Adventures.</p>
        <Link to={'/GamesDashboard'}>Explore</Link>
      </div>
      <div className="game-container">
        <img src={quizImage} alt="Interactive Quizzes" className="game-image" />
        <h3>Interactive Quizzes</h3>
        <p>Fun quizzes to reinforce your learning.</p>
        <Link to={'/GamesDashboard'}>Explore</Link>
      </div>
    </div>
  );
};

export default GameSection;
