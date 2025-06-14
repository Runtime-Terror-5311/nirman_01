import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Nirmaan
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button (optional for later) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
