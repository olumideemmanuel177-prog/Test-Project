import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section on scroll (only on homepage)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "work"];
      const scrollPos = window.scrollY + 200;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Smooth scroll or redirect to home
  const handleClick = (id) => {
    if (location.pathname === "/") {
      // Already on home → scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setIsOpen(false);
      }
    } else {
      // On another page → go home, then scroll
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // wait a bit for home to render
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          <img src={logo} alt="Eudoxis Logo" className="logo-img" />
          <span className="logo-text">EUDOXIS</span>
        </a>

        {/* Nav Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("home");
            }}
          >
            Home
          </a>

          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("about");
            }}
          >
            About us
          </a>


          <a
            href="#services"
            className={active === "services" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleClick("services");
            }}
          >
            Services
          </a>


          <Link
            to="/Portfolio"
            className={active === "Portfolio" ? "active" : ""}
            onClick={() => setActive("Portfolio")}
          >
            Portfolio
          </Link>


          {/* Contact Us in mobile dropdown */}

          <Link 
          to="/contact" 
          className="contactt-btn mobile-contact"
          onClick={() => setActive("contact")}
        >
          Contact Us →
        </Link>

        </nav>



        {/* Contact Us button (desktop only) */}

        <Link 
        to="/contact" 
        className="contactt-btn desktop-contact"
        onClick={() => setActive("contact")}
      >
        Contact Us →
        </Link>


        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
