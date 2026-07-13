import React from "react";
import { useTranslations } from "next-intl";
interface StepType {
  number: string;
  title: string;
  desc: string;
  phase: string;
}

const STEPS_DATA: StepType[] = [
  {
    number: "०१",
    title: "सर्वेक्षण एवं अनुसंधान",
    desc: "हमारी टीम दूरदराज के क्षेत्रों में जाकर ऐतिहासिक महत्व के उपेक्षित मंदिरों को चिह्नित करती है।",
    phase: "PHASE 01 // RESEARCH",
  },
  {
    number: "०२",
    title: "शास्त्रोक्त योजना",
    desc: "पुरातत्व विशेषज्ञों और विद्वान आचार्यों की देखरेख में वास्तुकला का ब्लूप्रिंट तैयार होता है।",
    phase: "PHASE 02 // BLUEPRINT",
  },
  {
    number: "०३",
    title: "धरातलीय श्रम एवं निर्माण",
    desc: "स्थानीय कारीगरों के सहयोग से पत्थरों की नक्काशी और सुदृढ़ीकरण का कार्य आरंभ होता है।",
    phase: "PHASE 03 // CRAFTING",
  },
  {
    number: "०४",
    title: "प्राण प्रतिष्ठा संकीर्तन एवं रख रखाव कमेटी गठन",
    desc: "विधि-विधान से यज्ञ, दिव्य विग्रहों की प्राण-प्रतिष्ठा और दैनिक आरती की व्यवस्था की जाती. है।",
    phase: "PHASE 04 // DEVOTION",
  },
];

export default function Methodology(): React.JSX.Element {
  const t = useTranslations("Methodology");
  return (
    <section className="py-28 bg-[#FAF8F5] relative overflow-hidden selection:bg-[#D4A017] selection:text-[#130B07]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#A63D00]/[0.01] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* SECTION HEADER */}
        <div className="text-left space-y-3 max-w-3xl">
          <span className="inline-block text-[10px] font-extrabold tracking-[0.3em] text-[#A63D00] uppercase bg-[#A63D00]/5 border border-[#A63D00]/10 px-3 py-1 rounded-md">
            Our Working Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E0F0A] tracking-tight leading-tight">
            {t("heading1")}
            <span className="text-[#A63D00]">{t("heading2")}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5C3A1E]/70 font-light leading-relaxed">
            {t("p")}
          </p>
        </div>

        {/* TIMELINE FLOW CONTAINER */}
        <div className="relative w-full">
          {/* Connecting Line Vector (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block absolute top-7 inset-x-8 h-px bg-linear-to-r from-[#A63D00]/80 via-[#D4A017]/50 to-[#A63D00]/80 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {STEPS_DATA.map((step) => (
              <div
                key={step.number}
                className="group relative space-y-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#2C1810]/5 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(44,24,16,0.04)] hover:bg-white transition-all duration-500 text-left"
              >
                {/* Step Node Indicator */}
                <div className="flex justify-between items-center w-full">
                  {/* Floating Number Badge */}
                  <div className="w-14 h-14 rounded-xl bg-[#FAF8F5] border border-[#2C1810]/10 flex items-center justify-center font-serif text-xl font-bold text-[#1E0F0A] shadow-inner group-hover:bg-[#A63D00] group-hover:text-white group-hover:border-[#A63D00] transition-all duration-500">
                    {step.number}
                  </div>

                  {/* Phase Metadata Code Tag */}
                  <div className="relative pb-1 overflow-hidden group">
                    <span className="font-sans text-[8px] font-extrabold tracking-[0.25em] text-[#5C3A1E]/40 group-hover:text-[#A63D00] transition-colors duration-300 block uppercase">
                      {step.phase}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#A63D00] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] group-hover:text-[#A63D00] transition-colors duration-300 relative inline-block">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3A1E]/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Decorative Shimmer Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-[#A63D00]/[0.02] rounded-br-2xl group-hover:to-[#D4A017]/10 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
