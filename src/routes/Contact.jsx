import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Network error. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Ready to start your next project? Let’s discuss how we can bring
          your ideas to life.
        </p>
      </div>

      <div className="contact-body">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>eudoxis@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Lagos, Nigeria</p>
          </div>
          <div className="info-item">
            <h4>Response Time</h4>
            <p>Within 2 hours</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
