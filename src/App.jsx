import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./routes/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Contact from "./routes/Contact";
import ScrollToTop from "./components/ScrollToTop";

// 404 Page Component
function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px", color: "#fff" }}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
