import React from "react";

export default function YatraFacilities() {
  const facilities = [
    {
      title: "सुगम परिवहन (Transport Control)",
      desc: "पैदल यात्रियों के लिए सामान ले जाने की गाड़ी और वृद्ध श्रद्धालुओं के लिए आरामदायक वातानुकूलित (AC) बसों/गाड़ियों का विशेष विकल्प।",
    },
    {
      title: "सात्विक भोजन व्यवस्था (Sattvic Meals)",
      desc: "पूरी यात्रा के दौरान संतों की देखरेख में तैयार शुद्ध देसी घी का सात्विक ब्रज प्रसादम, औषधीय पेय जल और समय पर अल्पाहार।",
    },
    {
      title: "पवित्र विश्राम गृह (Vedic Camps)",
      desc: "प्रतिदिन रात्रि विश्राम के लिए सुरक्षित, स्वच्छ और आध्यात्मिक वातावरण से युक्त आधुनिक सुख-सुविधाओं वाले आश्रम एवं शिविर।",
    },
    {
      title: "चिकित्सा एवं सुरक्षा (Medical & Safety)",
      desc: "आपातकालीन स्थिति के लिए यात्रा के साथ चलने वाली प्राथमिक चिकित्सा (First-Aid) टीम, एम्बुलेंस बैकअप और सुरक्षा गार्ड्स व्यवस्था।",
    },
  ];

  return (
    <div className="bg-[#F5F0E5]/60 py-20 px-4 border-y border-[#D4A017]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest block mb-2">
            How We Facilitate
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2511]">
            श्रद्धालुओं के लिए उपलब्ध सुख-सुविधाएं
          </h2>
          <p className="text-xs text-[#7A5833] mt-2 font-medium">
            Ensuring Safe and Spiritually Pure Logistics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((fac, i) => (
            <div
              key={i}
              className="bg-[#FDFBF7] border border-[#D4A017]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3D2511] text-[#FDFBF7] border border-[#D4A017]/40 text-xs font-bold flex items-center justify-center mb-4 shadow-sm">
                0{i + 1}
              </div>
              <h4 className="font-serif text-base font-extrabold text-[#3D2511]">
                {fac.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#7A5833] mt-2 leading-relaxed font-medium">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
