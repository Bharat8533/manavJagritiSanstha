import React from "react";
import { useTranslations } from "next-intl";

export default function ContactDetails() {
  const t = useTranslations("Contact");
  return (
    <div className="lg:col-span-5 space-y-8 text-left">
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
          {t("headOffice")}
        </h3>
        <p className="text-xs text-[#5C3A1E]/60 font-light">
          {t("headOfficeP")}
        </p>
      </div>

      <div className="space-y-4">
        {/* Card 1: Address */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            📍
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              {t("title1")}
            </h4>
            <p className="text-sm font-serif font-bold text-[#2C1810]">
              {t("mainHeading")}
            </p>
            <p className="text-xs text-[#5C3A1E]/80 font-light mt-0.5 leading-relaxed">
              {t("content1")}
            </p>
          </div>
        </div>

        {/* Card 2: Phone Channels */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            📞
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              {t("title2")}
            </h4>
            <p className="text-sm text-[#2C1810] font-medium">
              +91 93190 87326
            </p>
            <p className="text-sm text-[#2C1810] font-medium mt-0.5">
              +91 92196 63835
            </p>
            <span className="text-xs text-[#5C3A1E]/80 font-light mt-0.5 leading-relaxed">
              {t("content2")}
            </span>
          </div>
        </div>

        {/* Card 3: Email Portal */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            ✉️
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              {t("title3")}
            </h4>
            <p className="text-sm text-[#2C1810] font-medium hover:text-[#A63D00] transition-colors">
              <a href="mailto:info@mjsvrindavan.com">info@mjsvrindavan.com</a>
            </p>
            <p className="text-xs text-[#5C3A1E]/80 font-light mt-0.5 leading-relaxed">
              {t("content3")}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#FFF5EF] text-[#2C1810] rounded-2xl relative overflow-hidden border border-[#A63D00]/10 shadow-[0_4px_12px_rgba(166,61,0,0.05)]">
        {/* Decorative Icon */}
        <div className="absolute right-4 bottom-2 text-6xl opacity-[0.08] pointer-events-none font-serif">
          🚩
        </div>

        <h4 className="font-serif text-sm font-bold text-[#A63D00] mb-2 uppercase tracking-widest">
          {t("noteHeading")}
        </h4>

        <p className="text-xs text-[#5D4037]/80 font-medium leading-relaxed">
          {t("noteDetails")}
        </p>
      </div>
    </div>
  );
}
