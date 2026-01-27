"use client";
import React, { useState } from "react";

const ConsultationModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Integrate with backend or email service here
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-emerald-400 via-blue-100 to-blue-50 rounded-3xl shadow-2xl p-8 md:p-10 animate-modal-pop">
        <button
          className="absolute top-4 right-4 text-blue-900 text-2xl font-bold hover:text-emerald-600 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-center">Get Free Consultation</h2>
        <ul className="flex flex-wrap gap-3 justify-center mb-6">
          <li className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-emerald-700 text-sm font-medium shadow">
            <span className="text-emerald-400">✔</span> 1000+ MSMEs Supported
          </li>
          <li className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-emerald-700 text-sm font-medium shadow">
            <span className="text-emerald-400">✔</span> Quick 24-Hour Response
          </li>
          <li className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-emerald-700 text-sm font-medium shadow">
            <span className="text-emerald-400">✔</span> Dedicated Expert Team
          </li>
        </ul>
        <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="modal-name" className="block text-sm font-medium text-blue-900 mb-1">Full Name</label>
            <input
              id="modal-name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              placeholder="Your Name"
              autoComplete="off"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
            <input
              id="modal-email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              placeholder="you@email.com"
              autoComplete="off"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="modal-phone" className="block text-sm font-medium text-blue-900 mb-1">Phone Number</label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              placeholder="10-digit Mobile Number"
              autoComplete="off"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold py-3 rounded-full shadow hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition"
            aria-label="Get Free Consultation"
          >
            Get Free Consultation
          </button>
          {submitted && (
            <div className="text-green-700 text-center font-semibold mt-2">Thank you! Our team will contact you soon.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
