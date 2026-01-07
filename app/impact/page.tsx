import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ImpactStats from "@/components/ImpactStats";
import CTASection from "@/components/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Impact",
    description:
      "See the breadth of Ewolyn's enablement services—coverage, categories, and pan-India support.",
  };
}

const highlights = [
  {
    title: "Registrations",
    desc: "Private Limited, LLP, Partnership, NGO, Section 8, CSR+, GeM, and many more.",
  },
  {
    title: "Certifications",
    desc: "Startup India, 80-IAC exemption, Udyam, ISO, ZED, DUNS, FSSAI, NSIC SPR.",
  },
  {
    title: "Funding Readiness",
    desc: "Eligibility mapping, scheme matching, compliant dossiers, and application support.",
  },
  {
    title: "Digital Growth",
    desc: "Branding, content, social, web, WhatsApp marketing, CRM & ERP setup.",
  },
];

export default function ImpactPage() {
  return (
    <main className="section">
      <div className="container-max">
        <SectionHeading
          align="left"
          title="Impact & Reach"
          subtitle="Breadth of solutions that accelerate compliance, certification, and funding."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{h.title}</h3>
              <p className="mt-2 text-sm text-muted">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ImpactStats />
      <CTASection />
    </main>
  );
}
