// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

  return (
    <nav className="bg-white shadow rounded-2xl max-w-6xl mx-auto mb-6 relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* ✅ Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          {/* Heart Icon with ECG */}
          <img
            src="/public/heart.png"
            alt="Meditics Logo"
            className="w-20 h-20 object-contain"
          />
          {/* Brand Text */}
          <span className="text-4xl font-bold">
            <span className="text-blue-600">M</span>
            <span className="text-gray-800">editics</span>
          </span>
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li className="hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/services">Services</Link>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Pages <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {dropdown === "pages" && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white shadow rounded mt-2 w-44 text-sm z-20"
                >
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/team">Team Members</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/doctor-profile">Doctor Profile</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* ✅ Desktop Button */}
        <button className="hidden md:block bg-lime-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-lime-500 transition">
          Book Appointment
        </button>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 space-y-4 shadow rounded-b-2xl overflow-hidden"
          >
            <Link to="/" className="block hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="block hover:text-blue-600">
              About
            </Link>
            <Link to="/services" className="block hover:text-blue-600">
              Services
            </Link>
            <Link to="/team" className="block hover:text-blue-600">
              Team Members
            </Link>
            <Link to="/doctor-profile" className="block hover:text-blue-600">
              Doctor Profile
            </Link>
            <Link to="/contact" className="block hover:text-blue-600">
              Contact
            </Link>
            <button className="w-full bg-lime-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-lime-500 transition">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
