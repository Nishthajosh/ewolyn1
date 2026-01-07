import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceGroups } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services",
    description:
      "Registration, certification, and digital growth services tailored for startups and MSMEs.",
  };
}

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container-max">
        <SectionHeading
          align="left"
          title="Services"
          subtitle="All Ewolyn offerings grouped for clarity and speed."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceGroups.map((g) => (
            <ServiceCard key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
