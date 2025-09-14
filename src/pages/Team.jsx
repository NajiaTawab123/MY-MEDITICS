import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Team() {
  const doctors = [
    { id: 1, name: "Dr. John Smith", specialization: "Neurologist", img: "https://meditics.temptics.com/assets/img/team-member-1.jpg" },
    { id: 2, name: "Dr. Emily Davis", specialization: "Dermatologist", img: "https://meditics.temptics.com/assets/img/team-member-3.jpg" },
    { id: 3, name: "Dr. Michael Brown", specialization: "Orthopedist", img: "https://meditics.temptics.com/assets/img/team-member-2.jpg" },
    { id: 4, name: "Dr. Sarah Johnson", specialization: "Cardiologist", img: "https://meditics.temptics.com/assets/img/team-member-4.jpg" },
    { id: 5, name: "Dr. David Lee", specialization: "Pediatrician", img: "https://meditics.temptics.com/assets/img/team-member-5.jpg" },
    { id: 6, name: "Dr. Olive Martinez", specialization: "General Physician", img: "https://meditics.temptics.com/assets/img/team-member-6.jpg" },
  ];

  return (
    <section className="relative p-10 bg-gray-50 overflow-hidden">
      {/* 🔹 Hero Section with Floating Elements */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
        <motion.img
          src="/cross.png"
          alt="cross"
          className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Doctors
        </motion.h1>
        <p className="text-gray-300 text-lg">Dedicated professionals ready to care for you</p>
      </div>

      {/* 🔹 Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.id}
            className="relative bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center group overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Doctor Image */}
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg relative"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-transparent opacity-0 group-hover:opacity-30 transition"></div>
            </motion.div>

            {/* Name & Specialization */}
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800">{doc.name}</h3>
            <p className="text-blue-600 mb-4">{doc.specialization}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {[FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* View Profile Button */}
            <Link
              to={`/team/${doc.id}`}
              className="relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10">View Profile</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              {/* Shiny Animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12 animate-[shimmer_2s_infinite]"></span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
}
