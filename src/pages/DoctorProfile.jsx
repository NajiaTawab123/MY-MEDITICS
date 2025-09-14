import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors";
import Footer from "../components/Footer";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-red-600">Doctor Not Found</h2>
        <Link to="/team" className="text-blue-600 underline mt-4 block">Back to Team</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section - full width */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden w-full">
        <div className="relative inline-block">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1> 
        </div>
        <p className="text-sm md:text-base mt-2">
          Home <span className="mx-2">&gt;</span> Services
        </p>
      </div>

      {/* Container for Doctor Profile */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
        {/* Doctor Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex justify-center md:block">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-52 h-52 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">{doctor.name}</h2>
            <p className="text-gray-600 mt-1 text-lg">{doctor.specialization}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p><strong>Email:</strong> {doctor.email}</p>
              <p><strong>Phone:</strong> {doctor.phone}</p>
              <p><strong>Experience:</strong> {doctor.experience} years</p>
            </div>

            <a
              href="#appointment"
              className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Make Appointment
            </a>
          </div>
        </div>

        {/* Introduction */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Introducing the Doctor:</h3>
          <p className="text-gray-700 leading-relaxed">{doctor.introduction}</p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { label: "Recovery", value: doctor.stats.recovery },
            { label: "Satisfaction", value: doctor.stats.satisfaction },
            { label: "Accuracy", value: doctor.stats.accuracy },
            { label: "Surgery", value: doctor.stats.surgery },
            { label: "Medicine", value: doctor.stats.medicine },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                {stat.value}%
              </div>
              <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="mt-12" id="appointment">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Apply for Appointment</h3>
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
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Appointment Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DoctorProfile;
