import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Radio, ExternalLink, Lock, ArrowRight } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import socialMediaData from "../../data/socialMediaData";

export default function HomeMedia() {
  const { channels } = socialMediaData;
  const instagram = channels.find(c => c.id === "instagram");
  const youtube = channels.find(c => c.id === "youtube");

  return (
    <section id="media-preview" className="py-20 px-6 bg-[#090f1d] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge="DIGITAL_BROADCAST"
          title="FOLLOW"
          highlight="AGASTYA"
          subtitle="Follow Our Flight, Watch Our Builds, See Our Events & Explore Our Projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* INSTAGRAM CARD */}
          <HudCard glow="amber" tag="LIVE_UPLINK" className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-400/20 text-amber-400 rounded-xl">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-special font-bold text-white uppercase">
                      INSTAGRAM
                    </h3>
                    <span className="text-xs text-amber-400">
                      {instagram?.handle}
                    </span>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded font-bold uppercase">
                  ACTIVE
                </span>
              </div>

              <p className="text-xs text-gray-300 font-normal leading-relaxed mb-6">
                Watch high-octane FPV race highlights, weekly build logs, laboratory engineering footage, and live event announcements.
              </p>
            </div>

            <div>
              <a
                href={instagram?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-special font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all"
              >
                <span>FOLLOW ON INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </HudCard>

          {/* YOUTUBE CARD */}
          <HudCard glow="cyan" tag="OFFICIAL_BROADCAST" className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-500/20 text-red-400 rounded-xl">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-special font-bold text-white uppercase">
                      YOUTUBE
                    </h3>
                    <span className="text-xs text-cyan-400">
                      {youtube?.handle}
                    </span>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded font-bold uppercase">
                  ONLINE
                </span>
              </div>

              <p className="text-xs text-gray-300 font-normal leading-relaxed mb-6">
                Official video channel for long-form drone build logs, aerodynamics masterclasses, flight controller tutorials, and competition recaps.
              </p>
            </div>

            <div>
              <a
                href={youtube?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-special font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all"
              >
                <span>VISIT YOUTUBE CHANNEL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </HudCard>

        </div>

        <div className="text-center">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>EXPLORE FULL TRANSMISSION DIRECTORY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
