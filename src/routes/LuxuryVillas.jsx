import React, { useEffect } from "react";

const LuxuryVillas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Luxury Villas</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        Our Luxury Villas are designed to provide ultimate comfort, elegance,
        and exclusivity. With world-class interiors and modern facilities,
        we deliver villas that redefine luxury living.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Premium Interiors</h3>
          <p className="mt-2 text-gray-600">
            Luxurious designs with attention to detail, high-end finishes, and
            innovative layouts.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Exclusive Amenities</h3>
          <p className="mt-2 text-gray-600">
            Private pools, landscaped gardens, smart home systems, and much more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxuryVillas;
