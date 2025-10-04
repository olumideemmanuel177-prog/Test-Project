import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-image.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1 className="hero-title">
            Building the <span>Future</span> of <span>Digital Experiences</span>
          </h1>
          <p className="hero-subtitle">
            Web, Software & AI Solutions for Growing Businesses.
          </p>
          <Link to="/contact" className="hero-btn">
            Get Started →
          </Link>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
