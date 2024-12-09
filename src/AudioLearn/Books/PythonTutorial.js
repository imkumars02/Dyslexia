import React, { useState, useRef, useEffect } from "react";
import "./Tutorial.scss";

const videoData = [
  {
    title: "Introduction to Python",
    description:
      "This video introduces the basics of Python programming, covering its syntax, features, and why it's a popular choice for beginners and professionals alike. Learn how to set up your Python environment and write your first simple program.",
    src: require("../../Image/Intro.mp4"),
  },
  {
    title: "Variables and Data Types",
    description:
      "Explore how to declare variables in Python and understand the different data types available, such as integers, floats, strings, and booleans. This video will provide examples of how to use these data types effectively in your programs.",
    src: require("../../Image/part2.mp4"),
  },
  {
    title: "Control Structures",
    description:
      "Learn about control structures in Python, including if statements, loops, and how they control the flow of your program. Understand how to implement decisions and iterations to make your code more dynamic and efficient.",
    src: require("../../Image/part3.mp4"),
  },
  {
    title: "Functions",
    description:
      "Discover how to create and use functions in Python to encapsulate reusable pieces of code. This video explains the concept of parameters, return values, and the importance of function documentation.",
    src: require("../../Image/part4.mp4"),
  },
  {
    title: "Modules and Packages",
    description:
      "Understand the importance of modules and packages in organizing your code. Learn how to import built-in and third-party libraries, and how to create your own modules for better code management.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "File Handling",
    description:
      "Learn how to handle files in Python, including reading from and writing to text files. This video covers various file operations and best practices for managing file paths and data.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Exception Handling",
    description:
      "Understand how to handle errors and exceptions in Python using try, except, and finally blocks. This video emphasizes the importance of robust error handling for creating reliable applications.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Object-Oriented Programming",
    description:
      "Get an introduction to Object-Oriented Programming (OOP) in Python. Learn about classes, objects, inheritance, and encapsulation to build more complex and modular programs.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Data Structures",
    description:
      "Explore built-in data structures in Python, such as lists, tuples, sets, and dictionaries. This video demonstrates how to choose the right data structure for your specific needs.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Python Libraries",
    description:
      "Discover popular Python libraries such as NumPy, Pandas, and Matplotlib. Learn how these libraries can help you perform data analysis, visualization, and scientific computing more effectively.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Web Scraping",
    description:
      "Learn the basics of web scraping using Python with libraries like Beautiful Soup and requests. This video covers how to extract data from websites and handle HTML and JSON responses.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Data Visualization",
    description:
      "Discover how to visualize data in Python using libraries like Matplotlib and Seaborn. This video shows you how to create various types of charts and graphs to represent data visually.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "APIs in Python",
    description:
      "Learn how to work with APIs in Python, including sending requests and handling responses. This video covers authentication, data formats, and how to integrate external services into your applications.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Testing in Python",
    description:
      "Understand the importance of testing in software development. This video introduces various testing frameworks in Python, including unittest and pytest, and how to write effective tests for your code.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Python for Data Science",
    description:
      "An introduction to Python for data science applications, covering essential libraries like NumPy, Pandas, and Matplotlib. Learn how to manipulate data, perform analysis, and visualize results effectively.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Machine Learning Basics",
    description:
      "Learn the fundamentals of machine learning in Python, including supervised and unsupervised learning. This video covers key concepts, algorithms, and how to use libraries like Scikit-learn.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Django Basics",
    description:
      "An introduction to web development with Django, a powerful Python web framework. Learn how to set up a Django project, create views, and manage templates for web applications.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Flask Basics",
    description:
      "Learn how to build web applications using Flask, a lightweight Python web framework. This video covers routing, templates, and how to create a simple web app from scratch.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Deploying Python Applications",
    description:
      "Discover how to deploy Python applications to production environments. This video covers various deployment options, including cloud platforms and containerization with Docker.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Advanced Python Concepts",
    description:
      "Explore advanced concepts in Python programming, such as decorators, generators, and context managers. This video will enhance your understanding of Python's more intricate features.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Regular Expressions",
    description:
      "Learn how to use regular expressions in Python for pattern matching and text manipulation. This video covers syntax and provides practical examples for searching and replacing text.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Working with Databases",
    description:
      "Understand how to work with databases in Python using SQLite and SQLAlchemy. This video covers database connections, queries, and how to manage data efficiently.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Python for Automation",
    description:
      "Discover how to automate tasks using Python, including file manipulation, web automation, and scripting. This video will help you understand how to save time through automation.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Data Analysis with Pandas",
    description:
      "Learn how to perform data analysis using the Pandas library. This video covers data manipulation, cleaning, and analysis techniques to derive insights from datasets.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Web Development with FastAPI",
    description:
      "An introduction to FastAPI, a modern web framework for building APIs in Python. Learn about its features, how to create a simple API, and the benefits of asynchronous programming.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Introduction to NumPy",
    description:
      "Learn the basics of NumPy, a powerful library for numerical computing in Python. This video covers arrays, mathematical functions, and how to perform data manipulation efficiently.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Creating GUIs with Tkinter",
    description:
      "Discover how to create graphical user interfaces (GUIs) using Tkinter, Python's built-in GUI library. This video covers window management, widgets, and event handling.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Working with JSON Data",
    description:
      "Learn how to work with JSON data in Python, including parsing and serialization. This video shows you how to handle data interchange formats effectively.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Introduction to Machine Learning with TensorFlow",
    description:
      "Get started with TensorFlow for machine learning. This video introduces you to its architecture, basic concepts, and how to build simple neural networks for classification tasks.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Version Control with Git",
    description:
      "Understand the importance of version control in software development. This video introduces Git, covering essential commands, branching, and collaboration workflows using GitHub.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Python and Cloud Computing",
    description:
      "Learn how to integrate Python with cloud services. This video explores using AWS, Google Cloud, and Azure for hosting applications, data storage, and scalable computing resources.",
    src: require("../../Image/v1.mp4"),
  },
  {
    title: "Building RESTful APIs with Flask",
    description:
      "Dive deeper into Flask by learning how to build RESTful APIs. This video covers routes, HTTP methods, and how to serve JSON data to clients effectively.",
    src: require("../../Image/v1.mp4"),
  },
];

