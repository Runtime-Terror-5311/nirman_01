import React from "react";

const Gold = () => {
  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">Gold Subscription</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Unlock exclusive benefits with Nirmaan’s Gold Subscription. 
        Designed for clients who want premium service, faster responses, 
        and dedicated support for their projects.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Priority Support</h3>
          <p className="mt-2 text-gray-600">
            Get instant responses and priority allocation of top contractors.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Exclusive Discounts</h3>
          <p className="mt-2 text-gray-600">
            Enjoy special offers and reduced prices on selected services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gold;
