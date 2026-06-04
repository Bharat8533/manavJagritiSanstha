import React from "react";
import { KathaTypesProps } from "../UI/Types.types";

const KATHA_LIST = [
  {
    id: "shrimad-bhagavat",
    title: "श्रीमद भागवत महापुराण कथा",
    duration: "7 दिवसीय ज्ञान यज्ञ",
    desc: "भक्ति, ज्ञान और वैराग्य की परम पावन कथा जो जीव को मोक्ष का मार्ग प्रशस्त करती है।",
    badge: "सर्वाधिक लोकप्रिय",
    icon: "📜",
    gradient: "from-[#F4D28C]/10 to-transparent",
  },
  {
    id: "shri-ram-katha",
    title: "श्री राम कथा",
    duration: "9 दिवसीय मानस यज्ञ",
    desc: "मर्यादा पुरुषोत्तम श्री राम के आदर्श जीवन और भद्र चरित्र का दिव्य रसास्वादन।",
    badge: "भव्य आयोजन",
    icon: "🏹",
    gradient: "from-[#A63D00]/10 to-transparent",
  },
  {
    id: "shiv-mahapuran",
    title: "शिव महापुराण कथा",
    duration: "5 या 7 दिवसीय अनुष्ठान",
    desc: "देवों के देव महादेव की महिमा, कल्याणकारी शिव तत्व और दिव्य लीलाओं का दिव्य श्रवण।",
    badge: "कल्याणकारी",
    icon: "🔱",
    gradient: "from-[#2C1810]/10 to-transparent",
  },
  {
    id: "shri-krishna-leela",
    title: "श्री कृष्ण कथा एवं लीला चरित्र",
    duration: "5 या 7 दिवसीय उत्सव",
    desc: "बांके बिहारी जी की मधुर बाल-लीलाओं, गोपी प्रेम और भगवद गीता के दिव्य उपदेशों का रसपान।",
    badge: "भक्ति रस प्रधान",
    icon: "🪈",
    gradient: "from-[#1E3A8A]/10 to-transparent",
  },
  {
    id: "devi-bhagavat",
    title: "श्रीमद देवी भागवत महापुराण",
    duration: "9 दिवसीय शक्ति अनुष्ठान",
    desc: "आद्याशक्ति मां दुर्गा की दिव्य महिमा, नवदुर्गा चरित्र और ब्रह्मांडीय शक्ति तत्वों का पावन श्रवण।",
    badge: "नवरात्रि विशेष",
    icon: "🦁",
    gradient: "from-[#DC2626]/10 to-transparent",
  },
  {
    id: "mahamrityunjay-jaap",
    title: "महामृत्युंजय जाप अनुष्ठान",
    duration: "विशेष संकल्प अनुष्ठान",
    desc: "अल्प आयु से दीर्घ आयु कराने के लिए एवं उत्तम स्वास्थ्य प्राप्ति हेतु वैदिक मंत्रोच्चार द्वारा विशेष महामृत्युंजय जाप।",
    badge: "विशेष शांति",
    icon: "🔥",
    gradient: "from-[#D4A017]/10 to-transparent",
  },
  {
    id: "ganesh-purana",
    title: "श्री गणेश पुराण कथा",
    duration: "3 या 5 दिवसीय कथा",
    desc: "विघ्नहर्ता मंगलमूर्ति भगवान श्री गणेश जी के दिव्य अवतारों, लीलाओं और बुद्धि-सिद्धि प्रदायक चरित्र का श्रवण।",
    badge: "मंगलकारी",
    icon: "🐘",
    gradient: "from-[#EAB308]/10 to-transparent",
  },
  {
    id: "satyanarayan-vrat",
    title: "श्री सत्यनारायण व्रत कथा",
    duration: "1 दिवसीय पूजन",
    desc: "सुख, समृद्धि और पारिवारिक शांति के लिए पूर्णिमा या विशेष अवसरों पर आयोजित लघु कथा।",
    badge: "नियमित सेवा",
    icon: "✋",
    gradient: "from-[#5C3A1E]/10 to-transparent",
  },
  {
    id: "garuda-purana",
    title: "श्रीमद गरुड़ पुराण कथा",
    duration: "7 दिवसीय पाठ अनुष्ठान",
    desc: "सनातन धर्म के अनुसार पितरों की आत्मशांति, सद्गति एवं यमलोक की यात्रा से मुक्ति दिलाने वाली गूढ़ पावन कथा।",
    badge: "पितृ शांति",
    icon: "🦅",
    gradient: "from-[#4B5563]/10 to-transparent",
  },
];

