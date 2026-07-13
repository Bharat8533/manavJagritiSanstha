import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  buttonLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 border-2 border-dashed border-[#1E0F0A]/10 rounded-3xl bg-[#FAF8F5]/30">
      <div className="w-16 h-16 bg-[#A63D00]/5 rounded-full flex items-center justify-center mb-4">
        <Inbox className="w-8 h-8 text-[#A63D00]" />
      </div>
      <h3 className="text-lg font-bold text-[#1E0F0A]">{title}</h3>
      <p className="text-sm text-[#2C1810]/60 mt-1 mb-6 text-center max-w-sm">
        {description}
      </p>
      {buttonLabel && (
        <button
          onClick={onAction}
          className="bg-[#A63D00] text-white px-6 py-2 rounded-xl font-bold text-sm shadow-md hover:bg-[#853200] transition-all"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
