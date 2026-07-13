"use client";

import React from "react";
import { Plus } from "lucide-react";

interface KathaTableHeaderProps {
  onOpenAddModal: () => void;
}

export default function KathaTableHeader({
  onOpenAddModal,
}: KathaTableHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
          मानव जागृति संस्था अनुष्ठान विभाग
        </span>
        <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
          कथा एवं अनुष्ठान बुकिंग प्रबंधन
        </h1>
        <p className="text-xs text-[#5C3A1E]/70 font-light mt-0.5">
          व्यासपीठ के पावन सानिध्य में आयोजित होने वाली आगामी एवं वर्तमान कथाओं
          का समय सारणी निर्धारण।
        </p>
      </div>

      <button
        onClick={onOpenAddModal}
        className="inline-flex items-center gap-2 bg-[#A63D00] hover:bg-[#8B2612] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md shadow-[#A63D00]/10 cursor-pointer"
      >
        <Plus className="w-4 h-4" /> नई कथा बुक करें
      </button>
    </div>
  );
}
