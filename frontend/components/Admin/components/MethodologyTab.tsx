"use client";
import React from "react";
import { BookOpen, CheckCircle, Clock, ChevronRight } from "lucide-react";

export default function MethodologyTab({ data }: { data: any[] }) {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#1E0F0A]/5 pb-4">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810]">
          कार्यप्रणाली (Methodology)
        </h2>
        <p className="text-xs text-[#2C1810]/60 mt-1">
          आश्रम के दैनिक एवं विशेष कार्यक्रमों को संचालित करने की मानक
          प्रक्रिया।
        </p>
      </div>

      {/* Methodology Cards / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((step) => (
          <div
            key={step.id}
            className="bg-white p-5 rounded-2xl border border-[#1E0F0A]/5 shadow-sm hover:border-[#A63D00]/30 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#A63D00]/5 flex items-center justify-center text-[#A63D00] flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-sm text-[#1E0F0A] flex items-center justify-between">
                {step.title}
                <span
                  className={`text-[9px] px-2 py-0.5 rounded ${
                    step.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : step.status === "Active"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100"
                  }`}
                >
                  {step.status}
                </span>
              </h3>
              <p className="text-[11px] text-[#2C1810]/60 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation Table Section */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-sm mt-6">
        <h3 className="font-bold text-sm mb-4 text-[#1E0F0A]">
          मानक संचालन प्रक्रिया (SOP) दस्तावेज
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase text-[#2C1810]/50 font-bold border-b border-[#1E0F0A]/5">
              <th className="pb-3">दस्तावेज का नाम</th>
              <th className="pb-3">अंतिम अपडेट</th>
              <th className="pb-3 text-right">डाउनलोड</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E0F0A]/5">
            <tr>
              <td className="py-3 text-xs font-medium">
                आश्रम संचालन नियमावली.pdf
              </td>
              <td className="py-3 text-xs text-[#2C1810]/60">12 जून 2026</td>
              <td className="py-3 text-xs text-right text-[#A63D00] font-bold cursor-pointer hover:underline">
                डाउनलोड
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
