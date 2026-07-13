'use client'

import React, { useState, useEffect } from "react";
import Hero from "@/components/blogs/Hero";
import AllBlogs from "@/components/blogs/AllBlogs";
import { BlogPost } from "@/components/UI/Types.types";
import { fetchNewBlogs, handleLikeBlog } from "@/services/user.services";
import toast, { Toaster } from "react-hot-toast";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetchNewBlogs();
      if (response && Array.isArray(response)) {
        setBlogs(response);
      }
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
  }

  const handleLike = async (e: React.MouseEvent, blogId: string | number) => {
  try {
    const response = await handleLikeBlog(blogId);
    if (response.status) {
      toast.success(response.message);
      fetchBlogs(); 
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    console.error(err);
    toast.error("Like failed!");
  }
};

  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <>
      <Toaster />
      <Hero />
      <AllBlogs blogs={blogs} handleLike={handleLike} />
    </>
  );
};

export default Blogs;

