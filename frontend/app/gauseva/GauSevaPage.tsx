"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import GauSevaHero from "@/components/gauSeva/Hero";
import GauSevaImportance from "@/components/gauSeva/GauSevaImportance";
import GauSevaImpact from "@/components/gauSeva/GauSevaImpact";
import GauSevaPlans from "@/components/gauSeva/GauSevaPlans";
import DonorFormModal from "@/components/gauSeva/DonorFormModal";
import { PlanType, DonorInfoType } from "../../components/UI/Types.types";
import {
  gauSevaDonation,
  getShankalpPlans,
  fetchBanners,
} from "@/services/user.services";
import toast, { Toaster } from "react-hot-toast";

export default function GauSevaPage(): React.JSX.Element {
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [donorInfo, setDonorInfo] = useState<DonorInfoType>({
    fullName: "",
    phone: "",
    email: "",
    sankalpaGotra: "",
  });
  const [banners, setBanners] = useState<any[]>([]);

  const fetchShankalpPlans = async () => {
    try {
      const response = await getShankalpPlans();
      if (response) {
        setPlans(response);
      }
    } catch (error) {
      console.error("Error fetching shankalp plans:", error);
      toast.error("Failed to load plans.");
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
    fetchShankalpPlans();
    getBanners();
  }, []);

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

  const handleCheckoutSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const finalAmount =
      selectedPlan?.id === "custom" ? customAmount : selectedPlan?.amount;
    try {
      const response = await gauSevaDonation({
        ...donorInfo,
        amount: finalAmount as number,
        planId: selectedPlan?.id,
      });

      if (response && response.status && response.payment_url) {
        window.location.href = response.payment_url;
        toast.success(response.message || "Donation successful!");
        setDonorInfo({
          fullName: "",
          phone: "",
          email: "",
          sankalpaGotra: "",
        });
      } else {
        toast.error(response.message || "Donation failed.");
      }
    } catch (err) {
      console.error("Donation Error:", err);
      toast.error("Donation failed.");
    }
  };

  return (
    <main className="bg-[#FCFAF5] min-h-screen antialiased selection:bg-[#D4A017] selection:text-[#130B07]">
      <Toaster position="top-center" reverseOrder={false} />
      <GauSevaHero
      banners={banners.filter((banner) => banner.page === "gauseva")}
          // onActionClick={() =>
          //   document
          //     .getElementById("seva-plans")
          //     ?.scrollIntoView({ behavior: "smooth" })
          // }
      />
      <GauSevaImportance />
      <GauSevaImpact />

      <div id="seva-plans">
        <GauSevaPlans
          plans={plans}
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
