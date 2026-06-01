"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import GauSevaHero from "@/components/gauSeva/Hero";
import GauSevaImportance from "@/components/gauSeva/GauSevaImportance";
import GauSevaGallery from "@/components/gauSeva/GauSevaGallery";
import GauSevaImpact from "@/components/gauSeva/GauSevaImpact";
import GauSevaPlans from "@/components/gauSeva/GauSevaPlans";
import DonorFormModal from "@/components/gauSeva/DonorFormModal";
import { PlanType, DonorInfoType } from "../../components/UI/Types.types";

export default function GauSevaPage(): React.JSX.Element {
  // Global State Control
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [donorInfo, setDonorInfo] = useState<DonorInfoType>({
    fullName: "",
    phone: "",
    email: "",
    sankalpaGotra: "",
  });

  // Action Handlers
  const handlePlanSelect = (plan: PlanType): void => {
    setSelectedPlan(plan);
    if (plan.id !== "custom") {
      setCustomAmount(0);
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setDonorInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const finalAmount =
      selectedPlan?.id === "custom" ? customAmount : selectedPlan?.amount;

    console.log("Initiating Payment Gateway Integration...", {
      amount: finalAmount,
      plan: selectedPlan?.title,
      donor: donorInfo,
    });
    // Add Razorpay or Stripe initialization script here
  };

  return (
    <main className="bg-[#FCFAF5] min-h-screen antialiased selection:bg-[#D4A017] selection:text-[#130B07]">
      <GauSevaHero
        onActionClick={() =>
          document
            .getElementById("seva-plans")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <GauSevaImportance />
      <GauSevaGallery />
      <GauSevaImpact />

      <div id="seva-plans">
        <GauSevaPlans
          selectedPlan={selectedPlan}
          customAmount={customAmount}
          setCustomAmount={setCustomAmount}
          onPlanSelect={handlePlanSelect}
        />
      </div>

      <DonorFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        donorInfo={donorInfo}
        selectedPlan={selectedPlan}
        customAmount={customAmount}
        onChange={handleInputChange}
        onSubmit={handleCheckoutSubmit}
      />
    </main>
  );
}
