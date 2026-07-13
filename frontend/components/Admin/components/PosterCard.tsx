import React from "react";
import { Trash } from "lucide-react";

export default function PosterCard({ poster, onDelete }: any) {
  return (
    <div className="relative group overflow-hidden">
      <img
        src={poster.image_path}
        alt={poster.title}
        className="w-full h-32 object-cover  rounded-xl"
      />

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onDelete();
        }}
        className="absolute top-2 right-2 bg-red-500/90 text-white p-1.5 rounded-lg opacity-100 transition-opacity cursor-pointer hover:bg-red-600 z-10"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>

      <p className="text-xs font-bold mt-2 truncate uppercase ">
        {poster.title}
      </p>
    </div>
  );
}
