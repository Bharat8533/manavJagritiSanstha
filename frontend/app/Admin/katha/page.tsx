"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import KathaBookingView from "@/components/Admin/KathaBookingView";
import {
  fetchAllKathas,
  addNewKathaTypeService,
  fetchKathaTypes,
  fetchPosters,
  uploadPosterService,
  deletePosterService,
} from "@/services/admin.services";
import toast, { Toaster } from "react-hot-toast";

export default function AdminKathaPage() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [kathaTypes, setKathaTypes] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [posters, setPosters] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchAllPosters = async (isLoadMore = false) => {
    const newOffset = isLoadMore ? offset + 10 : 0;
    const res = await fetchPosters(10, newOffset);

    if (res.status) {
      setPosters((prev) =>
        isLoadMore ? [...prev, ...res.posters] : res.posters,
      );
      setHasMore(res.hasMore);
      setOffset(newOffset);
    }
  };

  const handleDeletePoster = async (id: string) => {
    try {
      if (confirm("क्या आप वाकई यह पोस्टर हटाना चाहते हैं?")) {
        const response = await deletePosterService(id);
        if (response.status) {
          toast.success(response.message);
          setPosters((prevPosters) => prevPosters.filter((p) => p.id !== id));
          await fetchAllPosters(false);
        } else {
          toast.error(response.message);
        }
        toast.success("पोस्टर हटा दिया गया");
        fetchAllPosters();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllBookings = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetchAllKathas(page);

      if (
        response &&
        response.status &&
        Array.isArray(response.katha_bookings)
      ) {
        const kathaNamesMap: Record<string, string> = {
          "shrimad-bhagavat": "श्रीमद्भागवत महापुराण ज्ञानयज्ञ",
          "shri-ram-katha": "श्रीरामकथा अमृत वर्षा",
          "shiv-mahapuran": "श्री शिव महापुराण कथा",
          "shri-krishna-leela": "श्री कृष्ण लीला उत्सव",
          "devi-bhagavat": "श्री देवी भागवत महापुराण",
          "mahamrityunjay-jaap": "महामृत्युंजय मंत्र जाप अनुष्ठान",
          "ganesh-purana": "श्री गणेश पुराण कथा",
          "satyanarayan-vrat": "सत्यनारायण व्रत कथा",
          "garuda-purana": "गरुड़ पुराण मूल पाठ",
        };

        const venueMap: Record<string, string> = {
          "vrindavan-ashram": "वृंदावन आश्रम",
          "nij-niwas": "निज निवास",
          "jan-pandal": "जन-पंडाल आयोजन",
        };

        const mappedData = response.katha_bookings.map((item: any) => {
          const cleanDakshina = item.amount
            ? Number(item.amount.toString().replace(/[^\d]/g, ""))
            : 0;

          const formattedDate =
            item.date && item.date !== "0000-00-00"
              ? new Date(item.date).toLocaleDateString("hi-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "तिथियां अप्राप्त";

          return {
            id: `KTH-2026-${item.id}`,
            hostName: item.name || "अज्ञात यजमान",
            location: `${venueMap[item.venue_type] || "अन्य स्थल"} - ${item.address || ""}`,
            kathaType:
              kathaNamesMap[item.katha_point] ||
              item.katha_point ||
              "विशेष अनुष्ठान",
            startDate: formattedDate,
            endDate: "विश्राम तिथि निर्धारित",
            dakshina: cleanDakshina,
            status:
              item.status?.toLowerCase() === "confirmed"
                ? "Confirmed"
                : item.status?.toLowerCase() === "in-progress"
                  ? "In-Progress"
                  : "Pending",
            phone: item.number || "",
            notes: item.additional_notes || "",
            vyaasName: "पूज्य महाराज श्री (प्रधान व्यास)",
          };
        });

        setBookings(mappedData);
        setTotalPages(response.pagination?.total_pages || 1);
      }
    } catch (error) {
      console.error("Error fetching katha bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTypes = async () => {
    try {
      setLoading(true);
      const response = await fetchKathaTypes();
      if (response && response.status && response.katha_types) {
        setKathaTypes(response.katha_types);
      }
    } catch (error) {
      console.error("Error fetching katha types:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings(currentPage);
    fetchAllTypes();
    fetchAllPosters();
  }, [currentPage]);

  const handleUpload = async () => {
    if (!file) return toast.error("कृपया पोस्टर चुनें");
    const formData = new FormData();
    formData.append("poster", file);
    formData.append("title", title || "Upcoming Katha");

    try {
      await uploadPosterService(formData);
      toast.success("पोस्टर सफलतापूर्वक अपलोड हुआ");
      setIsModalOpen(false);
      fetchAllPosters();
    } catch (error) {
      toast.error("अपलोड विफल रहा");
    }
  };

  interface KathaTypeMaster {
    key: string;
    label: string;
    amount: string;
    inclusion: string;
    duration: string;
  }

  const handleAddNewKathaType = async (newKatha: KathaTypeMaster) => {
    try {
      const payload = {
        key: newKatha.key,
        label: newKatha.label,
        base: newKatha.amount,
        inclusion: newKatha.inclusion,
      };

      const response = await addNewKathaTypeService(payload);

      if (response && response.status) {
        toast.success(
          `पावन श्रेणी "${newKatha.label}" सफलतापूर्वक लाइव कर दी गई है।`,
        );
      } else {
        toast.error(`पावन श्रेणी "${newKatha.label}" लाइव करने में असमर्थ।`);
      }
    } catch (error) {
      console.error("Error saving new katha type:", error);
      alert("सर्वर से कनेक्ट करने में असमर्थ।");
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        {activeTab === "katha" ? (
          loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 border-4 border-[#A63D00] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-xs text-[#5C3A1E]/70 font-medium">
                व्यासपीठ डेटाबेस से कनेक्ट किया जा रहा है...
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* पोस्टर्स सेक्शन */}
              {/* <div className="border-t pt-10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold font-serif text-[#2C1810]">
                      Upcoming Katha Posters
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#A63D00] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#853000] transition-colors"
                    >
                      + Add Poster
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {posters.length > 0 ? (
                      posters.map((p) => <PosterCard key={p.id} poster={p} />)
                    ) : (
                      <p className="text-sm text-[#5C3A1E]/50 col-span-full py-8 text-center border-2 border-dashed rounded-2xl">
                        अभी कोई पोस्टर उपलब्ध नहीं है।
                      </p>
                    )}
                  </div>
                </div> */}
              {/* बुकिंग्स टेबल */}
              <KathaBookingView
                kathaTypes={kathaTypes}
                bookings={bookings}
                posters={posters} // यहाँ से पास करें
                onUpdateStatus={handleUpdateStatus}
                onAddNewKathaType={handleAddNewKathaType}
                onAddPoster={() => setIsModalOpen(true)}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(p) => setCurrentPage(p)}
                onDeletePoster={handleDeletePoster} // यहाँ से पास करें
                hasMore={hasMore}
                fetchAllPosters={() => fetchAllPosters(true)}
              />
            </div>
          )
        ) : (
          /* अन्य टैब का UI */
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 min-h-[70vh] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.01)] flex flex-col justify-between">
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
              <p className="text-xs text-[#5C3A1E]/60 max-w-sm font-light leading-relaxed">
                इस अनुभाग का विशिष्ट इंटरफेस और डिजिटल रिपोर्ट प्रणाली जल्द ही
                सक्रिय कर दी जाएगी।
              </p>
            </div>

            <div className="text-[11px] text-[#5C3A1E]/40 text-right font-light mt-4">
              सुरक्षित व्यवस्थापन • मानव जागृति संस्था अनुष्ठान प्रबंधन प्रणाली
            </div>
          </div>
        )}
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-sm shadow-2xl border border-gray-100">
            <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-1">
              नया पोस्टर जोड़ें
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              आगामी कथा का विवरण और इमेज फाइल अपलोड करें।
            </p>

            {/* Title Input */}
            <div className="mb-4">
              <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1">
                पोस्टर का शीर्षक
              </label>
              <input
                type="text"
                placeholder="जैसे: श्रीमद्भागवत कथा 2026"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#A63D00]/20"
              />
            </div>

            {/* Styled File Input */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1.5 ml-1">
                इमेज फाइल
              </label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-[#A63D00] hover:bg-[#A63D00]/5 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="text-[10px] text-gray-500">
                    {file ? file.name : "क्लिक करें या फाइल ड्रैग करें"}
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 text-sm font-bold text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
              >
                छोड़ें (Cancel)
              </button>
              <button
                onClick={handleUpload}
                className="flex-1 py-3 bg-[#A63D00] hover:bg-[#853000] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#A63D00]/20 transition-all"
              >
                अपलोड करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
