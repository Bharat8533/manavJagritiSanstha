import React from "react";

export default function StatsBanner() {
  return (
    <div className="bg-gradient-to-r from-[#FDFBF7] via-[#FBF9F3] to-[#F7F3E9] border border-[#EADFC9] rounded-[2.5rem] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_30px_rgba(44,26,17,0.02)] mb-12">
      {/* 1. LEFT TEXT BLOCK (High contrast ink text with soft saffron heading) */}
      <div className="space-y-3 text-left max-w-2xl">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#A63D00]">
          हमारा संकल्प वाक्य
        </h3>
        <p className="text-sm sm:text-base text-[#2C1A11]/80 font-normal leading-relaxed">
          "धर्मो रक्षति रक्षितः— जब आप धर्म की रक्षा करते हैं, तो धर्म आपकी
          रक्षा करता है। गुरुकुल का लक्ष्य हर घर में शुद्ध वैदिक क्रियाओं को
          पुनर्जीवित करना है।"
        </p>
      </div>

      {/* 2. RIGHT HIGHLIGHT CARDS (Pristine white cards on top of cream background) */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
        {/* Card 1 */}
        <div className="bg-white border border-[#EADFC9] p-5 rounded-2xl text-center shadow-[0_4px_15px_rgba(44,26,17,0.01)]">
          <span className="block font-serif text-2xl font-black text-[#D4A017]">
            १००%
          </span>
          <span className="text-[10px] text-[#2C1A11]/50 uppercase tracking-widest font-bold block mt-1">
            निशुल्क वैदिक ज्ञान
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#EADFC9] p-5 rounded-2xl text-center shadow-[0_4px_15px_rgba(44,26,17,0.01)]">
          <span className="block font-serif text-xl sm:text-2xl font-black text-[#D4A017] whitespace-nowrap">
            सभी वर्ग
          </span>
          <span className="text-[10px] text-[#2C1A11]/50 uppercase tracking-widest font-bold block mt-1">
            एकसमान अधिकार
          </span>
        </div>
      </div>
    </div>
  );
}
