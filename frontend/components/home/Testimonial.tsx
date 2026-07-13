"use client";

import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";

export default function TestimonialsSection({
  list,
  formData,
  onInputChange,
  onAddTestimonial,
}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Testimonial");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onAddTestimonial();
    if (success) setIsOpen(false);
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      // 380px card width + 24px gap
      const scrollAmount = 404;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-[#A63D00] via-[#D4A017] to-[#A63D00] py-20 relative overflow-hidden"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header with Navigation */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-12">
          <div>
          
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("heading")}
            </h2>

            <p className="mt-2 text-sm text-[#f4daa7]">
              {t("p")}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/20"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/20"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-none"
        >
          {list.map((item: any, index: number) => (
            <article
              key={index}
              className="w-[380px] shrink-0 snap-center bg-white p-8 rounded-[2rem] border border-[#D4A017]/20 shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="text-[#D4A017] text-4xl mb-6">❝</div>
              <p className="text-[#5D4037] italic mb-8 min-h-[120px]">
                {item.text}
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 rounded-full bg-[#A63D00]/10 flex items-center justify-center text-[#A63D00] font-bold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-[#2C1810] font-bold">{item.name}</h4>
                  <p className="text-[#A63D00]/70 text-xs">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
