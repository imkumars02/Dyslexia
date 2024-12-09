import React, { useState } from "react";
import "./GamesDashboard.scss";
import Quiz from "./Quiz";
import Puzzle from "./Puzzle";
import Animation from "./Animation";

const GamesDashboard = () => {
  const [activeSection, setActiveSection] = useState("Quizzes");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Quizzes":
        return (
          <div>
            <Quiz/>
          </div>
        );
      case "Puzzles":
        return (
          <div>
            <Puzzle/>
          </div>
        );
      case "Animation":
        return (
          <div>
            <Animation/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="games-dashboard">
      {/* <h1>Games</h1> */}
      <div className="buttons">
        <button
          className={activeSection === "Quizzes" ? "active" : ""}
          onClick={() => setActiveSection("Quizzes")}
        >
          Quizzes
        </button>
        <button
          className={activeSection === "Puzzles" ? "active" : ""}
          onClick={() => setActiveSection("Puzzles")}
        >
          Puzzles
        </button>
        <button
          className={activeSection === "Animation" ? "active" : ""}
          onClick={() => setActiveSection("Animation")}
        >
          Animation Games
        </button>
      </div>
      <div className="section-content">{renderSectionContent()}</div>
    </div>
  );
};

export default GamesDashboard;
