'use client';
import React, { useState, useEffect } from "react";
import Hero from "@/components/MandirJirnodhar/Hero";
import AboutConcept from "@/components/MandirJirnodhar/AboutConcept";
import CoreMotos from "@/components/MandirJirnodhar/CoreMotos";
import Methodology from "@/components/MandirJirnodhar/Methodology";
import Gallery from "@/components/home/Gallery";
import DonationForm from "@/components/MandirJirnodhar/DonationForm";
import { getCoreMotos, fetchBanners } from "@/services/user.services";
import toast, { Toast } from "react-hot-toast";

export default function MandirJirnodharPage() {
  const [coreMotos, setCoreMotos] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);

  const fetchCoreMotos = async () => {
    try {
      const response = await getCoreMotos();
      console.log(response);
      if (response) {
        setCoreMotos(response);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching core motos:", error);
    }
  };

    const getBanners = async () => {
      try {
        const banners = await fetchBanners();
        setBanners(banners);
      } catch (error) {
        console.error("Error fetching banners:", error);
        return [];
      }
    };

  useEffect(() => {
    fetchCoreMotos();
    getBanners();
  }, []);

  return (
    <main className="bg-[#FAF8F5] text-[#1E0F0A] overflow-x-hidden font-sans">
      <Hero banners={banners.filter((banner) => banner.page === "temple")} />
      <AboutConcept />
      <CoreMotos motos={coreMotos} />
      <Methodology />
      <Gallery />
      <DonationForm />
    </main>
  );
}
