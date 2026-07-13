"use client";

import React, { useState } from "react";
import { Search, BookOpen, Eye, Phone } from "lucide-react";

interface UserBooking {
  id: string;
  hostName: string;
  location: string;
  kathaType: string;
  vyaasName: string;
  startDate: string;
  endDate: string;
  dakshina: number;
  status: "Confirmed" | "In-Progress" | "Pending";
  phone: string; // यजमान का मोबाइल नंबर
  notes: string;
}

interface KathaBookingsTableProps {
  bookings?: UserBooking[];
  onViewDetails: (booking: UserBooking) => void;
}

export default function KathaBookingsTable({
  bookings = [],
  onViewDetails,
}: KathaBookingsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // यजमान के नाम, कथा के प्रकार या मोबाइल नंबर से डेटा फ़िल्टर करना
  const filteredBookings = Array.isArray(bookings)
    ? bookings.filter((booking) => {
        const nameMatch = (booking?.hostName || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const typeMatch = (booking?.kathaType || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const phoneMatch = (booking?.phone || "").includes(searchTerm);
        return nameMatch || typeMatch || phoneMatch;
      })
    : [];

  // स्टेटस के अनुसार प्रीमियम कलर्स
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-50 text-green-700 border-green-200";
      case "In-Progress":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.01)] space-y-6">
      {/* टेबल हेडर और यजमान सर्च बार */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#A63D00]/5 rounded-xl text-[#A63D00]">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-[#1E0F0A]">
              यजमान बुकिंग अनुरोध सूची
            </h3>
            <p className="text-[11px] text-gray-400">
              वेबसाइट से प्राप्त सभी लाइव अनुष्ठान एवं कथा श्रवण आमंत्रण।
            </p>
          </div>
        </div>

        {/* सर्च बार */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="यजमान, मोबाइल या कथा खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2 pl-10 pr-4 text-xs font-medium text-[#1E0F0A] placeholder-[#5C3A1E]/40 focus:outline-none focus:border-[#A63D00] transition-colors"
          />
        </div>
      </div>

      {/* टेबल डेटा ज़ोन */}
      {filteredBookings.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center bg-[#FAF8F5]/50 rounded-2xl border border-dashed border-gray-100">
          <p className="text-xs text-gray-400 font-light">
            कोई बुकिंग अनुरोध नहीं मिला।
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold text-[#5C3A1E]/50 uppercase tracking-wider bg-[#FAF8F5]">
                <th className="py-3 px-4 w-[28%]">बुकिंग ID / यजमान</th>
                <th className="py-3 px-4 w-[22%]">कथा प्रसंग</th>
                <th className="py-3 px-4 w-[22%]">आयोजन तिथि</th>
                <th className="py-3 px-4 w-[18%]">संकल्प दक्षिणा</th>
                <th className="py-3 px-4 w-[10%] text-center">स्थिति</th>
                <th className="py-3 px-4 w-[10%] text-center">एक्शन</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E0F0A]/5 text-xs">
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-[#FAF8F5]/40 transition-colors"
                >
                  {/* यजमान का विवरण + मोबाइल नंबर (Phone) */}
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <p className="font-bold text-[#2C1810] text-sm leading-none">
                        {booking.hostName}
                      </p>

                      {/* 📞 यजमान मोबाइल नंबर टैग */}
                      <div className="flex items-center gap-1 text-[11px] text-[#5C3A1E]/80 font-medium">
                        <Phone className="w-3 h-3 text-[#A63D00]/70 shrink-0" />
                        <span>{booking.phone || "नंबर उपलब्ध नहीं"}</span>
                      </div>
                    </div>
                  </td>

                  {/* कथा का प्रकार */}
                  <td className="py-4 px-4 font-medium text-gray-700">
                    {booking.kathaType}
                  </td>

                  {/* तिथि और स्थान */}
                  <td className="py-4 px-4 text-gray-600">
                    <p className="font-medium">{booking.startDate}</p>
                    <p className="text-[10px] text-gray-400 max-w-[180px] truncate">
                      {booking.location}
                    </p>
                  </td>

                  {/* दक्षिणा */}
                  <td className="py-4 px-4">
                    <span className="font-bold text-[#A63D00]">
                      {booking.dakshina > 0
                        ? `₹${booking.dakshina.toLocaleString("hi-IN")}`
                        : "विचाराधीन"}
                    </span>
                  </td>

                  {/* लाइव स्टेटस टैग */}
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block border px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${getStatusBadge(booking.status)}`}
                    >
                      {booking.status === "Confirmed" && "स्वीकृत"}
                      {booking.status === "In-Progress" && "प्रगति पर"}
                      {booking.status === "Pending" && "लंबित"}
                    </span>
                  </td>

                  {/* विवरण बटन */}
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => onViewDetails(booking)}
                      className="p-1.5 hover:bg-[#A63D00]/5 text-[#A63D00] rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer"
                      title="विवरण देखें"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
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
