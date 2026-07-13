"use client";

import React, { useState } from "react";
import { BlogPost } from "../UI/Types.types";

export default function AllBlogs({
  blogs = [],
  handleLike
}: {
  blogs: BlogPost[];
  handleLike: (e: React.MouseEvent, blogId: string | number) => Promise<void>;
}) {
  const [activeCategory, setActiveCategory] = useState("सभी लेख");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [localLikes, setLocalLikes] = useState<Record<string | number, number>>({});

  const handleLikeClick = async (e: React.MouseEvent, blog: BlogPost) => {
    e.stopPropagation();
    setLocalLikes((prev) => ({
      ...prev,
      [blog.id]: (localLikes[blog.id] || Number(blog.likes)) + 1,
    }));
    await handleLike(e, blog.id);
  };

  const formattedBlogs = blogs.map((b) => ({
    ...b,
    image: b.imageUrl,
    excerpt: b.content.substring(0, 120) + "...",
    featured: b.id === "7",
  }));

  const categories = [
    "सभी लेख",
    ...Array.from(new Set(formattedBlogs.map((b) => b.category))),
  ];
  const isAll = activeCategory === "सभी लेख";

  const filteredGridBlogs = isAll
    ? formattedBlogs.filter((b) => !b.featured)
    : formattedBlogs.filter((b) => b.category === activeCategory);

  const featuredBlog = formattedBlogs.find((b) => b.featured);

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-[#2C1810] selection:bg-[#A63D00]/10 antialiased relative">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4A017]/20 pb-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/15 text-[#A63D00] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-3">
              पत्रिका एवं विचार
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C1810] leading-tight">
              ब्रज संदेश{" "}
              <span className="text-[#A63D00] font-sans font-light text-[0.6em] ml-2">
                | Insights & Updates
              </span>
            </h1>
            <p className="text-[#5C3A1E]/80 text-sm mt-3 font-light leading-relaxed">
              संस्था के सेवा कार्यों, पूज्य महाराज जी के दिव्य प्रवचनों, और
              सनातन संस्कृति से जुड़े नवीनतम लेखों का संग्रह।
            </p>
          </div>

          {/* SCROLLABLE CATEGORY BAR */}
          <div className="flex gap-2 overflow-x-auto pb-2 pt-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2C1810] text-[#F4D28C]"
                    : "bg-white text-[#5C3A1E]/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HERO BANNER */}
      {isAll && featuredBlog && (
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
          <div className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/15 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 h-[300px] h-[400px]">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://i.pinimg.com/1200x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg";
                }}
              />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-[#A63D00] text-xs font-bold">
                  {featuredBlog.category}
                </span>
                <h2 className="text-3xl font-bold">{featuredBlog.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium uppercase tracking-wider border-y border-gray-200 py-4">
                  <span className="flex items-center gap-1.5">
                    ✍️ {featuredBlog.author || "संस्था"}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedBlog(featuredBlog)}
                  className="text-sm font-bold text-[#A63D00] hover:underline text-start cursor-pointer"
                >
                  विस्तार से पढ़ें →
                </button>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    📅 {featuredBlog.publishDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    ❤️ {featuredBlog.likes} Likes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SUBHEADING FOR LATEST POSTS */}
      {isAll && (
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-6 text-left">
          <h3 className="font-serif text-xl font-bold text-[#2C1810]">
            नवीनतम प्रकाशन
          </h3>
          <div className="w-12 h-[2px] bg-[#A63D00] mt-1.5 rounded-full"></div>
        </div>
      )}

      {/* BLOGS MAIN GRID */}
      <section className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGridBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://i.pinimg.com/1200x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg";
                  }}
                />
                {/* Category Badge overlay */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#A63D00]">
                  {blog.category}
                </span>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-[11px] text-gray-400 font-medium">
                  <span>📅 {blog.publishDate}</span>
                  <span>•</span>
                  <span>✍️ {blog.author}</span>
                </div>

                <h4 className="font-serif text-xl font-bold text-[#2C1810] mb-3 leading-tight group-hover:text-[#A63D00] transition-colors">
                  {blog.title}
                </h4>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow line-clamp-3">
                  {blog.content}
                </p>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <button
                    onClick={(e) => handleLikeClick(e, blog)}
                    className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gray-400 hover:text-red-500 transition-colors cursor-pointer bg-pink-100/80 p-2 rounded-full"
                  >
                    <span>❤️</span>
                    {localLikes[blog.id] || blog.likes} Likes
                  </button>

                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="flex items-center gap-2 text-xs font-bold text-[#A63D00] hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    पूरा पढ़ें →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedBlog && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-[#2C1810]/60 backdrop-blur-sm">
          <div className="bg-white max-w-4xl w-full rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="bg-[#A63D00]/10 text-[#A63D00] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {selectedBlog.category}
              </span>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-xs font-bold text-gray-500 hover:text-[#A63D00] transition-colors"
              >
                ✕ बंद करें
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-6 leading-tight">
                {selectedBlog.title}
              </h1>

              {/* Improved Meta-Data Strip */}
              <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8 pb-6 border-b border-gray-100">
                <p className="flex items-center gap-2">
                  ✍️ {selectedBlog.author || "संस्था"}
                </p>
                <p className="flex items-center gap-2">
                  📅 {selectedBlog.publishDate}
                </p>

                <button
                  onClick={(e) => handleLikeClick(e, selectedBlog)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${
                    localLikes[selectedBlog.id]
                      ? "bg-red-50 border-red-100 text-red-600"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span>{localLikes[selectedBlog.id] ? "❤️" : "🤍"}</span>
                  {localLikes[selectedBlog.id] || selectedBlog.likes} Likes
                </button>
              </div>

              {/* Media */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gray-100 aspect-video shadow-inner">
                {/* ... (Video/Image logic same as before) ... */}
              </div>

              {/* Content */}
              <div className="prose prose-lg prose-brown max-w-none text-[#2C1810] leading-relaxed">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
