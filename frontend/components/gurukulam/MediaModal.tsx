import React, { useState, useEffect } from "react";

interface MediaModalProps {
  isOpen: boolean;
  type: "image" | "video";
  url: string;
  title: string;
  onClose: () => void;
}

export default function MediaModal({
  isOpen,
  type,
  url,
  title,
  onClose,
}: MediaModalProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Reset loading state when modal status or url updates
  useEffect(() => {
    if (isOpen) {
      setIsVideoLoading(true);
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#1E1611]/40 flex items-center justify-center p-4 sm:p-6 backdrop-blur-lg animate-fade-in">
      {/* Main Premium Ivory & Gold Theater Box */}
      <div className="relative max-w-4xl w-full bg-gradient-to-b from-[#FDFBF7] to-[#F5F0E5] border border-[#D4A017]/30 rounded-[2.5rem] overflow-hidden p-4 sm:p-7 shadow-[0_30px_80px_-10px_rgba(43,30,22,0.25)] transition-all duration-500 scale-95 animate-scale-up">
        {/* Elegant Inner Golden Radial Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent pointer-events-none" />

        {/* Minimal Royal Close Trigger */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-9 h-9 rounded-full bg-[#FAF6EE] text-[#4A321A]/80 flex items-center justify-center text-sm font-bold border border-[#D4A017]/30 hover:bg-[#D4A017] hover:text-[#FDFBF7] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Clean Typography Header */}
        <div className="pb-5 text-left pr-12 border-b border-[#4A321A]/10 mb-4">
          <span className="text-[9px] font-sans font-black text-[#B8860B] uppercase tracking-[0.25em] block mb-1.5 animate-pulse">
            Gurukulam Media Broadcast Platform
          </span>
          <h4 className="font-serif text-base sm:text-lg font-extrabold text-[#3D2511] tracking-wide leading-snug truncate">
            {title}
          </h4>
        </div>

        {/* Modern Framed Media Screen Window */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#D4A017]/20 flex items-center justify-center relative shadow-[inset_0_2px_8px_rgba(43,30,22,0.08)]">
          {type === "video" ? (
            <div className="w-full h-full relative">
              {/* Soft Warm Loader Overlay */}
              {isVideoLoading && (
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#FDFBF7] to-[#F5F0E5] flex flex-col items-center justify-center space-y-4 p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/40 flex items-center justify-center text-2xl text-[#B8860B] animate-spin duration-3000 shadow-sm">
                    🔱
                  </div>
                  <p className="font-serif text-sm sm:text-base text-[#7A5833] font-bold tracking-wide">
                    वैदिक क्रिया दर्शन प्लेयर लोड हो रहा है...
                  </p>
                </div>
              )}

              {/* Seamless Video Frame */}
              <iframe
                className="w-full h-full rounded-2xl border-0"
                src={
                  url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`
                }
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => setIsVideoLoading(false)}
              ></iframe>
            </div>
          ) : (
            /* Clean Image View Container */
            <div className="w-full h-full p-2 bg-[#F5F0E5]/50 flex items-center justify-center">
              <img
                src={url}
                alt={title}
                className="w-full h-full object-contain max-h-[70vh] rounded-xl transition-all duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
