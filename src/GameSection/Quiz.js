import React, { useState } from "react";
import "./Quiz.scss";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which of these is a fruit?",
      options: ["Carrot", "Apple", "Potato", "Onion"],
      answer: "Apple",
    },
    {
      question: "What color is the sky?",
      options: ["Blue", "Green", "Yellow", "Red"],
      answer: "Blue",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "90°C", "80°C", "70°C"],
      answer: "100°C",
    },
    {
      question: "Which gas do plants absorb?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      answer: "Tokyo",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const correctAnswersCount = questions.reduce((count, q, index) => {
    return count + (answers[index] === q.answer ? 1 : 0);
  }, 0);

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Friendly Quiz</h1>
      {!quizCompleted ? (
        <form onSubmit={submitted ? handleSubmit : handleNext}>
          <div className="question">
            <p className="question-text">
              Ques: {questions[currentQuestion].question}
            </p>
            <div className="options">
              {questions[currentQuestion].options.map((option, i) => (
                <label
                  key={i}
                  className={`option ${
                    answers[currentQuestion] === option ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={handleChange}
                    required
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="next-button">
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </form>
      ) : (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <div className="result-circle">
            <svg width="200" height="200">
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="#e6e6e6"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="#007bff"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${
                  (correctAnswersCount / questions.length) * 565
                } 565`}
                style={{ transition: "stroke-dasharray 0.5s ease" }}
              />
            </svg>
              <div className="score">
                <h3>
                  {correctAnswersCount} / {questions.length}
                </h3>
                <p>
                  {((correctAnswersCount / questions.length) * 100).toFixed(0)}%
                  Correct
                </p>
              </div>
          </div>
          {/* <div className="result-list">
            {questions.map((q, index) => (
              <div key={index} className="result-item">
                <p className="result-question">{q.question}</p>
                <p
                  className={`result-answer ${
                    answers[index] === q.answer
                      ? "result-correct"
                      : "result-wrong"
                  }`}
                >
                  Your answer: {answers[index] || "Not answered"}
                </p>
                {answers[index] !== q.answer && (
                  <p className="result-correct">Correct answer: {q.answer}</p>
                )}
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Quiz;
