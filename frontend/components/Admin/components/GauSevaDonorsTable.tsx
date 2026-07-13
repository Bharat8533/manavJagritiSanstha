"use client";

import React from "react";
import { Heart, Calendar, IndianRupee, Hash } from "lucide-react";

export interface DonorType {
  id: string;
  fullname: string; // Corrected from full_name
  phone: string;
  email: string;
  sankalpa_gotra: string;
  amount: string;
  shankal_plan_id: string; // Corrected from plan_id
  transection_id: string | null;
  payment_status: string;
  created_at: string;
  updated_at: string;
}

interface GauSevaDonorsTableProps {
  donors: DonorType[];
  isLoading: boolean;
}

export default function GauSevaDonorsTable({
  donors,
  isLoading,
}: GauSevaDonorsTableProps) {
  return (
    <div className="bg-white rounded-[2rem] border border-[#1E0F0A]/5 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FAF8F5]/50">
        <div>
          <h2 className="font-serif text-lg font-bold text-[#2C1810] flex gap-2">
            गौ सेवा दानदाता सूची
          </h2>
          <p className="text-xs text-gray-400 font-light">
            Recent Sankalpa and Donation Records
          </p>
        </div>
        <div className="text-xs font-bold bg-[#A63D00]/5 text-[#A63D00] px-3 py-1.5 rounded-lg border border-[#A63D00]/10">
          कुल दानदाता: {donors.length}
        </div>
      </div>

      {/* Table Content & Loading Handlers */}
      {isLoading ? (
        <div className="py-16 flex flex-col items-center justify-center gap-3 text-sm text-gray-400">
          <div className="w-5 h-5 border-2 border-[#A63D00]/20 border-t-[#A63D00] rounded-full animate-spin" />
          Loading donor records...
        </div>
      ) : donors.length > 0 ? (
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="border-b border-gray-100 text-[11px] font-bold text-[#2C1810]/70 uppercase tracking-wider bg-[#FAF8F5]">
              <tr>
                <th className="py-4 px-4 rounded-l-xl">Index</th>
                <th className="py-4 px-4">Donor Details</th>
                <th className="py-4 px-4">Contact</th>
                <th className="py-4 px-4">Sankalpa / Gotra</th>
                <th className="py-4 px-4">Plan ID</th>
                <th className="py-4 px-4">Transaction ID</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 rounded-r-xl">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5">
              {donors.map((donor, index) => (
                <tr
                  key={donor.id}
                  className="hover:bg-[#A63D00]/[0.02] transition-colors duration-200"
                >
                  <td className="py-4 px-4">
                    {/* Index */}
                    <div className="text-gray-700 text-xs capitalize">
                      #{index + 1}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {/* Fixed Key: donor.fullname */}
                    <div className="font-bold text-[#2C1810] text-sm capitalize">
                      {donor.fullname}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-xs text-[#2C1810] font-medium">
                      {donor.phone}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {donor.email}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div
                      className="text-xs text-[#2C1810] font-medium max-w-[150px] truncate"
                      title={donor.sankalpa_gotra}
                    >
                      {donor.sankalpa_gotra || "-"}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-mono">
                      {/* Fixed Key: donor.shankal_plan_id */}
                      {donor.shankal_plan_id}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {donor.transection_id ? (
                      <div className="flex items-center text-xs text-gray-600 font-mono">
                        <Hash size={12} className="mr-1 text-gray-400" />
                        {donor.transection_id}
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No TXN ID
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-[#A63D00] font-bold text-sm">
                      <IndianRupee
                        size={12}
                        strokeWidth={3}
                        className="mr-0.5"
                      />
                      {Number(donor.amount).toLocaleString("en-IN")}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        donor.payment_status?.toLowerCase() === "success"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : donor.payment_status?.toLowerCase() === "failed"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-amber-100 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {donor.payment_status || "Pending"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1.5" />
                      {new Date(donor.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-16 flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
          <Heart className="text-gray-300 mb-3" size={32} />
          <p className="text-sm font-medium text-gray-500">
            अभी तक कोई दानदाता रिकॉर्ड नहीं मिला।
          </p>
        </div>
      )}
    </div>
  );
}
