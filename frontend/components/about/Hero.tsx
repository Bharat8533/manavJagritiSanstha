"use client";

import React from "react";

const AboutHero = () => {
  return (
    <section className="relative h-[80vh] max-h-[80vh] min-h-[550px] flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Immersive Full-Bleed Background Image & Advanced Grading Context */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp"
          alt="Sacred Vrindavan Background"
          className="w-full h-full object-cover object-center transform scale-102"
        />

        {/* Layer 1: Saffron & Maroon Blend with Opacity for transparency */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/90 via-[#3d0f00]/85 via-[#7A1F0E]/80 to-[#A63D00]/75 mix-blend-multiply" />

        {/* Layer 2: Deep Dark Vignette for high textual contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-px" />

        {/* Layer 3: Subtle Gold Center Ambient Radial Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A017]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Top Premium Fine-Line linear Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4A017]/40 to-transparent z-10" />

      {/* Center Aligned Content Layout - Spacing Optimized for 80vh */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 py-8">
        {/* Premium Core Animated Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/20 bg-[#130B07]/70 px-4 py-1.5 backdrop-blur-md mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F4D28C]">
            Our Sacred Mission
          </span>
        </div>

        {/* High-Impact Centered Hindi Typography */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.3] tracking-wide max-w-4xl mx-auto">
            श्री वृंदावन धाम की पावन धरा पर <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
              सनातन धर्म एवं गौ सेवा का संकल्प
            </span>
          </h1>

          {/* Elegant Gold Accent Line */}
          <div className="w-16 h-px bg-linear-to-r from-transparent via-[#D4A017]/60 to-transparent mx-auto pt-1" />
        </div>

        {/* Balanced Description Layer */}
        <p className="text-xs sm:text-sm lg:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto px-2">
          Manav Jagriti Sadan Trust is unconditionally committed to the timeless
          traditions of the Braj region. From sustaining thousands of holy lives
          through Gau Seva to breathing life back into ancient heritage ruins
          via Temple Restoration, our path is paved with absolute devotion.
        </p>

        {/* Premium Geometric Call To Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4">
          <a
            href="#our-journey"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-linear-to-r from-[#D4A017] to-[#A63D00] p-px transition-all duration-300 transform hover:scale-[1.01]"
          >
            <span className="w-full sm:px-8 block rounded-[7px] bg-[#130B07] group-hover:bg-transparent transition-colors py-3 text-xs font-semibold uppercase tracking-widest text-[#F4D28C] group-hover:text-white text-center">
              Our Journey
            </span>
          </a>

          <a
            href="#holy-causes"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/10 bg-[#130B07]/50 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-widest sm:px-8 py-3.5 backdrop-blur-md transition-all hover:bg-white/8 hover:border-white/20 text-center"
          >
            Explore Holy Sevas
          </a>
        </div>
      </div>

      {/* Premium linear Overlay For Seamless Section Merging */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#130B07] to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutHero;
