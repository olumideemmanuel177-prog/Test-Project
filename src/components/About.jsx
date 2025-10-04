import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.svg";
import CountUp from "./CountUp"; // 👈 import it


function About() {
  return (
    <section className="about" id="about">
      {/* <div className="about-label"></div> */}

      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" className="about-img" />
        </div>

        {/* Right: Text */}
        <div className="about-text-box">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            At <span className="highlight">Eudoxis</span>, we believe technology should be
            simple, smart, and impactful. Our team is passionate about combining
            creativity with technical expertise to deliver products that solve
            real problems.
          </p>
          <p className="about-description">
            Our approach is simple: <b>Listen, Design, Build, and Grow.</b> We
            partner with you to understand your goals and craft solutions that
            deliver measurable results.
          </p>

          <h3 className="about-subtitle">Mission</h3>
          <p className="about-description">
            Our mission is to empower businesses and individuals by delivering
            innovative web experiences, fostering collaboration, and
            continuously evolving to meet the dynamic needs of the digital
            world.
          </p>
        </div>
      </div>

{/* Stats Row */}
          <div className="about-stats">
            <div className="stat-card">
              <h3 className="stat-number"><CountUp end={20} />+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number"><CountUp end={5} />+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number"><CountUp end={4.3} /></h3>
              <p className="stat-label">Client Rating</p>
            </div>
          </div>


    </section>
  );
}

export default About;
