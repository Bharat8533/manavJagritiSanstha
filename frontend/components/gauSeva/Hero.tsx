"use client";

import React from "react";
import { GauSevaHeroProps } from "../UI/Types.types";

export default function GauSevaHero({
  onActionClick,
}: GauSevaHeroProps): React.JSX.Element {
  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Immersive Background Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://cdn.shopify.com/s/files/1/0278/2307/9508/files/gau_seva_893d4d67-8962-49c7-9d42-7900a90578ee.png?v=1646473298"
          alt="Sacred Gaushala Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Layer 1: Traditional Color Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/95 via-[#2C1810]/90 via-[#7A1F0E]/85 to-[#A63D00]/75 mix-blend-multiply" />
        {/* Layer 2: Visual High-Contrast Vignette */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-px" />
        {/* Layer 3: Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-6">
        <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full backdrop-blur-md">
          परम पावन संकल्प | Surabhi Gaushala
        </span>

        {/* Updated Title according to image note */}
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-white leading-[1.3] tracking-wide">
          विश्व की प्रथम गौशाला |{" "}
          <span className="text-transparent bg-clip-text pt-3 bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold block mt-1">
            सुरभी गौ सेवा तीर्थ
          </span>
        </h1>

        {/* Updated Description according to image note */}
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto px-2">
          एक अनूठा पावन धाम, जहाँ श्रद्धेय महाराज जी स्वयं अपने संपूर्ण परिवार
          सहित गौवंश की आत्मीय सेवा करते हैं। इस दिव्य सेवा अनुष्ठान से जुड़कर
          अनंत पुण्य के भागीदार बनें।
        </p>

        <div className="pt-4">
          <button
            onClick={onActionClick}
            className="group relative inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#D4A017] to-[#A63D00] p-px transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            <span className="px-8 block rounded-[11px] bg-[#130B07] group-hover:bg-transparent transition-colors py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F4D28C] group-hover:text-white text-center">
              सेवा संकल्प चुनें
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
