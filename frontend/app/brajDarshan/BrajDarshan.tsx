"use client";
import React, { useState, useEffect } from "react";
import BrajDarshanHero from "../../components/brajDarshan/Hero";
import DarshanMilestones from "../../components/brajDarshan/DarshanMilestones";
import YatraMotive from "../../components/brajDarshan/YatraMotive";
import YatraFacilities from "../../components/brajDarshan/YatraFacilities";
import BookingDesk from "../../components/brajDarshan/BookingDesk";
import BrajGallery from "../../components/brajDarshan/BrajGallery";
import { fetchBanners, getBrajdarshanPlaces } from "@/services/user.services";

interface BrajPlace {
  id: string;
  place_name: string;
  zone: string;
  timings: string;
  crowd_level: string;
  special_notice: string;
}

interface Banner {
  id: number;
  page: string;
  imageUrl: string;
}

const BrajDarshan = () => {
  const [places, setPlaces] = useState([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  const getBanners = async () => {
    try {
      const banners = await fetchBanners();
      setBanners(banners);
    } catch (error) {
      console.error("Error fetching banners:", error);
      return [];
    }
  };

  console.log("BrajDarshan Banners:", banners); // Debugging line to check banners
  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await getBrajdarshanPlaces();
      if (res) {
        setPlaces(res);
      }
    };
    fetchPlaces();
    getBanners();
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#FAF6EE] text-[#3D2511] font-sans antialiased selection:bg-[#D4A017]/30">
      <BrajDarshanHero banners={banners.filter((banner) => banner.page === "brajdarshan")} />
      <DarshanMilestones places={places} />
      <YatraMotive />
      <YatraFacilities />
      <BrajGallery />
      <BookingDesk />
    </section>
  );
};

export default BrajDarshan;
