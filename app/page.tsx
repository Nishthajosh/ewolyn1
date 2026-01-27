"use client";
import WhyChooseEwolyn from "@/components/WhyChooseEwolyn";
import CTAStrip from "@/components/CTAStrip";
import { useState } from "react";
import HeroBusinessSection from "@/components/HeroBusinessSection";
import ConsultationModal from "@/components/ConsultationModal";
import LogoGrid from "@/components/LogoGrid";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import BusinessImpactStats from "@/components/BusinessImpactStats";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import FundingOptions from "@/components/FundingOptions";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";



export default function HomePage() {
  // Modal state for consultation popup (to be implemented in next steps)
  const [showConsultation, setShowConsultation] = useState(false);
  return (
    <main>
      {/* 1. HERO / BUSINESS DISCUSSION SECTION with inline inquiry form */}
      <HeroBusinessSection onOpenConsultation={() => setShowConsultation(true)} />

      {/* TRUST & CREDIBILITY BAR */}
      <LogoGrid />

      {/* HOW EWOLYN WORKS (4 STEPS) */}
      <section className="section bg-process-section">
        <ProcessSteps />
      </section>

      {/* SERVICES SECTION (FundingOptions) */}
      <section className="section">
        <FundingOptions />
      </section>

      {/* GOVERNMENT SCHEMES */}
      <section className="section" style={{ background: 'linear-gradient(90deg, #F8FAFC 60%, #E6F7FA 100%)' }}>
        <GovernmentSchemes />
      </section>

      {/* WHY CHOOSE EWOLYN GRID SECTION */}
      <WhyChooseEwolyn />

      {/* BUSINESS IMPACT / TRACK RECORD SECTION */}
      <BusinessImpactStats />

      {/* CALL-TO-ACTION STRIP */}
      <CTAStrip onCTAClick={() => setShowConsultation(true)} />
  {/* FREE CONSULTATION MODAL POPUP */}
  <ConsultationModal open={showConsultation} onClose={() => setShowConsultation(false)} />

      {/* TESTIMONIALS */}
      <section className="section">
        <Testimonials />
      </section>

      {/* FINAL CTA SECTION (Short Form) */}
      <section className="section" style={{ background: 'linear-gradient(90deg, #1FA2B1 0%, #4AC7CF 100%)' }}>
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Evolve Your Business?</h2>
            <p className="text-lg text-white/90 mb-6">Get a free, no-obligation consultation with our experts. Discover your eligibility and funding options in minutes.</p>
          </div>
          <form className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col gap-5 animate-fade-in">
            <input
              id="name-final"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="phone-final"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="business-type-final"
              name="businessType"
              type="text"
              required
              placeholder="Business Type (e.g. Manufacturing, Services)"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="funding-final"
              name="funding"
              type="text"
              required
              placeholder="Funding Requirement (₹)"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <button type="submit" className="btn w-full py-3 text-lg font-semibold rounded-lg">
              Get Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER is included globally in layout, so not repeated here */}
    </main>
  );
}
