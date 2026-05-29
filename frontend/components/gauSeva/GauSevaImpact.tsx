import React from "react";

export interface StatItem {
  metric: string;
  label: string;
  detail: string;
}

const IMPACT_STATS: StatItem[] = [
  {
    metric: "5,000+",
    label: "आश्रित गऊ माताएं",
    detail:
      "वृंदावन धाम एवं आसपास के क्षेत्रों में निरंतर चिकित्सा एवं पोषण संवर्धन",
  },
  {
    metric: "50+ Tons",
    label: "मासिक हरा चारा",
    detail: "उच्च पौष्टिक आहार, सुचारू वितरण व्यवस्था एवं दैनिक सेवा प्रबंधन",
  },
  {
    metric: "24/7",
    label: "चिकित्सा एम्बुलेंस",
    detail: "पीड़ित एवं बीमार गौवंश की त्वरित सहायता हेतु समर्पित डॉक्टर्स टीम",
  },
  {
    metric: "12+ Years",
    label: "अविरल सेवा काल",
    detail: "सनातन धर्म के सेवा संकल्प के तहत निरंतर नि:स्वार्थ धरातलीय कार्य",
  },
];

export default function GauSevaImpact(): React.JSX.Element {
  return (
    <section
      className="py-12 bg-[#1E0F0A] relative overflow-hidden"
      id="impact"
    >
      {/* Background Ambient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#A63D00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#F4D28C] bg-[#F4D28C]/5 border border-[#F4D28C]/10 px-3 py-1.5 rounded-full">
            OUR MISSION IN NUMBERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            सेवा और{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F4D28C] to-[#E5B869]">
              समर्पण का धरातल
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            आपके सहयोग और अटूट विश्वास से मानव जाग्रती संस्था द्वारा संचालित
            वास्तविक जमीनी प्रयास
          </p>
          <div className="w-12 h-[2px] bg-[#F4D28C]/30 mx-auto mt-4" />
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {IMPACT_STATS.map((stat, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-[#F4D28C]/30 text-center backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 select-none overflow-hidden"
            >
              {/* Subtle Dynamic Index Watermark */}
              <span className="absolute -top-4 -right-2 text-8xl font-sans font-black text-white/[0.02] transition-colors duration-500 group-hover:text-[#F4D28C]/[0.03]">
                0{i + 1}
              </span>

              {/* Stat Metric (Standard Readable English Numbers) */}
              <div className="font-sans text-4xl lg:text-5xl font-extrabold text-[#F4D28C] tracking-tight transition-transform duration-500 group-hover:scale-105">
                {stat.metric}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-white tracking-wide mt-4 mb-2 transition-colors duration-300 group-hover:text-[#F4D28C]">
                {stat.label}
              </div>

              {/* Detail Description */}
              <p className="text-xs text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {stat.detail}
              </p>

              {/* Top Neon Glow Border Indicator */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4D28C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
