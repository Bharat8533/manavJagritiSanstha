"use client";

import React, { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

interface Plan {
  id?: string;
  name: string;
  price: string;
  features: string[];
}

export default function MembershipModal({
  plan,
  onClose,
  onSave,
  isOpen,
}: {
  plan: Plan | null;
  onClose: () => void;
  onSave: (plan: Plan) => void;
  isOpen: boolean;
}) {
  const [formData, setFormData] = useState<Plan>({
    id: plan ? plan.id : undefined,
    name: plan ? plan.name : "",
    price: plan ? plan.price : "",
    features: plan ? plan.features : [],
  });

  const [isSaving, setIsSaving] = useState(false);  
  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    if (plan) {
      setFormData({
        name: plan.name,
        price: plan.price,
        features: plan.features,
      });
    } else {
      setFormData({ name: "", price: "", features: [] });
    }
  }, [plan]);

  const addFeature = () => {
    if (newFeature.trim() !== "") {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()],
      });
      setNewFeature("");
    }
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

  const handleSave = async () => {
      setIsSaving(true);
    try{
        await onSave(formData);
    }catch(err){
        console.log(err);
    }finally{
        setIsSaving(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="font-bold mb-4 text-lg">
          {plan ? "Edit Membership Plan" : "Add New Membership Plan"}
        </h2>

        {/* Input: Plan Name */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
            Plan Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#A63D00] outline-none"
            placeholder="e.g., Gold Membership"
          />
        </div>

        {/* Input: Price */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
            Price
          </label>
          <input
            type="text"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#A63D00] outline-none"
            placeholder="e.g., 2.11 Lakh"
          />
        </div>

        {/* Input: Features */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
            Features
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
              placeholder="Add a facility..."
            />
            <button
              onClick={addFeature}
              className="bg-[#A63D00] text-white p-2 rounded-lg hover:bg-[#853200]"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2 max-h-40 overflow-y-auto border p-2 rounded-lg bg-gray-50">
            {formData.features.map((feat, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-2 rounded border text-xs"
              >
                <span>{feat}</span>
                <button
                  onClick={() => removeFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            {formData.features.length === 0 && (
              <p className="text-[10px] text-gray-400 text-center py-2">
                No features added yet
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 bg-[#A63D00] text-white rounded-lg text-sm font-semibold hover:bg-[#853200] cursor-pointer"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Save Plan"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
