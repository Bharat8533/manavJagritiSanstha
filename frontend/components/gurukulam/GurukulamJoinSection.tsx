import React, { useState } from "react";
import {GurukulamJoinSectionProps} from "../../components/UI/Types.types";

export default function GurukulamJoinSection({
  formData,
  setFormData,
  handleSubmit,
  isSubmitting,
}: GurukulamJoinSectionProps) {
  return (
    <section className="max-w-7xl mx-auto rounded-4xl w-full bg-[#FAF6EE] py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-[#B8860B]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-sans font-black text-[#B8860B] uppercase tracking-[0.3em] block mb-3 animate-pulse">
            Gurukulam Invitation Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D2511] tracking-wide mb-4">
            जुड़ें हमारे वैदिक अभियान से
          </h2>
          <p className="max-w-xl mx-auto font-sans text-sm text-[#7A5833] leading-relaxed">
            Become a part of our premium learning ecosystem. Fill out the
            details below, or reach out to our central station directly.
          </p>
          <div className="w-32 h-[1.5px] bg-linear-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-6" />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Information (The Secretariat) */}
          <div className="lg:col-span-5 bg-linear-to-b from-[#FDFBF7] to-[#F5F0E5] border border-[#D4A017]/30 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#3D2511] mb-2">
                सम्पर्क केंद्र
              </h3>
              <p className="text-xs text-[#7A5833] uppercase tracking-wider font-semibold mb-8">
                The Central Secretariat
              </p>

              {/* Info Cards Stack */}
              <div className="space-y-6">
                {/* Communication */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    ✉
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-1">
                      Email Interface
                    </h5>
                    <p className="text-sm font-medium text-[#3D2511]">
                      secretariat@gurukulam.org
                    </p>
                    <p className="text-xs text-[#7A5833]">
                      Response within 24 standard hours
                    </p>
                  </div>
                </div>

                {/* Secure Line */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    📞
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-1">
                      Direct Helpline
                    </h5>
                    <p className="text-sm font-medium text-[#3D2511]">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-[#7A5833]">
                      Mon - Sat | 09:00 AM - 06:00 PM
                    </p>
                  </div>
                </div>

                {/* Physical Base */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    📍
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-1">
                      Gurukulam Campus
                    </h5>
                    <p className="text-sm font-medium text-[#3D2511] leading-relaxed">
                      Raman Reti, Vrindavan, <br />
                      Mathura, Uttar Pradesh — 281121
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Brand Seal */}
            <div className="pt-8 border-t border-[#4A321A]/10 mt-8 flex items-center space-x-3">
              <div className="text-xl text-[#B8860B]">🔱</div>
              <p className="text-[11px] font-sans font-medium text-[#7A5833] tracking-wide">
                Authorized Media & Relations Station.
              </p>
            </div>
          </div>

          {/* Right Column: Data Gathering Desk */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-linear-to-b from-[#FDFBF7] to-[#F5F0E5] border border-[#D4A017]/30 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(43,30,22,0.05)] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#3D2511] mb-6 border-b border-[#4A321A]/10 pb-4">
                पंजीकरण प्रभाग{" "}
                <span className="font-sans text-xs font-normal text-[#7A5833] ml-2">
                  (Digital Intake Form)
                </span>
              </h3>

              {/* Input Group: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#7A5833] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full bg-[#FAF6EE] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-sm text-[#3D2511] placeholder-[#4A321A]/40 focus:outline-none focus:border-[#D4A017] transition-all duration-300 shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#7A5833] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@domain.com"
                    className="w-full bg-[#FAF6EE] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-sm text-[#3D2511] placeholder-[#4A321A]/40 focus:outline-none focus:border-[#D4A017] transition-all duration-300 shadow-inner"
                  />
                </div>
              </div>

              {/* Input Group: Phone & Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#7A5833] uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#FAF6EE] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-sm text-[#3D2511] placeholder-[#4A321A]/40 focus:outline-none focus:border-[#D4A017] transition-all duration-300 shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-[#7A5833] uppercase">
                    Purpose of Joining
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value })
                    }
                    className="w-full bg-[#FAF6EE] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-sm text-[#3D2511] focus:outline-none focus:border-[#D4A017] transition-all duration-300 shadow-inner appearance-none cursor-pointer"
                  >
                    <option value="learn">वैदिक अध्ययन (Seek Knowledge)</option>
                    <option value="collaborate">
                      सहयोग (Collaborate / Expert)
                    </option>
                    <option value="support">
                      सेवा एवं समर्थन (Support System)
                    </option>
                  </select>
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-[#7A5833] uppercase">
                  Your Intent / Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us briefly about your spiritual or technical intent..."
                  className="w-full bg-[#FAF6EE] border border-[#D4A017]/20 rounded-xl px-4 py-3 text-sm text-[#3D2511] placeholder-[#4A321A]/40 focus:outline-none focus:border-[#D4A017] transition-all duration-300 shadow-inner resize-none"
                />
              </div>
            </div>

            {/* Premium Interactive Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-linear-to-r from-[#3D2511] to-[#2B1E16] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-black py-4 rounded-xl border border-[#D4A017]/30 hover:from-[#D4A017] hover:to-[#B8860B] hover:text-[#3D2511] transition-all duration-500 shadow-md hover:shadow-xl disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Processing Stream...</span>
              ) : (
                <>
                  <span>Submit Manifestation</span>
                  <span className="text-sm">✦</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
