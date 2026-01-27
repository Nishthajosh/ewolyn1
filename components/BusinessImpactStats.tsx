import { FaSmile, FaChartLine, FaRupeeSign, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaSmile className="text-3xl text-emerald-500" />,
    value: "700+",
    label: "Happy Clients",
    desc: "Businesses empowered with our expert guidance."
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-500" />,
    value: "96%",
    label: "Success Rate",
    desc: "Consistent results with a transparent process."
  },
  {
    icon: <FaRupeeSign className="text-3xl text-emerald-600" />,
    value: "₹70 Cr+",
    label: "Funded",
    desc: "Capital facilitated for MSME & startups."
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-blue-600" />,
    value: "28+",
    label: "States Covered",
    desc: "Pan-India reach for business support."
  },
];

export default function BusinessImpactStats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Our Business Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={
                `relative flex flex-col items-center text-center bg-white rounded-[2.5rem] shadow-xl px-6 py-10 transition-transform hover:scale-105 ` +
                (idx % 2 === 0 ? 'border-t-4 border-emerald-400' : 'border-t-4 border-blue-400')
              }
              style={{ boxShadow: '0 8px 32px 0 rgba(16, 112, 202, 0.10)' }}
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-extrabold text-blue-800 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold text-emerald-700 mb-2">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.desc}</div>
              {/* Decorative shape */}
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-tr from-emerald-200 to-blue-200 rounded-full blur-xl opacity-60 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
