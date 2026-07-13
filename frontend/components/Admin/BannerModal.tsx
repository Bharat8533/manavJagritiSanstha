"use client";
import React, { useState, useEffect } from "react";

export default function BannerModal({ isOpen, onClose, onSave, initialData }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [page, setPage] = useState("home");

  // Pre-fill form if initialData (edit mode) is provided
  useEffect(() => {
    if (initialData) {
      setPage(initialData.page || "home");
    } else {
      setPage("home");
      setSelectedFile(null);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const pages = ["home", "gauseva", "temples", "kathabooking", "brajdarshan"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    if (selectedFile) formData.append("image", selectedFile);
    formData.append("page", page);

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#1E0F0A]">
            {initialData ? "Edit Banner" : "Add New Banner"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-medium text-[#5C3A1E]/60 mb-1 block">
              {initialData ? "Change Image (Optional)" : "Upload Image"}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full p-3 bg-[#FAF8F5] rounded-xl"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-[#5C3A1E]/60 mb-1 block">Target Page</label>
            <select value={page} onChange={(e) => setPage(e.target.value)} className="w-full p-3 bg-[#FAF8F5] rounded-xl outline-none">
              {pages.map((p) => <option key={p} value={p}>{p.toUpperCase()}</option>)}
            </select>
          </div>
          <button type="submit" className="w-full bg-[#1E0F0A] text-white py-3 rounded-xl font-medium">
            Save Banner
          </button>
        </form>
      </div>
    </div>
  );
}