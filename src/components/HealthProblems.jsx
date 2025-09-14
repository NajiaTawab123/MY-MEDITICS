// src/components/HealthProblems.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HealthProblems() {
  return (
    <section className="bg-blue-950 text-white py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            💚 Do You Need Emergency Care
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Do You Have Health Problems
          </h2>
        </motion.div>

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg inline-block hover:scale-105 transition-transform duration-300"
          >
            I Need Help →
          </a>
        </motion.div>
      </div>

      {/* Divider Line */}
      <motion.div
        className="border-t border-gray-600 mt-10"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
    </section>
  );
}
