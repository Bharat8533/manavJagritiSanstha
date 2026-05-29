'use client';
import React, { useState } from "react";
import Hero from "@/components/kathaBooking/Hero";
import KathaAmountInfo from "@/components/kathaBooking/KathaAmountInfo";
import KathaBookingForm from "@/components/kathaBooking/KathaBookingForm";
import KathaTypes from "@/components/kathaBooking/KathaTypes";

const KathaBookingPage = () => {
  const [selectedKatha, setSelectedKatha] = useState("shrimad-bhagavat");

  const [formState, setFormState] = useState({
    yajmanName: "",
    phone: "",
    preferredDate: "",
    venueType: "vrindavan-ashram",
    fullAddress: "",
    additionalNotes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (updatedFields : Partial<typeof formState>) => {
    setFormState((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const combinedPayload = {
      kathaType: selectedKatha,
      ...formState,
    };

    console.log(
      "Katha Registration Request Payload generated:",
      combinedPayload,
    );
    setSubmitted(true);

    // Dynamic reset loops
    setFormState({
      yajmanName: "",
      phone: "",
      preferredDate: "",
      venueType: "vrindavan-ashram",
      fullAddress: "",
      additionalNotes: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-[#2C1810] antialiased selection:bg-[#A63D00]/10">
      <Hero />

      <main className="pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <KathaTypes selectedKatha={selectedKatha} onSelect={setSelectedKatha} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <KathaBookingForm
            formState={formState}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            submitted={submitted}
          />

          <KathaAmountInfo selectedKatha={selectedKatha} />
        </div>
      </main>
    </div>
  );
};

export default KathaBookingPage;
