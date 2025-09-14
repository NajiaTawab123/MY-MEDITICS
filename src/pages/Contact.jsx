import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

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

    // Show success popup
    setSuccess(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Redirect to Home after 2 seconds
    setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 2000);
  };

  return (
    <section>
      {/* 🔹 Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-16 md:py-20 overflow-hidden">
        <div className="relative inline-block">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[50%] -translate-y-1/2 w-20 opacity-70"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        </div>
        <p className="text-sm md:text-base mt-2">
          Home <span className="mx-2">&gt;</span> Contact
        </p>
      </div>

      {/* 🔹 Info Cards */}
      <div className="container mx-auto px-6 mt-12 grid md:grid-cols-3 gap-6 z-10 relative">
        {/* Address */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
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
          </div>
          <div>
            <h4 className="font-semibold text-lg">Address</h4>
            <p>House #5, Street Number #98, Brasilia-70000-000, Brazil</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
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
          </div>
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
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
          </div>
          <div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <p>+208-666-01112</p>
            <p>+380961381877</p>
          </div>
        </div>
      </div>

      {/* 🔹 Map + Let’s Talk Form */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-16 mb-16">
        {/* Map */}
        <div className="w-full h-96 rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Brasilia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Let’s Talk Form */}
        <div className="bg-black text-white p-10 rounded-xl shadow-lg relative">
          <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-black placeholder-gray-400 border border-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-black placeholder-gray-400 border border-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-black h-32 placeholder-gray-400 border border-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Success Popup */}
          {success && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Message sent successfully! Redirecting to Home...
            </div>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
}
