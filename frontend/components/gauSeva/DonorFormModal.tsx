"use client";

import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  Heart,
  User,
  Phone,
  Mail,
  Award,
  IndianRupee,
} from "lucide-react";
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
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const isCustomPlan =
    selectedPlan?.id === "custom" ||
    selectedPlan?.isCustomAmount === 1 ||
    selectedPlan?.isCustomAmount === "1";

  const displayAmount = isCustomPlan ? customAmount : selectedPlan?.amount;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await onSubmit(e);
      onClose();
    } catch (error) {
      console.error("Payment initialization failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative bg-[#FCFAF5] w-full max-w-lg rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-[#D4A017]/20 z-10 max-h-[92vh] overflow-y-auto text-left flex flex-col justify-between custom-scrollbar">
        <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-5">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#2C1810] flex items-center gap-2">
              <Heart className="text-[#A63D00] fill-[#A63D00]/10" size={20} />
              दाता विवरण (Donor Info)
            </h3>
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 mt-0.5">
              <span>संकल्प योजना:</span>
              <span className="font-bold text-[#A63D00] bg-[#A63D00]/5 px-2 py-0.5 rounded-md">
                ₹{Number(displayAmount).toLocaleString("en-IN")}
              </span>
              <span className="font-medium text-[#2C1810]">
                ({selectedPlan?.title || "स्वेच्छा सेवा"})
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#A63D00] border border-transparent hover:border-gray-100 rounded-xl p-1.5 transition-all cursor-pointer"
            aria-label="Close Modal"
          >
            <X size={16} className="stroke-[2.5]" />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
          <div className="relative">
            <label className="block text-[11px] font-bold text-[#2C1810]/70 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <User size={12} className="text-gray-400" /> पूरा नाम (Full Name)
              *
            </label>
            <input
              required
              type="text"
              name="fullName"
              value={donorInfo.fullName}
              onChange={onChange}
              disabled={loading}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-xs font-semibold text-[#2C1810] focus:outline-none focus:border-[#A63D00] focus:ring-2 focus:ring-[#A63D00]/10 transition-all disabled:opacity-60"
              placeholder="अपना पूरा नाम"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-[11px] font-bold text-[#2C1810]/70 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Phone size={12} className="text-gray-400" /> मोबाइल नंबर
                (WhatsApp) *
              </label>
              <input
                required
                type="tel"
                pattern="[0-9]{10}"
                name="phone"
                value={donorInfo.phone}
                onChange={onChange}
                disabled={loading}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-xs font-semibold text-[#2C1810] focus:outline-none focus:border-[#A63D00] focus:ring-2 focus:ring-[#A63D00]/10 transition-all disabled:opacity-60"
                placeholder="10 अंकों का नंबर"
              />
            </div>

            <div className="relative">
              <label className="block text-[11px] font-bold text-[#2C1810]/70 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Mail size={12} className="text-gray-400" /> ईमेल (Email ID)
              </label>
              <input
                type="email"
                name="email"
                value={donorInfo.email}
                onChange={onChange}
                disabled={loading}
                className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-xs font-semibold text-[#2C1810] focus:outline-none focus:border-[#A63D00] focus:ring-2 focus:ring-[#A63D00]/10 transition-all disabled:opacity-60"
                placeholder="name@domain.com"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-[11px] font-bold text-[#2C1810]/70 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Award size={12} className="text-gray-400" /> गोत्र अथवा संकल्प
              उद्देश्य (Sankalpa / Gotra)
            </label>
            <input
              type="text"
              name="sankalpaGotra"
              value={donorInfo.sankalpaGotra}
              onChange={onChange}
              disabled={loading}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-4 text-xs font-semibold text-[#2C1810] focus:outline-none focus:border-[#A63D00] focus:ring-2 focus:ring-[#A63D00]/10 transition-all disabled:opacity-60"
              placeholder="उदा. भारद्वाज गोत्र / पूर्वजों की स्मृति में / सपरिवार"
            />
          </div>

          <div className="bg-[#A63D00]/5 p-4 rounded-2xl border border-[#A63D00]/10 flex gap-3 items-start mt-2">
            <ShieldCheck className="text-[#A63D00] shrink-0 mt-0.5" size={16} />
            <p className="text-[11px] text-[#5C3A1E] leading-relaxed font-normal">
              🌿 आपके द्वारा समर्पित की गई सेवा राशि सीधे{" "}
              <strong className="text-[#2C1810]">
                श्री जाग्रती गौशाला सेवा ट्रस्ट
              </strong>{" "}
              के अधिकृत बैंक खाते में सुरक्षित जमा होगी, जो आयकर की धारा{" "}
              <strong className="text-[#A63D00]">80G</strong> के अंतर्गत टैक्स
              छूट हेतु मान्य है।
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || Number(displayAmount) <= 0}
            className="w-full bg-[#2C1810] hover:bg-[#A63D00] text-[#F4D28C] hover:text-white transition-all duration-300 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-md mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                प्रक्रिया जारी है...
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                सुरक्षित भुगतान हेतु आगे बढ़ें (Pay ₹
                {Number(displayAmount).toLocaleString("en-IN")})
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

