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
      desc: "Custom software to solve business challenges and automate workflows.",
    },
    {
      img: websiteMgmt,
      title: "Site Management",
      desc: "Maintenance, updates & security so your site runs smoothly around the clock.",
    },
    {
      img: aiSolutions,
      title: "AI & Automation",
      desc: "Intelligent integrations & automation tailored to your workflows.",
    },
    {
      img: uiux,
      title: "UI / UX Design",
      desc: "User-centric interfaces that prioritize clarity, delight & engagement.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-label">Our Services</div>
        <h2 className="services-title">
          Complete digital services from design to AI integration
        </h2>
        <p className="services-intro">
          From brand identity and responsive websites to software and automation — we cover it all.
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
