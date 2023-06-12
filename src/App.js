import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Gallery from "./components/gallery/gallery.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="section-1"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
