"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import MembershipPlans from "@/components/Admin/MembershipPlans";
import MembershipModal from "@/components/Admin/MembershipModal";
import { toast, Toaster } from "react-hot-toast";
import {
  getSubscription,
  addSubscription,
  updateSubscription,
  deleteSubscription,
} from "@/services/admin.services";

interface Plan {
  id?: string;
  name: string;
  price: string;
  icon: any;
  color: string;
  features: string[];
}

export default function MembershipPage() {
  const { loading } = useSelector((state: any) => state.admin);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);

  const fetchPlans = async () => {
    try {
      const response = await getSubscription();
      if (response && Array.isArray(response)) {
        const formattedPlans = response.map((plan: any) => ({
          ...plan,
          features:
            typeof plan.features === "string"
              ? JSON.parse(plan.features)
              : plan.features || [],
          name: plan.plan_name,
        }));
        setPlans(formattedPlans);
      }
    } catch (error) {
      console.error("Error fetching plans:", error);
      toast.error("Failed to load plans.");
    }
  };

  const handleSavePlan = async (updatedPlan: any) => {
    try {
      const payload = {
        ...updatedPlan,
        features: JSON.stringify(updatedPlan.features),
      };

      if (editingPlan && editingPlan.id) {
        const response = await updateSubscription(editingPlan.id, payload);

        if (!response.status) return toast.error(response.message);

        setPlans((prevPlans) =>
          prevPlans.map((p) =>
            p.id === editingPlan.id
              ? { ...updatedPlan, id: editingPlan.id }
              : p,
          ),
        );
        toast.success(response.message || "Plan updated successfully!");
      } else {
        const newPlan = await addSubscription(payload);
        if (!newPlan.status) return toast.error(newPlan.message);
        setPlans([...plans, { ...updatedPlan, id: newPlan.id }]);
        toast.success(newPlan.message || "Plan added successfully!");
      }

      setIsModalOpen(false);
      setEditingPlan(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save plan");
    }
  };

  const handleDeletePlan = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;

    try {
      const response = await deleteSubscription(id);
      if (response.status) {
        setPlans(plans.filter((p) => p.id !== id));
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to delete plan");
    }
  };

  const handleOpenModal = (plan: Plan | null = null) => {
    setEditingPlan(plan);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased">
      <Sidebar />

      <Navbar />
      <Toaster />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        {loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 border-4 border-[#A63D00] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xs text-[#5C3A1E]/70 font-medium">
              डेटा लोड हो रहा है...
            </p>
          </div>
        ) : (
          <div className="min-h-[70vh]">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-8 border-b border-[#1E0F0A]/10">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md">
                  Membership Portal
                </span>
                <h1 className="font-serif text-2xl font-bold mt-2 text-[#2C1810]">
                  सदस्यता प्रबंधन (Membership Management)
                </h1>
              </div>
              <div className="p-5 rounded-2xl">
                <p className="text-xs uppercase font-bold text-[#A63D00]/80">
                  Total Joined Members
                </p>
                <h3 className="text-2xl font-serif mt-1 font-bold text-right">
                  1,248
                </h3>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex justify-between">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">
                  Membership Plans
                </h2>
                <button
                  onClick={() => handleOpenModal(null)}
                  className="text-xs font-bold bg-[#A63D00]/90 text-white hover:bg-[#A63D00] px-4 py-2 rounded-md cursor-pointer transtion-all"
                >
                  + Add New Plan
                </button>
              </div>
              <MembershipPlans
                plans={plans}
                onEdit={handleOpenModal}
                onDelete={handleDeletePlan}
              />
            </div>

            {isModalOpen && (
              <MembershipModal
                plan={editingPlan}
                onClose={() => {
                  setIsModalOpen(false);
                  setEditingPlan(null);
                }}
                onSave={handleSavePlan}
                isOpen={isModalOpen}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
