import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? "" : menu);
  };

  return (
    <nav className="bg-white shadow rounded-2xl max-w-6xl mx-auto mb-6">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center gap-2"
        >
          <span className="text-3xl">💙</span> Meditics
        </Link>

        {/* Desktop Menu */}
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

          {/* Pages with dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Pages <ChevronDown size={16} />
            </button>
            {dropdown === "pages" && (
              <ul className="absolute bg-white shadow rounded mt-2 w-44 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/team">Team Members</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/doctor-profile">Doctor Profile</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-lime-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-lime-500">
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow rounded-b-2xl">
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
          <button className="w-full bg-lime-200 text-white px-5 py-2 rounded-lg font-semibold hover:bg-lime-200">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
