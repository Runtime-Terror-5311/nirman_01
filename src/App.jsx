import React from "react";
import Professionals from "../components/Professionals";
import PricingPlans from "../components/PricingPlans";
import Body from "../components/Body";



function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-12 space-y-10">
      {/* Welcome Section */}

      {/* Pricing Plans Section */}
      <Professionals />
      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Body Section */}
      <Body />


     
    </div>
  );
}

export default App;
