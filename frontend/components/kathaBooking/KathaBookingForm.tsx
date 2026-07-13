"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { KathaBookingFormProps } from "../UI/Types.types";

export default function KathaBookingForm({
  formState,
  onChange,
  onSubmit,
  submitted,
}: 
KathaBookingFormProps) {
  const t = useTranslations("KathaBookingForm");

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D4A017]/15 shadow-sm relative overflow-hidden lg:col-span-7 space-y-6 text-left">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#A63D00] to-[#2C1810]" />

      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-[#2C1810]">
          {t("heading")}
        </h3>
        <p className="text-sm text-[#5C3A1E]/60 font-light mt-1.5 leading-relaxed">
          {t("description")}
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-2">
          <span>✨</span> {t("success_msg")}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              {t("fields.name")}
            </label>
            <input
              type="text"
              required
              value={formState.yajmanName}
              onChange={(e) => onChange({ yajmanName: e.target.value })}
              placeholder={t("fields.name_placeholder")}
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              {t("fields.phone")}
            </label>
            <input
              type="tel"
              required
              value={formState.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder={t("fields.phone_placeholder")}
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              {t("fields.date")}
            </label>
            <input
              type="date"
              required
              value={formState.preferredDate}
              onChange={(e) => onChange({ preferredDate: e.target.value })}
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
              {t("fields.venue")}
            </label>
            <select
              value={formState.venueType}
              onChange={(e) => onChange({ venueType: e.target.value })}
              className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none appearance-none cursor-pointer"
            >
              <option value="vrindavan-ashram">
                {t("fields.options.vrindavan")}
              </option>
              <option value="nij-niwas">{t("fields.options.home")}</option>
              <option value="public-hall">{t("fields.options.public")}</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
            {t("fields.address")}
          </label>
          <input
            type="text"
            required
            value={formState.fullAddress}
            onChange={(e) => onChange({ fullAddress: e.target.value })}
            placeholder={t("fields.address_placeholder")}
            className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold uppercase tracking-widest text-[#5C3A1E]/80 block">
            {t("fields.notes")}
          </label>
          <textarea
            rows={3}
            value={formState.additionalNotes}
            onChange={(e) => onChange({ additionalNotes: e.target.value })}
            placeholder={t("fields.notes_placeholder")}
            className="w-full bg-[#FCFAF5]/50 border-b-2 border-[#D4A017]/20 px-4 py-3 text-sm focus:outline-none resize-none"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-gradient-to-r from-[#2C1810] to-[#1A0B05] text-[#F4D28C] text-sm font-bold uppercase tracking-widest cursor-pointer flex items-center gap-2"
          >
            <span>{t("fields.submit")}</span> 🔱
          </button>
        </div>
      </form>
    </div>
  );
}
