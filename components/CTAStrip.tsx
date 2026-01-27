import React from "react";

const CTAStrip: React.FC<{ onCTAClick?: () => void }> = ({ onCTAClick }) => (
  <section className="w-full py-10 px-4">
    <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-green-400 via-blue-400 to-blue-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-6 md:px-12 py-8 animate-fade-in">
      <div className="text-center md:text-left flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow mb-2">
          Ready to grow your business?
        </h2>
      </div>
      <button
        className="bg-white/90 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        onClick={onCTAClick}
        aria-label="Get Started Today"
      >
        Get Started Today
      </button>
    </div>
  </section>
);

export default CTAStrip;
