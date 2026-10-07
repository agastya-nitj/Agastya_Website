import React from "react";
import { Link } from "react-router-dom";
import { UserPlus, ArrowRight, Sparkles, Activity } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function HomeJoinCta() {
  return (
    <section id="join-preview" className="py-24 px-6 bg-[#070b14] relative z-10 border-t border-white/5 font-mono overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center p-8 sm:p-12 bg-[#0c1424]/90 border border-amber-500/30 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.15)] backdrop-blur-xl">
        {/* Reticles */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] text-amber-400 tracking-[0.25em] uppercase font-bold">
            CADET_ENLISTMENT_MANDATE
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-special font-bold text-white uppercase tracking-wider mb-4">
          BECOME PART OF <span className="text-amber-400">AGASTYA</span>
        </h2>

        <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-mono tracking-widest uppercase mb-6">
          "Build. Learn. Fly."
        </div>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
          Join our multidisciplinary engineering divisions in Aerodynamics, Autonomous AI, Embedded Avionics, Flight Control Dynamics, and Software Systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/join"
            className="px-8 py-3.5 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>JOIN AGASTYA SQUAD</span>
            <UserPlus className="w-4 h-4" />
          </Link>

          <Link
            to="/about"
            className="px-8 py-3.5 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-white/5 border border-white/20 hover:border-amber-400/60 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>ABOUT OUR CREW</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
