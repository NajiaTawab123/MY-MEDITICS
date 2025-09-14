import React from "react";

export default function HealthProblems() {
  return (
    <section className="bg-blue-950 text-white py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Text Section */}
        <div>
          <div className="inline-flex items-center border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            💚 Do You Need Emergency Care
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Do You Have Health Problems
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow inline-block"
          >
            I Need Help →
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 mt-10"></div>
    </section>
  );
}
