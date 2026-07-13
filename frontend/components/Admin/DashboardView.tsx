"use client";

import React from "react";
import {
  Heart,
  Calendar,
  Users,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export interface GaushalaStatsType {
  totalCows: number;
  healthyCows: number;
  sickCows: number;
  charaStock: number;
  charaDaysLeft: number;
}

interface DashboardViewProps {
  stats: GaushalaStatsType | null;
  loadingStats?: boolean;
  recentQueries?: any[];
  recentDonations?: any[];
  recentKathaBookings?: any[];
}

const getVenueNameHindi = (venueType: string) => {
  switch (venueType) {
    case "nij-niwas":
      return "निज निवास अनुष्ठान";
    case "vrindavan-ashram":
      return "वृंदावन आश्रम अनुष्ठान";
    default:
      return "कथा अनुष्ठान स्थल";
  }
};

const formatKathaDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch (e) {
    return dateString;
  }
};

export default function DashboardView({
  stats,
  loadingStats = false,
  recentQueries = [],
  recentDonations = [],
  recentKathaBookings = [],
}: DashboardViewProps) {
  const totalGaushala = stats?.totalCows || 0;
  const healthyCows = stats?.healthyCows || 0;
  const sickCows = stats?.sickCows || 0;

  const totalGauSeva = recentDonations.reduce(
    (sum, d) => sum + (Number(d.amount) || 0),
    0,
  );

  const totalKathaDonation = recentKathaBookings.reduce((sum, k) => {
    const cleanAmount =
      typeof k.amount === "string" ? k.amount.replace(/[₹,]/g, "") : k.amount;
    return sum + (Number(cleanAmount) || 0);
  }, 0);

  const grandTotal = totalGauSeva + totalKathaDonation;

  const STATS_CARDS = [
    {
      title: "कुल एकत्रित सेवा सहयोग",
      value: `₹${grandTotal.toLocaleString("en-IN")}`,
      change: "सभी माध्यमों से कुल प्राप्त",
      icon: IndianRupee,
      bg: "bg-amber-100/50",
      iconColor: "text-[#A63D00]",
    },
    {
      title: "गौसेवा दानदाता",
      value: recentDonations.length.toLocaleString("en-IN"),
      change: "सक्रिय सेवा संकल्पकर्ता",
      icon: Users,
      bg: "bg-purple-50",
      iconColor: "text-purple-700",
    },
    {
      title: "पंजीकृत कथा अनुष्ठान",
      value: recentKathaBookings.length.toLocaleString("en-IN"),
      change: "कुल बुक की गई कथाएं",
      icon: Calendar,
      bg: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      title: "आश्रित कुल गौवंश",
      value: totalGaushala.toLocaleString("en-IN"),
      change: `${healthyCows} स्वस्थ | ${sickCows} उपचाराधीन`,
      icon: Heart,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-700",
    },
    {
      title: "गौसेवा सहयोग राशि",
      value: `₹${totalGauSeva.toLocaleString("en-IN")}`,
      change: "केवल गौसेवा से प्राप्त",
      icon: IndianRupee,
      bg: "bg-green-50",
      iconColor: "text-green-700",
    },
    {
      title: "कथा अनुष्ठान न्योछावर",
      value: `₹${totalKathaDonation.toLocaleString("en-IN")}`,
      change: "कथा बुकिंग से प्राप्त राशि",
      icon: IndianRupee,
      bg: "bg-sky-50",
      iconColor: "text-sky-700",
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 py-6 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#1E0F0A]/5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1E0F0A]">
                राधे राधे, महाराज जी कार्यालय
              </h1>
              <Sparkles className="w-5 h-5 text-[#A63D00] animate-pulse hidden md:block" />
            </div>
            <p className="text-sm md:text-base text-[#5C3A1E]/70 mt-1 leading-tight">
              सुरभी गौ सेवा तीर्थ एवं मानव जाग्रति संस्था प्रबंधन कंसोल
            </p>
          </div>

          <div className="flex items-center gap-3">
            {loadingStats ? (
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-4 py-2 rounded-2xl flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-amber-700/30 border-t-amber-700 rounded-full animate-spin" />
                डेटा लोड हो रहा है...
              </span>
            ) : (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-2xl text-sm font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                सिस्टम लाइव
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {STATS_CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs md:text-sm font-medium text-[#5C3A1E]/60 tracking-wide pr-4">
                  {card.title}
                </span>
                <div
                  className={`w-10 h-10 rounded-2xl flex-shrink-0 ${card.bg} ${card.iconColor} flex items-center justify-center transition-transform hover:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-auto pt-6">
                <h3 className="text-2xl md:text-3xl font-black text-[#1E0F0A]">
                  {card.value}
                </h3>
                <div className="flex items-center gap-1.5 mt-2 text-xs md:text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    {card.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column - Donations & Queries */}
        <div className="lg:col-span-7 space-y-6">
          {/* Recent Donations */}
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E0F0A]/5">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                  नवीनतम सेवा संकल्प सहयोग
                </h3>
                <p className="text-xs md:text-sm text-[#5C3A1E]/60">
                  हालिया डिजिटल सहयोग
                </p>
              </div>
              <Link
                href="/Admin/gauSeva"
                className="text-[#A63D00] hover:text-[#8B2612] text-sm font-medium flex items-center gap-1 whitespace-nowrap"
              >
                सभी देखें <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-[#5C3A1E]/50 bg-[#FAF8F5]">
                    <th className="py-3 px-4 text-left">संकल्पकर्ता</th>
                    <th className="py-3 px-4 text-left">माध्यम</th>
                    <th className="py-3 px-4 text-right">राशि</th>
                    <th className="py-3 px-4 text-center">स्थिति</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {recentDonations.length > 0 ? (
                    recentDonations.map((row, index) => (
                      <tr key={index} className="hover:bg-[#FAF8F5]">
                        <td className="py-4 px-4">
                          <p className="font-semibold">{row.fullname}</p>
                          <p className="text-xs text-gray-500 font-mono">
                            {row.phone}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-[#5C3A1E]/70">
                          {row.shankal_plan_id}
                        </td>
                        <td className="py-4 px-4 text-right font-bold">
                          ₹{Number(row.amount).toLocaleString("en-IN")}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            <CheckCircle2 className="w-3 h-3" /> सफल
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-12 text-center text-sm text-gray-400"
                      >
                        अभी कोई दान उपलब्ध नहीं है
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Queries */}
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-5 md:p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="font-serif text-lg font-bold">
                  हालिया श्रद्धालु संदेश
                </h3>
                <p className="text-xs text-[#5C3A1E]/60">लंबित पूछताछ</p>
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">
                लंबित: {(recentQueries || []).length}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {(recentQueries || []).slice(0, 3).map((query: any) => (
                <div
                  key={query.id}
                  className="p-4 bg-[#FAF8F5] rounded-2xl text-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{query.name}</p>
                      <p className="text-xs text-gray-500">{query.phone}</p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        query.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {query.status || "Pending"}
                    </span>
                  </div>
                  <p className="text-[#A63D00] text-xs mt-2">
                    {query.seva_interest}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    "{query.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Katha Bookings */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-5 md:p-6 shadow-sm h-full">
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="font-serif text-lg font-bold">
                कथा अनुष्ठान बुकिंग्स
              </h3>
              <Link
                href="/Admin/katha"
                className="text-[#A63D00] hover:text-[#8B2612] text-sm font-medium flex items-center gap-1"
              >
                सभी देखें <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-4 space-y-4">
              {recentKathaBookings.length > 0 ? (
                recentKathaBookings.map((katha, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#1E0F0A]/5"
                  >
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-base">{katha.name}</p>
                        <p className="text-[#A63D00] text-sm mt-1">
                          {getVenueNameHindi(katha.venue_type)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          📞 {katha.number}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {katha.amount ? `₹${katha.amount}` : "लंबित"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatKathaDate(katha.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-12 text-gray-400 text-sm">
                  कोई कथा बुकिंग नहीं मिली
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
