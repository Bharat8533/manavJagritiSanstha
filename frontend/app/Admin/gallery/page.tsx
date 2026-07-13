"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Trash2, Plus, Eye, Loader2, AlertCircle } from "lucide-react";
import AddImageModal from "@/components/Admin/AddImageModal";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import toast, { Toaster } from "react-hot-toast";
import {
  uploadImages,
  fetchGalleryImages,
  deleteImage,
} from "@/services/admin.services";

// डिफ़ॉल्ट इमेज का URL
const DEFAULT_IMAGE =
  "https://i.pinimg.com/736x/79/c6/88/79c6884756cd181fe7d979b545bf277b.jpg";

// Fallback Image Component
const GalleryImage = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      className={className}
      onError={() => setImgSrc(DEFAULT_IMAGE)}
      alt="Gallery"
    />
  );
};

export default function AdminGallery() {
  const [items, setItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const loadImages = useCallback(
    async (pageNum: number, isLoadMore = false) => {
      setLoading(true);
      try {
        const response = await fetchGalleryImages(pageNum);
        if (response?.status === "success") {
          setItems((prev) =>
            isLoadMore ? [...prev, ...response.data] : response.data,
          );
          setTotalPages(response.total_pages || 1);
        }
      } catch (error) {
        toast.error("डेटा लोड करने में समस्या हुई।");
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    loadImages(1);
  }, [loadImages]);

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteImage(id);
      if (response.status) {
        toast.success(response.message || "छवि हटा दी गई।");
        loadImages(1);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("छवि हटा नहीं दिया गया।");
    }
  };

  const handleUpload = async (files: FileList) => {
    try {
      const result = await uploadImages(files);
      if (result) {
        toast.success("अपलोड सफल रहा!");
        setIsModalOpen(false);
        setPage(1);
        loadImages(1);
      }
    } catch (err) {
      toast.error("अपलोड करने में त्रुटि हुई।");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A]">
      <Sidebar />
      <Navbar />
      <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
        <Toaster />

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-serif text-3xl font-bold">गैलरी प्रबंधन</h1>
            <p className="text-[#1E0F0A]/60 mt-1">
              आपकी अपलोड की गई सभी मीडिया फ़ाइलें
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#A63D00] text-white text-xs font-bold uppercase px-6 py-3 rounded-xl hover:bg-[#853100] transition-all flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" /> नई छवि जोड़ें
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white p-2 rounded-2xl border border-[#EBE7E0] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#F5F2EF]">
                  <GalleryImage
                    src={item.image_url}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Actions Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-100 transition-opacity">
                  <button
                    onClick={() => setPreviewImage(item.image_url)}
                    className="p-2 bg-white/90 backdrop-blur rounded-lg text-blue-600 shadow-sm hover:bg-blue-50 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-white/90 backdrop-blur rounded-lg text-red-600 shadow-sm hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-[#1E0F0A]/40 italic flex flex-col items-center">
              <AlertCircle className="w-10 h-10 mb-2 opacity-50" />
              कोई छवि उपलब्ध नहीं है।
            </div>
          )}
        </div>

        {/* Load More */}
        {page < totalPages && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setPage(page + 1);
                loadImages(page + 1, true);
              }}
              disabled={loading}
              className="px-8 py-3 bg-white border border-[#EBE7E0] rounded-xl text-xs font-bold uppercase hover:border-[#A63D00] transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "और लोड करें"
              )}
            </button>
          </div>
        )}
      </main>

      {/* Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setPreviewImage(null)} // बाहर क्लिक करने पर बंद हो जाएगा
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={previewImage}
              alt="Preview"
              className="max-h-[80vh] w-full object-contain rounded-lg shadow-2xl"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://i.pinimg.com/1200x/67/ba/8b/67ba8bfc008d217a8204e525fcb23b26.jpg")
              }
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 text-white font-bold cursor-pointer"
            >
              बंद करें (Close)
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <AddImageModal
          onClose={() => setIsModalOpen(false)}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
}
