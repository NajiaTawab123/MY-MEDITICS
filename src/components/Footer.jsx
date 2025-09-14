// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added import

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://meditics.temptics.com/assets/img/footer-2-vector.svg')",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-blue-950/90"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* ✅ Logo Section */}
          <Link to="/" className="flex items-center gap-0">
            <img
              src="/public/heart.png"
              alt="Meditics Logo"
              className="w-25 h-25 object-contain"
            />
            <h2 className="text-4xl font-bold">Meditics</h2>
          </Link>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Payment Partners */}
          <p className="mt-6 font-semibold">Payment Partners:</p>
          <div className="flex gap-3 mt-3">
            <img
              src="https://meditics.temptics.com/assets/img/payment-method-1.png"
              alt="GPay"
              className="h-7"
            />
            <img
              src="https://meditics.temptics.com/assets/img/payment-method-3.png"
              alt="Apple Pay"
              className="h-7"
            />
            <img
              src="https://meditics.temptics.com/assets/img/payment-method-2.png"
              alt="PayPal"
              className="h-7"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-7"
            />
            <img
              src="https://meditics.temptics.com/assets/img/payment-method-5.png"
              alt="MasterCard"
              className="h-7"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">General Health Check-Ups</li>
            <li className="hover:text-white transition">Stress & Lifestyle Counseling</li>
            <li className="hover:text-white transition">Vaccinations & Immunizations</li>
            <li className="hover:text-white transition">Referral to Specialists</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Join The Newsletter</h3>
          <p className="text-gray-300 mb-4 text-sm">
            Want to be notified about our services? Just sign up and we'll send
            you a notification by email.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-l-full w-full bg-white text-black border border-gray-300 focus:outline-none"
            />
            <button className="bg-blue-500 px-5 py-2 rounded-r-full hover:bg-blue-600 transition text-white">
              SUBSCRIBE
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative border-t border-gray-600 mt-6 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300"
      >
        <p>© Meditics 2025. All Rights Reserved.</p>
        <div className="flex gap-4 my-3 md:my-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="hover:text-white"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href="#"
            className="hover:text-white"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
          >
            Terms of use
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-white"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
          >
            Privacy Policy
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
