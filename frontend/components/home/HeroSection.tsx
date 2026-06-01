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
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20"
    >
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0800] via-[#3d0f00] via-[#7A1F0E] to-[#A63D00]" />

      {/* HERO MANDALA (Pseudo-elements recreated with stacked Tailwind layers) */}
      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.08] rounded-full bg-[conic-gradient(from_0deg,#D4A017,#A63D00,#D4A017,#7A1F0E,#D4A017)] hidden lg:block">
        <div className="absolute inset-[10%] rounded-full bg-[conic-gradient(from_45deg,#D4A017,transparent,#D4A017,transparent,#D4A017)]" />
      </div>

      {/* BACKGROUND BANNER IMAGE LAYER */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGmQY09i-Uw2arfCHpvlquKuk8OOmPt6NsBpo_jqnvpPY5Cdah_WqjAUSW2-5U9dSiTv5G3CkUe-4bGK9PDlA3C4C0PRxUoWKMSJG-V_TnUZmHDHJ7I-MD0mXrY0idDPpJ1t9Pe=s1360-w1360-h1020-rw"
          alt="Maharaj Ji Banner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0800]/90 via-[#3d0f00]/70 to-[#1a0800]"></div>
      </div>

      {/* HERO ORNAMENT PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.3] z-[2]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4A017 1px, transparent 1px), radial-gradient(circle at 80% 20%, #D4A017 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-7xl animate-[fadeInUp_0.8s_ease_both] flex flex-col items-center">
        {/* Sanskrit Shlok Prefix */}
        {/* <span className="font-sans text-[#F4D28C] text-[0.95rem] tracking-[0.3em] mb-6 block drop-shadow-md">
          ॥ श्री हरि: शरणम् ॥
        </span> */}
        <div className="w-48 mb-4">
          <img src="https://mjsvrindavan.com/wp-content/uploads/2025/09/logo.png" />
        </div>

        {/* MAHARAJ JI NAME & TITLES CARD */}
        <div className="mb-8 p-4 md:p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-[#D4A017]/30 max-w-212 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {/* Upadhi / Titles */}
          <p className="text-[#f7f1e5]/80 text-[0.85rem] md:text-[1rem] font-sans tracking-wide leading-relaxed mb-2">
            सनातन क्रांति अग्रदूत • अंतर्राष्ट्रीय सनातन धर्म प्रेरक • गौ
            गोवर्धन उपासक • नन्दयशोदा वृन्दावन पीठाधीश्वर • श्री निम्बार्क जी
            महाराज
          </p>
          {/* Main Name */}
          <h2 className="text-[#D4A017] text-2xl md:text-4xl font-serif font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-2">
            पूज्या श्री ब्रजराज जी महाराज
          </h2>
        </div>

        {/* Hero Main Title */}
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          मानव जागृति संस्था, वृन्दावन
          <br />
          <span className="text-2xl md:text-4xl font-serif text-[#F4D28C] block mt-2 tracking-wide font-normal">
            Manav Jagriti Sanstha Vrindavan
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-[clamp(1rem,2.5vw,1.3rem)] text-[rgba(245,233,208,0.9)] mb-6 drop-shadow-sm">
          A Divine Sanctuary of Faith, Service & Spiritual Awakening
        </p>

        {/* Description */}
        <p className="text-[rgba(255,255,255,0.85)] text-[0.95rem] max-w-[650px] mx-auto mb-10 leading-relaxed drop-shadow-sm">
          Join millions of devotees in a journey of devotion. Your sacred
          contribution empowers Gau Seva, ancient temple restoration, Braj
          Yatra, and the divine kathas of Maharaj Ji.
        </p>

        {/* Buttons Grid/Flex Container */}
        <div className="flex gap-4 justify-center flex-wrap z-20">
          <Link
            href="#donate"
            onClick={handleDonateClick}
            className="bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white py-3 px-8 rounded-[30px] font-serif text-[0.85rem] font-semibold tracking-wider shadow-[0_8px_30px_rgba(212,160,23,0.4)] transition duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,160,23,0.6)] inline-block"
          >
            🙏 Donate Now
          </Link>
          <Link
            href="/kathaBooking"
            className="bg-white/10 backdrop-blur-md text-[#f7f1e5] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.4)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-white"
          >
            📿 Book Katha
          </Link>
          <Link
            href="/gauSeva"
            className="bg-white/10 backdrop-blur-md text-[#f7f1e5] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.4)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-white"
          >
            🐄 Gau Seva
          </Link>
          <Link
            href="/brajDarshan"
            className="bg-white/10 backdrop-blur-md text-[#f7f1e5] py-3 px-8 rounded-[30px] border-[1.5px] border-[rgba(244,210,140,0.4)] font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 inline-block hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-white"
          >
            🛕 Braj Yatra
          </Link>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[rgba(244,210,140,0.6)] text-[0.7rem] tracking-[0.2em] text-center animate-bounce z-10">
        Scroll Down
        <span className="block w-[1px] h-10 bg-gradient-to-b from-[#F4D28C] to-transparent mx-auto mt-2" />
      </div>
    </section>
  );
}
