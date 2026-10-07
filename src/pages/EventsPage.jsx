import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  Radio, 
  Monitor, 
  UserPlus, 
  Flame, 
  Cpu, 
  Navigation, 
  PackageCheck, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Layers,
  Activity
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import eventsData from "../data/eventsData";

export default function EventsPage() {
  const { header, upcomingEvents, pastEvents } = eventsData;
  const [activeTab, setActiveTab] = useState("UPCOMING");
  const [selectedPastIndex, setSelectedPastIndex] = useState(0);

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
            FLIGHT <span className="text-amber-400">EVENTS</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* TAB NAVIGATION: UPCOMING / PAST / TIMELINE */}
      <section className="py-6 px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("UPCOMING")}
            className={`px-6 py-2.5 rounded-xl font-special text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 border ${
              activeTab === "UPCOMING"
                ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold"
                : "bg-[#0c1424] text-gray-400 border-white/10 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            UPCOMING MISSIONS ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab("PAST")}
            className={`px-6 py-2.5 rounded-xl font-special text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 border ${
              activeTab === "PAST"
                ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold"
                : "bg-[#0c1424] text-gray-400 border-white/10 hover:border-amber-400/40 hover:text-white"
            }`}
          >
            PAST MILESTONES ({pastEvents.length})
          </button>
        </div>
      </section>

      {/* VIEW 1: UPCOMING EVENTS */}
      {activeTab === "UPCOMING" && (
        <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
          <SectionHeader 
            badge="UPCOMING_FLIGHT_LOG"
            title="SCHEDULED"
            highlight="MISSIONS"
            subtitle="Explore Currently Planned Competitions, Inductions, and Technical Boot Camps"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;
              return (
                <HudCard key={event.id} tag={event.category} className="flex flex-col justify-between p-6">
                  <div>
                    {/* Event Category & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded font-bold uppercase tracking-widest">
                        {event.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-special font-bold text-white mb-3 uppercase tracking-wide">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                      {event.desc}
                    </p>

                    {/* Metadata Readouts */}
                    <div className="space-y-2 mb-6 text-xs text-gray-400 border-t border-b border-white/10 py-3 font-mono">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" /> DATE:
                        </span>
                        <span className="text-amber-300 font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> VENUE:
                        </span>
                        <span className="text-gray-300">{event.venue}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {event.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-400">
                          <div className="w-1 h-1 rounded-full bg-amber-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Registration CTA Button */}
                  <div>
                    <button
                      disabled={!event.registrationLink}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold font-special tracking-widest uppercase transition-all flex items-center justify-center gap-2 border ${
                        event.registrationLink
                          ? "bg-amber-500 hover:bg-amber-400 text-black border-amber-400 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                          : "bg-white/5 border-white/10 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {event.registrationStatus}
                    </button>
                  </div>
                </HudCard>
              );
            })}
          </div>
        </section>
      )}

      {/* VIEW 2: PAST EVENTS (GALLERY & DETAILS) */}
      {activeTab === "PAST" && (
        <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
          <SectionHeader 
            badge="HISTORICAL_FLIGHT_ARCHIVE"
            title="COMPLETED"
            highlight="MILESTONES"
            subtitle="Verified Aerial Demonstrations, Aerodynamic Workshops and National Representations"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Left */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img 
                  src={pastEvents[selectedPastIndex].images[0]} 
                  alt={pastEvents[selectedPastIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs font-special uppercase tracking-widest">
                    {pastEvents[selectedPastIndex].subtitle}
                  </span>
                  <h3 className="text-2xl font-special font-bold text-white uppercase">
                    {pastEvents[selectedPastIndex].title}
                  </h3>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {pastEvents[selectedPastIndex].images.map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-amber-400"
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* List Right */}
            <div className="lg:col-span-5 space-y-3">
              {pastEvents.map((evt, idx) => {
                const isSel = idx === selectedPastIndex;
                const Icon = evt.icon;
                return (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedPastIndex(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSel 
                        ? "bg-[#131d33] border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]" 
                        : "bg-[#0b1222]/60 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${isSel ? "bg-amber-400 text-black" : "bg-white/5 text-amber-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-special font-bold text-white uppercase tracking-wide">
                          {evt.title}
                        </h4>
                        <span className="text-[10px] text-amber-400 tracking-widest uppercase">
                          {evt.subtitle}
                        </span>
                      </div>
                    </div>
                    {isSel && (
                      <p className="text-xs text-gray-300 font-normal leading-relaxed mt-3 border-t border-white/10 pt-3">
                        {evt.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* EVENT TIMELINE CHRONOLOGY */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/10">
        <SectionHeader 
          badge="TACTICAL_TIMELINE"
          title="MISSION"
          highlight="SEQUENCE"
          subtitle="Chronological Progression: Past Milestones → Active Operations → Upcoming Missions"
        />

        <div className="relative border-l-2 border-amber-400/40 ml-4 md:ml-32 space-y-12 py-4">
          
          {/* PAST */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-green-500 border-2 border-[#070b14]" />
            <div className="text-[10px] text-green-400 font-bold uppercase tracking-widest font-mono mb-1">
              STATUS: COMPLETED // VERIFIED ARCHIVE
            </div>
            <h3 className="text-xl font-special font-bold text-white uppercase mb-2">
              Foundational Flight Tests & Government Representation
            </h3>
            <p className="text-xs text-gray-300 max-w-2xl font-normal leading-relaxed">
              FPV campus drone races, Swayaan government flight showcase, and initial student airframe design workshops successfully executed.
            </p>
          </div>

          {/* UPCOMING */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#070b14] animate-ping" />
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#070b14]" />
            <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono mb-1">
              STATUS: IN PREPARATION // UPCOMING MISSIONS
            </div>
            <h3 className="text-xl font-special font-bold text-white uppercase mb-2">
              Morse Code, Simulation Contest, Induction & Technical Boot Camps
            </h3>
            <p className="text-xs text-gray-300 max-w-2xl font-normal leading-relaxed">
              Upcoming series of technical challenges, telemetry decoding, multi-rotor boot camps, and recruitment drives at NIT Jalandhar.
            </p>
          </div>

          {/* FUTURE */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#070b14]" />
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest font-mono mb-1">
              STATUS: FUTURE HORIZON // ADVANCED FLIGHT STACKS
            </div>
            <h3 className="text-xl font-special font-bold text-white uppercase mb-2">
              Microprocessor Challenges, Manual Airshows & Payload Precision Drops
            </h3>
            <p className="text-xs text-gray-300 max-w-2xl font-normal leading-relaxed">
              Advanced embedded avionics competitions, live high-G flight demonstrations, and aerial payload drop engineering trials.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
