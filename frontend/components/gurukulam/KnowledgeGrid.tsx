import React from "react";

interface QAPair {
  id: string;
  subBadge: string;
  question: string;
  answer: string;
  imageUrl: string;
  videoUrl: string;
  points?: string[];
}

interface KnowledgeGridProps {
  data: QAPair[];
  onOpenMedia: (type: "image" | "video", url: string, title: string) => void;
  onResetSearch: () => void;
}

export default function KnowledgeGrid({
  data,
  onOpenMedia,
  onResetSearch,
}: KnowledgeGridProps) {
  /* 1. NO RESULTS FOUND (Sattvic Minimalist Empty Slate) */
  if (data.length === 0) {
    return (
      <div className="bg-[#FCFBF7] border-2 border-[#EADFC9] rounded-[2.5rem] p-16 text-center border-dashed my-4 max-w-3xl mx-auto shadow-inner">
        <div className="w-16 h-16 bg-[#D4A017]/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <span className="text-3xl">📿</span>
        </div>
        <p className="text-base font-serif font-bold text-[#A63D00] max-w-md mx-auto leading-relaxed">
          क्षमा करें, इस खोज शब्द के लिए कोई प्रमाणिक वैदिक व्याख्या या सूत्र
          नहीं मिला।
        </p>
        <button
          onClick={onResetSearch}
          className="mt-6 text-xs font-black text-[#D4A017] tracking-wider uppercase border-b-2 border-[#D4A017] pb-0.5 hover:text-[#A63D00] hover:border-[#A63D00] transition-all duration-300 cursor-pointer"
        >
          संपूर्ण ज्ञानकोष पुनः देखें
        </button>
      </div>
    );
  }

  /* 2. ULTIMATE LIVE KNOWLEDGE CARD STREAM */
  return (
    <div className="space-y-10 my-4">
      {data.map((qa) => (
        <div
          key={qa.id}
          className="bg-white border border-[#EADFC9]/70 rounded-[2.5rem] p-6 sm:p-10 space-y-6 transition-all duration-500 text-left relative overflow-hidden shadow-[0_10px_35px_rgba(44,26,17,0.02)] hover:shadow-[0_22px_50px_rgba(166,61,0,0.06)] hover:-translate-y-1 group"
        >
          {/* Subtle Aesthetic Accent Line at top of active card */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017]/0 via-[#D4A017]/60 to-[#A63D00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EADFC9]/40 pb-4">
            <span className="text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-[#D4A017]/10 text-[#A63D00] border border-[#D4A017]/20">
              {qa.subBadge}
            </span>
            <span className="text-xs font-mono font-medium text-[#2C1A11]/40 bg-[#FCFBF7] px-2.5 py-0.5 rounded-full border border-[#EADFC9]/30">
              ID: #{qa.id}
            </span>
          </div>

          {/* Heading (Rich Deep Charcoal Ink) */}
          <h3 className="font-serif text-xl sm:text-2xl font-black text-[#2C1A11] tracking-wide leading-snug group-hover:text-[#A63D00] transition-colors duration-300">
            {qa.question}
          </h3>

          {/* Core Text Body (Clean structural recess) */}
          <p className="text-sm sm:text-base text-[#2C1A11]/80 font-normal leading-relaxed bg-[#FCFBF7] p-5 sm:p-6 rounded-2xl border border-[#EADFC9]/30 shadow-inner">
            {qa.answer}
          </p>

          {/* Key Guidelines List */}
          {qa.points && qa.points.length > 0 && (
            <div className="space-y-3.5 pt-2 bg-gradient-to-r from-[#FCFBF7]/50 to-transparent p-4 rounded-2xl border-l-2 border-[#D4A017]">
              <span className="text-[11px] font-black text-[#A63D00] uppercase tracking-wider block">
                ⚠️ मुख्य नियम एवं वर्जनाएं:
              </span>
              <ul className="space-y-2.5">
                {qa.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-[#2C1A11]/70 font-normal flex items-start gap-2.5"
                  >
                    <span className="text-[#D4A017] shrink-0 mt-1 text-xs">
                      ✦
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. ULTRA-PREMIUM MEDIA HOVER HUB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            {/* Image Preview Card */}
            <div className="relative rounded-2xl overflow-hidden h-40 border border-[#EADFC9] group/img shadow-sm bg-[#FCFBF7]">
              <img
                src={qa.imageUrl}
                alt="Spiritual preview"
                className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:opacity-75"
              />
              <div className="absolute inset-0 bg-[#2C1A11]/10 flex items-center justify-center backdrop-blur-[0.5px] transition-all duration-300 group-hover/img:bg-[#2C1A11]/20">
                <button
                  onClick={() => onOpenMedia("image", qa.imageUrl, qa.question)}
                  className="bg-white/95 hover:bg-white text-[#2C1A11] border border-[#EADFC9] text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md transform translate-y-2 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 duration-300 cursor-pointer"
                >
                  🔍 चित्र दर्शन (Enlarge Image)
                </button>
              </div>
            </div>

            {/* Video Action Portal */}
            <div className="relative rounded-2xl overflow-hidden h-40 border border-[#EADFC9] group/vid bg-gradient-to-br from-[#FFFDF9] via-[#FCFBF7] to-[#F5EFE2] flex flex-col justify-center items-center p-4 shadow-sm transition-all duration-300 hover:border-[#D4A017]">
              {/* Pulsing Core Ring */}
              <div className="w-10 h-10 rounded-full bg-[#A63D00]/5 flex items-center justify-center mb-1 relative">
                <span className="text-xl text-[#A63D00] relative z-10 transition-transform duration-300 group-hover/vid:scale-110">
                  ▶
                </span>
                <span className="absolute inset-0 rounded-full bg-[#A63D00]/10 animate-ping opacity-75" />
              </div>

              <span className="text-xs font-black text-[#2C1A11]/90 tracking-wide block mt-1">
                प्रायोगिक वीडियो गाइड
              </span>

              <button
                onClick={() => onOpenMedia("video", qa.videoUrl, qa.question)}
                className="bg-gradient-to-r from-[#D4A017] to-[#C48C15] text-[#110704] text-[11px] font-black tracking-wider uppercase px-5 py-2.5 rounded-xl mt-3 shadow-md hover:shadow-[0_4px_15px_rgba(212,160,23,0.4)] transition-all duration-300 cursor-pointer"
              >
                वीडियो प्ले करें
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
