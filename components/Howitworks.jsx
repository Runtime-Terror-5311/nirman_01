import React from 'react';

const Howitworks = () => {
  return (
    <div className="bg-indigo-100 rounded-full shadow-md mx-4 md:mx-24 my-10 py-20 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
        How It Works
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Simple steps to start your construction journey
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
        {[
          { step: 1, label: 'Register' },
          { step: 2, label: 'Choose Service' },
          { step: 3, label: 'Get Quotes' },
          { step: 4, label: 'Start Project' },
        ].map((item) => (
          <div key={item.step}>
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-teal-600 text-white font-bold rounded-full">
              {item.step}
            </div>
            <p className="text-sm font-semibold text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
