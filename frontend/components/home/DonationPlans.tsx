"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const DonationPlans = ({ plans = [] }: { plans: any[] }) => {
  const router = useRouter();
  const t = useTranslations("Subscription");

  const handleSelect = (plan: any) => {
    sessionStorage.setItem("selectedPlan", JSON.stringify(plan));
    router.push("/join-membership");
  };


  return (
    <section
      id="plans"
      className="relative bg-gradient-to-br from-[#A63D00] via-[#D4A017] to-[#A63D00] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-serif font-bold mb-4">
            {t("heading")}
          </h2>
          <p className="text-[#F4D28C]/80 max-w-xl mx-auto">
            {t("p")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => {
            let features = [];
            try {
              features =
                typeof plan.features === "string"
                  ? JSON.parse(plan.features)
                  : plan.features;
            } catch (e) {
              features = [];
            }

            // UX: Highlight the second plan as "Recommended" if available
            const isRecommended = index === 1;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 
                  ${
                    isRecommended
                      ? "bg-white/15 border-2 border-[#F4D28C] shadow-[0_0_30px_rgba(244,210,140,0.2)]"
                      : "bg-white/10 border border-white/20 hover:bg-white/15"
                  } backdrop-blur-md`}
              >
                {isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4D28C] text-[#2C1810] text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
                    Popular
                  </span>
                )}

                <div className="mb-8 text-center">
                  <span className="text-[#F4D28C] text-sm font-bold uppercase tracking-[0.2em] block mb-2">
                    {plan.plan_name}
                  </span>
                  <span className="font-['Cinzel',serif] text-5xl font-black text-white block">
                    {plan.price}
                  </span>
                </div>

                <ul className="text-left space-y-4 mb-8 flex-grow">
                  {features.length > 0 ? (
                    features.slice(0, 5).map((feat: string, i: number) => (
                      <li
                        key={i}
                        className="text-white/90 text-sm flex items-start gap-3"
                      >
                        <span className="text-[#F4D28C] mt-0.5">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-white/50 text-sm italic">
                      Standard benefits included.
                    </li>
                  )}
                </ul>

                <button
                  onClick={() => handleSelect(plan)}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 cursor-pointer
                    ${
                      isRecommended
                        ? "bg-[#F4D28C] text-[#2C1810] hover:bg-white"
                        : "bg-white/10 text-white border border-white/20 hover:bg-[#D4A017] hover:border-[#D4A017]"
                    }`}
                >
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonationPlans;
