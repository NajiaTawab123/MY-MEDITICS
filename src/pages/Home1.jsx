import React from "react";
import { Stethoscope, Brain, UserCheck } from "lucide-react";
import Hero from "../components/Hero";
import HealthProblems from "../components/HealthProblems";
import Qualification from "../components/Qualification";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home1() {
  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Left Card - Time For Meet */}
        <motion.div
          className="bg-gradient-to-b from-blue-900 to-blue-600 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 h-[300px] flex flex-col justify-center"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Time For Meet</h3>
          <p className="flex justify-between border-b border-gray-400 pb-2 mb-2">
            <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
          </p>
          <p className="flex justify-between border-b border-gray-400 pb-2 mb-2">
            <span>Saturday - Sunday</span> <span>9:00 PM - 6:00 PM</span>
          </p>
          <p className="mt-4 text-sm">For Emergency Care</p>
          <p className="font-bold text-lg animate-pulse">+236 9658 012</p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 shadow-sm hover:scale-105 transition">
            <span className="mr-1">💙</span> About Me
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            My Journey in Medicine
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I’m Dr. Tushar Raja, a specialized Internal Medicine Specialist with
            a passion for providing holistic, evidence-based medical care. With
            over 10 years of experience, I’ve had the privilege of treating
            thousands of patients with empathy, accuracy, and dedication.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I strongly believe that medicine is not just about treating
            diseases, but about understanding people, promoting health, and
            guiding them toward better lifestyles.
          </p>
          <p className="italic font-semibold text-blue-700 mb-6">
            Doctor’s Motto or Belief: Healing begins with listening.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Send Message
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow"
            >
              Video Call
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-cyan-200 rounded-full blur-2xl animate-pulse"></div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            💙 Services Provided 💙
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
            Medical Services I Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md p-6 transition"
          >
            <Stethoscope className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              General Health Check-Ups
            </h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Regular health check-ups help detect potential issues early,
              ensuring timely treatment and better outcomes.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md p-6 transition"
          >
            <Brain className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Stress & Lifestyle Counseling
            </h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Personalized counseling to manage stress, improve sleep, build
              healthy habits, and create a balanced lifestyle.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md p-6 transition"
          >
            <UserCheck className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Referral to Specialists
            </h3>
            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Accurate assessments with timely referrals to trusted medical
              specialists, ensuring you receive expert care.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </motion.div>
        </div>
      </section>

      {/* New Sections */}
      <HealthProblems />
      <Qualification />

      {/* ✅ Client’s Testimonials */}
      <section className="px-6 md:px-16 py-16 bg-gray-50 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold mb-2 uppercase">
            Client’s Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Clients Feedbacks
          </h2>
        </motion.div>

        <div className="w-full overflow-hidden mt-10">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 w-80 flex-shrink-0 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${i}5.jpg`}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Kathryn Murphy</h4>
                    <p className="text-sm text-gray-500">Medical Assistant</p>
                  </div>
                </div>
                <p className="text-gray-600">
                 ⭐️⭐️⭐️⭐️⭐️
"Dr. Tushar is truly amazing! He takes the time to listen carefully and explains everything in a way I can understand. I always feel cared for and respected during my visits."
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ Consult Doctor Online */}
      <section className="px-6 md:px-16 py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Health, Your Convenience
            </h2>
            <p className="text-lg mb-6">
              Consult Your Doctor Online — Anytime, Anywhere. Say goodbye to
              long queues and unnecessary travel. With our secure video
              consultation service, you can now talk to experienced doctors from
              the comfort of your home.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-blue-100">
              <li>Speak with certified specialists in real time</li>
              <li>Easy appointment booking via mobile or web</li>
              <li>Private, secure, and confidential video calls</li>
              <li>Available 7 days a week, including evenings</li>
            </ul>
            <button className="bg-lime-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition">
              Book A Video Call
            </button>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/free-photo/doctor-smiling_23-2147896184.jpg"
              alt="Doctor"
              className="rounded-2xl shadow-lg max-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Doctor’s Blog */}
      <section className="px-6 md:px-16 py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://img.freepik.com/free-vector/medical-healthcare-blue-background_1017-26807.jpg')] bg-cover bg-center animate-pulse"></div>

        <div className="relative text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2 uppercase">
            Doctor's Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Your Health, My Words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "The Medical Minute — Quick Tips for Better Living",
              img: "https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope_1098-21876.jpg",
            },
            {
              title: "Healthy Habits for Busy Professionals",
              img: "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611193.jpg",
            },
            {
              title: "Ask the Doctor — Real Answers, Real Care",
              img: "https://img.freepik.com/free-photo/healthcare-workers-concept_23-2148830439.jpg",
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  11 March 2025 • Event
                </p>
                <h3 className="text-lg font-semibold mb-4">{post.title}</h3>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
