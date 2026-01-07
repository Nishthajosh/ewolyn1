import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Quick Application",
    time: "2 mins",
    desc: "Fill a simple 2-minute form with basic business details. Our smart system identifies the best funding options for your profile.",
    icon: "📋",
    color: "bg-purple-500",
  },
  {
    step: 2,
    title: "Expert Consultation",
    time: "24 hrs",
    desc: "Our funding experts analyze your needs and match with best schemes. Personalized guidance throughout the process.",
    icon: "👥",
    color: "bg-purple-500",
  },
  {
    step: 3,
    title: "Documentation",
    time: "3-5 days",
    desc: "We help prepare and submit all required documents with our simplified checklist. End-to-end support provided.",
    icon: "✓",
    color: "bg-orange-500",
  },
  {
    step: 4,
    title: "Approval & Disbursement",
    time: "15-25 days",
    desc: "Get approved and receive funds directly in your account. Direct bank transfer with complete transparency.",
    icon: "✓",
    color: "bg-green-500",
  },
];

const features = [
  { icon: "⏱", label: "Fast Approvals" },
  { icon: "📈", label: "95% Success" },
  { icon: "💰", label: "No Hidden Fees" },
  { icon: "🎧", label: "Expert Support" },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-medium text-brand">Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            How We <span className="text-brand">Secure Your Funding</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Our streamlined approach helps businesses get funded in as little as 15-25 days
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-orange-500 to-green-500 transform -translate-x-1/2 hidden md:block" />

          {steps.map((s, idx) => (
            <div key={s.step} className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Card */}
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded">
                      STEP {s.step}
                    </span>
                    <span className="text-muted text-sm flex items-center gap-1">
                      ⏱ {s.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-muted text-sm">{s.desc}</p>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                <div className={`w-14 h-14 rounded-full ${s.color} text-white flex items-center justify-center text-xl shadow-lg`}>
                  {s.icon}
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-10 text-center">
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                <span className="text-lg">{f.icon}</span>
                <span className="text-white text-sm">{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <h3 className="text-2xl font-bold text-white mb-6">GET STARTED TODAY</h3>
          <Link
            href="/funding"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Start Your Funding Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
