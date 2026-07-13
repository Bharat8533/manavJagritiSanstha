import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Banner {
  imageUrl: string;
  alt?: string;
  [key: string]: any;
}

interface HeroProps {
  banners?: Banner[];
}

const Hero = ({ banners = [] }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  return (
    <section className="relative mt-[80px] w-full h-[30dvh] sm:h-[50dvh] lg:h-[80vh] flex items-center justify-center bg-[#130B07]/20 text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07] bg-transparent">
      {/* Background Slider Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={
                banners[currentIndex].imageUrl ||
                "https://i.pinimg.com/736x/c5/a0/03/c5a00375d647591a14dd36e31151acb1.jpg"
              }
              alt={banners[currentIndex].alt || "Sacred Vrindavan Background"}
              className="w-full h-full object-cover object-top"
            />
            {/* Overlays */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-[#1a0800]/05 via-[#2C1810]/10 via-[#7A1F0E]/35 to-[#A63D00]/25" /> */}
            {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" /> */}
          </motion.div>
        </AnimatePresence>

        {/* Decorative Glow */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-[140px] pointer-events-none" /> */}
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4A017]/40 to-transparent z-10" /> */}

      {/* Main Content */}
      {/* <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 py-6">
        <span className="inline-block bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F4D28C] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full backdrop-blur-md">
          श्रीमद भागवत कथा | Katha Booking
        </span>

        <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-white leading-[1.3] tracking-wide">
          विश्व के ऐसे सनातन धर्म{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold block sm:inline">
            कथा वाचक
          </span>{" "}
          जो बाल्य काल से ही सुना रहे समस्त ग्रंथों की कथा
        </h1>

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
      </div> */}

      {/* Navigation Indicators (Only show if multiple banners) */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 z-20 flex gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-8 bg-[#D4A017]"
                  : "w-4 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
