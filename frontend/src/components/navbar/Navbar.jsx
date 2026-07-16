import { useEffect, useRef, useState } from "react";
import {
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";

import { NAV_ITEMS } from "../../constants/navigation";
import { COMPANY } from "../../constants/company";

import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark"
  );

  const [activeSection, setActiveSection] =
    useState("home");

  const [navbarScrolled, setNavbarScrolled] =
    useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 30);

      const sections =
        document.querySelectorAll("section[id]");

      let current = "home";

      sections.forEach((section) => {
        const top =
          section.offsetTop - 120;

        const height =
          section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    const outsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      outsideClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        outsideClick
      );
  }, []);

  useEffect(() => {
    const escClose = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      escClose
    );

    return () =>
      window.removeEventListener(
        "keydown",
        escClose
      );
  }, []);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={`navbar ${
        navbarScrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="navbar-container">

        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="brand-logo">
            B
          </div>

          <div className="brand-text">
            <span className="brand-name">
  {COMPANY.name}
</span>

            <span className="brand-tagline">
  {COMPANY.tagline}
</span>
          </div>
        </a>

        <nav
          className={`navbar-menu ${
            menuOpen ? "active" : ""
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
            >
              {item.icon}

              <span>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FiSun />
            ) : (
              <FiMoon />
            )}
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;