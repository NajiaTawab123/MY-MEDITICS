import React from "react";
import { FaUserMd, FaHospitalUser, FaHeartbeat } from "react-icons/fa";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <section className="w-full">
      {/* 🔹 Hero Section */}
<div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
  {/* Heading with Left Cross Only */}
  <div className="relative inline-block">
    <img
      src="/cross.png"
      alt="cross"
      className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
    />
    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
  </div>

  <p className="text-sm md:text-base mt-2">
    Home <span className="mx-2">&gt;</span> About
  </p>

  {/* Decorative Cross Background */}
  <img src="/cross.png" alt="cross" className="absolute top-6 left-6 w-12 opacity-40" />
  <img src="/cross.png" alt="cross" className="absolute bottom-6 right-6 w-12 opacity-40" />
  <img src="/cross.png" alt="cross" className="absolute top-10 right-10 w-14 opacity-30" />
  <img src="/cross.png" alt="cross" className="absolute bottom-10 left-20 w-14 opacity-30" />
</div>

      {/* 🔹 Committed Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-white">
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Main Image with Rounded Corners */}
          <img
            src="https://meditics.temptics.com/assets/img/about-2-img-1.jpg"
            alt="Committed Care"
            className="rounded-2xl shadow-lg w-[70%] object-cover"
          />
          {/* Small Overlapping Image (Top Right) */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ2FhBmo_iJYU7rWs1rsVbCylYbudiZfcoA&s"
            alt="Committed Care Small"
            className="absolute -top-8 right-[15%] w-[35%] rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-600 font-semibold mb-2 uppercase">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Committed to Your Care Every Step of the Way
          </h2>
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
              <li key={i} className="flex items-center gap-2 font-semibold">
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                {point}
              </li>
            ))}
          </ul>

          {/* Author */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="CEO"
              className="w-14 h-14 rounded-full border"
            />
            <div>
              <p className="font-bold text-gray-800">Dr. John Doe</p>
              <p className="text-sm text-gray-500">CEO, Founder Of CarePoint</p>
            </div>
            <img
              src="https://meditics.temptics.com/assets/img/signature.png"
              alt="Signature"
              className="h-10 ml-auto"
            />
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            More About →
          </button>
        </div>
      </div>

      {/* 🔹 Why Choose Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-blue-950 text-white">
        {/* Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">

          <img
            src="https://meditics.temptics.com/assets/img/about-2-img-2.jpg"
            alt="Why Choose Us"
            className="shadow-lg w-[70%] object-cover"
          />
          {/* Small Overlapping Image (Bottom Right) */}
          <img
            src="https://media.istockphoto.com/id/1094388752/photo/female-doctor-pushing-senior-patient-on-wheelchair.jpg?s=612x612&w=0&k=20&c=eEW5Q64Vi5ClVLQHt0hBv_F7mfeHR2z9t-wkNVYedu8="
            alt="Why Choose Us Small"
            className="absolute -bottom-8 right-[15%] w-[35%] rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-300 font-semibold mb-2 uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Where Compassion Meets Excellence
          </h2>
          <p className="text-gray-200 mb-6">
            That's why we are committed to delivering world-class medical
            services with compassion, innovation, and integrity — putting your
            health and comfort first.
          </p>

          {/* Points with Icons */}
          <div className="space-y-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaUserMd size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Personalized Patient Care</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaHospitalUser size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">World-Class Medical Experts</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-blue-950 p-3 rounded-full">
                <FaHeartbeat size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Advanced Healthcare Services</h4>
                <p className="text-gray-300">
                  Our team includes highly trained doctors, nurses, and
                  specialists, each dedicated to providing the best possible care.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-950 transition">
            APPOINTMENT NOW
          </button>
        </div>
      </div>

      <Comments />

      {/* 🔹 Online Consultation Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-20 bg-gray-50">
        {/* Content (Left Side) */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-600 font-semibold mb-2 uppercase">
            Your Health, Your Convenience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Consult Your Doctor Online — Anytime, Anywhere
          </h2>
          <p className="text-gray-600 mb-6">
            Say goodbye to long queues and unnecessary travel. With our secure video
            consultation service, you can now talk to experienced doctors from the
            comfort of your home.
          </p>

          {/* Points */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Speak with certified specialists in real time",
              "Easy appointment booking via mobile or web",
              "Private, secure, and confidential video calls",
              "Available 7 days a week, including evenings",
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2 font-semibold">
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                {point}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              Book A Video Call
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              See Available Doctors
            </button>
          </div>
        </div>

      {/* Images (Right Side) */}
<div className="relative w-full md:w-1/2 flex justify-center">
  {/* Main Circle Image (Bari ki) */}
  <img
    src="https://meditics.temptics.com/assets/img/inner-video-call.png"
    alt="Online Consultation"
    className="w-80 h-80 object-cover rounded-full shadow-lg relative z-10"
  />

  {/* Overlapping Small Circle Image */}
  <img
    src="https://meditics.temptics.com/assets/img/inner-video-call-img-2.png"
    alt="Video Call"
    className="absolute bottom-8 right-12 w-32 h-32 object-cover rounded-full shadow-md border-4 border-white z-20"
  />
</div>

      </div>

      <Footer />
    </section>
  );
}
