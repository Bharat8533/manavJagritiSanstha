"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function BookingDesk() {
  const t = useTranslations("BookingDesk");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    aadhaar: "", // Omitted from output digits but structurally active as custom placeholder
    yatraType: "pedal",
    pilgrims: 1,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `पंजीकरण सफल! केंद्रीय सचिवालय प्रभाग जल्द ही आपसे संपर्क करेगा। \nनाम: ${formData.name}`,
    );
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Ambience Blobs */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
        {/* Left Column (5 Cols): Premium Central Secretariat Information Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#E5E0D8] rounded-3xl p-8 sm:p-10 shadow-sm">
          <div>
            {/* Minimal Badge */}
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A63D00] bg-[#FFF5EF] px-3 py-1 rounded-full mb-6 inline-block">
              {t("subheading")}
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1810] mb-10">
              {t("headingquote1")} <br />
              <span className="text-[#A63D00]">{t("headingquote2")}</span>
            </h3>

            <div className="space-y-4">
              {/* Management Center */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF5EF] flex items-center justify-center text-[#A63D00]">
                  📍
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A63D00] mb-0.5">
                    {t("p2")}
                  </p>
                  <p className="font-bold text-[#2C1810]">{t("p1")}</p>
                  <p className="text-sm text-[#5D4037]/70 leading-relaxed">
                    {t("p3")}
                  </p>
                </div>
              </div>

              <div className="h-px bg-[#F0EBE5] my-6" />

              {/* Helpline */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF5EF] flex items-center justify-center text-[#A63D00]">
                  📞
                </div>
                <div className="w-full">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A63D00] mb-3">
                    {t("p4")}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-[#2C1810]">
                    <a
                      href="tel:+919319087326"
                      className="hover:text-[#A63D00] transition-colors"
                    >
                      +91 93190 87326
                    </a>
                    <a
                      href="tel:+919219663835"
                      className="hover:text-[#A63D00] transition-colors"
                    >
                      +91 92196 63835
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-[#F0EBE5] flex items-center justify-between">
            <p className="text-sm text-[#5D4037] hover:text-[#A63D00] transition-colors cursor-pointer">
              manavjagriti19@gmail.com
            </p>
            <div className="text-[#A63D00]/30">✦</div>
          </div>
        </div>
        {/* Right Column (7 Cols): Elite Luxury Intake Form Box */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-white border border-[#D4A017]/15 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_15px_45px_rgba(212,160,23,0.04)] flex flex-col justify-between group relative overflow-hidden"
        >
          {/* Subtle Bottom Ambient Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3D2511] via-[#D4A017] to-[#A63D00]" />

          <div>
            <div className="mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2511]">
                {t("formheading")}
              </h3>
              <p className="text-xs text-[#7A5833]/80 mt-1 font-medium">
                {t("formsubheading")}
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    {t("formname")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="जैसे: राहुल शर्मा"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    {t("formnumber")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    {t("formemail")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@domain.com"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>

                {/* Identity Proof Verification Field Placeholder */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    पहचान पत्र संख्या (ID Proof Number)
                  </label>
                  <input
                    type="text"
                    name="aadhaar"
                    value={formData.aadhaar}
                    onChange={handleInputChange}
                    placeholder="Government Issued ID Number"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Yatra Mode Config Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    यात्रा का प्रकार (Yatra Mode)
                  </label>
                  <div className="relative">
                    <select
                      name="yatraType"
                      value={formData.yatraType}
                      onChange={handleInputChange}
                      className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-semibold focus:outline-none focus:border-[#3D2511] focus:bg-white cursor-pointer shadow-sm appearance-none pr-10"
                    >
                      <option value="pedal">
                        {t("formyatramode1")}
                      </option>
                      <option value="vahan">
                        {t("formyatramode2")}
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A5833] text-[9px] pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Pilgrim Headcount Box */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    {t("formtotalmembers")}
                  </label>
                  <input
                    type="number"
                    name="pilgrims"
                    min={1}
                    value={formData.pilgrims}
                    onChange={handleInputChange}
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-extrabold focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="w-full bg-[#3D2511] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-black py-4 rounded-xl border border-transparent hover:bg-[#D4A017] hover:text-[#3D2511] transition-all duration-300 shadow-[0_4px_15px_rgba(61,37,17,0.1)] hover:shadow-[0_10px_25px_rgba(212,160,23,0.2)] cursor-pointer mt-8 text-center"
          >
            {t("formsubmit")}
          </button>
        </form>
      </div>
    </div>
  );
}
