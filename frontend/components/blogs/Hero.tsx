"use client";

import React from "react";

const BlogHero = () => {
  return (
    <section className="relative h-[80vh] max-h-[80vh] min-h-137.5 flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Immersive Full-Bleed Background Image & Advanced Grading Context */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.trvl-media.com/place/6330856/af12b36f-09d7-4bfb-a824-81a43b018517.jpg"
          alt="Sacred Vrindavan Background"
          className="w-full h-full object-cover object-top"
        />

        {/* Layer 1: Saffron & Maroon Blend with Opacity for transparency */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/90 via-[#3d0f00]/80 via-[#7A1F0E]/80 to-[#A63D00]/75 mix-blend-multiply" />

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
        <div className="inline-flex items-center gap-2.5 rounded-md border border-[#D4A017]/30 bg-[#2A1208]/80 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="text-[#F4D28C] text-[10px] font-bold uppercase tracking-[0.25em]">
            पत्रिका एवं विचारवाणी
          </span>
          <span className="text-[#D4A017]/60 text-xs">|</span>
          <span className="text-white/60 text-[10px] uppercase tracking-wider font-mono">
            Vrindavan Chronicles
          </span>
        </div>

        {/* High-Impact Centered Hindi Typography */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-white">
            श्री वृंदावन ब्रज की अनमोल स्मृतियां एवं <br />
            <span className="text-transparent bg-clip-text pt-2 bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
              परमार्थ यात्रा का जीवंत दर्पण
            </span>
          </h1>

          {/* Elegant Gold Accent Line */}
          <div className="w-16 h-px bg-linear-to-r from-transparent via-[#D4A017]/60 to-transparent mx-auto pt-1" />
        </div>

        {/* Balanced Description Layer */}
        <p className="text-xs sm:text-sm lg:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto px-2">
          श्री निम्बार्क पूज्य आचार्य ब्रजराज जी महाराज के अमृतमयी दिव्य प्रवचन, संतों
          की पावन अनुभूतियां, सनातन धर्म के गहरे रहस्य और मानव जाग्रती संस्था के
          निरंतर चल रहे सेवा प्रकल्पों का आधिकारिक संकलन।
        </p>
      </div>

      {/* Premium linear Overlay For Seamless Section Merging */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#130B07] to-transparent pointer-events-none" />
    </section>
  );
};

export default BlogHero;
