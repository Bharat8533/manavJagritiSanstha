"use client";

import React, { useState } from "react";
import { Leaf, Heart, BookOpen, Users, Target } from "lucide-react";
import { joinAsVolenteer } from "@/services/user.services";

export default function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    age: "",
    gender: "Male",
    qualification: "Student",
    occupation: "",
    area_of_seva: "Braj Seva / Gauseva",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await joinAsVolenteer(formData);
      alert(res.data.message);
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#2C1810]">
      {/* Hero Section - Warm and Inviting */}
      <header className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-[#D4A017] font-semibold tracking-widest uppercase text-sm mb-4 block">
              Seva | Service | Community
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2C1810] mb-6 leading-tight">
              Join Our Mission to <br /> Serve the Braj Region
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Our trust is built on the foundation of selfless service. We
              invite you to offer your time and skills to help us empower lives
              in Mathura-Vrindavan.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content - Value Based */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Why Volunteer Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Areas of Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Braj Seva",
                desc: "Dedicated efforts to preserve and serve the sacred land of Braj.",
              },
              {
                icon: Heart,
                title: "Gauseva",
                desc: "Caring for cows with devotion, providing them shelter, food, and medical aid.",
              },
              {
                icon: BookOpen,
                title: "Sanatan Dharma",
                desc: "Working towards the upliftment and preservation of our eternal values.",
              },
              {
                icon: Users,
                title: "Dev Mandir Sudhar",
                desc: "Restoring and maintaining the sanctity of our ancient local temples.",
              },
              {
                icon: Target,
                title: "Sanatan Gyan Prachar",
                desc: "Spreading the light of Vedic wisdom and spiritual knowledge to all.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#FFF9F0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4A017] transition-colors">
                  <item.icon
                    className="text-[#D4A017] group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2C1810]">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="apply" className="py-20 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-orange-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -mr-20 -mt-20 -z-0"></div>

            <div className="mb-10 relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C1810] mb-4">
                Volunteer Registration
              </h2>
              <p className="text-slate-500 text-lg">
                Join our mission. Please provide your details so we can align
                your Seva with our needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Full Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Age, Gender & Qualification */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                    Qualification
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all cursor-pointer"
                  >
                    <option value="Student">Student</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
              </div>

              {/* Occupation */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Professional Background / Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all"
                />
              </div>

              {/* Area of Seva */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Area of Seva Interest
                </label>
                <select
                  name="area_of_seva"
                  value={formData.area_of_seva}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all cursor-pointer"
                >
                  <option value="Braj Seva / Gauseva">
                    Braj Seva / Gauseva
                  </option>
                  <option value="Education & Mentorship">
                    Education & Mentorship
                  </option>
                  <option value="Digital/Tech Support">
                    Digital/Tech Support
                  </option>
                  <option value="Event Management">Event Management</option>
                </select>
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Why do you want to join us?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:border-[#D4A017] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C1810] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#4A2B1B] active:scale-[0.98] transition-all shadow-xl shadow-[#2C1810]/20 mt-4"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
