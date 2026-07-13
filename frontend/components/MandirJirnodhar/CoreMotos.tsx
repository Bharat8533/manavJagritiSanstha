"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface MotoType {
  id: string;
  title: string;
  desc: string;
  tag: string;
  indexText: string;
  detailPoints: string[];
}

export default function CoreMotos({ motos = [] }: { motos: any[] }) {
  const t = useTranslations("CoreMotos");
  const formattedData = motos.map((m) => ({
    id: m.id,
    title: m.title,
    desc: m.description,
    points: m.extra_points
      ? m.extra_points.split(",").map((p: string) => p.trim())
      : [],
  }));

  if (motos.length === 0) return null;

  return (
    <section className="py-20 bg-[#FFFDF9] text-[#2C1810] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A63D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[10px] font-black tracking-[0.4em] text-[#A63D00] uppercase block">
            Core Objectives
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2C1810] leading-[1.1]">
            {t("heading1")} <br />
            <span className="text-[#A63D00]">{t("heading2")}</span>
          </h2>
          <p className="text-sm text-[#5D4037]/70 font-medium leading-relaxed pt-2">
            {t("p")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {formattedData.map((moto, i) => (
            <div
              key={moto.id}
              className="group p-8 rounded-[2rem] border border-[#E5E0D8] bg-white hover:border-[#A63D00]/30 hover:shadow-[0_20px_40px_rgba(166,61,0,0.05)] transition-all duration-500"
            >
              {/* Index & Title */}
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-2xl font-light text-[#A63D00]/20 group-hover:text-[#A63D00]/40 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#2C1810] leading-tight">
                  {moto.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5D4037]/80 leading-relaxed font-normal mb-8 line-clamp-3">
                {moto.desc}
              </p>

              {/* Tags */}
              {moto.points.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {moto.points.slice(0, 3).map((p : string, idx : number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest text-[#A63D00] border border-[#A63D00]/10 rounded-full bg-[#FFF5EF] group-hover:bg-[#A63D00]/5 transition-colors"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}