"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const handleModalClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).openModal) {
      (window as any).openModal(type);
    } else {
      console.log(`Open modal for: ${type}`);
    }
  };

  return (
    <footer className="bg-[#100500] text-[#F4D28C]/70 pt-16 pb-8 px-6 md:px-12 border-t border-[#D4A017]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        {/* BRAND & TRUST DETAILS (Spans 4 Columns on Large Screens) */}
        <div className="lg:col-span-4 space-y-4">
          <span className="font-serif text-xl text-[#F4D28C] block tracking-wide">
            🕉 मानव जागृति संस्थान
          </span>
          <p className="text-[0.78rem] leading-relaxed text-[#F4D28C]/50 font-sans">
            A sacred trust dedicated to Gau Seva, Sant Seva, Yamuna cleaning,
            and the divine spiritual kathas of Maharaj Ji. Founded with
            blessings in Vrindavan Dham, serving humanity and preserving
            traditional values since 2008.
          </p>
          <div className="bg-[#D4A017]/5 border border-[#D4A017]/15 rounded-xl p-4 text-[0.7rem] text-[#F4D28C]/50 space-y-1 leading-relaxed">
            <strong className="font-serif text-[#F4D28C]/80 block text-[0.75rem] tracking-wider mb-1">
              Trust Registration Details
            </strong>
            <div>Registered Trust No: UP/2008/0012345</div>
            <div>80G Exemption: AAATS1234G</div>
            <div>12A Certificate: Reg/2009/MJS</div>
          </div>
        </div>

        {/* QUICK LINKS (Spans 2 Columns on Large Screens) */}
        <div className="lg:col-span-2">
          <div className="font-serif text-[#F4D28C] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Quick Links
          </div>
          <ul className="space-y-2.5 text-[0.78rem]">
            {[
              { label: "About Trust", href: "/about" },
              { label: "Gau Seva", href: "/gauSeva" },
              { label: "Katha Booking", href: "/kathaBooking" },
              { label: "Braj Yatra", href: "#yatra" },
              { label: "Narayan Kavach", href: "#product" },
              { label: "Temple Restoration", href: "/temple" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-[#F4D28C]/50 hover:text-[#F4D28C] transition duration-300 flex items-center gap-1.5 before:content-['›'] before:text-[#D4A017] before:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DONATE SECTIONS (Spans 2 Columns on Large Screens) */}
        <div className="lg:col-span-2">
          <div className="font-serif text-[#F4D28C] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Donate
          </div>
          <ul className="space-y-2.5 text-[0.78rem]">
            {[
              { label: "Gau Mata Seva", type: "gau" },
              { label: "Temple Fund", type: "temple" },
              { label: "Anna Daan", type: "donate" },
              { label: "Education Fund", type: "donate" },
              { label: "Medical Seva", type: "donate" },
              { label: "General Donation", type: "donate" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  onClick={(e) => handleModalClick(e, item.type)}
                  className="text-[#F4D28C]/50 hover:text-[#F4D28C] transition duration-300 flex items-center gap-1.5 before:content-['›'] before:text-[#D4A017] before:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL & POLICIES (Spans 2 Columns on Large Screens) */}
        <div className="lg:col-span-2">
          <div className="font-serif text-[#F4D28C] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
            Legal & Policies
          </div>
          <ul className="space-y-2.5 text-[0.78rem]">
            {[
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Refund & Return", href: "/refunds" },
            ].map((policy, idx) => (
              <li key={idx}>
                <Link
                  href={policy.href}
                  className="text-[#F4D28C]/50 hover:text-[#F4D28C] transition duration-300 flex items-center gap-1.5 before:content-['›'] before:text-[#D4A017] before:text-sm"
                >
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US (Spans 2 Columns on Large Screens) */}
        <div className="lg:col-span-2 space-y-4">
          <div>
            <div className="font-serif text-[#F4D28C] text-[0.85rem] font-bold mb-4 tracking-wider uppercase">
              Contact Us
            </div>
            <ul className="space-y-2.5 text-[0.78rem] text-[#F4D28C]/50 font-sans">
              <li className="leading-relaxed flex items-start gap-1.5">
                <span className="flex-shrink-0 mt-0.5">📍</span>
                <span>
                  46, Godhuli Puram Colony Main Rd, Posh Colony, Gaudholi Puram
                  Twp, Vrindavan, UP - 281121
                </span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-[#F4D28C] transition">
                <span>📞</span>
                <Link href="tel:+919319087326">+91 93190 87326</Link>
              </li>
              <li className="flex items-center gap-1.5 hover:text-[#F4D28C] transition">
                <span>📞</span>
                <Link href="tel:+919219663835">+91 92196 63835</Link>
              </li>
              <li className="flex items-center gap-1.5 hover:text-[#F4D28C] transition break-all">
                <span>✉️</span>
                <Link href="mailto:brajraj151@gmail.com">brajraj151@gmail.com</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM PANEL */}
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-[#D4A017]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-[0.72rem] text-[#F4D28C]/40 font-sans max-w-[750px] leading-relaxed">
          © 2026 Manav Jagriti Sansthan. All rights reserved. Donations are
          tax-exempt under Section 80G of the Income Tax Act.
        </p>

        {/* SOCIAL LINK BUTTONS */}
        <div className="flex gap-2.5">
          {[
            { label: "f", href: "#", title: "Facebook" },
            { label: "▶", href: "#", title: "YouTube" },
            { label: "📷", href: "#", title: "Instagram" },
            { label: "🕭", href: "#", title: "Twitter" },
            {
              label: "💬",
              href: "https://wa.me/919319087326",
              title: "WhatsApp",
            },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              title={social.title}
              className="w-9 h-9 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#F4D28C]/60 text-sm hover:bg-[#D4A017]/20 hover:text-[#F4D28C] hover:scale-105 transition duration-300"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
