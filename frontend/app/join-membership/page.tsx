"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { joinMemberShip } from "@/services/user.services";
import { toast, Toaster } from "react-hot-toast";

interface MembershipFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  gotra?: string;
  dob?: string;
  plan_id: string;
  plan_name: string;
  amount: string;
}

export default function JoinMembership() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState<MembershipFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    gotra: "",
    dob: "",
    plan_id: selectedPlan?.id || "",
    plan_name: selectedPlan?.plan_name || "",
    amount: selectedPlan?.price || "",
  });

  useEffect(() => {
    const plan = sessionStorage.getItem("selectedPlan");
    if (plan) {
      try {
        const data = JSON.parse(plan);
        const parsedFeatures =
          typeof data.features === "string"
            ? JSON.parse(data.features.replace(/\\/g, ""))
            : data.features;

        setSelectedPlan({ ...data, features: parsedFeatures });
      } catch (err) {
        console.error("Error parsing plan data:", err);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      plan_id: selectedPlan.id,
      plan_name: selectedPlan.plan_name,
      amount: selectedPlan.price,
    };

    const res = await joinMemberShip(finalData);
    if (res.status && res.payment_url) {
      window.location.href = res.payment_url;
    } else {
      alert(res.message || "Something went wrong");
    }
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Complete Your Membership
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            You are choosing the{" "}
            <span className="font-bold text-[#A63D00]">
              {selectedPlan.plan_name} Membership
            </span>
            . Please fill in your details to finalize your sankalp.
          </p>
        </div>

        {/* Plan Overview */}
        <div className="border-y border-[#1E0F0A]/10 py-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-1 text-[#A63D00]">
                {selectedPlan.plan_name} Membership
              </h2>
              <p className="text-sm text-gray-800 uppercase tracking-widest font-semibold mb-4">
                Includes {selectedPlan.features?.length || 0} Premium Benefits
              </p>
              <ul className="space-y-1">
                {selectedPlan.features?.map((feat: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="text-[#A63D00]">✦</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-right">
              <span className="block text-xs uppercase text-gray-800 font-bold">
                Total Contribution
              </span>
              <span className="text-4xl font-bold text-[#A63D00]">
                {selectedPlan.price}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-8 font-serif">
            Member Information
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                placeholder="Rahul Sharma"
                name="name"
                onChange={handleInputChange}
              />
              <InputField
                type="tel"
                label="Phone Number"
                placeholder="+91 99999 99999"
                name="phone"
                onChange={handleInputChange}
              />
            </div>
            <InputField
            type="email"
              label="Email Address"
              placeholder="rahul@example.com"
              name="email"
              onChange={handleInputChange}
            />
            <InputField
              label="Full Residential Address"
              placeholder="Street, City, State"
              name="address"
              onChange={handleInputChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="gotra"
                label="Gotra (Optional)"
                placeholder="e.g. Kashyap"
                onChange={handleInputChange}
              />
              <InputField
                type="date"
                name="dob"
                label="Date of Birth"
                placeholder="DD/MM/YYYY"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit"    className="w-full mt-6 py-4 bg-[#2C1810] text-white font-bold rounded-lg hover:bg-[#A63D00] transition-all shadow-lg cursor-pointer">
              Confirm & Pay {selectedPlan.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  placeholder?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  placeholder,
  name,
  type = "text",
  value,
  required = true,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-[11px] uppercase text-gray-500 tracking-widest mb-2 font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full bg-white border border-gray-200 text-[#2C1810] p-3.5 rounded-lg focus:border-[#A63D00] outline-none transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}