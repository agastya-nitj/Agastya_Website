import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Mail, Linkedin, Instagram, Terminal, Zap, Navigation } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [terminalLines, setTerminalLines] = useState([
    "> INITIALIZING_GROUND_STATION...",
    "> CONNECTION_SECURE_AES_256",
    "> TRACKING_SATELLITE_UPLINK..."
  ]);

  // Telemetry simulation
  const [coords, setCoords] = useState({ lat: "31.3948° N", lon: "75.5358° E" });
  
  const agastyaSocials = {
    linkedin: "https://www.linkedin.com/company/the-agastya/",
    instagram: "https://www.instagram.com/the_agastya_nitj/",
    email: "agastya@nitj.ac.in"
  };

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
    <footer className="relative bg-[#05080f] pt-20 pb-20 px-6 overflow-hidden border-t border-amber-500/20">
      {/* HUD SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-100 bg-[linear-gradient(rgba(18,16,16,1)_50%,rgba(0,0,0,1)_50%),linear-gradient(90deg,rgba(255,0,0,1),rgba(0,255,0,1),rgba(0,0,255,1))] z-10 bg-[length:100%_2px,3px_100%]" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* COLUMN 2: MISSION INFO */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h2 className="text-3xl md:text-4xl font-special font-bold text-white tracking-[0.3em]">
                AGASTYA
              </h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-1" />
              <p className="text-[20px] text-amber-500 mt-2">
                उड़ान का विज्ञान
              </p>
            </motion.div>

            <div className="flex gap-8 text-gray-400 text-[10px] font-mono tracking-tighter">
              <div className="flex flex-col">
                <span className="text-white/30 mb-1">LATITUDE</span>
                <span>{coords.lat}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 mb-1">LONGITUDE</span>
                <span>{coords.lon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 mb-1">STATUS</span>
                <span className="text-green-500">READY TO FLY</span>
              </div>
            </div>
          </div>

          {/* COLUMN 1: LIVE TERMINAL */}
          <div className="bg-black/50 border border-white/10 p-4 rounded-sm font-mono text-[10px] md:text-xs text-amber-500/80 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Terminal className="w-3 h-3" />
              <span className="uppercase tracking-widest">System_Console_v2.0</span>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="space-y-1">
              {terminalLines.map((line, idx) => (
                <p key={idx} className="leading-none">{line}</p>
              ))}
              <p className="animate-pulse">_</p>
            </div>
          </div>

          {/* COLUMN 3: COMMS & UPLINK */}
          <div className="flex flex-col justify-between space-y-8 lg:text-right">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex lg:justify-end items-center gap-2">
                 Uplink Channels <Zap className="w-3 h-3 text-amber-400" />
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <a href={`mailto:${agastyaSocials.email}`} className="block text-gray-400 hover:text-amber-400 transition-colors">
                  {agastyaSocials.email}
                </a>
                <div className="flex lg:justify-end gap-6">
                  <a href={agastyaSocials.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={agastyaSocials.instagram} target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-gray-600 font-mono uppercase">
              Establishment // NITJ Aero-Innovation Hub <br />
              &copy; {currentYear} All Rights Reserved
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