import React, { useState, useEffect } from "react";
import { Crown, Star, Zap, Shield, Users, MessageSquare } from "lucide-react";
import ConsultationForm from "../components/ConsultationForm";

const GoldSubscription = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Priority Support", desc: "Instant responses and priority allocation of top contractors.", icon: <Zap className="w-12 h-12 text-yellow-500 mb-3" /> },
    { title: "Exclusive Discounts", desc: "Special offers and reduced prices on selected services.", icon: <Star className="w-12 h-12 text-yellow-500 mb-3" /> },
    { title: "Ad-Free Experience", desc: "Seamless browsing without interruptions.", icon: <Shield className="w-12 h-12 text-yellow-500 mb-3" /> },
    { title: "Zero Hiring Charges", desc: "No hiring fees for skilled labor with flexible payment options.", icon: <Users className="w-12 h-12 text-yellow-500 mb-3" /> },
    { title: "Dedicated Consultant", desc: "Personalized guidance from an expert consultant.", icon: <MessageSquare className="w-12 h-12 text-yellow-500 mb-3" /> },
    { title: "AI ‘NIRMAAN-MITRA’", desc: "Smart recommendations for best services at affordable rates.", icon: <Crown className="w-12 h-12 text-yellow-500 mb-3" /> },
  ];

  return (
    <section className="px-8 py-16 bg-gray-50 relative">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x">
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative text-center px-4">
          <span className="inline-block bg-white/20 text-yellow-100 px-4 py-1 rounded-full uppercase text-sm font-bold mb-4 tracking-wider">
            Most Popular
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-3">
            NIRMAAN Pro – Gold Subscription
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Unlock premium features, priority support, and exclusive benefits designed to make your construction journey seamless.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transition-all transform hover:scale-105 hover:shadow-2xl group"
          >
            {/* Glow Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 opacity-20 blur-3xl pointer-events-none transition-all group-hover:opacity-50"></div>
            
            {/* Icon */}
            <div className="relative p-4 rounded-full bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-400 mb-4 shadow-lg">
              {f.icon}
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>

            {/* Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-1 h-1 bg-yellow-400 rounded-full absolute animate-pulse" style={{ top: "10%", left: "20%" }}></div>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full absolute animate-pulse" style={{ top: "70%", left: "60%" }}></div>
              <div className="w-1 h-1 bg-yellow-300 rounded-full absolute animate-pulse" style={{ top: "40%", left: "80%" }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 relative">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Upgrade to NIRMAAN Pro Today
        </h3>
        <p className="text-gray-600 mb-8 text-lg md:text-xl">
          Experience hassle-free construction and maintenance with premium benefits.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="relative z-10 px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Get Gold Subscription
        </button>
      </div>

      {/* Modal Form */}
      <ConsultationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default GoldSubscription;
