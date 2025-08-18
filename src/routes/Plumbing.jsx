import React from "react";

const Plumbing = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Plumbing & Maintenance</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        Our skilled plumbers and technicians provide reliable installation, 
        repair, and maintenance services to ensure your water and piping systems 
        run smoothly without interruptions.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Plumbing Installation</h3>
          <p className="mt-2 text-gray-600">
            From bathroom fittings to full water pipelines, our experts handle it all.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Maintenance & Repairs</h3>
          <p className="mt-2 text-gray-600">
            Quick, efficient repair services to fix leaks, blockages, and damages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plumbing;
