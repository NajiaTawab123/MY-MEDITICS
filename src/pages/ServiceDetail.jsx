import React, { useState } from "react";
import Footer from "../components/Footer";

export default function ServicesDetail() {
  const [active, setActive] = useState(0);

  const services = [
    "General Health Consultation",
    "Chronic Disease Management",
    "Online Video Consultation",
    "Preventive Health Checkups",
    "Women's & Men's Health",
    "Family Health Services",
  ];

  const details = [
    {
      title: "Personalized Stress & Lifestyle Counseling",
      quote:
        "This blog post hits the mark perfectly for our target audience — busy professionals who care about their health but struggle with time. — John Doe",
      whatWeOffer: [
        "One-on-one virtual sessions with certified counselors",
        "Stress and anxiety management techniques",
        "Sleep improvement & energy-boosting strategies",
        "Personalized nutrition and wellness plans",
        "Habit-building for a healthier, more balanced life",
        "Confidential, judgment-free care",
      ],
      features: [
        "Stress Reduction Coaching: Learn to manage pressure burnout, and daily anxiety with proven techniques",
        "Personalized Nutrition & Wellness Plans: Build healthier routines that support productivity and rest.",
        "Lifestyle Planning: Create sustainable habits for nutrition, exercise, and sleep.",
        "One-on-One Counseling: Talk to licensed professionals in a private, secure online setting.",
        "Mental Wellness Support: Gain tools to improve focus, mood, and overall life satisfaction.",
      ],
      why: "Improving your lifestyle isn't just about avoiding illness — it's about living better, feeling stronger, and thinking clearer every day.",
      img: "https://meditics.temptics.com/assets/img/service-details-img.jpg",
    },
    {
      title: "Chronic Disease Management",
      quote:
        "Managing long-term conditions requires consistent support and smart strategies. — Dr. Sarah Lee",
      whatWeOffer: [
        "Ongoing monitoring of chronic illnesses",
        "Medication management and reminders",
        "Diet and lifestyle coaching",
        "Teleconsultations with specialists",
        "24/7 health tracking support",
      ],
      features: [
        "Personalized Care Plans",
        "Medication Adherence Support",
        "Specialist Consultations",
        "Digital Health Monitoring",
        "Holistic Lifestyle Management",
      ],
      why: "With the right support, patients can live healthier, more fulfilling lives despite chronic conditions.",
      img: "https://meditics.temptics.com/assets/img/service-img-2.jpg",
    },
    {
      title: "Online Video Consultation",
      quote:
        "Healthcare at your fingertips — connect with doctors anytime, anywhere. — Dr. James Smith",
      whatWeOffer: [
        "Virtual appointments with licensed doctors",
        "Instant prescriptions and follow-ups",
        "Confidential, secure video calls",
        "Accessible across devices",
      ],
      features: [
        "24/7 Online Consultations",
        "Fast Prescriptions",
        "Specialist Access",
        "User-friendly Platform",
        "Confidential & Secure",
      ],
      why: "Convenient access to doctors saves time, reduces travel, and ensures timely care.",
      img: "https://meditics.temptics.com/assets/img/service-img-3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Content + Image */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          {/* Image */}
          <img
            src={details[active].img}
            alt="Service"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />

          {/* Content */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {details[active].title}
            </h3>

            {/* Quote */}
            <div className="bg-blue-100 border-l-4 border-blue-500 text-gray-700 italic p-4 mb-6 rounded-md">
              {details[active].quote}
            </div>

            {/* What We Offer */}
            <h4 className="text-2xl font-semibold mb-3">What We Offer:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {details[active].whatWeOffer.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

            {/* Key Features */}
            <h4 className="text-2xl font-semibold mb-3">Key Features:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {details[active].features.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

            {/* Why It Matters */}
            <h4 className="text-2xl font-semibold mb-3">Why It Matters:</h4>
            <p className="text-gray-700">{details[active].why}</p>
          </div>
        </div>

        {/* Right Vertical Menu + Contact */}
        <div className="w-full md:w-1/4 flex flex-col gap-6 h-full">
          {/* Gray Div containing Heading + Services */}
          <div className="bg-gray-200 p-4 rounded-xl shadow-lg flex flex-col gap-4">
            {/* Heading */}
            <div className="text-center font-bold text-xl text-gray-800">
              Our Services
            </div>

            {/* Services Menu */}
            <ul className="flex flex-col gap-3 overflow-auto">
              {services.map((service, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer px-3 py-2 rounded-lg transition 
                    ${
                      active === index
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-700 hover:bg-blue-100"
                    }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Small Dark Blue Contact Box */}
          <div className="bg-blue-900 text-white p-6 rounded-lg flex flex-col justify-between h-64 shadow-lg">
            <div>
              <p className="font-semibold text-lg">
                Have Additional Questions?
              </p>
              <p>3rd Avenue, 83 Manhattan, London, UK</p>
              <p>+1890 123 456</p>
              <p>support@example.com</p>
            </div>

            <div className="mt-4 text-center">
              <a
                href="/contact"
                className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded transition inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gap above footer */}
      <div className="mt-12"></div>
      <Footer />
    </section>
  );
}


