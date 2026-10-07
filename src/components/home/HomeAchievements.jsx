import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Award, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import achievementsData from "../../data/achievementsData";

export default function HomeAchievements() {
  const { verifiedAchievements, milestoneStats } = achievementsData;

  return (
    <section id="achievements-preview" className="py-20 px-6 bg-[#090f1d] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge="HONORS_ARCHIVE"
          title="PROVEN"
          highlight="ACHIEVEMENTS"
          subtitle="Verified National Representations, FPV Racing Milestones & Technical Outreach"
        />

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {milestoneStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[#0d1527] border border-white/10 text-center"
            >
              <span className="text-2xl sm:text-3xl font-special font-bold text-amber-400 block mb-0.5">
                {stat.val}
              </span>
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                {stat.label}
              </span>
              <span className="text-[9px] text-gray-400 font-mono">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {verifiedAchievements.slice(0, 2).map((ach) => {
            const Icon = ach.icon;
            return (
              <HudCard key={ach.id} tag={ach.year} className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded font-bold uppercase tracking-widest">
                    {ach.badge}
                  </span>
                </div>

                <h3 className="text-lg font-special font-bold text-white mb-2 uppercase">
                  {ach.title}
                </h3>

                <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                  {ach.description}
                </p>

                <div className="text-[10px] text-cyan-300 font-mono border-l-2 border-cyan-400/50 pl-3">
                  <span className="text-cyan-400 font-bold uppercase">IMPACT: </span>
                  {ach.impact}
                </div>
              </HudCard>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>VIEW ALL HONORS & LAB MILESTONES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
