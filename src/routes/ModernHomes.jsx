import React, { useEffect } from "react";

const ModernHomes = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Modern Homes</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        Our Modern Homes service focuses on building sustainable, elegant, and
        future-ready houses. With contemporary architecture and energy-efficient
        designs, we ensure your dream home is both stylish and functional.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Energy Efficiency</h3>
          <p className="mt-2 text-gray-600">
            Smart layouts, natural light optimization, and eco-friendly materials.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Modern Design</h3>
          <p className="mt-2 text-gray-600">
            Sleek architectural styles that blend functionality with aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernHomes;
