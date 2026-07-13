"use client";
import React, { useState } from "react";
import { X, UploadCloud } from "lucide-react";

interface AddImageModalProps {
  onClose: () => void;
  onUpload: (files: FileList) => void;
}

export default function AddImageModal({
  onClose,
  onUpload,
}: AddImageModalProps) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files);

      // मल्टीपल इमेज प्रीव्यू जनरेट करें
      const previewUrls = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setPreviews(previewUrls);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#1E0F0A]/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative border border-[#EBE7E0]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#1E0F0A]/40 hover:text-[#A63D00] rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-serif text-2xl font-bold text-[#1E0F0A] mb-6">
          नई छवि जोड़ें
        </h2>

        <div className="space-y-6">
          <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-[#EBE7E0] rounded-2xl p-8 text-center hover:border-[#A63D00] cursor-pointer min-h-[160px]">
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleFileChange}
            />

            {previews.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 w-full">
                {previews.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt="Preview"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <>
                <UploadCloud className="w-8 h-8 text-[#A63D00]/30 mb-3" />
                <p className="text-sm text-[#1E0F0A]/60">
                  छवियाँ चुनें (Multiple allowed)
                </p>
              </>
            )}
          </label>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-sm font-bold uppercase text-[#1E0F0A]/60 bg-red-100 rounded-xl"
            >
              रद्द करें
            </button>
            <button
              onClick={() => selectedFiles && onUpload(selectedFiles)}
              className="flex-1 px-4 py-3 bg-[#A63D00] text-white text-sm font-bold uppercase rounded-xl"
            >
              अपलोड करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
