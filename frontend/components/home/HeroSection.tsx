"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).openModal) {
      (window as any).openModal("donate");
    } else {
      console.log("Open donate modal");
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0800] via-[#3d0f00] via-[#7A1F0E] to-[#A63D00]" />

      {/* HERO MANDALA (Pseudo-elements recreated with stacked Tailwind layers) */}
      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.08] rounded-full bg-[conic-gradient(from_0deg,#D4A017,#A63D00,#D4A017,#7A1F0E,#D4A017)] hidden lg:block">
        <div className="absolute inset-[10%] rounded-full bg-[conic-gradient(from_45deg,#D4A017,transparent,#D4A017,transparent,#D4A017)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-[10]">
        {/* <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmQY09i-Uw2arfCHpvlquKuk8OOmPt6NsBpo_jqnvpPY5Cdah_WqjAUSW2-5U9dSiTv5G3CkUe-4bGK9PDlA3C4C0PRxUoWKMSJG-V_TnUZmHDHJ7I-MD0mXrY0idDPpJ1t9Pe=s1360-w1360-h1020-rw"
          alt=""
          className="w-full h-full object-contain"
        /> */}
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmQY09i-Uw2arfCHpvlquKuk8OOmPt6NsBpo_jqnvpPY5Cdah_WqjAUSW2-5U9dSiTv5G3CkUe-4bGK9PDlA3C4C0PRxUoWKMSJG-V_TnUZmHDHJ7I-MD0mXrY0idDPpJ1t9Pe=s1360-w1360-h1020-rw"
          alt=""
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800] via-[#3d0f00]/30 via-[#7A1F0E]/30 to-[#A63D00]"></div>
      </div>

      {/* HERO ORNAMENT PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4A017 1px, transparent 1px), radial-gradient(circle at 80% 20%, #D4A017 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center p-8 max-w-[900px] animate-[fadeInUp_0.8s_ease_both]">
        {/* Sanskrit Text */}
        <span className="font-sans text-[#f7f1e5] text-[0.9rem] tracking-[0.3em] mb-4 block">
          ॥ श्री हरि: शरणम् ॥
        </span>

        {/* Hero Main Title */}
        <h1 className="hero-title">
          मानव जागृति संस्था
          <br />
          <span className="text-5xl">Manav Jagriti Sanstha</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-[clamp(1rem,2.5vw,1.4rem)] text-[rgba(245,233,208,0.8)] mb-8">
          A Divine Sanctuary of Faith, Service & Spiritual Awakening
        </p>

        {/* Description */}
        <p className="text-[rgba(255,255,255,0.85)] text-[0.9rem] max-w-[600px] mx-auto mb-10 linen-relaxed dynamic-desc">
          Join millions of devotees in a journey of devotion. Your sacred
          contribution empowers Gau Seva, ancient temple restoration, Braj
          Yatra, and the divine kathas of Maharaj Ji.
        </p>

        {/* Buttons Grid/Flex Container */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#donate"
            onClick={handleDonateClick}
            className="bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white py-3 px-8 rounded-[30px] font-serif text-[0.85rem] font-semibold tracking-wider shadow-[0_8px_30px_rgba(212,160,23,0.4)] transition duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,160,23,0.6)] inline-block"
          >
            🙏 Donate Now
          </Link>
          <Link
            href="#katha"
            className="bg-white/50 backdrop-blur-2xl text-[#5c3a1e] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.5)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[rgba(244,210,140,0.1)] hover:border-[#F4D28C] hover:text-[var(--beige)]"
          >
            📿 Book Katha
          </Link>
          <Link
            href="#gau-seva"
            className="bg-white/50 backdrop-blur-2xl text-[#5c3a1e] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.5)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[rgba(244,210,140,0.1)] hover:border-[#F4D28C] hover:text-[var(--beige)]"
          >
            🐄 Gau Seva
          </Link>
          <Link
            href="#yatra"
            className="bg-white/50 backdrop-blur-2xl text-[#5c3a1e] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.5)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[rgba(244,210,140,0.1)] hover:border-[#F4D28C] hover:text-[var(--beige)]"
          >
            🛕 Braj Yatra
          </Link>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgba(244,210,140,0.5)] text-[0.7rem] tracking-[0.2em] text-center animate-bounce">
        Scroll Down
        <span className="block w-[1px] h-10 bg-gradient-to-b from-[#F4D28C] to-transparent mx-auto mt-2" />
      </div>
    </section>
  );
}
