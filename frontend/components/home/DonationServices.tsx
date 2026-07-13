"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Keep the image and href data static here
const SERVICES_DATA = [
  {
    id: "gau",
    imageUrl:
      "https://images.donatekart.com/campaign/cover/gau-seva720872297.jpg",
    href: "/gauSeva",
  },
  {
    id: "katha",
    imageUrl: "https://www.djjs.org/uploads/news/im_5d25525fbbe20.jpg",
    href: "/kathaBooking",
  },
  {
    id: "yatra",
    imageUrl:
      "https://www.mathuravrindavantaxiservices.com/tour/7-days-braj.webp",
    href: "/brajDarshan",
  },
  {
    id: "kavach",
    imageUrl:
      "https://aakuraa.com/cdn/shop/files/Lakshmi__Shiva__Dhan__Gyaan__Kavach.png?v=1764143829",
    href: "/narayan-kavach",
  },
  {
    id: "temple",
    imageUrl:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Popular-Temples-in-India.jpg",
    href: "/temple",
  },
  {
    id: "donate",
    imageUrl:
      "https://thepuredevotion.in/media/campaign_backgroud/IMG_8309.PNG",
    href: "/donate",
  },
];

const DonationServices = () => {
  const t = useTranslations("DonationServices");

  return (
    <section id="donate" className="py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section remains same */}
        <div className="text-center mb-4 flex flex-col items-center">
          <span className="inline-block bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(166,61,0,0.1)] border border-[rgba(212,160,23,0.3)] text-[#A63D00] text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-[20px] mb-4">
            {t("badge")}
          </span>
          <h2 className="font-['Cinzel',serif] text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#2C1810] font-bold leading-[1.2] mb-3 uppercase">
            {t("heading")}
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4A017] to-[#A63D00] rounded-[2px] my-4" />
          <p className="text-[#5C3A1E] text-[0.95rem] leading-[1.8] max-w-[600px] text-center mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES_DATA.map((service) => (
            <Link
              href={service.href}
              key={service.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-stone-100"
            >
              {/* Image Area */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={t(`services.${service.id}.label`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <span className="text-[0.8rem] font-['Cinzel',serif] text-white font-bold absolute bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 whitespace-nowrap z-20">
                  {t(`services.${service.id}.label`)}
                </span>

                {/* Check if badge exists in JSON before rendering */}
                {t.has(`services.${service.id}.badge`) && (
                  <span className="absolute top-3 right-3 bg-[#A63D00] text-white text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm z-20">
                    {t(`services.${service.id}.badge`)}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                    {t(`services.${service.id}.title`)} —{" "}
                    <span className="font-normal font-sans text-stone-600">
                      {t(`services.${service.id}.hindi`)}
                    </span>
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {t(`services.${service.id}.desc`)}
                  </p>
                </div>

                <div className="w-full flex items-center justify-center gap-1 py-2.5 px-4 rounded border border-[#A63D00] text-[#A63D00] font-medium text-sm transition-all duration-200 group-hover:bg-[#A63D00] group-hover:text-white">
                  <span>{t(`services.${service.id}.cta`)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationServices;
