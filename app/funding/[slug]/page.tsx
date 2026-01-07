import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSchemeBySlug, governmentSchemes } from "@/lib/schemes";
import CTASection from "@/components/CTASection";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return governmentSchemes.map((scheme) => ({
    slug: scheme.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) return { title: "Scheme Not Found" };

  return {
    title: `${scheme.title} - Funding & Schemes`,
    description: scheme.shortDesc,
  };
}

export default function SchemeDetailPage({ params }: Props) {
  const scheme = getSchemeBySlug(params.slug);

  if (!scheme) {
    notFound();
  }

  return (
    <main className="section">
      <div className="container-max">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/funding" className="text-muted hover:text-brand">
            ← Back to All Schemes
          </Link>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className={`flex h-16 w-16 items-center justify-center rounded-xl text-3xl ${scheme.iconBg} text-white`}>
              {scheme.icon}
            </div>
            <div>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                scheme.category === "Loan" ? "bg-amber-100 text-amber-700" :
                scheme.category === "Grant" ? "bg-green-100 text-green-700" :
                scheme.category === "Subsidy" ? "bg-purple-100 text-purple-700" :
                scheme.category === "Tax Benefit" ? "bg-orange-100 text-orange-700" :
                scheme.category === "Certification" ? "bg-cyan-100 text-cyan-700" :
                scheme.category === "Registration" ? "bg-red-100 text-red-700" :
                "bg-slate-100 text-slate-700"
              }`}>
                {scheme.category}
              </span>
              <h1 className="mt-2 text-3xl font-bold text-ink">{scheme.title}</h1>
              <p className="mt-1 text-muted">{scheme.shortDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">{scheme.highlight}</div>
              <div className="text-xs text-muted">{scheme.highlightLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-ink">{scheme.timeline}</div>
              <div className="text-xs text-muted">Timeline</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">About This Scheme</h2>
              <p className="mt-4 text-muted leading-relaxed">{scheme.fullDescription}</p>
            </div>

            {/* Eligibility */}
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">Eligibility Criteria</h2>
              <ul className="mt-4 space-y-3">
                {scheme.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">Key Benefits</h2>
              <ul className="mt-4 space-y-3">
                {scheme.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand text-xs">★</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="card">
              <h2 className="text-xl font-semibold text-ink">Application Process</h2>
              <div className="mt-4 space-y-4">
                {scheme.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-muted">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Apply CTA */}
            <div className="card bg-gradient-to-br from-brand to-brand-dark text-white">
              <h3 className="text-lg font-semibold">Ready to Apply?</h3>
              <p className="mt-2 text-sm text-red-100">
                Let our experts guide you through the application process and maximize your chances of approval.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block w-full rounded-lg bg-white px-4 py-3 text-center font-medium text-brand hover:bg-red-50 transition"
              >
                Start Application →
              </Link>
            </div>

            {/* Documents Required */}
            <div className="card">
              <h3 className="text-lg font-semibold text-ink">Documents Required</h3>
              <ul className="mt-4 space-y-2">
                {scheme.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-brand">📄</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Info */}
            <div className="card">
              <h3 className="text-lg font-semibold text-ink">Quick Info</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Category</span>
                  <span className="font-medium text-ink">{scheme.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Timeline</span>
                  <span className="font-medium text-ink">{scheme.timeline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{scheme.highlightLabel}</span>
                  <span className="font-medium text-brand">{scheme.highlight}</span>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="card border-l-4 border-l-brand">
              <h3 className="font-semibold text-ink">Need Help?</h3>
              <p className="mt-2 text-sm text-muted">
                Our team can help you understand eligibility, prepare documents, and submit your application.
              </p>
              <Link href="/contact" className="mt-3 inline-block text-sm font-medium text-brand hover:underline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </main>
  );
}
