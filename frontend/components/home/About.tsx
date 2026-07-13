"use client";

import React from "react";
import { useTranslations } from "next-intl";

const SERVICES_DATA = [
  { id: 1, title: "संत भोजन सेवा", icon: "🙏", desc: "श्री धाम में निवास करने वाले त्यागी संतों और वैष्णवों को नित्य आदरपूर्वक भोजन प्रसाद उपलब्ध कराना।" },
  { id: 2, title: "गौ सेवा और पूजा", icon: "🐄", desc: "सनातन संस्कृति की आधार स्तंभ गौ माता की नित्य सेवा, चिकित्सा देखभाल और भरण-पोषण की व्यवस्था।" },
  { id: 3, title: "यमुना स्वच्छता अभियान", icon: "🌊", desc: "पतिता पाविनी कालिंदी श्री यमुना नदी की पवित्रता और स्वच्छता को बनाए रखने के लिए निरंतर जमीनी पहल।" },
  { id: 4, title: "बंदर आहार सेवा", icon: "🐒", desc: "वृंदावन के अभिन्न अंग, हनुमान स्वरूप बंदरों के लिए समय-समय पर फल, चने व उचित भोजन व्यवस्था प्रदान करना।" },
  { id: 5, title: "वृद्धाश्रम संचालन", icon: "🛕", desc: "असहाय बुजुर्गों के लिए प्रेममयी आश्रय स्थल, जहाँ उनके रहने, भोजन और चिकित्सा की सेवा सुनिश्चित की जाती है।" },
];

export default function About() {
  const t = useTranslations("About");
  const SERVICES = [
    { id: 1, icon: "🙏", key: "s1" },
    { id: 2, icon: "🐄", key: "s2" },
    { id: 3, icon: "🌊", key: "s3" },
    { id: 4, icon: "🐒", key: "s4" },
    { id: 5, icon: "🛕", key: "s5" },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 bg-[#FCFAF5] relative overflow-hidden"
      id="about"
    >
      <div className="absolute right-[-2%] bottom-[-5%] text-[24rem] font-serif text-[#A63D00]/[0.03] select-none pointer-events-none hidden lg:block">
        radhe
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
            <span className="text-[#A63D00] font-serif text-lg md:text-xl font-medium mb-3 block tracking-wide text-left">
              {t("badge")}
            </span>

            <div className="relative w-full h-[450px] sm:h-[520px] rounded-[32px] overflow-hidden shadow-[0_22px_50px_rgba(44,24,16,0.18)] border-8 border-white group">
              <img
                src="/images/maharaji4.jpeg"
                alt="Shree Nimbark Brajraj Ji Maharaj"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-95" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left text-white z-10">
                <p className="text-[#F4D28C] text-[0.7rem] sm:text-[0.8rem] font-sans font-medium mb-2 opacity-95">
                  {t("guruTitles")}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">
                  {t("guruName")}
                </h3>
                <div className="w-12 h-[1.5px] bg-[#D4A017]/60 mb-3" />
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-sans font-light max-w-[480px]">
                  {t("guruDesc")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/20 text-[#A63D00] text-[0.7rem] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm">
                {t("sectionTag")}
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] text-[#2C1810] font-bold leading-tight">
                {t("mainTitle")} <br />
                <span className="text-[#A63D00] text-[0.6em] sm:text-[0.65em] font-sans font-semibold block mt-1">
                  {t("subTitle")}
                </span>
              </h2>
              <div className="w-[80px] h-[3px] bg-gradient-to-r from-[#D4A017] to-[#A63D00] rounded-full mt-4" />
            </div>

            <p className="text-[#5C3A1E]/90 text-[0.95rem] sm:text-[1rem] leading-relaxed font-sans">
              {t("introText")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  className={`flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 ${s.id === 5 ? "sm:col-span-2" : ""}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-4 text-[#2C1810] font-bold mb-0.5">
                      {t(`services.${s.key}.title`)}
                    </h4>
                    <p className="text-[0.9rem] text-[#5C3A1E]/85 leading-normal">
                      {t(`services.${s.key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white py-3.5 px-8 rounded-full font-serif text-[0.85rem] font-semibold tracking-wider shadow-md"
              >
                {t("ctaButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
