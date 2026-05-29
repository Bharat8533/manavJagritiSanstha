"use client";
import React, { useState } from "react";

export default function BookingDesk() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    aadhaar: "", // Omitted from output digits but structurally active as custom placeholder
    yatraType: "pedal",
    pilgrims: 1,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `पंजीकरण सफल! केंद्रीय सचिवालय प्रभाग जल्द ही आपसे संपर्क करेगा। \nनाम: ${formData.name}`,
    );
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Ambience Blobs */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
        {/* Left Column (5 Cols): Premium Central Secretariat Information Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#3D2511] via-[#2B1E16] to-[#1F140E] text-[#FDFBF7] border border-[#D4A017]/20 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(61,37,17,0.15)] relative overflow-hidden group">
          {/* Decorative Corner Light Strike */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4A017]/10 to-transparent pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-white/5 px-3 py-1 mb-6 backdrop-blur-md">
              <span className="text-[9px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#F4D28C]">
                Central Secretariat
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-white leading-snug mb-8">
              मुख्य कार्यालय एवं <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D28C] to-[#D4A017] font-bold">
                संपर्क सूत्र बोर्ड
              </span>
            </h3>

            <div className="space-y-5 text-xs font-sans text-[#EADFC9]/90 font-medium">
              {/* Yatra Management Center Card */}
              <div className="relative group/card bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] hover:border-[#D4A017]/30 rounded-2xl p-6 transition-all duration-300 shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  {/* Icon Placeholder Node */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#F4D28C] text-xs font-bold group-hover/card:bg-[#D4A017]/20 transition-colors duration-300">
                    📍
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] text-[#D4A017] uppercase tracking-[0.2em] font-black">
                      यात्रा प्रबंधन केंद्र
                    </p>
                    <p className="text-base font-serif font-bold text-[#FDFBF7] tracking-wide">
                      गुरुकुलम् ब्रज यात्रा प्रभाग
                    </p>
                    <p className="pt-1 text-xs text-[#EADFC9]/70 leading-relaxed font-light">
                      रमन रेती मार्ग, वृंदावन, मथुरा, उत्तर प्रदेश - २८११२१
                    </p>
                  </div>
                </div>
              </div>

              {/* Helpline Numbers Card */}
              <div className="relative group/card bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] hover:border-[#D4A017]/30 rounded-2xl p-6 transition-all duration-300 shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="flex items-start gap-4">
                  {/* Icon Placeholder Node */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#F4D28C] text-xs font-bold group-hover/card:bg-[#D4A017]/20 transition-colors duration-300">
                    📞
                  </div>
                  <div className="space-y-2 w-full">
                    <p className="text-[9px] text-[#D4A017] uppercase tracking-[0.2em] font-black">
                      हेल्पलाइन नंबर (24x7 Support)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-sm font-bold tracking-wider text-white">
                      <a
                        href="tel:+919876543210"
                        className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] hover:border-[#D4A017]/40 rounded-xl px-4 py-2.5 hover:text-[#F4D28C] transition-all duration-300"
                      >
                        <span>+91 98765 43210</span>
                        <span className="text-[10px] text-white/20 group-hover/card:text-[#D4A017]/60">
                          ↗
                        </span>
                      </a>
                      <a
                        href="tel:+91565244200"
                        className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] hover:border-[#D4A017]/40 rounded-xl px-4 py-2.5 hover:text-[#F4D28C] transition-all duration-300"
                      >
                        <span>+91 565 244200</span>
                        <span className="text-[10px] text-white/20 group-hover/card:text-[#D4A017]/60">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 pt-6 border-t border-white/[0.05] flex items-center justify-between">
            <div>
              <p className="text-[9px] text-[#D4A017] uppercase tracking-[0.15em] font-black mb-1">
                आधिकारिक ईमेल
              </p>
              <p className="text-xs font-mono font-medium text-[#FDFBF7]/80 hover:text-white transition-colors lowercase cursor-pointer">
                yatra@gurukulam.org
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] text-xs font-bold group-hover:scale-110 transition-transform duration-300">
              ✦
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Elite Luxury Intake Form Box */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-white border border-[#D4A017]/15 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_15px_45px_rgba(212,160,23,0.04)] flex flex-col justify-between group relative overflow-hidden"
        >
          {/* Subtle Bottom Ambient Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3D2511] via-[#D4A017] to-[#A63D00]" />

          <div>
            <div className="mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2511]">
                डिजिटल पंजीकरण प्रभाग
              </h3>
              <p className="text-xs text-[#7A5833]/80 mt-1 font-medium">
                Fill out the registry records carefully for instant processing.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    श्रद्धालु का पूरा नाम
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="जैसे: राहुल शर्मा"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    मोबाइल नंबर (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    ईमेल आईडी (वैकल्पिक)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@domain.com"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>

                {/* Identity Proof Verification Field Placeholder */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    पहचान पत्र संख्या (ID Proof Number)
                  </label>
                  <input
                    type="text"
                    name="aadhaar"
                    value={formData.aadhaar}
                    onChange={handleInputChange}
                    placeholder="Government Issued ID Number"
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-medium transition-all duration-300 placeholder:text-[#3D2511]/30 focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Yatra Mode Config Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    यात्रा का प्रकार (Yatra Mode)
                  </label>
                  <div className="relative">
                    <select
                      name="yatraType"
                      value={formData.yatraType}
                      onChange={handleInputChange}
                      className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-semibold focus:outline-none focus:border-[#3D2511] focus:bg-white cursor-pointer shadow-sm appearance-none pr-10"
                    >
                      <option value="pedal">
                        दिव्य संकल्प यात्रा (पैदल - 21 दिन)
                      </option>
                      <option value="vahan">
                        सुखद वाहन यात्रा (गाड़ी - 7 दिन)
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A5833] text-[9px] pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Pilgrim Headcount Box */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A5833] block pl-1">
                    कुल सदस्यों की संख्या
                  </label>
                  <input
                    type="number"
                    name="pilgrims"
                    min={1}
                    value={formData.pilgrims}
                    onChange={handleInputChange}
                    className="w-full bg-[#FCFAF6] border border-[#D4A017]/20 rounded-xl px-4 py-3.5 text-xs text-[#3D2511] font-extrabold focus:outline-none focus:border-[#3D2511] focus:bg-white focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="w-full bg-[#3D2511] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-black py-4 rounded-xl border border-transparent hover:bg-[#D4A017] hover:text-[#3D2511] transition-all duration-300 shadow-[0_4px_15px_rgba(61,37,17,0.1)] hover:shadow-[0_10px_25px_rgba(212,160,23,0.2)] cursor-pointer mt-8 text-center"
          >
            सुरक्षित डिजिटल पंजीकरण करें ✦
          </button>
        </form>
      </div>
    </div>
  );
}
