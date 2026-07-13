"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  User,
  Video,
  FileEdit,
  Trash2,
  Heart,
  Calendar,
  Eye,
  X,
} from "lucide-react";
import { BlogPost } from "@/components/Admin/components/Types.type";

interface BlogsViewProps {
  posts: BlogPost[];
  onOpenModal: () => void;
  onEditModal: (blog: BlogPost) => void; // संपादन के लिए नया हैंडलर प्रोप
  onDeletePost: (id: string) => void;
}

export default function BlogsView({
  posts = [],
  onOpenModal,
  onEditModal,
  onDeletePost,
}: BlogsViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = posts.filter(
    (item) =>
      item?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.category?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#A63D00] uppercase bg-[#A63D00]/5 px-2.5 py-1 rounded-md mb-2 inline-block">
            ज्ञान गंगा साहित्य अनुभाग
          </span>
          <h1 className="font-serif text-2xl font-bold text-[#1E0F0A]">
            ब्लॉग एवं आध्यात्मिक लेख प्रबंधन
          </h1>
        </div>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 bg-[#A63D00] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer hover:bg-[#853100] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> नया लेख लिखें
        </button>
      </div>

      {/* Table & Search */}
      <div className="bg-white rounded-3xl border border-[#1E0F0A]/5 p-6 shadow-sm space-y-6">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#5C3A1E]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="शीर्षक या श्रेणी से खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#1E0F0A]/5 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-[#A63D00]/30 transition-colors"
          />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center font-serif text-sm text-[#5C3A1E]/60">
            कोई आध्यात्मिक लेख नहीं मिला।
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#1E0F0A]/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E0F0A]/5 text-[10px] font-bold text-[#5C3A1E]/40 uppercase bg-[#FAF8F5]">
                  <th className="py-3.5 px-4">पोस्टर एवं विवरण</th>
                  <th className="py-3.5 px-4">श्रेणी</th>
                  <th className="py-3.5 px-4">लेखक</th>
                  <th className="py-3.5 px-4">प्रकाशन तिथि</th>
                  <th className="py-3.5 px-4">स्थिति</th>
                  <th className="py-3.5 px-4 text-center">पसंद</th>
                  <th className="py-3.5 px-4 text-center">क्रियाएं</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E0F0A]/5 text-xs">
                {filteredPosts.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#FAF8F5]/50 transition-colors"
                  >
                    <td className="py-4 px-4 max-w-sm">
                      <div className="flex gap-3 items-start">
                        <img
                          src={
                            row.imageUrl ||
                            "https://placehold.co/150x150/FFF9EE/A63D00?text=साहित्य"
                          }
                          alt={row.title}
                          className="w-12 h-12 rounded-lg object-cover border border-[#1E0F0A]/10 flex-shrink-0 bg-[#FAF8F5]"
                          loading="lazy"
                        />
                        <div className="space-y-0.5 max-w-[240px]">
                          <div className="font-serif font-bold text-[#2C1810] text-sm flex items-center gap-1.5 flex-wrap">
                            <span className="line-clamp-1">{row.title}</span>
                            {(row.videoUrl || row.uploadedVideoUrl) && (
                              <span className="bg-red-50 text-red-600 px-1 py-0.5 rounded text-[8px] font-bold flex items-center gap-0.5 shrink-0">
                                <Video className="w-2.5 h-2.5" /> VIDEO
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#5C3A1E]/60 line-clamp-1">
                            {row.content || row.content}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="inline-block text-[#A63D00] bg-[#FFF9EE] border border-[#A63D00]/10 px-2.5 py-1 rounded-md text-[11px] font-medium">
                        {row.category}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-[#5C3A1E] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="max-w-[120px] truncate">
                          {row.author}
                        </span>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-[#5C3A1E]/70 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{row.publishDate}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          row.status === "Published"
                            ? "bg-green-50 text-green-700 border-green-200/50"
                            : "bg-gray-50 text-gray-600 border-gray-200/50"
                        }`}
                      >
                        {row.status === "Published" ? "लाइव" : "मंसूदा"}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-center text-red-600 font-bold whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                        <span>{row.likes || 0}</span>
                      </div>
                    </td>

                    {/* Actions Panel */}
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => setSelectedPost(row)}
                          title="डेटा विज़ुअलाइज़ करें"
                          className="p-1.5 rounded-lg bg-[#FFF9EE] text-[#A63D00] border border-[#A63D00]/10 hover:bg-[#A63D00] hover:text-white transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        {/* अपडेट किया गया एडिट बटन */}
                        <button
                          onClick={() => onEditModal(row)}
                          title="संपादित करें"
                          className="p-1.5 rounded-lg bg-[#FAF8F5] text-gray-500 hover:bg-[#A63D00] hover:text-white transition-colors cursor-pointer"
                        >
                          <FileEdit className="w-3.5 h-3.5" />
                        </button>

                        <button
                          title="हटाएं"
                          onClick={() => onDeletePost(row.id || "")}
                          className="p-1.5 rounded-lg bg-[#FAF8F5] text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ================= DATA VISUALIZATION MODAL ================= */}
      {selectedPost && (
        <div className="fixed inset-0 z-[120] bg-[#1E0F0A]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl border border-[#1E0F0A]/10 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 border-b border-[#1E0F0A]/5 flex items-center justify-between bg-[#FAF8F5]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A63D00]">
                  {selectedPost.category}
                </span>
                <h3 className="font-serif font-bold text-[#1E0F0A] text-base">
                  साहित्य पूर्ण अवलोकन
                </h3>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl bg-white border border-[#1E0F0A]/5 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#1E0F0A]">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-[#1E0F0A]/5 bg-[#FAF8F5]">
                <img
                  src={
                    selectedPost.imageUrl ||
                    "https://placehold.co/600x300/FFF9EE/A63D00?text=साहित्य"
                  }
                  alt="Full preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#1E0F0A]/70 text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  ID: #{selectedPost.id}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-xl font-bold text-[#2C1810]">
                  {selectedPost.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-xs text-[#5C3A1E]/70 bg-[#FFF9EE]/50 p-3 rounded-xl border border-[#A63D00]/5">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#A63D00]" />
                    <span>
                      <b>लेखक:</b> {selectedPost.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#A63D00]" />
                    <span>
                      <b>तिथि:</b> {selectedPost.publishDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span>
                      <b>लाइक्स:</b> {selectedPost.likes || 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#A63D00]">
                    সংক্ষিপ্ত सारांश:
                  </h4>
                  <p className="bg-[#FAF8F5] p-3 rounded-xl italic border-l-4 border-[#A63D00] text-[#5C3A1E]">
                    "{selectedPost.content || "कोई सारांश उपलब्ध नहीं है।"}"
                  </p>
                </div>

                <div className="space-y-1 pt-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#A63D00]">
                    पूर्ण कथा / सामग्री:
                  </h4>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl text-xs leading-relaxed max-h-48 overflow-y-auto whitespace-pre-line border border-[#1E0F0A]/5">
                    {selectedPost.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
