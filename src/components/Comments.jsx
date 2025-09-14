// src/components/Comments.jsx
import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Comments() {
  const review = {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
    name: "Kathryn Murphy",
    role: "Medical Assistant",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
            Happy Patients
          </h2>
          <h3 className="text-blue-700 text-lg font-medium mb-4">
            Patients Says
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consec.
          </p>
        </div>

        {/* Single Quote Box */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-6 rounded-xl shadow-lg relative"
        >
          <Quote className="absolute top-4 right-4 text-blue-700 opacity-20 w-10 h-10" />
          <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            "{review.text}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={review.img}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-blue-600 font-semibold text-sm md:text-base">
                — {review.name}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">{review.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
