"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface KathaItem {

  label: string;
  amount: string;
  inclusion: string;
  duration: string;

}

export default function KathaTypes({
  selectedKatha,
  onSelect,
  types = [],
}: {
  selectedKatha: string;
  onSelect: (id: string) => void;
  types: KathaItem[];
}) {
  const t = useTranslations("KathaTypes");
  const kathaList = t.raw("types") as KathaItem[];

  return (
    <section className="py-16 text-left bg-[#FFFDF9]">
      <div className="relative border-l-4 border-[#A63D00] pl-6 space-y-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63D00]/5 border border-[#A63D00]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A63D00]"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A63D00]">
            {t("badge")}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1810] leading-tight">
          {t("heading_main")}
          <span className="block text-xl sm:text-2xl font-sans font-light text-[#A63D00]/80 mt-1">
            {t("heading_sub")}
          </span>
        </h2>
        <p className="text-sm text-[#5C3A1E]/80 font-light leading-relaxed max-w-2xl">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {types.map((katha, index) => {
          const kathaId = katha.label;

          const isSelected = selectedKatha === kathaId;

          return (
            <div
              key={index}
              onClick={() => onSelect(kathaId)}
              className={`group p-8 rounded-[2rem] border cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "bg-[#FFF5EF] border-[#A63D00] shadow-[0_10px_30px_rgba(166,61,0,0.15)]"
                  : "bg-white border-[#E5E0D8] hover:border-[#A63D00]/40 shadow-sm hover:shadow-lg"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                    isSelected
                      ? "bg-[#A63D00] text-white"
                      : "bg-[#FFF5EF] text-[#A63D00]"
                  }`}
                >
                  📜
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-3">
                {katha.label}
              </h3>

              <div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#F0EBE5] text-[#5C3A1E] mb-4">
                ⏳ {katha.duration}
              </div>

              <p className="text-sm leading-relaxed text-[#5C3A1E]/80 mb-6 min-h-[4rem]">
                {katha.inclusion}
              </p>

              <div
                className={`pt-4 border-t border-dashed ${isSelected ? "border-[#A63D00]/30" : "border-[#E5E0D8]"} text-[10px] font-bold uppercase tracking-widest`}
              >
                {isSelected
                  ? "✓ चयनित (Selected)"
                  : "चयन करने के लिए क्लिक करें"}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
