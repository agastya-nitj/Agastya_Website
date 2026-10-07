import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle2, ShieldAlert, Cpu, Terminal, Compass, Zap, Lock, Search, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import TacticalComingSoon from "../components/TacticalComingSoon";
import academyData from "../data/academyData";

export default function LearnPage() {
  const { header, futurePillars, plannedCurriculumTracks, verificationModule } = academyData;
  const [certInput, setCertInput] = useState("");

  return (
    <div className="min-h-screen bg-[#070b14] text-white font-mono selection:bg-amber-500/30">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#0a0f1a] via-[#10192e] to-[#070b14]">
        {/* Ambient Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] text-amber-400 tracking-[0.25em] uppercase font-bold">
              {header.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-special tracking-widest text-white mb-4 uppercase">
            AGASTYA <span className="text-amber-400">ACADEMY</span>
          </h1>

          <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-mono tracking-widest uppercase mb-6">
            "{header.tagline}"
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed mb-8">
            {header.description}
          </p>

          {/* MAIN COMING SOON MODULE */}
          <div className="max-w-3xl mx-auto">
            <TacticalComingSoon 
              title="AGASTYA ACADEMY // COMING SOON"
              systemCode="ACADEMY_SUBSYSTEM_v1.0"
              subtitle="CURRICULUM IN ACTIVE DEVELOPMENT"
              message="We are engineering comprehensive hands-on drone masterclasses, aerodynamic training tracks, and practical certification modules. Live enrollment and credential issuance will be unveiled in upcoming academic terms."
              actionLabel="STANDBY MODE"
            />
          </div>
        </div>
      </section>

      {/* PILLARS OF AGASTYA ACADEMY */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          badge="LEARNING_ARCHITECTURE"
          title="UPCOMING"
          highlight="PILLARS"
          subtitle="The Foundational Core of Our Future Aerospace Learning Curriculum"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futurePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <HudCard key={pillar.id} className="p-6">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl w-fit mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-special font-bold text-white uppercase mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </HudCard>
            );
          })}
        </div>
      </section>

      {/* FUTURE COURSE ARCHITECTURE (PREVIEW) */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <SectionHeader 
          badge="CURRICULUM_PROTOTYPE"
          title="PLANNED"
          highlight="TRACKS"
          subtitle="Architecture Ready for Future Course Launch — Marked Under Development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plannedCurriculumTracks.map((track) => (
            <div 
              key={track.id}
              className="p-6 bg-[#0c1424] border border-white/10 rounded-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-amber-400 font-bold">
                  {track.code} // {track.category}
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 uppercase tracking-widest font-bold">
                  {track.status}
                </span>
              </div>

              <h3 className="text-lg font-special font-bold text-white uppercase mb-2">
                {track.title}
              </h3>

              <p className="text-xs text-gray-300 font-normal leading-relaxed mb-6">
                {track.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] text-gray-400 font-mono">
                <span>TIER: {track.level}</span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" /> ENROLLMENT LOCKED
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE CERTIFICATION & VERIFICATION PORTAL */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">
        <SectionHeader 
          badge={verificationModule.badge}
          title="CERTIFICATE"
          highlight="VERIFICATION"
          subtitle={verificationModule.description}
        />

        <div className="p-8 bg-[#0d1527] border border-amber-500/30 rounded-3xl relative backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              {verificationModule.title}
            </span>
            <span className="text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded uppercase tracking-widest font-bold">
              {verificationModule.status}
            </span>
          </div>

          <p className="text-xs text-gray-300 mb-6 leading-relaxed font-normal">
            Upon graduation from future Agastya Academy cohorts, credentials will be verified through unique cryptographic serial codes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="text"
                placeholder="ENTER CERTIFICATE ID (e.g. AG-2026-XXXX)"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                disabled
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-xs text-gray-400 font-mono outline-none cursor-not-allowed"
              />
            </div>
            <button
              disabled
              className="py-3 px-6 bg-white/5 border border-white/10 text-gray-400 rounded-xl text-xs font-special font-bold uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>STANDBY</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
