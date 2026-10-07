import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, Youtube, Terminal, Zap, Compass, Activity, ChevronRight, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [terminalLines, setTerminalLines] = useState([
    "> INITIALIZING_GROUND_STATION...",
    "> CONNECTION_SECURE_AES_256",
    "> TRACKING_SATELLITE_UPLINK..."
  ]);

  // Telemetry simulation
  const [coords] = useState({ lat: "31.3948° N", lon: "75.5358° E" });
  
  const agastyaSocials = {
    linkedin: "https://www.linkedin.com/company/the-agastya/",
    instagram: "https://www.instagram.com/the_agastya_nitj/",
    youtube: "https://www.youtube.com/@agastya-nitj",
    email: "agastya@nitj.ac.in"
  };

  const navLinks = [
    { label: "About Us", path: "/about" },
    { label: "Roadmap", path: "/roadmap" },
    { label: "Projects", path: "/projects" },
    { label: "Events", path: "/events" },
    { label: "Achievements", path: "/achievements" },
    { label: "Media & Comms", path: "/media" },
    { label: "Agastya Academy", path: "/learn" },
    { label: "Join Agastya", path: "/join" },
    { label: "Alumni Network", path: "/alumni" },
  ];

  // Add "Log" lines periodically
  useEffect(() => {
    const logs = [
      "> SIGNAL_STRENGTH_OPTIMAL",
      "> DRONE_ID_AG-04_ACTIVE",
      "> FETCHING_MISSION_DATA...",
      "> WIND_SPEED: 12KM/H",
      "> ALTITUDE: 120M",
      "> BATTERY_LEVEL: 88%"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-4), logs[i]]);
      i = (i + 1) % logs.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#05080f] pt-16 pb-16 px-6 overflow-hidden border-t border-amber-500/20 font-mono text-white">
      {/* HUD SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-100 bg-[linear-gradient(rgba(18,16,16,1)_50%,rgba(0,0,0,1)_50%),linear-gradient(90deg,rgba(255,0,0,1),rgba(0,255,0,1),rgba(0,0,255,1))] z-10 bg-[length:100%_2px,3px_100%]" />

      <div className="max-w-7xl mx-auto relative z-20 space-y-12">
        
        {/* TOP ROW: BRANDING, TERMINAL & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* BRAND & COORDINATES (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/"
              className="inline-block"
            >
              <h2 className="text-2xl sm:text-3xl font-special font-bold text-white tracking-[0.25em]">
                AGASTYA
              </h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-transparent mt-1" />
              <p className="text-base text-amber-400 mt-2">
                उड़ान का विज्ञान
              </p>
            </Link>

            <p className="text-xs text-gray-400 font-normal leading-relaxed">
              Aerospace & Unmanned Aerial Systems Research Hub at Dr. B. R. Ambedkar National Institute of Technology Jalandhar.
            </p>

            <div className="flex gap-6 text-gray-400 text-[10px] font-mono tracking-tighter pt-2 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-white/30 mb-0.5">LATITUDE</span>
                <span className="text-amber-300">{coords.lat}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 mb-0.5">LONGITUDE</span>
                <span className="text-amber-300">{coords.lon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 mb-0.5">STATUS</span>
                <span className="text-green-400 font-bold">READY TO FLY</span>
              </div>
            </div>
          </div>

          {/* SYSTEM CONSOLE TERMINAL (Col 5-8) */}
          <div className="lg:col-span-5 bg-black/60 border border-white/10 p-4 rounded-xl font-mono text-[11px] text-amber-500/90 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase tracking-widest text-[10px] font-bold text-cyan-400">Ground_Station_Console_v2.5</span>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="space-y-1.5 h-24 overflow-hidden">
              {terminalLines.map((line, idx) => (
                <p key={idx} className="leading-tight truncate">{line}</p>
              ))}
              <p className="animate-pulse text-amber-400">_</p>
            </div>
          </div>

          {/* TELEMETRY UPLINKS & CHANNELS (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Comms Frequency
            </h3>

            <div className="space-y-2 text-xs">
              <a 
                href={`mailto:${agastyaSocials.email}`} 
                className="block text-gray-300 hover:text-amber-400 transition-colors truncate"
              >
                {agastyaSocials.email}
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a 
                  href={agastyaSocials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-amber-400/20 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                  aria-label="Agastya Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={agastyaSocials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-amber-400/20 text-gray-400 hover:text-amber-400 rounded-lg transition-all"
                  aria-label="Agastya LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={agastyaSocials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg transition-all"
                  aria-label="Agastya YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-[10px] text-gray-500 font-mono pt-2">
              NIT Jalandhar, GT Road, Punjab - 144008
            </p>
          </div>

        </div>

        {/* NAVIGATION DIRECTORY STRIP */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-special uppercase tracking-wider text-gray-400">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              &copy; {currentYear} Team Agastya NIT Jalandhar. All rights reserved.
            </p>
          </div>
        </div>

      </div>

      {/* DECORATIVE: RADAR CIRCLE CLIP */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-amber-500/10 rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-amber-500/5 rounded-full pointer-events-none" />
    </footer>
  );
}