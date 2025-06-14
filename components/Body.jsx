import React from "react";
import { ShieldCheck, Users, Lightbulb, Hammer, Globe } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Reliable Support",
    description: "Count on us for consistent and prompt assistance.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-600" />,
    title: "Community Driven",
    description: "Built by and for a passionate community of creators.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: "Innovative Ideas",
    description: "Bringing fresh, creative solutions to life.",
  },
  {
    icon: <Hammer className="w-10 h-10 text-red-500" />,
    title: "Hands-on Projects",
    description: "Practical experience through real-world tasks.",
  },
  {
    icon: <Globe className="w-10 h-10 text-purple-600" />,
    title: "Global Impact",
    description: "Creating change that transcends borders.",
  },
];

const WhyChooseNirmaan = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
        Why Choose Nirmaan?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-gray-700 hover:scale-105 transition-transform duration-200"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseNirmaan;

