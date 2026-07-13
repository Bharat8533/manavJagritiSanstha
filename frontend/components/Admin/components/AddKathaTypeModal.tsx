"use client";

import React, { useState } from "react";
import { X, Save, Clock, PenTool } from "lucide-react";

interface AddKathaTypeModalProps {
  onClose: () => void;
  onSave: (kathaData: {
    key: string;
    label: string;
    amount: string;
    duration: string;
    inclusion: string;
  }) => void;
}

export default function AddKathaTypeModal({
  onClose,
  onSave,
}: AddKathaTypeModalProps) {
  const [label, setLabel] = useState("");
  const [base, setBase] = useState("");
  const [durationSelect, setDurationSelect] = useState("7"); // ड्रॉपडाउन की स्टेट
  const [customDuration, setCustomDuration] = useState(""); // खुद से टाइप करने वाली स्टेट
  const [inclusion, setInclusion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalDuration =
      durationSelect === "other"
        ? customDuration.trim()
        : `${durationSelect} दिवसीय अनुष्ठान`;

    if (!label || !base || !finalDuration || !inclusion) {
      alert("कृपया सभी अनिवार्य फ़ील्ड भरें।");
      return;
    }

    const key =
      label
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "-") || `katha-${Date.now()}`;

    onSave({
      key,
      label,
      amount: `₹${Number(base).toLocaleString("hi-IN")}`,
      duration: finalDuration,
      inclusion,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-[#FAF8F5] w-full max-w-md rounded-2xl border border-[#1E0F0A]/10 p-6 shadow-2xl relative space-y-4">
        {/* हेडर */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2 py-0.5 rounded">
              मास्टर डेटा कॉन्फ़िगरेशन
            </span>
            <h2 className="font-serif text-base font-bold text-[#1E0F0A] mt-1">
              नवीन पावन कथा श्रेणी जोड़ें
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-200 text-gray-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* फॉर्म */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* 1. कथा का नाम */}
          <div className="space-y-1">
            <label className="font-semibold text-[#2C1810]">
              कथा/उत्सव का नाम (हिन्दी में) *
            </label>
            <input
              type="text"
              required
              placeholder="उदा. श्रीरामकथा ज्ञानयज्ञ"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#A63D00]"
            />
          </div>

          {/* 2. कथा अवधि (Dropdown) */}
          <div className="space-y-1">
            <label className="font-semibold text-[#2C1810] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#A63D00]" /> कथा/अनुष्ठान की
              समयावधि *
            </label>
            <div className="relative">
              <select
                value={durationSelect}
                onChange={(e) => setDurationSelect(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#A63D00] appearance-none cursor-pointer font-medium text-[#1E0F0A]"
              >
                <option value="1">1 दिवसीय (एक कुण्डीय / लघु अनुष्ठान)</option>
                <option value="3">3 दिवसीय (संक्षिप्त उत्सव / पाठ)</option>
                <option value="5">5 दिवसीय (विशेष अनुष्ठान)</option>
                <option value="7">
                  7 दिवसीय (श्रीमद्भागवत / शिव महापुराण)
                </option>
                <option value="9">
                  9 दिवसीय (श्रीरामकथा / रामचरितमानस पाठ)
                </option>
                <option value="11">11 दिवसीय (महायज्ञ / कोटि अर्चन)</option>
                <option value="other">
                  ✍️ अन्य (अपनी समयावधि खुद टाइप करें)
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                ▼
              </div>
            </div>
          </div>

          {/* 2.5. कंडीशनल कस्टम इनपुट (जब "अन्य" चुना जाएगा तब ही दिखेगा) */}
          {durationSelect === "other" && (
            <div className="space-y-1 animate-fadeIn">
              <label className="font-semibold text-[#A63D00] flex items-center gap-1">
                <PenTool className="w-3.5 h-3.5" /> अपनी कस्टम अवधि यहाँ लिखें *
              </label>
              <input
                type="text"
                required
                placeholder="उदा. 108 दिवसीय कोटि महायज्ञ या 15 दिवसीय उत्सव"
                value={customDuration}
                onChange={(e) => setCustomDuration(e.target.value)}
                className="w-full bg-white border border-[#A63D00]/30 rounded-xl p-3 text-sm focus:outline-none focus:border-[#A63D00] shadow-inner"
              />
            </div>
          )}

          {/* 3. दक्षिणा राशि */}
          <div className="space-y-1">
            <label className="font-semibold text-[#2C1810]">
              आधार संकल्प दक्षिणा राशि (बिना कोमा के नंबर) *
            </label>
            <input
              type="number"
              required
              placeholder="उदा. 151000"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#A63D00]"
            />
          </div>

          {/* 4. समाविष्ट व्यवस्थाएं */}
          <div className="space-y-1">
            <label className="font-semibold text-[#2C1810]">
              समाविष्ट पूजन सामग्री एवं व्यवस्था विवरण *
            </label>
            <textarea
              required
              rows={3}
              placeholder="उदा. भव्य व्यासपीठ सज्जा, दिव्य झांकी, संगीत मंडल एवं संपूर्ण आचार्य मंडल भोजन व्यवस्था शामिल।"
              value={inclusion}
              onChange={(e) => setInclusion(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#A63D00] resize-none"
            />
          </div>

          {/* एक्शन बटन्स */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 font-medium cursor-pointer"
            >
              रद्ध करें
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-green-700 text-white font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" /> श्रेणी प्रकाशित करें
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
