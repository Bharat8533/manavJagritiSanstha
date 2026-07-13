"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import DashboardView from "@/components/Admin/DashboardView";
import { useAppSelector } from "@/store/hooks";
import {
  getGaushalaStats,
  getRecentDonations,
  getRecentKathaBookings,
} from "@/services/admin.services";
import { toast, Toaster } from "react-hot-toast";

export interface GaushalaStatsType {
  totalCows: number;
  healthyCows: number;
  sickCows: number;
  charaStock: number;
  charaDaysLeft: number;
}

export default function AdminDashboard() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  const [stats, setStats] = useState<GaushalaStatsType | null>(null);
  const [recentDonations, setRecentDonations] = useState<any[]>([]);
  const [recentKathaBookings, setRecentKathaBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchGaushalaStats = async () => {
    try {
      setLoading(true);
      const response = await getGaushalaStats();
      if (response && response.status) {
        setStats(response.data);
      }
    } catch (error) {
      console.error("डेटा लोड करने में त्रुटि आई:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentDonations = async () => {
    try {
      const response = await getRecentDonations();
      if (response && response.status) {
        setRecentDonations(response.donations || []);
      } else {
        toast.error(response.message || "डेटा प्राप्त नहीं हो सका");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRecentKathaBookings = async () => {
    try {
      const response = await getRecentKathaBookings();
      if (response && response.status) {
        setRecentKathaBookings(response.kathas || []);
      } else {
        toast.error(response.message || "डेटा प्राप्त नहीं हो सका");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (activeTab === "dashboard") {
      fetchGaushalaStats();
      fetchRecentDonations();
      fetchRecentKathaBookings();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />
      <Navbar />

      <main className="md:ml-64 pt-24 min-h-screen transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
          <Toaster position="top-center" />

          {activeTab === "dashboard" ? (
            <DashboardView
              stats={stats}
              loadingStats={loading}
              recentDonations={recentDonations}
              recentKathaBookings={recentKathaBookings}
            />
          ) : (
            <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 md:p-10 min-h-[70vh] shadow-sm">
              <span className="inline-block text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-3 py-1 rounded-md mb-3">
                Live Console
              </span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold capitalize text-[#2C1810]">
                {activeTab.replace(/-/g, " ")} Management
              </h1>
              <div className="mt-8 border-2 border-dashed border-[#2C1810]/10 rounded-3xl flex items-center justify-center h-96 text-[#5C3A1E]/50 text-sm md:text-base">
                {activeTab.replace(/-/g, " ")} का पूरा इंटरफेस यहाँ विकसित किया
                जाएगा
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
