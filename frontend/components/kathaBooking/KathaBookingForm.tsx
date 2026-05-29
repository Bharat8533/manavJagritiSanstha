import React from "react";
import { KathaBookingFormProps } from "../UI/Types.types";

export default function KathaBookingForm({
  formState,
  onChange,
  onSubmit,
  submitted,
} : KathaBookingFormProps) {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D4A017]/15 shadow-[0_20px_50px_rgba(44,24,16,0.03)] relative overflow-hidden lg:col-span-7 space-y-6 text-left">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#A63D00] to-[#2C1810]" />

      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-[#2C1810]">
          यजमान संकल्प विवरण
        </h3>
        <p className="text-sm text-[#5C3A1E]/60 font-light mt-1.5 leading-relaxed">
          कृपया मुख्य यजमान की जानकारी और संभावित कथा स्थल का विवरण सही रूप से
          प्रेषित करें।
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-emerald-50/60 backdrop-blur-sm border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium animate-fadeIn flex items-center gap-2">
          <span>✨</span>
          <span>
            आपका संकल्प प्रेषित कर दिया गया है। संस्था के सेवा प्रबंधक शीघ्र ही
            आपसे संपर्क करेंगे। राम राम!
          </span>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Yajman Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              मुख्य यजमान का नाम *
            </label>
            <input
              type="text"
              required
              value={formState.yajmanName}
              onChange={(e) => onChange({ yajmanName: e.target.value })}
              placeholder="उदा. श्री राजेश xxxx"
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C3A1E]/70 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Contact Phone */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              सम्पर्क नंबर *
            </label>
            <input
              type="tel"
              required
              value={formState.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="उदा. +91 99999 xxxxx"
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C3A1E]/70 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Tentative Date */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              संभावित प्रारंभ तिथि *
            </label>
            <input
              type="date"
              required
              value={formState.preferredDate}
              onChange={(e) => onChange({ preferredDate: e.target.value })}
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Venue Location Type */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              कथा स्थल विकल्प *
            </label>
            <div className="relative">
              <select
                value={formState.venueType}
                onChange={(e) => onChange({ venueType: e.target.value })}
                className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] focus:outline-none transition-all duration-300 appearance-none cursor-pointer pr-10"
              >
                <option value="vrindavan-ashram">
                  संस्थान आश्रम (वृंदावन धाम)
                </option>
                <option value="nij-niwas">
                  निज निवास (यजमान का गृह क्षेत्र)
                </option>
                <option value="public-hall">सार्वजनिक पंडाल / मैरिज हॉल</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5C3A1E]/60 text-sm">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Address Location */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
            कथा आयोजन का पूर्ण पता *
          </label>
          <input
            type="text"
            required
            value={formState.fullAddress}
            onChange={(e) => onChange({ fullAddress: e.target.value })}
            placeholder="शहर, राज्य और पिनकोड सहित पूर्ण स्थान का नाम लिखें"
            className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C3A1E]/70 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Custom Notes */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
            विशेष संकल्प या अतिरिक्त टिप्पणी
          </label>
          <textarea
            rows={3}
            value={formState.additionalNotes}
            onChange={(e) => onChange({ additionalNotes: e.target.value })}
            placeholder="कोई विशेष अनुष्ठान, संत सेवा या ब्राह्मण भोजन सम्बन्धी इच्छा यहाँ लिखें..."
            className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 focus:border-[#A63D00] rounded-t-xl px-4 py-3 text-sm text-[#2C1810] placeholder-[#5C3A1E]/70 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit Action */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-linear-to-r from-[#2C1810] to-[#1A0B05] text-[#F4D28C] hover:from-[#A63D00] hover:to-[#7A1F0E] hover:text-white text-sm font-bold uppercase tracking-widest shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>कथा तिथि आरक्षित करें</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              🔱
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
