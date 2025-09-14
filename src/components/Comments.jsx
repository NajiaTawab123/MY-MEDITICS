// src/components/Comments.jsx
import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Comments() {
  const reviewRef = useRef(null);

  const review = {
    text: "I had a wonderful experience here! The staff were professional and caring, and the facilities were top-notch.",
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  useEffect(() => {
    // GSAP animation for the quote box
    gsap.from(reviewRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-2">
            Our Happy Patients
          </h2>
          <h3 className="text-blue-700 text-lg font-medium mb-4">
            What They Say
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Real stories from our patients show how dedicated our team is in
            providing the best healthcare services. We take pride in delivering
            professional care with compassion.
          </p>
        </motion.div>

        {/* Animated Quote Box */}
        <div
          ref={reviewRef}
          className="bg-white p-8 rounded-2xl shadow-lg relative hover:shadow-2xl transition-all duration-500"
        >
          <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
          <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            "{review.text}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={review.img}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 shadow-sm"
            />
            <div>
              <h4 className="text-blue-600 font-semibold text-sm md:text-base">
                — {review.name}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



