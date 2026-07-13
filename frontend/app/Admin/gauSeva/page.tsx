"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import GauSevaView from "@/components/Admin/GauSevaView";
// Import the new separate component
import GauSevaDonorsTable, {
  DonorType,
} from "@/components/Admin/components/GauSevaDonorsTable";
// Added more relevant icons for the cards
import { Activity, ShieldAlert, Heart, Stethoscope, Wheat } from "lucide-react";
import { PlanType } from "@/components/Admin/components/Types.type";
import {
  shankalpPlansList as getPlansService,
  getGauSevaDonarDetials,
  getGaushalaStats,
} from "@/services/admin.services";

export interface GaushalaStatsType {
  totalCows: number;
  healthyCows: number;
  sickCows: number;
  charaStock: number;
  charaDaysLeft: number;
}

export default function GauSeva() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);

  const [ledger, setLedger] = useState<PlanType[]>([]);
  const [donors, setDonors] = useState<DonorType[]>([]);
  const [stats, setStats] = useState<GaushalaStatsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDonors, setLoadingDonors] = useState<boolean>(true);

  const GAUSHALA_METRICS = [
    {
      title: "कुल गौवंश",
      value: stats?.totalCows ?? (stats as any)?.total_cows ?? 0,
      sub: "गौशाला में कुल आश्रित",
      icon: Heart,
      color: "text-[#1E0F0A]",
      bg: "bg-[#F4D28C]/20",
    },
    {
      title: "स्वस्थ गौवंश",
      value: stats?.healthyCows ?? (stats as any)?.healthy_cows ?? 0,
      sub: "पूर्ण रूप से स्वस्थ",
      icon: Activity,
      color: "text-green-700",
      bg: "bg-green-50",
    },
    {
      title: "उपचाराधीन",
      value: stats?.sickCows ?? (stats as any)?.sick_cows ?? 0,
      sub: "चिकित्सा के अंतर्गत",
      icon: Stethoscope,
      color: "text-rose-700",
      bg: "bg-rose-50",
    },
    {
      title: "आज का चारा स्टॉक",
      value: `${stats?.charaStock ?? 0} टन शेष`,
      sub: `अगले ${stats?.charaDaysLeft ?? 0} दिनों की रसद पर्याप्त`,
      icon: Wheat,
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
  ];

  const fetchSankalpaPlans = async () => {
    try {
      const response = await getPlansService();
      if (response) {
        setLedger(Array.isArray(response) ? response : response.data || []);
      }
    } catch (err) {
      console.error("डेटा लोड करने में त्रुटि आई:", err);
    }
  };

  const fetchGauSevaDonors = async () => {
    try {
      setLoadingDonors(true);
      const response = await getGauSevaDonarDetials();
      if (response && response.status) {
        setDonors(response.gau_seva_donars || []);
      } else {
        setDonors([]);
      }
    } catch (err) {
      console.error("Error fetching donor details:", err);
    } finally {
      setLoadingDonors(false);
    }
  };

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

  useEffect(() => {
    if (activeTab === "gauSeva") {
      setLoading(true);
      Promise.all([
        fetchSankalpaPlans(),
        fetchGauSevaDonors(),
        fetchGaushalaStats(),
      ]).finally(() => {
        setLoading(false);
      });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />
      <Navbar />

      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        {activeTab === "gauSeva" ? (
          loading ? (
            <div className="flex flex-col items-center justify-center h-96 gap-4 text-[#A63D00]">
              <div className="w-8 h-8 border-4 border-[#A63D00]/20 border-t-[#A63D00] rounded-full animate-spin"></div>
              <div className="text-sm font-semibold tracking-wide">
                गौशाला डेटाबेस से सिंक किया जा रहा है...
              </div>
            </div>
          ) : (
            <div className="space-y-10 animate-fade-in">
              {/* Metrics will now automatically display dynamic data */}
              <GauSevaView
                metrics={GAUSHALA_METRICS}
                ledger={ledger}
                refreshData={fetchSankalpaPlans}
              />

              {/* Render the extracted standalone Table Component here */}
              <GauSevaDonorsTable donors={donors} isLoading={loadingDonors} />
            </div>
          )
        ) : (
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 min-h-[70vh] flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md">
                मानव जागृति संस्था (Live Console)
              </span>
              <h1 className="font-serif text-2xl font-bold mt-2 mb-4 capitalize text-[#2C1810]">
                {activeTab.replace("-", " ")} Management
              </h1>
            </div>
            <div className="border-2 border-dashed border-[#A63D00]/10 rounded-2xl flex flex-col items-center justify-center h-96 text-center p-6 bg-[#FAF8F5]/30">
              <div className="w-12 h-12 rounded-full bg-[#A63D00]/5 flex items-center justify-center mb-4 text-[#A63D00] font-serif font-bold text-lg">
                ॐ
              </div>
              <p className="text-sm text-[#2C1810] font-medium mb-1">
                {activeTab.replace("-", " ")} का सेटअप प्रगति पर है
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
