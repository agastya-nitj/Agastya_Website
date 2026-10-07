import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activity } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Page Modules for Homepage
import Hero from "./pages/Hero";
import SystemOverview from "./pages/System";
import DroneAnatomy from "./pages/DroneAnatomy";
import Events from "./pages/Events";
import Coordinators from "./pages/Coordinators";
import Team from "./pages/Team";
import Footer from "./pages/Footer";

// Homepage Modular Sections
import HomeUpcomingEvents from "./components/home/HomeUpcomingEvents";
import HomeProjects from "./components/home/HomeProjects";
import HomeAchievements from "./components/home/HomeAchievements";
import HomeTargets from "./components/home/HomeTargets";
import HomeRoadmap from "./components/home/HomeRoadmap";
import HomeAcademy from "./components/home/HomeAcademy";
import HomeMedia from "./components/home/HomeMedia";
import HomeJoinCta from "./components/home/HomeJoinCta";

// Lazy Loaded Dedicated Sub-Pages for Optimal Performance
const About = lazy(() => import("./pages/About"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const LearnPage = lazy(() => import("./pages/LearnPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const Alumni = lazy(() => import("./pages/Alumni"));

// Tactical Loading Fallback
function TacticalLoadingScreen() {
  return (
    <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center font-mono text-white p-6">
      <div className="relative p-8 bg-[#0d1527] border border-amber-500/30 rounded-2xl flex flex-col items-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
        
        <div className="flex items-center gap-3 text-amber-400 mb-3">
          <Activity className="w-5 h-5 animate-pulse" />
          <span className="text-xs tracking-[0.3em] font-bold">UPLINK_INITIALIZING...</span>
        </div>
        <p className="text-[11px] text-gray-400 tracking-wider uppercase">Loading Tactical Telemetry Deck</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* 1. HERO WITH TACTICAL CTAs */}
      <Hero />

      {/* 2. MISSION / VISION & RADAR MANIFESTO */}
      <SystemOverview />

      {/* 3. WHAT WE BUILD (SYSTEM ANATOMY) */}
      <DroneAnatomy />

      {/* 4. UPCOMING EVENTS PREVIEW */}
      <HomeUpcomingEvents />

      {/* 5. HISTORICAL FLIGHT SHOWCASE & GALLERIES */}
      <Events />

      {/* 6. LATEST PROJECTS PREVIEW */}
      <HomeProjects />

      {/* 7. VERIFIED ACHIEVEMENTS PREVIEW */}
      <HomeAchievements />

      {/* 8. OUR OPERATIONAL TARGETS */}
      <HomeTargets />

      {/* 9. MISSION ROADMAP PREVIEW */}
      <HomeRoadmap />

      {/* 10. AGASTYA ACADEMY — COMING SOON */}
      <HomeAcademy />

      {/* 11. FACULTY COORDINATORS (VISIONARIES) */}
      <Coordinators />

      {/* 12. TEAM & CREW */}
      <Team />

      {/* 13. TRANSMISSION & MEDIA */}
      <HomeMedia />

      {/* 14. JOIN AGASTYA RECRUITMENT CTA */}
      <HomeJoinCta />

      {/* 15. GROUND STATION TERMINAL FOOTER */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#0a0f1a] min-h-screen font-normal selection:bg-amber-500/30">
        <Suspense fallback={<TacticalLoadingScreen />}>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Dedicated Sub-Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/certification" element={<LearnPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;