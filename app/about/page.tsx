"use client";
import React from "react";
import WhyChooseEwolyn from "@/components/WhyChooseEwolyn";
import ConsultationModal from "@/components/ConsultationModal";
import CTAStrip from "@/components/CTAStrip";
import TrackRecordStats from "@/components/TrackRecordStats";
import InquiryForm from "@/components/InquiryForm";
import AboutHero from "@/components/AboutHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";

export default function AboutPage() {
  const [showModal, setShowModal] = React.useState(false);
  const handleCTAClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  return (
    <main className="section bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen">
      <div className="container-max max-w-4xl py-10">
        <AboutHero onCTAClick={handleCTAClick} />
        <div className="mt-12">
          <InquiryForm />
        </div>
        <div className="mt-12">
          <TrackRecordStats />
        </div>
        <div className="mt-12">
          <CTAStrip onCTAClick={handleCTAClick} />
        </div>
        <div className="mt-16">
          <WhyChooseEwolyn />
        </div>
      </div>
      <ConsultationModal open={showModal} onClose={handleModalClose} />
    </main>
  );
}
