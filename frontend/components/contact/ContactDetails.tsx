import React from "react";

export default function ContactDetails() {
  return (
    <div className="lg:col-span-5 space-y-8 text-left">
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
          मुख्य कार्यालय
        </h3>
        <p className="text-xs text-[#5C3A1E]/60 font-light">
          आप नीचे दिए गए माध्यमों से सीधे हमारे वाइस-प्रेसिडेंट या सेवा
          प्रबंधकों से संवाद कर सकते हैं।
        </p>
      </div>

      <div className="space-y-4">
        {/* Card 1: Address */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            📍
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              आश्रम का पता
            </h4>
            <p className="text-sm font-serif font-bold text-[#2C1810]">
              मानव जाग्रती संस्‍थान
            </p>
            <p className="text-xs text-[#5C3A1E]/80 font-light mt-0.5 leading-relaxed">
              परिक्रमा मार्ग, रमन रेती के पास, श्री वृंदावन, <br />
              मथुरा, उत्तर प्रदेश - 281121
            </p>
          </div>
        </div>

        {/* Card 2: Phone Channels */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            📞
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              सेवा हेल्पलाईन नम्बर
            </h4>
            <p className="text-sm text-[#2C1810] font-medium">
              +91 98765 43210
            </p>
            <p className="text-sm text-[#2C1810] font-medium mt-0.5">
              +91 565 244200
            </p>
            <span className="text-[10px] text-[#5C3A1E]/50 block mt-1">
              समय: सुबह 08:00 से रात्रि 08:00 तक
            </span>
          </div>
        </div>

        {/* Card 3: Email Portal */}
        <div className="bg-white p-5 rounded-2xl border border-[#D4A017]/10 shadow-[0_4px_20px_rgba(44,24,16,0.01)] flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#A63D00]/5 border border-[#A63D00]/10 flex items-center justify-center text-lg shrink-0">
            ✉️
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63D00] mb-1">
              ईमेल सम्पर्क
            </h4>
            <p className="text-sm text-[#2C1810] font-medium hover:text-[#A63D00] transition-colors">
              <a href="mailto:info@mjsvrindavan.com">info@mjsvrindavan.com</a>
            </p>
            <p className="text-xs text-[#5C3A1E]/60 font-light mt-1">
              आधिकारिक प्रस्तावों एवं दान रसीद सम्बन्धी प्रश्नों के लिए।
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#2C1810] text-[#F4D28C] rounded-2xl relative overflow-hidden">
        <div className="absolute right-4 bottom-2 text-6xl opacity-10 pointer-events-none font-serif">
          🚩
        </div>
        <h4 className="font-serif text-sm font-bold text-white mb-1">
          विशेष सूचना:
        </h4>
        <p className="text-xs text-white/80 font-light leading-relaxed">
          यदि आप उत्सवों या पूर्णिमा के पावन अवसर पर विशाल भंडारे या संतों के
          लिए विशेष भोजन सेवा (साधु सेवा) आयोजित करवाना चाहते हैं, तो कृपया आगमन
          से कम से कम 3 दिन पूर्व सूचित करें।
        </p>
      </div>
    </div>
  );
}
