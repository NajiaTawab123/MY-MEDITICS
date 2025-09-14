import React from "react";
import { FaUserMd, FaHospitalUser, FaHeartbeat, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const reviews = [
  {
    name: "Sarah Ahmed",
    text: "The doctors were so kind and attentive. They made me feel safe and cared for during my treatment.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ali Khan",
    text: "Excellent service and professional staff! They explained everything clearly and gave me confidence.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Hussain",
    text: "The hospital environment was clean and modern. I felt like I was in very safe hands.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export default function AboutUs() {
  return (
    <section className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70 animate-bounce-slow"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        </motion.div>
        <p className="text-sm md:text-base mt-2">
          Home <span className="mx-2">&gt;</span> About
        </p>
        <motion.img
          src="/cross.png"
          alt="cross"
          className="absolute top-6 left-6 w-12 opacity-40 animate-pulse-slow"
        />
      </div>

      {/* 🔹 Committed Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <motion.img
            src="https://meditics.temptics.com/assets/img/about-2-img-1.jpg"
            alt="Committed Care"
            className="rounded-2xl shadow-lg w-[70%] object-cover hover:scale-105 transition-transform duration-500"
          />
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ2FhBmo_iJYU7rWs1rsVbCylYbudiZfcoA&s"
            alt="Committed Care Small"
            className="absolute -top-8 right-[15%] w-[35%] rounded-xl shadow-md hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-600 font-semibold mb-2 uppercase">About Us</p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Committed to Your Care Every Step of the Way
          </motion.h2>
          <p className="text-gray-600 mb-6">
            With a team of world-class doctors, experienced nurses, and dedicated
            healthcare professionals, we are committed to delivering compassionate,
            high-quality medical care to every patient.
          </p>

          {/* Points */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Highly Qualified Specialists",
              "Advanced Medical Equipment",
              "Safe, Comfortable Environment",
              "24/7 Emergency Services",
              "Patient-Centered Approach",
              "Affordable, Transparent Pricing",
            ].map((point, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            More About →
          </motion.button>
        </div>
      </motion.div>

      {/* 🔹 Why Choose Us Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <motion.img
            src="https://meditics.temptics.com/assets/img/about-2-img-2.jpg"
            alt="Why Choose Us"
            className="shadow-lg w-[70%] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-blue-300 font-semibold mb-2 uppercase">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Where Compassion Meets Excellence
          </h2>
          <p className="text-gray-200 mb-6">
            Delivering world-class medical services with compassion, innovation, and integrity.
          </p>

          {/* Points with Icons */}
          <div className="space-y-6 mb-6">
            {[{
              icon: <FaUserMd size={22} />,
              title: "Personalized Patient Care",
              desc: "Highly trained doctors, nurses, and specialists dedicated to the best care."
            }, {
              icon: <FaHospitalUser size={22} />,
              title: "World-Class Medical Experts",
              desc: "Experienced professionals using advanced techniques and technologies."
            }, {
              icon: <FaHeartbeat size={22} />,
              title: "Advanced Healthcare Services",
              desc: "State-of-the-art medical equipment ensuring patient safety and comfort."
            }].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-white text-blue-950 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition"
            whileHover={{ scale: 1.05 }}
          >
            APPOINTMENT NOW
          </motion.button>
        </div>
      </motion.div>

      {/* 🔹 Patient Reviews Section */}
      <motion.div
        className="px-6 md:px-16 py-20 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-blue-600 font-semibold mb-2 uppercase">Our Happy Patients</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What They Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real stories from our patients show how dedicated our team is in providing
          the best healthcare services. We take pride in delivering professional care with compassion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-3 border-2 border-blue-600"
              />
              <h4 className="font-semibold text-lg text-blue-900">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🔹 Online Consultation Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Content (Left Side) */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-blue-600 font-semibold mb-2 uppercase">Your Health, Your Convenience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Consult Your Doctor Online — Anytime, Anywhere
          </h2>
          <p className="text-gray-600 mb-6">
            Secure video consultation service from the comfort of your home.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              Book A Video Call
            </motion.button>
            <motion.button
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              See Available Doctors
            </motion.button>
          </div>
        </div>

        {/* Images (Right Side) */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <motion.img
            src="https://meditics.temptics.com/assets/img/inner-video-call.png"
            alt="Online Consultation"
            className="w-80 h-80 object-cover rounded-full shadow-lg relative z-10 hover:scale-105 transition-transform duration-500"
          />
          <motion.img
            src="https://meditics.temptics.com/assets/img/inner-video-call-img-2.png"
            alt="Video Call"
            className="absolute bottom-8 right-12 w-32 h-32 object-cover rounded-full shadow-md border-4 border-white z-20 hover:scale-110 transition-transform duration-500"
          />
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}


