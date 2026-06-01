"use client";

import React, { useState } from "react";
import DonorFormModal from "../UI/DonorFormModal";
import { CauseType } from "../UI/Types.types";

const CAUSES_DATA: CauseType[] = [
  {
    id: "general",
    title: "सामान्य जीर्णोद्धार कोष",
    badge: "General",
    desc: "समग्र मंदिर विकास एवं व्यवस्था",
  },
  {
    id: "stone",
    title: "शिलादान सेवा",
    badge: "Stone",
    desc: "प्राचीन नक्काशीदार पत्थरों का क्रय",
  },
  {
    id: "vigraha",
    title: "विग्रह सेवा एवं पूजा प्रबंध",
    badge: "Vigraha",
    desc: "दिव्य संरक्षण एवं दैनिक आरती",
  },
];

export default function DonationForm(): React.JSX.Element {
  // 1. Kept strictly as a number type
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [selectedCause, setSelectedCause] = useState<string>("general");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Donor State Matrix
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    sankalpaGotra: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormOpenAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    // 2. Fixed validation check directly using the number value
    if (!donationAmount || donationAmount <= 0) {
      alert("कृपया एक वैध सहयोग राशि दर्ज करें।");
      return;
    }
    setIsModalOpen(true);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `संकल्प स्वीकृत! दाता: ${donorInfo.fullName}, राशि: ₹${donationAmount}, सेवा: ${
        CAUSES_DATA.find((c) => c.id === selectedCause)?.title
      }`,
    );
    setIsModalOpen(false);
  };

  const currentSelectedCauseTitle =
    CAUSES_DATA.find((c) => c.id === selectedCause)?.title || "";

  const currentSelectedCauseDescription =
    CAUSES_DATA.find((c) => c.id === selectedCause)?.desc || "";

  const currentSelectedCauseBadge =
    CAUSES_DATA.find((c) => c.id === selectedCause)?.badge || "";

  return (
    <section
      className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      id="support-vision"
    >
      {/* Background Subtle Geometrical Grid Effect */}
      <div className="absolute inset-0 bg-[radial-linear(#2C1810_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="bg-[#110704] rounded-[3.5rem] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden border border-[#2C1810]/60 shadow-[0_50px_100px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Deep Ambient Light Orbs */}
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] bg-[#A63D00]/[0.15] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -left-32 -top-32 w-[500px] h-[500px] bg-[#D4A017]/[0.08] rounded-full blur-[140px] pointer-events-none" />

        {/* LEFT: EDITORIAL COPY BRANDING */}
        <div className="lg:col-span-5 space-y-8 text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#F4D28C]">
              पुण्य निधि सहयोग
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-white tracking-tight leading-22">
              संस्कृति की <br />
              पुनर्स्थापना में <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] pt-2">
                गिलहरी योगदान
              </span>{" "}
              दें
            </h2>
            <div className="w-16 h-[2px] bg-linear-to-r from-[#D4A017] to-transparent" />
          </div>

          <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-md">
            आपके द्वारा समर्पित प्रत्येक अंशदान सीधे प्राचीन विग्रहों के
            संरक्षण, वैदिक वास्तुकला के सुदृढ़ीकरण और सांस्कृतिक धरोहरों की
            सुरक्षा प्रणालियों के संचालन में पूर्ण पारदर्शिता के साथ विनियोग
            किया जाता है।
          </p>

          <div className="pt-4 hidden sm:block">
            <div className="text-[10px] font-mono tracking-widest text-white/30 uppercase border-l-2 border-[#D4A017]/30 pl-3">
              80G Tax Exemption Certified Mechanism
            </div>
          </div>
        </div>

        {/* RIGHT: PREMIUM GLASSMORMIC PANEL CONTROLS */}
        <div className="lg:col-span-7 w-full relative z-10 bg-[#150B07]/60 border border-white/[0.06] rounded-[2.5rem] backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.05)] p-2">
          <div className="border border-[#D4A017]/10 rounded-[2.3rem] p-6 sm:p-9 bg-radial from-white/[0.01] to-transparent">
            <form onSubmit={handleFormOpenAttempt} className="space-y-8">
              {/* 01. Cause Selection */}
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs sm:text-sm font-bold text-[#F4D28C] uppercase tracking-[0.2em] block">
                    ०१. सेवा विधा का चयन करें
                  </label>
                  <span className="text-[11px] sm:text-xs font-mono text-white/40 uppercase tracking-widest">
                    [ Select One ]
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {CAUSES_DATA.map((cause) => {
                    const isSelected = selectedCause === cause.id;
                    return (
                      <button
                        key={cause.id}
                        type="button"
                        onClick={() => setSelectedCause(cause.id)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-500 relative flex flex-col justify-between min-h-40 group select-none ${
                          isSelected
                            ? "bg-linear-to-b from-[#A63D00]/15 to-[#A63D00]/5 border-[#D4A017] shadow-[0_15px_30px_-10px_rgba(166,61,0,0.2)]"
                            : "bg-white/1 border-white/5 hover:border-white/15 hover:bg-white/3"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute inset-0 border border-[#D4A017]/30 rounded-2xl animate-pulse pointer-events-none" />
                        )}

                        <div className="space-y-2.5 relative z-10 w-full">
                          <div className="flex justify-between items-center">
                            <span
                              className={`text-[10px] sm:text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded ${
                                isSelected
                                  ? "bg-[#D4A017]/10 text-[#D4A017]"
                                  : "bg-white/5 text-white/50"
                              }`}
                            >
                              {cause.badge}
                            </span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#D4A017] shadow-[0_0_8px_#D4A017]" />
                            )}
                          </div>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide leading-snug group-hover:text-[#F4D28C] transition-colors">
                            {cause.title}
                          </h4>
                        </div>
                        <p className="text-xs text-white/50 font-light tracking-wide line-clamp-2 w-full mt-3 border-t border-white/4 pt-2.5">
                          {cause.desc || "पावन संकल्प सेवा प्रबंध"}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 02. Integrated Amount Control Center */}
              <div className="space-y-4 text-left">
                <label className="text-xs sm:text-sm font-bold text-[#F4D28C] uppercase tracking-[0.2em] block px-1">
                  ०२. पावन सहयोग राशि (₹)
                </label>

                <div className="bg-[#1C120C] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-4 w-full group/container focus-within:border-[#D4A017]/40 transition-all duration-300">
                  <div className="relative w-full group/input">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4D28C] font-serif text-lg font-bold pointer-events-none">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="अन्य राशि दर्ज करें"
                      // 3. Fallback to empty string when 0 so input placeholder displays nicely
                      value={donationAmount === 0 ? "" : donationAmount}
                      // 4. Safely parsing string to number on typing
                      onChange={(e) =>
                        setDonationAmount(Number(e.target.value))
                      }
                      className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl py-3.5 pl-10 pr-4 text-white text-base font-semibold tracking-wide focus:outline-none focus:border-[#D4A017]/30 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-white/20 placeholder:text-xs placeholder:font-normal"
                      required
                    />
                  </div>

                  {/* Quick Action Pack */}
                  <div className="grid grid-cols-3 gap-3 w-full pt-1">
                    {[
                      // 5. Converted these values to numbers
                      { value: 2100, label: "शुभ", desc: "Shubh" },
                      { value: 5100, label: "समृद्धि", desc: "Samriddhi" },
                      { value: 11000, label: "महा", desc: "Maha" },
                    ].map((item) => {
                      const isSelected = donationAmount === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => setDonationAmount(item.value)}
                          className={`relative rounded-2xl p-3 flex flex-col items-center justify-center border transition-all duration-500 cursor-pointer select-none active:scale-[0.97] group/btn overflow-hidden ${
                            isSelected
                              ? "bg-gradient-to-b from-[#FAF0D7] via-[#F4D28C] to-[#D4A017] border-[#D4A017] text-[#1A0F0A] shadow-[0_10px_25px_rgba(212,160,23,0.25)] -translate-y-1"
                              : "bg-white/[0.02] border-white/[0.06] text-white/80 hover:bg-white/[0.06] hover:border-white/[0.15] hover:-translate-y-0.5"
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-70 animate-pulse pointer-events-none" />
                          )}

                          <div className="flex items-center gap-1.5 mb-1">
                            <span
                              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                                isSelected
                                  ? "bg-[#1A0F0A] scale-125 shadow-sm"
                                  : "bg-[#D4A017]/40 group-hover/btn:bg-[#D4A017] group-hover/btn:scale-110"
                              }`}
                            />
                            <span
                              className={`text-[8px] font-sans font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                                isSelected
                                  ? "text-[#1A0F0A]/70"
                                  : "text-[#D4A017]/70 group-hover/btn:text-[#F4D28C]"
                              }`}
                            >
                              {item.desc}
                            </span>
                          </div>

                          <span
                            className={`font-mono text-sm sm:text-base font-black tracking-wide transition-all duration-300 ${
                              isSelected
                                ? "scale-105 drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]"
                                : "text-white"
                            }`}
                          >
                            {/* 6. Passed standard number to helper directly */}
                            {/* Updated line-to rule for Tailwind v4 compatibility if required */}
                            ₹{item.value.toLocaleString("en-IN")}
                          </span>

                          <span
                            className={`text-[9px] font-medium font-serif mt-1 tracking-wider opacity-0 transition-all duration-500 max-h-0 overflow-hidden group-hover/btn:opacity-100 group-hover/btn:max-h-4 ${
                              isSelected
                                ? "opacity-100 max-h-4 text-[#1A0F0A]/80"
                                : "text-[#EADFC9]/50"
                            }`}
                          >
                            {item.label} संकल्प
                          </span>

                          <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-500 ${
                              isSelected
                                ? "w-1/2 bg-[#1A0F0A]"
                                : "w-0 bg-[#D4A017]/40 group-hover/btn:w-1/3"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Master Ultimate Gateway Trigger Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#D4A017] via-[#C48C15] to-[#A63D00] text-white text-sm font-bold uppercase tracking-[0.25em] py-5 rounded-2xl text-center shadow-[0_20px_40px_-5px_rgba(166,61,0,0.3)] hover:opacity-95 hover:shadow-[0_25px_50px_-5px_rgba(212,160,23,0.4)] active:scale-[0.99] transition-all duration-500 cursor-pointer relative overflow-hidden group"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    संकल्प के साथ आगे बढ़ें
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RENDER DYNAMIC COMPONENT MODAL */}
      <DonorFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        donorInfo={donorInfo}
        selectedPlan={{
          id: selectedCause,
          title: currentSelectedCauseTitle,
          amount: donationAmount,
          desc: currentSelectedCauseDescription,
          badge: currentSelectedCauseBadge,
        }}
        customAmount={donationAmount}
        onChange={handleInputChange}
        onSubmit={handleFinalSubmit}
      />
    </section>
  );
}
