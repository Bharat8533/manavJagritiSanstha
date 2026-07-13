"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import ProfileView from "@/components/Admin/ProfileView";
import { AdminProfile } from "@/components/UI/Types.types";

const INITIAL_PROFILE_DATA: AdminProfile = {
  name: "आचार्य प्रशांत कुमार",
  email: "admin@manavjagriti.org",
  phone: "+91 98765 12345",
  role: "Super Admin",
  designation: "मुख्य व्यवस्थापक एवं डिजिटल संपादक",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop", // डमी प्रोफाइल इमेज
  joinedDate: "जनवरी 2024",
};

export default function AdminProfilePage() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  const [profile, setProfile] = useState<AdminProfile>(INITIAL_PROFILE_DATA);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />

      <Navbar />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        <ProfileView />
      </main>
    </div>
  );
}
