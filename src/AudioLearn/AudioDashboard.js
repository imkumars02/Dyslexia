import React, { useState } from "react";
import AudioBooks from "./AudioBooks";
import ListeningLessons from "./ListeningLessons";
import RecordReplay from "./RecordReplay";
import "./AudioDashboard.scss";

const AudioDashboard = () => {
  const [activeSection, setActiveSection] = useState("AudioBooks");

  const renderContent = () => {
    switch (activeSection) {
      case "AudioBooks":
        return <AudioBooks />;
      case "Listening Lessons":
        return <ListeningLessons />;
      case "Record & Replay":
        return <RecordReplay />;
      default:
        return null;
    }
  };

  return (
    <div className="audio-dashboard">
      <div className="dashboard-card">
        <div className="card-header">
          <h2 className="card-title">Audio Learning</h2>
        </div>
        <div className="button-nav">
          <button
            onClick={() => setActiveSection("AudioBooks")}
            className={activeSection === "AudioBooks" ? "active" : ""}
          >
            AudioBooks
          </button>
          <button
            onClick={() => setActiveSection("Listening Lessons")}
            className={activeSection === "Listening Lessons" ? "active" : ""}
          >
            Listening Lessons
          </button>
          <button
            onClick={() => setActiveSection("Record & Replay")}
            className={activeSection === "Record & Replay" ? "active" : ""}
          >
            Record & Replay
          </button>
        </div>
        <div className="card-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AudioDashboard;
