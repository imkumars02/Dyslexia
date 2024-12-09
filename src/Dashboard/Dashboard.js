import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Features from "../Features/Features";
import Footer from "../Header/Footer";
import About from "../Header/About";
import AudioLearn from "../AudioLearn/AudioLearn";
import EducationResource from "../EducationResource/EducationResource";
import GameSection from "../GameSection/GameSection";
import "./Dashboard.scss";

const Dashboard = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const sections = sectionsRef.current; // Store ref value in variable

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = sectionsRef.current[1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dashboard-container">
      <section
        className="hero-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="overlay-content">
          <h1>Welcome to Dyslexia LearnPlay</h1>
          <p>
            Discover a world where learning meets play. Explore games,
            animations, and resources designed for your unique learning style.
          </p>
          <div className="cta-buttons">
            <Link className="cta-button start" to="/EducationDashboard">
              Start Learning
            </Link>
            <Link className="cta-button play" to="/GamesDashboard">
              Play Games
            </Link>
          </div>
        </div>
        <button className="scroll-down" onClick={scrollToNextSection}>
          <ChevronDown size={32} />
        </button>
      </section>

      <section
        className="features-section"
        id="Features"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="section-content">
          <h2>Explore Our Features</h2>
          <Features />
        </div>
      </section>

      <section
        className="games-section"
        id="Games"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="section-content">
          <h2 style={{color:'#fff'}}>Games Section Highlights</h2>
          <GameSection />
        </div>
      </section>

      <section
        className="education-section"
        id="Education"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="section-content">
          <h2>Educational Resources</h2>
          <EducationResource />
        </div>
      </section>

      <section
        className="audio-section"
        id="AudioLearning"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className="section-content">
          <h2 style={{color:'#fff'}}>Audio Learning</h2>
          <AudioLearn />
        </div>
      </section>

      <section
        className="about-section"
        id="About"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <div className="section-content">
          <h2>About Us</h2>
          <About />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
