"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import BannerModal from "@/components/Admin/BannerModal";
import BannerCard from "@/components/Admin/BannerCard";
import {
  fetchBanners,
  addNewBanner as addBannerService,
  updateBanner as updateBannerService,
  deleteBanner,
} from "@/services/admin.services";
import toast, { Toaster } from "react-hot-toast";

interface Banner {
  id: number;
  image: string;
  page: string;
}

export default function Banners() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [banners, setBanners] = useState<Banner[]>([]);

  const loadBanners = async () => {
    try {
      const response = await fetchBanners();
      setBanners(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  const handleCreateBanner = async (bannerData: any) => {
    try {
      const response = await addBannerService(bannerData);
      if (response && response.status) {
        toast.success(response.message || "Banner added successfully");
        loadBanners(); // लिस्ट रिफ्रेश करें
        setIsModalOpen(false); // मोडल बंद करें
      } else {
        toast.error(response.message || "Failed to add banner");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  const handleEditClick = (banner: Banner) => {
    setSelectedBanner(banner);
    setIsModalOpen(true);
  };

  const handleSaveBanner = async (bannerData: any) => {
    try {
      let response;
      if (selectedBanner) {
        response = await updateBannerService(
          selectedBanner.id.toString(),
          bannerData,
        );
      } else {
        response = await addBannerService(bannerData);
      }

      if (response?.status) {
        toast.success(response.message || "Operation successful");
        loadBanners();
        setIsModalOpen(false);
        setSelectedBanner(null);
      } else {
        toast.error(response?.message || "Operation failed");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        const response = await deleteBanner(id.toString());
        if (response?.status) {
          toast.success(response.message || "Banner deleted successfully");
          loadBanners(); // Refresh the list
        } else {
          toast.error(response?.message || "Failed to delete");
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased relative">
      <Sidebar />
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        {activeTab === "banners" ? (
          <div className="space-y-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold">Banners Management</h1>
                <p className="text-sm text-[#5C3A1E]/60">
                  Customize banners for various pages
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedBanner(null);
                  setIsModalOpen(true);
                }}
                className="bg-[#1E0F0A] text-white px-6 py-2.5 rounded-xl font-medium"
              >
                + Add New Banner
              </button>
            </div>

            {/* Banner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {banners.map((banner) => (
                <div key={banner.id} className="relative">
                  <BannerCard
                    key={banner.id}
                    banner={banner}
                    onEdit={handleEditClick}
                    onDelete={() => handleDeleteClick(banner.id)}
                  />
                </div>
              ))}
            </div>

            <BannerModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedBanner(null); // Clear selected banner on close
              }}
              onSave={handleSaveBanner} // Use the unified save function
              initialData={selectedBanner} // Pass the selected banner
            />
          </div>
        ) : (
          <div className="h-[70vh] flex items-center justify-center bg-white rounded-3xl border border-[#1E0F0A]/5">
            <p className="text-xs text-[#5C3A1E]/60">
              प्रशासकीय अनुभाग सक्रिय नहीं है।
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
