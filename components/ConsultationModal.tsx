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
      <div className="relative bg-gradient-to-br from-green-200 via-blue-100 to-blue-300 rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4">
        <button
          className="absolute top-3 right-3 text-blue-700 text-2xl font-bold hover:text-red-500 focus:outline-none"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Get Free Consultation</h2>
        <ul className="mb-4 space-y-1 text-blue-800 text-base">
          <li>✔ 1000+ MSMEs Supported</li>
          <li>✔ 24-hour Response Time</li>
          <li>✔ Expert Team Support</li>
        </ul>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="input input-bordered rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300"
            value={form.phone}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
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
