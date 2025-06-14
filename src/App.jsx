import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Getstarted from '../components/Getstarted.jsx';
import Footer from '../components/Footer.jsx';
import Founders from '../components/Founders.jsx';
import Navbar from '../components/Navbar';
import Professionals from '../components/Professionals';
import PricingPlans from '../components/PricingPlans';
import Body from '../components/Body';
import Home from '../components/Home';
import Searchbar from '../components/Searchbar';
import TopServices from '../components/TopServices.jsx';
import Howitworks from '../components/Howitworks.jsx';

import Services from '../routes/services';
import Hire from '../routes/hire';
import Support from '../routes/support';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Routing for pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services Routes */}
        <Route path="/services/construction" element={<Services type="Construction" />} />
        <Route path="/services/maintenance" element={<Services type="Maintenance" />} />
        <Route path="/services/gold" element={<Services type="Gold Subscription" />} />

        {/* Hire Routes */}
        <Route path="/hire/architects" element={<Hire type="Architects" />} />
        <Route path="/hire/contractors" element={<Hire type="Contractors" />} />
        <Route path="/hire/plumbers" element={<Hire type="Plumbers" />} />
        <Route path="/hire/carpenters" element={<Hire type="Carpenters" />} />
        <Route path="/hire/labour" element={<Hire type="Labour" />} />

        {/* Support Routes */}
        <Route path="/support/contact" element={<Support type="Contact" />} />
        <Route path="/support/faq" element={<Support type="FAQ" />} />
        <Route path="/support/report" element={<Support type="Report" />} />
      </Routes>

      {/* Show Searchbar only on homepage */}
      {location.pathname === '/' && (
        <div className="flex justify-center -mt-12">
          <Searchbar />
        </div>
      )}

      {/* Extra sections you added */}
      <TopServices />
      <Professionals />
      <PricingPlans />
      <Body />

      
      <Howitworks />
      <Getstarted/>
      <Founders/>
      <Footer/>
    </>
  );
}

export default App;