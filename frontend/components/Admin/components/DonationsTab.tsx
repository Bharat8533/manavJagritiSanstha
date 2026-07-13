"use client";
import React from "react";
import { Download, UserCircle, FileText } from "lucide-react";

// बेहतर तरीका: एक interface डिफाइन करें
interface Donation {
  id: string;
  name: string;
  email: string;
  amount: string;
  status: string;
  purpose: string;
}

export default function DonationsTab({ donations }: { donations: Donation[] }) {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E0F0A]/5 pb-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-green-700 uppercase bg-green-50 px-2.5 py-1 rounded-md inline-block">
            भक्त एवं दान विवरण
          </span>
          <h2 className="font-serif text-2xl font-bold mt-2 text-[#2C1810]">
            दान राशि एवं रसीदें
          </h2>
        </div>
        <button className="flex items-center gap-2 bg-white border border-[#1E0F0A]/10 hover:bg-[#FAF8F5] text-[#2C1810] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold tracking-wider text-[#2C1810]/50 uppercase bg-[#FAF8F5]">
                <th className="py-3 px-4">भक्त का विवरण</th>
                <th className="py-3 px-4">दान का उद्देश्य</th>
                <th className="py-3 px-4">राशि</th>
                <th className="py-3 px-4">स्थिति</th>
                <th className="py-3 px-4 text-center">रसीद</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5 text-xs text-[#2C1810]/90">
              {donations.map((donation) => (
                <tr
                  key={donation.id}
                  className="hover:bg-[#FAF8F5]/60 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#A63D00]/10 flex items-center justify-center text-[#A63D00]">
                        <UserCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1E0F0A]">
                          {donation.name}
                        </div>
                        <div className="text-[10px] text-[#2C1810]/50">
                          {donation.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-medium text-[#2C1810]/80">
                    {donation.purpose}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#1E0F0A]">
                    {donation.amount}
                  </td>
                  <td className="py-4 px-4">
                    {donation.status === "Success" ? (
                      <span className="bg-green-50 text-green-700 border border-green-200/50 px-2.5 py-1 rounded-full text-[10px] font-bold">
                        सफल (Success)
                      </span>
                    ) : (
                      <span className="bg-amber-50 text-amber-700 border border-amber-200/50 px-2.5 py-1 rounded-full text-[10px] font-bold">
                        लंबित (Pending)
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="text-[#A63D00] hover:bg-[#A63D00]/10 p-2 rounded-lg transition-colors"
                      title="रसीद देखें"
                    >
                      <FileText className="w-4 h-4 mx-auto" />
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
