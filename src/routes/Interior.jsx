import React from "react";

const Interior = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Interior Design</h1>
      <p className="mt-4 text-gray-600 text-lg max-w-3xl">
        Transform your home or office with our creative and elegant interior 
        design solutions. From minimalist spaces to luxurious aesthetics, 
        we provide designs that bring your vision to life.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Home Interiors</h3>
          <p className="mt-2 text-gray-600">
            Customized interior designs that reflect your lifestyle and preferences.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Office Interiors</h3>
          <p className="mt-2 text-gray-600">
            Modern and professional interiors to enhance productivity and aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interior;
