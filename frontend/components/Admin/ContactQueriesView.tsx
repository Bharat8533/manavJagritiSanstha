"use client";

import React, { useState } from "react";
import { Search, Trash2, CheckCircle, Clock, ExternalLink } from "lucide-react";
import { ContactQuery } from "@/components/UI/Types.types";

interface ContactQueriesViewProps {
  queries: ContactQuery[];
  onUpdateStatus: (
    id: string | number,
    newStatus: "Pending" | "Resolved",
  ) => void;
  onDeleteQuery: (id: string | number) => void;
}

export default function ContactQueriesView({
  queries,
  onUpdateStatus,
  onDeleteQuery,
}: ContactQueriesViewProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQueries = (queries || []).filter(
    (q) =>
      q.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
          संपर्क संदेश
        </h1>
        <p className="text-xs text-[#5C3A1E]/70 mt-1">
          भक्तों के संदेशों की सूची तालिका में।
        </p>
      </div>

      <div className="relative w-full max-w-sm">
        <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="खोजें (नाम या ईमेल)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-[#1E0F0A]/10 rounded-lg py-2 pl-10 pr-4 text-xs focus:outline-none"
        />
      </div>

      {/* तालिका */}
      <div className="bg-white border border-[#1E0F0A]/10 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] border-b border-[#1E0F0A]/10">
              <tr>
                <th className="p-4 font-bold text-[#1E0F0A]">भक्त का विवरण</th>
                <th className="p-4 font-bold text-[#1E0F0A]">सेवा रुचि</th>
                <th className="p-4 font-bold text-[#1E0F0A]">संदेश</th>
                <th className="p-4 font-bold text-[#1E0F0A]">स्थिति</th>
                <th className="p-4 font-bold text-[#1E0F0A]">कार्रवाई</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5">
              {filteredQueries.map((query) => (
                <tr
                  key={query.id}
                  className="hover:bg-[#FAF8F5]/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-[#1E0F0A]">{query.name}</div>
                    <div className="text-[10px] text-[#5C3A1E]/60">
                      {query.email}
                    </div>
                    <div className="text-[10px] text-[#5C3A1E]/60">
                      {query.phone}
                    </div>
                  </td>
                  <td className="p-4 text-[#5C3A1E] font-medium">
                    {query.seva_interest}
                  </td>
                  <td className="p-4 max-w-[200px] truncate text-[#1E0F0A]/80">
                    {query.message}
                  </td>
                  <button
                    onClick={() =>
                      onUpdateStatus(
                        query.id,
                        query.status === "Resolved" ? "Pending" : "Resolved",
                      )
                    }
                    className={`px-2 py-1 rounded flex justify-center mt-4 items-center gap-1 font-bold ${
                      query.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {query.status === "Resolved" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {query.status === "Resolved" ? "Resolved" : "Pending"}
                  </button>
                  <td className="p-4">
                    <button
                      onClick={() => onDeleteQuery(query.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
