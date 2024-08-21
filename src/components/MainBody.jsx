import React from 'react';
import Home from "../page/Home";
import About from "../page/About";
import Skills from "../page/Skills";
import Services from "../page/Services";
import Contact from "../page/Contact";
import Projects from "../page/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainBody = () => {
  return (
    <Router>
      <div className='body'>
        {/* Top-left background elements */}
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
          <div style={{ height: "21px", background: "var(--main-color)", width: "260px" }}></div>
          <div style={{ height: "260px", background: "var(--main-color)", width: "21px" }}></div>
        </div>

        {/* Main Content */}
        <div className='body2'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* Bottom-right background elements */}
        <div style={{ position: "absolute",rotate:"180deg", bottom: 0, right: 0, zIndex: -1 }}>
          <div style={{ height: "21px", background: "var(--main-color)", width: "260px" }}></div>
          <div style={{ height: "260px", background: "var(--main-color)", width: "21px", transform: "rotate(180deg)" }}></div>
        </div>
      </div>
    </Router>
  );
};

export default MainBody;
