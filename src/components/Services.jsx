import React from "react";
import "./Services.css";
import webDev from "../assets/webdev.svg";
import softwareDev from "../assets/software.svg";
import websiteMgmt from "../assets/management.svg";
import aiSolutions from "../assets/ai.svg";
import uiux from "../assets/uiux.svg";

function Services() {
  const services = [
    {
      img: webDev,
      title: "Web Development",
      desc: "We build responsive, high-performance websites that scale with your vision.",
    },
    {
      img: softwareDev,
      title: "Software Solutions",
      desc: "Custom software that solves real business challenges and automates workflows.",
    },
    {
      img: websiteMgmt,
      title: "Website Management",
      desc: "Ongoing updates, maintenance, and security so your site runs smoothly 24/7.",
    },
    {
      img: aiSolutions,
      title: "AI & Automation",
      desc: "We integrate intelligent automation tools to streamline your operations.",
    },
    {
      img: uiux,
      title: "UI / UX Design",
      desc: "User-centered designs that combine clarity, beauty, and functionality.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-label">Our Services</div>
        <h2 className="services-title">
          Complete digital solutions from <span>Design</span> to <span>AI Integration</span>
        </h2>
        <p className="services-intro">
          From brand identity and responsive websites to custom software and automation — 
          we bring ideas to life with precision and creativity.
        </p>
      </div>

      <div className="services-grid">
        {services.map((svc, idx) => (
          <div
            className="service-card"
            key={idx}
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <div className="service-icon">
              <img src={svc.img} alt={svc.title} />
            </div>
            <div className="service-body">
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
