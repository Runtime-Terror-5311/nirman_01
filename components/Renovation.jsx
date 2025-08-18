import React from "react";

const Renovation = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Renovation Services</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Give your space a fresh look with modern renovation solutions. 
        Whether it’s upgrading interiors or remodeling entire sections, 
        Nirmaan connects you with experts.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Interior Remodeling</h3>
          <p className="mt-2 text-gray-600">
            Modern kitchens, stylish living rooms, and functional spaces.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Home Upgrades</h3>
          <p className="mt-2 text-gray-600">
            Add new features and redesign your home with the latest trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Renovation;
