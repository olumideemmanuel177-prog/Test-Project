import React, { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "SaaS Landing",
    category: "Web",
    thumb: "/assets/projects/saas-landing.jpg",
    hero: "/assets/projects/saas-landing-lg.jpg",
    desc: "High-converting landing page for a SaaS startup with optimized CTA and smooth animations.",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    category: "Product",
    thumb: "/assets/projects/dashboard.jpg",
    hero: "/assets/projects/dashboard-lg.jpg",
    desc: "Analytics dashboard with charts, product tracking, and sales overview.",
  },
  {
    id: 3,
    title: "Mobile App UI",
    category: "Design",
    thumb: "/assets/projects/mobile.jpg",
    hero: "/assets/projects/mobile-lg.jpg",
    desc: "Health & wellness mobile app with onboarding and workout tracking.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web",
    thumb: "/assets/projects/portfolio.jpg",
    hero: "/assets/projects/portfolio-lg.jpg",
    desc: "Personal portfolio website with modern UI and smooth scroll animations.",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="portfolio">
      <h1 className="portfolio-title">Our Work</h1>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <div key={p.id} className="portfolio-card">
            <img src={p.thumb} alt={p.title} />
            <div className="card-overlay">
              <h3>{p.title}</h3>
              <span>{p.category}</span>
              <button onClick={() => setSelected(p)}>View</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              ✕
            </button>
            <img src={selected.hero} alt={selected.title} />
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
