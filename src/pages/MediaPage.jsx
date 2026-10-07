import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail, Radio, Video, Sparkles, ExternalLink, Activity, Lock, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import TacticalComingSoon from "../components/TacticalComingSoon";
import socialMediaData from "../data/socialMediaData";

export default function MediaPage() {
  const { header, channels, contact } = socialMediaData;

  const instagramChannel = channels.find(c => c.id === "instagram");
  const youtubeChannel = channels.find(c => c.id === "youtube");
  const linkedinChannel = channels.find(c => c.id === "linkedin");

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
            MEDIA & <span className="text-amber-400">TRANSMISSION</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* PRIMARY MEDIA CHANNELS */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. INSTAGRAM (ACTIVE) */}
          <HudCard glow="amber" tag="LIVE_BROADCAST" className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-400/20 text-amber-400 rounded-xl">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-special font-bold text-white uppercase">
                      INSTAGRAM
                    </h3>
                    <span className="text-xs text-amber-400 font-mono">
                      {instagramChannel?.handle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded font-bold uppercase tracking-widest">
                  ONLINE
                </span>
              </div>

              <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                {instagramChannel?.description}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
                  BROADCAST CONTENT:
                </div>
                {instagramChannel?.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={instagramChannel?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-special font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:scale-[1.02]"
              >
                <span>VISIT OFFICIAL INSTAGRAM</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </HudCard>

          {/* 2. YOUTUBE (ACTIVE) */}
          <HudCard glow="cyan" tag="OFFICIAL_BROADCAST" className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/20 text-red-400 rounded-xl">
                    <Youtube className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-special font-bold text-white uppercase">
                      YOUTUBE
                    </h3>
                    <span className="text-xs text-cyan-400 font-mono">
                      {youtubeChannel?.handle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded font-bold uppercase tracking-widest">
                  ONLINE
                </span>
              </div>

              <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                {youtubeChannel?.description}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">
                  FEATURED RELEASES & CONTENT:
                </div>
                {youtubeChannel?.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={youtubeChannel?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-special font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all transform hover:scale-[1.02]"
              >
                <span>VISIT OFFICIAL YOUTUBE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </HudCard>

        </div>
      </section>

      {/* PROFESSIONAL UPLINK & CONTACT */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          badge="DIRECT_COMMUNICATION"
          title="OFFICIAL"
          highlight="UPLINKS"
          subtitle="Institutional Contact & Professional Aerospace Networking"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HudCard className="p-6">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Linkedin className="w-6 h-6" />
              <h4 className="text-lg font-special font-bold text-white uppercase">
                LINKEDIN NETWORK
              </h4>
            </div>
            <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
              Connect with Team Agastya on LinkedIn for corporate partnerships, technical whitepapers, and alumni updates.
            </p>
            <a 
              href={linkedinChannel?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-white font-bold uppercase tracking-wider"
            >
              <span>OPEN LINKEDIN PORTAL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </HudCard>

          <HudCard className="p-6">
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <Mail className="w-6 h-6" />
              <h4 className="text-lg font-special font-bold text-white uppercase">
                DIRECT EMAIL TRANSMISSION
              </h4>
            </div>
            <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
              For event invitations, guest lectures, student queries, and sponsorship inquiries:
            </p>
            <a 
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-white font-bold uppercase tracking-wider"
            >
              <span>{contact.email}</span>
            </a>
          </HudCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
