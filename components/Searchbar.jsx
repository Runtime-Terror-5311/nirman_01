import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const SearchBar = () => {
  const [serviceType, setServiceType] = useState('Repair');
  const [location, setLocation] = useState('Jamshedpur');

  const handleSearch = () => {
    alert(`Searching for ${serviceType} in ${location}`);
  };

  return (
    <div className="flex justify-center items-center w-full px-1 md:px-0 -mt-1 z-10 relative">
      <div className="backdrop-blur-md bg-white/70 shadow-xl rounded-3xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-4xl transition-all duration-300">


        {/* Service Dropdown */}
        <div className="relative w-full md:w-1/3">
          <FaBuilding className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-600 text-lg" />
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full appearance-none border border-blue-400 rounded-xl pl-12 pr-4 py-4 text-base font-medium text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option>Build</option>
            <option>Repair</option>
            <option>Renovate</option>
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full md:w-1/3">
          <FaMapMarkerAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-600 text-lg" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full appearance-none border border-blue-400 rounded-xl pl-12 pr-4 py-4 text-base font-medium text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option>Jamshedpur</option>
            <option>Ranchi</option>
            <option>Bokaro</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>
            <option>Dehradun</option>
            <option>Motihari</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-1/3 bg-teal-700 hover:bg-teal-600 active:scale-95 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-md transition-all"
        >
          <FaSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
