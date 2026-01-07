import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description:
      "Learn about Ewolyn — empowering startups and MSMEs with compliant registrations, certifications, funding readiness, and digital growth services.",
  };
}

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container-max max-w-4xl">
        <SectionHeading
          align="left"
          title={`About ${company.name}`}
          subtitle={company.tagline}
        />

        <article className="prose prose-slate mt-8 max-w-none">
          <h2 className="section-title !text-2xl">Our Mission</h2>
          <p className="text-muted">
            To simplify and accelerate compliance, certification, and funding access for Indian
            startups and MSMEs—so founders spend less time on paperwork and more time building.
          </p>

          <h2 className="section-title !text-2xl mt-8">Our Vision</h2>
          <p className="text-muted">
            A thriving ecosystem where emerging businesses launch faster, qualify for the right
            programs, and operate with confidence—backed by expert, end-to-end enablement.
          </p>

          <h2 className="section-title !text-2xl mt-8">Why Choose Ewolyn</h2>
          <ul className="list-disc list-inside text-muted space-y-2">
            <li>20+ registration and licensing pathways</li>
            <li>15+ certification and compliance programs</li>
            <li>Funding-readiness advisory for schemes and lenders</li>
            <li>Digital growth services—design, content, social, and web</li>
            <li>Pan-India, remote-first support</li>
          </ul>
        </article>
      </div>
      <CTASection />
    </main>
  );
}
