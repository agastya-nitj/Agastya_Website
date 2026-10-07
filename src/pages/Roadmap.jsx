import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, CheckCircle2, Clock, Sparkles, Activity, Layers, ShieldCheck, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import roadmapData from "../data/roadmapData";

export default function Roadmap() {
  const { header, stages } = roadmapData;
  const [activeStageId, setActiveStageId] = useState(stages[0].id);

  const activeStage = stages.find(s => s.id === activeStageId) || stages[0];

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
            MISSION <span className="text-amber-400">ROADMAP</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* TIMELINE STAGE SELECTOR TABS */}
      <section className="py-8 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 font-mono ${
                  isActive 
                    ? "bg-[#131d33] border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)]" 
                    : "bg-[#0b1222]/80 border-white/10 hover:border-amber-400/40 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-amber-400 font-bold tracking-widest uppercase">
                    STAGE {stage.number}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-widest ${stage.statusColor}`}>
                    {stage.status}
                  </span>
                </div>
                <h3 className="text-lg font-special font-bold text-white uppercase tracking-wider">
                  {stage.timeframe}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-tight">
                  {stage.phase}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* DETAILED ACTIVE STAGE VIEW */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {/* Stage Overview Banner */}
            <div className="p-8 bg-[#0d1527]/90 border border-amber-500/30 rounded-3xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-[10px] text-amber-400 tracking-[0.3em] font-bold uppercase mb-1">
                    STAGE {activeStage.number} // {activeStage.phase}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-special font-bold text-white uppercase tracking-wider">
                    {activeStage.timeframe}
                  </h2>
                </div>
                <span className={`self-start md:self-auto text-xs px-3 py-1 rounded-full border uppercase tracking-widest font-bold ${activeStage.statusColor}`}>
                  {activeStage.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-4">
                {activeStage.description}
              </p>

              {activeStage.disclaimer && (
                <div className="text-[11px] text-amber-300/80 italic border-l-2 border-amber-400/50 pl-3">
                  * {activeStage.disclaimer}
                </div>
              )}
            </div>

            {/* Measurable Targets Grid */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-amber-400 text-xs font-bold tracking-widest uppercase">
                <Target className="w-4 h-4" />
                <span>KEY MEASURABLE TARGETS & BENCHMARKS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeStage.measurableTargets.map((target, idx) => (
                  <HudCard key={idx} tag={`TGT_0${idx + 1}`} className="p-6">
                    <div className="text-xs text-amber-400 font-mono tracking-widest uppercase mb-1">
                      {target.label}
                    </div>
                    <div className="text-lg sm:text-xl font-special font-bold text-white mb-2 tracking-wide">
                      {target.metric}
                    </div>
                    <p className="text-xs text-gray-300 font-normal leading-relaxed">
                      {target.detail}
                    </p>
                  </HudCard>
                ))}
              </div>
            </div>

            {/* Tactical Initiatives */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                <Layers className="w-4 h-4" />
                <span>PLANNED INITIATIVES & WORKSTREAMS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeStage.initiatives.map((init, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-[#0a101f] border border-white/10 rounded-2xl relative flex flex-col justify-between hover:border-amber-400/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] px-2 py-0.5 bg-amber-400/10 text-amber-400 rounded border border-amber-400/20 font-bold uppercase tracking-widest">
                          {init.tag}
                        </span>
                        <span className="text-[10px] text-white/30 font-mono">
                          INIT_0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-special font-bold text-white mb-2 uppercase tracking-wide">
                        {init.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-normal leading-relaxed">
                        {init.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </section>

      {/* FOOTER NOTICE */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center text-xs text-gray-400 font-mono">
        <p className="border-t border-white/10 pt-6">
          AGASTYA FLIGHT TRAJECTORY PROTOCOL // ALL TIMEFRAMES ARE STRUCTURED AROUND ACADEMIC TERMS AT NIT JALANDHAR.
        </p>
      </section>

      <Footer />
    </div>
  );
}
