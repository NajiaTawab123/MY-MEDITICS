// src/components/Qualifications.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Qualifications() {
  const awardImages = [
    "https://meditics.temptics.com/assets/img/award-1.svg",
    "https://meditics.temptics.com/assets/img/award-2.svg",
    "https://meditics.temptics.com/assets/img/award-3.svg",
    "https://meditics.temptics.com/assets/img/award-4.svg",
    "https://meditics.temptics.com/assets/img/award-5.svg",
    "https://meditics.temptics.com/assets/img/award-6.svg",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const awardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative px-6 md:px-16 py-16 bg-white text-center overflow-hidden">
      {/* Left Background Image */}
      <img
        src="https://meditics.temptics.com/assets/img/qualification-vector-2.svg"
        alt="left-bg"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-60 opacity-20 pointer-events-none"
      />

      {/* Right Background Image */}
      <img
        src="https://meditics.temptics.com/assets/img/qualification-vector-2.svg"
        alt="right-bg"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-60 opacity-20 pointer-events-none"
      />

      {/* Label */}
      <div className="inline-flex items-center border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 relative z-10">
        💙 My Qualification
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10 relative z-10">
        My Qualification & Awards
      </h2>

      {/* Qualification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 relative z-10">
        {[1, 2, 3, 4].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-md transition w-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="font-semibold text-lg">Oxford University</h3>
            <p className="text-gray-600 text-sm">Jan 2014 - Dec 2018</p>
            <p className="text-gray-800 font-medium mt-2">
              Bachelor of Medicine & Bachelor of Surgery (MBBS)
            </p>
          </motion.div>
        ))}
      </div>

      {/* Awards */}
      <div className="flex flex-wrap justify-center items-center gap-6 relative z-10">
        {awardImages.map((src, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center"
            variants={awardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img
              src={src}
              alt={`Award ${i + 1}`}
              className="w-10 h-10 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 relative z-10">
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          View All Awards →
        </a>
      </div>
    </section>
  );
}


