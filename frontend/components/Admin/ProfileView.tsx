"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  Mail,
  Phone,
  Camera,
  Shield,
  Key,
  Save,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import { changeAdminUser } from "@/store/slices/adminSlice";
import {
  adminChangePassword,
  updateAdminProfile,
} from "@/services/admin.services";

export default function ProfileView() {
  const dispatch = useDispatch();
  const adminUser = useSelector((state: any) => state.admin.adminUser);

  const [profile, setProfile] = useState({
    fullname: adminUser?.fullname || "",
    role: adminUser?.role || "Super Administrator",
    email: adminUser?.email || "",
    number: adminUser?.number || "",
    avatarUrl: adminUser?.avatarUrl || "",
    joinedDate:
      adminUser?.joinedDate ||
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  });

  const handleInputChange = (field: string, value: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  // अलर्ट्स स्टेट्स
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // पासवर्ड स्टेट्स
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      changeAdminUser({
        id: adminUser?.id,
        fullname: profile.fullname,
        email: profile.email,
        number: profile.number,
        role: profile.role,
        joinedDate: profile.joinedDate,
      }),
    );

    try {
      const response = await updateAdminProfile({
        id: adminUser?.id,
        fullname: profile.fullname,
        email: profile.email,
        number: profile.number,
        role: profile.role,
      });
    } catch (error) {
      console.error("प्रोफ़ाइल अपडेट करते समय त्रुटि:", error);
      return;
    }

    setProfileSuccess(true);
    setTimeout(() => setProfileSuccess(false), 3000);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setPasswordError("");
      setPasswordSuccess(false);

      if (newPassword !== confirmPassword) {
        setPasswordError(
          "नया पासवर्ड और पुष्टि किया गया पासवर्ड आपस में मेल नहीं खाते!",
        );
        return;
      }
      const response = await adminChangePassword(
        adminUser?.id,
        currentPassword,
        newPassword,
        confirmPassword,
      );
      if (response.status === true) {
        setPasswordSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setTimeout(() => setPasswordSuccess(false), 3000);
      } else {
        setPasswordError(response.message);
      }
    } catch (error) {
      setPasswordError("पासवर्ड बदलते समय त्रुटि हुई। कृपया पुनः प्रयास करें।");
      return;
    }
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex flex-col space-y-2 border-b border-[#1E0F0A]/5 pb-6">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#A63D00] uppercase bg-[#A63D00]/5 px-3 py-1 rounded-md w-fit">
          Account Settings
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#1E0F0A] tracking-tight">
          मेरी प्रोफ़ाइल
        </h1>
        <p className="text-xs text-[#5C3A1E]/60 font-light max-w-2xl leading-relaxed">
          अपनी व्यक्तिगत जानकारी, संस्थागत पदभार और सुरक्षा क्रेडेंशियल्स को
          यहीं से लाइव प्रबंधित करें।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ================= बायाँ कॉलम: प्रोफाइल ओवरव्यू कार्ड ================= */}
        <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col items-center text-center space-y-6 lg:sticky lg:top-24">
          <div className="relative">
            {/* 🔥 फ़ोटो होने पर इमेज दिखेगी, अन्यथा सुंदर पहला अक्षर */}
            <div className="w-32 h-32 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#A63D00] to-[#FFF9EE] shadow-xl flex items-center justify-center">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt="Admin Profile"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-[#A63D00] text-white flex items-center justify-center font-serif text-4xl font-bold uppercase">
                  {profile.fullname ? profile.fullname.charAt(0) : "A"}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-serif text-xl font-bold text-[#1E0F0A] tracking-tight">
              {adminUser?.fullname || "Admin"}
            </h2>
            <p className="text-[#A63D00] font-medium text-xs flex items-center justify-center gap-1.5 bg-[#A63D00]/5 px-3 py-1 rounded-full uppercase">
              <Award className="w-3.5 h-3.5" />{" "}
              {adminUser?.role.split("_").join(" ")}
            </p>
          </div>

          <div className="w-full border-t border-[#1E0F0A]/5 pt-5 space-y-3.5 text-xs text-[#5C3A1E]/80">
            <div className="flex justify-between items-center bg-[#FAF8F5] p-2.5 rounded-xl border border-[#1E0F0A]/5">
              <span className="font-medium text-[#5C3A1E]/60">
                प्रशासनिक भूमिका
              </span>
              <span className="font-black text-[#A63D00] uppercase tracking-wider text-[10px]">
                {adminUser?.role.split("_").join(" ") || "Super Administrator"}
              </span>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="font-medium text-[#5C3A1E]/60 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" /> जुड़ाव तिथि
              </span>
              <span className="text-[#1E0F0A] font-medium">
                {adminUser?.joinedDate || "15 June 2026"}
              </span>
            </div>
          </div>
        </div>

        {/* ================= दायाँ कॉलम: एडिटिंग फॉर्म्स ================= */}
        <div className="lg:col-span-2 space-y-8">
          {/* Form 1: पर्सनल इंफॉर्मेशन */}
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <h3 className="font-serif text-lg font-bold text-[#1E0F0A] border-b border-[#1E0F0A]/5 pb-4 mb-6 flex items-center gap-2.5">
              <User className="w-5 h-5 text-[#A63D00]" /> व्यक्तिगत एवं संस्थागत
              विवरण
            </h3>

            {profileSuccess && (
              <div className="mb-4 flex items-center gap-2 p-3.5 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 text-xs font-semibold rounded-r-xl shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>
                  आपका विवरण सुरक्षित रूप से अपडेट किया गया है। आपका विवरण
                  सुरक्षित में अपडेट कर दिया गया है।
                </span>
              </div>
            )}

            <form onSubmit={handleProfileSubmit} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810]">
                    पूरा नाम *
                  </label>
                  <input
                    type="text"
                    required
                    value={profile.fullname}
                    onChange={(e) =>
                      handleInputChange("fullname", e.target.value)
                    }
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810]">
                    संस्थागत पद (Role) *
                  </label>
                  <input
                    type="text"
                    required
                    value={profile.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810] flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-stone-400" /> ईमेल आईडी *
                  </label>
                  <input
                    type="email"
                    required
                    value={profile.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810] flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-stone-400" /> संपर्क नंबर *
                  </label>
                  <input
                    type="text"
                    required
                    value={profile.number}
                    onChange={(e) =>
                      handleInputChange("number", e.target.value)
                    }
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#A63D00] hover:bg-[#8B2612] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" /> विवरण सुरक्षित करें
                </button>
              </div>
            </form>
          </div>

          {/* Form 2: पासवर्ड सिक्योरिटी */}
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
            <h3 className="font-serif text-lg font-bold text-[#1E0F0A] border-b border-[#1E0F0A]/5 pb-4 mb-6 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#A63D00]" /> सुरक्षा एवं लॉगिन
              पासवर्ड
            </h3>

            {passwordError && (
              <div className="mb-4 p-3.5 bg-red-50 border-l-4 border-red-600 text-red-950 text-xs font-semibold rounded-r-xl">
                {passwordError}
              </div>
            )}

            {passwordSuccess && (
              <div className="mb-4 flex items-center gap-2 p-3.5 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 text-xs font-semibold rounded-r-xl">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>आपका सुरक्षा पासवर्ड सफलतापूर्वक बदल दिया गया है।</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-5 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C1810]">
                  वर्तमान सुरक्षा पासवर्ड (Current Password)
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810]">
                    नवीन पासवर्ड (New Password)
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="नया पासवर्ड दर्ज करें"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#2C1810]">
                    नया पासवर्ड पुनः लिखें (Confirm Password)
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="पासवर्ड की पुष्टि करें"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl p-3.5 text-sm font-medium text-[#1E0F0A] focus:outline-none focus:border-[#A63D00] focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1E0F0A] hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Key className="w-4 h-4" /> पासवर्ड बदलें
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
