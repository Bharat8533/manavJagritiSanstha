"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Flame, Heart, Users2, Globe2 } from "lucide-react";

const timelineEvents = [
  {
    year: "2012",
    hindi: "संस्थापना",
    title: "Foundation of Sansthan",
    desc: "Manav Jagriti Sansthan was established in the sacred dhama of Vrindavan under the divine inspiration of Pujya Maharaj Ji, with a mission to spread spiritual awareness and bhakti.",
    icon: Star,
    detail: "Vrindavan, Mathura",
    milestone: "A Sacred Beginning",
    side: "right",
  },
  {
    year: "2013",
    hindi: "प्रथम सत्संग",
    title: "First Grand Satsang",
    desc: "The inaugural Maha Satsang drew thousands of devotees, marking the beginning of a transformative spiritual movement. The first pravachan by Maharaj Ji ignited divine love in countless hearts.",
    icon: Flame,
    detail: "5,000+ Devotees Attended",
    milestone: "The Light Spreads",
    side: "left",
  },
  {
    year: "2015",
    hindi: "महोत्सव",
    title: "Radha Govind Mahotsav",
    desc: "The first Radha Govind Mahotsav — a week-long spiritual festival — was celebrated with kirtan, pravachan, and seva, drawing devotees from across India and abroad.",
    icon: Heart,
    detail: "3-Day Spiritual Festival",
    milestone: "Divine Celebration",
    side: "right",
  },
  {
    year: "2018",
    hindi: "विस्तार",
    title: "Growth of Devotee Community",
    desc: "The devotee community reached 25,000 registered members. Regular weekly satsangs were established across multiple cities, with online spiritual programs reaching devotees worldwide.",
    icon: Users2,
    detail: "25,000+ Registered Devotees",
    milestone: "Community Grows",
    side: "left",
  },
  {
    year: "2022",
    hindi: "वैश्विक विस्तार",
    title: "Expansion of Activities",
    desc: "Global expansion of spiritual programs with international satsangs, digital pravachan platforms, and the launch of the Sansthan's official app serving over 50,000 devotees worldwide.",
    icon: Globe2,
    detail: "Global Spiritual Mission",
    milestone: "World Embrace",
    side: "right",
  },
];

function TimelineItem({
  event,
  index,
  inView,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = event.icon;
  const isRight = event.side === "right";

  return (
    <div className="relative flex items-center justify-center">
      {/* Desktop: Alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`${isRight ? "opacity-100" : "invisible"}`}
        >
          {isRight && (
            <div className="group ml-auto max-w-sm">
              <TimelineCard event={event} Icon={Icon} />
            </div>
          )}
        </motion.div>

        {/* Center — Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-[#D88A1D]/20 blur-md animate-pulse" />
            {/* Icon circle */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#D88A1D] to-[#B85A1B] flex items-center justify-center shadow-[0_0_20px_rgba(216,138,29,0.5)] border-2 border-[#F0C050]/50">
              <Icon size={22} className="text-[#1A0804]" />
            </div>
          </div>
          {/* Year Badge */}
          <div className="mt-3 px-3 py-1 rounded-full bg-[#3B1408] border border-[#D88A1D]/40 text-center">
            <span className="font-display text-[#D88A1D] text-sm font-bold">
              {event.year}
            </span>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`${!isRight ? "opacity-100" : "invisible"}`}
        >
          {!isRight && (
            <div className="group mr-auto max-w-sm">
              <TimelineCard event={event} Icon={Icon} />
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile: Single column */}
      <div className="md:hidden flex gap-5 w-full">
        {/* Node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-[#D88A1D]/15 blur-md" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#D88A1D] to-[#B85A1B] flex items-center justify-center">
              <Icon size={16} className="text-[#1A0804]" />
            </div>
          </div>
          <div className="mt-2 text-[#D88A1D] text-xs font-bold font-display">
            {event.year}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex-1 group"
        >
          <TimelineCard event={event} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCard({
  event,
  Icon,
}: {
  event: (typeof timelineEvents)[0];
  Icon: React.ElementType;
}) {
  return (
    <div className="relative glass-light rounded-2xl p-5 border border-[#D88A1D]/15 hover:border-[#D88A1D]/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(216,138,29,0.15)] overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D88A1D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start gap-3 mb-3">
        <p className="font-hindi text-[#D88A1D] text-sm">{event.hindi}</p>
        <span className="text-[#D88A1D]/30 text-xs">·</span>
        <p className="font-serif text-[#B85A1B] text-xs italic">
          {event.milestone}
        </p>
      </div>

      <h3 className="font-display text-[#F7F1E8] text-lg font-semibold mb-2">
        {event.title}
      </h3>

      <p className="font-body text-[#F7F1E8]/60 text-sm leading-relaxed mb-3">
        {event.desc}
      </p>

      <div className="flex items-center gap-2 pt-3 border-t border-[#D88A1D]/10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D88A1D]" />
        <span className="font-serif text-[#D88A1D]/70 text-xs italic">
          {event.detail}
        </span>
      </div>
    </div>
  );
}

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D0402 0%, #1A0804 50%, #0D0402 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D88A1D]/15 to-transparent hidden md:block" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D88A1D]/3 blur-[100px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D88A1D]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D88A1D]" />
            <span className="font-hindi text-[#D88A1D] text-sm tracking-[0.3em] uppercase">
              हमारी यात्रा
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D88A1D]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#F7F1E8] font-bold mb-4">
            Our Sacred <span className="gold-shimmer">Journey</span>
          </h2>
          <p className="max-w-xl mx-auto font-body text-[#F7F1E8]/60 text-lg">
            A chronicle of devotion, service, and divine grace — milestones in
            our ever-growing mission of spiritual awakening.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10 md:space-y-12">
          {/* Glowing vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-transparent via-[#D88A1D]/40 to-transparent" />
          </div>

          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Bottom — Present Day */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[#D88A1D]/20 blur-xl animate-pulse" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F0C050] to-[#D88A1D] flex items-center justify-center shadow-[0_0_40px_rgba(216,138,29,0.6)] border-2 border-[#F0C050]">
              <span className="text-[#1A0804] text-xl font-hindi font-bold">
                ॐ
              </span>
            </div>
          </div>
          <div className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#D88A1D]/20 to-[#B85A1B]/20 border border-[#D88A1D]/40">
            <p className="font-display text-[#D88A1D] text-base font-bold">
              Present Day & Beyond
            </p>
          </div>
          <p className="mt-3 font-hindi text-[#F7F1E8]/50 text-sm text-center max-w-xs">
            सेवा, भक्ति और मानवता की यात्रा जारी है...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
