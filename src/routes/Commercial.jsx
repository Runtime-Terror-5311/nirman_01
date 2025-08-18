import React, { useState, useEffect } from "react";

const Commercial = () => {
  const [showModal, setShowModal] = useState(null);

  // Scroll top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Commercial Projects</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        From offices to shopping complexes, Nirmaan ensures high-quality commercial 
        constructions designed for durability, modern aesthetics, and functionality 
        that fit your business needs.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Office Spaces Card */}
        <div
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => setShowModal("office")}
        >
          <h3 className="text-xl font-semibold">🏢 Office Spaces</h3>
          <p className="mt-2 text-gray-600">
            Modern, ergonomic office spaces tailored to productivity and comfort.
          </p>
        </div>

        {/* Shopping Complexes Card */}
        <div
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => setShowModal("shopping")}
        >
          <h3 className="text-xl font-semibold">🛍️ Shopping Complexes</h3>
          <p className="mt-2 text-gray-600">
            Commercial hubs designed with attention to space, safety, and convenience.
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center">
            {showModal === "office" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Office Spaces</h2>
                <p className="text-gray-600">
                  Our office spaces are designed with ergonomics, open layouts, and 
                  smart infrastructure that boost productivity and comfort.
                </p>
              </>
            )}

            {showModal === "shopping" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Shopping Complexes</h2>
                <p className="text-gray-600">
                  Spacious, safe, and modern shopping complexes built to accommodate 
                  retail stores, entertainment zones, and restaurants with ease.
                </p>
              </>
            )}

            <button
              onClick={() => setShowModal(null)}
              className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Commercial;
