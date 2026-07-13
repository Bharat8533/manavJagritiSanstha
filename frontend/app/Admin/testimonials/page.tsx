"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import {
  Check,
  X,
  Trash2,
  Eye,
  EyeOff,
  ShieldCheck,
  Clock,
} from "lucide-react";
import {
  getReviews,
  updateReviewStatus,
  updateReviewVisibility,
  deleteReview as deleteReviewService,
} from "@/services/admin.services";
import { toast, Toaster } from "react-hot-toast";

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [selectedReview, setSelectedReview] = useState<any>(null);

  const fetchReviews = async () => {
    try {
      const response = await getReviews();
      if (response) {
        const formattedData = response.map((item: any) => ({
          ...item,
          id: Number(item.id),
          isVisible: item.is_visible === "1",
        }));
        setReviews(formattedData);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleToggleVisibility = async (review: any) => {
    const newVisibility = !review.isVisible;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === review.id ? { ...r, isVisible: newVisibility } : r,
      ),
    );

    try {
      const response = await updateReviewVisibility(review.id, newVisibility ? 1 : 0);
      if(response && response.status){
        toast.success(response.message);
      }else{
        toast.error(response.message);
      }
    } catch {
      fetchReviews();
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    try {
      const response = await updateReviewStatus(id, status);
      if (response.status) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch {
      fetchReviews();
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("क्या आप इसे डिलीट करना चाहते हैं?")) return;
    setReviews((prev) => prev.filter((r) => r.id !== id));
    try {
      const response = await deleteReviewService(id);
      if(response.status){
        toast.success(response.message);
      }else{
        toast.error(response.message);
      }
    } catch {
      fetchReviews();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2C1810]">
      <Sidebar />
      <Navbar />
      <Toaster />
        <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
              Manage Testimonials
            </h1>
          </div>

          <div className="bg-white rounded-2xl border border-[#EAE4DF] overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-[#8B6B5C] uppercase font-bold text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">S/No</th>
                  <th className="p-4">Devotee</th>
                  <th className="p-4">Review</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Visibility</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4DF]">
                {reviews.map((review, index) => (
                  <tr key={review.id} className="hover:bg-[#FDFBF9]">
                    <td className="px-6">{index + 1}</td>
                    <td className="p-4">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-[10px] text-gray-700">
                        {review.location}
                      </p>
                    </td>
                    <td className="p-4 max-w-xs truncate text-gray-600">
                      {review.text}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold ${
                          review.status === "approved"
                            ? "bg-green-50 text-green-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {review.status === "approved" ? (
                          <ShieldCheck size={12} />
                        ) : (
                          <Clock size={12} />
                        )}
                        {review.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleToggleVisibility(review)}
                        className="text-[#A63D00] cursor-pointer"
                      >
                        {review.isVisible ? (
                          <Eye size={18} />
                        ) : (
                          <EyeOff size={18} className="text-gray-300" />
                        )}
                      </button>
                    </td>
                    <td className="p-4 flex justify-center gap-2">
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="text-blue-600 hover:bg-blue-50 p-1 rounded cursor-pointer"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>

                      {review.status !== "approved" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(review.id, "approved")
                          }
                          className="text-green-600 hover:bg-green-50 p-1 rounded cursor-pointer"
                          title="Approve"
                        >
                          <Check size={18} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="text-red-600 hover:bg-red-50 p-1 rounded cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {selectedReview && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-serif text-xl font-bold">
                  Devotee Feedback
                </h2>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="text-sm uppercase text-gray-500">
                    Name:
                  </strong>
                  <br />
                  {selectedReview.name}
                </p>
                <p>
                  <strong className="text-sm uppercase text-gray-500">
                    Location:
                  </strong>
                  <br />
                  {selectedReview.location}
                </p>
                <p>
                  <strong className="text-sm uppercase text-gray-500">
                    Full Review:
                  </strong>
                  <br />
                  {selectedReview.text}
                </p>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="mt-6 w-full py-2 bg-[#1E0F0A] text-white rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
