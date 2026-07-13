"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { useTranslations } from "next-intl";

const BlogImage = ({
  src,
  alt,
}: {
  src: string | null | undefined;
  alt: string;
}) => {
  const fallback =
    "https://i.pinimg.com/736x/c5/a0/03/c5a00375d647591a14dd36e31151acb1.jpg";

  // URL को साफ करें
  const finalSrc = src && src.trim() !== "" ? src : fallback;

  return (
    <Image
      src={finalSrc}
      alt={alt || "Blog Image"}
      fill
      sizes="(max-width: 768px) 100vw, 320px"
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback;
      }}
    />
  );
};

export default function BlogSection({blogs} : any) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Blogs");``
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#FDFBF7] px-4 py-20 sm:px-8" id="blog">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-[#2C1810]/10 pb-6 mb-10 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A63D00]">
              {t("p")}
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#2C1810] sm:text-4xl">
              {t("heading")}
            </h2>
          </div>

          {/* Custom Navigation Chevrons */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2C1810]/20 bg-white text-[#2C1810] transition-colors hover:border-[#A63D00] hover:bg-[#A63D00] hover:text-[#F4D28C]"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2C1810]/20 bg-white text-[#2C1810] transition-colors hover:border-[#A63D00] hover:bg-[#A63D00] hover:text-[#F4D28C]"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="scrollbar-none flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {blogs.map((blog: any) => (
              <article
                key={blog.id}
                className="group w-[290px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_4px_25px_rgba(44,24,16,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(122,31,14,0.08)] sm:w-[320px]"
              >
                <div className="relative h-[210px] w-full overflow-hidden bg-[#2C1810]/5">
                  <BlogImage src={blog.imageUrl} alt={blog.title} />

                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md bg-[#7A1F0E]/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#F4D28C] backdrop-blur-sm">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5">
                  <time className="block text-[10px] font-bold tracking-widest text-[#A63D00] uppercase mb-1.5">
                    {blog.publishDate}
                  </time>
                  <h3 className="font-serif text-base font-bold leading-snug text-[#2C1810] line-clamp-2 transition-colors group-hover:text-[#A63D00] mb-2">
                    {blog.title}
                  </h3>
                  <p className="line-clamp-3 text-xs leading-relaxed text-[#5C3A1E]/80">
                    {blog.content}
                  </p>
                </div>
              </article>
            ))}

            {/* "View All" Slider End-Cap Card */}
            <div
              onClick={() => (window.location.href = "/blogs")}
              className="flex w-[240px] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D4A017]/30 bg-[#FFFDF9] p-6 text-center cursor-pointer group transition-colors hover:border-[#A63D00]/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A63D00]/10 text-[#A63D00] transition-transform group-hover:scale-110">
                →
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#2C1810]">
                Explore All Wisdom
              </h3>
              <p className="mt-1 text-xs text-[#5C3A1E]/70">
                Read through our entire archive of deep spiritual discourses.
              </p>
            </div>
          </div>
        </div>

        {/* Global Fallback Desktop Button */}
        <div className="mt-6 text-center sm:hidden">
          <Button title={"Read All Blogs"} navUrl={"/blogs"} />
        </div>
      </div>
    </section>
  );
}
