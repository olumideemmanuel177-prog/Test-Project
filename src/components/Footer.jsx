import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand/About */}
        <div className="footer-about">
          <h3>Eudoxis</h3>
          <p>
            <span className="highlight">Digital</span>  Experience <br />Made Easy
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/github.png"
                alt="GitHub"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Eudoxis. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
