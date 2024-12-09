import React from "react";
import "./MathScience.scss";
import math from "../Image/math.png"
import alphabet from "../Image/1.jpg"

const MathScience = () => {
  const topics = [
    {
      title: "Learn Table",
      description: "Master multiplication tables with interactive exercises.",
      image: math,
      link: "/MathTableLearn",
    },
    {
      title: "Learn Alphabet",
      description: "Explore the alphabet through fun and engaging activities.",
      image:alphabet,
      link: "/AlphabetLearn",
    },
  ];

  return (
    <div className="math-science">
      {/* <header className="header">
        <h1>Math & Language Learning</h1>
        <p>Embark on a journey of numbers and letters!</p>
      </header> */}
      <div className="topics-container">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <img src={topic.image} alt={topic.title} />
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <a href={topic.link} className="learn-more">
              Start Learning
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathScience;
