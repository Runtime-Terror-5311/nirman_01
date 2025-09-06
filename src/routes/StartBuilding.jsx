import { useNavigate } from "react-router-dom";
import { Hammer, Wrench } from "lucide-react"; // icons

export default function StartBuilding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-12 text-gray-800 text-center">
        What would you like to do?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Construction Card */}
        <div
          onClick={() => navigate("/services/construction")}
          className="cursor-pointer p-10 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 
                     text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white/20 rounded-full">
              <Hammer size={32} />
            </div>
            <h2 className="text-2xl font-bold">Construction</h2>
          </div>
          <p className="mb-6">
            Explore architects, contractors, interior designers, and residential/commercial builders.
          </p>
          <button className="px-4 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100">
            Explore Construction →
          </button>
        </div>

        {/* Maintenance Card */}
        <div
          onClick={() => navigate("/services/maintenance")}
          className="cursor-pointer p-10 rounded-2xl bg-gradient-to-r from-blue-400 to-teal-500 
                     text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white/20 rounded-full">
              <Wrench size={32} />
            </div>
            <h2 className="text-2xl font-bold">Maintenance</h2>
          </div>
          <p className="mb-6">
            Find plumbers, electricians, carpenters, and other home service experts.
          </p>
          <button className="px-4 py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100">
            Explore Maintenance →
          </button>
        </div>
      </div>
    </div>
  );
}
