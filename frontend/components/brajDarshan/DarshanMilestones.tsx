import React from "react";
import { useTranslations } from "next-intl";

export default function DarshanMilestones({ places = [] }: { places: any[] }) {
  const t = useTranslations("BrajDarshanMilestone");

  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C1810]">
            {t("heading")}
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#A63D00]">
            <div className="h-[1px] w-8 bg-[#A63D00]/30" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold">
              {t("p")}
            </span>
            <div className="h-[1px] w-8 bg-[#A63D00]/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place: any) => (
            <div
              key={place.id}
              className="group relative bg-white p-8 rounded-[2rem] border border-[#A63D00]/10 shadow-[0_4px_20px_rgba(166,61,0,0.08)] hover:shadow-[0_20px_40px_rgba(166,61,0,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative accent at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A63D00] to-[#D4A017]" />

              <div className="relative z-10">
                {/* Zone Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#A63D00] bg-[#A63D00]/5 px-3 py-1 rounded-full uppercase tracking-widest border border-[#A63D00]/10">
                    {place.zone}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-serif font-bold text-[#2C1810] mb-6 leading-tight">
                  {place.place_name}
                </h4>

                {/* Details list */}
                <div className="space-y-4 text-sm text-[#5D4037]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A63D00]/5 flex items-center justify-center">
                      <span>🕒</span>
                    </div>
                    <p className="font-medium">{place.timings}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A63D00]/5 flex items-center justify-center">
                      <span>👥</span>
                    </div>
                    <p>
                      Crowd:{" "}
                      <span className="text-[#A63D00] font-bold">
                        {place.crowd_level}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Special Notice - Styled as a quote */}
                {place.special_notice && (
                  <div className="mt-8 pt-6 border-t border-dashed border-[#A63D00]/20">
                    <p className="text-xs italic text-[#5D4037]/70 leading-relaxed italic">
                      ❝ {place.special_notice} ❞
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
