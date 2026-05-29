import React from "react";

export default function PremiumDarshanTimeline() {
  const milestones = [
    {
      name: "मथुरा प्रस्थान",
      sites: "श्री कृष्ण जन्मभूमि, विश्राम घाट, द्वारिकाधीश मंदिर",
      label: "प्रारंभिक पड़ाव",
    },
    {
      name: "वृन्दावन धाम",
      sites: "बांके बिहारी मंदिर, इस्कॉन, निधिवन, सेवा कुंज",
      label: "लीला केंद्र",
    },
    {
      name: "गोवर्धन परिक्रमा",
      sites: "गिरिराज पर्वत तलहटी, मानसी गंगा, दानघाटी मंदिर",
      label: "शरणगति",
    },
    {
      name: "राधा कुंड",
      sites: "श्याम कुंड, राधा रानी के प्रेम का साक्षात केंद्र",
      label: "परम पावन स्थल",
    },
    {
      name: "बरसाना",
      sites: "लाडली जी श्री राधारानी महल, गहन गहवर वन",
      label: "भक्ति शिखर",
    },
    {
      name: "नंदगांव",
      sites: "नंद भवन, पावन सरोवर क्षेत्र",
      label: "वात्सल्य भूमि",
    },
    {
      name: "गोकुल एवं महावन",
      sites: "बाल कृष्ण की रमण रेती लीलाएं, ब्रह्मांड घाट",
      label: "विश्राम स्थल",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0704] text-white overflow-hidden selection:bg-[#D4A017] selection:text-[#0D0704]">
      {/* Immersive Elite Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Warm Gradient Core */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#A63D00]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4A017]/5 rounded-full blur-[160px]" />

        {/* Subtle grid pattern to anchor layout architecture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f120b_1px,transparent_1px),linear-gradient(to_bottom,#1f120b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/20 bg-[#1A0F0A] px-3 py-1 backdrop-blur-md">
            <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.25em] text-[#F4D28C]">
              Sacred Route Map
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-wide">
            ८४ कोस यात्रा के{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D28C] via-[#D4A017] to-[#A63D00] font-bold">
              प्रमुख पावन पड़ाव
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent mx-auto pt-1" />
        </div>

        {/* Timeline Engine Layout */}
        <div className="relative border-l border-gradient-to-b from-[#D4A017]/40 via-[#D4A017]/10 to-transparent ml-4 md:ml-40 space-y-8 pb-4">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-8 sm:pl-12 group transition-all duration-300"
            >
              {/* Left-floating Chrono ID Badge (Visible on Desktop) */}
              <div className="hidden md:block absolute right-full mr-12 top-4 text-right whitespace-nowrap">
                <span className="font-sans text-xs font-bold text-white/30 tracking-widest block group-hover:text-[#D4A017]/80 transition-colors duration-300">
                  PHASE 0{idx + 1}
                </span>
                <span className="text-[10px] text-[#F4D28C]/50 font-light block mt-0.5">
                  {item.label}
                </span>
              </div>

              {/* Advanced Timeline Node / Bullet */}
              <div className="absolute -left-[6px] top-[22px] w-3 h-3 rounded-full bg-[#0D0704] border border-[#D4A017]/50 group-hover:border-[#D4A017] transition-all duration-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#D4A017] group-hover:scale-150 transition-transform duration-300" />
                {/* Glow ring effect on hover */}
                <div className="absolute inset-0 rounded-full bg-[#D4A017]/20 scale-0 group-hover:scale-[2.5] transition-transform duration-500 pointer-events-none" />
              </div>

              {/* Premium Glassmorphism Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-transparent p-6 backdrop-blur-md hover:border-[#D4A017]/30 hover:bg-white/[0.05] transition-all duration-500 shadow-xl group-hover:-translate-y-0.5">
                {/* Inner Ambient Corner Light Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4A017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    {/* Mobile-only Phase Metadata */}
                    <div className="md:hidden flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-sans font-bold text-[#F4D28C] tracking-wider uppercase bg-[#D4A017]/10 px-2 py-0.5 rounded">
                        STOP 0{idx + 1}
                      </span>
                      <span className="text-[10px] text-white/40 font-medium">
                        • {item.label}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#F4D28C] transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>

                  {/* Clean Structured Sites Typography */}
                  <div className="md:max-w-xl md:text-right">
                    <p className="text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors font-light leading-relaxed">
                      {item.sites}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom edge interaction line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4A017] to-[#A63D00] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
