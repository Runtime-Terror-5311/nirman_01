import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaTools, FaPaintRoller, FaCogs } from "react-icons/fa";

const Construction = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Construction Services
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          From residential homes to commercial buildings, 
          <span className="font-semibold text-blue-600"> Nirmaan </span> 
          connects you with trusted contractors for your construction needs.
        </p>
      </div>

      {/* Main Service Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Link
          to="/services/construction/residential"
          className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl hover:scale-105 transition-transform block"
        >
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <FaHome className="text-blue-600" /> Residential Construction
          </h3>
          <p className="mt-3 text-gray-600">
            Build your dream home with modern designs and reliable contractors.
          </p>
        </Link>

        <Link
          to="/services/construction/commercial"
          className="p-8 bg-white shadow-lg rounded-2xl border hover:shadow-2xl hover:scale-105 transition-transform block"
        >
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <FaBuilding className="text-green-600" /> Commercial Projects
          </h3>
          <p className="mt-3 text-gray-600">
            Offices, shops, and complexes — handled with expertise and precision.
          </p>
        </Link>
      </div>

      {/* Extra Services */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Top Services We Offer
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Link
            to="/services/construction/plumbing"
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition block"
          >
            <FaTools className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold">Plumbing & Maintenance</h3>
            <p className="text-gray-600 mt-2">
              Skilled plumbers and technicians at your service.
            </p>
          </Link>

          <Link
            to="/services/construction/interior"
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition block"
          >
            <FaPaintRoller className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold">Interior Design</h3>
            <p className="text-gray-600 mt-2">
              Modern and elegant designs tailored to your space.
            </p>
          </Link>

          <Link
            to="/services/construction/electrical"
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition block"
          >
            <FaCogs className="text-4xl text-teal-500 mb-4" />
            <h3 className="text-lg font-semibold">Electrical & Wiring</h3>
            <p className="text-gray-600 mt-2">
              Safe and reliable electrical setup for your projects.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Construction;
