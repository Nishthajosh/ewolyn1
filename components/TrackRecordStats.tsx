import { FaUserCheck, FaChartLine, FaRupeeSign, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserCheck className="text-3xl text-green-500" />,
    value: "700+",
    label: "Happy Clients",
    desc: "Businesses across India trust us for reliable, timely solutions."
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-500" />,
    value: "96%",
    label: "Success Rate",
    desc: "Our expert team ensures your application gets the best chance."
  },
  {
    icon: <FaRupeeSign className="text-3xl text-indigo-500" />,
    value: "₹70 Cr+",
    label: "Funded",
    desc: "We’ve enabled crores in funding for MSMEs and startups."
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-emerald-500" />,
    value: "28+",
    label: "States Covered",
    desc: "Our services reach every corner of India, urban and rural."
  },
];

const TrackRecordStats = () => (
  <section className="py-14 px-4 md:px-0">
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`rounded-2xl shadow-xl bg-white/70 backdrop-blur-md p-6 flex flex-col items-center text-center border-b-4 ${
            i % 2 === 0 ? "border-blue-400" : "border-green-400"
          } hover:scale-105 transition-transform duration-200 animate-fade-in`}
        >
          <div className="mb-2">{stat.icon}</div>
          <div className="text-3xl font-extrabold text-blue-900 mb-1">{stat.value}</div>
          <div className="text-lg font-semibold text-blue-700 mb-1">{stat.label}</div>
          <div className="text-sm text-blue-900/70 mt-1">{stat.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrackRecordStats;
