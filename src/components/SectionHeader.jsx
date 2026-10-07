import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  badge = "TELEMETRY_LOG",
  title = "SECTION TITLE",
  highlight = "",
  subtitle = "",
  align = "center",
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center flex flex-col items-center" : "text-left"} ${className}`}>
      {/* Telemetry Pill */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-mono text-amber-400 tracking-[0.25em] uppercase font-bold">
            {badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-special tracking-widest text-white/90 uppercase">
        {title} {highlight && <span className="text-amber-400">{highlight}</span>}
      </h2>

      {/* Accent Bar */}
      <div className={`h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 my-4 rounded-full ${isCenter ? "mx-auto" : ""}`} />

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-normal tracking-wide uppercase max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
