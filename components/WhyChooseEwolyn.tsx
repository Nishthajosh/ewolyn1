import { FaCogs, FaGlobeAsia, FaIndustry, FaCertificate, FaBolt, FaBalanceScale, FaUniversity, FaChartBar } from "react-icons/fa";

const points = [
  {
    icon: <FaCogs className="text-2xl text-blue-500" />, title: "End-to-End Expertise",
    desc: "Comprehensive support from registration to growth."
  },
  {
    icon: <FaGlobeAsia className="text-2xl text-green-500" />, title: "Pan-India Coverage",
    desc: "Serving businesses in every state and city."
  },
  {
    icon: <FaIndustry className="text-2xl text-indigo-500" />, title: "Multi-Sector Experience",
    desc: "Solutions tailored for diverse industries."
  },
  {
    icon: <FaCertificate className="text-2xl text-emerald-500" />, title: "Quality & Certification Focus",
    desc: "Guidance for all major certifications and standards."
  },
  {
    icon: <FaBolt className="text-2xl text-yellow-500" />, title: "Faster Execution",
    desc: "Swift, streamlined processes for quick results."
  },
  {
    icon: <FaBalanceScale className="text-2xl text-blue-700" />, title: "Transparent Process",
    desc: "Clear, honest communication at every step."
  },
  {
    icon: <FaUniversity className="text-2xl text-green-700" />, title: "Government Linkages",
    desc: "Strong connections for scheme and subsidy access."
  },
  {
    icon: <FaChartBar className="text-2xl text-cyan-600" />, title: "Business Growth Support",
    desc: "Ongoing advisory for scaling and success."
  },
];

const WhyChooseEwolyn = () => (
  <section className="py-16 px-4 md:px-0">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 drop-shadow">Why Choose EWOLYN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white/80 shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-b-4 border-blue-200 hover:scale-105 transition-transform animate-fade-in"
          >
            <div className="mb-3">{p.icon}</div>
            <div className="text-lg font-bold text-blue-800 mb-1">{p.title}</div>
            <div className="text-sm text-blue-900/80">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseEwolyn;
