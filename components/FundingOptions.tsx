import Link from "next/link";

const fundingOptions = [
  {
    title: "Pradhan Mantri Mudra Yojana",
    description: "Collateral-free credit for non-farm micro enterprises under three categories.",
    tags: ["Collateral-free", "Micro"],
    success: "98%",
    time: "7-10 days",
    href: "/services/pm-mudra-yojana",
    popular: true,
  },
  {
    title: "PM Employment Generation Programme",
    description: "Margin money subsidy: 15-35% based on category and location.",
    tags: ["Subsidy", "New venture"],
    success: "92%",
    time: "30-45 days",
    href: "/funding",
    popular: true,
  },
  {
    title: "CGTMSE Credit Guarantee",
    description: "75-85% guarantee coverage on collateral-free credit facilities.",
    tags: ["Guarantee", "Collateral-free"],
    success: "95%",
    time: "15-20 days",
    href: "/funding",
    popular: false,
  },
  {
    title: "CLCS-TUS / MSME Champions",
    description: "Technology upgradation support with capital subsidy for MSMEs.",
    tags: ["Technology", "Upgrade"],
    success: "84%",
    time: "45-60 days",
    href: "/funding",
    popular: false,
  },
  {
    title: "SFURTI (Traditional Industries)",
    description: "Cluster-based support for artisans and traditional industries.",
    tags: ["Clusters", "Traditional"],
    success: "82%",
    time: "60-90 days",
    href: "/funding",
    popular: false,
  },
  {
    title: "PSB Loans in 59 Minutes",
    description: "Quick in-principle approval through digital platform with CGTMSE cover.",
    tags: ["Digital", "Quick approval"],
    success: "89%",
    time: "59 minutes*",
    href: "/funding",
    popular: false,
  },
];

export default function FundingOptions() {
  return (
    <section className="section bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Tailored <span className="text-brand">Funding Options</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Choose from India&apos;s leading MSME schemes—fast approvals, expert support, and minimal paperwork.
          </p>
        </div>

        {/* Funding Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fundingOptions.map((option) => (
            <div
              key={option.title}
              className="card bg-white hover:shadow-lg transition-shadow relative"
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⚡ Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-ink">{option.title}</h3>
              <p className="text-sm text-muted mt-2">{option.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {option.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-muted">Success</p>
                  <p className="font-bold text-green-600">{option.success}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Time</p>
                  <p className="font-bold text-ink">{option.time}</p>
                </div>
                <Link
                  href={option.href}
                  className="ml-auto text-brand hover:text-brand-dark"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Check Eligibility CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/funding"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Check Your Eligibility
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
