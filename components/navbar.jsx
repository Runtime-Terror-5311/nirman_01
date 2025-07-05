import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const servicesRef = useRef(null);
  const hireRef = useRef(null);
  const supportRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (hireRef.current && !hireRef.current.contains(event.target)) {
        setIsHireOpen(false);
      }
      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownItemClass =
    "block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition duration-200";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm py-4 px-6 md:px-12 flex justify-between items-center transition duration-300">
      {/* Logo */}
      <img
        src="/logo2.png"
        alt="Logo"
        className="h-12 w-auto object-fill cursor-pointer hover:scale-105 transition-transform"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
        <li>
          <ScrollLink
            to="home"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-700 relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full"></span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="founders"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-700 relative group"
          >
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full"></span>
          </ScrollLink>
        </li>

        {/* Services Dropdown */}
        <li className="relative" ref={servicesRef}>
          <button
            onClick={() => {
              setIsServicesOpen((prev) => !prev);
              setIsHireOpen(false);
              setIsSupportOpen(false);
            }}
            className="hover:text-teal-700 cursor-pointer"
          >
            Services ▾
          </button>
          {isServicesOpen && (
            <ul className="absolute top-full mt-2 bg-white/90 shadow-xl rounded-lg py-2 w-48 z-20">
              <li><RouterLink to="/services/construction" className={dropdownItemClass}>Construction</RouterLink></li>
              <li><RouterLink to="/services/maintenance" className={dropdownItemClass}>Maintenance</RouterLink></li>
              <li><RouterLink to="/services/gold" className={dropdownItemClass}>Gold Subscription</RouterLink></li>
            </ul>
          )}
        </li>

        {/* Hire Dropdown */}
        <li className="relative" ref={hireRef}>
          <button
            onClick={() => {
              setIsHireOpen((prev) => !prev);
              setIsServicesOpen(false);
              setIsSupportOpen(false);
            }}
            className="hover:text-teal-700 cursor-pointer"
          >
            Hire ▾
          </button>
          {isHireOpen && (
            <ul className="absolute top-full mt-2 bg-white/90 shadow-xl rounded-lg py-2 w-56 z-20">
              <li><RouterLink to="/hire/architects" className={dropdownItemClass}>Architects</RouterLink></li>
              <li><RouterLink to="/hire/contractors" className={dropdownItemClass}>Contractors</RouterLink></li>
              <li><RouterLink to="/hire/plumbers" className={dropdownItemClass}>Plumbers</RouterLink></li>
              <li><RouterLink to="/hire/carpenters" className={dropdownItemClass}>Carpenters</RouterLink></li>
              <li><RouterLink to="/hire/labour" className={dropdownItemClass}>Labour</RouterLink></li>
            </ul>
          )}
        </li>

        <li>
          <ScrollLink
            to="pricing"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-700 relative group"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full"></span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="howitworks"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-700 relative group"
          >
            How It Works
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full"></span>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="professionals"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-700 relative group"
          >
            Reviews
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full"></span>
          </ScrollLink>
        </li>

        {/* Support Dropdown */}
        <li className="relative" ref={supportRef}>
          <button
            onClick={() => {
              setIsSupportOpen((prev) => !prev);
              setIsServicesOpen(false);
              setIsHireOpen(false);
            }}
            className="hover:text-teal-700 cursor-pointer"
          >
            Support ▾
          </button>
          {isSupportOpen && (
            <ul className="absolute top-full mt-2 bg-white/90 shadow-xl rounded-lg py-2 w-48 z-20">
              <li><RouterLink to="/support/contact" className={dropdownItemClass}>Contact</RouterLink></li>
              <li><RouterLink to="/support/faq" className={dropdownItemClass}>FAQ</RouterLink></li>
              <li><RouterLink to="/support/report" className={dropdownItemClass}>Report</RouterLink></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="hidden sm:flex gap-3 items-center">
        <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50 font-semibold transition duration-200">
          Login
        </button>
        <button className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-600 font-semibold shadow-sm transition duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
