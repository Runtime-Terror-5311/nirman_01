import React from "react";
import DotGrid from "./DotGrid"; // Adjust path if needed
import SplitText from "./SplitText"; // Add correct path to your SplitText component

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-cover bg-center overflow-hidden">
      
      {/* 🔵 DotGrid Background Animation */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={14}
          baseColor="#D3D3D3"
          activeColor="#D3D3D3"
          proximity={100}
          shockRadius={300}
          shockStrength={4}
          resistance={70}
          returnDuration={1.5}
        />
      </div>

      {/* 🟡 Hero Image Layer */}
      <img
        src="src/assets/herosection.jpg" // Ensure path is valid relative to public or src
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-10"
      />

      {/* 🔴 Foreground Content */}
      <div id="home" className="relative z-20 container mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <SplitText
            text="Build Your Dream Home with Trusted Experts!"
            className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight"
            splitType="words"
            delay={250}
            duration={2.5}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
            rootMargin="-100px"
          />

          <p className="text-xl text-black mb-8">
            Connecting clients to verified professionals.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-green-900 border-2 cursor-pointer border-black text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 hover:text-white transition whitespace-nowrap">
              Start Building
            </button>
            <button className="border-2 cursor-pointer border-black text-black px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition whitespace-nowrap">
              Join as Service Provider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
