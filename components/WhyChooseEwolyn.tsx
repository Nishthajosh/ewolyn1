
import { FaCogs, FaGlobeAsia, FaIndustry, FaShieldAlt, FaClock, FaExchangeAlt, FaUniversity, FaChartBar } from "react-icons/fa";

const points = [
  {
    icon: <FaCogs className="text-2xl text-emerald-500" />,
    title: "End-to-End Business Solutions",
    desc: "Comprehensive support for every business stage."
  },
  {
    icon: <FaGlobeAsia className="text-2xl text-blue-500" />,
    title: "Pan-India Service Network",
    desc: "Serving clients across 28+ states and territories."
  },
  {
    icon: <FaIndustry className="text-2xl text-emerald-600" />,
    title: "Multi-Industry Experience",
    desc: "Expertise spanning manufacturing, services, and more."
  },
  {
    icon: <FaShieldAlt className="text-2xl text-blue-600" />,
    title: "Quality & Compliance Focus",
    desc: "Strict adherence to regulatory standards."
  },
  {
    icon: <FaClock className="text-2xl text-emerald-400" />,
    title: "Faster Turnaround Time",
    desc: "Swift processing for all business needs."
  },
  {
    icon: <FaExchangeAlt className="text-2xl text-blue-400" />,
    title: "Transparent Workflow",
    desc: "Clear, honest communication at every step."
  },
  {
    icon: <FaUniversity className="text-2xl text-emerald-500" />,
    title: "Government Process Support",
    desc: "Guidance through complex government procedures."
  },
  {
    icon: <FaChartBar className="text-2xl text-blue-500" />,
    title: "Growth-Oriented Approach",
    desc: "Strategies focused on scaling your business."
  },
];


const WhyChooseEwolyn = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-emerald-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Why Choose <span className="text-emerald-500">Ewolyn?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {points.map((point, idx) => (
          <div
            key={point.title}
            className={
              `relative flex flex-col items-center text-center bg-white rounded-[2.5rem] shadow-xl px-6 py-10 transition-transform hover:scale-105 ` +
              (idx % 2 === 0 ? 'border-b-4 border-emerald-400' : 'border-b-4 border-blue-400')
            }
            style={{ boxShadow: '0 8px 32px 0 rgba(16, 112, 202, 0.10)' }}
          >
            <div className="mb-4">{point.icon}</div>
            <div className="text-lg font-bold text-blue-800 mb-1">{point.title}</div>
            <div className="text-slate-500 text-sm">{point.desc}</div>
            {/* Decorative shape */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-tr from-emerald-200 to-blue-200 rounded-full blur-xl opacity-60 -z-10" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseEwolyn;
