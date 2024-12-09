import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  Gamepad2Icon,
  PlaySquareIcon,
  InfoIcon,
  MenuIcon,
} from "lucide-react";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { to: "/", icon: HomeIcon, text: "Home" },
    { to: "/GamesDashboard", icon: Gamepad2Icon, text: "Games" },
    { to: "/AudioDashboard", icon: PlaySquareIcon, text: "Audio Learning" },
    { to: "/AboutSection", icon: InfoIcon, text: "About Us" },
  ];

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-text">Dyslexia</span>
              <span className="logo-highlight">LearnPlay</span>
            </h1>
          </Link>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>
        <nav className="navbar">
          <ul>
            {navItems.map(({ to, icon: Icon, text }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="nav-icon" aria-hidden="true" />
                  <span className="nav-text">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
