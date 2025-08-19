// File: src/routes/Architects.jsx
import React, { useState, useEffect } from "react";
import { Building, Star } from "lucide-react";
import ConsultationForm from "../../components/ConsultationForm";
import archiImg from "/src/assets/archi.png";

const Architects = () => {
  const [showForm, setShowForm] = useState(false);
  const [showHireMsg, setShowHireMsg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const architects = [
    { name: "Rahul Mehta", exp: "10 years", rating: 4.9, location: "Delhi" },
    { name: "Neha Kapoor", exp: "8 years", rating: 4.8, location: "Mumbai" },
    { name: "Arjun Reddy", exp: "6 years", rating: 4.7, location: "Bangalore" },
  ];

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center rounded-3xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${archiImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center">
            Architects & Designers
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Transform your vision into reality with our professional architects. 
          From dream homes to commercial spaces, we create functional, aesthetic, and sustainable designs tailored to your needs.
        </p>
      </div>

      {/* ✅ Services Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold text-indigo-700">🏠 Residential Design</h3>
          <p className="mt-3 text-gray-600">
            Tailored homes that blend comfort, elegance, and practicality — designed to suit your lifestyle.
          </p>
        </div>
        <div className="p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold text-indigo-700">🏢 Commercial Projects</h3>
          <p className="mt-3 text-gray-600">
            Smart and modern layouts for offices, showrooms, and corporate spaces that inspire productivity.
          </p>
        </div>
      </div>

      {/* ✅ Architects List */}
      <h2 className="mt-20 text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
        Meet Our Architects
      </h2>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {architects.map((arch, idx) => (
          <div
            key={idx}
            className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
          >
            <Building className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{arch.name}</h3>
            <p className="text-gray-600">{arch.exp} experience</p>
            <p className="text-gray-600">{arch.location}</p>
            <div className="flex justify-center items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(arch.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill={i < Math.floor(arch.rating) ? "currentColor" : "none"}
                />
              ))}
              <span className="ml-2 text-gray-700 font-medium">{arch.rating}</span>
            </div>
            <button
              onClick={() => setShowHireMsg(arch.name)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
            >
              Hire Me
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Hire Popup */}
      {showHireMsg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Sent!</h2>
            <p className="text-gray-600 mb-6">
              Your request has been shared with{" "}
              <span className="font-semibold text-indigo-700">{showHireMsg}</span>.  
              You will be contacted shortly for further discussion.
            </p>
            <button
              onClick={() => setShowHireMsg(null)}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ CTA */}
      <div className="text-center mt-24">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Need Expert Advice on Your Project?
        </h3>
        <button
          onClick={() => setShowForm(true)}
          className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl hover:scale-105 transition animate-pulse"
        >
          Book Free Consultation
        </button>
      </div>

      {/* ✅ Consultation Form Modal */}
      <ConsultationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default Architects;
