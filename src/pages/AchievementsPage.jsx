import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, ShieldCheck, Flag, Sparkles, Star, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import achievementsData from "../data/achievementsData";

export default function AchievementsPage() {
  const { header, verifiedAchievements, milestoneStats } = achievementsData;

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

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-special tracking-widest text-white mb-6 uppercase">
            CLUB <span className="text-amber-400">ACHIEVEMENTS</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-8 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {milestoneStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#0d1527] border border-white/10 text-center flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-3xl sm:text-4xl font-special font-bold text-amber-400 mb-1">
                {stat.val}
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-[10px] text-gray-400 font-mono mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED ACHIEVEMENTS LIST */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          badge="VERIFIED_ACCOMPLISHMENTS"
          title="ENGINEERING"
          highlight="HONORS"
          subtitle="Official Milestones and Recognitions Earned Through Flight Rigor"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verifiedAchievements.map((ach) => {
            const Icon = ach.icon;
            return (
              <HudCard key={ach.id} tag={ach.year} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded font-bold uppercase tracking-widest">
                      {ach.badge}
                    </span>
                  </div>

                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-1">
                    {ach.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-special font-bold text-white mb-3 uppercase tracking-wide">
                    {ach.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] text-cyan-300/90 font-mono border-l-2 border-cyan-400/50 pl-3">
                    <span className="text-cyan-400 font-bold uppercase">IMPACT: </span>
                    {ach.impact}
                  </div>
                </div>
              </HudCard>
            );
          })}
        </div>
      </section>

      {/* VERIFICATION STATEMENT */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-6 bg-[#0a101f] border border-white/10 rounded-2xl">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-bold mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>INTEGRITY MANDATE</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-normal">
            All listed achievements reflect verified representations and documented operational milestones by Team Agastya at NIT Jalandhar.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
