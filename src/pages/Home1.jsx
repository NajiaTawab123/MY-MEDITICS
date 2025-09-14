import React from "react";
import { Stethoscope, Brain, UserCheck } from "lucide-react";
import Hero from "../components/Hero";
import HealthProblems from "../components/HealthProblems";
import Qualification from "../components/Qualification";
import Footer from "../components/Footer";

export default function Home1() {
    return (
        <div>
            <Hero />

            {/* About Section */}
            <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10">
                {/* Left Card - Time For Meet */}
                <div className="bg-gradient-to-b from-blue-900 to-blue-600 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 h-[300px] flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4">Time For Meet</h3>
                    <p className="flex justify-between border-b border-gray-400 pb-2 mb-2">
                        <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between border-b border-gray-400 pb-2 mb-2">
                        <span>Saturday - Sunday</span> <span>9:00 PM - 6:00 PM</span>
                    </p>
                    <p className="mt-4 text-sm">For Emergency Care</p>
                    <p className="font-bold text-lg">+236 9658 012</p>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 text-center md:text-left">
                    {/* About label */}
                    <div className="inline-flex items-center border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        <span className="mr-1">💙</span> About Me
                    </div>

                    <h2 className="text-3xl font-bold mb-4">My Journey in Medicine</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I’m Dr. Tushar Raja, a specialized Internal Medicine Specialist with a passion
                        for providing holistic, evidence-based medical care. With over 10 years of
                        experience, I’ve had the privilege of treating thousands of patients with empathy,
                        accuracy, and dedication.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I strongly believe that medicine is not just about treating diseases, but about
                        understanding people, promoting health, and guiding them toward better lifestyles.
                    </p>
                    <p className="italic font-semibold text-blue-700 mb-6">
                        Doctor’s Motto or Belief: Healing begins with listening.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                            Send Message
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                            Video Call
                        </button>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-16 py-12 bg-gray-100">
                {/* Label */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        💙 Services Provided
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4">
                        Medical Services I Provide
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <Stethoscope className="w-10 h-10 text-blue-600 mb-3" />
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            General Health Check-Ups
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm md:text-base">
                            Regular health check-ups help detect potential issues early,
                            ensuring timely treatment, better.
                        </p>
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            Read More →
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <Brain className="w-10 h-10 text-blue-600 mb-3" />
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            Stress & Lifestyle Counseling
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm md:text-base">
                            Personalized counseling to manage stress, improve sleep,
                            build healthy habits, and create a balanced lifestyle.
                        </p>
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            Read More →
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
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
                    </div>
                </div>
            </section>
            {/* New Sections */}
            <HealthProblems />
            <Qualification />
             <Footer/>
        </div>
    );
}
