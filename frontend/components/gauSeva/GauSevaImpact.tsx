"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function GauSevaImpact(): React.JSX.Element {
  const t = useTranslations("GauSevaImpact");

  // Fetch stats array from JSON
  const stats = t.raw("stats") as {
    metric: string;
    label: string;
    detail: string;
  }[];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg { animation: gradientShift 10s ease infinite; }
      `}</style>

      <section
        className="py-16 relative overflow-hidden bg-gradient-to-br from-[#A63D00] via-[#D4A017] to-[#A63D00] bg-[length:200%_200%] animate-gradient-bg"
        id="impact"
      >
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-white bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full shadow-sm">
              {t("badge")}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
              {t("heading")}
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
              {t("description")}
            </p>
            <div className="w-20 h-1 rounded-full mx-auto bg-white/40" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:-translate-y-2 text-center overflow-hidden"
              >
                <span className="absolute -top-6 -right-2 text-8xl font-sans font-black text-[#A63D00]/5 select-none pointer-events-none">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <div
                    className="font-sans text-4xl font-extrabold mb-4 tracking-tight"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, #A63D00, #D4A017)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.metric}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-[#A63D00] transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-medium">
                    {stat.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
