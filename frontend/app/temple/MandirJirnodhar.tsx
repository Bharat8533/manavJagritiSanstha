import React from "react";
import Hero from "@/components/MandirJirnodhar/Hero";
import AboutConcept from "@/components/MandirJirnodhar/AboutConcept";
import CoreMotos from "@/components/MandirJirnodhar/CoreMotos";
import Methodology from "@/components/MandirJirnodhar/Methodology";
import Gallery from '@/components/home/Gallery'
import DonationForm from "@/components/MandirJirnodhar/DonationForm";

export default function MandirJirnodharPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#1E0F0A] overflow-x-hidden font-sans">
      <Hero />
      <AboutConcept />
      <CoreMotos />
      <Methodology />
      <Gallery />
      <DonationForm />
    </main>
  );
}
