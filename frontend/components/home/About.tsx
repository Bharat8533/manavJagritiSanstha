"use client";

import React from "react";

export default function About() {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).openModal) {
      (window as any).openModal("donate");
    } else {
      console.log("Open donate modal");
    }
  };

  return (
    <section
      className="py-24 px-6 md:px-12 bg-[#FCFAF5] relative overflow-hidden"
      id="about"
    >
      {/* Background Spiritual Watermark */}
      <div className="absolute right-[-2%] bottom-[-5%] text-[24px] font-serif text-[#A63D00]/[0.03] select-none pointer-events-none hidden lg:block text-[22rem]">
        radhe
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: MAHARAJ JI & VRINDAVAN IMAGE FRAME (5 Columns) */}
          <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
            {/* Top Text Badge */}
            <span className="text-[#A63D00] font-serif text-lg md:text-xl font-medium mb-3 block tracking-wide text-left">
              🚩 पावन भक्ति स्थल श्री धाम वृंदावन से...
            </span>

            {/* Main Picture Frame */}
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-[32px] overflow-hidden shadow-[0_22px_50px_rgba(44,24,16,0.18)] border-8 border-white group">
              {/* BACKUP PLACEHOLDER IMAGE: Replace 'src' with Maharaj Ji's real high-res photograph */}
              <img
                src="https://mjsvrindavan.com/wp-content/uploads/2024/06/baba_bg.webp"
                alt="Shree Nimbark Brajraj Ji Maharaj"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000 ease-out"
              />
              {/* Soft gradient mask inside image for text pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

              {/* Image Overlay Text: Maharaj Ji's Intro */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left text-white">
                <p className="text-[#F4D28C] text-xs font-semibold uppercase tracking-wider mb-1">
                  पूज्य महाराज जी
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-white">
                  श्री निम्बार्क ब्रजराज जी महाराज
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  एक आत्मीय संकीर्तनवादी और दयालु मानवतावादी। श्री राधा
                  सर्वेश्वर के अनन्य भक्त, जिनकी अमृतमयी भागवत कथा और विनम्रता
                  भक्तों के हृदयों को छू लेती है।
                </p>
              </div>
            </div>

            {/* Decorative traditional corner element */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4A017] rounded-tl-xl hidden sm:block" />
          </div>

          {/* RIGHT COLUMN: MANAV JAGRITI SANSTHAN CORE SERVICES (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/20 text-[#A63D00] text-[0.7rem] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm">
                मानवीय संगठन एवं सेवा संस्थान
              </span>

              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] text-[#2C1810] font-bold leading-tight">
                मानव जाग्रती संस्था <br />
                <span className="text-[#A63D00] text-[0.6em] sm:text-[0.65em] font-sans font-semibold tracking-normal block mt-1">
                  Manav Jagriti Sansthan – Vrindavan
                </span>
              </h2>
              <div className="w-[80px] h-[3px] bg-gradient-to-r from-[#D4A017] to-[#A63D00] rounded-full mt-4" />
            </div>

            <p className="text-[#5C3A1E]/90 text-[0.95rem] sm:text-[1rem] leading-relaxed font-sans">
              <strong>मानव जाग्रती संस्था</strong> ब्रज भूमि में विभिन्न महान और
              पवित्र विधाओं के माध्यम से निरंतर समाज कल्याण के लिए समर्पित है।
              संतों के सत्कार से लेकर, मूक पशुओं की रक्षा और पर्यावरण संरक्षण
              तक, यह संगठन समकालीन आवश्यकताओं को पूरा करते हुए हमारे प्राचीन
              सनातन और पारंपरिक मूल्यों को जीवंत रखता है।
            </p>

            {/* 5-Service Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Service 1: Sant Seva */}
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 hover:shadow-md transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                  🙏
                </div>
                <div>
                  <h4 className="font-serif text-[0.95rem] text-[#2C1810] font-bold mb-0.5">
                    संत भोजन सेवा
                  </h4>
                  <p className="text-[0.78rem] text-[#5C3A1E]/85 leading-normal">
                    श्री धाम में निवास करने वाले त्यागी संतों और वैष्णवों को
                    नित्य आदरपूर्वक भोजन प्रसाद उपलब्ध कराना।
                  </p>
                </div>
              </div>

              {/* Service 2: Gau Seva */}
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 hover:shadow-md transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                  🐄
                </div>
                <div>
                  <h4 className="font-serif text-[0.95rem] text-[#2C1810] font-bold mb-0.5">
                    गौ सेवा और पूजा
                  </h4>
                  <p className="text-[0.78rem] text-[#5C3A1E]/85 leading-normal">
                    सनातन संस्कृति की आधार स्तंभ गौ माता की नित्य सेवा, चिकित्सा
                    देखभाल और उनके भरण-पोषण की संपूर्ण व्यवस्था।
                  </p>
                </div>
              </div>

              {/* Service 3: Yamuna Cleanliness */}
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 hover:shadow-md transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                  🌊
                </div>
                <div>
                  <h4 className="font-serif text-[0.95rem] text-[#2C1810] font-bold mb-0.5">
                    यमुना स्वच्छता अभियान
                  </h4>
                  <p className="text-[0.78rem] text-[#5C3A1E]/85 leading-normal">
                    पतिता पाविनी कालिंदी श्री यमुना नदी की पवित्रता और स्वच्छता
                    को बनाए रखने के लिए निरंतर जमीनी पहल।
                  </p>
                </div>
              </div>

              {/* Service 4: Bandar Seva */}
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 hover:shadow-md transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                  🐒
                </div>
                <div>
                  <h4 className="font-serif text-[0.95rem] text-[#2C1810] font-bold mb-0.5">
                    बंदर आहार सेवा
                  </h4>
                  <p className="text-[0.78rem] text-[#5C3A1E]/85 leading-normal">
                    वृंदावन के अभिन्न अंग, हनुमान स्वरूप बंदरों के लिए समय-समय
                    पर फल, चने व उचित भोजन व्यवस्था प्रदान करना।
                  </p>
                </div>
              </div>

              {/* Service 5: Old Age Home (Spans across full width on screen if odd) */}
              <div className="flex gap-3 p-4 rounded-xl bg-white border border-[#D4A017]/10 hover:shadow-md transition duration-300 sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-[#A63D00]/5 text-[#A63D00] flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                  🛕
                </div>
                <div>
                  <h4 className="font-serif text-[0.95rem] text-[#2C1810] font-bold mb-0.5">
                    वृद्धाश्रम संचालन
                  </h4>
                  <p className="text-[0.78rem] text-[#5C3A1E]/85 leading-normal">
                    असहाय और बेसहारा बुजुर्गों के लिए एक प्रेममयी आश्रय स्थल,
                    जहाँ उनके रहने, भोजन, चिकित्सा और आध्यात्मिक वातावरण की सेवा
                    सुनिश्चित की जाती है।
                  </p>
                </div>
              </div>
            </div>

            {/* Action Call to Button */}
            <div className="pt-4">
              <a
                href="#donate"
                onClick={handleDonateClick}
                className="inline-block bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white py-3.5 px-8 rounded-full font-serif text-[0.85rem] font-semibold tracking-wider transition duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-[0_10px_25px_rgba(166,61,0,0.25)]"
              >
                🙏 इस पवित्र सेवा से जुड़ें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
