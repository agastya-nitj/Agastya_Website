import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Zap, Terminal as TerminalIcon, Activity, Box, Cpu } from "lucide-react";

const systemData = {
  radar: [
    { id: "mission", label: "MISSION", icon: Target, angle: 45, content: "To design, develop, and deploy autonomous UAV systems that showcase innovation in aerodynamics and AI while representing NIT Jalandhar globally." },
    { id: "vision", label: "VISION", icon: Eye, angle: 165, content: "To be India's leading collegiate UAV research hub, setting benchmarks in autonomous flight technology and inspiring future aerospace engineers." },
    { id: "goals", label: "GOALS", icon: Zap, angle: 285, content: "Win national UAV competitions, advance aerodynamic research, build industry-standard drones, and foster technical excellence." },
  ],
  unique: [
    { id: "01", title: "Interdisciplinary", content: "Expertise in aerodynamics, electronics, software, and mechanical engineering." },
    { id: "02", title: "Industry-Grade", content: "Professional-grade tools and methodologies comparable to industrial standards." },
    { id: "03", title: "Innovation", content: "Each iteration improves performance, efficiency, and autonomous capabilities." },
    { id: "04", title: "National Recognition", content: "Proudly representing NIT Jalandhar at prestigious national UAV competitions." },
  ]
};

export default function SystemOverview() {
  const [activeRadar, setActiveRadar] = useState(systemData.radar[0]);
  const [scanAngle, setScanAngle] = useState(0);
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing animation triggered only when in view
  useEffect(() => {
    if (!isInView) return;

    setIsTyping(true);
    let i = 0;

    const fullText = `> INITIALIZING_CORE_MANIFESTO...
> UPLINK: ESTABLISHED
> DIRECTORY: /ROOT/AGASTYA/UNIQUE_DNA

${systemData.unique
    .map(
      (u) => `[${u.id}] ${u.title.toUpperCase()}\n   >> ${u.content}`
    )
    .join("\n\n")}`;

    setTerminalText("");

    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [isInView]);

  // Sync radar active item with scanline rotation (simple sector mapping)
  useEffect(() => {
    const normalizedAngle = ((scanAngle % 360) + 360) % 360;

    let activeItem;

    // Divide radar into 3 equal sectors
    if (normalizedAngle < 120) {
      activeItem = systemData.radar[2]; // sector 1
    } else if (normalizedAngle < 240) {
      activeItem = systemData.radar[0]; // sector 2
    } else {
      activeItem = systemData.radar[1]; // sector 3
    }

    setActiveRadar(activeItem);
  }, [scanAngle]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#070b14] text-white p-4 md:p-12 font-mono overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#1e293b_0%,_transparent_50%)] opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: TACTICAL ASSETS */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 1. RADAR MODULE */}
          <div className="relative p-6 bg-[#131b2e]/40 border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6 text-cyan-400">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] font-bold">RADAR_SCOPE_v4.0</span>
            </div>

            <div className="relative w-full aspect-square rounded-full border border-cyan-500/20 overflow-hidden flex items-center justify-center">
              {/* Scanline */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                onUpdate={(latest) => {
                  if (latest.rotate !== undefined) {
                    setScanAngle(latest.rotate);
                  }
                }}
                className="absolute inset-0 z-10 origin-center"
                style={{ background: "conic-gradient(from 0deg, transparent 60%, rgba(34, 211, 238, 0.2) 100%)" }}
              />
              
              {/* Radar Grid Circles */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="absolute border border-cyan-500/10 rounded-full" style={{ width: `${(i+1)*25}%`, height: `${(i+1)*25}%` }} />
              ))}

              {/* Blips */}
              {systemData.radar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setScanAngle(item.angle)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 group transition-all duration-500`}
                  style={{
                    left: `${50 + 38 * Math.cos(item.angle * Math.PI / 180)}%`,
                    top: `${50 + 38 * Math.sin(item.angle * Math.PI / 180)}%`
                  }}
                >
                  <div className={`p-3 rounded-full border-2 transition-all ${activeRadar.id === item.id ? 'bg-amber-500 border-white shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-110' : 'bg-[#0a0f1a] border-cyan-500/40 opacity-30'}`}>
                    <item.icon className={`w-4 h-4 ${activeRadar.id === item.id ? 'text-black' : 'text-white'}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. SCAN RESULT BOX */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeRadar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#131b2e]/60 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-xl backdrop-blur-md"
            >
              <h4 className="text-amber-500 text-[10px] font-bold tracking-widest mb-3 uppercase flex items-center gap-2">
                <Box className="w-3 h-3" /> DATA_ENTRY: {activeRadar.label}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed font-normal italic">"{activeRadar.content}"</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: TERMINAL & SYSTEM STATS */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. PRIMARY TERMINAL */}
          <div className="w-full bg-[#0d1321]/80 border border-white/10 rounded-3xl p-8 h-[600px] flex flex-col relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <TerminalIcon className="w-5 h-5 text-cyan-500" />
                <span className="text-xs text-cyan-500/80 font-bold tracking-[0.2em] uppercase">AGASTYA_MANIFEST_SYSTEM</span>
              </div>
              <div className="hidden md:flex gap-4 items-center">
                <div className="text-[9px] text-white/30 tracking-widest uppercase">Encryption: AES-256</div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>

            {/* Typing Content */}
            <div className="flex-1 overflow-y-auto font-mono text-xs md:text-md whitespace-pre-wrap leading-relaxed custom-scrollbar">
              {terminalText.split("\n").map((line, index) => {
                let lineClass = "text-cyan-400/90";

                // Amber headings
                if (line.startsWith(">")) {
                  lineClass = "text-amber-400 font-semibold";
                }

                // Section titles like [01] TITLE
                if (/^\[\d+\]/.test(line)) {
                  lineClass = "text-amber-400 font-bold tracking-wide";
                }

                // Content description lines
                if (line.trim().startsWith(">>")) {
                  lineClass = "text-gray-300";
                }

                return (
                  <div key={index} className={lineClass}>
                    {line || "\u00A0"}
                  </div>
                );
              })}

              {isTyping && (
                <span className="inline-block w-2.5 h-5 bg-cyan-500 animate-pulse ml-2" />
              )}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-4 right-8 flex items-center gap-6 opacity-20 text-[10px] uppercase tracking-widest">
              <span>Nodes: 32</span>
              <span>Buffer: 100%</span>
            </div>
          </div>

          {/* 2. DECORATIVE DATA STRIPS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ {label: 'Aerodynamics', val: '98%'}, {label: 'Autonomy', val: 'Active'}, {label: 'Sensors', val: 'Ready'}, {label: 'Sync', val: 'Online'} ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center">
                <span className="text-[8px] text-white/40 uppercase mb-1">{stat.label}</span>
                <span className="text-xs text-cyan-400 font-bold">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}