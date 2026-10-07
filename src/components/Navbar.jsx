import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Compass, 
  FolderGit2, 
  Calendar, 
  Trophy, 
  Radio, 
  BookOpen, 
  UserPlus, 
  Users, 
  X, 
  Menu,
  Activity,
  ChevronRight
} from 'lucide-react';
import heroSectionData from "../data/heroSectionData";

const navItems = [
  { label: "Home", path: "/", targetId: "hero-section", icon: Home },
  { label: "About", path: "/about", targetId: "about-preview", icon: Info },
  { label: "Roadmap", path: "/roadmap", targetId: "roadmap-preview", icon: Compass },
  { label: "Projects", path: "/projects", targetId: "projects-preview", icon: FolderGit2 },
  { label: "Events", path: "/events", targetId: "events-section", icon: Calendar },
  { label: "Achievements", path: "/achievements", targetId: "achievements-preview", icon: Trophy },
  { label: "Media", path: "/media", targetId: "media-preview", icon: Radio },
  { label: "Academy", path: "/learn", targetId: "academy-preview", icon: BookOpen },
  { label: "Join", path: "/join", targetId: "join-preview", icon: UserPlus },
  { label: "Alumni", path: "/alumni", icon: Users },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Initial brief peek on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle route / section navigation
  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.path === location.pathname && item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path);
  };

  return (
    <div 
      ref={menuRef}
      className="fixed z-[1000] top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8"
    >
      {/* Central Tactical Trigger */}
      <div className="relative flex items-center justify-center">
        
        {/* Glow Halo */}
        <div className={`absolute inset-0 bg-amber-500/20 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none ${isOpen ? 'opacity-100 scale-150' : 'opacity-40'}`} />

        {/* Rotating Tactical Ring when open */}
        {isOpen && (
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 border border-dashed border-amber-400/40 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
        )}

        {/* Central Logo Button */}
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle Tactical Navigation"
          className={`relative z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0a0f1a] border-2 transition-all duration-300 flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer ${
            isOpen ? 'border-amber-400 scale-110 shadow-[0_0_20px_rgba(245,158,11,0.6)]' : 'border-white/20 hover:border-amber-400 hover:scale-105'
          }`}
        >
          <img 
            src={heroSectionData.logo} 
            alt="Agastya Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent" />
        </button>
      </div>

      {/* Expanded Radial HUD Orbital Menu */}
      {isOpen && (
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          
          {/* Backdrop Blur Overlay for mobile/desktop focus */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 cursor-pointer animate-fade-in" 
          />

          {/* Tactical HUD Drawer Panel for Quick Browsing */}
          <div className="absolute right-0 top-10 sm:top-12 w-[280px] sm:w-[320px] bg-[#0c1424]/95 border-2 border-amber-400/40 rounded-2xl p-4 sm:p-5 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-xl font-mono text-white max-h-[80vh] overflow-y-auto custom-scrollbar">
            
            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px] text-amber-400">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span className="font-bold tracking-[0.2em]">AGASTYA_NAV_GRID</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Items Grid */}
            <div className="flex flex-col gap-1">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 border ${
                      isActive 
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold' 
                        : 'bg-white/[0.03] border-white/5 text-gray-300 hover:bg-white/10 hover:border-amber-400/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md ${isActive ? 'bg-amber-400 text-black' : 'bg-white/5 text-amber-400'}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-special tracking-wider uppercase">
                          {item.label}
                        </span>
                        <span className="text-[9px] text-gray-400 font-mono tracking-tight">
                          {item.path}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-amber-400/60">
                      <span>0{idx + 1}</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-gray-400 uppercase tracking-widest">
              <span>SYS_FREQ: 2.4GHz</span>
              <span className="text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                ONLINE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}