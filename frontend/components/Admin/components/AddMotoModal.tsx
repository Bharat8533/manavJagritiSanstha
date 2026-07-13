"use client";
import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";

export default function AddMotoModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    extra_points: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title ?? "",
        description: initialData.description ?? "",
        extra_points: initialData.extra_points ?? "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        extra_points: "",
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-xl border border-gray-100 animate-in zoom-in-95">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {initialData ? "Edit Core Objective" : "Add Core Objective"}
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
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
              placeholder="सांस्कृतिक पुनरुत्थान"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl h-24"
              placeholder="समय के प्रवाह में उपेक्षित हुई कड़ियों को जोड़कर..."
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Extra Points (Comma (;) separated)
            </label>
            <textarea
              value={formData.extra_points}
              onChange={(e) =>
                setFormData({ ...formData, extra_points: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl h-20"
              placeholder="Point 1; Point 2; Point 3"
            />
          </div>

          <button
            onClick={() => onSave({ ...formData, id: initialData?.id })}
            className="w-full flex items-center justify-center gap-2 bg-[#1E0F0A] text-white py-4 rounded-xl font-bold hover:bg-[#A63D00] transition-all"
          >
            <Save size={18} />
            Save Objective
          </button>
        </div>
      </div>
    </div>
  );
}
