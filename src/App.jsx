import Footer from "../components/Footer";
import Founders from "../components/Founders";
import GetStarted from "../components/GetStarted";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">

      <GetStarted/>

      {/*Founders*/}
      <Founders/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
