"use client";
import React from "react";
// Swiper के लिए जरूरी इम्पोर्ट्स
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

interface Poster {
  id: string;
  title: string;
  image_path: string;
}
interface UpcomingPostersProps {
  posters: Poster[];
}

export default function UpcomingPosters({ posters }: UpcomingPostersProps) {
  if (!posters || posters.length === 0) return null;
  const t = useTranslations("UpcomingKathaPoster");

  return (
    <section className="py-8 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#2C1810] text-center mb-12">
          {t("heading")}
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {posters.map((poster) => (
            <SwiperSlide key={poster.id}>
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 group">
                <div className="relative overflow-hidden rounded-2xl h-72">
                  <img
                    src={poster.image_path}
                    alt={poster.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/80 to-transparent opacity-60" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-bold text-[#2C1810]">
                    {poster.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
