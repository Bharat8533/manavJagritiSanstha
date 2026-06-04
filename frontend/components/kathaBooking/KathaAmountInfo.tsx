import React from "react";
import { KathaAmountInfoProps } from "../UI/Types.types";

export default function KathaAmountInfo({
  selectedKatha,
}: KathaAmountInfoProps) {
  // Balanced display pricing matrix matching all updated selection options
  const getAmountDetails = () => {
    switch (selectedKatha) {
      case "shrimad-bhagavat":
        return {
          base: "₹1,51,000",
          inclusion:
            "7 दिवसीय पूजन सामग्री, संगीत मंडल, व्यास पीठ व्यवस्था शामिल।",
        };
      case "shri-ram-katha":
        return {
          base: "₹2,11,000",
          inclusion:
            "9 दिवसीय दिव्य मानस पाठ, संपूर्ण संगीतमय झांकी एवं आरती संगीत।",
        };
      case "shiv-mahapuran":
        return {
          base: "₹1,21,000",
          inclusion:
            "7 दिवसीय महापुराण पोथी स्थापना, रुद्राभिषेक पूजन सामग्री सहित।",
        };
      case "shri-krishna-leela":
        return {
          base: "₹1,31,000",
          inclusion:
            "5 या 7 दिवसीय दिव्य झांकी उत्सव, मधुर माखन लीला, छप्पन भोग सामग्री एवं संगीत मंडल।",
        };
      case "devi-bhagavat":
        return {
          base: "₹1,81,000",
          inclusion:
            "9 दिवसीय शक्ति अनुष्ठान, दुर्गा सप्तशती पाठ, हवन वेदी निर्माण एवं दैनिक महाआरती श्रृंगार।",
        };
      case "mahamrityunjay-jaap":
        return {
          base: "₹51,000",
          inclusion:
            "विशेष संकल्पित वैदिक ब्राह्मणों द्वारा सवा लाख (1,25,000) महामृत्युंजय मंत्र जाप एवं दशांश हवन सामग्री।",
        };
      case "ganesh-purana":
        return {
          base: "₹75,000",
          inclusion:
            "3 या 5 दिवसीय श्री गणेश मोदक अर्चन, दूर्वांकुर अभिषेक सामग्री एवं दैनिक रिद्धि-सिद्धि मंगल आरती।",
        };
      case "satyanarayan-vrat":
        return {
          base: "₹21,000",
          inclusion:
            "एक दिवसीय पूर्ण सत्यनारायण कथा, हवन कुंड एवं आचार्य दक्षिणा।",
        };
      case "garuda-purana":
        return {
          base: "₹41,000",
          inclusion:
            "7 दिवसीय नारायण बलि / गरुड़ पुराण मूल पाठ वाचन, श्राद्ध तर्पण सामग्री एवं नारायण महापूजा।",
        };
      default:
        return {
          base: "--- ",
          inclusion: "कृपया ऊपर किसी एक पावन कथा का चयन करें।",
        };
    }
  };

  const details = getAmountDetails();

  return (
    <div className="lg:col-span-5 space-y-6 text-left">
      {/* Amount Preview Box */}
      <div className="bg-white p-6 rounded-3xl border border-[#D4A017]/15 shadow-sm relative overflow-hidden">
        <h4 className="text-sm font-bold uppercase tracking-widest text-[#A63D00] mb-2">
          अनुमानित सेवा निवेदिता राशि
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold font-serif text-[#2C1810]">
            {details.base}
          </span>
          <span className="text-xs text-[#5C3A1E]/70 font-light">
            *(न्यूनतम सहयोग संकल्प)
          </span>
        </div>
        <p className="text-sm text-[#5C3A1E]/80 font-light mt-2 leading-relaxed bg-[#FCFAF5] p-3 rounded-xl border border-[#D4A017]/10">
          ℹ️ {details.inclusion}
        </p>
      </div>

      {/* Rules and guidelines blocks */}
      <div className="bg-white p-6 rounded-3xl border border-[#D4A017]/15 shadow-sm space-y-4">
        <h4 className="font-serif text-sm font-bold text-[#2C1810]">
          आवश्यक नियम एवं व्यवस्था निर्देश:
        </h4>

        <ul className="space-y-3 text-sm text-[#5C3A1E]/80 font-light">
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>
              <b className="font-bold">व्यासपीठ मर्यादा:</b> संस्थान की व्यासपीठ
              से केवल शास्त्रीय सनातन सिद्धांतों और प्रामाणिक ग्रंथों के
              प्रसंगों का ही वाचन होगा।
            </span>
          </li>
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>
              <b className="font-bold">आश्रम आवास नियमावली:</b> यदि आयोजन
              वृंदावन आश्रम में है, तो यजमान के अतिथियों (अधिकतम 30 व्यक्ति) के
              आवास एवं सात्विक भोजन की व्यवस्था आश्रम द्वारा संभाली जाएगी।
            </span>
          </li>
          <li className="flex gap-2.5 items-start">
            <span className="text-[#A63D00] shrink-0">🔸</span>
            <span>
              <b className="font-bold">बाहरी आयोजन:</b> निज निवास या जन-पंडाल
              में आयोजन होने पर व्यासजी एवं संगीतकारों के सुगम यातायात तथा
              सात्विक आवास की व्यवस्था यजमान पक्ष को सुनिश्चित करनी होगी।
            </span>
          </li>
        </ul>
      </div>

      {/* Trust Helpline Shield */}
      <div className="p-5 bg-gradient-to-br from-[#2C1810] to-[#1A0B05] text-[#F4D28C] rounded-2xl relative overflow-hidden shadow-xl border border-white/5">
        <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-1">
          संशय निवारण केंद्र:
        </h5>
        <p className="text-sm text-white/70 font-light leading-relaxed">
          यदि आपके मन में तिथि विस्तार, व्यास पीठ आचार्य चयन अथवा दान राशि छूट
          (80G कर लाभ) सम्बन्धी कोई प्रश्न हैं, तो निसंकोच हमारे मुख्य न्यासी
          कक्ष में संशय निवारण केंद्र{" "}
          <b className="text-white font-bold"> +91 98765 43210 </b> पर कॉल करें।
        </p>
      </div>
    </div>
  );
}
