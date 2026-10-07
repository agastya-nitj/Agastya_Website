import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Lock, Activity, Sparkles } from "lucide-react";

export default function TacticalComingSoon({ 
  title = "MODULE UNDER DEVELOPMENT",
  systemCode = "SYS_STANDBY_MODE",
  subtitle = "SYSTEM STATUS: COMING SOON",
  message = "This subsystem is currently in active planning and development by the Agastya engineering crew. Official deployment updates will be broadcasted across our telemetry channels.",
  actionLabel = "TELEMETRY STANDBY",
  compact = false
}) {
  return (
    <div className={`relative w-full ${compact ? "p-6 md:p-8" : "p-8 md:p-12"} bg-[#0d1527]/80 border border-amber-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden font-mono`}>
      {/* HUD Corner Reticles */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

      {/* Background Ambient Grid & Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Header Telemetry Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-[10px] text-amber-400 tracking-[0.25em] uppercase font-bold">
            {systemCode}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-special font-bold text-white tracking-wider mb-2">
          {title}
        </h3>

        {/* Status Subtitle */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm tracking-widest uppercase font-semibold mb-4">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>{subtitle}</span>
        </div>

        {/* Description Message */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal max-w-lg">
          {message}
        </p>

        {/* Tactical Status Box */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-[11px] text-amber-300 tracking-wider">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span>STATUS: [ LOCKED // IN DEVELOPMENT ]</span>
          <span className="text-white/40">|</span>
          <span className="text-cyan-400">{actionLabel}</span>
        </div>
      </div>
    </div>
  );
}
