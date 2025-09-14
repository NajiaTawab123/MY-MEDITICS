import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 2000);
  };

  return (
    <section className="relative">
      {/* 🔹 Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-16 md:py-20 overflow-hidden">
        <div className="relative inline-block">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[50%] -translate-y-1/2 w-20 opacity-70 animate-pulse"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Contact Us
          </h1>
        </div>
        <p className="text-sm md:text-base mt-2 animate-fadeIn delay-200">
          Home <span className="mx-2">&gt;</span> Contact
        </p>
      </div>

      {/* 🔹 Info Cards */}
      <div className="container mx-auto px-6 mt-12 grid md:grid-cols-3 gap-6 z-10 relative">
        {[
          {
            title: "Address",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
              </svg>
            ),
            content: ["House #5, Street Number #98, Brasilia-70000-000, Brazil"],
          },
          {
            title: "Email",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8-4H8m8 8H8m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            ),
            content: ["info@example.com", "support@example.com"],
          },
          {
            title: "Phone",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.962 1.643l.518 2.073a2 2 0 01-.45 1.98l-1.25 1.5a16 16 0 006.586 6.586l1.5-1.25a2 2 0 011.98-.45l2.073.518A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
                />
              </svg>
            ),
            content: ["+208-666-01112", "+380961381877"],
          },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              {card.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{card.title}</h4>
              {card.content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Map + Let’s Talk Form */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-16 mb-16">
        {/* Map */}
        <motion.div
          className="w-full h-96 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Brasilia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Let’s Talk Form */}
        <motion.div
          className="bg-black text-white p-10 rounded-xl shadow-lg relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-black placeholder-gray-400 border border-white transition-all focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-black placeholder-gray-400 border border-white transition-all focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-black h-32 placeholder-gray-400 border border-white transition-all focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Success Popup */}
          {success && (
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully! Redirecting to Home...
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* 🔹 Footer with subtle sketches */}
      <div className="relative bg-gray-200 overflow-hidden">
        {/* Slightly darker overlay */}
        <div className="absolute inset-0 bg-gray-300 opacity-40 pointer-events-none"></div>

        {/* Sketch overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src="/light-sketch1.png"
            alt="sketch1"
            className="absolute top-10 left-10 opacity-20 animate-pulse-slow"
          />
          <img
            src="/light-sketch2.png"
            alt="sketch2"
            className="absolute bottom-10 right-10 opacity-20 animate-pulse-slow"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
