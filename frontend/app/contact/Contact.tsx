"use client";

import React, { useState } from "react";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";

export default function ContactPage() {
  // Pure UI form ki centralized state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    sevaInterest: "सामान्य पूछताछ",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Partial field updating handler
  const handleFormChange = (updatedFields: Partial<typeof formState>) => {
    setFormState((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  // Form submission orchestrator logic
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Submitting form data directly from ContactPage:", formState);
    
    // Yahan aap apni API call inject kar sakte hain:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formState) })

    setSubmitted(true);
    
    // Form reset logic state updates ke saath
    setFormState({
      name: "",
      email: "",
      phone: "",
      sevaInterest: "सामान्य पूछताछ",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-[#2C1810] selection:bg-[#A63D00]/10 antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/15 text-[#A63D00] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full">
            सम्पर्क सूत्र | Connect With Us
          </span>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-[#2C1810] leading-tight">
            संस्था से जुड़ें एवं <span className="text-[#A63D00]">सहयोग करें</span>
          </h1>
          <p className="text-[#5C3A1E]/80 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            गौ सेवा, धरोहर संरक्षण या सत्संग आयोजनों से सम्बंधित किसी भी प्रकार की जानकारी या सहयोग के लिए आप हमारे सेवा केंद्र से सीधे संपर्क कर सकते हैं।
          </p>
          <div className="w-16 h-[2px] bg-[#D4A017]/40 mx-auto pt-1" />
        </div>
      </section>

      {/* 2. COMBINED FORM & DETAILS GRID */}
      <section className="pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Presentation Component */}
          <ContactDetails />
          
          {/* Controlled Component sending state and action handlers down */}
          <ContactForm 
            formState={formState}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            submitted={submitted}
          />
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <GoogleMap />
      
    </div>
  );
}