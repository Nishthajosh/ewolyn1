import React from "react";

export default function BusinessInquiryForm() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-slate-100 to-slate-200 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 border border-slate-200">
      {/* Left: Info Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Let's Discuss Your Business Needs</h2>
          <p className="text-slate-600 mb-6">Get expert consultation on government schemes, registration, and business certifications. We're here to help you grow.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Free Consultation</span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Expert Guidance</span>
            <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Pan India Service</span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Transparent Process</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-slate-700 transition">Schedule Consultation</button>
          <button className="bg-white border border-slate-300 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-slate-100 transition">Call Now</button>
        </div>
      </div>
      {/* Right: Form Section */}
      <form className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Quick Inquiry</h3>
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        <input type="tel" placeholder="Mobile Number" className="px-4 py-2 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        <select className="px-4 py-2 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400">
          <option>Select Service</option>
          <option>MSME Funding</option>
          <option>Company Registration</option>
          <option>Certifications</option>
          <option>Tax & Compliance</option>
        </select>
        <button type="submit" className="mt-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 transition">Submit</button>
      </form>
    </div>
  );
}
