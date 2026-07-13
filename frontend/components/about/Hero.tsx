"use client";

import React from "react";

const AboutHero = () => {
  return (
    <section className="mt-20 relative h-[30dvh] sm:h-[50dvh] lg:h-[80vh] flex items-center justify-center bg-[#130B07] text-white overflow-hidden px-4 sm:px-6 lg:px-8 selection:bg-[#D4A017] selection:text-[#130B07]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/HeroSectionBanners/गुरु-पूर्णिमा-महोत्सव.png"
          alt="Sacred Vrindavan Background"
          className="w-full h-full object-cover object-bottom transform scale-102"
        />
      </div>
    </section>
  );
};

export default AboutHero;