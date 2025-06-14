// components/SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const SearchBar = () => {
  const [serviceType, setServiceType] = useState('Repair');
  const [location, setLocation] = useState('Delhi');

  const handleSearch = () => {
    alert(`Searching for ${serviceType} in ${location}`);
  };

  return (
    <div className="flex justify-center -mt-.1 z-10 relative">
      <div className="w-full max-w-10xl bg-white rounded-3xl shadow-2xl flex items-center px-6 py-4 space-x-4">

        {/* Service Dropdown */}
        <div className="relative w-full max-w-xs">
          <FaBuilding className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-6" />
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full border border-blue-400 rounded-xl pl-10 pr-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>Build</option>
            <option>Repair</option>
            <option>Renovate</option>
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full max-w-xs">
          <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-600" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-blue-400 rounded-xl pl-10 pr-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>Jamshedpur</option>
            <option>Ranchi</option>
            <option>Bokaro</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>
            <option>Dehradun</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition"
        >
          <FaSearch />
          <span className="font-semibold">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
