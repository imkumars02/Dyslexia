import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AnimatedLessons.scss";
import { Play, Square } from "lucide-react";

const AnimatedLessons = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const speechSynthesisRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    speechSynthesisRef.current = window.speechSynthesis;
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

  const toggleSpeech = (text, index) => {
    if (playingIndex === index) {
      speechSynthesisRef.current.cancel();
      setPlayingIndex(null);
    } else {
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      utteranceRef.current.onend = () => setPlayingIndex(null);
      speechSynthesisRef.current.speak(utteranceRef.current);
      setPlayingIndex(index);
    }
  };

  const theories = [
    {
      title: "Python Tutorial",
      description:
        "Python is one of the most popular programming languages today, known for its simplicity and ease of use.",
      thumbnail: require("../Image/python.png"),
      link: "/PythonTutorial",
    },
    {
      title: "JavaScript Basics",
      description:
        "JavaScript is a high-level, dynamic programming language that is widely used for web development.",
      thumbnail: require("../Image/javascript.png"),
      link: "/JavaScriptTutorial",
    },
    {
      title: "React Framework",
      description:
        "React is a popular JavaScript library for building user interfaces, especially single-page applications.",
      thumbnail: require("../Image/react.png"),
      link: "/ReactTutorial",
    },
    {
      title: "Data Science Fundamentals",
      description:
        "Data Science combines statistics, computer science, and domain expertise to extract insights from data.",
      thumbnail: require("../Image/datascience.png"),
      link: "/DataScienceTutorial",
    },
  ];

  return (
    <div className="AnimatedLessons">
      <h2 className="title">Animated Lessons</h2>
      <div className="Container">
        {theories.map((theory, index) => (
          <Link to={theory.link} className="Box" key={index}>
            <img src={theory.thumbnail} alt={`${theory.title}_Logo`} />
            <h3>
              <span>Title: </span>
              {theory.title}
            </h3>
            <p>
              <span>Desc: </span>
              {theory.description}
            </p>
            {playingIndex === index ? (
              <button
                className="BtnC"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSpeech(theory.description, index);
                }}
              >
                <Square />
              </button>
            ) : (
              <button
                className="BtnC"
                onClick={(e) => {
                  e.preventDefault();
                  toggleSpeech(theory.description, index);
                }}
              >
                <Play />
              </button>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLessons;
