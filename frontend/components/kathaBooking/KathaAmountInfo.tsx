import React from "react";
import { useTranslations } from "next-intl";

interface NewKathaAmountInfoProps {
  details: {
    amount: string;
    inclusion: string;
  };
}

export default function KathaAmountInfo({ details }: NewKathaAmountInfoProps) {
  const t = useTranslations("KathaAmountInfo");
  return (
    <div className="lg:col-span-5 space-y-6 text-left">
      {/* Amount Preview Box */}
      <div className="bg-white p-6 rounded-3xl border border-[#D4A017]/15 shadow-sm relative overflow-hidden">
        <h4 className="text-sm font-bold uppercase tracking-widest text-[#A63D00] mb-2">
          अनुमानित सेवा निवेदिता राशि
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold font-serif text-[#2C1810]">
            {details.amount}
          </span>
          <span className="text-xs text-[#5C3A1E]/70 font-light">
            *(न्यूनतम सहयोग संकल्प)
          </span>
        </div>
        <p className="text-sm text-[#5C3A1E]/80 font-light mt-2 leading-relaxed bg-[#FCFAF5] p-3 rounded-xl border border-[#D4A017]/10">
          ℹ️ {details.inclusion}
        </p>
      </div>

      {/* Rules and guidelines blocks */}
      <div className="bg-white p-6 rounded-3xl border border-[#D4A017]/15 shadow-sm space-y-4">
        <h4 className="font-serif text-sm font-bold text-[#2C1810]">
          {t("heading")}
        </h4>

        <ul className="space-y-3 text-sm text-[#5C3A1E]/80 font-light">
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>{t("p1")}</span>
          </li>
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>{t("p2")}</span>
          </li>
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>{t("p3")}</span>
          </li>
        </ul>
      </div>

      {/* Trust Helpline Shield */}
      <div className="bg-white p-8 rounded-3xl border border-[#A63D00]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
        {/* Left accent strip for brand identity */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#A63D00]" />

        <div className="pl-4">
          <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-[#A63D00] mb-3">
            {t("heading2")}
          </h5>

          <p className="text-[#2C1810] text-sm leading-relaxed mb-6 font-medium">
            {t("p4")}
          </p>

          <a
            href="tel:+919319087326"
            className="inline-flex items-center gap-3 bg-[#FFF5EF] hover:bg-[#A63D00] text-[#A63D00] hover:text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold text-sm border border-[#A63D00]/20"
          >
            <span className="text-lg">📞</span>
            <span>+91 93190 87326</span>
          </a>
        </div>
      </div>
    </div>
  );
}
