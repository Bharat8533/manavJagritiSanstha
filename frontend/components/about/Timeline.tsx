"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Star,
  BookOpen,
  Ban,
  ShieldAlert,
  HeartHandshake,
  UserX,
  Heart,
  Sparkles,
  Users2,
  Vote,
} from "lucide-react";

// Helper to map IDs to Icons
const getIcon = (id: number) => {
  const icons = [
    Star,
    BookOpen,
    Ban,
    ShieldAlert,
    HeartHandshake,
    UserX,
    Heart,
    Sparkles,
    ShieldAlert,
    Heart,
    Users2,
    HeartHandshake,
    Vote,
  ];
  return icons[id - 1] || Star;
};

export default function JourneyTimeline() {
  const t = useTranslations("Timeline");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const eventIds = Array.from({ length: 13 }, (_, i) => (i + 1).toString());

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#FCFAF5] border-t border-[#f4ce6d] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D88A1D] text-sm tracking-[0.3em] uppercase font-bold">
            {t("sub")}
          </span>
          <h2 className="text-4xl md:text-5xl text-slate-900 font-bold mt-4 mb-6">
            {t("header")}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line - Only visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {eventIds.map((id, index) => {
              const Icon = getIcon(Number(id));
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-center w-full ${isRight ? "md:justify-end" : "md:justify-start"}`}
                >
                  {/* Timeline Card Container */}
                  <div
                    className={`w-full md:w-[45%] ${isRight ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#D88A1D] text-xs font-bold uppercase">
                          {t(`events.${id}.hindi`)}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 text-xs italic">
                          {t(`events.${id}.milestone`)}
                        </span>
                      </div>
                      <h3 className="text-slate-800 text-lg font-bold mb-2">
                        {t(`events.${id}.title`)}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t(`events.${id}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Node/Icon (Visible only on desktop for centering) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#D88A1D] flex items-center justify-center shadow-lg z-10 hidden md:flex">
                    <Icon size={20} className="text-[#D88A1D]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
