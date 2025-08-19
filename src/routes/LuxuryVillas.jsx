import React, { useState, useEffect } from "react";
import ConsultationForm from "../../components/ConsultationForm"; // same form component

const LuxuryVillas = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section */}
      <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center rounded-2xl">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Luxury Villas
          </h1>
        </div>
      </div>

      {/* ✅ Features grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Premium Interiors</h3>
          <p className="mt-2 text-gray-600">
            World-class designs with marble flooring, Italian kitchens, and custom interiors.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Exclusive Amenities</h3>
          <p className="mt-2 text-gray-600">
            Private pools, landscaped gardens, smart automation & security systems.
          </p>
        </div>
      </div>

      {/* ✅ Villa Models */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Available Villas</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { name: "Luxury Villa - Type A", price: "₹1.5 Crore", rating: "4.9 (95 reviews)" },
          { name: "Luxury Villa - Type B", price: "₹2 Crore", rating: "5.0 (150 reviews)" },
          { name: "Presidential Villa", price: "₹3 Crore", rating: "5.0 (60 reviews)" },
        ].map((villa, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{villa.name}</h3>
            <p className="text-gray-600 mt-2">{villa.price}</p>
            <p className="text-yellow-500">⭐ {villa.rating}</p>
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
          <h3 className="text-2xl font-semibold">Elite</h3>
          <p className="text-lg mt-2">₹1.5 Cr</p>
          <p className="text-gray-500">Spacious villas with modern luxury features</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Royal</h3>
          <p className="text-lg mt-2">₹2 Cr</p>
          <p className="text-gray-500">Exclusive interiors & premium lifestyle amenities</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Presidential</h3>
          <p className="text-lg mt-2">₹3 Cr</p>
          <p className="text-gray-500">Private pools, gardens & ultimate luxury</p>
        </div>
      </div>

      {/* ✅ Testimonials */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">What Our Villa Owners Say</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "Owning a villa here has been life-changing. The luxury is unmatched!"
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Arjun, Mumbai ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "Best investment decision I’ve made. My family loves the space!"
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Neha, Bangalore ⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      {/* ✅ FAQ */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">FAQ</h2>
      <div className="mt-6 space-y-4">
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">Do you provide customization?</summary>
          <p className="text-gray-600 mt-2">Yes, villas can be tailored with custom layouts & interiors.</p>
        </details>
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">What amenities are included?</summary>
          <p className="text-gray-600 mt-2">Private pools, gardens, smart home systems, and security.</p>
        </details>
      </div>

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to own your luxury villa?
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

export default LuxuryVillas;