const KathaTypes = ({ selectedKatha, onSelect }: KathaTypesProps) => {
  return (
    <section className="py-16 max-w-7xl mx-auto text-left">
      {/* Premium Header Section */}
      <div className="relative border-l-4 border-[#A63D00] pl-6 space-y-3 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63D00]/5 border border-[#A63D00]/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A63D00] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A63D00]">
            कथा विकल्प
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1810] leading-tight">
          Divine Katha Types{" "}
          <span className="block text-xl sm:text-2xl font-sans font-light text-[#5C3A1E]/80 mt-1">
            दिव्य कथा आयोजन के प्रकार
          </span>
        </h2>
        <p className="text-sm text-[#5C3A1E]/80 font-light leading-relaxed max-w-2xl">
          मानव जाग्रती संस्था के सानिध्य में आप अपनी श्रद्धा और संकल्प के अनुसार
          नीचे दिए गए पावन प्रसंगों में से मुख्य कथा का चयन कर सकते हैं।
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KATHA_LIST.map((katha) => {
          const isSelected = selectedKatha === katha.id;
          return (
            <div
              key={katha.id}
              onClick={() => onSelect(katha.id)}
              className={`group relative flex flex-col justify-between p-6 rounded-3xl border text-left cursor-pointer transition-all duration-300 ease-out select-none overflow-hidden ${
                isSelected
                  ? "bg-[#2C1810] text-[#F4D28C] border-transparent shadow-2xl shadow-[#2C1810]/30 -translate-y-1"
                  : "bg-white text-[#2C1810] border-[#D4A017]/20 hover:border-[#A63D00]/40 hover:shadow-xl hover:shadow-[#2C1810]/5 hover:-translate-y-1"
              }`}
            >
              {/* Subtle Decorative Background Gradient on Hover/Selection */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${katha.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isSelected ? "hidden" : ""}`}
              />

              <div>
                {/* Top Section: Icon & Badge */}
                <div className="flex items-center justify-between gap-4 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      isSelected
                        ? "bg-white/10 text-white"
                        : "bg-[#FCFAF5] border border-[#D4A017]/30"
                    }`}
                  >
                    {katha.icon}
                  </div>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors border ${
                      isSelected
                        ? "bg-[#A63D00] text-white border-transparent"
                        : "bg-[#FCFAF5] text-[#A63D00] border-[#A63D00]/10 group-hover:bg-[#A63D00]/5"
                    }`}
                  >
                    {katha.badge}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="mt-6 space-y-2.5 relative z-10">
                  <h3
                    className={`font-serif text-xl font-bold tracking-wide transition-colors ${isSelected ? "text-white" : "group-hover:text-[#A63D00]"}`}
                  >
                    {katha.title}
                  </h3>
                  <div
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-white/10 text-[#F4D28C]"
                        : "bg-[#A63D00]/5 text-[#A63D00]"
                    }`}
                  >
                    ⏳ {katha.duration}
                  </div>
                  <p
                    className={`text-sm font-light leading-relaxed pt-1 transition-colors ${
                      isSelected ? "text-white/70" : "text-[#5C3A1E]/80"
                    }`}
                  >
                    {katha.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Row */}
              <div
                className={`mt-6 pt-4 border-t border-dashed relative z-10 flex items-center justify-between text-xs font-medium transition-colors ${isSelected ? "border-white/10" : "border-gray-100"}`}
              >
                <span
                  className={
                    isSelected
                      ? "text-[#F4D28C]/70"
                      : "text-[#5C3A1E]/50 group-hover:text-[#A63D00]/70"
                  }
                >
                  {isSelected
                    ? "चयनित / Selected"
                    : "चयन करने के लिए क्लिक करें"}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-[#D4A017] text-[#2C1810] scale-110 opacity-100"
                      : "bg-gray-100 text-transparent opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:bg-gray-50"
                  }`}
                >
                  ✓
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KathaTypes;
