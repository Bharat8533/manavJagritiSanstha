import React from "react";
import { useTranslations } from "next-intl";

export default function PremiumYatraMotiveLight() {
  const t = useTranslations("YatraMotive");
  const motives = [1, 2, 3].map((id) => ({
    title: t(`motives.${id}.title`),
    desc: t(`motives.${id}.desc`),
  }));

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#FCFAF6] text-[#3D2511] overflow-hidden selection:bg-[#D4A017]/30 selection:text-[#3D2511]">
      {/* Background Ambient Aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A017]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#A63D00]/3 rounded-full blur-[140px]" />
        {/* Fine linear separator grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#EFEBE4_1px,transparent_1px)] bg-[size:6rem] opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Block: The Monolithic Holy Shloka Canvas */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 bg-[#F5EFE4] p-8 sm:p-10 rounded-[2.5rem] border border-[#D4A017]/15 shadow-[0_20px_50px_rgba(212,160,23,0.05)] relative overflow-hidden group">
            {/* Soft inner organic gold flare */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#D4A017]/15 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Top Minimal Line Indicator */}
            <div className="w-12 h-px bg-[#B8860B]/40 mb-6" />

            <span className="text-[9px] font-sans font-bold text-[#8A5A16] uppercase tracking-[0.3em] block mb-6">
              मंत्र एवं संकल्प
            </span>

            {/* Holy Sanskrit Shloka Structure */}
            <blockquote className="font-serif text-xl sm:text-2xl text-[#5C3A1A] font-semibold leading-[1.6] tracking-wide mb-8 relative">
              "ब्रजभूमिः परं धाम
              <br />
              <span className="pl-4 block mt-1">शरीरे प्राणवन्मम।</span>
              यत्र लीलां करोत्येव <br />
              <span className="pl-4 block mt-1">
                स्वयं कृष्णस्तु शाश्वतीम्॥"
              </span>
            </blockquote>

            {/* Accent divider variant */}
            <div className="w-full h-px bg-gradient-to-r from-[#D4A017]/30 via-transparent to-transparent mb-6" />

            {/* Translation Text Content */}
            <p className="text-xs sm:text-sm text-[#7A5833] leading-relaxed font-normal font-sans group-hover:text-[#5C3A1A] transition-colors duration-300">
              {t("p")}
            </p>

            {/* Outer Subtle Border Highlight */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#D4A017]/30 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
          </div>

          {/* Right Block: Elite Philosophy Pillars */}
          <div className="lg:col-span-7 space-y-10">
            {/* Main Section Header Component */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#B8860B]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8A5A16]">
                  {t("subheading2")}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2511] tracking-wide leading-tight">
                {t("headingquote1")}
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8A5A16] via-[#B8860B] to-[#A63D00] font-extrabold">
                  {t("headingquote2")}
                </span>
              </h2>
            </div>

            {/* Motives Stack Loop */}
            <div className="space-y-4">
              {motives.map((motive, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-[#D4A017]/10 bg-white p-6 hover:border-[#D4A017]/40 hover:bg-[#FDFCF9] transition-all duration-500 shadow-[0_4px_20px_rgba(61,37,17,0.02)] hover:shadow-[0_10px_30px_rgba(212,160,23,0.06)]"
                >
                  {/* Subtle Background Index Watermark */}
                  <span className="absolute -right-4 -bottom-6 font-serif text-8xl font-black text-[#3D2511]/[0.02] group-hover:text-[#3D2511]/[0.04] transition-colors duration-500 select-none pointer-events-none">
                    0{idx + 1}
                  </span>

                  <div className="flex gap-4 sm:gap-6 items-start">
                    {/* Geometry Index Counter Ring */}
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl border border-[#D4A017]/30 bg-[#FBF9F4] flex items-center justify-center text-xs font-bold text-[#8A5A16] group-hover:border-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-[#FCFAF6] transition-all duration-500 shadow-sm">
                      0{idx + 1}
                    </div>

                    {/* Content Layer */}
                    <div className="space-y-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#3D2511] group-hover:text-[#8A5A16] transition-colors duration-300">
                        {motive.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#7A5833] font-medium leading-relaxed group-hover:text-[#5C3A1A] transition-colors duration-300">
                        {motive.desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro Linear Indicator */}
                  <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-[#B8860B] to-[#A63D00] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
