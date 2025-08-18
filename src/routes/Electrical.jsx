import React from "react";

const Electrical = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Electrical & Wiring</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        Our certified electricians provide safe, reliable, and efficient wiring 
        and electrical setup services for residential and commercial projects.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Wiring Installation</h3>
          <p className="mt-2 text-gray-600">
            Complete electrical setup with proper safety standards and compliance.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Repairs & Maintenance</h3>
          <p className="mt-2 text-gray-600">
            Fast and professional repair services to fix electrical issues and ensure safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Electrical;
