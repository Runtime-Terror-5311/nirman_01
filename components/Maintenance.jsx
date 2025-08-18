import React from "react";

const Maintenance = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Maintenance Services</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Keep your home and office in top condition with Nirmaan’s trusted 
        maintenance professionals. From quick fixes to regular servicing, 
        we’ve got you covered.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Plumbing & Electrical</h3>
          <p className="mt-2 text-gray-600">
            Fix leaks, wiring issues, and electrical faults with verified experts.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Carpentry & Painting</h3>
          <p className="mt-2 text-gray-600">
            Skilled professionals for furniture repair, painting, and polishing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
