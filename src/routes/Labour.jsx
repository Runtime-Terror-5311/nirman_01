import React, { useState } from "react";
import labourImg from "../assets/labour.png";

const Labour = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleHireClick = () => {
    setShowForm(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // close modal after 2.5 sec
    setTimeout(() => {
      setShowForm(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <img
          src={labourImg}
          alt="Skilled Labour"
          className="mx-auto w-56 h-56 object-contain drop-shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-900 mt-6">
          Skilled Labour Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Hire professional and experienced labourers for your construction,
          renovation, and maintenance needs. Reliable and skilled workers
          available on demand.
        </p>

        {/* Hire Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleHireClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition"
          >
            Hire Now
          </button>
        </div>

        {/* Wages Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-700">Daily</h3>
            <p className="text-2xl font-semibold text-blue-900 mt-2">₹500 - ₹800</p>
            <p className="text-sm text-gray-600 mt-1">Short-term work</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-purple-700">Weekly</h3>
            <p className="text-2xl font-semibold text-purple-900 mt-2">₹3,000 - ₹5,000</p>
            <p className="text-sm text-gray-600 mt-1">Medium projects</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-green-700">Monthly</h3>
            <p className="text-2xl font-semibold text-green-900 mt-2">₹12,000 - ₹18,000</p>
            <p className="text-sm text-gray-600 mt-1">Long-term contracts</p>
          </div>
        </div>
      </div>

      {/* Hire Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Consultation Form
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border rounded-lg px-4 py-2"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-600">
                  ✅ Submitted Successfully
                </h2>
                <p className="text-gray-700 mt-2">
                  You will receive a call soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Labour;
