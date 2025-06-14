import React from "react";

const professionals = [
  {
    name: "Noah Sharma",
    role: "Plumber",
    rating: 4.5,
    reviews: 128,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Specializing in modern plumbing solutions with 8+ years of experience. Available for emergency services."
  },
  {
    name: "Reema Sharma",
    role: "Architect",
    rating: 5.0,
    reviews: 94,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Award-winning architect specializing in sustainable residential designs. Graduate from NIT with 12 years of experience."
  },
  {
    name: "Aman Gupta",
    role: "Contractor",
    rating: 4.0,
    reviews: 156,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description: "Experienced contractor with expertise in residential and commercial projects. Known for on-time delivery and quality work."
  }
];

const FeaturedProfessionals = () => {
  return (
    <div id="professionals" className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Featured Professionals
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
        {professionals.map((pro, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl transition-transform hover:scale-110 p-6 text-center flex flex-col items-center space-y-4"
          >
            <img
              src={pro.image}
              alt={pro.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div >
              <h3 className="text-xl font-bold text-gray-900">{pro.name}</h3>
              <p className="text-teal-600 font-medium">{pro.role}</p>
              <div className="flex items-center justify-center space-x-1 mt-2 text-yellow-500">
                {"★".repeat(Math.floor(pro.rating))}
                {"☆".repeat(5 - Math.floor(pro.rating))}
                <span className="text-gray-700 text-sm ml-2">
                  {pro.rating} ({pro.reviews} reviews)
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{pro.description}</p>
            <button className="mt-auto cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
              Hire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
