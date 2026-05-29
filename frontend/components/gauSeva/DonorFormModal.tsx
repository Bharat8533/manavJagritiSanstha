"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { DonorFormModalProps } from "../UI/Types.types";


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

  const displayAmount =
    selectedPlan?.id === "custom" ? customAmount : selectedPlan?.amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative bg-[#FCFAF5] w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl border border-[#D4A017]/30 z-10 max-h-[90vh] overflow-y-auto text-left">
        <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-5">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#2C1810]">
              दाता विवरण (Donor Info)
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              संकल्प राशि:{" "}
              <span className="font-bold text-[#A63D00]">₹{displayAmount}</span>{" "}
              ({selectedPlan?.title})
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-lg p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#2C1810] uppercase tracking-wider mb-1.5">
              पूरा नाम (Full Name) *
            </label>
            <input
              required
              type="text"
              name="fullName"
              value={donorInfo.fullName}
              onChange={onChange}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-sm text-[#2C1810] focus:outline-hidden focus:border-[#A63D00]"
              placeholder="Enter full name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#2C1810] uppercase tracking-wider mb-1.5">
                मोबाइल नंबर (WhatsApp No) *
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={donorInfo.phone}
                onChange={onChange}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-sm text-[#2C1810] focus:outline-hidden focus:border-[#A63D00]"
                placeholder="10 digit number"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2C1810] uppercase tracking-wider mb-1.5">
                ईमेल (Email ID)
              </label>
              <input
                type="email"
                name="email"
                value={donorInfo.email}
                onChange={onChange}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-sm text-[#2C1810] focus:outline-hidden focus:border-[#A63D00]"
                placeholder="name@domain.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C1810] uppercase tracking-wider mb-1.5">
              गोत्र अथवा संकल्प नाम (Sankalpa / Gotra)
            </label>
            <input
              type="text"
              name="sankalpaGotra"
              value={donorInfo.sankalpaGotra}
              onChange={onChange}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-sm text-[#2C1810] focus:outline-hidden focus:border-[#A63D00]"
              placeholder="e.g. भारद्वाज गोत्र / सपरिवार संकल्प"
            />
          </div>

          <div className="bg-[#A63D00]/5 p-4 rounded-2xl border border-[#A63D00]/10 text-center">
            <p className="text-[11px] text-[#5C3A1E]/80 leading-relaxed font-light">
              🌿 आपके द्वारा दान की गई राशि सीधे **श्री जाग्रती गौशाला सेवा
              ट्रस्ट** के बैंक खाते में जाएगी, जो आयकर की धारा 80G के तहत टैक्स
              छूट के दायरे में आती है।
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2C1810] hover:bg-[#A63D00] text-[#F4D28C] hover:text-white transition-all duration-300 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-md mt-2 cursor-pointer"
          >
            Proceed to Secure Payment
          </button>
        </form>
      </div>
    </div>
  );
}
