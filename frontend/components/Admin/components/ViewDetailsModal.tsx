"use client";

import React from "react";
import {
  X,
  User,
  MapPin,
  Calendar,
  IndianRupee,
  RefreshCw,
  Phone, // फ़ोन आइकॉन जोड़ा गया
} from "lucide-react";

interface ViewDetailsModalProps {
  booking: any;
  onClose: () => void;
  onStatusChange: (
    id: string,
    newStatus: "Confirmed" | "In-Progress" | "Pending",
  ) => void;
}

export default function ViewDetailsModal({
  booking,
  onClose,
  onStatusChange,
}: ViewDetailsModalProps) {
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed":
        return (
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-green-200">
            ✓ स्वीकृत
          </span>
        );
      case "In-Progress":
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-blue-200 animate-pulse">
            ● लाइव जारी
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-amber-200">
            ⚠ प्रतीक्षारत
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-md rounded-3xl p-6 border border-[#A63D00]/20 relative space-y-5 mx-4 shadow-2xl">
        {/* हेडर ज़ोन */}
        <div className="flex items-center justify-between border-b border-[#A63D00]/10 pb-3">
          <div>
            <span className="text-[9px] font-bold tracking-widest text-[#A63D00] bg-[#A63D00]/5 px-2 py-0.5 rounded uppercase">
              अनुष्ठान प्रबंधन विंडो
            </span>
            <h2 className="font-serif text-lg font-bold text-[#1E0F0A] mt-1">
              📖 {booking?.kathaType || "कथा / अनुष्ठान प्रसंग"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          {/* एडमिन लाइव एक्शन कंट्रोल */}
          <div className="bg-[#FFF9EE] p-4 rounded-2xl border border-[#A63D00]/10 space-y-2.5">
            <div className="flex items-center gap-1.5 text-[#A63D00] font-bold text-[10px] uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5" /> एडमिन नियंत्रण स्थिति
            </div>
            <div className="grid grid-cols-2 gap-3 items-center">
              <div>{renderStatusBadge(booking?.status)}</div>
              <select
                value={booking?.status}
                onChange={(e) =>
                  onStatusChange(booking.id, e.target.value as any)
                }
                className="w-full bg-white border border-[#1E0F0A]/10 rounded-xl px-3 py-2 font-bold text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] text-xs cursor-pointer"
              >
                <option value="Pending">प्रतीक्षारत (Pending)</option>
                <option value="Confirmed">स्वीकृत (Confirmed)</option>
                <option value="In-Progress">कथा जारी (In-Progress)</option>
              </select>
            </div>
          </div>

          {/* मुख्य विवरण तालिका (Card Body) */}
          <div className="bg-white rounded-2xl border border-[#1E0F0A]/5 divide-y divide-[#1E0F0A]/5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
            {/* बुकिंग आईडी */}
            <div className="p-3 px-4 flex justify-between bg-[#FAF8F5]/50 rounded-t-2xl items-center">
              <span className="text-gray-400 font-medium">बुकिंग संख्या</span>
              <span className="font-mono font-bold text-[#A63D00] bg-[#A63D00]/5 px-2 py-0.5 rounded">
                {booking?.id}
              </span>
            </div>

            {/* यजमान का नाम और मोबाइल नंबर */}
            <div className="p-3.5 flex items-start gap-3">
              <User className="w-4 h-4 text-[#A63D00] mt-0.5 shrink-0" />
              <div className="space-y-1 w-full">
                <p className="text-[10px] text-gray-400 font-medium leading-none">
                  परम यजमान
                </p>
                <p className="font-bold text-sm text-[#1E0F0A]">
                  {booking?.hostName}
                </p>

                {/* 📞 लाइव मोबाइल नंबर विज़ुअल */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="bg-green-50 border border-green-100 px-2 py-1 rounded-lg text-xs font-bold text-gray-700 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-green-600" />
                    {booking?.phone || "नंबर उपलब्ध नहीं"}
                  </span>
                </div>
              </div>
            </div>

            {/* व्यासपीठ का नाम */}
            <div className="p-3.5 flex items-start gap-3">
              <span className="text-base leading-none shrink-0">🎙️</span>
              <div>
                <p className="text-[10px] text-gray-400 font-medium">
                  आवंटित व्यासपीठ
                </p>
                <p className="font-bold text-[#2C1810]">
                  {booking?.vyaasName || "विचाराधीन"}
                </p>
              </div>
            </div>

            {/* कथा स्थल */}
            <div className="p-3.5 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-gray-400 font-medium">
                  कथा स्थल / आयोजन क्षेत्र
                </p>
                <p className="font-semibold text-gray-700 leading-relaxed">
                  {booking?.location}
                </p>
              </div>
            </div>

            {/* तारीखें */}
            <div className="p-3.5 flex items-start gap-3">
              <Calendar className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
              <div className="grid grid-cols-2 gap-6 w-full">
                <div>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">
                    महोत्सव प्रारंभ
                  </p>
                  <p className="font-bold text-gray-700 mt-0.5">
                    {booking?.startDate}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider">
                    कथा विश्राम
                  </p>
                  <p className="font-bold text-gray-700 mt-0.5">
                    {booking?.endDate}
                  </p>
                </div>
              </div>
            </div>

            {/* संकल्पित दक्षिणा राशि */}
            <div className="p-3.5 flex items-start gap-3 rounded-b-2xl">
              <IndianRupee className="w-4 h-4 text-[#A63D00] mt-1 shrink-0" />
              <div>
                <p className="text-[10px] text-[#A63D00] font-bold uppercase tracking-wider">
                  संकल्पित श्रद्धा दक्षिणा
                </p>
                <p className="text-xl font-black text-[#A63D00] mt-0.5">
                  {booking?.dakshina > 0
                    ? `₹${booking.dakshina.toLocaleString("hi-IN")}/-`
                    : "वार्तालाप / विचाराधीन"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* पादलेख (Footer) */}
        <div className="flex justify-end border-t border-[#1E0F0A]/5 pt-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#1E0F0A] text-white text-xs font-bold hover:bg-[#A63D00] transition-colors cursor-pointer shadow-md"
          >
            विवरण बंद करें
          </button>
        </div>
      </div>
    </div>
  );
}
