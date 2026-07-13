// "use client";

// import React from "react";
// import { MandirHeroProps } from "./Types.types";

// export default function MandirHero({
//   onActionClick,
// }: MandirHeroProps): React.JSX.Element {
//   return (
//     <section className="relative h-[75vh] min-h-125 flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
//       {/* Immersive Background Overlays */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img
//           src="https://www.poojn.in/wp-content/uploads/2025/03/Dravidian-Temple-Architecture-A-Detailed-Guide.jpeg.jpg"
//           className="w-full h-full object-cover object-center transform scale-102 mix-blend-luminosity"
//         />
//         {/* Layer 1: Traditional Color Gradients */}
//         <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/95 via-[#2C1810]/90 via-[#7A1F0E]/85 to-[#A63D00]/75 mix-blend-multiply" />
//         {/* Layer 2: Visual High-Contrast Vignette */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-px" />
//         {/* Layer 3: Central Ambient Glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" />
//       </div>

//       {/* Hero Content Area */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-6">
//         {/* Elite Glassmorphism Badge */}
//         <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
//           मानव जाग्रति संसथान | पावन संस्कृति संकल्प
//         </span>

//         {/* Premium Font Pairing and Shimmer Gradient Effect */}
//         <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-white leading-[1.3] tracking-wide">
//           सनातन सांस्कृतिक धरोहर | <br />
//           <span className="text-transparent bg-clip-text pt-2 bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
//             समस्त देव मंदिरों का जीर्णोद्धार
//           </span>
//         </h1>

//         {/* Informative & Balanced Copy */}
//         <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto px-2">
//           समय के प्रवाह और उपेक्षा के कारण जर्जर या शांत पड़े देवस्थानों के
//           पुनरुद्धार, शास्त्रोक्त संरक्षण एवं पुनः प्राण-प्रतिष्ठा के महायज्ञ
//           में सहभागी बनकर अनंत सांस्कृतिक पुण्य अर्जित करें। 
//         </p>

//         {/* Modern Interactive Button Setup */}
//         <div className="pt-4">
//           <button
//             onClick={onActionClick}
//             className="group relative inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#D4A017] to-[#A63D00] p-px transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
//           >
//             <span className="px-8 block rounded-[11px] bg-[#130B07] group-hover:bg-transparent transition-colors py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F4D28C] group-hover:text-white text-center">
//               सेवा सहयोग चुनें
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Banner {
  id: number;
  imageUrl: string;
  page: string;
}

export default function GauSevaHero({ banners = [] }: { banners: Banner[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  // Auto-play
  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, banners.length]);

  return (
    <section className="mt-20 relative h-[30dvh] sm:h-[50dvh] lg:h-[80dvh] w-full flex items-center justify-center overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={banners[currentIndex]?.imageUrl}
              className="w-full h-full object-cover"
              alt="Hero Banner"
            />
            {/* Deep Rich Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#130B07] via-[#130B07]/40 to-transparent" />
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* REFINED NAVIGATION DOTS */}
      <div className="absolute bottom-10 flex gap-3">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === idx ? "w-12 bg-[#D4A017]" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}