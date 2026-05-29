import React from 'react'
import Link from 'next/link';

interface ButtonProps {
    title : string,
    navUrl : string
}

const Button = ({title, navUrl} : ButtonProps) => {
  return (
    <div className="text-center mt-16">
      <Link
        href={navUrl}
        className="inline-flex items-center gap-3 bg-[#A63D00] hover:bg-[#7A1F0E] text-[#F7F1E5] font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] group"
      >
        <span className="tracking-wide text-sm">{title}</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Button
