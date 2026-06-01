"use client";

import React, { useState, useEffect } from "react";

type DonationCause = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  suggestedAmounts: string[];
  defaultAmount: string;
  upiId: string;
  bgGradient: string;
};

export default function UnifiedDonationPage() {
  // Supported donation causes data structure
  const donationCauses : DonationCause[] = [
    {
      id: "gau_seva",
      title: "सुरभि गऊ सेवा फंड",
      subtitle: "Gau Seva & Shelter Support",
      icon: "🐄",
      description:
        "संस्था के गोशाला प्रभाग में चारे, चिकित्सा और बीमार गायों की सेवा के लिए सीधा अंशदान।",
      suggestedAmounts: ["1100", "2100", "5100", "11000"],
      defaultAmount: "5100",
      upiId: "manavjagriti.gau@sbi",
      bgGradient: "from-amber-600/10 to-transparent",
    },
    {
      id: "bhandara",
      title: "संत-ब्रजवासी भंडारा सेवा",
      subtitle: "Sadhu & Pilgrim Prasad Seva",
      icon: "🍲",
      description:
        "परिक्रमा मार्ग और धामों में संतों, तीर्थयात्रियों और जरूरतमंदों को शुद्ध देसी घी का प्रसादम वितरण।",
      suggestedAmounts: ["2500", "5000", "10000", "25000"],
      defaultAmount: "5000",
      upiId: "manavjagriti.bhandara@sbi",
      bgGradient: "from-orange-600/10 to-transparent",
    },
    {
      id: "vidya_daan",
      title: "ऋषिकुल बाल शिक्षा संस्कार",
      subtitle: "Child Education & Vedic Sanskar",
      icon: "📚",
      description:
        "निर्धन परिवारों के बच्चों को आधुनिक शिक्षा के साथ-साथ सनातन संस्कारों से जोड़ने का प्रकल्प।",
      suggestedAmounts: ["1500", "3100", "7500", "15000"],
      defaultAmount: "3100",
      upiId: "manavjagriti.edu@sbi",
      bgGradient: "from-yellow-600/10 to-transparent",
    },
  ];

  // Active state trackers
  const [selectedCause, setSelectedCause] = useState(donationCauses[0]);
  const [amount, setAmount] = useState(donationCauses[0].defaultAmount);
  const [paymentMethod, setPaymentMethod] = useState("upi_qr"); // upi_qr, card, netbanking
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  // Synchronize layout when cause changes
  const handleCauseChange = (cause: DonationCause) => {
    setSelectedCause(cause);
    setAmount(cause.defaultAmount);
    setTimeLeft(300); // Reset timer for new dynamic QR
  };

  // Countdown timer effect for active QR
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(selectedCause.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F0805] text-[#EADFC9] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium Ambient Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4A017]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#3D2511]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans font-black text-[#D4A017] uppercase tracking-[0.3em] block mb-2">
            Secure Donation Gateway
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#FDFBF7] tracking-wide">
            मानव जागृति संस्था — अंशदान केंद्र
          </h1>
          <div className="w-16 h-[1.5px] bg-[#D4A017] mx-auto mt-4" />
        </div>

        {/* Two-Column Fluid Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Service Selection Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-[#D4A017] uppercase tracking-wider mb-2 px-1">
              1. सेवा प्रकल्प चुनें (Choose Service)
            </h3>

            {donationCauses.map((cause) => {
              const isSelected = selectedCause.id === cause.id;
              return (
                <div
                  key={cause.id}
                  onClick={() => handleCauseChange(cause)}
                  className={`group relative p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `bg-gradient-to-br ${cause.bgGradient} to-[#1A0F0A] border-[#D4A017] shadow-lg`
                      : "bg-[#160E0A]/40 border-white/[0.05] hover:border-white/20 hover:bg-[#160E0A]/80"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                        isSelected
                          ? "bg-[#3D2511] border border-[#D4A017]/40"
                          : "bg-white/5"
                      }`}
                    >
                      {cause.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#FDFBF7] tracking-wide">
                        {cause.title}
                      </h4>
                      <p className="text-[10px] font-mono tracking-wider text-[#D4A017]/70 mt-0.5">
                        {cause.subtitle}
                      </p>
                      <p className="text-xs text-[#EADFC9]/60 leading-relaxed pt-2">
                        {cause.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Dynamic Checkout Engine (7 Columns) */}
          <div className="lg:col-span-7 bg-[#1A0F0A] border border-[#D4A017]/30 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />

            {/* Checkout Inner Header */}
            <div className="p-6 border-b border-white/[0.06] bg-white/[0.01] flex flex-wrap gap-2 items-center justify-between">
              <div>
                <span className="text-[9px] font-sans font-black text-[#D4A017] uppercase tracking-[0.2em] block mb-0.5">
                  Live Payment Architecture
                </span>
                <h3 className="font-serif text-md font-bold text-[#FDFBF7]">
                  भुगतान खिड़की: {selectedCause.title}
                </h3>
              </div>
              <div className="bg-[#3D2511] px-3 py-1 rounded-full border border-[#D4A017]/30 text-xs font-mono font-bold text-[#F4D28C]">
                ₹{parseInt(amount || "0").toLocaleString("en-IN")}.00
              </div>
            </div>

            {/* Split Checkout Control Area */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
              {/* Payment Method Controls (Left Sub-column) */}
              <div className="md:col-span-5 p-6 border-b md:border-b-0 md:border-r border-white/[0.06] space-y-3 bg-black/[0.15]">
                {/* Amount Configuration Input Inside Checklist */}
                <div className="space-y-2 mb-4">
                  <label className="text-[10px] text-[#EADFC9]/50 uppercase tracking-wider font-bold">
                    राशि निर्धारित करें
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {selectedCause.suggestedAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                          amount === amt
                            ? "bg-[#D4A017] text-[#110704]"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        ₹{parseInt(amt).toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="अन्य राशि भरें"
                    className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-mono font-bold text-white outline-none focus:border-[#D4A017]/50"
                  />
                </div>

                <div className="w-full h-[1px] bg-white/[0.06] my-2" />

                <p className="text-[10px] text-[#EADFC9]/50 uppercase tracking-wider font-bold">
                  भुगतान का माध्यम
                </p>

                {/* Option 1: UPI */}
                <button
                  onClick={() => setPaymentMethod("upi_qr")}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    paymentMethod === "upi_qr"
                      ? "bg-gradient-to-r from-[#3D2511] to-[#22140A] border-[#D4A017] text-[#F4D28C]"
                      : "bg-white/[0.02] border-white/[0.05] text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-md">📱</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">UPI / QR कोड</p>
                    <p className="text-[8px] opacity-60">Instant Sync</p>
                  </div>
                </button>

                {/* Option 2: Cards */}
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    paymentMethod === "card"
                      ? "bg-gradient-to-r from-[#3D2511] to-[#22140A] border-[#D4A017] text-[#F4D28C]"
                      : "bg-white/[0.02] border-white/[0.05] text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-md">💳</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">कार्ड्स</p>
                    <p className="text-[8px] opacity-60">Visa, Master, RuPay</p>
                  </div>
                </button>

                {/* Option 3: NetBanking */}
                <button
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    paymentMethod === "netbanking"
                      ? "bg-gradient-to-r from-[#3D2511] to-[#22140A] border-[#D4A017] text-[#F4D28C]"
                      : "bg-white/[0.02] border-white/[0.05] text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-md">🏛️</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold">नेट बैंकिंग</p>
                    <p className="text-[8px] opacity-60">All Indian Banks</p>
                  </div>
                </button>
              </div>

              {/* Dynamic Viewport Content Wrapper (Right Sub-column) */}
              <div className="md:col-span-7 p-6 flex flex-col justify-between items-center bg-black/[0.05]">
                {/* Viewport 1: Dynamic UPI Generator */}
                {paymentMethod === "upi_qr" && (
                  <div className="w-full flex flex-col items-center space-y-4 text-center my-auto">
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-[#F4D28C]">
                        QR active for: {formatTime(timeLeft)}
                      </span>
                    </div>

                    <div className="relative p-3 bg-white rounded-2xl border-2 border-[#D4A017]/40">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                        alt="Sanstha Donation QR Code"
                        className="w-36 h-36 object-contain"
                      />
                      <div className="absolute inset-0 m-auto w-8 h-8 rounded-lg bg-[#3D2511] border border-[#D4A017]/60 flex items-center justify-center text-[10px] font-bold text-white">
                        {selectedCause.icon}
                      </div>
                    </div>

                    <div className="w-full max-w-xs space-y-2">
                      <p className="text-[11px] text-[#EADFC9]/60">
                        Scan via PhonePe, Google Pay, or Paytm.
                      </p>

                      {/* Dynamic Custom-VPA Container per cause */}
                      <div className="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] rounded-xl pl-3 pr-1 py-1 font-mono text-[11px] text-white/90">
                        <span className="truncate mr-1">
                          {selectedCause.upiId}
                        </span>
                        <button
                          onClick={handleCopyUPI}
                          className="px-2.5 py-1 rounded-lg bg-[#D4A017] text-[#110704] font-sans font-bold text-[9px] uppercase hover:bg-[#F4D28C] transition-all cursor-pointer shrink-0"
                        >
                          {copied ? "Copied! ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Viewport 2: Cards Placeholder */}
                {paymentMethod === "card" && (
                  <div className="w-full flex flex-col justify-center items-center h-full text-center space-y-4 my-auto">
                    <div className="w-full max-w-[240px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] p-4 rounded-xl text-left space-y-4">
                      <div className="flex justify-between items-center opacity-40">
                        <span className="text-[10px] font-mono font-bold">
                          SECURE CARD CHIP
                        </span>
                        <span className="text-md">💳</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                        <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                      </div>
                    </div>
                    <p className="text-[11px] text-[#EADFC9]/50 max-w-xs">
                      कार्ड भुगतान मॉड्यूल प्रोडक्शन सर्वर लिंक होने पर चालू हो
                      जायेगा।
                    </p>
                  </div>
                )}

                {/* Viewport 3: Netbanking Placeholder */}
                {paymentMethod === "netbanking" && (
                  <div className="w-full flex flex-col justify-center items-center h-full text-center my-auto p-4">
                    <span className="text-2xl mb-2 opacity-30">🏛️</span>
                    <p className="text-xs text-[#EADFC9]/70 font-semibold">
                      नेट बैंकिंग चैनल
                    </p>
                    <p className="text-[10px] text-[#EADFC9]/40 mt-1 max-w-xs">
                      सभी भारतीय बैंकों की डायरेक्ट गेटवे लिस्ट यहाँ लोड होगी।
                    </p>
                  </div>
                )}

                {/* Secure Trust Bottom Banner */}
                <div className="w-full pt-3 mt-4 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-[#EADFC9]/40">
                  <span>🔒 256-Bit Encryption</span>
                  <span className="font-mono text-[#D4A017]/70">
                    Direct Destination Pool
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
