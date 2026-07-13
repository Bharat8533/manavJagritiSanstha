"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { DonorFormModalProps } from "./Types.types"; // Types schema verified

export default function DonorFormModal({
  isOpen,
  onClose,
  donorInfo,
  selectedPlan,
  customAmount,
  onChange,
  onSubmit,
}: DonorFormModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

const displayAmount: number =
  Number(selectedPlan?.amount) || Number(customAmount) || 0;
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
      {/* Absolute Blurred Shroud Overlay */}
      <div
        className="absolute inset-0 bg-[#0D0705]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* CENTRAL SHEET FRAME */}
      <div className="relative bg-[#FCFAF5] w-full max-w-xl rounded-[2.5rem] p-8 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-[#D4A017]/30 z-10 max-h-[90vh] overflow-y-auto text-left flex flex-col justify-between">
        {/* Architectural subtle top corner mark */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#A63D00]/10 rounded-tr-[2.5rem] pointer-events-none" />

        {/* HEADER SEGMENT */}
        <div className="flex justify-between items-start border-b border-[#2C1810]/10 pb-5 mb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-bold tracking-widest text-[#A63D00] uppercase block">
              Donor Information
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E0F0A]">
              दाता विवरण एवं संकल्प संकलन
            </h3>
            <p className="text-xs text-[#5C3A1E]/70 pt-1 font-light">
              पवित्र संकल्प राशि:{" "}
              <span className="font-mono font-black text-[#A63D00] text-sm bg-[#A63D00]/5 px-2 py-0.5 rounded">
                ₹{displayAmount.toLocaleString("en-IN")}
              </span>{" "}
              —{" "}
              <span className="italic font-medium text-[#1E0F0A]">
                {selectedPlan?.title}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#5C3A1E]/40 hover:text-[#A63D00] text-sm bg-[#FAF8F5] hover:bg-[#A63D00]/5 w-8 h-8 rounded-full border border-[#2C1810]/5 flex items-center justify-center transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* INPUT COMPLEX FRAME */}
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Full Name Block */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[#2C1810] uppercase tracking-widest">
              पूरा नाम (Full Name) *
            </label>
            <input
              required
              type="text"
              name="fullName"
              value={donorInfo.fullName}
              onChange={onChange}
              className="w-full bg-white border border-[#2C1810]/10 focus:border-[#A63D00] rounded-xl py-3 px-4 text-sm text-[#2C1810] placeholder-gray-400 focus:outline-none transition-all shadow-inner"
              placeholder="Enter full name"
            />
          </div>

          {/* Combined Grid Panel row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-[#2C1810] uppercase tracking-widest">
                मोबाइल नंबर (WhatsApp No) *
              </label>
              <input
                required
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                value={donorInfo.phone}
                onChange={onChange}
                className="w-full bg-white border border-[#2C1810]/10 focus:border-[#A63D00] rounded-xl py-3 px-4 text-sm text-[#2C1810] placeholder-gray-400 focus:outline-none transition-all shadow-inner"
                placeholder="10 digit number"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-[#2C1810] uppercase tracking-widest">
                ईमेल (Email ID)
              </label>
              <input
                type="email"
                name="email"
                value={donorInfo.email}
                onChange={onChange}
                className="w-full bg-white border border-[#2C1810]/10 focus:border-[#A63D00] rounded-xl py-3 px-4 text-sm text-[#2C1810] placeholder-gray-400 focus:outline-none transition-all shadow-inner"
                placeholder="name@domain.com"
              />
            </div>
          </div>

          {/* Gotra Custom Content Box */}
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-[#2C1810] uppercase tracking-widest">
              गोत्र अथवा संकल्प नाम (Sankalpa / Gotra)
            </label>
            <input
              type="text"
              name="sankalpaGotra"
              value={donorInfo.sankalpaGotra}
              onChange={onChange}
              className="w-full bg-white border border-[#2C1810]/10 focus:border-[#A63D00] rounded-xl py-3 px-4 text-sm text-[#2C1810] placeholder-gray-400 focus:outline-none transition-all shadow-inner"
              placeholder="e.g. भारद्वाज गोत्र / सपरिवार संकल्प"
            />
          </div>

          {/* Legal Exemption Notice Ribbon */}
          <div className="bg-[#A63D00]/[0.03] p-4 rounded-2xl border border-[#A63D00]/10 text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A63D00]" />
            <p className="text-xs text-[#5C3A1E]/80 leading-relaxed font-light pl-2">
              🌿 आपके द्वारा दान की गई राशि सीधे{" "}
              <strong className="text-[#1E0F0A] font-semibold">
                श्री जाग्रती गौशाला सेवा ट्रस्ट
              </strong>{" "}
              के बैंक खाते में जमा की जाएगी, जो आयकर की धारा{" "}
              <strong className="text-[#A63D00]">80G</strong> के तहत टैक्स छूट
              के दायरे में सुरक्षित आती है।
            </p>
          </div>

          {/* Final Action Gateway Trigger */}
          <button
            type="submit"
            className="w-full bg-[#2C1810] hover:bg-[#A63D00] text-[#F4D28C] hover:text-white transition-all duration-300 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-lg mt-3 cursor-pointer"
          >
            Proceed to Secure Payment
          </button>
        </form>
      </div>
    </div>
  );
}
