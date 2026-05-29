"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";

const blogs = [
  {
    id: 1,
    image:
      "https://iskconkathwada.org/wp-content/uploads/2025/12/13-1024x769.jpg",
    tag: "Gau Seva",
    date: "June 5, 2025",
    title: "Why Gau Mata is Called the Mother of the Universe",
    excerpt:
      "Explore the deep Vedic significance of Gau Mata and why serving her is considered the highest act of dharma...",
  },
  {
    id: 2,
    image:
      "https://vrindavantoday.in/wp-content/uploads/2022/02/248378897_4438140159635212_175650552244419658_n.jpg",
    tag: "Yatra",
    date: "May 28, 2025",
    title: "84 Sacred Spots of Braj Mandal — A Complete Guide",
    excerpt:
      "Discover the mystical geography of Braj — where every stone, tree, and river carries the memory of Krishna's divine leelas...",
  },
  {
    id: 3,
    image:
      "https://vedicfeed.com/wp-content/uploads/2019/07/Srimad-Bhagavatam-Srimad-Bhagavata-Purana.jpg",
    tag: "Spiritual",
    date: "May 15, 2025",
    title: "The Power of Shrimad Bhagwat Katha in Kaliyuga",
    excerpt:
      "Maharaj Ji explains why Bhagwat Katha is the supreme spiritual medicine for the ailments of this age of darkness...",
  },
  {
    id: 4,
    image:
      "https://greator.com/wp-content/uploads/2022/07/shutterstock_559454563.jpeg",
    tag: "Meditation",
    date: "May 10, 2025",
    title: "Art of Mindful Chanting: Finding Inner Silence",
    excerpt:
      "Diving into the psychological and spiritual benefits of Japa yoga and sound vibrations in daily morning routines...",
  },
  {
    id: 5,
    image:
      "https://www.shivkhori.in/wp-content/uploads/2025/10/Maha-Shivratri.webp",
    tag: "Festivals",
    date: "May 01, 2025",
    title: "The Cosmic Significance of Maha Shivratri Mysteries",
    excerpt:
      "Unveiling the deep metaphysical truths behind the night of Shiva, fasting, and awakening cosmic consciousness...",
  },
  {
    id: 6,
    image:
      "https://www.cheggindia.com/wp-content/uploads/2025/06/gk-266713-4-vedas-v5.png",
    tag: "Vedas",
    date: "April 24, 2025",
    title: "Understanding Karma: The Infallible Law of Echoes",
    excerpt:
      "How actions shape reality across timelines. Deconstructing Prarabdha, Sanchita, and Agami karma frameworks...",
  },
  {
    id: 7,
    image: "https://pbs.twimg.com/media/F2Ic6y6bMAAfKfa.jpg",
    tag: "Satsang",
    date: "April 12, 2025",
    title: "Surrendering the Ego: The Path of Pure Bhakti",
    excerpt:
      "Practical insights into Navadha Bhakti (nine forms of devotion) and softening the analytical mind to experience love...",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/10743516/pexels-photo-10743516.jpeg",
    tag: "Seva",
    date: "April 05, 2025",
    title: "Annam Brahma: The Sacred Duty of Food Distribution",
    excerpt:
      "Reflections on serving prasadam to pilgrims and why sharing food is honored as a vital pillar of spiritual culture...",
  },
];

export default function BlogSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

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
              Spiritual Wisdom
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#2C1810] sm:text-4xl">
              Pravachan & <span className="text-[#A63D00]">Sacred Blogs</span>
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

        {/* Horizontal Slider Track Wrapper */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="scrollbar-none flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group w-[290px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_4px_25px_rgba(44,24,16,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(122,31,14,0.08)] sm:w-[320px]"
              >
                {/* Real Image Canvas Wrap */}
                <div className="relative h-[210px] w-full overflow-hidden bg-[#2C1810]/5">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Shadow Base over image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md bg-[#7A1F0E]/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#F4D28C] backdrop-blur-sm">
                    {blog.tag}
                  </span>
                </div>

                {/* Text Content Block */}
                <div className="p-5">
                  <time className="block text-[10px] font-bold tracking-widest text-[#A63D00] uppercase mb-1.5">
                    {blog.date}
                  </time>
                  <h3 className="font-serif text-base font-bold leading-snug text-[#2C1810] line-clamp-2 transition-colors group-hover:text-[#A63D00] mb-2">
                    {blog.title}
                  </h3>
                  <p className="line-clamp-3 text-xs leading-relaxed text-[#5C3A1E]/80">
                    {blog.excerpt}
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
