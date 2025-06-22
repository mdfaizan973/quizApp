// import "./App.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/HomePage/LandingPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="mt-16 mb-2">
        <LandingPage />
      </div>

      <Footer />
    </>
  );
}

export default App;
