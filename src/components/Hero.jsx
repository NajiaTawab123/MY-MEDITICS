import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-blue-950 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 relative overflow-hidden">
            {/* Left Side */}
            <div className="max-w-xl">
                <span className="bg-transparent border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    ❤️ Hi I Am
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-snug">
                    Meet Dr. Tushar Raja <br /> — Your Trusted Healthcare Partner
                </h1>
                <p className="mt-4 text-gray-300 text-lg">
                    Dr. Tushar is a highly experienced and compassionate{" "}
                    <span className="italic">
                        [General Physician / Cardiologist / Dermatologist]
                    </span>{" "}
                    dedicated to patient care.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                        Book Appointment
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition">
                        View Schedule
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="relative mt-10 md:mt-0 flex flex-row items-start gap-6">
                {/* Doctor Image ke Peechay Cross */}
                <motion.img
                    src="/cross.png"
                    alt="Cross"
                    className="absolute inset-0 m-auto 
               w-[200px] h-[200px] 
               sm:w-[300px] sm:h-[300px] 
               md:w-[400px] md:h-[400px] 
               lg:w-[500px] lg:h-[500px] 
               opacity-20 z-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Doctor Image */}
                <img
                    src="/banner-img.png"
                    alt="Doctor"
                    className="relative z-10 rounded-lg drop-shadow-lg w-[300px] md:w-[400px]"
                />

                {/* Animated Quote Box */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-blue-800 p-4 rounded-lg shadow-md max-w-xs 
               z-20
               -mt-4 md:-mt-12
               mx-auto md:mx-0"
                >
                    <p className="italic text-sm md:text-base">
                        "My mission is to treat every patient with care, respect, and the highest
                        standard of medical knowledge"
                    </p>
                    <p className="text-lime-400 mt-2 font-semibold text-sm md:text-base">
                        — Robel Roy, USY
                    </p>
                </motion.div>

            </div>




            {/* Social Icons - Fixed Right Side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaTwitter />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaYoutube />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaInstagram />
                </a>
            </div>

            {/* Social Icons - Mobile Responsive (bottom center) */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaTwitter />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaYoutube />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
                >
                    <FaInstagram />
                </a>
            </div>
        </section>
    );
}
