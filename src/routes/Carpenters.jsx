import React, { useState, useEffect } from "react";
import { Hammer, Ruler, Wrench } from "lucide-react"; // icons for carpenters
import ConsultationForm from "../../components/ConsultationForm";

// local asset
import carpImg from "/src/assets/carpentar.png";

const Carpenters = () => {
  const [showForm, setShowForm] = useState(false);
  const [showHireMsg, setShowHireMsg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carpenters = [
    { name: "Ramesh Verma", exp: "10 years", rating: "⭐ 4.9", location: "Delhi" },
    { name: "Suresh Yadav", exp: "8 years", rating: "⭐ 4.8", location: "Mumbai" },
    { name: "Anita Gupta", exp: "6 years", rating: "⭐ 4.7", location: "Bangalore" },
  ];

  return (
    <section className="px-8 py-16 bg-gradient-to-b from-orange-50 to-white">
      {/* ✅ Hero Section with local background image */}
      <div
        className="relative h-72 bg-cover bg-center rounded-2xl shadow-lg"
        style={{ backgroundImage: `url(${carpImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
            Expert Carpentry Services
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          From custom furniture to precision repairs, our carpenters bring craftsmanship
          and reliability to every project—making your spaces functional, durable, 
          and beautiful.
        </p>
      </div>

      {/* ✅ Services Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all text-center">
          <Hammer className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Custom Furniture</h3>
          <p className="mt-2 text-gray-600">
            Unique designs crafted for your living room, bedroom, or office.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all text-center">
          <Ruler className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Woodwork & Fittings</h3>
          <p className="mt-2 text-gray-600">
            Cabinets, shelves, doors, and windows made with precision.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition-all text-center">
          <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Repairs & Maintenance</h3>
          <p className="mt-2 text-gray-600">
            Fast and reliable fixes for wooden furniture and fittings.
          </p>
        </div>
      </div>

      {/* ✅ Carpenters List */}
      <h2 className="mt-16 text-3xl font-bold text-gray-800 text-center">
        Skilled Carpenters Near You
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {carpenters.map((carpenter, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center border border-orange-100"
          >
            <Hammer className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold">{carpenter.name}</h3>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full mt-2">
              {carpenter.exp}
            </span>
            <p className="text-gray-600 mt-2">{carpenter.location}</p>
            <p className="text-yellow-500 mt-1">{carpenter.rating}</p>
            <button
              onClick={() => setShowHireMsg(carpenter.name)}
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Hire Me
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Hire Me Popup */}
      {showHireMsg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Sent!</h2>
            <p className="text-gray-600 mb-6">
              Your request has been shared with{" "}
              <span className="font-semibold">{showHireMsg}</span>. 
              The carpenter will reach out to you shortly.
            </p>
            <button
              onClick={() => setShowHireMsg(null)}
              className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">Looking for premium carpentry solutions?</h3>
        <button
          onClick={() => setShowForm(true)}
          className="px-8 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition"
        >
          Book a Free Consultation
        </button>
      </div>

      {/* ✅ Modal Form */}
      <ConsultationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default Carpenters;
