import React, { useState, useEffect } from "react";
import ConsultationForm from "../../components/ConsultationForm"; // same modal form

const Commercial = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section */}
      <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center rounded-2xl">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Commercial Projects
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          From offices to shopping complexes, Nirmaan ensures high-quality 
          commercial constructions designed for durability, modern aesthetics, 
          and functionality that fit your business needs.
        </p>
      </div>

      {/* ✅ Features Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🏢 Office Spaces</h3>
          <p className="mt-2 text-gray-600">
            Modern, ergonomic office spaces tailored to productivity and comfort.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🛍️ Shopping Complexes</h3>
          <p className="mt-2 text-gray-600">
            Commercial hubs designed with attention to space, safety, and convenience.
          </p>
        </div>
      </div>

      {/* ✅ Project Models */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Available Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { name: "Corporate Office Tower", price: "₹5 Crore", rating: "4.8 (60 reviews)" },
          { name: "Premium Shopping Mall", price: "₹12 Crore", rating: "4.9 (40 reviews)" },
          { name: "Business Plaza", price: "₹8 Crore", rating: "4.7 (85 reviews)" },
        ].map((proj, idx) => (
          <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-gray-600 mt-2">{proj.price}</p>
            <p className="text-yellow-500">⭐ {proj.rating}</p>
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
          <h3 className="text-2xl font-semibold">Basic Commercial</h3>
          <p className="text-lg mt-2">₹5 Cr</p>
          <p className="text-gray-500">Small-scale office or retail spaces</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Premium Complex</h3>
          <p className="text-lg mt-2">₹8-10 Cr</p>
          <p className="text-gray-500">Mid-size complexes with modern amenities</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">Corporate Elite</h3>
          <p className="text-lg mt-2">₹12+ Cr</p>
          <p className="text-gray-500">Large-scale offices & shopping malls</p>
        </div>
      </div>

      {/* ✅ Testimonials */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "Our office tower was completed on time and exceeded expectations!"
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Ramesh, Delhi ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="italic text-gray-600">
            "The mall design is perfect — customers love the space."
          </p>
          <p className="mt-3 font-semibold text-gray-800">- Priya, Mumbai ⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      {/* ✅ FAQ */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">FAQ</h2>
      <div className="mt-6 space-y-4">
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">Do you handle government approvals?</summary>
          <p className="text-gray-600 mt-2">Yes, we assist with all necessary permits and approvals.</p>
        </details>
        <details className="bg-white shadow rounded-lg p-4">
          <summary className="cursor-pointer font-semibold">Can you customize layouts?</summary>
          <p className="text-gray-600 mt-2">Absolutely! We offer tailored solutions for offices & malls.</p>
        </details>
      </div>

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Planning a commercial project?
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

export default Commercial;
