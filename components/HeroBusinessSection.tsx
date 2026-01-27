import { useState } from "react";
import { BsFillTelephoneFill, BsCheckCircleFill } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";

const SERVICE_OPTIONS = [
  "Company Registration",
  "MSME Funding",
  "Certifications & Licenses",
  "Tax & Compliance",
  "Digital Solutions",
  "Electricity Duty & SGST Benefits",
];

export default function HeroBusinessSection({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [form, setForm] = useState({ name: "", mobile: "", service: SERVICE_OPTIONS[0] });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
  };
  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-0" style={{
      background: 'linear-gradient(120deg, #0a2540 0%, #1ec9a7 60%, #3a7bd5 100%)'
    }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Main Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Let’s Discuss Your Business Needs
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">
            Professional assistance for registrations, funding, compliance, and digital growth across India.
          </p>
          <ul className="flex flex-wrap gap-4 mb-8">
            <li className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow">
              <BsCheckCircleFill className="text-emerald-300" /> Free Consultation
            </li>
            <li className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow">
              <BsCheckCircleFill className="text-emerald-300" /> Expert Advisors
            </li>
            <li className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow">
              <BsCheckCircleFill className="text-emerald-300" /> Pan-India Reach
            </li>
            <li className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-white text-sm font-medium shadow">
              <BsCheckCircleFill className="text-emerald-300" /> Transparent Process
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:from-emerald-500 hover:to-blue-600 hover:scale-105 transition"
              onClick={onOpenConsultation}
              aria-label="Schedule Consultation"
            >
              <FaRegCalendarCheck /> Schedule Consultation
            </button>
            <a
              href="tel:+919737799937"
              className="flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 hover:scale-105 transition"
              aria-label="Call Now"
            >
              <BsFillTelephoneFill /> Call Now
            </a>
          </div>
        </div>
        {/* Right: Quick Inquiry Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md mx-auto md:mx-0 border-2 border-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Quick Inquiry</h2>
          <p className="text-slate-500 mb-6 text-sm">Get a callback from our experts</p>
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-blue-900 mb-1">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                pattern="[0-9]{10}"
                value={form.mobile}
                onChange={handleChange}
                className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="10-digit Mobile Number"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-blue-900 mb-1">Select Service</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold py-3 rounded-full shadow hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-400/30 rounded-full blur-3xl z-0" />
    </section>
  );
}
