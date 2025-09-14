// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between">

      {/* Background Animated Shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* BIG Cross Behind Doctor */}
        <motion.img
          src="/cross.png"
          alt="Big Cross"
          className="absolute opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
          style={{ filter: "drop-shadow(0 0 15px aqua) brightness(1.7)" }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small floating aqua cross */}
        <motion.img
          src="/cross.png"
          alt="Small Cross"
          className="absolute w-24 h-24 opacity-40 top-20 left-20"
          animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.3, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating circles */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-blue-400 opacity-30 top-1/4 left-1/3"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-blue-300 opacity-30 top-2/3 left-2/3"
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ECG Heartbeat Line - Thin & Realistic */}
        <motion.div
          className="absolute w-[250px] h-16 top-1/2 right-12 z-10"
          initial={{ x: 100 }}
          animate={{ x: [100, 0, 100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 20" fill="none">
            {/* ECG path: straight -> small peak -> tall peak -> dip -> baseline */}
            <path
              d="M0 10 L15 10 L20 8 L25 12 L30 5 L35 10 L50 10 L55 7 L60 13 L65 10 L100 10"
              stroke="#00ff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Left Side Content */}
      <motion.div
        className="relative z-10 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="bg-transparent border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
          💙 Hi I Am
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-snug">
          Meet Dr. Tushar Raja <br /> — Your Trusted Healthcare Partner
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Dr. Tushar is a highly experienced and compassionate{" "}
          <span className="italic">
            [General Physician / Cardiologist / Dermatologist]
          </span>{" "}
          dedicated to patient care.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Book Appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition"
          >
            View Schedule
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side Content */}
      <div className="relative z-10 mt-10 md:mt-0 flex flex-row items-start gap-6">
        {/* Doctor Image */}
        <motion.img
          src="/banner-img.png"
          alt="Doctor"
          className="relative z-10 rounded-lg drop-shadow-lg w-[300px] md:w-[400px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Animated Quote Box */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="bg-blue-800 p-4 rounded-lg shadow-md max-w-xs z-20 -mt-4 md:-mt-12 mx-auto md:mx-0"
        >
          <p className="italic text-sm md:text-base">
            "My mission is to treat every patient with care, respect, and the highest standard of medical knowledge."
          </p>
          <p className="text-lime-400 mt-2 font-semibold text-sm md:text-base">
            — Robel Roy, USY
          </p>
        </motion.div>
      </div>

      {/* Social Icons - Desktop */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-10">
        {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, idx) => (
          <motion.a
            key={idx}
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
          >
            <Icon />
          </motion.a>
        ))}
      </div>

      {/* Social Icons - Mobile */}
      <div className="flex md:hidden justify-center gap-4 mt-6 z-10">
        {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, idx) => (
          <motion.a
            key={idx}
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </section>
  );
}


