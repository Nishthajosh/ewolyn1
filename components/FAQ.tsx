const faqs = [
  {
    q: "What does Ewolyn help with?",
    a: "Ewolyn supports startups and MSMEs with company/NGO registrations, certifications (Startup India, ISO, ZED, and more), funding readiness, and digital growth services."
  },
  {
    q: "Do you assist with government-aligned certifications?",
    a: "Yes. We help prepare and file for programs like Startup India recognition, Section 80-IAC tax exemption, Udyam registration, ZED, ISO, and other scheme-linked compliances."
  },
  {
    q: "Can Ewolyn help me become funding-ready?",
    a: "We map relevant schemes and financing options for your stage, streamline documentation, and create a compliant package that improves eligibility and speeds up approvals."
  },
  {
    q: "Do you operate across India?",
    a: "Yes. We provide end-to-end, remote-first support for founders across all Indian states and union territories."
  }
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">Answers to common questions from founders.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="card">
              <h3 className="text-base font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
