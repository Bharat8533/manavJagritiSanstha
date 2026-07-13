"use client";

import React, { useState } from "react";
import { Search, Layers, CheckCircle, Clock } from "lucide-react";

interface KathaTypeMaster {
  key: string;
  label: string;
  amount: string;
  inclusion: string;
  duration: string;
}

interface KathaTypeTableProps {
  kathaTypes?: KathaTypeMaster[];
}

export default function KathaTypeTable({
  kathaTypes,
}: KathaTypeTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  
  console.log("kathaTypes", kathaTypes);

  const filteredTypes = Array.isArray(kathaTypes)
    ? kathaTypes.filter((type) => {
        const labelMatch = (type?.label || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const keyMatch = (type?.key || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const durationMatch = (type?.duration || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return labelMatch || keyMatch || durationMatch;
      })
    : [];

  return (
    <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.01)] space-y-6">
      {/* ऊपरी भाग: टाइटल और सर्च बार */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#A63D00]/5 rounded-xl text-[#A63D00]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-[#1E0F0A]">
              सक्रिय कथा एवं अनुष्ठान श्रेणियां
            </h3>
            <p className="text-[11px] text-gray-400">
              यह श्रेणियां लाइव वेबसाइट के बुकिंग फॉर्म ड्रॉपडाउन में सिंक हैं।
            </p>
          </div>
        </div>

        {/* सर्च बार */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="कथा, अवधि या प्रसंग खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2 pl-10 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] transition-colors"
          />
        </div>
      </div>

      {/* टेबल कंटेंट */}
      {filteredTypes.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center bg-[#FAF8F5]/50 rounded-2xl border border-dashed border-gray-100">
          <p className="text-xs text-gray-400 font-light">
            कोई कथा श्रेणी नहीं मिली।
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold text-[#5C3A1E]/50 uppercase tracking-wider bg-[#FAF8F5]">
                <th className="py-3 px-4 w-[25%]">
                  कथा प्रसंग / सिस्टम की (Key)
                </th>
                <th className="py-3 px-4 w-[20%]">कथा समयावधि</th>
                <th className="py-3 px-4 w-[18%]">न्यूनतम संकल्प राशि</th>
                <th className="py-3 px-4 w-[27%]">
                  समाविष्ट व्यवस्थाएं (Inclusions)
                </th>
                <th className="py-3 px-4 w-[10%] text-center">स्थिति</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5 text-xs">
              {filteredTypes.map((type, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#FAF8F5]/40 transition-colors"
                >
                  {/* 1. नाम और तकनीकी स्लग */}
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-base mt-0.5">📖</span>
                      <div>
                        <p className="font-bold text-[#2C1810] text-sm">
                          {type.label}
                        </p>
                        <p className="text-[10px] font-mono text-gray-400 mt-1 bg-gray-100 px-1.5 py-0.5 rounded inline-block">
                          {type.key}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* 2. नया कॉलम: कथा समयावधि (Duration) */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#A63D00]/70 shrink-0" />
                      <span className="bg-gray-50 border border-gray-200/60 px-2 py-1 rounded-lg text-[11px]">
                        {type.duration || "निर्धारित नहीं"}
                      </span>
                    </div>
                  </td>

                  {/* 3. बेस दक्षिणा राशि (Base Amount) */}
                  <td className="py-4 px-4">
                    <span className="font-black text-[#A63D00] text-xs bg-[#FFF9EE] px-2.5 py-1 rounded-lg border border-[#A63D00]/10 inline-block whitespace-nowrap">
                      {type.amount}
                    </span>
                  </td>

                  {/* 4. इन्क्लूजन (विवरण) */}
                  <td className="py-4 px-4 text-gray-600 font-light leading-relaxed max-w-xs truncate hover:whitespace-normal">
                    {type.inclusion || "—"}
                  </td>

                  {/* 5. लाइव स्टेटस */}
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200/50 px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap">
                      <CheckCircle className="w-3 h-3" /> लाइव
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
