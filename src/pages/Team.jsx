import React from "react";
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
    <section className="p-10 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
        <div className="relative inline-block">
          <img src="/cross.png" alt="cross" className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Doctor Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 mb-4 shadow-md">
              <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
            </div>

            {/* Name & Specialization */}
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800">{doc.name}</h3>
            <p className="text-blue-600 mb-4">{doc.specialization}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
            </div>

            {/* View Profile Button */}
            <Link
              to={`/team/${doc.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition shadow-md hover:shadow-lg"
            >
              View Profile <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
}
