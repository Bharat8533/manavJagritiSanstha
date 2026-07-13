"use client";
import React, { useState } from "react";
import DonorFormModal from "../UI/DonorFormModal";
import toast, {Toaster} from "react-hot-toast";
import { useTranslations } from "next-intl";


export default function SimpleDonationForm() {
  const t = useTranslations('TempleDonationForm');

  const [amount, setAmount] = useState<number>(1100);
  const [cause, setCause] = useState("general");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // दानकर्ता की जानकारी का स्टेट
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    sankalpaGotra: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormOpenAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      toast.error("कृपया एक वैध सहयोग राशि दर्ज करें।");
      return;
    }
    setIsModalOpen(true);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("धन्यवाद! आपका संकल्प स्वीकृत हुआ।");
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#FFFDF9] py-20 px-6">
      <Toaster />

      <div className="max-w-xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl text-[#2C1810] font-bold">
            {t('heading')}
          </h2>
          <p className="text-[#5D4037]/70 text-sm leading-relaxed">
            {t('p')}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[#E5E0D8] p-8 rounded-3xl shadow-[0_20px_40px_rgba(166,61,0,0.05)]">
          <form className="space-y-6" onSubmit={handleFormOpenAttempt}>
            {/* Service Selection */}
            <div className="text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#A63D00] mb-3 block">
                सेवा का प्रकार
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full p-4 bg-[#FFF5EF] text-[#2C1810] rounded-xl border border-[#E5E0D8] focus:border-[#A63D00] outline-none transition-all"
              >
                <option value="general">{t('option1')}</option>
                <option value="stone">{t('option2')}</option>
                <option value="vigraha">{t('option3')}</option>
                <option value="annakshetra">{t('option4')}</option>
                <option value="vastra">{t('option5')}</option>
                <option value="utsav">{t('option6')}</option>
                <option value="gaushala">{t('option7')}</option>
              </select>
            </div>

            {/* Amount Selection */}
            <div className="text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#A63D00] mb-3 block">
                सहयोग राशि (₹)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[500, 1100, 2100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className={`p-3 rounded-xl border transition-all font-bold text-sm ${
                      amount === val
                        ? "bg-[#A63D00] text-white border-[#A63D00]"
                        : "bg-[#FFF5EF] text-[#2C1810] border-[#E5E0D8] hover:border-[#A63D00]/30"
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="अन्य राशि दर्ज करें"
                min={1}
                value={amount === 0 ? "" : amount}
                onChange={(e) => {
                  const val = e.target.value;
                  setAmount(val === "" ? 0 : Number(val));
                }}
                className="w-full p-4 bg-white text-[#2C1810] rounded-xl border border-[#E5E0D8] outline-none focus:border-[#A63D00] placeholder:text-[#5D4037]/30"
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full bg-[#A63D00] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#853200] transition-all shadow-[0_8px_16px_rgba(166,61,0,0.2)]"
            >
              सहयोग करें ₹{amount}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-[#5D4037]/40 uppercase tracking-widest font-bold">
          सुरक्षित और पारदर्शी भुगतान प्रक्रिया
        </p>
      </div>
    </section>
  );
}
