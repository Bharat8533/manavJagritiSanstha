"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// 1. Navigation Links का Data Structure
const NAV_LINKS = [
  { label: "Home", href: "/", icon: "" },
  { label: "About", href: "/about", icon: "ℹ️" },
  { label: "Gau Seva", href: "/gauseva", icon: "🐄" },
  { label: "Katha Booking", href: "/kathaBooking", icon: "📿" },
  { label: "Braj Darshan", href: "/brajDarshan", icon: "🛕" },
  { label: "Temples", href: "/temple", icon: "🏛" },
  { label: "Gurukulam", href: "/gurukulam", icon: "✨" },
  { label: "Blogs", href: "/blogs", icon: "📖" },
  { label: "Contact", href: "/contact", icon: "📞" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => setIsMobileOpen(!isMobileOpen);

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).openModal) {
      (window as any).openModal("donate");
    } else {
      console.log("Open donate modal");
    }
  };

  return (
    <>
      {/* DESKTOP & BASE NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all backdrop-blur-xs duration-400 px-8 ${
          isScrolled
            ? "bg-[#100500] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between h-[70px]">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-[#F4D28C] text-[1.1rem] font-bold leading-tight drop-shadow-[0_0_20px_rgba(212,160,23,0.5)] uppercase">
              🕉 Manav Jagriti Sansthaan
              <span className="text-[0.55rem] tracking-[0.15em] text-[rgba(244,210,140,0.7)] block">
                मानव जागृति संस्थान — Spiritual Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Looping dynamically) */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[rgba(244,210,140,0.85)] text-[0.78rem] font-medium tracking-wide uppercase transition duration-300 hover:text-[#F4D28C]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Desktop Donate Button */}
            <li>
              <Link
                href="/donate"
                className="bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white py-1.5 px-4 rounded-[20px] font-semibold text-[0.78rem] shadow-[0_4px_15px_rgba(212,160,23,0.4)] block transition transform hover:scale-105"
              >
                🙏 Donate Now
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileNav}
            className="block md:hidden bg-none border-none text-[#F4D28C] text-2xl cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      <div
        className={`fixed top-[70px] left-0 right-0 bg-[rgba(122,31,14,0.98)] text-center p-4 z-[998] flex flex-col gap-2 transition-all duration-300 ease-in-out border-t border-[rgba(244,210,140,0.1)] md:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Mobile Navigation Links (Looping dynamically) */}
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={toggleMobileNav}
            className="text-[#F4D28C] py-2 text-sm border-b border-[rgba(244,210,140,0.05)] hover:bg-[rgba(212,160,23,0.05)] transition flex items-center justify-center gap-2"
          >
            {link.icon && <span>{link.icon}</span>}
            {link.label === "Katha"
              ? "Katha Booking"
              : link.label === "About"
                ? "About Trust"
                : link.label}
          </Link>
        ))}

        {/* Mobile Donate Button */}
        <Link
          href="#"
          onClick={(e) => {
            handleDonateClick(e);
            toggleMobileNav();
          }}
          className="text-[#F4D28C] font-semibold bg-[rgba(212,160,23,0.1)] mt-2 py-3 rounded-lg border border-[rgba(212,160,23,0.2)] hover:bg-[rgba(212,160,23,0.2)] transition"
        >
          🙏 Donate Now
        </Link>
      </div>
    </>
  );
}
