import React from "react";
import { useTranslations } from "next-intl";

export default function BrajGallery() {
  const t = useTranslations("BrajGallery");
  const galleryItems = [
    {
      title: "श्री गोवर्धन पर्वत",
      tag: "गिरिराज परिक्रमा",
      aspect: "aspect-[4/5]", // Tall item
      img: "https://www.holidify.com/images/cmsuploads/compressed/5395_20190319183709.jpg",
    },
    {
      title: "पावन कुसुम सरोवर",
      tag: "पवित्र कुंड",
      aspect: "aspect-[16/10]", // Wide item
      img: "https://www.mathuravrindavantour.com/images/1-day-agra-mathura-vrindavan-family-tour-package3.webp",
    },
    {
      title: "श्री कृष्ण जन्मभूमि",
      tag: "मथुरा मुख्य धाम",
      aspect: "aspect-square", // Square item
      img: "https://wiralfeed.wordpress.com/wp-content/uploads/2015/12/krishna-janmabhumi.jpg",
    },
    {
      title: "बरसाना की लठमार होली",
      tag: "विश्व प्रसिद्ध उत्सव",
      aspect: "aspect-[3/4]", // Very tall item
      img: "https://images.pexels.com/photos/36684524/pexels-photo-36684524.jpeg",
    },
    {
      title: "श्री राधा रानी महल",
      tag: "बरसाना धाम",
      aspect: "aspect-[4/3]", // Slightly wide item
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/cd/2e/80/received-1912151609096628.jpg?w=1200&h=-1&s=1",
    },
    {
      title: "नंद भवन (नंद किला)",
      tag: "नंदगांव प्रभाग",
      aspect: "aspect-square",
      img: "https://faujitoursandtravels.com/wp-content/uploads/2024/09/2019-09-18.jpg",
    },
    {
      title: "गोकुल रमण रेती",
      tag: "बाल लीला स्थली",
      aspect: "aspect-[4/5]",
      img: "https://knowledgeofindia.com/wp-content/uploads/2016/09/Raman-Reti-Gokul-Vrindavan-Mathrua-pool-image.jpg",
    },
    {
      title: "निधिवन राज",
      tag: "वृन्दावन वन क्षेत्र",
      aspect: "aspect-[3/4]",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Nidhivan.jpg",
    },
    {
      title: "श्री बांके बिहारी मंदिर",
      tag: "वृन्दावन मुख्य धाम",
      aspect: "aspect-[16/10]",
      img: "https://www.jagranimages.com/images/newimg/23092025/23_09_2025-banke_bihari_mandir_gate_24057238.webp",
    },
    {
      title: "भव्य प्रेम मंदिर",
      tag: "दिव्य प्रकाश कला",
      aspect: "aspect-[4/5]",
      img: "https://images.pexels.com/photos/35960311/pexels-photo-35960311.jpeg",
    },
    {
      title: "विश्राम घाट संध्या आरती",
      tag: "मथुरा यमुना तट",
      aspect: "aspect-[16/9]", // Landscape item
      img: "https://brajbhoomitourandtravels.com/blog/wp-content/uploads/2025/05/cropped-steptodown.com474311.jpg",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-sans font-black text-[#D4A017] uppercase tracking-[0.25em] block mb-2">
          {t("heading")}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2511] tracking-wide">
          {t("p")}
        </h2>
        <div className="w-12 h-[1.5px] bg-[#D4A017] mx-auto mt-3" />
      </div>

      {/* Pinterest-style Native CSS Masonry Waterfall Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 [column-fill:_balance]">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`break-inside-avoid relative rounded-2xl border border-[#D4A017]/15 flex flex-col justify-end p-5 overflow-hidden group/card hover:border-[#D4A017]/60 hover:shadow-[0_20px_35px_rgba(61,37,17,0.12)] transition-all duration-500 cursor-pointer w-full ${item.aspect}`}
          >
            {/* Background Image Engine */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-1000 scale-100 group-hover/card:scale-[1.03]"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            {/* Premium Pinterest-style Smooth Gradient Protection */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover/card:from-black/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,160,23,0.1)_0%,transparent_50%)]" />

            {/* Card Content Overlay */}
            <div className="relative z-10 transform translate-y-1 group-hover/card:translate-y-0 transition-transform duration-400">
              <span className="text-[8px] font-sans font-black text-[#F4D28C] tracking-widest uppercase bg-[#3D2511]/90 backdrop-blur-sm border border-[#D4A017]/30 px-2 py-0.5 rounded-md inline-block mb-2 shadow-sm">
                {item.tag}
              </span>

              <div className="flex items-end justify-between gap-3">
                <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide leading-tight drop-shadow-md">
                  {item.title}
                </h4>
                {/* Micro Action Button */}
                <div className="w-6 h-6 min-w-[24px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-[9px] opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-400 hover:bg-[#D4A017] hover:border-transparent hover:text-[#3D2511]">
                  ➔
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
