"use client";
import React from "react";
import { MapPin, Users, Building2, ExternalLink } from "lucide-react";

interface MathProps {
  maths: { name: string; location: string; head: string; members: number; status: string }[];
}

export default function MathsTab({ maths }: MathProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-[#1E0F0A]/5 pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#2C1810]">
            मठ एवं शाखाएं
          </h2>
          <p className="text-xs text-[#2C1810]/60 mt-1">
            संस्था की सभी शाखाओं का विवरण और सक्रियता।
          </p>
        </div>
        <button className="bg-[#A63D00] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-[#853200] transition-all">
          नई शाखा जोड़ें
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "कुल शाखाएं", value: "03", icon: Building2 },
          { label: "सक्रिय सदस्य", value: "195", icon: Users },
          { label: "क्षेत्र", value: "ब्रज मंडल", icon: MapPin },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-[#1E0F0A]/5 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-[#2C1810]/50 uppercase">
                {stat.label}
              </span>
              <stat.icon className="w-4 h-4 text-[#A63D00]" />
            </div>
            <div className="text-2xl font-bold text-[#1E0F0A] mt-2">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Maths Table */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase text-[#2C1810]/50 font-bold border-b border-[#1E0F0A]/5">
              <th className="pb-3">शाखा का नाम</th>
              <th className="pb-3">स्थान</th>
              <th className="pb-3">प्रमुख (Head)</th>
              <th className="pb-3">सदस्य</th>
              <th className="pb-3">स्थिति</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E0F0A]/5">
            {maths.map((math, i) => (
              <tr key={i} className="hover:bg-[#FAF8F5]/60 transition-colors">
                <td className="py-4 text-sm font-bold text-[#1E0F0A]">
                  {math.name}
                </td>
                <td className="py-4 text-xs text-[#2C1810]/70 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A63D00]" /> {math.location}
                </td>
                <td className="py-4 text-xs text-[#2C1810]/70">{math.head}</td>
                <td className="py-4 text-xs text-[#2C1810]/70">
                  {math.members}
                </td>
                <td className="py-4">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      math.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {math.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
