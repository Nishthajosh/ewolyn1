const testimonials = [
  {
    quote:
      "Clear, step-by-step guidance for registrations and certifications—made the process fast and stress-free.",
    name: "Startup Founder, SaaS",
  },
  {
    quote:
      "Documentation support and compliance checklists helped us qualify for government-aligned programs.",
    name: "MSME Owner, Manufacturing",
  },
  {
    quote:
      "Their funding-readiness approach improved our profile and accelerated responses from lenders.",
    name: "Founder, D2C Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-slate-50">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What businesses value about working with Ewolyn.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.quote} className="card">
              <p className="text-sm text-ink">“{t.quote}”</p>
              <p className="mt-3 text-xs font-medium text-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
