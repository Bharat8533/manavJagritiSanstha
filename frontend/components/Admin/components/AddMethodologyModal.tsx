"use client";
import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";

export default function AddMethodologyModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: any) {
  const [formData, setFormData] = useState({
    step_number: "",
    phase: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        step_number: initialData.step_number ?? "",
        phase: initialData.phase ?? "",
        title: initialData.title ?? "",
        description: initialData.description ?? "",
      });
    } else {
      setFormData({ step_number: "", phase: "", title: "", description: "" });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-xl border border-gray-100 animate-in zoom-in-95">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#1E0F0A]">
            {initialData ? "Edit Methodology Step" : "Add Methodology Step"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
                Step Number
              </label>
              <input
                type="number"
                value={formData.step_number}
                onChange={(e) =>
                  setFormData({ ...formData, step_number: e.target.value })
                }
                className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
                placeholder="04"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
                Phase
              </label>
              <input
                value={formData.phase}
                onChange={(e) =>
                  setFormData({ ...formData, phase: e.target.value })
                }
                className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
                placeholder="EXECUTION"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-[#5C3A1E] uppercase ml-1">
              Title
            </label>
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-3 mt-1 border border-gray-200 rounded-xl"
              placeholder="कार्य का नाम"
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
              placeholder="चरण का विवरण लिखें..."
            />
          </div>

          <button
            onClick={() => onSave({ ...formData, id: initialData?.id })}
            className="w-full flex items-center justify-center gap-2 bg-[#1E0F0A] text-white py-4 rounded-xl font-bold hover:bg-[#A63D00] transition-all cursor-pointer"
          >
            <Save size={18} />
            {initialData ? "Update Step" : "Save Step"}
          </button>
        </div>
      </div>
    </div>
  );
}
