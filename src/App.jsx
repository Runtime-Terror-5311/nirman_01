import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';       // Make sure this path is correct
import Services from '../routes/services';
import Hire from '../routes/hire';
import Support from '../routes/support';
import Home from '../components/Home';
import Searchbar from '../components/Searchbar';
import TopServices from '../components/TopServices.jsx'
function App() {
  return (
    <>
      <Navbar />

      {/* Routing for pages */}
      <Routes>
        {/* Default Landing Page */}
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

      {/* Only show Searchbar on homepage */}
      {location.pathname === '/' && (
        <div className="flex justify-center -mt-12">
          <Searchbar />
        </div>
      )}
      <TopServices/>

      {/* Default welcome page (only visible when no specific route is matched) */}
      {/* <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Nirmaan</h1>
          <p className="text-gray-700">
            Connecting contractors and users to build better together.
          </p>
        </div>
      </div> */}
      
      
      
      {/* <div className="bg-red-500 text-white p-4 text-center text-2xl">
  If you can see red, Tailwind is working.
</div> */}

    </>
  );
}

export default App;
