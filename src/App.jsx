import Hero from "./pages/Hero";
import About from "./components/About";
import Coordinators from "./pages/Coordinators";
import heroSectionData from "./data/heroSectionData";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alumni from "./pages/Alumni";
import AboutPage from "./pages/AboutPage";
import SystemOverview from "./pages/System";

function App() {
  return (
    <Router>
      <div className="bg-[#0a0f1a] min-h-screen font-normal">
        {/* club logo at top right */}
        <div className="absolute top-0 right-0 p-4 z-[100]">
          <img src={heroSectionData.logo} alt="Club Logo" className="w-16 h-16" />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Coordinators />
                <Team />
                <AboutPage />
                <SystemOverview />
                <Footer />
              </>
            }
          />

          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;