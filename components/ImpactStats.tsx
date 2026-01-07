const stats = [
  { value: "20K+", label: "MSMEs Registered", sublabel: "On Udyam Portal" },
  { value: "₹500Cr+", label: "Credit Facilitated", sublabel: "Since 2020" },
  { value: "95%", label: "Success Rate", sublabel: "Approval Rate" },
  { value: "28/36", label: "Pan India Coverage", sublabel: "States & UTs" },
];

const topStates = [
  { state: "Maharashtra", count: "82L+" },
  { state: "Tamil Nadu", count: "49L+" },
  { state: "Gujarat", count: "41L+" },
  { state: "Uttar Pradesh", count: "39L+" },
  { state: "Karnataka", count: "34L+" },
];

const sectors = [
  { name: "Manufacturing", percent: 31, icon: "🏭" },
  { name: "Trading", percent: 36, icon: "🛒" },
  { name: "Services", percent: 33, icon: "💼" },
];

const highlights = [
  "₹4.14L Cr MUDRA loans",
  "₹7,593 Cr SRI Fund invested",
  "200+ RAMP proposals approved",
  "20.5% Women-owned MSMEs",
];

export default function ImpactStats() {
  return (
    <section className="section bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand/10 text-brand text-sm font-medium px-4 py-1 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Driving MSME Success <span className="text-brand">Across India</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            4.77 crore MSMEs registered on Udyam portal, transforming India&apos;s economic landscape
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="card text-center bg-white">
              <div className="text-4xl font-extrabold text-brand">{s.value}</div>
              <div className="mt-2 font-semibold text-ink">{s.label}</div>
              <div className="text-sm text-muted">{s.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pan-India Presence */}
          <div className="card bg-white">
            <h3 className="text-xl font-bold text-ink mb-6">Pan-India Presence</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-brand">28/36</div>
                <div className="text-sm text-muted">Active States</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-ink">West India</div>
                <div className="text-sm text-muted">Top Region</div>
              </div>
            </div>
            <h4 className="font-semibold text-ink mb-3">Top MSME States</h4>
            <div className="space-y-2">
              {topStates.map((item) => (
                <div key={item.state} className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-muted">{item.state}</span>
                  <span className="font-semibold text-ink">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Distribution */}
          <div className="card bg-white">
            <h3 className="text-xl font-bold text-ink mb-6">Sector Distribution</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {sectors.map((sector) => (
                <div key={sector.name} className="text-center">
                  <div className="text-4xl mb-2">{sector.icon}</div>
                  <div className="text-2xl font-bold text-brand">{sector.percent}%</div>
                  <div className="text-sm text-muted">{sector.name}</div>
                </div>
              ))}
            </div>
            
            {/* Highlights */}
            <div className="bg-slate-900 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Government Support Programs</h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm">
                    <span className="text-brand">✓</span>
                    <span className="text-slate-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
