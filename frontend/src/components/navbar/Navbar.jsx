import { useEffect, useState } from "react";
import {
  FiHome,
  FiUser,
  FiLayers,
  FiFolder,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);

  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  const toggleTheme = () => {
  setDarkMode((currentMode) => !currentMode);
};

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-logo">B</div>

          <div className="brand-text">
            <span className="brand-name">BrightBrain</span>
            <span className="brand-tagline">Academic & Tech Solutions</span>
          </div>
        </a>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            <FiHome />
            <span>Home</span>
          </a>

          <a href="#about" onClick={closeMenu}>
            <FiUser />
            <span>About</span>
          </a>

          <a href="#services" onClick={closeMenu}>
            <FiLayers />
            <span>Services</span>
          </a>

          <a href="#projects" onClick={closeMenu}>
            <FiFolder />
            <span>Projects</span>
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            <FiBriefcase />
            <span>Portfolio</span>
          </a>

          <a href="#contact" onClick={closeMenu}>
            <FiMail />
            <span>Contact</span>
          </a>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Change website theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;