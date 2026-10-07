import React from "react";
import { motion } from "framer-motion";

export default function HudCard({
  children,
  className = "",
  glow = "amber",
  tag = "",
  onClick = null,
  hoverEffect = true
}) {
  const glowBorder = glow === "cyan" 
    ? "hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]" 
    : "hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]";

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`relative bg-[#0d1527]/70 border border-white/10 rounded-xl p-6 backdrop-blur-md transition-all duration-300 ${glowBorder} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {/* HUD Corner Reticles */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-amber-400/60" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-amber-400/60" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-amber-400/60" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-amber-400/60" />

      {tag && (
        <div className="absolute top-2 right-3 text-[9px] font-mono tracking-widest text-amber-500/70 uppercase">
          {tag}
        </div>
      )}

      {children}
    </motion.div>
  );
}
