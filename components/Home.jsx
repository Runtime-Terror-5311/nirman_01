import React from "react";
//import backgroundImage from "./assets/hero-background.png"; // Adjust path if needed
// import Searchbar from './Searchbar';
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-cover bg-center">
      
      {/* ✅ Image added as semi-transparent layer */}
      <img
        src="src/assets/herosection.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* ✅ Content above image */}
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Build Your Dream Home with Trusted Experts
          </h1>
          <p className="text-xl text-black-100 mb-8">
            Connecting clients to verified professionals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="border-2 border-black text-black px-6 py-3 rounded-md font-medium hover:bg-green-700 hover:text-white transition whitespace-nowrap">
              Start Building
            </button>
            <button className="border-2 border-black text-black px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition whitespace-nowrap">
              Join as Service Provider
            </button>
          </div>
          {/* <Searchbar/> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
