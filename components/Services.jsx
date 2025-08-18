import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Building2, Home, Crown } from "lucide-react";

const services = [
  {
    title: "Construction",
    description: "Get your dream project built by verified contractors.",
    path: "/services/construction",
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Maintenance",
    description: "Plumbing, electrical, carpentry, painting and more.",
    path: "/services/maintenance",
    icon: <Wrench className="w-12 h-12 text-green-600" />,
  },
  {
    title: "Renovation",
    description: "Transform interiors and remodel spaces beautifully.",
    path: "/services/renovation",
    icon: <Home className="w-12 h-12 text-yellow-600" />,
  },
  {
    title: "Gold Subscription",
    description: "Premium membership with exclusive benefits & priority support.",
    path: "/services/gold",
    icon: <Crown className="w-12 h-12 text-purple-600" />,
  },
];

const Services = () => {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore the wide range of services we offer to build, repair, and renovate your spaces.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <Link
              to={service.path}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
