"use client";

import React from "react";
import { MandirHeroProps } from "./Types.types";

export default function MandirHero({
  onActionClick,
}: MandirHeroProps): React.JSX.Element {
  return (
    <section className="relative h-[75vh] min-h-125 flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Immersive Background Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://www.poojn.in/wp-content/uploads/2025/03/Dravidian-Temple-Architecture-A-Detailed-Guide.jpeg.jpg"
          className="w-full h-full object-cover object-center transform scale-102 mix-blend-luminosity"
        />
        {/* Layer 1: Traditional Color Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/95 via-[#2C1810]/90 via-[#7A1F0E]/85 to-[#A63D00]/75 mix-blend-multiply" />
        {/* Layer 2: Visual High-Contrast Vignette */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-px" />
        {/* Layer 3: Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-6">
        {/* Elite Glassmorphism Badge */}
        <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
          मानव जाग्रति संसथान | पावन संस्कृति संकल्प
        </span>

        {/* Premium Font Pairing and Shimmer Gradient Effect */}
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-white leading-[1.3] tracking-wide">
          सनातन सांस्कृतिक धरोहर |{" "}
          <span className="text-transparent bg-clip-text pt-2 bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
            मंदिर जीर्णोद्धार
          </span>
        </h1>

        {/* Informative & Balanced Copy */}
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto px-2">
          समय के प्रवाह और उपेक्षा के कारण जर्जर या शांत पड़े देवस्थानों के
          पुनरुद्धार, शास्त्रोक्त संरक्षण एवं पुनः प्राण-प्रतिष्ठा के महायज्ञ
          में सहभागी बनकर अनंत सांस्कृतिक पुण्य अर्जित करें।
        </p>

        {/* Modern Interactive Button Setup */}
        <div className="pt-4">
          <button
            onClick={onActionClick}
            className="group relative inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#D4A017] to-[#A63D00] p-px transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            <span className="px-8 block rounded-[11px] bg-[#130B07] group-hover:bg-transparent transition-colors py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F4D28C] group-hover:text-white text-center">
              सेवा सहयोग चुनें
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
