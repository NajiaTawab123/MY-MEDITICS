// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  Droplet,
  TestTube,
  Dna,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Clinical Pathology",
      desc: "Involves the analysis of blood, urine, and tissues.",
      img: "https://meditics.temptics.com/assets/img/service-1.jpg",
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "Histopathology",
      desc: "Examines tissue samples under a microscope to detect diseases.",
      img: "https://meditics.temptics.com/assets/img/service-2.jpg",
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Biochemistry",
      desc: "Measures chemicals in blood and body fluids to detect disorders.",
      img: "https://meditics.temptics.com/assets/img/service-3.jpg",
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 4,
      title: "Hematology (Blood Tests)",
      desc: "Analyzes blood components to detect anemia, infections, and diseases.",
      img: "https://meditics.temptics.com/assets/img/service-4.jpg",
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 5,
      title: "Urine & Stool Analysis",
      desc: "Helps detect infections, digestive issues, and kidney problems.",
      img: "https://meditics.temptics.com/assets/img/service-5.jpg",
      icon: <TestTube className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 6,
      title: "Hemoglobin (Hb)",
      desc: "Hb is a vital protein in red blood cells that carries oxygen throughout the body.",
      img: "https://meditics.temptics.com/assets/img/service-6.jpg",
      icon: <Dna className="w-8 h-8 text-blue-600" />,
    },
  ];

  // framer-motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "circOut" } },
  };

  return (
    <section className="relative">
      {/* Small embedded CSS for subtle decorative animations */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-slow { animation: floatY 6s ease-in-out infinite; }
        .spin-slow { animation: spinSlow 20s linear infinite; }
        .sparkle { filter: drop-shadow(0 6px 18px rgba(99, 102, 241, 0.08)); }
      `}</style>

      {/* Hero / Title with subtle animated decorative shapes */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
        <div className="relative inline-block z-10">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        </div>
        <p className="text-sm md:text-base mt-2 z-10 relative">
          Home <span className="mx-2">&gt;</span> Services
        </p>

        {/* Decorative aqua cross (shiny) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute right-6 top-6 w-36 h-36 opacity-20 spin-slow"
          aria-hidden
        >
          <defs>
            <linearGradient id="aquaGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#7DE3FF" />
              <stop offset="100%" stopColor="#4CCBF3" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#aquaGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10 L50 90 M10 50 L90 50" />
          </g>
        </svg>

        {/* Soft floating medical circles */}
        <div className="pointer-events-none absolute left-6 bottom-6 w-40 h-40 rounded-full bg-white/5 blur-lg float-slow"></div>
        <div className="pointer-events-none absolute right-16 bottom-16 w-28 h-28 rounded-full bg-white/4 blur-md float-slow"></div>
      </div>

      {/* Services Grid with staggered entrance */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-w-7xl mx-auto"
      >
        {services.map((service) => (
          <motion.article
            key={service.id}
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative bg-gray-50 shadow-lg rounded-xl overflow-hidden group max-w-xs mx-auto hover:shadow-2xl transition-shadow duration-300 h-[520px]"
            aria-labelledby={`service-${service.id}-title`}
          >
            {/* Image (parallax-ish: scales up slightly on hover) */}
            <motion.img
              src={service.img}
              alt={service.title}
              className="h-64 w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6 }}
              draggable="false"
            />

            {/* Icon + Learn More bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <motion.div
                className="bg-blue-50 p-3 rounded-full shadow sparkle"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2 + (service.id * 0.12), repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                aria-hidden
              >
                {service.icon}
              </motion.div>

              <Link
                to={`/services/${service.id}`}
                className="flex items-center gap-2 text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                aria-label={`Learn more about ${service.title}`}
              >
                <ArrowRight className="w-5 h-5" />
                Learn More
              </Link>
            </div>

            {/* Card content */}
            <div className="p-6 text-left flex flex-col justify-between h-[calc(520px-64px-56px)]">
              <div>
                <h3 id={`service-${service.id}-title`} className="text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
              </div>

              {/* subtle CTA + badge */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Trusted
                  </span>
                  <span className="text-xs text-gray-500">Expert Team</span>
                </div>

                <motion.a
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                >
                  View details
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* spacer */}
      <div className="h-20"></div>

      <Footer />
    </section>
  );
}
