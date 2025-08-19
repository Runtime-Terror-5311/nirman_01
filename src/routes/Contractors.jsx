import React, { useState, useEffect } from "react";
import { Hammer } from "lucide-react"; // icon for contractors
import ConsultationForm from "../../components/ConsultationForm";

// local asset
import contractorsImg from "/src/assets/contractors.png";

const Contractors = () => {
  const [showForm, setShowForm] = useState(false);
  const [showHireMsg, setShowHireMsg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contractors = [
    { name: "Rajesh Verma", exp: "10 years", rating: "⭐ 4.9", location: "Delhi" },
    { name: "Sunil Yadav", exp: "8 years", rating: "⭐ 4.8", location: "Mumbai" },
    { name: "Anita Sharma", exp: "9 years", rating: "⭐ 4.7", location: "Bangalore" },
  ];

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section with local background image */}
      <div
        className="relative h-72 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${contractorsImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Professional Contractors
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Hire trusted contractors for your construction, renovation, and
          maintenance projects. Experienced professionals ensuring timely and
          quality delivery.
        </p>
      </div>

      {/* ✅ Services Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🏗️ Construction Projects</h3>
          <p className="mt-2 text-gray-600">
            Complete end-to-end construction solutions for residential and
            commercial needs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🛠️ Renovation & Remodeling</h3>
          <p className="mt-2 text-gray-600">
            Upgrade and remodel spaces with expert craftsmanship and innovative
            designs.
          </p>
        </div>
      </div>

      {/* ✅ Contractors List */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Available Contractors</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {contractors.map((contractor, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all flex flex-col items-center text-center"
          >
            <Hammer className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold">{contractor.name}</h3>
            <p className="text-gray-600 mt-1">{contractor.exp} experience</p>
            <p className="text-gray-600">{contractor.location}</p>
            <p className="text-yellow-500 mt-1">{contractor.rating}</p>
            <button
              onClick={() => setShowHireMsg(contractor.name)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Hire Me
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Hire Me Popup */}
      {showHireMsg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Sent!</h2>
            <p className="text-gray-600 mb-6">
              Your details have been shared with{" "}
              <span className="font-semibold">{showHireMsg}</span>. The contractor will contact you soon.
            </p>
            <button
              onClick={() => setShowHireMsg(null)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Need expert contractors for your project?
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

export default Contractors;
