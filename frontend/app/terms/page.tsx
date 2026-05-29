"use client";

import React, { useState } from "react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", label: "1. Definitions & Agreement" },
    { id: "services", label: "2. Sacred Activities & Services" },
    { id: "compliance", label: "3. Constitutional Governance" },
    { id: "user-conduct", label: "4. Devotee Code of Conduct" },
    { id: "ip", label: "5. Intellectual Property" },
    { id: "liability", label: "6. Limitation of Liability" },
    { id: "jurisdiction", label: "7. Governing Law" },
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
            Master Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4D28C] tracking-wide">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F4D28C]/70 font-light max-w-xl mx-auto">
            Please read these core operational rules carefully before
            interacting with the digital platform of
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
              Document Index
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
                href="/privacy-policy"
                className="block text-xs text-[#D4A017] hover:underline"
              >
                → View Privacy Policy
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
            {/* Modular Policy Linked Warning Map */}
            <div className="bg-gradient-to-r from-[#D4A017]/10 to-transparent border-l-4 border-[#D4A017] p-5 rounded-r-xl space-y-2">
              <h4 className="font-serif font-bold text-[#F4D28C] text-sm sm:text-base">
                Looking for Refunds or Data Privacy?
              </h4>
              <p className="text-xs text-[#F4D28C]/80 leading-relaxed">
                This document strictly handles portal utilization rules,
                religious service frameworks, and general organizational
                accountability. For data collection questions, view our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#D4A017] underline font-medium"
                >
                  Privacy Policy
                </a>
                . For booking balances, cancelations, or transaction reversals,
                see our dedicated{" "}
                <a
                  href="/refund-policy"
                  className="text-[#D4A017] underline font-medium"
                >
                  Refund & Cancellation Policy
                </a>
                .
              </p>
            </div>

            {/* Section 1 */}
            <section id="definitions" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                1. Definitions & Acceptance of Terms
              </h2>
              <div className="text-sm text-white/80 space-y-3 leading-relaxed font-light">
                <p>
                  The terms{" "}
                  <strong className="text-[#D4A017] font-normal">
                    "Trust," "We," "Us,"
                  </strong>{" "}
                  or{" "}
                  <strong className="text-[#D4A017] font-normal">"Our"</strong>{" "}
                  refer explicitly to
                  <strong> Manav Jagriti Sanstha</strong>, a registered spiritual
                  public trust operating from the holy land of Vrindavan,
                  Mathura, Uttar Pradesh, India.
                </p>
                <p>
                  The terms{" "}
                  <strong className="text-[#D4A017] font-normal">
                    "User," "Devotee," "Pilgrim,"
                  </strong>{" "}
                  or{" "}
                  <strong className="text-[#D4A017] font-normal">"You"</strong>{" "}
                  refer to any individual, family, or corporate entity browsing
                  this platform, registering for yatras, reserving holy
                  functions, or offering charitable financial support.
                </p>
                <p>
                  By interacting with our platform, using transactional
                  gateways, or filling out booking request slots, you verify
                  that you have read, understood, and agreed to this master
                  agreement frame.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="services" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                2. Sacred Activities & Service Provisioning Terms
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                By processing any registration, order, or donation through this
                platform, you agree to the specific operational frameworks
                defined for each cause managed by the Trust:
              </p>

              {/* Dynamic Grid Mapping Specific Activities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Gau Seva (गौ सेवा)",
                    desc: "Contributions are deployed to supply nutritious feed, construction infrastructure, and premium medical care to thousands of Gau Mata safely sheltered inside our ashram gaushalas.",
                  },
                  {
                    title: "Katha Booking (कथा बुकिंग)",
                    desc: "Enables devotees to invite spiritual blessings by planning Maharaj Ji's sacred Katha schedules for weddings, poojas, child-birth ceremonies, or special corporate spiritual clusters.",
                  },
                  {
                    title: "Braj Yatra (ब्रज यात्रा)",
                    desc: "Secures limited seating arrangements for guided spiritual pilgrimages covering Vrindavan, Mathura, and Govardhan under Maharaj Ji's spiritual guidance.",
                  },
                  {
                    title: "Narayan Kavach (नारायण कवच)",
                    desc: "Requests are handled for distributing genuine, spiritually consecrated Narayan Kavach defensive protections to provide celestial blessings and shielding to households.",
                  },
                  {
                    title: "Temple Restoration (मंदिर जीर्णोद्धार)",
                    desc: "Financial assistance goes directly toward stone masonry, architectural preservation, and structural re-activation of neglected heritage temples throughout the historical Braj region.",
                  },
                  {
                    title: "General Donation (सामान्य दान)",
                    desc: "Unrestricted open funding covering multiple dynamic sectors, from our free daily Anna Daan distribution to educational initiatives, moving resources swiftly where the need is highest.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <h5 className="font-serif font-bold text-[#D4A017] text-sm mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-white/70 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 italic">
                * Note: Yatra seating allocations and direct live Katha booking
                calendar reservations remain strictly subject to availability
                parameters and direct validation logs processed by our backend
                office.
              </p>
            </section>

            {/* Section 3 */}
            <section id="compliance" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                3. Constitutional & Statutory Indian Law Compliance
              </h2>
              <div className="text-sm text-white/80 space-y-3 leading-relaxed font-light">
                <p>
                  As an authenticated public charitable trust, our financial
                  channels, physical distributions, and global user protocols
                  operate strictly under Indian statutory bounds:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                  <li>
                    <strong>The Indian Trusts Act, 1882:</strong> All
                    administrative activities and financial allocations strictly
                    adhere to the regulatory frameworks of the state of Uttar
                    Pradesh.
                  </li>
                  <li>
                    <strong>KYC Verification Rules:</strong> Donors and patrons
                    transferring funds over this system are required to present
                    genuine identification parameters (such as an accurate
                    10-digit PAN or Aadhaar indices) to uphold banking sector
                    guidelines.
                  </li>
                  <li>
                    <strong>Regulatory Audit Standards:</strong> Money
                    allocations towards cow funding, material item deliveries
                    (Narayan Kavach), and heritage restoration are subject to
                    routine evaluation by independent auditors to ensure
                    absolute compliance with public trust standards.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="user-conduct" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                4. Devotee Code of Conduct & Site Usage
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                While browsing our media channels, reserving katha schedules, or
                interacting with our team, you agree to treat the spiritual
                sanctity of Vrindavan Dham with absolute respect. You are
                explicitly prohibited from:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                <li>
                  Using offensive, derogatory, or culturally insensitive
                  language in our contact portals, booking requests, or public
                  forums.
                </li>
                <li>
                  Attempting to compromise the digital security of our platform,
                  introducing malicious scripts, or interfering with our payment
                  gateway layers.
                </li>
                <li>
                  Falsifying identification factors, sharing invalid transaction
                  metadata, or misrepresenting your legal identity when filling
                  out support forms.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="ip" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                5. Intellectual Property & Sacred Content Protection
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                All media components present on this platform—including
                photographic portraits of deities, video parikrama feeds,
                textual recordings, architectural blueprints of our old-age
                shelter homes, and branding logs—belong natively to Manav
                Jagriti Sanstha. Mirroring, replicating, or parsing this material
                for commercial or unverified external distributions without
                legal trust stamp permissions will invite strict enforcement
                action.
              </p>
            </section>

            {/* Section 6 */}
            <section id="liability" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                The Trust utilizes secure, banking-grade encryption networks to
                parse registration records and process donations safely. Manav
                Jagriti Sanstha assumes no structural liability for unexpected
                portal dropouts, transaction errors on the bank's processing
                page, or failure of logistics networks regarding the
                distribution of consecrated spiritual materials like the Narayan
                Kavach.
              </p>
            </section>

            {/* Section 7 */}
            <section id="jurisdiction" className="scroll-mt-6 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F4D28C] border-b border-white/10 pb-2">
                7. Governing Law & Judicial Jurisdiction
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                These constitutional rules are interpreted and managed entirely
                under the legal codes of the Republic of India. Any litigation,
                transaction audits, or programmatic disputes originating from
                using our digital interfaces will fall strictly under the single
                exclusive jurisdiction of the courts of{" "}
                <strong className="text-[#D4A017]">
                  Mathura / Vrindavan, Uttar Pradesh, India
                </strong>
                .
              </p>
            </section>

            {/* Trust Contact Desk Card */}
            <hr className="border-white/10 my-8" />
            <div className="bg-gradient-to-br from-[#3D1E12] to-[#2C1810] border border-[#D4A017]/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h4 className="font-serif font-bold text-[#F4D28C] text-base">
                  Trust Administration Desk
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  Have questions about our operational rules, yatra bookings, or
                  governance?
                </p>
                <div className="mt-3 space-y-1 text-xs text-[#F4D28C]/80 font-mono">
                  <p>📍 Vrindavan, Mathura District, Uttar Pradesh, India</p>
                  <p>✉️ support@manavjagritisanstha.org</p>
                </div>
              </div>
              <a
                href="mailto:support@manavjagritisanstha.org"
                className="shrink-0 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4A017] to-[#A63D00] text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 transition-transform active:scale-95 hover:brightness-110 shadow-md"
              >
                Contact Legal Desk
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
