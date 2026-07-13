"use client";

import React, { useState } from "react";
import KathaTable from "@/components/Admin/components/KathaBookingsTable";
import KathaTypeTable from "@/components/Admin/components/KathaTypeTable";
import ViewDetailsModal from "@/components/Admin/components/ViewDetailsModal";
import AddKathaTypeModal from "@/components/Admin/components/AddKathaTypeModal";
import PosterCard from "@/components/Admin/components/PosterCard";
import { Plus, BookOpen, Layers, ChevronLeft, ChevronRight } from "lucide-react";

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
  phone: string;
  notes: string;
}

interface KathaTypeMaster {
  key: string;
  label: string;
  amount: string;
  inclusion: string;
  duration: string;
}

interface KathaBookingViewProps {
  kathaTypes: KathaTypeMaster[];
  bookings: UserBooking[];
  posters: any[]; // नया prop
  onUpdateStatus: (
    id: string,
    newStatus: "Confirmed" | "In-Progress" | "Pending",
  ) => void;
  onAddNewKathaType: (newKatha: KathaTypeMaster) => void;
  onAddPoster: () => void; // नया prop
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onDeletePoster: (id: string) => void; // नया prop
  hasMore: boolean; // नया prop
  fetchAllPosters: (loadMore?: boolean) => void; // नया prop
}

export default function KathaBookingView({
  kathaTypes,
  bookings,
  posters,
  onUpdateStatus,
  onAddNewKathaType,
  onAddPoster,
  currentPage,
  totalPages,
  onPageChange,
  onDeletePoster,
  hasMore,
  fetchAllPosters,
}: KathaBookingViewProps) {
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<UserBooking | null>(
    null,
  );

  const handleOpenDetails = (booking: UserBooking) => {
    setSelectedBooking(booking);
    setIsViewModalOpen(true);
  };

  const handleLocalAddKathaType = (newKatha: KathaTypeMaster) => {
    onAddNewKathaType(newKatha);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* ================= शीर्ष हेडर एवं एक्शन कंट्रोल ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-xs gap-4">
        <div>
          <h1 className="text-xl font-serif font-bold text-[#1E0F0A] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#A63D00]" /> अनुष्ठान एवं बुकिंग
            महाप्रबंधन
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            यजमानों द्वारा की गई लाइव बुकिंग और नए कथा प्रकारों (Base Price
            Setup) का केंद्रीय कंसोल।
          </p>
        </div>

        {/* केवल नया कथा प्रकार जोड़ने का बटन */}
        <button
          onClick={() => setIsTypeModalOpen(true)}
          className="bg-[#A63D00] hover:bg-[#853000] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-[#A63D00]/10 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> नया कथा प्रकार जोड़ें
        </button>
      </div>

      {/* ================= भाग 1: एडमिन द्वारा नियंत्रित कथा प्रकार (Katha Types) ================= */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <Layers className="w-3.5 h-3.5" />
          <h2 className="text-xs font-bold uppercase tracking-wider">
            कथा श्रेणियां एवं दक्षिणा विन्यास (User Web Synced)
          </h2>
        </div>
        <KathaTypeTable kathaTypes={kathaTypes} />
      </div>

      <div className="border-t border-gray-500/20 pt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold font-serif text-[#2C1810]">
            Upcoming Katha Posters
          </h2>
          <button
            onClick={onAddPoster}
            className="bg-[#A63D00] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#853000]"
          >
            + Add Poster
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {posters.length > 0 ? (
            posters.map((p) => (
              <PosterCard
                key={p.id}
                poster={p}
                onDelete={() => onDeletePoster(p.id)}
              />
            ))
          ) : (
            <div className="col-span-full py-12 flex flex-col items-center justify-center border-2 border-dashed border-[#A63D00]/20 rounded-3xl bg-[#A63D00]/5">
              <div className="w-12 h-12 rounded-full bg-[#A63D00]/10 flex items-center justify-center mb-3 text-[#A63D00]">
                <span className="text-xl">🖼️</span>
              </div>
              <p className="text-sm font-bold text-[#2C1810]">
                कोई पोस्टर उपलब्ध नहीं है
              </p>
              <p className="text-xs text-[#5C3A1E]/60 mt-1">
                नया कथा पोस्टर जोड़ने के लिए + Add Poster पर क्लिक करें।
              </p>
            </div>
          )}
        </div>

        {hasMore && (
          <button
            onClick={() => fetchAllPosters(true)}
            className="w-full py-3 mt-4 border-2 border-dashed rounded-xl text-xs font-bold text-[#A63D00]"
          >
            और देखें (Load More)
          </button>
        )}
      </div>

      {/* ================= भाग 2: यूजर साइड से आई बुकिंग्स (User Bookings) ================= */}
      <div className="space-y-3 border-t border-gray-500/20 pt-10">
        <div className="flex items-center gap-2 px-1 text-gray-400">
          <BookOpen className="w-3.5 h-3.5" />
          <h2 className="text-xs font-bold uppercase tracking-wider">
            वेबसाइट से प्राप्त यजमान बुकिंग अनुरोध ({bookings.length})
          </h2>
        </div>
        <KathaTable bookings={bookings} onViewDetails={handleOpenDetails} />

        {totalPages > 1 && (
          <div className="flex justify-end items-center gap-2 mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#A63D00]">
              पेज {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ================= सिस्टम मोडल्स (Modals) ================= */}

      {/* 1. नया कथा प्रकार जोड़ने का मोडल */}
      {isTypeModalOpen && (
        <AddKathaTypeModal
          onClose={() => setIsTypeModalOpen(false)}
          onSave={handleLocalAddKathaType}
        />
      )}

      {/* 2. लाइव बुकिंग विवरण एवं स्टेटस बदलने का मोडल */}
      {isViewModalOpen && selectedBooking && (
        <ViewDetailsModal
          booking={selectedBooking}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedBooking(null);
          }}
          onStatusChange={onUpdateStatus}
        />
      )}
    </div>
  );
}
