import React from "react";
import { Target, Activity, CheckCircle2 } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import targetsData from "../../data/targetsData";

export default function HomeTargets() {
  const { header, targets } = targetsData;

  return (
    <section className="py-20 px-6 bg-[#070b14] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge={header.badge}
          title="AGASTYA //"
          highlight="TARGETS"
          subtitle={header.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {targets.map((tgt) => {
            const Icon = tgt.icon;
            return (
              <HudCard key={tgt.id} tag={`TARGET_${tgt.number}`} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] px-2 py-0.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded font-bold uppercase tracking-widest">
                    {tgt.category}
                  </span>
                </div>

                <div className="text-sm font-special font-bold text-amber-400 uppercase mb-1">
                  {tgt.metric}
                </div>

                <div className="text-[11px] text-gray-400 font-mono tracking-wider uppercase mb-3">
                  {tgt.tagline}
                </div>

                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                  {tgt.description}
                </p>
              </HudCard>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[11px] text-amber-400/80 font-mono bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>* {header.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
