"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/home/HeroSection";
import DonationServices from "@/components/home/DonationServices";
import DonationPlans from "@/components/home/DonationPlans";
import About from "@/components/home/About";
import CtaSection from "@/components/home/CtaSection";
import Gallery from "@/components/home/Gallery";
import Blogs from "@/components/home/Blogs";
import Testimonial from "@/components/home/Testimonial";
import {
  fetchReviews,
  sendUserReview,
  fetchNewBlogs,
  fetchMembershipPlans,
  fetchBanners,
} from "@/services/user.services";
import toast, { Toaster } from "react-hot-toast";

interface Blog {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  category: string;
  publishDate: string;
}

interface Plan {
  id: string;
  plan_name: string;
  price: string;
  features: string[] | string;
}

const page = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [membershipPlans, setMembershipPlans] = useState<Plan[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    text: "",
  });
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [banners, setBanners] = useState<any[]>([]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetchReviews();
      if (response) {
        setTestimonials(response);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetchNewBlogs();
      if (response && Array.isArray(response)) {
        setBlogs(response);
      }
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
  };

  const fetchMembershipPlan = async () => {
    try {
      const response = await fetchMembershipPlans();
      if (response && Array.isArray(response)) {
        const cleanedData = response.map((plan: any) => ({
          ...plan,
          name: plan.plan_name,
          features:
            typeof plan.features === "string"
              ? JSON.parse(plan.features)
              : plan.features || [],
        }));
        setMembershipPlans(cleanedData);
      }
    } catch (error) {
      console.error("Error fetching membership plans:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTestimonial = async () => {
    if (!formData.name || !formData.text) return false;

    try {
      const response = await sendUserReview(formData);
      if (response.status) {
        const newReview = {
          name: formData.name,
          location: formData.location,
          text: formData.text,
        };
        setFormData({ name: "", location: "", text: "" });
        toast.success(response.message);
        return true;
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error submitting feedback");
    }
    return false;
  };

  const getBanners = async () => {
    try {
      const banners = await fetchBanners();
      setBanners(banners);
    } catch (error) {
      console.error("Error fetching banners:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchTestimonials();
    fetchBlogs();
    fetchMembershipPlan();
    getBanners();
  }, []);

  const filtered_banner = banners.filter((banner) => banner.page === "home");

  console.log("Filtered Banners:", filtered_banner);
  return (
    <div>
      <Toaster />
      <div className="h-2 w-full bg-gradient-to-r from-[#D4A017] via-[#A63D00] to-[#D4A017]" />
      <Hero banners={filtered_banner} />
      <DonationServices />
      <DonationPlans plans={membershipPlans} />
      <About />
      {/* <Gallery /> */}
      <Testimonial
        list={testimonials}
        formData={formData}
        onInputChange={handleInputChange}
        onAddTestimonial={handleAddTestimonial}
      />
      <Blogs blogs={blogs} />
      <CtaSection />
    </div>
  );
};


export const dynamic = "force-dynamic";

export default page;
