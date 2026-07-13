"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9319087326";
  const message = "Hello Manav Jagriti Sanstha";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Label Text - sirf hover par dikhega */}
      <span className="bg-white text-[#25D366] px-3 py-1 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Need Help?
      </span>

      {/* Button with Pulse Effect */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={32} />

        {/* Pulse animation rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
