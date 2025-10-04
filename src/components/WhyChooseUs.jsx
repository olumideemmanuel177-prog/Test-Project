import React from "react";
import "./WhyChooseUs.css";
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="why-header">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          What makes <span className="highlight">Eudoxis</span> different
        </p>
      </div>

      <div className="why-container">
        <div className="why-card">
          <FaLightbulb className="why-icon" />
          <h3 className="why-card-title">Innovative Solutions</h3>
          <p className="why-text">
            We bring fresh, creative ideas that transform visions into reality,
            ensuring your brand stays ahead of the curve.
          </p>
        </div>

        <div className="why-card">
          <FaUsers className="why-icon" />
          <h3 className="why-card-title">Client-Centered</h3>
          <p className="why-text">
            Your goals are our priority. We listen, understand, and tailor
            solutions that align with your needs.
          </p>
        </div>

        <div className="why-card">
          <FaRocket className="why-icon" />
          <h3 className="why-card-title">Fast & Reliable</h3>
          <p className="why-text">
            With a focus on efficiency and quality, we deliver projects on time
            without compromising excellence.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt className="why-icon" />
          <h3 className="why-card-title">Trusted Partner</h3>
          <p className="why-text">
            Building long-term relationships based on trust, transparency, and
            consistent results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
