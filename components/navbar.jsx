import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);




  const servicesRef = useRef(null);
  const hireRef = useRef(null);
  const supportRef = useRef(null);




  // Close dropdowns when clicking outside
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





  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
      {/* Logo */}
      <img
        src="/logo2.png"
        alt="Logo"
        className="h-24 md:h-20 lg:h-12 w-auto object-fill"
      />

      {/* Nav Links */}
      <ul className="flex gap-6 text-gray-800 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>




        {/* Services Dropdown */}
        <li className="relative" ref={servicesRef}>
          <button
            onClick={() => {
              setIsServicesOpen((prev) => !prev);
              setIsHireOpen(false);
              setIsSupportOpen(false);
            }}
            className="hover:text-blue-700"
          >
            Services ▾
          </button>

          {isServicesOpen && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
              <li>
                <Link
                  to="/services/construction"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/services/maintenance"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/gold"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Gold Subscription
                </Link>
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
            className="hover:text-blue-700"
          >
            Hire ▾
          </button>

          {isHireOpen && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-56 z-10">
              <li><Link to="/hire/architects" className="block px-4 py-2 hover:bg-gray-100">Architects</Link></li>
              <li><Link to="/hire/contractors" className="block px-4 py-2 hover:bg-gray-100">Contractors</Link></li>
              <li><Link to="/hire/plumbers" className="block px-4 py-2 hover:bg-gray-100">Plumbers</Link></li>
              <li><Link to="/hire/carpenters" className="block px-4 py-2 hover:bg-gray-100">Carpenters</Link></li>
              <li><Link to="/hire/labour" className="block px-4 py-2 hover:bg-gray-100">Labour</Link></li>
            </ul>
          )}
        </li>

        <li><a href="#">Pricing</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Reviews</a></li>





        {/* Support Dropdown */}
        <li className="relative" ref={supportRef}>
          <button
            onClick={() => {
              setIsSupportOpen((prev) => !prev);
              setIsServicesOpen(false);
              setIsHireOpen(false);
            }}
            className="hover:text-blue-700"
          >
            Support ▾
          </button>

          {isSupportOpen && (
            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
              <li><Link to="/support/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link></li>
              <li><Link to="/support/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link></li>
              <li><Link to="/support/report" className="block px-4 py-2 hover:bg-gray-100">Report</Link></li>
            </ul>
          )}
        </li>
      </ul>






      {/* Buttons */}
      <div className="hidden sm:flex gap-4">
  <button className="px-4 py-2 border border-blue-900 rounded-md text-blue-900 font-semibold hover:bg-blue-100 transition">
    Login
  </button>
  <button className="px-4 py-2 bg-teal-700 text-white rounded-md font-semibold hover:bg-teal-800 transition">
    Sign Up
  </button>
</div>
    </nav>
  );
};

export default Navbar;
