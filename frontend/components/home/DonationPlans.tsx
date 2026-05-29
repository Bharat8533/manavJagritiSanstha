'use client';

import React from "react";

interface plan {
  id: number | string;
  amount: string;
  label: string;
  isFeatured?: boolean;
  isCustom?: boolean;
  benefits: string[];
  ctaText: string;
}

const plans: plan[] = [
  {
    id: 501,
    amount: "₹501",
    label: "Shraddhanjali",
    benefits: [
      "One day Gau Mata feed",
      "Prasad sent home",
      "Blessing certificate",
    ],
    ctaText: "Donate ₹501",
  },
  {
    id: 1100,
    amount: "₹1100",
    label: "Abhishek Seva",
    benefits: ["3 days Gau feed", "Temple pooja in name", "Blessed Rudraksha"],
    ctaText: "Donate ₹1100",
  },
  {
    id: 5100,
    amount: "₹5100",
    label: "Mahadev Arpan",
    isFeatured: true,
    benefits: [
      "Monthly Gau Seva",
      "Special Katha invitation",
      "Narayan Kavach",
      "Digital seva certificate",
    ],
    ctaText: "Donate ₹5100",
  },
  {
    id: 11000,
    amount: "₹11000",
    label: "Yagna Sahbhagi",
    benefits: [
      "Temple brick sponsorship",
      "Year-round Gau Seva",
      "Braj Yatra discount",
      "VIP Katha access",
    ],
    ctaText: "Donate ₹11000",
  },
  {
    id: "custom",
    amount: "Custom",
    label: "Your Sankalp",
    isCustom: true,
    benefits: ["Set your own amount", "Choose your cause", "Full flexibility"],
    ctaText: "Custom Donation",
  },
];

const DonationPlans = () => {
  const handlePlanSelection = (id: string | number) => {
    if (id === "custom") {
      console.log("Opening Custom Donation Modal");
    } else {
      console.log(`Opening Donation Plan for amount: ${id}`);
    }
  };

  return (
    <section
      id="plans"
      className="relative bg-gradient-to-br from-[#1a0800] via-[#3d0f00] to-[#7A1F0E] py-20 px-8 overflow-hidden"
    >
      {/* Decorative Radial Background Glow */}
      <div className="absolute -top-[50%] -left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,160,23,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-[#F4D28C] text-[clamp(1.5rem,3vw,2.2rem)] font-bold mb-2 uppercase">
            Sacred Donation Plans
          </h2>
          <p className="text-[rgba(244,210,140,0.6)] text-sm max-w-md mx-auto">
            Choose a plan that resonates with your devotion. Every rupee is a
            blessing.
          </p>
        </div>

        {/* Responsive Plans Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelection(plan.id)}
              className={`relative flex flex-col justify-between ${plan.isFeatured ? "#d4a01714" : "bg-white/5"} border rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                plan.isFeatured
                  ? "border-[#D4A017] bg-[rgba(212,160,23,0.12)] shadow-lg shadow-[#D4A017]/5"
                  : "border-[rgba(212,160,23,0.2)] hover:bg-[rgba(212,160,23,0.08)] hover:border-[rgba(212,160,23,0.5)]"
              }`}
            >
              {/* Most Popular Ribbon Badge */}
              {plan.isFeatured && (
                <span className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white text-[0.65rem] font-bold px-3 py-1 rounded-full tracking-wider uppercase whitespace-nowrap shadow-sm">
                  Most Popular
                </span>
              )}

              {/* Card Header Content */}
              <div className="mb-4">
                <span
                  className={`font-['Cinzel',serif] font-black text-[#F4D28C] block mb-1 ${
                    plan.isCustom ? "text-2xl mt-1" : "text-3xl"
                  }`}
                >
                  {plan.amount}
                </span>
                <span className="text-[rgba(244,210,140,0.6)] text-[0.75rem] font-medium tracking-wide block">
                  {plan.label}
                </span>
              </div>

              {/* Itemized List Benefits Block */}
              <ul className="text-left space-y-2 mb-6 flex-grow">
                {plan.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-[rgba(244,210,140,0.7)] text-[0.75rem] flex items-start gap-1.5 leading-tight"
                  >
                    <span
                      className="text-[#D4A017] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button Trigger */}
              <button className="w-full font-['Cinzel',serif] bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white text-[0.8rem] font-semibold py-2.5 px-4 rounded-xl border-none transition-all duration-200 hover:opacity-95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/50">
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationPlans;
