import React, { useState, useEffect } from "react";
import ConsultationForm from "../../components/ConsultationForm"; // modal form component

const ModernHomes = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section */}
      <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center rounded-2xl">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Modern Homes
          </h1>
        </div>
      </div>

      {/* ✅ Features grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Energy Efficiency</h3>
          <p className="mt-2 text-gray-600">
            Smart layouts, natural light optimization, and eco-friendly
            materials.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Modern Design</h3>
          <p className="mt-2 text-gray-600">
            Sleek architectural styles that blend functionality with aesthetics.
          </p>
        </div>
      </div>

      {/* ✅ Home Models */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Available Home Models</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { name: "2BHK Modern Home", price: "₹40 Lakh", rating: "4.5 (120 reviews)" },
          { name: "3BHK Smart Home", price: "₹60 Lakh", rating: "4.7 (200 reviews)" },
          { name: "Luxury Duplex", price: "₹95 Lakh", rating: "4.9 (80 reviews)" },
        ].map((home, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{home.name}</h3>
            <p className="text-gray-600 mt-2">{home.price}</p>
            <p className="text-yellow-500">⭐ {home.rating}</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Pricing Packages */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Pricing Packages</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Basic</h3>
          <p className="text-lg mt-2">₹35 Lakh</p>
          <p className="text-gray-500">Essential features for small families</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Premium</h3>
          <p className="text-lg mt-2">₹55 Lakh</p>
          <p className="text-gray-500">Modern amenities & stylish designs</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Luxury</h3>
          <p className="text-lg mt-2">₹90 Lakh</p>
          <p className="text-gray-500">Exclusive villas with top facilities</p>
        </div>
      </div>

      {/* ✅ Testimonials */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "Amazing designs and on-time delivery. Love my new home!"
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Ankit, Pune ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "Very professional team, highly recommended."
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Riya, Delhi ⭐⭐⭐⭐</p>
        </div>
      </div>

      {/* ✅ FAQ */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">FAQ</h2>
      <div className="mt-6 space-y-4">
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">How long does construction take?</summary>
          <p className="text-gray-600 mt-2">Typically 8–12 months depending on size & design.</p>
        </details>
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">Do you offer customization?</summary>
          <p className="text-gray-600 mt-2">Yes, we provide tailored designs as per your needs.</p>
        </details>
      </div>

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to build your dream home?
        </h3>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition"
        >
          Book a Free Consultation
        </button>
      </div>

      {/* ✅ Modal Form */}
      <ConsultationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default ModernHomes;
