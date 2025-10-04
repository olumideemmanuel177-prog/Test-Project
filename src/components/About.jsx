import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.svg";
import CountUp from "./CountUp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" className="about-img" />
        </div>

        {/* Right: Text */}
        <div className="about-text-box">
          <h2 className="about-title">About Us</h2>

          <p className="about-description">
            At <span className="highlight">Eudoxis</span>, we believe technology
            should be simple, smart, and impactful. Our team blends creativity
            and technical expertise to deliver solutions that drive real
            results.
          </p>

          <p className="about-description">
            Our process is simple: <b>Listen, Design, Build, and Grow.</b> We
            collaborate closely with clients to turn ideas into scalable,
            high-performance products.
          </p>

          <h3 className="about-subtitle">Mission</h3>
          <p className="about-description">
            Our mission is to empower businesses and individuals through
            innovative web and software experiences that foster growth and
            digital excellence.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="about-stats">
        <div className="stat-card">
          <h3 className="stat-number">
            <CountUp end={20} />+
          </h3>
          <p className="stat-label">Projects Completed</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-number">
            <CountUp end={5} />+
          </h3>
          <p className="stat-label">Years Experience</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-number">
            <CountUp end={4.3} />
          </h3>
          <p className="stat-label">Client Rating</p>
        </div>
      </div>
    </section>
  );
}

export default About;
