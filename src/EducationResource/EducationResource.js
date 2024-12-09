import React from "react";
import './EducationResource.scss';
import { Link } from "react-router-dom";

// Importing images for each educational section
import animationImage from "../Image/lesson.png";
import readingImage from "../Image/reading.png";
import mathScienceImage from "../Image/maths.png";

const EducationResource = () => {
  return (
    <div className="education-resource">
      <div className="education-container">
        <img src={animationImage} alt="Animated Lessons" className="resource-image" />
        <h3>Animated Lessons</h3>
        <p>Interactive stories with highlighted text.</p>
        <Link to={'/EducationDashboard'}>Explore</Link>
      </div>
      <div className="education-container">
        <img src={readingImage} alt="Reading Comprehension" className="resource-image" />
        <h3>Reading Comprehension</h3>
        <p>Interactive stories with questions.</p>
        <Link to={'/EducationDashboard'}>Explore</Link>
      </div>
      <div className="education-container">
        <img src={mathScienceImage} alt="Math & Science" className="resource-image" />
        <h3>Math & Science</h3>
        <p>Engaging videos and simulations.</p>
        <Link to={'/EducationDashboard'}>Explore</Link>
      </div>
    </div>
  );
};

export default EducationResource;
