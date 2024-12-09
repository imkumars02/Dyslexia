import React, { useState, useEffect, useMemo } from "react";
import "./AlphabetLearn.css";
import apple from "../Image/Alphabet/apple.png";
import ball from "../Image/Alphabet/ball.png";
import cat from "../Image/Alphabet/cat.png";
import dog from "../Image/Alphabet/dog.png";
import elephant from "../Image/Alphabet/elephant.png";
import fish from "../Image/Alphabet/fish.png";
import goat from "../Image/Alphabet/goat.png";
import horse from "../Image/Alphabet/horse.png";
import ink from "../Image/Alphabet/ink.png";
import joker from "../Image/Alphabet/joker.png";
import kite from "../Image/Alphabet/kite.png";
import lemon from "../Image/Alphabet/lemon.png";
import monkey from "../Image/Alphabet/monkey.png";
import nest from "../Image/Alphabet/nest.png";
import orange from "../Image/Alphabet/orange.png";
import pen from "../Image/Alphabet/pen.png";
import queen from "../Image/Alphabet/queen.png";
import rabbit from "../Image/Alphabet/rabbit.png";
import sun from "../Image/Alphabet/sun.png";
import tiger from "../Image/Alphabet/tiger.png";
import umbrella from "../Image/Alphabet/umbrella.png";
import van from "../Image/Alphabet/van.png";
import watermelon from "../Image/Alphabet/waterlemon.png";
import xray from "../Image/Alphabet/xray.png";
import yoyo from "../Image/Alphabet/yoyo.png";
import zebra from "../Image/Alphabet/zebra.png";

const AlphabetLearn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  // Memoize the alphabet array to prevent unnecessary re-renders
  const alphabet = useMemo(() => [
    { letter: "A", word: "Apple", hindiWord: "सेब", emoji: apple },
    { letter: "B", word: "Ball", hindiWord: "गेंद", emoji: ball },
    { letter: "C", word: "Cat", hindiWord: "बिल्ली", emoji: cat },
    { letter: "D", word: "Dog", hindiWord: "कुत्ता", emoji: dog },
    { letter: "E", word: "Elephant", hindiWord: "हाथी", emoji: elephant },
    { letter: "F", word: "Fish", hindiWord: "मछली", emoji: fish },
    { letter: "G", word: "Goat", hindiWord: "बकरी", emoji: goat },
    { letter: "H", word: "Horse", hindiWord: "घोड़ा", emoji: horse },
    { letter: "I", word: "Ink", hindiWord: "स्याही", emoji: ink },
    { letter: "J", word: "Joker", hindiWord: "जोकर", emoji: joker },
    { letter: "K", word: "Kite", hindiWord: "पतंग", emoji: kite },
    { letter: "L", word: "Lemon", hindiWord: "नींबू", emoji: lemon },
    { letter: "M", word: "Monkey", hindiWord: "बंदर", emoji: monkey },
    { letter: "N", word: "Nest", hindiWord: "घोंसला", emoji: nest },
    { letter: "O", word: "Orange", hindiWord: "संतरा", emoji: orange },
    { letter: "P", word: "Pen", hindiWord: "कलम", emoji: pen },
    { letter: "Q", word: "Queen", hindiWord: "रानी", emoji: queen },
    { letter: "R", word: "Rabbit", hindiWord: "खरगोश", emoji: rabbit },
    { letter: "S", word: "Sun", hindiWord: "सूर्य", emoji: sun },
    { letter: "T", word: "Tiger", hindiWord: "बाघ", emoji: tiger },
    { letter: "U", word: "Umbrella", hindiWord: "छाता", emoji: umbrella },
    { letter: "V", word: "Van", hindiWord: "वैन", emoji: van },
    { letter: "W", word: "Watermelon", hindiWord: "तरबूज", emoji: watermelon },
    { letter: "X", word: "X-ray", hindiWord: "एक्स-रे", emoji: xray },
    { letter: "Y", word: "Yoyo", hindiWord: "योयो", emoji: yoyo },
    { letter: "Z", word: "Zebra", hindiWord: "ज़ेब्रा", emoji: zebra },
  ], []);

  // Function to speak the letter and its word
  const speakLetter = (letter, word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(`${letter} for ${word}`);
      speechSynthesis.speak(utterance);
      setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
    }
  };

  useEffect(() => {
    speakLetter(alphabet[currentIndex].letter, alphabet[currentIndex].word);
  }, [currentIndex, alphabet]); // The alphabet array is now memoized, so it doesn't trigger re-renders unnecessarily.

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : alphabet.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < alphabet.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="alphabet-learn">
      <h1>English Alphabet</h1>
      <div className="letter-display">
        <div className="letter-item">
          <div className="emoji">
            <img
              src={alphabet[currentIndex].emoji}
              alt={alphabet[currentIndex].word}
              className="alphabet-image"
            />
          </div>
          <div className="letter">{alphabet[currentIndex].letter}</div>
          <div className="word">{alphabet[currentIndex].word}</div>
          {/* Display the Hindi word */}
          <div className="hindi-word">{alphabet[currentIndex].hindiWord}</div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevious} disabled={speaking}>
          Previous
        </button>
        <button onClick={handleNext} disabled={speaking}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AlphabetLearn;
