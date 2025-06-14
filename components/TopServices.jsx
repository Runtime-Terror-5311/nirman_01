import { FaHome, FaTools, FaTint, FaBolt, FaPaintRoller } from 'react-icons/fa';

const TopServices = () => {
  const services = [
    { icon: <FaHome />, label: 'Architects' },
    { icon: <FaTools />, label: 'Contractors' },
    { icon: <FaTint />, label: 'Plumbers' },
    { icon: <FaBolt />, label: 'Electricians' },
    { icon: <FaPaintRoller />, label: 'Interior Designers' },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">Top Services</h2>
      
      {/* Responsive flex layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-50 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="bg-teal-100 rounded-full p-6 sm:p-6 md:p-7 lg:p-8 flex items-center justify-center transition-transform hover:scale-110">
              {/* Responsive Icon size */}
              <div className="text-teal-600 text-3xl sm:text-4xl md:text-5xl">
                {service.icon}
              </div>
            </div>
            <span className="text-gray-800 font-medium text-sm sm:text-base text-center">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
