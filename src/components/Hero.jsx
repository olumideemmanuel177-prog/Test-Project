import React, { useEffect } from "react";
import "./Hero.css";
import heroImage from "../assets/hero-image.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left side - Text */}
        <div className="hero-text" data-aos="fade-up">
          <h1 className="hero-title">
            Building the <span>Future</span> of <span>Digital Experiences</span>
          </h1>

          <p className="hero-subtitle">
            We create sleek, responsive, and high-performance digital products
            that move your brand forward.
          </p>

          <Link to="/contact" className="hero-btn">
            Get Started →
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="hero-image" data-aos="zoom-in">
          <img src={heroImage} alt="Hero" className="hero-img" />
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
