import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFDF9] text-[#2C1810] p-6 text-center">
      {/* 404 Decoration */}
      <span className="font-serif text-[120px] sm:text-[160px] font-bold text-[#A63D00]/5 leading-none select-none">
        404
      </span>

      {/* Icon */}
      <div className="text-[#A63D00] mb-8 mt-[-40px]">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
        पृष्ठ नहीं मिला
      </h2>

      {/* Subtext */}
      <p className="max-w-md text-[#5D4037]/70 mb-10 font-medium leading-relaxed">
        ऐसा प्रतीत होता है कि आप जिस मार्ग पर चल रहे हैं, वह अभी विकसित हो रहा
        है। कृपया वापस मुख्य पृष्ठ पर पधारें।
      </p>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <a
          href="/"
          className="px-8 py-3 border-b-2 border-[#A63D00] text-[#A63D00] font-bold uppercase tracking-widest hover:text-[#2C1810] transition-colors"
        >
          मुख्य पृष्ठ
        </a>
        <a
          href="/contact"
          className="px-8 py-3 text-[#5D4037] font-bold uppercase tracking-widest hover:text-[#A63D00] transition-colors"
        >
          संपर्क
        </a>
      </div>
    </div>
  );
};

export default NotFound;
