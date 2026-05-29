import React from "react";
import Link from "next/link";

interface Service {
  id: string;
  imageUrl: string;
  label: string;
  badge?: string;
  title: string;
  hindiTitle: string;
  desc: string;
  ctaText: string;
  bgGradient: string;
  href: string;
}

const services: Service[] = [
  {
    id: "gau",
    imageUrl:
      "https://images.donatekart.com/campaign/cover/gau-seva720872297.jpg",
    label: "Gau Mata",
    badge: "Monthly Seva",
    title: "Gau Seva",
    hindiTitle: "गौ सेवा",
    desc: "Feed and care for holy cows. Your contribution provides nutritious food, medical care, and shelter to thousands of Gau Mata daily.",
    ctaText: "Donate for Gau Seva",
    bgGradient: "from-[#fff9f0] to-[#F4D28C]",
    href: "/gauSeva",
  },
  {
    id: "katha",
    imageUrl: "https://www.djjs.org/uploads/news/im_5d25525fbbe20.jpg",
    label: "Maharaj Ji",
    title: "Katha Booking",
    hindiTitle: "कथा बुकिंग",
    desc: "Bring divine blessings to your home. Book Maharaj Ji's sacred Katha for weddings, poojas, birth ceremonies, and spiritual gatherings.",
    ctaText: "Book a Katha",
    bgGradient: "from-[#F7F1E5] to-[rgba(214,160,23,0.12)]",
    href: "/kathaBooking",
  },
  {
    id: "yatra",
    imageUrl:
      "https://www.mathuravrindavantaxiservices.com/tour/7-days-braj.webp",
    label: "Braj Yatra",
    badge: "Limited Seats",
    title: "Braj Yatra",
    hindiTitle: "ब्रज यात्रा",
    desc: "Journey to the sacred land of Krishna — Vrindavan, Mathura, Govardhan. A soul-transforming pilgrimage with Maharaj Ji's blessings.",
    ctaText: "Register for Yatra",
    bgGradient: "from-[#f0f7ff] to-[#e8f4ff]",
    href: "/brajDarshan",
  },
  {
    id: "kavach",
    imageUrl:
      "https://aakuraa.com/cdn/shop/files/Lakshmi__Shiva__Dhan__Gyaan__Kavach.png?v=1764143829",
    label: "Narayan Kavach",
    title: "Narayan Kavach",
    hindiTitle: "नारायण कवच",
    desc: "Sacred divine protection. The authentic Narayan Kavach consecrated by Maharaj Ji — shield your family with celestial blessings.",
    ctaText: "Get Narayan Kavach",
    bgGradient: "from-[#fff0f0] to-[#ffe8d0]",
    href: "/narayan-kavach",
  },
  {
    id: "temple",
    imageUrl:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Popular-Temples-in-India.jpg",
    label: "Temple Seva",
    title: "Temple Restoration",
    hindiTitle: "देवमंदिर जीर्णोद्धार",
    desc: "Restore ancient temples to their divine glory. Preserve sacred heritage for generations. Your brick is someone's salvation.",
    ctaText: "Support Restoration",
    bgGradient: "from-[#f5f0e8] to-[#F7F1E5]",
    href: "/temple",
  },
  {
    id: "donate",
    imageUrl:
      "https://thepuredevotion.in/media/campaign_backgroud/IMG_8309.PNG",
    label: "General Seva",
    badge: "All Causes",
    title: "General Donation",
    hindiTitle: "सामान्य दान",
    desc: "Support all our sacred causes. From Anna Daan to education, your general donation reaches where it is needed most.",
    ctaText: "Donate Freely",
    bgGradient: "from-[rgba(166,61,0,0.05)] to-[rgba(212,160,23,0.1)]",
    href: "/donate",
  },
];

const DonationServices = () => {
  return (
    <section id="donate" className="py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4 flex flex-col items-center">
          <span className="inline-block bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(166,61,0,0.1)] border border-[rgba(212,160,23,0.3)] text-[#A63D00] text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-[20px] mb-4">
            Our Sacred Causes
          </span>
          <h2 className="font-['Cinzel',serif] text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#2C1810] font-bold leading-[1.2] mb-3 text-center uppercase">
            Choose Your <span className="text-[#A63D00]">Divine Service</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4A017] to-[#A63D00] rounded-[2px] my-4" />
          <p className="text-[#5C3A1E] text-[0.95rem] leading-[1.8] max-w-[600px] text-center mx-auto">
            Every act of giving is a prayer answered. Select a cause close to
            your heart and become part of something eternal.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-stone-100"
            >
              {/* Card Image/Icon Area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${service.bgGradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="w-full h-full relative">
                  <img
                    src={service.imageUrl}
                    alt={service.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <span className="text-[0.8rem] font-['Cinzel',serif] text-white font-bold absolute bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 whitespace-nowrap">
                  {service.label}
                </span>

                {service.badge && (
                  <span className="absolute top-3 right-3 bg-[#A63D00] text-white text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                    {service.title} —{" "}
                    <span className="font-normal font-sans text-stone-600">
                      {service.hindiTitle}
                    </span>
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* CTA text element */}
                <div className="w-full flex items-center justify-center gap-1 py-2.5 px-4 rounded border border-[#A63D00] text-[#A63D00] font-medium text-sm transition-all duration-200 group-hover:bg-[#A63D00] group-hover:text-white">
                  <span>{service.ctaText}</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-200 translate-x-0 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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
