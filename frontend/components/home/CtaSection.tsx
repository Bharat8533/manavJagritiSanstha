"use client";

import React from "react";

export default function CtaSection() {
  const handleModalClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).openModal) {
      (window as any).openModal(type);
    } else {
      console.log(`Open modal for: ${type}`);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-gradient-to-br from-[#A63D00] via-[#D4A017] to-[#A63D00] bg-[length:200%_200%] relative overflow-hidden"
      style={{
        animation: "gradientMove 8s ease infinite",
      }}
    >
      {/* Structural Inner Container */}
      <div className="max-w-[850px] mx-auto space-y-6 relative z-10">
        {/* Main Devotional Badge */}
        <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/25 text-[#F4D28C] text-[0.8rem] font-bold tracking-[0.2em] uppercase px-5 py-1.5 rounded-full shadow-sm">
          🤝 Become a Volunteer
        </span>

        {/* Primary Hindi Heading */}
        <h2 className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] text-white font-black leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.2)]">
          मानव जाग्रती संस्था के सेवा कार्यो में सहयोगी बनें
        </h2>

        {/* Secondary Context Block */}
        <p className="text-white/90 text-[0.95rem] sm:text-[1.05rem] leading-relaxed font-sans max-w-[720px] mx-auto drop-shadow-sm">
          श्री निम्बार्क ब्रजराज जी महाराज से जुड़ने के लिए अथवा किसी भी प्रकार
          की कथा या पूजा पाठ करवाने के लिए संपर्क करें
        </p>

        {/* Prominent Direct Phone Numbers Display */}
        <div className="py-2 font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F4D28C] tracking-wide space-x-3 drop-shadow-md">
          <a
            href="tel:+919319087326"
            className="hover:text-white transition duration-200"
          >
            +91-9319087326
          </a>
          <span className="text-white/40 font-light">|</span>
          <a
            href="tel:+919219663835"
            className="hover:text-white transition duration-200"
          >
            +91-9219663835
          </a>
        </div>

        {/* Core Multi-Action Button Row */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {/* Volunteer Trigger */}
          <button
            onClick={(e) => handleModalClick(e, "volunteer")}
            className="bg-white text-[#A63D00] hover:text-white hover:bg-[#A63D00] border border-white px-8 py-3.5 rounded-full font-serif text-[0.9rem] font-bold shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-300 transform hover:-translate-y-0.5"
          >
            🙏 सेवा सहयोगी बनें
          </button>

          {/* WhatsApp Connect */}
          <a
            href="https://wa.me/919319087326"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#25D366] hover:text-white hover:bg-[#25D366] border border-white px-8 py-3.5 rounded-full font-serif text-[0.9rem] font-bold shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-1.5"
          >
            💬 WhatsApp Us
          </a>

          {/* Booking Trigger */}
          <button
            onClick={(e) => handleModalClick(e, "katha")}
            className="bg-white text-[#A63D00] hover:text-white hover:bg-[#A63D00] border border-white px-8 py-3.5 rounded-full font-serif text-[0.9rem] font-bold shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-300 transform hover:-translate-y-0.5"
          >
            📿 कथा / पूजा बुकिंग
          </button>
        </div>
      </div>
    </section>
  );
}
