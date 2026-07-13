"use client";

import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";
import { PlanType } from "./Types.type";

interface GauSevaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<PlanType>) => Promise<void>;
  editData: PlanType | null;
}

export default function GauSevaModal({
  isOpen,
  onClose,
  onSave,
  editData,
}: GauSevaModalProps) {
  // मास्टर संकल्प योजना का स्टेट
  const [formData, setFormData] = useState<Partial<PlanType>>({
    title: "",
    amount: 0,
    desc: "",
    badge: "सुलभ सेवा",
    isFeatured: false,
  });

  // कस्टम अमाउंट (स्वेच्छा संकल्प) के लिए स्टेट टॉगल
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setIsCustomAmount(editData.amount === 0);
    } else {
      setFormData({
        title: "",
        amount: 0,
        desc: "",
        badge: "सुलभ सेवा",
        isFeatured: false,
      });
      setIsCustomAmount(false);
    }
  }, [editData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      amount: isCustomAmount ? 0 : Number(formData.amount),
    };
    await onSave(finalData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-[#FCFAF5] w-full max-w-xl h-full shadow-2xl border-l border-[#1E0F0A]/10 flex flex-col justify-between overflow-hidden">
        {/* १. हेडर (Header) */}
        <div className="p-6 border-b border-[#1E0F0A]/5 bg-white flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#2C1810]">
              {editData
                ? "संकल्प योजना संपादन"
                : "नूतन संकल्प योजना सृजन (Add New Plan)"}
            </h2>
            <p className="text-xs text-gray-400 font-light mt-0.5">
              यहाँ से जो भी संकल्प जोड़ेंगे, वो सीधे यूजर साइड बुकिंग के लिए लाइव
              हो जाएगा
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* २. फॉर्म बॉडी (Form Body) */}
        <form
          onSubmit={handleSubmit}
          id="sankalpa-master-form"
          className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-[#2C1810]"
        >
          {/* विभाग १: प्राथमिक जानकारी */}
          <div className="space-y-4">
            <h3 className="font-serif text-xs font-bold text-[#A63D00] uppercase tracking-wider">
              १. योजना की प्राथमिक जानकारी
            </h3>

            <div>
              <label className="block mb-1 font-medium">
                संकल्प योजना का नाम (Title) *
              </label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#A63D00] text-xs font-semibold placeholder-gray-300"
                placeholder="उदा. एक समय का संपूर्ण भोजन (One Full Meal)"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                बैज / श्रेणी (Badge) *
              </label>
              <select
                value={formData.badge}
                onChange={(e) =>
                  setFormData({ ...formData, badge: e.target.value })
                }
                className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#A63D00] text-xs font-medium"
              >
                <option value="सुलभ सेवा">सुलभ सेवा</option>
                <option value="विशेष संकल्प">विशेष संकल्प</option>
                <option value="लोकप्रिय">लोकप्रिय</option>
                <option value="महा संकल्प">महा संकल्प</option>
                <option value="स्वेच्छा सेवा">स्वेच्छा सेवा</option>
              </select>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* विभाग २: मूल्य निर्धारण */}
          <div className="space-y-4">
            <h3 className="font-serif text-xs font-bold text-[#A63D00] uppercase tracking-wider">
              २. मूल्य एवं सेवा राशि निर्धारण
            </h3>

            {/* कस्टम अमाउंट का ऑन/ऑफ चेकबॉक्स */}
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <input
                type="checkbox"
                id="isCustomAmount"
                checked={isCustomAmount}
                onChange={(e) => {
                  setIsCustomAmount(e.target.checked);
                  if (e.target.checked) setFormData({ ...formData, amount: 0 });
                }}
                className="w-4 h-4 accent-[#A63D00] cursor-pointer"
              />
              <label
                htmlFor="isCustomAmount"
                className="font-semibold cursor-pointer select-none"
              >
                ✨ क्या यह "स्वेच्छा संकल्प" (Custom Amount) योजना है?
                <span className="block text-[10px] text-gray-400 font-normal mt-0.5">
                  इसे चालू करने पर यूजर वेबसाइट पर अपनी श्रद्धा अनुसार राशि
                  (जैसे ₹100, ₹500) खुद टाइप कर सकेगा।
                </span>
              </label>
            </div>

            {!isCustomAmount && (
              <div>
                <label className="block mb-1 font-medium">
                  निश्चित सेवा राशि (Amount in INR) *
                </label>
                <input
                  type="number"
                  required={!isCustomAmount}
                  value={formData.amount || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: Number(e.target.value) })
                  }
                  className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#A63D00] font-sans font-bold text-sm text-[#A63D00]"
                  placeholder="11000"
                />
              </div>
            )}
          </div>

          <hr className="border-gray-100" />

          {/* विभाग ३: विवरण एवं हाइलाइट्स */}
          <div className="space-y-4">
            <h3 className="font-serif text-xs font-bold text-[#A63D00] uppercase tracking-wider">
              ३. संकल्प महात्म्य एवं विवरण
            </h3>

            <div>
              <label className="block mb-1 font-medium">
                योजना का पूरा विवरण (Description) *
              </label>
              <textarea
                rows={4}
                required
                value={formData.desc || ""}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#A63D00] font-light leading-relaxed placeholder-gray-300"
                placeholder="संपूर्ण गौशाला की पावन गऊ माताओं को एक समय का पौष्टिक हरा चारा, कुट्टी एवं अमृत जल सेवा..."
              />
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isFeatured"
                checked={
                  typeof formData.isFeatured === "boolean"
                    ? formData.isFeatured
                    : formData.isFeatured === "1" || formData.isFeatured === 1
                }
                onChange={(e) =>
                  setFormData({ ...formData, isFeatured: e.target.checked })
                }
                className="w-4 h-4 accent-[#A63D00] cursor-pointer"
              />
              <label
                htmlFor="isFeatured"
                className="font-medium cursor-pointer select-none"
              >
                इस योजना को मुख्य पृष्ठ पर हाइलाइट करें (Mark as Featured)
              </label>
            </div>
          </div>
        </form>

        {/* ३. बटन समूह (Actions) */}
        <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            रद्द करें
          </button>
          <button
            type="submit"
            form="sankalpa-master-form"
            className="flex items-center gap-2 bg-[#2C1810] text-[#F4D28C] hover:bg-[#A63D00] hover:text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-md cursor-pointer"
          >
            <Save size={14} />
            योजना सुरक्षित करें
          </button>
        </div>
      </div>
    </div>
  );
}
