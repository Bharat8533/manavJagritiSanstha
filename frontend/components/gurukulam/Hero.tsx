import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* 1. TRADITIONAL SEED GRID (Soft dot pattern adjusted for light mode) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp"
          alt="Sacred Gaushala Background"
          className="w-full h-full object-cover object-center transform scale-102"
        />
        {/* Layer 1: Traditional Color Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/95 via-[#2C1810]/90 via-[#7A1F0E]/85 to-[#A63D00]/75 mix-blend-multiply" />
        {/* Layer 2: Visual High-Contrast Vignette */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-px" />
        {/* Layer 3: Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 space-y-6">
        <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full backdrop-blur-md">
          परम पावन संकल्प | Govind Seva
        </span>

        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-white leading-[1.3] tracking-wide">
          शुद्ध वैदिक क्रियाओं का |{" "} <br />
          <span className="text-transparent bg-clip-text pt-2 bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
            घर-घर पुनरुद्धार आधात्मिक विज्ञान का प्रचार
          </span>
        </h1>

        {/* 4. HIGH CONTRAST SUBTEXT */}
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto px-2">
          सभी वर्गों के भक्तों के लिए दैनिक नित्य कर्म, संशय निवारण, और सनातन
          संस्कारों के व्यावहारिक ज्ञान हेतु निर्मित एक केंद्रीय डिजिटल गुरुकुल
          पीठ।
        </p>
      </div>
    </section>
  );
}
