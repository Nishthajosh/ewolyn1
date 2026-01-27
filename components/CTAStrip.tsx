import React from "react";

const CTAStrip: React.FC<{ onCTAClick?: () => void }> = ({ onCTAClick }) => (
  <section className="w-full py-10 px-4">
    <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-blue-800 via-emerald-400 to-blue-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 md:px-12 py-8 animate-fade-in transition-all duration-500">
      <div className="text-center md:text-left flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow mb-2">
          Ready to grow your business with confidence?
        </h2>
      </div>
      <button
        className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-50 hover:text-blue-800 hover:scale-105 transition text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        onClick={onCTAClick}
        aria-label="Get Started Today"
      >
        Get Started Today
      </button>
    </div>
  </section>
);

export default CTAStrip;
