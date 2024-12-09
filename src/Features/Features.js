import React from "react";
import "./Features.scss";
import { Link } from "react-router-dom";

// Importing images instead of using lucide-react icons
import gamesImage from "../Image/game1.png";
import educationImage from "../Image/education.png";
import audioImage from "../Image/headphone.png";

const Features = () => {
  return (
    <div className="feature-container">
      <div className="feature-item">
        <img src={gamesImage} alt="Games Icon" className="feature-image" />
        <h3>Games</h3>
        <p>Engaging puzzles, animations, and quizzes to make learning fun.</p>
        <Link to="/GamesDashboard">Explore</Link>
      </div>
      <div className="feature-item">
        <img
          src={educationImage}
          alt="Educational Resources Icon"
          className="feature-image"
        />
        <h3>Educational Resources</h3>
        <p>Interactive lessons tailored for your unique learning style.</p>
        <Link to="/EducationDashboard">Explore</Link>
      </div>
      <div className="feature-item">
        <img
          src={audioImage}
          alt="Audio Learning Icon"
          className="feature-image"
        />
        <h3>Audio Learning</h3>
        <p>Audiobooks and lessons read aloud for auditory learners.</p>
        <Link to="/AudioDashboard">Explore</Link>
      </div>
    </div>
  );
};

export default Features;
