"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Image, Video, Upload, Link } from "lucide-react";
import { BlogPost } from "./Types.type";

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: BlogPost | null; // एडिट के लिए पुराना डेटा (अगर उपलब्ध हो)
  onSubmit: (
    formData: Omit<
      BlogPost,
      "id" | "publishDate" | "likes" | "imageUrl" | "uploadedVideoUrl"
    >,
    imageFile: File | null,
    videoFile: File | null,
    isEditMode: boolean,
  ) => void;
}

export default function BlogFormModal({
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: BlogFormModalProps) {
  const isEditMode = !!initialData;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("सनातन विचार एवं साधना");
  const [author, setAuthor] = useState("पूज्य महाराज श्री के सानिध्य से");
  const [content, setContent] = useState("");
  const [status] = useState<"Published" | "Draft">("Published");

  // मीडिया प्रिव्यू स्टेट्स
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadedVideoPreview, setUploadedVideoPreview] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState("");

  // असली फ़ाइल ऑब्जेक्ट्स
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // जब भी initialData बदलेगा (या मोडल खुलेगा/बंद होगा), फॉर्म की स्टेट रीसेट या लोड होगी
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        // Edit Mode: पुरानी वैल्यूज भरें
        setTitle(initialData.title || "");
        setCategory(initialData.category || "सनातन विचार एवं साधना");
        setAuthor(initialData.author || "पूज्य महाराज श्री के सानिध्य से");
        setContent(initialData.content || "");
        setVideoUrl(initialData.videoUrl || "");
        setImagePreview(initialData.imageUrl || "");
        setUploadedVideoPreview(initialData.uploadedVideoUrl || "");
      } else {
        // Add Mode: फॉर्म को खाली (Clear) करें
        setTitle("");
        setCategory("सनातन विचार एवं साधना");
        setAuthor("पूज्य महाराज श्री के सानिध्य से");
        setContent("");
        setVideoUrl("");
        setImagePreview("");
        setUploadedVideoPreview("");
      }
      setImageFile(null);
      setVideoFile(null);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const previewUrl = URL.createObjectURL(file);
      setUploadedVideoPreview(previewUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // क्रिटिकल वैलिडेशन: Add मोड में इमेज ज़रूरी है, Edit मोड में पुरानी इमेज चल सकती है
    if (!title || !content) {
      alert("कृपया शीर्षक और लेख सामग्री अवश्य लिखें।");
      return;
    }
    if (!isEditMode && !imageFile) {
      alert("कृपया मुख्य पोस्टर छवि अवश्य अपलोड करें।");
      return;
    }

    onSubmit(
      {
        title,
        category,
        author,
        status,
        content,
        ...(videoUrl && { videoUrl }),
      },
      imageFile,
      videoFile,
      isEditMode,
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-3xl border border-[#1E0F0A]/10 p-6 shadow-2xl relative space-y-4 my-8 mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="font-serif text-lg font-bold text-[#1E0F0A]">
            {isEditMode
              ? "✍️ आध्यात्मिक लेख का संपादन (Edit)"
              : "🚀 नवीन आध्यात्मिक लेख क्रिएटर (Add)"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-medium text-[#2C1810]">
              ब्लॉग का पावन शीर्षक (Title) *
            </label>
            <input
              type="text"
              required
              placeholder="शीर्षक लिखें..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border rounded-xl p-3 text-sm font-serif focus:border-[#A63D00] focus:outline-none"
            />
          </div>

          {/* MEDIA SECTION */}
          <div className="p-4 bg-[#FFF9EE]/50 border border-[#A63D00]/10 rounded-2xl space-y-4">
            <p className="font-serif font-bold text-[#A63D00] text-xs flex items-center gap-1">
              <Image className="w-4 h-4" /> डिजिटल मीडिया / दृश्य अनुलग्नक
              (Poster & Videos)
            </p>

            {/* Poster Upload */}
            <div className="space-y-2">
              <label className="font-medium text-[#2C1810] block">
                लेख का मुख्य पोस्टर (Image Upload) {!isEditMode && "*"}
              </label>
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  onClick={() => imageInputRef.current?.click()}
                  className="inline-flex items-center gap-2 bg-white border border-[#A63D00]/20 text-[#A63D00] px-4 py-2.5 rounded-xl font-bold cursor-pointer hover:bg-[#FFF9EE]"
                >
                  <Upload className="w-4 h-4" /> डिवाइस से पोस्टर चुनें
                </button>
                {imagePreview && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border">
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview("");
                        setImageFile(null);
                      }}
                      className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <hr className="border-[#1E0F0A]/5" />

            {/* Video Controls */}
            <div className="space-y-3">
              <label className="font-medium text-[#2C1810] block">
                कथा प्रसंग वीडियो जोड़ें (वैकल्पिक)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 bg-white p-3 rounded-xl border border-[#1E0F0A]/5">
                  <span className="text-[10px] font-bold text-[#5C3A1E]/60 block uppercase">
                    Option A: Direct Upload
                  </span>
                  <input
                    type="file"
                    accept="video/*"
                    ref={videoInputRef}
                    onChange={handleVideoChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => videoInputRef.current?.click()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF8F5] border border-dashed text-gray-600 px-3 py-2 rounded-lg font-medium cursor-pointer text-[11px]"
                  >
                    <Video className="w-3.5 h-3.5" /> MP4/MOV वीडियो अपलोड करें
                  </button>
                  {uploadedVideoPreview && (
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[10px] text-green-600 font-medium truncate">
                        ✓ वीडियो फाइल लोड हो चुकी है
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedVideoPreview("");
                          setVideoFile(null);
                        }}
                        className="text-red-500 hover:text-red-700 text-[10px]"
                      >
                        हटाएं
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2 bg-white p-3 rounded-xl border border-[#1E0F0A]/5">
                  <span className="text-[10px] font-bold text-[#5C3A1E]/60 block uppercase">
                    Option B: Online Link
                  </span>
                  <div className="relative">
                    <Link className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      placeholder="यूट्यूब वीडियो लिंक पेस्ट करें..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full bg-[#FAF8F5] border rounded-lg py-2 pl-8 pr-2 text-[11px] focus:outline-none focus:border-[#A63D00]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories & Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-medium text-[#2C1810]">
                साहित्य श्रेणी
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border rounded-xl p-3 focus:border-[#A63D00] focus:outline-none"
              >
                <option>सनातन विचार एवं साधना</option>
                <option>श्रीमद्भागवत प्रसंग कथा</option>
                <option>श्रीरामचरितमानस दर्शन</option>
                <option>भजन एवं स्तोत्र संग्रह</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-medium text-[#2C1810]">
                लेखक / स्त्रोत
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white border rounded-xl p-3 focus:border-[#A63D00] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-medium text-[#2C1810]">
              लेख की मुख्य विषय-वस्तु (Content) *
            </label>
            <textarea
              required
              placeholder="यहाँ अपने दिव्य विचार विस्तार से लिखें..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full bg-white border rounded-xl p-3 text-xs resize-none focus:border-[#A63D00] focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-gray-200 text-[#5C3A1E] font-medium cursor-pointer"
            >
              रद्ध करें
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#A63D00] text-white font-bold cursor-pointer"
            >
              {isEditMode ? "साहित्य अपडेट करें" : "साहित्य प्रकाशित करें"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
