import React from "react";
import { useTranslations } from "next-intl";
export default function AboutConcept(): React.JSX.Element {

  const t = useTranslations("TempleAboutConcept");
  return (
    <section className="py-28 bg-[#FAF8F5] relative overflow-hidden selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Subtle Background Traditional Accents */}
      <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-[#A63D00]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-[#D4A017]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* LEFT SIDE: Typography & Deep Philosophy Frame */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-extrabold tracking-[0.3em] text-[#A63D00] uppercase bg-[#A63D00]/5 border border-[#A63D00]/10 px-3.5 py-1.5 rounded-md">
                संकल्पना परिचय | Heritage Revival
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E0F0A] tracking-tight leading-[1.25]">
                {t("headingquote1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A63D00] via-[#B85314] to-[#D4A017] inline-block pt-1">
                  {t("headingquote2")}
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-[#5C3A1E]/80 font-light text-sm sm:text-base leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>

            {/* Premium Minimalist Micro Features instead of generic blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#2C1810]/5 shadow-[0_10px_25px_rgba(0,0,0,0.01)]">
                <span className="text-[#A63D00] font-bold text-lg mt-0.5">
                  ✦
                </span>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#2C1810] tracking-wide">
                    {t("subheading1")}
                  </h4>
                  <p className="text-[11px] text-[#5C3A1E]/60 font-light mt-0.5">
                    {t("subheading2")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#2C1810]/5 shadow-[0_10px_25px_rgba(0,0,0,0.01)]">
                <span className="text-[#D4A017] font-bold text-lg mt-0.5">
                  ✦
                </span>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#2C1810] tracking-wide">
                    {t("subheading3")}
                  </h4>
                  <p className="text-[11px] text-[#5C3A1E]/60 font-light mt-0.5">
                    {t("subheading4")}
                  </p>
                </div>
              </div>
            </div>

            {/* Elite Stylized Blockquote with Terracotta Tint Background */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-[#A63D00]/[0.03] to-transparent border-l-4 border-[#A63D00]">
              <p className="font-serif text-xs sm:text-sm italic text-[#2C1810] font-medium leading-relaxed">
                "{t("footer")}"
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Overlapping Asymmetric Fine-Art Frames */}
          <div className="lg:col-span-6 relative w-full px-4 sm:px-0">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A017]/10 to-transparent rounded-[2.5rem] blur-2xl -z-10 transform scale-95 translate-y-4" />

            {/* Asymmetric 3-Image Base Grid */}
            <div className="relative grid grid-cols-12 gap-4 items-center">
              {/* 1. MAIN PRIMARY IMAGE (Left Anchor - col-span-7) */}
              <div className="col-span-7 relative group">
                {/* Decorative premium contour line behind main image */}
                <div className="absolute -inset-2 border border-[#A63D00]/10 rounded-[2rem] -z-10 group-hover:scale-[1.01] transition-transform duration-500" />
                <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#1E0F0A]/10 border border-white/40 shadow-xl">
                  <img
                    className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-700 ease-out"
                    src="https://www.india-a2z.com/images/temple-architecture1.jpg"
                    alt="Ancient Temple Architecture Structure"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN (Stacking 2 smaller images + Badge - col-span-5) */}
              <div className="col-span-5 flex flex-col gap-4 self-stretch justify-between py-2">
                {/* 2. SECONDARY IMAGE (Top Right) */}
                <div className="relative group">
                  <div className="absolute -inset-1 border border-[#D4A017]/15 rounded-2xl -z-10 group-hover:scale-[1.02] transition-transform duration-500" />
                  <div className="overflow-hidden rounded-2xl aspect-[2/3] bg-[#1E0F0A]/10 border border-white/40 shadow-md">
                    <img
                      className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-700 ease-out"
                      src="https://smarthistory.org/wp-content/uploads/2023/11/Kandariya_Mahadev_temple_lady_getting_assisted_to_get_herself_adorned-scaled.jpg"
                      alt="Sacred Temple Sculptures"
                    />
                  </div>
                </div>

                {/* 3. TERTIARY IMAGE (Bottom Right) */}
                <div className="relative group">
                  <div className="absolute -inset-1 border border-[#A63D00]/15 rounded-2xl -z-10 group-hover:scale-[1.02] transition-transform duration-500" />
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#1E0F0A]/10 border border-white/40 shadow-md">
                    <img
                      className="w-full h-full object-cover transform scale-101 group-hover:scale-105 transition-all duration-700 ease-out"
                      src="https://blog.novatr.com/hubfs/Temple%20Architecture%20in%20India.webp"
                      alt="Traditional Indian Temple Crafting"
                    />
                  </div>
                </div>

                {/* Micro Stat/Data Badge - Pinned relative to content with an elegant negative transform override */}
                <div className="p-3.5 rounded-xl bg-[#130B07] text-white border border-white/[0.04] shadow-xl space-y-0.5 text-left transform -translate-x-12 sm:-translate-x-16 translate-y-[-10px] relative z-20 max-w-[150px] sm:max-w-[170px]">
                  <span className="block font-sans text-lg font-black text-[#F4D28C] tracking-tight leading-none">
                    100%
                  </span>
                  <span className="block text-[8px] sm:text-[9px] text-white/60 uppercase font-bold tracking-widest ltr leading-tight">
                    पारंपरिक शास्त्रोक्त विधि
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
