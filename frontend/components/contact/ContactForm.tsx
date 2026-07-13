"use client";

import React from "react";
import { useTranslations } from "next-intl";

// Typescript interface props ko define karne ke liye
interface ContactFormProps {
  formState: {
    name: string;
    email: string;
    phone: string;
    sevaInterest: string;
    message: string;
  };
  onChange: (fields: Partial<ContactFormProps["formState"]>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
}

export default function ContactForm({
  formState,
  onChange,
  onSubmit,
  submitted,
}: ContactFormProps) {
  const t = useTranslations("Contact");
  return (
    <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#D4A017]/15 shadow-[0_10px_40px_rgba(44,24,16,0.02)] text-left">
      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-[#2C1810]">
          {t("formHeading")}
        </h3>
        <p className="text-xs text-[#5C3A1E]/70 font-light mt-1">
          {t("formP")}
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium animate-fadeIn">
          ✓ आपका संदेश सफलतापूर्वक सुरक्षित कर लिया गया है। मानव जाग्रती टीम
          जल्द ही आपसे संपर्क करेगी। राम राम!
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C3A1E]/80">
              {t("name")} *
            </label>
            <input
              type="text"
              required
              value={formState.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="उदा. xxxx xxxx"
              className="w-full bg-[#FCFAF5] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-xs text-[#2C1810] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C3A1E]/80">
              {t("number")} *
            </label>
            <input
              type="tel"
              required
              value={formState.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="उदा. +91 99999 xxxxx"
              className="w-full bg-[#FCFAF5] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-xs text-[#2C1810] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Email & Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C3A1E]/80">
              {t("email")}
            </label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => onChange({ email: e.target.value })}
              placeholder="username@gmail.com"
              className="w-full bg-[#FCFAF5] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-xs text-[#2C1810] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] focus:bg-white transition-all duration-200"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C3A1E]/80">
              {t("subject")}
            </label>
            <select
              value={formState.sevaInterest}
              onChange={(e) => onChange({ sevaInterest: e.target.value })}
              className="w-full bg-[#FCFAF5] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-xs text-[#2C1810] focus:outline-none focus:border-[#A63D00] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="सामान्य पूछताछ">
                {t("sevaOptions.general")}
              </option>
              <option value="गौ सेवा योगदान">
                {t("sevaOptions.cowService")}
              </option>
              <option value="धरोहर जीर्णोद्धार">
                {t("sevaOptions.heritageRestoration")}
              </option>
              <option value="स्वयंसेवक सदस्यता">
               {t("sevaOptions.volunteer")}
              </option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#5C3A1E]/80">
            {t("description")} *
          </label>
          <textarea
            rows={4}
            required
            value={formState.message}
            onChange={(e) => onChange({ message: e.target.value })}
            placeholder="यहाँ विस्तार से लिखें कि आप किस प्रकार से जुड़ना चाहते हैं..."
            className="w-full bg-[#FCFAF5] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-xs text-[#2C1810] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] focus:bg-white transition-all duration-200 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2C1810] to-[#1A0B05] text-[#F4D28C] hover:from-[#A63D00] hover:to-[#7A1F0E] hover:text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#2C1810]/10 transition-all duration-300 cursor-pointer"
          >
            {t("submit")} 📤
          </button>
        </div>
      </form>
    </div>
  );
}
