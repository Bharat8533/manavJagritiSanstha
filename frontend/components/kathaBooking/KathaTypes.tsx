import React from 'react'
import { KathaTypesProps } from '../UI/Types.types';


const KATHA_LIST = [
  {
    id: "shrimad-bhagavat",
    title: "श्रीमद भागवत महापुराण कथा",
    duration: "7 दिवसीय ज्ञान यज्ञ",
    desc: "भक्ति, ज्ञान और वैराग्य की परम पावन कथा जो जीव को मोक्ष का मार्ग प्रशस्त करती है।",
    badge: "सर्वाधिक लोकप्रिय",
    icon: "📜"
  },
  {
    id: "shri-ram-katha",
    title: "श्री राम कथा",
    duration: "9 दिवसीय मानस यज्ञ",
    desc: "मर्यादा पुरुषोत्तम श्री राम के आदर्श जीवन और भद्र चरित्र का दिव्य रसास्वादन।",
    badge: "भव्य आयोजन",
    icon: "🏹"
  },
  {
    id: "shiv-mahapuran",
    title: "शिव महापुराण कथा",
    duration: "5 या 7 दिवसीय अनुष्ठान",
    desc: "देवों के देव महादेव की महिमा, कल्याणकारी शिव तत्व और दिव्य लीलाओं का दिव्य श्रवण।",
    badge: "कल्याणकारी",
    icon: "🔱"
  },
  {
    id: "satyanarayan-vrat",
    title: "श्री सत्यनारायण व्रत कथा",
    duration: "1 दिवसीय पूजन",
    desc: "सुख, समृद्धि और पारिवारिक शांति के लिए पूर्णिमा या विशेष अवसरों पर आयोजित लघु कथा।",
    badge: "नियमित सेवा",
    icon: "✋"
  }
];

const KathaTypes = ({ selectedKatha, onSelect } : KathaTypesProps) => {
  return (
    <section className="py-12 text-left">
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#A63D00]/5 border border-[#A63D00]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A63D00] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A63D00]">
            कथा विकल्प
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C1810] uppercase">
          divine katha types | दिव्य कथा आयोजन के प्रकार
        </h2>
        <p className="text-xs sm:text-sm text-[#5C3A1E]/75 font-light leading-relaxed">
          मानव जाग्रती संस्था के सानिध्य में आप अपनी श्रद्धा और संकल्प के अनुसार
          नीचे दिए गए पावन प्रसंगों में से मुख्य कथा का चयन कर सकते हैं।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {KATHA_LIST.map((katha) => {
          const isSelected = selectedKatha === katha.id;
          return (
            <div
              key={katha.id}
              onClick={() => onSelect(katha.id)}
              className={`group relative p-6 rounded-3xl border text-left cursor-pointer transition-all duration-300 transform hover:scale-[1.01] ${
                isSelected
                  ? "bg-[#2C1810] text-[#F4D28C] border-transparent shadow-xl"
                  : "bg-white text-[#2C1810] border-[#D4A017]/15 hover:border-[#A63D00]/30 shadow-[0_4px_30px_rgba(44,24,16,0.01)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm shrink-0 transition-transform duration-300 group-hover:rotate-6 ${
                    isSelected
                      ? "bg-white/10"
                      : "bg-[#FCFAF5] border border-[#D4A017]/20"
                  }`}
                >
                  {katha.icon}
                </div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-[#A63D00] text-white"
                      : "bg-[#A63D00]/5 text-[#A63D00]"
                  }`}
                >
                  {katha.badge}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="font-serif text-xl font-bold group-hover:text-[#D4A017] transition-colors">
                  {katha.title}
                </h3>
                <p
                  className={`text-base font-medium tracking-wide uppercase ${
                    isSelected ? "text-white/60" : "text-[#A63D00]/80"
                  }`}
                >
                  ⏳ {katha.duration}
                </p>
                <p
                  className={`text-sm font-light leading-relaxed ${
                    isSelected ? "text-white/80" : "text-[#5C3A1E]/70"
                  }`}
                >
                  {katha.desc}
                </p>
              </div>

              {/* Selection Checkmark Indicator */}
              <div
                className={`absolute bottom-4 right-4 w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all ${
                  isSelected
                    ? "bg-[#A63D00] text-white opacity-100"
                    : "bg-gray-100 opacity-0 group-hover:opacity-100 text-gray-400"
                }`}
              >
                ✓
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KathaTypes
