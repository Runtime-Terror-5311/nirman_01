import React from "react";
import { Link } from "react-router-dom";

const ResidentialConstruction = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-32">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-32">
        Residential Construction
      </h1>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        We specialize in creating modern, durable, and elegant residential
        spaces. From small homes to luxury villas, our team ensures top-quality
        materials, trusted contractors, and timely delivery for your dream home.
      </p>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Modern Homes */}
        <Link
          to="/services/construction/residential/modern-homes"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition block"
        >
          <h2 className="text-2xl font-semibold mb-3">Modern Homes</h2>
          <p className="text-gray-600 leading-relaxed">
            Design and build homes with contemporary architecture and energy
            efficiency. Our modern homes balance functionality, aesthetics, and
            sustainability, making them ideal for families seeking comfort and
            innovation.
          </p>
        </Link>

        {/* Luxury Villas */}
        <Link
          to="/services/construction/residential/luxury-villas"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition block"
        >
          <h2 className="text-2xl font-semibold mb-3">Luxury Villas</h2>
          <p className="text-gray-600 leading-relaxed">
            Elegant, premium constructions with cutting-edge interior designs
            and facilities. Our luxury villas combine grandeur with modern
            living, ensuring a lavish lifestyle tailored to your needs.
          </p>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to build your dream home?
        </h3>
        <button className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition">
          Get a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default ResidentialConstruction;
