import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReadingComprehension.scss";
import { Play, Square } from "lucide-react";

const ReadingComprehension = () => {
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

  const readings = [
    {
      title: "Understanding Fiction",
      description:
        "Dive into the elements of fiction and explore narrative structures.",
      thumbnail: require("../Image/fiction.jpg"),
      link: "/Fiction",
    },
    {
      title: "Analyzing Non-Fiction",
      description:
        "Learn how to dissect non-fiction texts and extract key information.",
      thumbnail: require("../Image/non-fiction.jpg"),
      link: "/NonFiction",
    },
    {
      title: "Critical Reading Skills",
      description:
        "Enhance your critical thinking through active reading strategies.",
      thumbnail: require("../Image/critical-reading.jpg"),
      link: "/CriticalReading",
    },
    {
      title: "Literary Devices",
      description:
        "Understand common literary devices and their effects on text interpretation.",
      thumbnail: require("../Image/literary-devices.jpg"),
      link: "/LiteraryDevices",
    },
  ];

  return (
    <div className="ReadingComprehension">
      {/* <header className="header">
        <h2>Reading Comprehension Hub</h2>
        <p>
          Explore topics that enhance your reading skills and comprehension.
        </p>
      </header> */}
      <div className="ContainerList">
        {readings.map((reading, index) => (
          <Link to={reading.link} className="card" key={index}>
            <img src={reading.thumbnail} alt={reading.title} />
            <h3>{reading.title}</h3>
            <p>{reading.description}</p>
            <button
              className="play-button"
              onClick={(e) => {
                e.preventDefault();
                toggleSpeech(reading.description, index);
              }}
            >
              {playingIndex === index ? <Square /> : <Play />}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReadingComprehension;
