import React from "react";
import "./AudioLearn.scss";
import { Link } from "react-router-dom";

// Importing images to replace the icons
import audiobookImage from "../Image/maths.png";
import listeningLessonsImage from "../Image/headphone.png";
import recordReplayImage from "../Image/voice.png";

const AudioLearn = () => {
  return (
    <div className="audio-learn">
      <div className="audio-container">
        <img src={audiobookImage} alt="Audiobooks" className="audio-image" />
        <h3>AudioBooks</h3>
        <p>Wide range of engaging audiobooks.</p>
        <Link to={"/AudioDashboard"}>Explore</Link>
      </div>
      <div className="audio-container">
        <img
          src={listeningLessonsImage}
          alt="Listening Lessons"
          className="audio-image"
        />
        <h3>Listening Lessons</h3>
        <p>Lessons read aloud with visuals.</p>
        <Link to={"/AudioDashboard"}>Explore</Link>
      </div>
      <div className="audio-container">
        <img
          src={recordReplayImage}
          alt="Record & Replay"
          className="audio-image"
        />
        <h3>Record & Replay</h3>
        <p>Practice & improve your skills.</p>
        <Link to={"/AudioDashboard"}>Explore</Link>
      </div>
    </div>
  );
};

export default AudioLearn;
