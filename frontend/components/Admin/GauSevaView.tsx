"use client";

import React, { useState } from "react";
import { Plus, Search, Edit3, Sparkles, DollarSign } from "lucide-react";
import { MetricItem, PlanType } from "@/components/Admin/components/Types.type";
import GauSevaModal from "@/components/Admin/components/GauSevaModal";
import { addShankalpForGuaSeva } from "@/services/admin.services";
import { toast } from "react-hot-toast";

interface GauSevaViewProps {
  metrics: MetricItem[];
  ledger: PlanType[];
  refreshData: () => Promise<void>;
}

export default function GauSevaView({
  metrics,
  ledger,
  refreshData,
}: GauSevaViewProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSankalpa, setSelectedSankalpa] = useState<PlanType | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

const handleSavePlan = async (formData: Partial<PlanType>) => {
  try {
    setIsSubmitting(true);

    // यहाँ payload को स्पष्ट रूप से टाइप करें या 'as any' का उपयोग करें
    const payload = selectedSankalpa?.id
      ? { ...formData, id: selectedSankalpa.id }
      : formData;

    // समाधान: यहाँ 'as any' जोड़ें ताकि टाइपस्क्रिप्ट एरर न दे
    const result = await addShankalpForGuaSeva(payload as any);

    if (result.status) {
      toast.success(result.message || "योजना सुरक्षित की गई");
      setIsModalOpen(false);
      await refreshData();
    } else {
      toast.error(result.message || "कुछ गड़बड़ हुई");
    }
  } catch (error: any) {
    console.error("Error saving plan:", error);
    toast.error(error.message || "सर्वर से कनेक्टिविटी विफल");
  } finally {
    setIsSubmitting(false);
  }
};

  const openEditModal = (item: PlanType) => {
    setSelectedSankalpa(item);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setSelectedSankalpa(null);
    setIsModalOpen(true);
  };

  const filteredLedger = ledger.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.badge?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A63D00] uppercase bg-[#A63D00]/5 border border-[#A63D00]/10 px-3 py-1 rounded-md">
            Live Master Console
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#1E0F0A] mt-2">
            गौ-सेवा संकल्प योजना प्रबंधन
          </h1>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 bg-[#2C1810] text-[#F4D28C] hover:bg-[#A63D00] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer shadow-md w-fit"
        >
          <Plus size={16} className="stroke-[3]" />
          नूतन योजना जोड़ें (Add Plan)
        </button>
      </div>

      {/* 2. LIVE GAUSHALA METRICS METERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start justify-between group"
            >
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#5C3A1E]/60 uppercase tracking-wide">
                  {metric.title}
                </p>
                <h3 className="font-sans text-2xl lg:text-3xl font-extrabold text-[#2C1810]">
                  {metric.value}
                </h3>
                <p className="text-xs text-gray-400 font-light">{metric.sub}</p>
              </div>
              <div
                className={`p-3.5 rounded-2xl ${metric.bg} ${metric.color} group-hover:scale-105 transition-transform`}
              >
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. MASTER PLAN TABLE */}
      <div className="bg-white rounded-[2rem] border border-[#1E0F0A]/5 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FAF8F5]/50">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#2C1810]">
              संकल्प योजना मास्टर सूची (Sankalpa Master Directory)
            </h3>
            <p className="text-xs text-gray-400 font-light mt-0.5">
              वेबसाइट पर लाइव प्रदर्शित होने वाले सभी फिक्स्ड और कस्टम संकल्प
              पैकेजों की सूची।
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={15}
            />
            <input
              type="text"
              placeholder="योजना नाम, बैज या विवरण खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#2C1810] focus:outline-none focus:border-[#A63D00] placeholder-gray-400 font-light transition-all"
            />
          </div>
        </div>

        {/* DATA TABLE CONTAINER */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-bold text-[#5C3A1E]/50 uppercase tracking-widest bg-[#FAF8F5]/30">
                <th className="py-4 px-6">योजना ID</th>
                <th className="py-4 px-6">योजना विवरण (Sankalpa Title)</th>
                <th className="py-4 px-6">बैज / श्रेणी</th>
                <th className="py-4 px-6">संकल्प महात्म्य (Description)</th>
                <th className="py-4 px-6 text-right">
                  निर्धारित राशि (Amount)
                </th>
                <th className="py-4 px-6 text-center">स्थिति (Features)</th>
                <th className="py-4 px-6 text-center">क्रियाएं (Action)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs">
              {filteredLedger.length > 0 ? (
                filteredLedger.map((row) => {
                  const numericAmount = Number(row.amount || 0);
                  const isCustom =
                    row.isCustomAmount === "1" || row.isCustomAmount === 1;
                  const isFeaturedPlan =
                    row.isFeatured === "1" || row.isFeatured === 1;

                  return (
                    <tr
                      key={row.id}
                      className="hover:bg-[#FFF9EE]/20 transition-colors group"
                    >
                      {/* ID Column */}
                      <td className="py-4 px-6 font-mono font-medium text-gray-400 group-hover:text-[#A63D00]">
                        #{row.id}
                      </td>

                      {/* Title */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-[#2C1810] text-[13px] whitespace-normal max-w-xs">
                          {row.title}
                        </div>
                      </td>

                      {/* Badge */}
                      <td className="py-4 px-6">
                        <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/10 text-[#A63D00] text-[10px] font-bold px-2.5 py-1 rounded-md">
                          {row.badge || "सुलभ सेवा"}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="py-4 px-6 max-w-sm overflow-hidden text-ellipsis">
                        <p
                          className="text-[11px] text-gray-500 font-light whitespace-normal line-clamp-2"
                          title={row.desc}
                        >
                          {row.desc || "कोई विवरण उपलब्ध नहीं है।"}
                        </p>
                      </td>

                      {/* Amount Column */}
                      <td className="py-4 px-6 text-right">
                        {numericAmount === 0 || isCustom ? (
                          <div className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px]">
                            <DollarSign size={12} /> स्वेच्छा राशि
                          </div>
                        ) : (
                          <div className="font-sans font-bold text-[#2C1810] text-[14px]">
                            ₹{numericAmount.toLocaleString("en-IN")}
                          </div>
                        )}
                      </td>

                      {/* Featured Indicator */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          {isFeaturedPlan ? (
                            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider">
                              <Sparkles size={11} /> Featured
                            </span>
                          ) : (
                            <span className="text-gray-300 font-light text-[11px]">
                              नॉर्मल
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Action Controls */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openEditModal(row)}
                            className="p-2 border border-gray-100 rounded-xl bg-white text-gray-600 hover:text-[#A63D00] hover:border-[#A63D00]/20 shadow-sm transition-all cursor-pointer"
                            title="योजना संपादित करें"
                            disabled={isSubmitting}
                          >
                            <Edit3 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-12 text-center text-gray-400 font-light"
                  >
                    कोई संकल्प योजना नहीं मिली।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. MODALS SYNC CONTAINER */}
      <GauSevaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePlan}
        editData={selectedSankalpa}
      />
    </div>
  );
}
