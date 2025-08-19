import { Link } from "react-router-dom";
import { FaHome, FaTools, FaTint, FaBolt, FaPaintRoller } from "react-icons/fa";

const TopServices = () => {
  const services = [
    { icon: <FaHome />, label: "Architects", path: "/hire/architects" },
    { icon: <FaTools />, label: "Contractors", path: "/hire/contractors" },
    { icon: <FaTint />, label: "Plumbers", path: "/hire/plumbers" },
    { icon: <FaBolt />, label: "Electricians", path: "/hire/electrical" },
    { icon: <FaPaintRoller />, label: "Interior Designers", path: "/hire/interior" },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">
        Top Services
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="flex flex-col items-center space-y-2 group"
          >
            <div className="bg-teal-100 rounded-full p-6 sm:p-6 md:p-7 lg:p-8 flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer shadow-md group-hover:shadow-xl">
              <div className="text-teal-600 text-3xl sm:text-4xl md:text-5xl">
                {service.icon}
              </div>
            </div>
            <span className="text-gray-800 font-medium text-sm sm:text-base text-center group-hover:text-teal-600 transition-colors">
              {service.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
