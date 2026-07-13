"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Heart,
  Users,
  ShieldCheck,
  CheckCircle2, // सफलता के आइकॉन के लिए
  AlertCircle, // एरर के आइकॉन के लिए
} from "lucide-react";
import { adminAuth } from "@/services/admin.services";
import { isAuthenticated } from "@/utils/authToken";

export default function AdminLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await adminAuth(formData.username, formData.password);

      console.log("Auth Response:", response);

      if (response && response.success) {
        setSuccessMsg(
          response.message || "लॉगिन सफल! डैशबोर्ड पर भेजा जा रहा है...",
        );
        
        if (!document.cookie.includes("token=")) {
          router.push("/Admin/login");
        }else{
          router.push("/Admin/dashboard");
        }
      } else {
        setErrorMsg(response?.message || "लॉगिन विफल रहा।");
      }
    } catch (err: any) {
      console.error("Auth Error:", err);
      setErrorMsg("सर्वर से कनेक्शन विफल रहा।");
    } finally {
      if (!successMsg) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/Admin/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] flex font-sans antialiased selection:bg-[#A63D00]/10 selection:text-[#A63D00]">
      <div className="hidden lg:flex w-[50%] relative flex-col justify-between p-16 overflow-hidden border-r border-[#1E0F0A]/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://content.jdmagicbox.com/v2/comp/vrindavan/p2/9999px565.x565.190401161801.a5p2/catalogue/shree-haridev-ji-mandir-goda-vihar-vrindavan-temples-2uItbY11xj.jpg')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#110502]/100 via-[#23120A]/85 to-[#160B07]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#110502]/60 via-transparent to-transparent" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white text-[#A63D00] flex items-center justify-center border-2 border-white/20 shadow-[0_4px_20px_rgba(166,61,0,0.3)] animate-fadeIn">
            <Heart className="h-5 w-5 fill-current" />
          </div>
          <div className="flex flex-col drop-shadow-md">
            <span className="text-sm font-black tracking-wider text-white uppercase">
              मानव जागृति संस्था
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#F4D28C] font-extrabold uppercase">
              सुरभी गौ सेवा तीर्थ
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-md space-y-6 my-auto">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-black bg-[#A63D00] text-white border border-white/10 tracking-wide uppercase shadow-md">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              महाराज श्री कार्यालय प्रबंधन
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            मानव जागृति संस्था <br />
            <span className="text-[#F4D28C] bg-gradient-to-r from-[#F4D28C] to-[#FFF9EE] bg-clip-text text-transparent">
              प्रशासनिक लॉगिन
            </span>
          </h1>

          <p className="text-sm text-zinc-100 font-medium leading-relaxed drop-shadow-sm opacity-95">
            गौ-सेवा, कथा अनुष्ठान और सामाजिक कल्याण के हमारे डिजिटल सफर में आपका
            स्वागत है। संस्था के दैनिक कार्यों, दान प्रबंधन और लाइव रिपोर्टिंग
            को सुव्यवस्थित करने के लिए अपनी अधिकृत साख (credentials) के साथ
            सुरक्षित प्रवेश करें।
          </p>

          {/* <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-white/10">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs">
              <div className="p-2 rounded-lg bg-[#A63D00] text-white shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  संरक्षित गौवंश
                </p>
                <p className="text-sm font-black text-white tracking-wide">
                  428+ माताएं
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs">
              <div className="p-2 rounded-lg bg-[#2C1810] text-[#F4D28C] border border-[#F4D28C]/20 shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  सक्रिय संकल्प
                </p>
                <p className="text-sm font-black text-white tracking-wide">
                  1,240+ दानी
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] font-bold tracking-wider text-zinc-300 drop-shadow-xs uppercase">
          <span>© 2026 MJS संस्था</span>
          <span className="text-[#F4D28C]">ब्रज क्षेत्र प्रबंधन</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A63D00]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex lg:hidden items-center gap-3 mb-10 relative z-10">
          <div className="h-10 w-10 rounded-xl bg-white text-[#A63D00] flex items-center justify-center border border-[#A63D00]/20 shadow-sm">
            <Heart className="h-4 w-4 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-wider text-[#1E0F0A] uppercase">
              मानव जागृति संस्था
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#A63D00] uppercase font-bold">
              MJS CORE
            </span>
          </div>
        </div>

        <div className="w-full max-w-[460px] mx-auto my-auto space-y-8 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#A63D00] text-white tracking-wide uppercase shadow-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              सुरक्षित सर्वर कनेक्शन
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-[#1E0F0A] leading-tight">
              कार्यालय प्रवेश
            </h2>
            <p className="text-xs text-[#5C3A1E] font-normal leading-relaxed opacity-80">
              सुरभी गौ सेवा तीर्थ एवं प्रबंधन प्रणाली को संचालित करने के लिए
              अपनी लॉगिन जानकारी दर्ज करें।
            </p>
          </div>

          <div className="space-y-3 transition-all duration-300">
            {/* एरर अलर्ट बॉक्स (Red Status) */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3.5 bg-red-50 border-l-4 border-red-600 text-red-950 text-xs font-semibold rounded-r-xl shadow-xs animate-fadeIn">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* सफलता अलर्ट बॉक्स (Green Status) */}
            {successMsg && (
              <div className="flex items-center gap-2 p-3.5 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 text-xs font-semibold rounded-r-xl shadow-xs animate-fadeIn">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2 group">
              <label className="text-[11px] font-extrabold text-[#1E0F0A] tracking-wider uppercase pl-0.5 block transition-colors group-focus-within:text-[#A63D00]">
                यूज़रनेम / Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C3A1E]/50 group-focus-within:text-[#A63D00] transition-colors">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="username"
                  required
                  disabled={isLoading || !!successMsg}
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="mjs_admin"
                  className="w-full bg-white border-2 border-[#1E0F0A]/10 text-[#1E0F0A] font-medium placeholder-[#5C3A1E]/40 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#A63D00] focus:ring-4 focus:ring-[#A63D00]/5 shadow-sm transition-all duration-150 disabled:opacity-60"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center pl-0.5">
                <label className="text-[11px] font-extrabold text-[#1E0F0A] tracking-wider uppercase block transition-colors group-focus-within:text-[#A63D00]">
                  गोपनीय पासवर्ड / Password
                </label>
                <a
                  href="#"
                  className="text-[11px] font-extrabold text-[#A63D00] hover:text-[#8B2612] underline decoration-2 underline-offset-2 transition-colors"
                >
                  भूल गए?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5C3A1E]/50 group-focus-within:text-[#A63D00] transition-colors">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  disabled={isLoading || !!successMsg}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white border-2 border-[#1E0F0A]/10 text-[#1E0F0A] font-medium placeholder-[#5C3A1E]/40 rounded-xl pl-10 pr-11 py-3.5 text-sm focus:outline-none focus:border-[#A63D00] focus:ring-4 focus:ring-[#A63D00]/5 shadow-sm transition-all duration-150 disabled:opacity-60"
                />
                <button
                  type="button"
                  disabled={isLoading || !!successMsg}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#5C3A1E]/50 hover:text-[#1E0F0A] transition-colors cursor-pointer disabled:opacity-30"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submission Trigger */}
            <button
              type="submit"
              disabled={isLoading || !!successMsg}
              className={`w-full relative mt-4 group text-white font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 overflow-hidden shadow-md active:scale-[0.98] disabled:opacity-75 cursor-pointer ${
                successMsg
                  ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                  : "bg-[#2C1810] hover:bg-[#1E0F0A] shadow-[#2C1810]/20"
              }`}
            >
              {isLoading && !successMsg ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : successMsg ? (
                <>
                  <span>प्रवेश स्वीकृत...</span>
                  <CheckCircle2 className="h-4 w-4 animate-bounce" />
                </>
              ) : (
                <>
                  <span>लॉग-इन सत्यापित करें</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Regulatory Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#1E0F0A]/10 pt-5 text-[10px] text-[#5C3A1E] font-extrabold tracking-wider gap-2 uppercase relative z-10">
          <div className="flex items-center gap-1.5 text-[#A63D00]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>एन्क्रिप्टेड नेटवर्क लिंक</span>
          </div>
          <span className="opacity-60">सिस्टम नोड: MJS-MTR</span>
        </div>
      </div>
    </div>
  );
}
