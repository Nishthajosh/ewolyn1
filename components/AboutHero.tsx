import React from "react";

interface AboutHeroProps {
  onCTAClick: () => void;
}

const AboutHero: React.FC<AboutHeroProps> = ({ onCTAClick }) => {
  return (
    <section
      className="relative py-14 md:py-20 px-4 md:px-0 flex flex-col items-center justify-center min-h-[420px] bg-gradient-to-br from-blue-400 via-green-300 to-blue-700 rounded-3xl shadow-xl overflow-hidden animate-fade-in"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0" />
      <div className="relative z-10 w-full max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Let’s Discuss Your Business Needs
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6 font-medium">
          Get expert consultation for registrations, funding, compliance and growth solutions across India.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          <li className="flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 text-base text-blue-900 font-semibold shadow-md">
            <span className="text-green-500 text-xl">✔</span> Free Consultation
          </li>
          <li className="flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 text-base text-blue-900 font-semibold shadow-md">
            <span className="text-green-500 text-xl">✔</span> Expert Guidance
          </li>
          <li className="flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 text-base text-blue-900 font-semibold shadow-md">
            <span className="text-green-500 text-xl">✔</span> Pan-India Services
          </li>
          <li className="flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 text-base text-blue-900 font-semibold shadow-md">
            <span className="text-green-500 text-xl">✔</span> Transparent Process
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onCTAClick}
            aria-label="Schedule Consultation"
          >
            Schedule Consultation
          </button>
          <button
            className="bg-white/80 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white/90 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={onCTAClick}
            aria-label="Call Now"
          >
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
