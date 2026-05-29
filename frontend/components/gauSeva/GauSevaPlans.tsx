"use client";

import React, { useState } from "react";
import { PlanType, GauSevaPlansProps } from "../UI/Types.types";

const PLANS_DATA: PlanType[] = [
  {
    id: "one-meal",
    title: "एक समय का भोजन (One Meal)",
    amount: 1100,
    desc: "पावन गऊ माताओं को एक समय का हरा चारा एवं पौष्टिक कुट्टी सेवा।",
    badge: "सुलभ सेवा",
  },
  {
    id: "three-days",
    title: "3 दिवसीय संपूर्ण सेवा",
    amount: 3100,
    desc: "3 दिनों तक औषधीय खल, चोकर एवं गुड़ मिश्रित पौष्टिक आहार।",
    badge: "विशेष संकल्प",
  },
  {
    id: "seven-days",
    title: "7 दिवसीय साप्ताहिक सेवा",
    amount: 7100,
    desc: "एक सप्ताह तक गऊशाला की समस्त गऊ माताओं की संपूर्ण सेवा एवं चिकित्सा व्यवस्था।",
    badge: "लोकप्रिय",
    isFeatured: true,
  },
  {
    id: "one-month",
    title: "1 मासिक पूर्ण गऊ कायस्थ",
    amount: 21000,
    desc: "एक मास तक गऊ माताओं के लिए चारे, चोकर, अमृत जल एवं रखरखाव का पूर्ण दायित्व।",
    badge: "महा संकल्प",
  },
];

export default function GauSevaPlans({
  customAmount,
  setCustomAmount,
  onPlanSelect,
}: GauSevaPlansProps): React.JSX.Element {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      className="py-24 bg-[#FAF8F5] relative overflow-hidden"
      id="sankalpa"
    >
      {/* Decorative Elite Organic Mesh Backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#A63D00]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#D4A017]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split Architecture Frame - 'items-start' keeps the DOM stream dynamic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDEBAR COLUMN: Now reinforced with 'h-fit' to prevent ghost bounding boxes */}
          <div className="lg:col-span-5 space-y-8 lg:sticky self-start h-fit">
            <div className="space-y-4 text-left">
              <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-[#A63D00] uppercase bg-[#A63D00]/5 border border-[#A63D00]/10 px-3.5 py-1.5 rounded-md">
                SANKALPA PORTAL
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A] tracking-tight leading-[1.2]">
                पुण्य और <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A63D00] to-[#D4A017] inline-block pt-2">
                  धरातलीय संकल्प
                </span>
              </h2>
              <p className="text-sm text-[#5C3A1E]/70 font-light leading-relaxed max-w-md pt-2">
                वृंदावन धाम में आश्रित बेसहारा और बीमार गऊ माताओं के दैनिक पोषण,
                चिकित्सा और संरक्षण के लिए अपनी सामर्थ्य अनुसार पवित्र माध्यम
                चुनें।
              </p>
            </div>

            {/* Quick Micro trust badge inside sidebar */}
            <div className="p-6 rounded-2xl bg-white border border-[#1E0F0A]/5 space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.01)] max-w-md">
              <h4 className="text-xs font-bold text-[#1E0F0A] tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A63D00] rounded-full" />{" "}
                प्रत्यक्ष पारदर्शिता संकल्प
              </h4>
              <p className="text-xs text-[#5C3A1E]/60 font-light leading-normal">
                आपके द्वारा दी गई प्रत्येक राशि सीधे गऊशाला के FEEDING और मेडिकल
                केयर ऑपरेशन्स में काम आती है। आप कभी भी आकर अपनी सेवा का
                निरीक्षण कर सकते हैं।
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Keeps the grid dynamic so that sidebar has vertical space to glide */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
              {/* Individual Plan Cards */}
              {PLANS_DATA.map((plan) => (
                <div
                  key={plan.id}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative p-8 rounded-4xl border flex flex-col justify-between transition-all duration-500 ease-out text-left select-none group lg:col-span-6 md:col-span-1
                ${
                  plan.isFeatured
                    ? "bg-[#FFF9EE] border-[#A63D00]/30 shadow-[0_15px_40px_-15px_rgba(166,61,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(166,61,0,0.1)]"
                    : "bg-white border-[#2C1810]/5 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-20px_rgba(44,24,16,0.06)] hover:border-[#A63D00]/20"
                }`}
                >
                  <div className="space-y-5">
                    <span
                      className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md transition-colors duration-300
                  ${plan.isFeatured ? "bg-[#A63D00] text-white" : "bg-[#A63D00]/5 text-[#A63D00] group-hover:bg-[#A63D00]/10"}`}
                    >
                      {plan.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2C1810] tracking-wide group-hover:text-[#A63D00] transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C3A1E]/80 font-light leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-dashed border-[#2C1810]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#5C3A1E]/50 block font-bold uppercase tracking-wider">
                        सेवा राशि
                      </span>
                      <span className="font-sans text-2xl lg:text-3xl font-extrabold text-[#2C1810]">
                        ₹{plan.amount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={() => onPlanSelect(plan)}
                      className={`text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm
                    ${
                      plan.isFeatured
                        ? "bg-[#A63D00] text-white hover:bg-[#8B2612]"
                        : "bg-[#2C1810] text-[#F4D28C] hover:bg-[#A63D00] hover:text-white"
                    }`}
                    >
                      Sankalpa ✓
                    </button>
                  </div>
                </div>
              ))}

              {/* CUSTOM AMOUNT CONFIGURATOR BLOCK */}
              <div className="bg-linear-to-br from-[#2C1810] to-[#160B07] p-8 rounded-4xl text-left text-white flex flex-col justify-between md:col-span-2 lg:col-span-12 border border-white/4 shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#A63D00]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4">
                  <span className="inline-block text-[9px] font-bold tracking-widest uppercase bg-white/10 text-[#F4D28C] px-2.5 py-1 rounded-md">
                    इच्छानुसार सेवा
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F4D28C] tracking-wide">
                    स्वेच्छा संकल्प (Custom Pledge)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                    आप अपनी इच्छानुसार कोई भी कस्टमाइज्ड राशि दर्ज करके सीधे
                    सीधे गौ सेवा कोष में योगदान दे सकते हैं। आपकी सूक्ष्म
                    श्रद्धा भी गऊ माताओं के आश्रय और उपचार में अत्यंत सहायक है।
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-t border-white/10 pt-5">
                  <div className="relative sm:col-span-8">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4D28C] font-bold text-lg font-sans">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full bg-white/4 border border-white/10 rounded-xl py-3.5 pl-9 pr-4 text-white font-sans placeholder-white/20 focus:outline-none focus:border-[#D4A017] focus:bg-white/[0.07] text-sm font-semibold transition-all duration-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    disabled={!customAmount || parseInt(customAmount) <= 0}
                    onClick={() =>
                      onPlanSelect({
                        id: "custom",
                        title: "स्वेच्छा संकल्प",
                        amount: parseInt(customAmount),
                        desc: "Custom Donation Account Setup",
                        badge: "स्वेच्छा संकल्प",
                      })
                    }
                    className="w-full sm:col-span-4 bg-linear-to-r from-[#D4A017] to-[#A63D00] text-white disabled:opacity-40 disabled:pointer-events-none transition-all duration-300 text-xs font-bold uppercase tracking-widest py-4 rounded-xl text-center shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
                  >
                    Contribute Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
