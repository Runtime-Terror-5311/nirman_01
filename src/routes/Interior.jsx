import React, { useState, useEffect } from "react";
import { Paintbrush } from "lucide-react"; // Icon for designers
import ConsultationForm from "../../components/ConsultationForm";

// local asset
import designImg from "/src/assets/design.png";

const Interior = () => {
  const [showForm, setShowForm] = useState(false);
  const [showHireMsg, setShowHireMsg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designers = [
    { name: "Ananya Mehta", exp: "6 years", rating: "⭐ 4.9", location: "Delhi" },
    { name: "Rahul Verma", exp: "4 years", rating: "⭐ 4.7", location: "Mumbai" },
    { name: "Sneha Kapoor", exp: "8 years", rating: "⭐ 4.8", location: "Bangalore" },
  ];

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section with local background image */}
      <div
        className="relative h-72 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${designImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Interior Design
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Transform your home or office with our creative and elegant interior
          design solutions. From minimalist spaces to luxurious aesthetics, we
          provide designs that bring your vision to life.
        </p>
      </div>

      {/* ✅ Services Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🏠 Home Interiors</h3>
          <p className="mt-2 text-gray-600">
            Customized interior designs that reflect your lifestyle and
            preferences.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🏢 Office Interiors</h3>
          <p className="mt-2 text-gray-600">
            Modern and professional interiors to enhance productivity and
            aesthetics.
          </p>
        </div>
      </div>

      {/* ✅ Designers List */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800">Available Designers</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {designers.map((designer, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all flex flex-col items-center text-center"
          >
            <Paintbrush className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold">{designer.name}</h3>
            <p className="text-gray-600 mt-1">{designer.exp} experience</p>
            <p className="text-gray-600">{designer.location}</p>
            <p className="text-yellow-500 mt-1">{designer.rating}</p>
            <button
              onClick={() => setShowHireMsg(designer.name)}
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
              <span className="font-semibold">{showHireMsg}</span>. The designer will contact you soon.
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
        <h3 className="text-2xl font-semibold mb-4">Want to redesign your space?</h3>
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

export default Interior;
