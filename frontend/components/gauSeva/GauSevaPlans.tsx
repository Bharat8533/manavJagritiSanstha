"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { GauSevaPlansProps } from "../UI/Types.types";

export default function GauSevaPlans({
  plans,
  customAmount,
  setCustomAmount,
  onPlanSelect,
}: GauSevaPlansProps): React.JSX.Element {
  const t = useTranslations("GauSevaPlans");

  return (
    <section
      className="py-24 bg-[#FAF8F5] relative overflow-hidden"
      id="sankalpa"
    >
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#A63D00]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#D4A017]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky self-start h-fit">
            <div className="space-y-4 text-left">
              <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-[#A63D00] uppercase bg-[#A63D00]/5 border border-[#A63D00]/10 px-3.5 py-1.5 rounded-md">
                {t("subheading")}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A] tracking-tight leading-[1.2]">
                {t("heading_part1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A63D00] to-[#D4A017] inline-block pt-2">
                  {t("heading_part2")}
                </span>
              </h2>
              <p className="text-sm text-[#5C3A1E]/70 font-light leading-relaxed max-w-md pt-2">
                {t("description")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#1E0F0A]/5 space-y-3 shadow-sm max-w-md">
              <h4 className="text-xs font-bold text-[#1E0F0A] tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A63D00] rounded-full" />{" "}
                {t("trust_badge")}
              </h4>
              <p className="text-xs text-[#5C3A1E]/60 font-light leading-normal">
                {t("trust_desc")}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-8 rounded-4xl border flex flex-col justify-between transition-all duration-500 text-left lg:col-span-6 ${plan.isFeatured === "1" ? "bg-[#FFF9EE] border-[#A63D00]/30 shadow-md" : "bg-white border-[#2C1810]/5"}`}
                >
                  <div className="space-y-5">
                    <span
                      className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${plan.isFeatured === "1" ? "bg-[#A63D00] text-white" : "bg-[#A63D00]/5 text-[#A63D00]"}`}
                    >
                      {plan.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2C1810]">
                      {plan.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C3A1E]/80 font-light leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-dashed border-[#2C1810]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#5C3A1E]/50 block font-bold uppercase tracking-wider">
                        {t("service_amount")}
                      </span>
                      <span className="font-sans text-2xl font-extrabold text-[#2C1810]">
                        ₹
                        {(
                          parseFloat(plan.amount as string) || 0
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <button
                      onClick={() => onPlanSelect(plan)}
                      className={`text-xs font-bold uppercase px-5 py-3.5 rounded-xl transition-all ${plan.isFeatured === "1" ? "bg-[#A63D00] text-white" : "bg-[#2C1810] text-[#F4D28C]"}`}
                    >
                      {t("btn_label")}
                    </button>
                  </div>
                </div>
              ))}

              {/* Custom Amount Block */}
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-4xl border border-stone-200 shadow-sm md:col-span-2 lg:col-span-12">
                <div className="space-y-4">
                  <span className="inline-block text-[9px] font-bold tracking-widest uppercase bg-[#A63D00]/5 text-[#A63D00] px-2.5 py-1 rounded-md">
                    {t("custom.badge")}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {t("custom.heading")}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed max-w-2xl">
                    {t("custom.desc")}
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-t border-stone-200 pt-5">
                  <div className="relative sm:col-span-8">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A63D00] font-bold text-lg">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder={t("custom.placeholder")}
                      value={customAmount || ""}
                      onChange={(e) =>
                        setCustomAmount(parseFloat(e.target.value) || 0)
                      }
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3.5 pl-9 pr-4 text-sm font-semibold"
                    />
                  </div>
                  <button
                    onClick={() =>
                      onPlanSelect({
                        id: "custom",
                        title: t("custom.heading"),
                        amount: customAmount as number,
                        desc: "Custom Donation",
                        badge: t("custom.badge"),
                      })
                    }
                    className="w-full sm:col-span-4 bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl"
                  >
                    {t("custom.btn")}
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
