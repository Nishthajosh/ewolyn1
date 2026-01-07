import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description:
      "Get in touch with the Ewolyn team for consultations, funding-readiness support, and any service inquiries.",
  };
}

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container-max">
        <SectionHeading
          align="left"
          title="Contact Us"
          subtitle="Reach out for consultations, funding-readiness support, or any questions."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">Email</h3>
            <p className="mt-2 text-sm text-muted">{company.email}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">Hours</h3>
            <p className="mt-2 text-sm text-muted">Monday – Saturday, 9 AM – 6 PM IST</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">Coverage</h3>
            <p className="mt-2 text-sm text-muted">Pan-India, remote-first service</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink">Consultation Request</h3>
            <p className="mt-2 text-sm text-muted">Drop an email with your business stage, goal, and preferred time.</p>
          </div>
        </div>

        <form className="card mt-10 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-ink" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <CTASection />
    </main>
  );
}
