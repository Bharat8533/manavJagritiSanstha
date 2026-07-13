import React from "react";
import { useTranslations } from "next-intl";

export default function YatraFacilities() {
  const t = useTranslations("YatraFacilities");
    const facilities = [1, 2, 3, 4].map((id) => ({
      title: t(`facilities.${id}.title`),
      desc: t(`facilities.${id}.desc`),
    }));

  return (
    <div className="bg-[#F5F0E5]/60 py-20 px-4 border-y border-[#D4A017]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest block mb-2">
            {t("subheading")}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2511]">
            {t("heading")}
          </h2>
          <p className="text-xs text-[#7A5833] mt-2 font-medium">
            {t("p")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((fac, i) => (
            <div
              key={i}
              className="bg-[#FDFBF7] border border-[#D4A017]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3D2511] text-[#FDFBF7] border border-[#D4A017]/40 text-xs font-bold flex items-center justify-center mb-4 shadow-sm">
                0{i + 1}
              </div>
              <h4 className="font-serif text-base font-extrabold text-[#3D2511]">
                {fac.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#7A5833] mt-2 leading-relaxed font-medium">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
