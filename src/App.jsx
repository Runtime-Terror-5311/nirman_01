import Footer from "./components/Footer";
import Founders from "./components/Founders";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      {/* Main content (centered) */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Nirmaan</h1>
          <p className="text-gray-700">
            Connecting contractors and users to build better together.
          </p>
        </div>
      </div>

      <GetStarted/>

      {/*Founders*/}
      <Founders/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
