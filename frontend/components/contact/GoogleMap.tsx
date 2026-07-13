import React from "react";
import { useTranslations } from "next-intl";

export default function GoogleMap() {
  const t = useTranslations("Contact");
  return (
    <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="space-y-4 mb-6 text-left">
        <h3 className="font-serif text-xl font-bold text-[#2C1810]">
          {t("googleMapHeading")}
        </h3>
        <div className="w-12 h-[2px] bg-[#A63D00] rounded-full"></div>
      </div>

      <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-[0_10px_35px_rgba(44,24,16,0.03)] bg-[#2C1810]/5 relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8048102826438!2d77.67498668242818!3d27.568567615056704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f778f85e22d%3A0xa39b13221e95c8c3!2sShri%20Nimbark%20Brajraj%20Ji%20Maharaj%20Head%20Office.%20(MANAV%20JAGRITI%20SANSTHA)!5e0!3m2!1sen!2sin!4v1782455179541!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MJS Vrindavan Location Map"
        ></iframe>

        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#D4A017]/10 shadow-lg hidden md:block max-w-xs text-left animate-fadeIn">
          <h5 className="text-xs font-bold text-[#2C1810] mb-0.5">
            मार्गदर्शन संकेत:
          </h5>
          <p className="text-[11px] text-[#5C3A1E]/80 leading-relaxed font-light">
            वृंदावन छटीकरा मार्ग से आने पर रमन रेती चौकी से परिक्रमा मार्ग की ओर
            500 मीटर चलने पर दाहिनी ओर संस्था का भव्य प्रवेश द्वार दिखाई देगा।
          </p>
        </div>
      </div>
    </section>
  );
}
