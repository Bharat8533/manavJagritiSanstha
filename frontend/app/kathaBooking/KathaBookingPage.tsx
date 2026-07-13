"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/kathaBooking/Hero";
import KathaAmountInfo from "@/components/kathaBooking/KathaAmountInfo";
import KathaBookingForm from "@/components/kathaBooking/KathaBookingForm";
import KathaTypes from "@/components/kathaBooking/KathaTypes";
import UpcomingPosters from "@/components/kathaBooking/UpcomingPosters";
import {
  kathaBookingSubmit,
  getKathaTypes,
  fetchBanners,
  fetchUpcomingKathaPosters,
} from "@/services/user.services";


const KathaBookingPage = () => {
  const [selectedKathaLabel, setSelectedKathaLabel] = useState("");
  const [kathaTypes, setKathaTypes] = useState<any[]>([]);
  const [formState, setFormState] = useState({
    yajmanName: "",
    phone: "",
    preferredDate: "",
    venueType: "vrindavan-ashram",
    fullAddress: "",
    additionalNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [banners, setBanners] = useState<any[]>([]);
  const [poster, setPoster] = useState<any[]>([])

  useEffect(() => {
    const loadKathaTypes = async () => {
      try {
        const data = await getKathaTypes();
        setKathaTypes(data);
        // Set the first item as default if available
        if (data && data.length > 0) {
          setSelectedKathaLabel(data[0].label);
        }
      } catch (err) {
        console.error("Error fetching katha types:", err);
      }
    };
    loadKathaTypes();
  }, []);

  const activeDetails = kathaTypes.find(
    (k) => k.label === selectedKathaLabel,
  ) || {
    amount: "---",
    inclusion: "कृपया किसी कथा का चयन करें।",
  };

  const handleFormChange = (updatedFields: Partial<typeof formState>) => {
    setFormState((prev) => ({ ...prev, ...updatedFields }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!activeDetails || activeDetails.amount === "---") {
      setErrorMessage("कृपया एक वैध कथा चुनें।");
      return;
    }

    const combinedPayload = {
      kathaType: selectedKathaLabel,
      amount: activeDetails.amount,
      ...formState,
    };

    try {
      const response = await kathaBookingSubmit(combinedPayload);
      if (response && response.status) {
        if (response.payment_url) {
          window.location.href = response.payment_url;
        } else {
          alert("Booking successful, but link not generated.");
        }
        setSubmitted(true);
        setFormState({
          yajmanName: "",
          phone: "",
          preferredDate: "",
          venueType: "vrindavan-ashram",
          fullAddress: "",
          additionalNotes: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(response.message || "सबमिट करने में त्रुटि हुई।");
      }
    } catch (error) {
      setErrorMessage("सर्वर से जुड़ने में समस्या आ रही है।");
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

  const getUpcomingKathaPosters = async () => {
    try {
      const posters = await fetchUpcomingKathaPosters();
      console.log("new poster : ", posters);
      setPoster(posters);
    } catch (error) {
      console.error("Error fetching posters:", error);
      return [];
    }
  }
  useEffect(() => {
    getBanners();
    getUpcomingKathaPosters();
  }, []);
  
  const filtered_banner = banners.filter((banner) => banner.page === "kathabooking");

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-[#2C1810] antialiased selection:bg-[#A63D00]/10">
      <Hero banners={filtered_banner} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <UpcomingPosters posters={poster} />
        
        <KathaTypes
          selectedKatha={selectedKathaLabel}
          onSelect={setSelectedKathaLabel}
          types={kathaTypes}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <KathaBookingForm
            formState={formState}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            submitted={submitted}
          />
          <KathaAmountInfo details={activeDetails} />
        </div>
      </main>
    </div>
  );
};

export default KathaBookingPage;

