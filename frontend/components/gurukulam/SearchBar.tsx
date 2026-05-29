import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="bg-white border border-[#EADFC9] rounded-2xl p-4 shadow-[0_4px_20px_rgba(44,26,17,0.02)] text-left">
      {/* 1. SECTION LABEL (Saffron/Terracotta styling) */}
      <label className="text-xs font-bold text-[#A63D00] uppercase tracking-wider block mb-2">
        संशय खोजें (Search Hub)
      </label>

      {/* 2. LIGHT FILTER INPUT FIELD */}
      <div className="relative">
        <input
          type="text"
          placeholder="उदा. सूर्य अर्घ्य, तर्पण, एकादशी..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#FCFBF7] border border-[#EADFC9] focus:border-[#D4A017] focus:bg-white rounded-xl py-3.5 pl-4 pr-10 text-sm text-[#2C1A11] focus:outline-none transition-all placeholder-[#2C1A11]/30 shadow-inner"
        />
        {/* 3. SEARCH ICON CONTRAST */}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2C1A11]/40 text-sm pointer-events-none">
          🔍
        </span>
      </div>
    </div>
  );
}
