import React from 'react';
import { ChevronRight } from 'lucide-react'; // You can replace this with any arrow icon

const Howitworks = () => {
  const steps = [
    { step: 1, label: 'Register' },
    { step: 2, label: 'Choose Service' },
    { step: 3, label: 'Get Quotes' },
    { step: 4, label: 'Start Project' },
  ];

  return (
    <div id="howitworks" className="bg-indigo-100 rounded-full shadow-md mx-4 md:mx-24 my-10 py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
        How It Works
      </h2>
      <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
        Simple steps to start your construction journey
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
        {steps.map((item, index) => (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-2 flex items-center justify-center bg-teal-600 text-white text-lg md:text-xl font-bold rounded-full shadow-md">
                {item.step}
              </div>
              <p className="text-base md:text-lg font-semibold text-gray-800">
                {item.label}
              </p>
            </div>

            {/* Arrow between steps, except after the last one */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center text-gray-500">
                <ChevronRight size={32} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
