import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Sparkles, Cpu, Layers, Award, CheckCircle2, Terminal, Star, ExternalLink, Compass } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Coordinators from "./Coordinators";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import missionVisionData from "../data/missionVisionData";

export default function About() {
  const { mission, vision, coreValues, story, origin } = missionVisionData;

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
              ESTABLISHED AT NIT JALANDHAR
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-special tracking-widest text-white mb-6 uppercase">
            ABOUT <span className="text-amber-400">AGASTYA</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            Aerospace, Autonomous Aerial Systems & Robotics Innovation Hub at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar.
          </p>
        </div>
      </section>

      {/* SECTION: ORIGIN & MEANING */}
      {origin && (
        <section className="py-16 px-6 relative z-10 max-w-6xl mx-auto border-b border-white/5">
          <SectionHeader 
            badge={origin.badge}
            title="ORIGIN &"
            highlight="MEANING"
            subtitle={origin.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-gray-300 font-normal leading-relaxed text-sm sm:text-base">
              <p className="border-l-2 border-amber-400/60 pl-4 py-1">
                <span className="text-amber-400 font-semibold font-special tracking-wider">AGASTYA</span> is named after <span className="text-white font-semibold">Maharishi Agastya</span>, one of the revered sages of ancient India and a figure associated with knowledge, exploration and the study of the natural world. In Indian astronomical tradition, <span className="text-white font-semibold">Agastya</span> is also the name given to <span className="text-amber-300 font-semibold">Canopus</span>, one of the brightest stars in the night sky.
              </p>
              
              <p className="border-l-2 border-cyan-400/40 pl-4 py-1 text-gray-300">
                The name therefore reflects the spirit of looking beyond the horizon, understanding the skies and pushing the boundaries of knowledge—values that closely align with our pursuit of aerospace, autonomous aerial systems and robotics.
              </p>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <p className="text-amber-300 font-semibold text-xs sm:text-sm tracking-wide italic">
                  "From the ancient seeker of the skies to the engineers building the future of flight — AGASTYA carries that journey forward."
                </p>
              </div>

              {origin.citation && (
                <div className="pt-2">
                  <a 
                    href={origin.citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-amber-400 transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-cyan-500/30 hover:border-amber-400"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Reference: {origin.citation.label}</span>
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <HudCard glow="cyan" tag="CELESTIAL_UPLINK" className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-amber-400">
                  <Star className="w-5 h-5 text-amber-400 animate-spin-slow" />
                  <span className="text-xs font-bold tracking-widest uppercase">CANOPUS // AGASTYA</span>
                </div>
                <div className="space-y-3 text-xs text-gray-300 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase">ASTRONOMICAL ID</span>
                    <span className="text-amber-300 font-semibold">Alpha Carinae</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase">MAGNITUDE</span>
                    <span className="text-white font-semibold">-0.74 (2nd Brightest)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase">SIGNIFICANCE</span>
                    <span className="text-white font-semibold">Ancient Navigation & Astronomy</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40 uppercase">MISSION SPIRIT</span>
                    <span className="text-cyan-400 font-semibold">Boundless Flight</span>
                  </div>
                </div>
              </HudCard>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: OUR STORY */}
      <section className="py-20 px-6 relative z-10 max-w-6xl mx-auto">
        <SectionHeader 
          badge={story.badge}
          title="ORIGINS &"
          highlight="EVOLUTION"
          subtitle={story.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-gray-300 font-normal leading-relaxed text-sm sm:text-base">
            {story.paragraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-amber-400/40 pl-4 py-1">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <HudCard glow="amber" tag="SYS_INFO" className="p-8">
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <Terminal className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest uppercase">INSTITUTIONAL IDENTITY</span>
              </div>
              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase">Institution</span>
                  <span className="text-white font-semibold">NIT Jalandhar</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase">Domain</span>
                  <span className="text-white font-semibold">Aerospace & UAVs</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase">Focus</span>
                  <span className="text-white font-semibold">Autonomous Flight & AI</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40 uppercase">Coordinates</span>
                  <span className="text-amber-400 font-semibold">31.3948° N, 75.5358° E</span>
                </div>
              </div>
            </HudCard>
          </div>
        </div>
      </section>

      {/* SECTION: MISSION & VISION */}
      <section className="py-20 px-6 bg-[#090f1d] relative z-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            badge="STRATEGIC_MANDATE"
            title="MISSION &"
            highlight="VISION"
            subtitle="The Foundations Steering Our Aerodynamic Research & Engineering Objectives"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MISSION */}
            <HudCard glow="amber" tag="DIRECTIVE_01" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-400/20 text-amber-400 rounded-xl">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-special font-bold text-white uppercase tracking-wider">
                    {mission.label}
                  </h3>
                  <span className="text-[11px] text-amber-400 tracking-widest uppercase font-mono">
                    {mission.tagline}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 font-normal leading-relaxed text-sm mb-6 italic border-l-2 border-amber-400/40 pl-4">
                "{mission.statement}"
              </p>

              <div className="space-y-3">
                {mission.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </HudCard>

            {/* VISION */}
            <HudCard glow="cyan" tag="DIRECTIVE_02" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-400/20 text-cyan-400 rounded-xl">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-special font-bold text-white uppercase tracking-wider">
                    {vision.label}
                  </h3>
                  <span className="text-[11px] text-cyan-400 tracking-widest uppercase font-mono">
                    {vision.tagline}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 font-normal leading-relaxed text-sm mb-6 italic border-l-2 border-cyan-400/40 pl-4">
                "{vision.statement}"
              </p>

              <div className="space-y-3">
                {vision.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </HudCard>
          </div>
        </div>
      </section>

      {/* SECTION: CORE VALUES / SYSTEM DNA */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          badge="SYSTEM_DNA"
          title="CORE VALUES &"
          highlight="PILLARS"
          subtitle="The Engineering Principles Fueling Every Flight, Simulation & Platform Build"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <HudCard key={val.id} tag={`[${val.id}]`} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-special font-bold text-white uppercase tracking-wider">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                  {val.content}
                </p>
              </HudCard>
            );
          })}
        </div>
      </section>

      {/* SECTION: FACULTY COORDINATORS (VISIONARIES) */}
      <Coordinators />

      <Footer />
    </div>
  );
}
