import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-red-600">Doctor Not Found</h2>
        <Link to="/team" className="text-blue-600 underline mt-4 block">
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden w-full">
        <div className="relative inline-block">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70 animate-pulse"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Our Doctors
          </h1>
        </div>
        <p className="text-sm md:text-base mt-2 animate-fadeIn delay-200">
          Home <span className="mx-2">&gt;</span> Services
        </p>
      </div>

      {/* Doctor Profile Container */}
      <motion.div
        className="max-w-5xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Doctor Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            className="flex justify-center md:block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-52 h-52 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">{doctor.name}</h2>
            <p className="text-gray-600 mt-1 text-lg">{doctor.specialization}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.phone}
              </p>
              <p>
                <strong>Experience:</strong> {doctor.experience} years
              </p>
            </div>

            <a
              href="#appointment"
              className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105"
            >
              Make Appointment
            </a>
          </div>
        </div>

        {/* Introduction */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Introducing the Doctor:
          </h3>
          <p className="text-gray-700 leading-relaxed">{doctor.introduction}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[
            { label: "Recovery", value: doctor.stats.recovery },
            { label: "Satisfaction", value: doctor.stats.satisfaction },
            { label: "Accuracy", value: doctor.stats.accuracy },
            { label: "Surgery", value: doctor.stats.surgery },
            { label: "Medicine", value: doctor.stats.medicine },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                {stat.value}%
              </div>
              <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Appointment Form */}
        <motion.div
          className="mt-12"
          id="appointment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Apply for Appointment
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option>{doctor.name}</option>
            </select>
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option>{doctor.specialization}</option>
            </select>

            <div className="col-span-1 md:col-span-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-2" required />
                I agree to terms and conditions.
              </label>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
              >
                Appointment Now
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DoctorProfile;



