import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Immersive Full-Bleed Background Image & Grading Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp"
          alt="Sacred Vrindavan Background"
          className="w-full h-full object-cover object-center transform scale-102"
        />

        {/* Layer 1: Saffron & Maroon Blend for Divine Aesthetics */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/95 via-[#2C1810]/90 via-[#7A1F0E]/85 to-[#A63D00]/75 mix-blend-multiply" />

        {/* Layer 2: Deep Dark Overlay for High Textual Legibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-px" />

        {/* Layer 3: Soft Gold Ambient Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Top Fine-Line Geometric Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4A017]/40 to-transparent z-10" />

      {/* Center Aligned Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-6">
        {/* Premium Devotional Badge */}
        <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full backdrop-blur-md">
          श्रीमद भागवत कथा | Katha Booking
        </span>

        {/* High-Impact Typography with Smooth Fluid Scaling */}
        <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-white leading-[1.3] tracking-wide">
          विश्व के ऐसे सनातन धर्म{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold block sm:inline">
            कथा वाचक
          </span>{" "}
          जो बाल्य काल से ही सुना रहे समस्त ग्रंथों की कथा
        </h1>

        {/* Balanced Description Layer */}
        <div className="text-white/90 text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto px-2 space-y-3">
          <p>
            जो{" "}
            <span className="text-[#F4D28C] font-medium">
              1988 से लगातार निष्काम भाव
            </span>{" "}
            से लोगों को कथा सुना रहे हैं और जगा रहे हैं सनातन संस्कृति को। जिनके
            जीवन में श्रीमद भागवत कथा व्यापार का साधन नहीं, बल्कि{" "}
            <span className="text-[#F4D28C] font-medium">
              भगवद् प्राप्ति का साधन
            </span>{" "}
            है।
          </p>

        </div>

        <div className="w-16 h-px bg-linear-to-r from-transparent via-[#D4A017]/60 to-transparent mx-auto pt-2" />
      </div>
    </section>
  );
};

export default Hero;
