import React, { useState } from "react";
import "./EducationDashboard.scss";
import AnimatedLessons from "./AnimatedLessons" // Assume these components exist
import ReadingComprehension from "./ReadingComprehension";
import MathScience from "./MathScience";

const EducationDashboard = () => {
  const [activeSection, setActiveSection] = useState("Animated Lessons");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Animated Lessons":
        return <AnimatedLessons />;
      case "Reading Comprehension":
        return <ReadingComprehension />;
      case "Math & Science":
        return <MathScience />;
      default:
        return null;
    }
  };

  return (
    <div className="education-dashboard">
      <h1>Education Dashboard</h1>
      <div className="buttons">
        <button
          className={activeSection === "Animated Lessons" ? "active" : ""}
          onClick={() => setActiveSection("Animated Lessons")}
        >
          Animated Lessons
        </button>
        <button
          className={activeSection === "Reading Comprehension" ? "active" : ""}
          onClick={() => setActiveSection("Reading Comprehension")}
        >
          Reading Comprehension
        </button>
        <button
          className={activeSection === "Math & Science" ? "active" : ""}
          onClick={() => setActiveSection("Math & Science")}
        >
          Math & Science
        </button>
      </div>
      <div className="section-content">{renderSectionContent()}</div>
    </div>
  );
};

export default EducationDashboard;
