import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "../components/navbar";
import Footer from "../components/Footer.jsx";

// Home Sections
import Home from "../components/Home";
import Searchbar from "../components/Searchbar";
import TopServices from "../components/TopServices.jsx";
import Professionals from "../components/Professionals";
import PricingPlans from "../components/PricingPlans";
import Body from "../components/Body";
import Howitworks from "../components/Howitworks.jsx";
import Getstarted from "../components/Getstarted.jsx";
import Founders from "../components/Founders.jsx";

// Services
import Services from "../components/Services";
import Construction from "../components/Construction";
import Maintenance from "../components/Maintenance";
import Renovation from "../components/Renovation";
import Gold from "../components/Gold";

// Construction Subpages
import Residential from "./routes/Residential.jsx";
import Commercial from "./routes/Commercial.jsx";
import Plumbing from "./routes/Plumbing.jsx";
import Interior from "./routes/Interior.jsx";
import Electrical from "./routes/Electrical.jsx";
import Carpenters from "./routes/Carpenters.jsx";
import Labour from "./routes/Labour.jsx";
import Contractors from "./routes/Contractors.jsx";
import Architects from "./routes/Architects.jsx";

// Residential Inner Pages
import ModernHomes from "./routes/ModernHomes.jsx";
import LuxuryVillas from "./routes/LuxuryVillas.jsx";

// Hire Pages
import Hire from "../routes/hire";

// Support
import Support from "../routes/support";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/renovation" element={<Renovation />} />
        <Route path="/services/gold" element={<Gold />} />

        {/* Construction Subpages */}
        <Route path="/services/construction/residential" element={<Residential />} />
        <Route path="/services/construction/commercial" element={<Commercial />} />
        <Route path="/services/construction/plumbing" element={<Plumbing />} />
        <Route path="/services/construction/interior" element={<Interior />} />
        <Route path="/services/construction/electrical" element={<Electrical />} />
        <Route path="/services/construction/carpenters" element={<Carpenters />} />
        <Route path="/services/construction/labour" element={<Labour />} />
        <Route path="/services/construction/contractors" element={<Contractors />} />
        <Route path="/services/construction/architects" element={<Architects />} />

        {/* Residential inner routes */}
        <Route path="/services/construction/residential/modern-homes" element={<ModernHomes />} />
        <Route path="/services/construction/residential/luxury-villas" element={<LuxuryVillas />} />

        {/* Hire Routes (TopServices links go here) */}
        <Route path="/hire/architects" element={<Architects />} />
        <Route path="/hire/contractors" element={<Contractors />} />
        <Route path="/hire/plumbers" element={<Plumbing />} />
        <Route path="/hire/carpenters" element={<Carpenters />} />
        <Route path="/hire/interior" element={<Interior />} />
        <Route path="/hire/electrical" element={<Electrical />} />
        <Route path="/hire/labour" element={<Labour />} />

        {/* Support */}
        <Route path="/support/contact" element={<Support type="Contact" />} />
        <Route path="/support/faq" element={<Support type="FAQ" />} />
        <Route path="/support/report" element={<Support type="Report" />} />
      </Routes>

      {/* Homepage sections only on "/" */}
      {location.pathname === "/" && (
        <>
          <div className="flex justify-center -mt-12">
            <Searchbar />
          </div>
          <TopServices />
          <Professionals />
          <PricingPlans />
          <Body />
          <Howitworks />
          <Getstarted />
          <Founders />
        </>
      )}

      {/* Footer always visible */}
      <Footer />
    </>
  );
}

export default App;
