// components/SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const SearchBar = () => {
  const [serviceType, setServiceType] = useState('Repair');
  const [location, setLocation] = useState('Jamshedpur');

  const handleSearch = () => {
    alert(`Searching for ${serviceType} in ${location}`);
    // You can replace this with navigation or API call
  };

  return (
    <div className="flex justify-center mt-0.1">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-3xl flex items-center px-6 py-4 space-x-4">

        {/* Service Dropdown */}
       
        <div className="relative">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="appearance-none border border-blue-900 rounded-lg pl-8 pr-8 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Build</option>
            <option>Repair</option>
            <option>Renovate</option>
          </select>
          <FaBuilding className="absolute top-2.5 left-2 text-gray-500" />
        </div>




        {/* Location Input */}
        <div className="relative">
          <select
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="appearance-none border border-blue-900 rounded-lg pl-8 pr-8 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
          <option>Jamshedpur</option>
            <option>Ranchi</option>
            <option>Bokaro</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>
            
            </select>

          <FaMapMarkerAlt className="absolute top-2.5 left-2 text-gray-500" />
        </div>




        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-3 rounded-lg flex items-center space-x-2"
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
