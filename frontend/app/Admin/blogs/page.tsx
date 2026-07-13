"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";
import { useAppSelector } from "@/store/hooks";
import BlogsView from "@/components/Admin/BlogsView";
import BlogFormModal from "@/components/Admin/components/BlogFormModal";
// मान लेते हैं कि आपके पास updateBlog API भी सेवाओं में है
import {
  uplaodBlog,
  fetchAllBlogs,
  updateBlog,
  deleteBlog,
} from "@/services/admin.services";
import { BlogPost } from "@/components/Admin/components/Types.type";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function AdminBlogsPage() {
  const activeTab = useAppSelector((state) => state.admin.activeTab);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // एडिट मोड को ट्रैक करने के लिए स्टेट
  const [currentBlog, setCurrentBlog] = useState<BlogPost | null>(null);

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const showNotification = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetchAllBlogs();
      if (response && response.status) {
        if (response.blogs) {
          setBlogs(response.blogs);
        } else if (response.data) {
          setBlogs(response.data);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      showNotification("डेटा लोड करने में विफल।", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "blogs") {
      loadBlogs();
    }
  }, [activeTab]);

  // नया लेख लिखने के लिए मोडल खोलना
  const handleOpenAddModal = () => {
    setCurrentBlog(null); // साफ़ करें ताकि Add मोड एक्टिव हो
    setIsModalOpen(true);
  };

  // एडिट करने के लिए मोडल खोलना
  const handleOpenEditModal = (blog: BlogPost) => {
    setCurrentBlog(blog); // इसमें पुरानी वैल्यूज होंगी जिससे Edit मोड एक्टिव होगा
    setIsModalOpen(true);
  };

  // Add और Edit दोनों को हैंडल करने वाला कंबाइंड सबमिट फंक्शन
  const handleSubmitForm = async (
    blogData: Omit<
      BlogPost,
      "id" | "publishDate" | "likes" | "imageUrl" | "uploadedVideoUrl"
    >,
    imageFile: File | null,
    videoFile: File | null,
    isEditMode: boolean,
  ) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", blogData.title);
      formData.append("category", blogData.category);
      formData.append("author", blogData.author);
      formData.append("content", blogData.content);
      formData.append("status", blogData.status);

      if (blogData.videoUrl) formData.append("videoUrl", blogData.videoUrl);
      if (imageFile) formData.append("image", imageFile);
      if (videoFile) formData.append("videoFile", videoFile);

      let response;
      if (isEditMode && currentBlog?.id) {
        formData.append("id", currentBlog.id);
        response = await updateBlog(currentBlog.id, formData);
      } else {
        response = await uplaodBlog(formData);
      }

      if (response && response.status) {
        showNotification(
          response.message ||
            `साहित्य सफलतापूर्वक ${isEditMode ? "अपडेट" : "प्रकाशित"} हुआ।`,
          "success",
        );
        setIsModalOpen(false);
        loadBlogs();
      } else {
        showNotification(response.message || "प्रक्रिया विफल रही।", "error");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      showNotification("सर्वर से जुड़ने में समस्या आ रही है।", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      const response = await deleteBlog(id);
      if(response && response.status){
        showNotification(response.message || "लेख सफलतापूर्वक हटा दिया गया है।", "success");
      }else {
        showNotification(response.message || "लेख हटाने में त्रुटि हुई।", "error");
      }
      showNotification("लेख सफलतापूर्वक हटा दिया गया है।", "success");
    } catch (error) {
      console.error("Error deleting blog:", error);
      showNotification("लेख हटाने में त्रुटि हुई।", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E0F0A] antialiased relative">
      {toast.show && (
        <div
          className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-xl backdrop-blur-md ${
            toast.type === "success"
              ? "bg-[#FFF9EE] border-[#A63D00]/20 text-[#A63D00]"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          <CheckCircle className="w-5 h-5 shrink-0" />
          <p className="font-serif text-xs font-bold tracking-wide">
            {toast.message}
          </p>
        </div>
      )}

      <Sidebar />
        <Navbar />
        <main className="md:ml-64 pt-24 px-4 sm:px-8 pb-12 max-w-7xl mx-auto">
          {activeTab === "blogs" ? (
            <>
              {loading && (
                <div className="text-xs text-center text-[#A63D00] font-bold mb-4 tracking-widest animate-pulse">
                  प्रक्रिया जारी है...
                </div>
              )}

              <BlogsView
                posts={blogs}
                onOpenModal={handleOpenAddModal}
                onEditModal={handleOpenEditModal} // नया प्रोप पास किया
                onDeletePost={handleDeletePost}
              />

              <BlogFormModal
                isOpen={isModalOpen}
                initialData={currentBlog}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmitForm}
              />
            </>
          ) : (
            <div className="h-[70vh] flex items-center justify-center bg-white rounded-3xl border border-[#1E0F0A]/5">
              <p className="text-xs text-[#5C3A1E]/60">
                प्रशासकीय अनुभाग सक्रिय नहीं है।
              </p>
            </div>
          )}
        </main>
    </div>
  );
}
