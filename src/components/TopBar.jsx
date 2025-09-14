import React from "react";
import { Phone, Clock, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden md:flex text-white text-sm w-full bg-blue-950 overflow-hidden">
      {/* Left Section (Blue with Diagonal Cut) */}
      <div className="relative bg-blue-600 flex items-center gap-6 px-6 py-2 w-2/5 clip-diagonal">
        <span className="flex items-center gap-2">
          <Phone size={16} /> Helpline: +208-6666-0112
        </span>
        <span className="flex items-center gap-2">
          <Clock size={16} /> Mon - Fri 8.00 am - 6.00 pm
        </span>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center px-6 py-2">
        <span className="flex items-center gap-2">
          <Mail size={16} /> info@example.com
        </span>
      </div>
    </div>
  );
}
