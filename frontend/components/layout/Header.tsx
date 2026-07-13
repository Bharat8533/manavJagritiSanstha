"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import DonateButton from './DonateButton'

// Define the keys to match your JSON structure
const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "gauseva", href: "/gauseva" },
  { key: "kathaBooking", href: "/kathaBooking" },
  { key: "brajDarshan", href: "/brajDarshan" },
  { key: "temples", href: "/temple" },
  { key: "gurukulam", href: "/gurukulam" },
  { key: "blogs", href: "/blogs" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const t = useTranslations("Navigation"); // Assuming your translations namespace

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileNav = () => setIsMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 py-3 md:py-2 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="mx-auto flex items-center justify-between h-[70px] max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={closeMobileNav}
          >
            <img
              src="https://mjsvrindavan.com/wp-content/uploads/2025/09/logo.png"
              alt="Logo"
              className="w-24 sm:w-28 h-auto transition-all duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-5 lg:gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#5D4037] text-[0.8rem] md:text-[0.85rem] font-semibold tracking-wide uppercase transition hover:text-[#D4A017] whitespace-nowrap"
                >
                  {link.key}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Link
              href="/donate"
              className="bg-[#D4A017] hover:bg-[#C3950C] text-white py-2.5 px-6 rounded-[20px] font-semibold text-[0.85rem] shadow-lg transition-all active:scale-95"
            >
              {"donate"}
            </Link> */}
            <DonateButton />
            <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileNav}
            className="lg:hidden text-[#5D4037] text-3xl p-2 -mr-2 active:scale-90 transition-transform"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[70px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-[998] lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-2 max-h-[85vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileNav}
              className="text-[#5D4037] py-4 uppercase px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50 hover:text-[#D4A017] rounded-xl transition-all active:bg-gray-100"
            >
              {link.key}
            </Link>
          ))}
          {/* Mobile Donate & Language */}
          <div className="flex flex-col gap-4 pt-6 mt-4 border-t border-gray-200">
            <Link
              href="/donate"
              onClick={toggleMobileNav}
              className="bg-[#D4A017] hover:bg-[#C3950C] text-white py-4 text-center rounded-2xl font-semibold text-lg shadow-md active:scale-[0.985] transition-all"
            >
              {"donate"}
            </Link>
            <div className="flex justify-center pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}