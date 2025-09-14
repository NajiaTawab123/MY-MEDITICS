import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

// Pages
import Home1 from "./pages/Home1";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Team from "./pages/Team";
import DoctorProfile from "./pages/DoctorProfile"; // ✅ Correct name
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<DoctorProfile />} /> {/* ✅ Dynamic route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


