"use client";

import React, { useState, useRef, useEffect } from "react";

const initialTestimonials = [
  {
    id: 1,
    initials: "RS",
    name: "Rajesh Sharma",
    location: "Jaipur, Rajasthan",
    text: "The Narayan Kavach changed our home completely. There's been a palpable shift in energy — more peace, more harmony. Maharaj Ji's blessings are truly working through this sacred yantra.",
  },
  {
    id: 2,
    initials: "PM",
    name: "Priya Mishra",
    location: "Lucknow, UP",
    text: "Our Braj Yatra with Aaradhya Yatri Sanstha was the most spiritually transforming experience of my life. Maharaj Ji's presence in Vrindavan, the aarti on Yamuna — I still weep with gratitude.",
  },
  {
    id: 3,
    initials: "AK",
    name: "Anil Kumar Gupta",
    location: "Agra, UP",
    text: "I started Gau Seva monthly contribution two years ago. The punya I feel is indescribable. My business has flourished, my family is healthy — Gau Mata's blessings are real and profound.",
  },
  {
    id: 4,
    initials: "VS",
    name: "Vikram Singh",
    location: "Delhi, NCR",
    text: "Listening to Maharaj Ji's daily Pravachan on Shrimad Bhagwat Geeta has cleared all my internal anxieties. It's practical spiritual medicine for corporate stress.",
  },
  {
    id: 5,
    initials: "ND",
    name: "Nisha Patel",
    location: "Mumbai, MH",
    text: "Attending the online parikrama updates during Kartik Maas felt like being right there in Vrindavan. The dedication of the foundation's sevadars is highly commendable.",
  },
  {
    id: 6,
    initials: "RK",
    name: "Ramesh Kulkarni",
    location: "Pune, Maharashtra",
    text: "The sacred literature sent by the ashram has completely altered my perspective on life and duty. Truly grateful to be connected to this pure lineage.",
  },
  {
    id: 7,
    initials: "ST",
    name: "Suman Tiwari",
    location: "Varanasi, UP",
    text: "Serving the local gaushala after being inspired by Maharaj Ji's upadesh has brought immense prosperity and peace to our entire extended household.",
  },
  {
    id: 8,
    initials: "JM",
    name: "Jyoti Mehta",
    location: "Ahmedabad, GJ",
    text: "The pure vibes of the chanting sessions arranged by the samiti are incredible. My kids have started learning shlokas too. Absolute divine transformation!",
  },
];

export default function TestimonialsSection() {
  const [list, setList] = useState(initialTestimonials);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Form State
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");

  // Track which card is in the center during scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;

    // Calculate index based on card width (384px) + gap (24px) = 408px
    const cardWidthWithGap = 96*4 + 24;
    const centerOffset = clientWidth / 2;

    // Determine which card index sits closest to the viewport center line
    const calculatedIndex =
      Math.round(
        (scrollLeft + centerOffset - cardWidthWithGap / 2) / cardWidthWithGap,
      ) - 1;

    // Bound the index safely within our array limits
    const safeIndex = Math.max(0, Math.min(list.length - 1, calculatedIndex));
    setActiveIndex(safeIndex);
  };

  // Trigger calculation on mount to highlight the first card perfectly
  useEffect(() => {
    handleScroll();
  }, [list]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newReview = {
      id: Date.now(),
      initials: initials || "DV",
      name,
      location: location || "India",
      text,
    };

    setList([newReview, ...list]);
    setName("");
    setLocation("");
    setText("");
    setIsOpen(false);

    // Snap back to the fresh testimonial at start position
    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 100);
  };

  // Shift exactly one card at a time left or right
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidthWithGap = 408;
      const targetIndex =
        direction === "left" ? activeIndex - 1 : activeIndex + 1;

      if (targetIndex >= 0 && targetIndex < list.length) {
        const scrollTo = targetIndex * cardWidthWithGap;
        sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-[#2C1810] to-[#7A1F0E] px-4 py-20 sm:px-8 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A63D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Header Frame */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8 mb-12 text-center md:text-left">
          <div>
            <span className="inline-block rounded-full border border-[#D4A017]/25 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              Devotee Stories
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What <span className="text-[#D4A017]">Devotees</span> Say
            </h2>
            <p className="mt-2 text-sm text-[#F4D28C]/80">
              Real stories of transformation, faith, and divine grace
            </p>
          </div>

          {/* Stepper Chevron Controls */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-[#D4A017] hover:text-[#2C1810] disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={activeIndex === list.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-[#D4A017] hover:text-[#2C1810] disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Card Track with Custom Center Padding Alignments */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none" }}
          className="scrollbar-none flex gap-6 overflow-x-auto scroll-smooth pb-12 pt-4 snap-x snap-mandatory px-[calc(50%-160px)]"
        >
          {list.map((item, index) => {
            const isCentered = index === activeIndex;
            return (
              <article
                key={item.id}
                className={`w-96 shrink-0 snap-center group relative flex flex-col overflow-hidden rounded-[20px] p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 transform
                  ${
                    isCentered
                      ? "border-[#D4A017] bg-white/[0.12] scale-105 shadow-[0_10px_30px_rgba(212,160,23,0.15)] opacity-100 z-10"
                      : "border-[#D4A017]/10 bg-white/5 scale-95 opacity-40 blur-[0.5px]"
                  }
                `}
              >
                {/* Giant Decorative Quote Indicator */}
                <span
                  className={`absolute -top-6 left-4 select-none font-serif text-[10rem] font-bold leading-none pointer-events-none transition-colors duration-500
                  ${isCentered ? "text-[#D4A017]/15" : "text-[#D4A017]/5"}
                `}
                >
                  “
                </span>

                {/* Stars container */}
                <div className="relative z-10 mb-4 flex gap-0.5 text-xs text-[#D4A017]">
                  {"★".repeat(5)}
                </div>

                {/* Quote Block */}
                <p className="relative z-10 mb-6 font-serif text-sm italic leading-relaxed text-[#F4D28C]/90">
                  "{item.text}"
                </p>

                {/* Devotee Bio Footer */}
                <div className="relative z-10 flex items-center gap-3 mt-auto">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A017] to-[#A63D00] text-xs font-bold text-white shadow-md">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F4D28C]">
                      {item.name}
                    </h4>
                    <span className="mt-0.5 block text-[11px] text-[#F4D28C]/60 font-light">
                      📍 {item.location}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal Open Anchor Button */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => setIsOpen(true)}
            className="mx-auto md:mx-0 shrink-0 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-transparent px-6 py-3 text-xs font-semibold tracking-wider text-[#F4D28C] uppercase transition-all duration-300 hover:bg-[#D4A017] hover:text-[#2C1810] hover:border-transparent active:scale-95 shadow-lg"
          >
            ✍️ Share Your Story
          </button>
        </div>
      </div>

      {/* Form Dialog Box Modal Popover */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#2C1810] p-6 shadow-2xl sm:p-8">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-xl" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-serif text-xl font-bold text-[#F4D28C]">
                Submit Your Devotional Review
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white font-bold text-lg p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#F4D28C]/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#F4D28C]/70 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vrindavan, UP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#F4D28C]/70 mb-1">
                  Your Experience / Transformation *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share how Maharaj Ji's guidance, Gau Seva, or Yatra transformed your life..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4A017] focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#D4A017] to-[#A63D00] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform active:scale-98 hover:brightness-110 mt-2"
              >
                Submit Devotee Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
