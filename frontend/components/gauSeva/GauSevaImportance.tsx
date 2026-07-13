"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function GauSevaImportance(): React.JSX.Element {
  const t = useTranslations("GauSevaImportance");

  // Fetch array from JSON
  const philosophy = t.raw("philosophy") as {
    verse: string;
    source: string;
    meaning: string;
  }[];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A017]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-6 lg:col-span-6 text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[#A63D00] bg-[#A63D00]/5 border border-[#A63D00]/10 px-3 py-1.5 rounded-full">
              {t("subheading")}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C1810] leading-tight">
              {t("heading")}
            </h2>
          </div>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#A63D00] to-transparent" />
          <p className="text-sm sm:text-base text-[#5C3A1E]/80 font-light leading-relaxed tracking-wide">
            {t("p")}
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-6 lg:col-span-6 w-full">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FFFDF9] p-8 rounded-3xl border-l-4 border-[#A63D00] border-y border-r border-[#D4A017]/20 transition-all duration-300 hover:shadow-xl hover:border-r-[#A63D00]/30 text-left"
            >
              <div className="absolute right-6 top-4 font-serif text-6xl text-[#A63D00]/5 pointer-events-none select-none">
                “
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#A63D00] tracking-wide">
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