const PythonTutorial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentVideo = videoData[currentIndex].src;
  const currentTitle = videoData[currentIndex].title;
  const currentDescription = videoData[currentIndex].description;

  const handleVideoChange = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = currentVideo;
      videoRef.current.load(); // Only load, don't autoplay yet
    }
  }, [currentVideo]); // Only run this effect when currentVideo changes

  // const handlePlayVideo = () => {
  //   if (videoRef.current) {
  //     videoRef.current
  //       .play()
  //       .then(() => {
  //         setIsPlaying(true);
  //       })
  //       .catch((error) => {
  //         console.error("Error playing video:", error);
  //       });
  //   }
  // };

  const handlePlayDescription = () => {
    const utterance = new SpeechSynthesisUtterance(currentDescription);
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleStopDescription = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="TutorialContainer">
      <div className="TC">
        <h2 className="Heading">Python Tutorial</h2>
        <div className="Container">
          <div className="VideoText">
            <div className="Video">
              <video ref={videoRef} controls />
              <h3>{currentTitle}</h3>
              {/* <button onClick={handlePlayVideo} disabled={isPlaying}>
                Play Video
              </button>{" "} */}
              {/* Button to play video */}
            </div>
            <div className="Text">
              <p className="Description">{currentDescription}</p>
              <div className="ButtonContainer">
                <button onClick={handlePlayDescription} disabled={isPlaying}>
                  Play Description
                </button>
                <button onClick={handleStopDescription} disabled={!isPlaying}>
                  Stop
                </button>
              </div>
            </div>
          </div>
          <div className="List">
            <ul>
              {videoData.map((video, index) => (
                <li
                  key={index}
                  onClick={() => handleVideoChange(index)}
                  className={currentIndex === index ? "active" : ""}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonTutorial;
