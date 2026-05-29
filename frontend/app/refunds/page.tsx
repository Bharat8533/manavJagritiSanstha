"use client";

import React, { useState } from "react";

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("charitable");

  const sections = [
    { id: "charitable", label: "1. Donations & Contributions" },
    { id: "bookings", label: "2. Katha & Yatra Bookings" },
    { id: "materials", label: "3. Consecrated Items (Kavach)" },
    { id: "technical", label: "4. Duplicate & Failed Transactions" },
    { id: "tax-implications", label: "5. 80G Tax Receipt Implications" },
    { id: "timeline", label: "6. Processing Timelines" },
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
            Financial & Cancellation Policy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4D28C] tracking-wide">
            Refund & Return Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4D28C]/70 font-light max-w-xl mx-auto">
            Transparent guidelines regarding donations, scheduling adjustments,
            and spiritual material distributions for
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
          <aside className="hidden lg:block lg:col-span-4 sticky top-20 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="font-serif text-lg font-bold text-[#F4D28C] mb-4 border-b border-white/10 pb-2">
              Policy Index
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
                href="/privacy-policy"
                className="block text-xs text-[#D4A017] hover:underline"
              >
                → View Privacy Policy
              </a>
            </div>
          </aside>

          {/* Right Text Content Column */}
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-12 backdrop-blur-sm">
            {/* Overview Callout banner */}
            <div className="bg-[#D4A017]/10 border-l-4 border-[#D4A017] p-5 rounded-r-xl">
              <h4 className="font-serif font-bold text-[#F4D28C] text-sm sm:text-base">
                Spiritual Intent & Legal Clarity
              </h4>
              <p className="text-xs text-[#F4D28C]/80 mt-1 leading-relaxed">
                As a registered non-profit religious trust, resources submitted
                online are immediately committed to local projects like buying
                cattle feed or restoration raw materials. We request our global
                family of devotees to carefully review the terms below before
                making a financial commitment.
              </p>
            </div>

            {/* Section 1 */}
            <section id="charitable" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                1. Pure Charitable Donations (Gau Seva, Temple & General Seva)
              </h2>
              <div className="text-sm text-white/80 space-y-3 leading-relaxed font-light">
                <p>
                  Any funds specifically offered for{" "}
                  <strong className="text-[#D4A017] font-normal">
                    Gau Seva (Cow Funding)
                  </strong>
                  ,
                  <strong className="text-[#D4A017] font-normal">
                    {" "}
                    Temple Restoration (मंदिर जीर्णोद्धार)
                  </strong>
                  , or
                  <strong className="text-[#D4A017] font-normal">
                    {" "}
                    General Donation (सामान्य दान)
                  </strong>{" "}
                  are treated as absolute voluntary contributions toward the
                  trust's public charitable activities.
                </p>
                <p>
                  Once a donation transaction is completed and authorized by the
                  payment gateway,{" "}
                  <strong>it cannot be canceled, refunded, or revoked</strong>.
                  These funds are immediately pooled and deployed to procure cow
                  fodder, pay local artisans, or distribute food packages.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="bookings" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                2. Event Registrations & Booking Management (Katha & Braj Yatra)
              </h2>
              <div className="text-sm text-white/80 space-y-4 leading-relaxed font-light">
                <div>
                  <h4 className="font-semibold text-[#D4A017] text-sm">
                    Katha Booking (कथा बुकिंग):
                  </h4>
                  <p className="text-xs text-white/70 mt-1">
                    Dates reserved for Maharaj Ji's sacred personalized Kathas
                    involve upfront logistics, venue locks, and schedule
                    assignments. Cancellations made by the devotee within 15
                    days of the scheduled date are non-refundable. However,
                    changes to dates can be adjusted dynamically based on
                    Maharaj Ji's future availability calendar, subject to
                    approval by the Trust's administrative desk.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#D4A017] text-sm">
                    Braj Yatra (ब्रज यात्रा):
                  </h4>
                  <p className="text-xs text-white/70 mt-1">
                    Braj Yatra seats are strictly limited. If a registered
                    pilgrim is unable to join due to unavoidable emergency
                    situations, they must inform us 7 days prior to the travel
                    date. A partial credit note may be issued for future yatras
                    at the absolute discretion of the trust management. No
                    direct cash refunds are processed for no-shows.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="materials" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                3. Consecrated Spiritual Items (Narayan Kavach)
              </h2>
              <div className="text-sm text-white/80 space-y-3 leading-relaxed font-light">
                <p>
                  The{" "}
                  <strong className="text-[#D4A017] font-normal">
                    Narayan Kavach (नारायण कवच)
                  </strong>{" "}
                  is distributed as a sacred, spiritually consecrated item
                  blessing households. It does not qualify under standard
                  commercial retail products.
                </p>
                <p>
                  We do not offer direct item returns or refunds for consecrated
                  items once shipped from the Vrindavan administrative desk. In
                  the rare event that the package is severely damaged during
                  transit by third-party delivery services, a replacement
                  Narayan Kavach will be shipped to you at no extra cost upon
                  submission of photographic proof to our helpdesk.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="technical" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                4. Duplicate Payments & Failed Transaction Adjustments
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                During peak donation periods or spiritual festivals, technical
                network dropouts or gateway time-outs may occur.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/70 space-y-2">
                <p>
                  <strong className="text-[#F4D28C]">Duplicate Debits:</strong>{" "}
                  If your bank account is debited twice for a single
                  transaction, or if an excess amount is transferred due to a
                  technical error, you are fully entitled to a refund for the
                  excess amount.
                </p>
                <p>
                  <strong className="text-[#F4D28C]">Reporting Window:</strong>{" "}
                  The devotee must submit a refund application via email to our
                  desk within <strong>7 working days</strong> from the
                  transaction date, providing the original bank statement
                  showing the transaction IDs.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="tax-implications" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                5. Income Tax Implications (Section 80G Receipts)
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                In absolute compliance with the guidelines issued by the{" "}
                <strong className="text-[#F4D28C]">
                  Income Tax Department of India
                </strong>
                :
              </p>
              <div className="pl-4 border-l-2 border-[#A63D00] text-xs text-white/70 space-y-2">
                <p>
                  Once the Trust issues an official tax exemption certificate
                  under **Section 80G** and uploads the details to the Income
                  Tax portal via **Form 10BD**,{" "}
                  <strong>
                    no refund claims can be entertained under any circumstances
                  </strong>
                  .
                </p>
                <p>
                  Modifying or canceling processed funds after tax entries are
                  locked violates national direct tax tracking standards. Please
                  review your input data and donation purpose carefully before
                  checking out.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="timeline" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                6. Refund Processing Timelines
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                Approved refunds for technical errors are handled transparently
                and sent back through the original payment channel:
              </p>
              <table className="w-full text-left text-xs text-white/70 border border-white/10 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-white/5 text-[#F4D28C] font-serif font-bold">
                    <th className="p-3 border-b border-white/10">
                      Payment Mechanism Used
                    </th>
                    <th className="p-3 border-b border-white/10">
                      Estimated Processing Window
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-light">
                  <tr>
                    <td className="p-3">UPI / Net Banking</td>
                    <td className="p-3 font-mono text-[#D4A017]">
                      5 to 7 Working Days
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Indian Credit & Debit Cards</td>
                    <td className="p-3 font-mono text-[#D4A017]">
                      10 to 12 Working Days
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Authorized NRI Payment Loops</td>
                    <td className="p-3 font-mono text-[#D4A017]">
                      12 to 15 Working Days
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[11px] text-white/40 italic mt-2">
                * Note: Processing delays may vary slightly depending on the
                administrative cycles of the clearing banks involved.
              </p>
            </section>

            {/* Trust Contact Desk Card */}
            <hr className="border-white/10 my-8" />
            <div className="bg-gradient-to-br from-[#3D1E12] to-[#2C1810] border border-[#D4A017]/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h4 className="font-serif font-bold text-[#F4D28C] text-base">
                  Accounts & Transaction Desk
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  Need to report a duplicate debit or verify a payment
                  transaction status?
                </p>
                <div className="mt-3 space-y-1 text-xs text-[#F4D28C]/80 font-mono">
                  <p>📍 Vrindavan, Mathura District, Uttar Pradesh, India</p>
                  <p>✉️ accounts@manavjagritisanstha.org</p>
                </div>
              </div>
              <a
                href="mailto:accounts@manavjagritisanstha.org"
                className="shrink-0 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 transition-transform active:scale-95 hover:brightness-110 shadow-md"
              >
                Submit Transaction Ticket
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
