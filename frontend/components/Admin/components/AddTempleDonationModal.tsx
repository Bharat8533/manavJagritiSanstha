"use client";
import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";
import toast from "react-hot-toast";

interface AddTempleDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
}

export default function AddOfflineDonationModal({
  isOpen,
  onClose,
  onSave,
  initialData = null,
}: AddTempleDonationModalProps) {
  const [formData, setFormData] = useState({
    donor_name: "",
    mobile: "",
    amount: "",
    gotra_sankalpa: "",
    cause: "General Donation",
    payment_mode: "Cash",
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({
          donor_name: "",
          mobile: "",
          amount: "",
          gotra_sankalpa: "",
          cause: "General Donation",
          payment_mode: "Cash",
        });
      }
    }
  }, [initialData, isOpen]); 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-xl border border-gray-100 animate-in zoom-in-95">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#1E0F0A]">
            Add Offline Donation
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Donor Name
            </label>
            <input
              value={formData.donor_name}
              onChange={(e) =>
                setFormData({ ...formData, donor_name: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
              placeholder="Enter donor name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
                Mobile Number
              </label>
              <input
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
                placeholder="98765xxxxx"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
                Amount (₹)
              </label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full p-3 mt-1 border border-gray-200 rounded-xl font-bold text-[#A63D00]"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Gotra / Sankalpa
            </label>
            <textarea
              value={formData.gotra_sankalpa}
              onChange={(e) =>
                setFormData({ ...formData, gotra_sankalpa: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl h-20"
              placeholder="Enter details..."
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Payment Mode
            </label>
            <select
              value={formData.payment_mode}
              onChange={(e) =>
                setFormData({ ...formData, payment_mode: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl bg-white"
            >
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <button
            onClick={() => {
              if (formData.donor_name && formData.amount && formData.mobile) {
                onSave(formData);
              } else {
                toast.error("Required fields are missing!");
              }
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#1E0F0A] text-white py-4 rounded-xl font-bold hover:bg-[#A63D00] transition-all cursor-pointer mt-4"
          >
            <Save size={18} />
            Save Donation Record
          </button>
        </div>
      </div>
    </div>
  );
}
