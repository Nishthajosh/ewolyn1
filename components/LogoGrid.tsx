// Strategic partners - text-based display
const partners = [
  { name: "SIDBI", color: "text-blue-700" },
  { name: "Startup India", color: "text-orange-600" },
  { name: "HDFC Bank", color: "text-blue-800" },
  { name: "MUDRA", color: "text-green-700" },
  { name: "NABARD", color: "text-green-800" },
  { name: "SBI", color: "text-blue-600" },
  { name: "Bank of Baroda", color: "text-orange-700" },
  { name: "CGTMSE", color: "text-purple-700" },
];

const certifications = [
  { title: "DPIIT Recognition", description: "Officially recognized by DPIIT", icon: "✓" },
  { title: "ISO 9001:2015", description: "Quality management certified", icon: "✓" },
  { title: "GeM Registered", description: "Government e-Marketplace vendor", icon: "✓" },
  { title: "Top 100 Fintech", description: "Leading emerging fintech", icon: "✓" },
];

export default function LogoGrid() {
  return (
    <section className="section bg-white">
      <div className="container-max">
        {/* Trusted Network Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-medium text-brand">Trusted Network</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-ink">
          Our Strategic <span className="text-brand">Partners</span>
        </h2>
        <p className="text-center text-muted mt-3">
          Collaborating with leaders to bring you the best funding solutions
        </p>

        {/* Partner Logos Grid - Text Based */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-brand/30 transition"
            >
              <span className={`text-lg font-bold ${partner.color}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications & Recognitions */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-ink mb-8">
            Certifications & Recognitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{cert.title}</h4>
                  <p className="text-sm text-muted">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-white text-center">
          <p className="text-lg">
            Facilitated over <span className="text-brand font-bold">₹500 Crore</span> in MSME funding through strategic partnerships
          </p>
          <p className="text-slate-400 mt-2">Trusted by 20,000+ businesses across India</p>
        </div>
      </div>
    </section>
  );
}
