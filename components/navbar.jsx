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
    "block px-4 py-2 hover:bg-teal-100 hover:text-teal-700 transition duration-200";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <img
        src="/logo2.png"
        alt="Logo"
        className="h-12 w-auto object-fill cursor-pointer"
      />

      {/* Navigation Links */}
      <ul className="flex gap-6 text-gray-800 font-medium items-center">
        <li>
          <ScrollLink
            to="home"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-600"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="founders"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-600"
          >
            About Us
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
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
              <li>
                <RouterLink
                  to="/services/construction"
                  className={dropdownItemClass}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Construction
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services/maintenance"
                  className={dropdownItemClass}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Maintenance
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/services/gold"
                  className={dropdownItemClass}
                  onClick={() => setIsServicesOpen(false)}
                >
                  Gold Subscription
                </RouterLink>
              </li>
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
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-56 z-10">
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
            className="cursor-pointer hover:text-teal-600"
          >
            Pricing
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="howitworks"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-600"
          >
            How It Works
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="professionals"
            smooth="easeInOutQuart"
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-teal-600"
          >
            Reviews
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
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
              <li><RouterLink to="/support/contact" className={dropdownItemClass}>Contact</RouterLink></li>
              <li><RouterLink to="/support/faq" className={dropdownItemClass}>FAQ</RouterLink></li>
              <li><RouterLink to="/support/report" className={dropdownItemClass}>Report</RouterLink></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="hidden sm:flex gap-4">
        <button className="cursor-pointer px-4 py-2 border border-blue-900 rounded-md text-blue-900 font-semibold hover:bg-blue-100 transition">
          Login
        </button>
        <button className="cursor-pointer px-4 py-2 bg-teal-700 text-white rounded-md font-semibold hover:bg-teal-800 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
