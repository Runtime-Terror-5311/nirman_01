import React from "react";
import { Home, Building2 } from "lucide-react"; // nice icons

const Residential = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Residential Construction
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          We specialize in creating modern, durable, and elegant residential
          spaces. From small homes to luxury villas, our team ensures
          top-quality materials, trusted contractors, and timely delivery for
          your dream home.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        {/* Modern Homes */}
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center">
          <Home className="w-14 h-14 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Modern Homes</h2>
          <p className="text-gray-600">
            Design and build homes with contemporary architecture and energy
            efficiency.
          </p>
        </div>

        {/* Luxury Villas */}
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center">
          <Building2 className="w-14 h-14 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Luxury Villas</h2>
          <p className="text-gray-600">
            Elegant, premium constructions with cutting-edge interior designs
            and facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Residential;
