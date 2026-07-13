"use client";

import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const phoneNumber = "919319087326";
  const message = "Hello Manav Jagriti Sanstha";
  return (
    // Background: Creamy Light | Text: Deep Brown
    <footer className="bg-[#FDFBF7] text-[#5D4037] pt-16 pb-8 px-6 md:px-12 border-t border-[#D4A017]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        {/* BRAND & TRUST DETAILS */}
        <div className="lg:col-span-4 space-y-4 bg-white/50 p-6 rounded-2xl border border-[#D4A017]/10 shadow-sm">
          <div className="w-32">
            <img
              src="https://mjsvrindavan.com/wp-content/uploads/2025/09/logo.png"
              alt="Logo"
            />
          </div>
          <p className="text-[0.9rem] leading-relaxed text-[#5D4037]/70 font-sans">
            Manav Jagriti Sanstha is a charitable trust which was established in
            the holy presence of Nimbark Go Goverdhan Upashak Aacharay Shri
            Brajraj ji Maharaj (Founder), under provision of Indian Trust Act on
            20th April 2006.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:col-span-2">
          <div className="font-serif text-[#A63D00] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Quick Links
          </div>
          <ul className="space-y-3">
            {[
              {
                label: "About Trust",
                href: "/about",
              },
              {
                label: "Katha Booking",
                href: "/kathaBooking",
              },
              {
                label: "Gau Seva",
                href: "/gauseva",
              },
              {
                label: "Braj Darshan",
                href: "/brajDarshan",
              },
              {
                label: "Temple Restoration",
                href: "/temple",
              },
              {
                label: "Gallery",
                href: "/gallery",
              },
            ].map((obj, idx) => (
              <li key={idx}>
                <Link
                  href={obj.href}
                  className="text-[#5D4037]/70 hover:text-[#A63D00] transition flex items-center gap-2"
                >
                  <span className="text-[#D4A017]">›</span> {obj.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL & POLICIES */}
        <div className="lg:col-span-2">
          <div className="font-serif text-[#A63D00] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Legal
          </div>
          <ul className="space-y-3">
            {[
              {
                label: "Terms & Conditions",
                href: "/terms",
              },
              {
                label: "Privacy Policy",
                href: "/privacy",
              },
              {
                label: "Refund & Return",
                href: "/refunds",
              },
            ].map((obj, idx) => (
              <li key={idx}>
                <Link
                  href={obj.href}
                  className="text-[#5D4037]/70 hover:text-[#A63D00] transition flex items-center gap-2"
                >
                  <span className="text-[#D4A017]">›</span> {obj.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-serif text-[#A63D00] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Contact Us
          </div>
          <ul className="space-y-3 text-[#5D4037]/80">
            <li className="flex items-start gap-2">
              <span className="mt-1">📍</span>
              <span>Manav Jagriti Sanstha, Rajpur Vrindavan, 281121</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#A63D00] transition">
              <span>📞</span>{" "}
              <Link href="tel:+919319087326">+91 93190 87326</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#A63D00] transition">
              <span>📞</span>{" "}
              <Link href="tel:+919319087326">+91 92196 63835</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#A63D00] transition">
              <span>✉️</span>{" "}
              <Link href="mailto:manavjagriti19@gmail.com">
                manavjagriti19@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-[#D4A017]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <p className="text-[0.75rem] text-[#5D4037]/60">
          © {new Date().getFullYear()} Manav Jagriti Sanstha. All rights
          reserved. Donations are tax-exempt.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex gap-3">
          {[
            {
              label: FaFacebookF,
              href: "https://www.facebook.com/manavjagritisanstha/",
            },
            {
              label: FaYoutube,
              href: "https://www.youtube.com/@manavjagritisanstha",
            },
            {
              label: FaInstagram,
              href: "https://www.instagram.com/manavjagritisanstha/",
            },
            {
              label: FaWhatsapp,
              href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            },
          ].map((obj, idx) => (
            <Link
              href={obj.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="w-9 h-9 rounded-full bg-white border border-[#D4A017]/30 flex items-center justify-center text-[#A63D00] hover:bg-[#D4A017] hover:text-white transition cursor-pointer shadow-sm"
            >
              <obj.label size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
