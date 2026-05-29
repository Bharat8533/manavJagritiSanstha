import React from "react";

interface CategoryTabsProps {
  categories: { id: string; label: string }[];
  selectedCategory: string;
  onSelect: (id: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="bg-white border border-[#EADFC9] rounded-3xl p-4 shadow-[0_10px_30px_rgba(44,26,17,0.02)] space-y-2 text-left">
      {/* 1. ANKRAMANIKA LABEL (Soft text tracking matching warm light mode) */}
      <span className="text-[10px] font-bold text-[#2C1A11]/40 uppercase tracking-[0.2em] block px-2 mb-2">
        ज्ञान विधा अनुक्रमणिका
      </span>

      {/* 2. DYNAMIC TAB LIST GENERATOR */}
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-between group h-12 cursor-pointer ${
              isSelected
  ? "bg-[#FFFFFF] text-[#A63D00] border-l-4 border-l-[#D4A017] shadow-[0_10px_25px_-5px_rgba(166,61,0,0.08)] scale-[1.02] font-extrabold"
  : "text-[#2C1A11]/70 hover:bg-[#FDFBF7] hover:text-[#A63D00] border-l-4 border-l-transparent"
            }`}
          >
            <span>{cat.label}</span>
            {/* 3. DIRECTIONAL ACCENT ARROW */}
            <span
              className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                isSelected ? "text-[#110704]" : "text-[#2C1A11]/30"
              }`}
            >
              →
            </span>
          </button>
        );
      })}
    </div>
  );
}
