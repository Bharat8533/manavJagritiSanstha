import React from "react";
import { PhilosophyItem } from "../UI/Types.types";

// Localized Interface for cleaner file tracking


const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    verse: "गावो विश्वस्य मातरः।",
    source: "— ऋग्वेद",
    meaning:
      "अर्थात् गायें समस्त संसार की माता हैं, इनके संरक्षण में ही प्रकृति और मानव जाति का कल्याण निहित है।",
  },
  {
    verse: "सर्वदेवमयी हि गौः।",
    source: "— पद्म पुराण",
    meaning:
      "गौमाता के पवित्र विग्रह में समस्त ३३ कोटि देवी-देवताओं का साक्षात वास माना गया है।",
  },
];

export default function GauSevaImportance(): React.JSX.Element {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Background Radial Glow for Visual Premium Aesthetics */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A017]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Editorial Typography & Narrative */}
        <div className="space-y-6 lg:col-span-6 text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[#A63D00] bg-[#A63D00]/5 border border-[#A63D00]/10 px-3 py-1.5 rounded-full">
              ✨ पावन पौराणिक संदर्भ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C1810] leading-tight">
              गौ सेवा का <br className="hidden sm:inline" />
              <span className="font-bold text-transparent py-2 bg-clip-text bg-linear-to-r from-[#A63D00] via-[#8B2612] to-[#2C1810]">
                सनातन संस्कृति एवं आध्यात्मिक
              </span>{" "}
              महत्व
            </h2>
          </div>

          <div className="w-20 h-[2px] bg-gradient-to-r from-[#A63D00] to-transparent" />

          <p className="text-sm sm:text-base text-[#5C3A1E]/80 font-light leading-relaxed tracking-wide">
            शास्त्रों में वर्णित है कि गौवंश की सेवा से बढ़कर इस कलयुg में कोई
            अन्य सुलभ यज्ञ नहीं है। गौमाता को ग्रास अर्पण करने से पितृ दोष,
            नवग्रह बाधा एवं समस्त मानसिक कष्टों का स्वत: निवारण हो जाता है।
            वृंदावन की पवित्र रज में आश्रित, असहाय गौवंश की सेवा साक्षात ठाकुर
            श्री बांके बिहारी जी की प्रसन्नता का मूल कारण है।
          </p>
        </div>

        {/* Right Side: Traditional Manuscript Style Verse Displays */}
        <div className="space-y-6 lg:col-span-6 w-full">
          {PHILOSOPHY_DATA.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FFFDF9] p-8 rounded-3xl border-l-4 border-[#A63D00] border-y border-r border-[#D4A017]/20 transition-all duration-300 hover:shadow-[0_20px_40px_-20px_rgba(166,61,0,0.08)] hover:border-r-[#A63D00]/30 text-left"
            >
              {/* Subtle Traditional Quote Graphic Background */}
              <div className="absolute right-6 top-4 font-serif text-6xl text-[#A63D00]/5 pointer-events-none select-none">
                “
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#A63D00] tracking-wide group-hover:text-[#8B2612] transition-colors">
                  {item.verse}
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017] bg-[#D4A017]/5 px-2.5 py-1 inline-block border border-[#D4A017]/50 rounded-full">
                  {item.source}
                </span>
                <p className="text-xs sm:text-sm text-[#2C1810]/80 font-light mt-4 leading-relaxed border-t border-dashed border-[#D4A017]/20 pt-3">
                  {item.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
