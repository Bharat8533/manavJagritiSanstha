'use client';
import React, { useState } from "react";

interface MotoType {
  id: string;
  title: string;
  desc: string;
  tag: string;
  indexText: string;
  detailPoints: string[];
}

const MOTOS_DATA: MotoType[] = [
  {
    id: "sanskriti",
    title: "सांस्कृतिक पुनरुत्थान",
    desc: "समय के प्रवाह में उपेक्षित हुई कड़ियों को जोड़कर, अपनी प्राचीन वास्तुकला और मूल गौरव को देवालयों में पुनर्स्थापित करना।",
    tag: "HERITAGE",
    indexText: "01 // स्थापत्य",
    detailPoints: [
      "प्राचीन शिल्पशास्त्र का अनुसरण",
      "मूल स्वरूप की पुनर्स्थापना",
      "ऐतिहासिक साक्ष्यों का संरक्षण",
    ],
  },
  {
    id: "suraksha",
    title: "संरक्षण एवं सुरक्षा",
    desc: "प्राकृतिक आपदाओं, क्षरण या असामाजिक तत्वों से जर्जर हो रहे ऐतिहासिक देवस्थानों को वज्र जैसी मजबूती प्रदान करना।",
    tag: "SECURITY",
    indexText: "02 // सुदृढ़ीकरण",
    detailPoints: [
      "आधुनिक संरचनात्मक ऑडिट",
      "वज्र-लेप एवं सुरक्षा दीवारें",
      "दीर्घकालिक रख-रखाव तंत्र",
    ],
  },
  {
    id: "jagriti",
    title: "सामुदायिक जागृति",
    desc: "स्थानीय समाज को पुनः मंदिर की नित्य सेवा, संकीर्तन, वैदिक पाठशाला और उत्सवों के जीवंत रस से दोबारा जोड़ना।",
    tag: "COMMUNITY",
    indexText: "03 // चेतना",
    detailPoints: [
      "दैनिक संकीर्तन एवं उत्सव",
      "वैदिक पाठशालाओं का संचालन",
      "स्थानीय समाज का जुड़ाव",
    ],
  },
];

export default function CoreMotos(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("sanskriti");
  const currentData =
    MOTOS_DATA.find((m) => m.id === activeTab) || MOTOS_DATA[0];

  return (
    <section className="py-32 bg-[#130B07] text-white relative overflow-hidden selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#A63D00]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D4A017]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* LEFT SIDE: Interactive Anchor Controller */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4A017] uppercase block">
                Core Objectives
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.2]">
                हमारा मुख्य <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D28C] to-[#D4A017]">
                  ध्येय व संकल्प
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-sm pt-2">
                मंदिरों का पुनर्निर्माण केवल पत्थरों का संकलन नहीं, बल्कि समाज
                की सांस्कृतिक चेतना का संस्थापन है।
              </p>
            </div>

            {/* Interactive Selector Track */}
            <div className="space-y-3 w-full max-w-md pt-6 lg:pt-0">
              {MOTOS_DATA.map((moto) => {
                const isActive = moto.id === activeTab;
                return (
                  <button
                    key={moto.id}
                    onMouseEnter={() => setActiveTab(moto.id)}
                    onClick={() => setActiveTab(moto.id)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? "bg-white/[0.04] border-[#D4A017]/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                        : "bg-transparent border-white/[0.03] hover:border-white/10"
                    }`}
                  >
                    <div className="space-y-1">
                      <span
                        className={`text-[9px] font-bold tracking-widest block uppercase transition-colors ${
                          isActive ? "text-[#D4A017]" : "text-white/40"
                        }`}
                      >
                        {moto.tag}
                      </span>
                      <span
                        className={`font-serif text-lg font-bold transition-colors ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {moto.title}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isActive ? "text-[#F4D28C]" : "text-white/20"
                      }`}
                    >
                      {moto.indexText}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Monolithic Display Board */}
          <div className="lg:col-span-7 flex w-full">
            <div className="w-full bg-white/[0.01] border border-white/[0.06] rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md min-h-[400px] lg:min-h-auto">
              {/* Decorative Corner Framing Line */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#D4A017]/20 rounded-tr-[2.5rem] pointer-events-none" />

              {/* Animated Content Segment */}
              <div
                key={currentData.id}
                className="space-y-8 animate-[fadeIn_0.4s_ease-out] text-left"
              >
                <div className="inline-block text-[10px] font-bold tracking-widest text-[#D4A017] bg-[#D4A017]/10 px-3 py-1 rounded-md">
                  {currentData.tag} // FUNCTIONAL SCOPE
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {currentData.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {currentData.desc}
                  </p>
                </div>

                {/* Micro Detail Breakdown Grid */}
                <div className="pt-6 border-t border-white/[0.06] space-y-3">
                  <span className="text-[10px] font-bold tracking-wider text-white/40 block uppercase">
                    कार्यपद्धति एवं चरण:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentData.detailPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs text-white/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
