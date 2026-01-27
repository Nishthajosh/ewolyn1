"use client";
import React, { useState } from "react";

const SERVICES = [
  "Company Registration",
  "MSME Funding",
  "Certifications & Licenses",
  "Tax & Compliance",
  "Digital Solutions",
  "Electricity Duty & SGST Benefits",
];

const InquiryForm: React.FC<{ onSubmit?: () => void }> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: SERVICES[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmit) onSubmit();
    // Integrate with backend or email service here
  };

  return (
    <form
      className="w-full max-w-lg mx-auto bg-white/70 rounded-2xl shadow-xl p-8 flex flex-col gap-6 backdrop-blur-md animate-fade-in"
      onSubmit={handleSubmit}
      aria-label="Quick Inquiry Form"
    >
      <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">Quick Inquiry</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-blue-900">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="mobile" className="font-medium text-blue-900">Mobile Number</label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          pattern="[0-9]{10}"
          maxLength={10}
          autoComplete="tel"
          className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          value={form.mobile}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="font-medium text-blue-900">Select Service</label>
        <select
          id="service"
          name="service"
          className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300"
          value={form.service}
          onChange={handleChange}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Submit Inquiry"
      >
        Submit Inquiry
      </button>
      {submitted && (
        <div className="text-green-700 text-center font-semibold mt-2">Thank you! We will contact you soon.</div>
      )}
    </form>
  );
};

export default InquiryForm;
