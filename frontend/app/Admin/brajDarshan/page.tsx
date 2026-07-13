"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import BrajDarshanView from "@/components/Admin/BrajDarshanView";
import {
  fetchBrajDarshanEnquiries as fetchEnquiries,
  updateEnquiryStatus as updateStatusAPI,
  fetchBrajPlaces,
  addBrajPlace,
  editBrajPlace,
} from "@/services/admin.services";
import BrajDarshanEnquiry from "@/components/Admin/components/BrajDarshanEnquiry";
import { toast, Toaster } from "react-hot-toast";

export interface BrajPlace {
  id: string;
  place_name: string;
  zone: string;
  timings: string;
  crowd_level: "Low" | "Medium" | "High";
  special_notice: string;
  status: "Active" | "Maintenance";
}

export default function page() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  const [places, setPlaces] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPlace = async (newPlace: any) => {
    try {
      const response = await addBrajPlace(newPlace);
      if (response && response.status) {
        toast.success(response.message);
        loadPlaces();
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadPlaces = async () => {
    try {
      const data = await fetchBrajPlaces();
      if (data && data.brajDarshanPlaces) {
        setPlaces(data.brajDarshanPlaces);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loadEnquiries = async () => {
    try {
      const response = await fetchEnquiries();
      if (response) setEnquiries(response);
    } catch (error) {
      toast.error("डेटा लोड करने में विफल");
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const response = await updateStatusAPI(id, status);
      if (response) {
        toast.success(response.message);
        loadEnquiries();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("अपडेट करने में त्रुटि");
    }
  };

  const handleEditClick = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handlePlaceChange = async (id: string, updatedData: any) => {
    try {
      const response = await editBrajPlace({ id, ...updatedData });
      if (response && response.status) {
        toast.success(response.message);
        loadPlaces();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("अपडेट करने में त्रुटि");
    }
  };

  useEffect(() => {
    loadPlaces();
    loadEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />
      <Toaster />
      <Navbar />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        {activeTab === "brajDarshan" ? (
          <div className="space-y-8">
            <BrajDarshanView
              places={places}
              onAddPlace={handleAddPlace}
              onEditPlace={handlePlaceChange}
              onOpenModal={() => {
                setEditingItem(null);
                setIsModalOpen(true);
              }}
              editingItem={editingItem}
              onSetEditing={setEditingItem}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <BrajDarshanEnquiry
              enquiries={enquiries}
              onUpdateStatus={handleUpdateStatus}
            />
          </div>
        ) : (
          /* बाकी सभी टैब्स के लिए सात्विक फॉलबैक स्क्रीन */
          <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-8 min-h-[70vh] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.01)] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md">
                मानव जागृति संस्था (Console)
              </span>
              <h1 className="font-serif text-2xl font-bold mt-2 mb-4 capitalize text-[#2C1810]">
                {activeTab.replace("-", " ")} Management
              </h1>
            </div>

            <div className="border-2 border-dashed border-[#A63D00]/10 rounded-2xl flex flex-col items-center justify-center h-96 text-center p-6 bg-[#FAF8F5]/30">
              <div className="w-12 h-12 rounded-full bg-[#A63D00]/5 flex items-center justify-center mb-4 text-[#A63D00] font-serif font-bold text-lg">
                राज
              </div>
              <p className="text-sm text-[#2C1810] font-medium mb-1">
                {activeTab.replace("-", " ")} सेक्शन सक्रिय नहीं है
              </p>
              <p className="text-xs text-[#5C3A1E]/60 max-w-sm font-light leading-relaxed">
                कृपया ब्रज यात्रा और मंदिर ट्रैकिंग को अपडेट करने के लिए साइडबार
                मेनू से "Braj Darshan" विकल्प का चयन करें।
              </p>
            </div>

            <div className="text-[11px] text-[#5C3A1E]/40 text-right font-light mt-4">
              सुरक्षित व्यवस्थापन • मानव जागृति संस्था ब्रज मंडल सेवा कंसोल
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
