"use client";

import React, { useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("collection");

  const sections = [
    { id: "collection", label: "1. Information We Collect" },
    { id: "usage", label: "2. How Your Data Is Utilized" },
    { id: "protection", label: "3. Data Security & Retention" },
    { id: "sharing", label: "4. Third-Party Disclosures" },
    { id: "statutory", label: "5. Indian Statutory Compliance" },
    { id: "rights", label: "6. Devotee Data Rights" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#2C1810] text-white selection:bg-[#D4A017] selection:text-[#2C1810]">
      {/* Decorative Traditional Border Header Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-[#D4A017] via-[#A63D00] to-[#D4A017]" />

      {/* Hero Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#2C1810] to-[#3D1E12] py-16 px-4 text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4A017] rounded-full blur-3xl" />
          <div className="absolute bottom-5 right-10 w-72 h-72 bg-[#A63D00] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4A017] mb-4">
            Data Protection Framework
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4D28C] tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4D28C]/70 font-light max-w-xl mx-auto">
            Your trust is our sacred responsibility. Learn how we safeguard your
            personal details and transactional logs across the platforms of
            <span className="text-[#D4A017] font-normal">
              {" "}
              Manav Jagriti Sanstha Trust
            </span>
            , Vrindavan.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            <span>Last Updated:</span>
            <span className="text-[#F4D28C]">May 2026</span>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          {/* Desktop Left Fixed Navigation Column */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="font-serif text-lg font-bold text-[#F4D28C] mb-4 border-b border-white/10 pb-2">
              Privacy Sections
            </h3>
            <nav className="space-y-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 text-xs font-medium uppercase tracking-wider rounded-xl transition-all duration-300 border ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white border-transparent shadow-md translate-x-1"
                      : "text-white/60 hover:text-white hover:bg-white/5 border-transparent"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Quick links to the other 2 standalone pages */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
              <h4 className="text-xs font-bold text-[#F4D28C] uppercase tracking-wider">
                Other Standalone Policies
              </h4>
              <a
                href="/terms-and-conditions"
                className="block text-xs text-[#D4A017] hover:underline"
              >
                → View Terms & Conditions
              </a>
              <a
                href="/refund-policy"
                className="block text-xs text-[#D4A017] hover:underline"
              >
                → View Refund & Cancellation Policy
              </a>
            </div>
          </aside>

          {/* Right Text Content Column */}
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-12 backdrop-blur-sm">
            {/* Zero Commercial Intent Guarantee Callout Banner */}
            <div className="bg-gradient-to-r from-[#A63D00]/20 to-transparent border-l-4 border-[#A63D00] p-5 rounded-r-xl">
              <h4 className="font-serif font-bold text-[#F4D28C] text-sm sm:text-base">
                Zero Commercial Monetization Pledge
              </h4>
              <p className="text-xs text-[#F4D28C]/80 mt-1 leading-relaxed">
                Manav Jagriti Sanstha Trust functions strictly as a non-commercial
                public spiritual organization. We do not engage in
                data-brokering, affiliate cross-tracking, or profile marketing.
                Your personal and financial details are used solely to fulfill
                your requested spiritual services and issue statutory tax
                credits.
              </p>
            </div>

            {/* Section 1 */}
            <section id="collection" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                1. Data Metrics We Collect From Devotees
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                To process your sacred contributions and handle event schedules
                smoothly, we assemble targeted metrics strictly during active
                user sessions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                <li>
                  <strong>Identity Logs:</strong> Legal Name, primary Email,
                  WhatsApp communication number, and local Postal Address
                  requested during checkout or contact forms.
                </li>
                <li>
                  <strong>Statutory Tax Parameters:</strong> Permanent Account
                  Number (PAN) details and billing indices, legally required
                  under Indian tax law to safely process your 80G tax exemption
                  certificates.
                </li>
                <li>
                  <strong>Event Execution Specifics:</strong> Family lists and
                  astrological preference inputs recorded for personalized{" "}
                  <strong className="text-[#D4A017] font-normal">
                    Katha Bookings
                  </strong>
                  , or identification metrics needed to secure authorized
                  seating logs for the guided{" "}
                  <strong className="text-[#D4A017] font-normal">
                    Braj Yatra
                  </strong>
                  .
                </li>
                <li>
                  <strong>Device Metadata:</strong> Basic anonymized IP
                  addresses, browser variants, and standard analytical event
                  telemetry processed by our cloud hosting framework to check
                  service uptime.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="usage" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                2. How Your Personal Information Is Safely Utilized
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                The collection of devotee parameters remains restricted to
                administrative deployment loops:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h5 className="font-serif font-bold text-[#D4A017] text-sm mb-1">
                    Service Fulfillment
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Dispatching consecrated{" "}
                    <strong className="text-[#F4D28C]">Narayan Kavach</strong>{" "}
                    items safely to your doorstep, mapping hotel and logistical
                    schedules for the pilgrimage, and securing calendar holds
                    for your home Katha ceremonies.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h5 className="font-serif font-bold text-[#D4A017] text-sm mb-1">
                    Official Declarations
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Generating dynamic e-receipts for digital{" "}
                    <strong className="text-[#F4D28C]">Gau Seva</strong> or
                    general donations, and transmitting official financial
                    statements directly to your email inbox.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="protection" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                3. Data Security, Encryption, & Retention Policies
              </h2>
              <div className="text-sm text-white/80 space-y-3 leading-relaxed font-light">
                <p>
                  All transactional loops and text data streams handled on this
                  platform are wrapped in secure{" "}
                  <strong className="text-[#D4A017] font-normal">
                    256-bit Secure Socket Layer (SSL) encryption protocols
                  </strong>
                  .
                </p>
                <p>
                  Our internal administrative panels run behind strict firewall
                  parameters, ensuring your identity details are shielded from
                  public web exposure.
                </p>
                <p>
                  <strong>Financial Data Protection Note:</strong> The Trust
                  completely avoids storing raw credit card combinations,
                  net-banking codes, or UPI pin structures inside our internal
                  databases. All monetary actions leverage direct,
                  RBI-authorized banking nodes running on compliant payment
                  gateway aggregators.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                4. Third-Party Disclosures & Cloud Processing Infrastructure
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                We safely share selective data shards only with proven
                operational partners explicitly tasked with handling your
                digital choices:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                <li>
                  <strong>Logistics Operations:</strong> Handing over your
                  verified mailing coordinates to regional courier teams to
                  distribute your consecrated Narayan Kavach items.
                </li>
                <li>
                  <strong>Payment Processors:</strong> Sharing checkout sums
                  securely with authenticated gateway frameworks to finalize
                  online donation receipts.
                </li>
                <li>
                  <strong>Statutory Authorities:</strong> Disclosing financial
                  identity variables to the Income Tax Department of India for
                  legal auditing and formal 80G tax processing loops.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="statutory" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                5. Statutory Indian Information Technology Law Adherence
              </h2>
              <div className="pl-4 border-l-2 border-[#D4A017] text-xs text-white/70 space-y-2">
                <p>
                  This security manifesto operates in strict alignment with{" "}
                  <strong className="text-[#F4D28C]">
                    Section 43A of the Information Technology Act, 2000 (India)
                  </strong>{" "}
                  and the accompanying{" "}
                  <strong className="text-[#F4D28C]">
                    Reasonable Security Practices and Procedures Rules
                  </strong>
                  .
                </p>
                <p>
                  By choosing to input identity metrics on our platform, you
                  explicitly consent to the data collection loops outlined in
                  this policy context.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="rights" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                6. Devotee Rights Over Personal Data
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                As a member of our spiritual family, you retain absolute
                authority over your digital presence. You have the right to
                request a digital breakdown of your registered metadata, update
                incomplete address labels, or ask for total removal of your
                records from our outreach lists. You can activate these
                preferences instantly by opening a case ticket with our trust
                desk.
              </p>
            </section>

            {/* Privacy Grievance Officer Desk Card */}
            <hr className="border-white/10 my-8" />
            <div className="bg-gradient-to-br from-[#3D1E12] to-[#2C1810] border border-[#D4A017]/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h4 className="font-serif font-bold text-[#F4D28C] text-base">
                  Privacy Grievance Officer
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  Have questions about our security layers, cookies, or need to
                  erase your contact history?
                </p>
                <div className="mt-3 space-y-1 text-xs text-[#F4D28C]/80 font-mono">
                  <p>📍 Manav Jagriti Sanstha Admin Block, Vrindavan, India</p>
                  <p>✉️ privacy@manavjagritisanstha.org</p>
                </div>
              </div>
              <a
                href="mailto:privacy@manavjagritisanstha.org"
                className="shrink-0 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 transition-transform active:scale-95 hover:brightness-110 shadow-md"
              >
                Reach Privacy Desk
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Accent */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/40 bg-black/20">
        © 2026 Manav Jagriti Sanstha Trust. All Rights Reserved. Devotedly serving
        Vrindavan Dham.
      </footer>
    </div>
  );
}
