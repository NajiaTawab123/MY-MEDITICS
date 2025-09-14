import React from "react";
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

  return (
    <section>
      {/* 🔹 Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center py-20 overflow-hidden">
        <div className="relative inline-block">
          <img
            src="/cross.png"
            alt="cross"
            className="absolute -left-24 top-[60%] -translate-y-1/2 w-20 opacity-70"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        </div>
        <p className="text-sm md:text-base mt-2">
          Home <span className="mx-2">&gt;</span> Services
        </p>
      </div>

      {/* 🔹 Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-gray-50 shadow-lg rounded-xl overflow-hidden group max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 h-[520px]" // Increased height
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="h-64 w-full object-cover"
            />

            {/* Icon + Learn More */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="bg-blue-50 p-3 rounded-full shadow">
                {service.icon}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="flex items-center gap-2 text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Learn More
              </Link>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Spacer before Footer */}
      <div className="h-20"></div>

      <Footer />
    </section>
  );
}
