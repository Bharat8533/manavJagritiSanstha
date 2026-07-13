import React from "react";
import Link from "next/link";
import Button from "../UI/Button";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  aspectClass: string; // Forces the asymmetric Pinterest height variations
}

export default function PhotoGallery() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/images/1003350058.jpg.jpeg",
      caption: "Gau Mata Seva Camp 2024",
      aspectClass: "aspect-[3/4]",
    },
    {
      id: 2,
      image: "/images/1003350059.jpg.jpeg",
      caption: "Vrindavan Temple Darshan",
      aspectClass: "aspect-[2/3]", // Extra tall portrait
    },
    {
      id: 3,
      image: "/images/1003350060.jpg.jpeg",
      caption: "Maharaj Ji Katha",
      aspectClass: "aspect-square", // Square
    },
    {
      id: 4,
      image: "/images/1003350061.jpg.jpeg",
      caption: "Temple Restoration",
      aspectClass: "aspect-[3/4]", // Tall portrait
    },
    {
      id: 5,
      image: "/images/1003684925.jpg.jpeg",
      caption: "Yamuna Aarti Vrindavan",
      aspectClass: "aspect-[4/5]", // Intermediate vertical height
    },
    {
      id: 6,
      image: "/images/1003821021.jpg.jpeg",
      caption: "Devotees at Ashram",
      aspectClass: "aspect-[2/3]", // Extra tall portrait
    },
    {
      id: 7,
      image: "/images/IMG_20250823_220426.jpg.jpeg",
      caption: "Evening Bhajan Sandhya",
      aspectClass: "aspect-square",
    },
    {
      id: 8,
      image: "/images/IMG-20250518-WA0269.jpg.jpeg",
      caption: "Seva In Action",
      aspectClass: "aspect-[3/4]",
    },
    {
      id: 9,
      image: "/images/IMG-20250723-WA0073(1).jpg.jpeg",
      caption: "Sacred Shrines",
      aspectClass: "aspect-[2/3]",
    },
    {
      id: 10,
      image: "/images/IMG-20260427-WA0104.jpg.jpeg",
      caption: "Parikrama Moments",
      aspectClass: "aspect-square",
    },
    {
      id: 11,
      image: "/images/IMG-20260428-WA0100.jpg.jpeg",
      caption: "Holy Yamuna Waters",
      aspectClass: "aspect-[4/5]",
    },
    {
      id: 12,
      image: "/images/IMG-20260423-WA0164.jpg.jpeg",
      caption: "Ashram Daily Prayer",
      aspectClass: "aspect-[3/4]",
    },
    {
      id: 13,
      image: "/images/IMG-20260423-WA0175.jpg.jpeg",
      caption: "Spiritual Discourse",
      aspectClass: "aspect-[2/3]",
    },
    {
      id: 14,
      image: "/images/IMG-20260424-WA0227.jpg.jpeg",
      caption: "Temple Architecture",
      aspectClass: "aspect-square",
    },
    {
      id: 15,
      image: "/images/IMG-20260423-WA0160.jpg.jpeg",
      caption: "Gau Seva Camp",
      aspectClass: "aspect-[4/5]",
    },
  ];

  return (
    <section className="bg-[#F7F1E5] py-20 px-4 sm:px-6 lg:px-8" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-[#A63D00] uppercase mb-2 bg-[#A63D00]/10 px-3 py-1 rounded-full">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1810] tracking-tight mt-2">
            Moments of <span className="text-[#A63D00]">Divine Grace</span>
          </h2>
          <div className="w-16 h-1 bg-[#A63D00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic 5-Column Pinterest Grid within max-w-7xl */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 [column-fill:balance]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#2C1810]/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Box configured with variable Pinterest aspect ratio mappings */}
              <div
                className={`relative w-full overflow-hidden bg-[#2C1810]/5 ${item.aspectClass}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Minimalist Pinterest Card Footprint & On-hover Highlight */}
              <div className="p-3.5 bg-white transition-colors duration-300 group-hover:bg-[#7A1F0E]/5">
                <p className="text-[#2C1810] font-semibold text-xs sm:text-sm tracking-wide line-clamp-1 group-hover:text-[#A63D00] transition-colors duration-200">
                  {item.caption}
                </p>
              </div>

              {/* Subtle hover edge indicator */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#A63D00] transition-all duration-300 group-hover:h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
