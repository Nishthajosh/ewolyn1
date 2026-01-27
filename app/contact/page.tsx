
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const contactCards = [
  {
    icon: <FaPhoneAlt className="text-xl text-emerald-500" />,
    title: "Phone Support",
    value: "+91 97377 99937",
    trust: "Direct line to our business advisors."
  },
  {
    icon: <FaEnvelope className="text-xl text-blue-500" />,
    title: "Email Assistance",
    value: "hello@ewolyn.co.in",
    trust: "Prompt, detailed responses to your queries."
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-emerald-600" />,
    title: "Office Address",
    value: "B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015",
    trust: "Visit us for in-person consultations."
  },
  {
    icon: <FaClock className="text-xl text-blue-600" />,
    title: "Working Hours",
    value: "Mon–Sat, 9 AM – 6 PM",
    trust: "Always available during business hours."
  },
];

const services = [
  "Company Registration",
  "MSME Funding",
  "Certifications & Licenses",
  "Tax & Compliance",
  "Digital Solutions",
  "Electricity Duty & SGST Benefits",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      {/* HERO SECTION */}
      <section className="relative py-16 px-4 md:px-0 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-2xl z-0" />
        <div className="absolute top-10 right-0 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl z-0" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 z-10">Let’s Connect & Grow Your Business</h1>
        <p className="text-lg text-blue-800/80 mb-8 z-10 max-w-2xl">
          Reach out to our experts for registrations, funding, compliance, and business growth solutions across India.
        </p>
        <div className="flex gap-6 justify-center mb-2 z-10">
          <FaPhoneAlt className="text-2xl text-emerald-400 animate-float" />
          <FaEnvelope className="text-2xl text-blue-400 animate-float delay-100" />
          <FaMapMarkerAlt className="text-2xl text-emerald-500 animate-float delay-200" />
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 px-4">
        {contactCards.map((card) => (
          <div key={card.title} className="flex flex-col items-center bg-white rounded-2xl shadow-lg py-6 px-4 transition hover:scale-105">
            <div className="mb-2">{card.icon}</div>
            <div className="font-bold text-blue-900 mb-1">{card.title}</div>
            <div className="text-emerald-700 text-lg mb-1">{card.value}</div>
            <div className="text-xs text-slate-500 text-center">{card.trust}</div>
          </div>
        ))}
      </section>

      {/* SMART CONTACT FORM SPLIT */}
      <section className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden mb-12">
        {/* Left Text */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">How can we help?</h2>
          <p className="text-blue-800/80 mb-4">Our team responds within 24 hours. All queries are confidential and handled by experts.</p>
          <ul className="space-y-2 text-emerald-700 text-sm">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Free business guidance</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> No hidden charges</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> 100% secure data</li>
          </ul>
        </div>
        {/* Right Form */}
        <form className="flex-1 p-8 space-y-5 bg-white" autoComplete="off">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-blue-900 mb-1">Full Name</label>
            <input id="contact-name" name="name" type="text" required className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none" placeholder="Your Name" autoComplete="off" />
            <span className="text-xs text-slate-400">Enter your full name</span>
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
            <input id="contact-email" name="email" type="email" required className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none" placeholder="you@email.com" autoComplete="off" />
            <span className="text-xs text-slate-400">We'll never share your email</span>
          </div>
          <div>
            <label htmlFor="contact-mobile" className="block text-sm font-medium text-blue-900 mb-1">Mobile Number</label>
            <input id="contact-mobile" name="mobile" type="tel" required pattern="[0-9]{10}" maxLength={10} className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none" placeholder="10-digit Mobile Number" autoComplete="off" />
            <span className="text-xs text-slate-400">For quick response</span>
          </div>
          <div>
            <label htmlFor="contact-service" className="block text-sm font-medium text-blue-900 mb-1">Select Service</label>
            <select id="contact-service" name="service" required className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none">
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
            <span className="text-xs text-slate-400">Choose the service you need</span>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-blue-900 mb-1">Message</label>
            <textarea id="contact-message" name="message" required rows={3} className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none" placeholder="How can we help you?" />
            <span className="text-xs text-slate-400">Briefly describe your query</span>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold py-3 rounded-full shadow hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition">Send Message</button>
        </form>
      </section>

      {/* MAP + TRUST STRIP */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12 px-4">
        <div className="flex-1 min-h-[240px] bg-slate-200 rounded-2xl flex items-center justify-center shadow-inner">
          {/* Google Map Placeholder */}
          <span className="text-blue-400 font-bold">[Google Map Here]</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start">
          <div className="flex items-center gap-2 text-emerald-600 font-semibold"><FaCheckCircle /> Pan-India Support</div>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold"><FaCheckCircle /> Quick Response Team</div>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold"><FaCheckCircle /> Secure Data Handling</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 px-4 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">Need expert guidance? We’re just one message away.</h3>
        <a href="#contact" className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition text-lg">Get Free Consultation</a>
      </section>
    </main>
  );
}
