import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Target, Clock, Sparkles } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import roadmapData from "../../data/roadmapData";

export default function HomeRoadmap() {
  const { stages } = roadmapData;

  return (
    <section id="roadmap-preview" className="py-20 px-6 bg-[#090f1d] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge="TRAJECTORY_PREVIEW"
          title="MISSION"
          highlight="ROADMAP"
          subtitle="Strategic 1-Year Execution, 5-Year Scaling, and 10-Year Aerospace Vision"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stages.map((stage) => (
            <HudCard key={stage.id} tag={`STAGE_${stage.number}`} className="flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    {stage.timeframe}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-widest ${stage.statusColor}`}>
                    {stage.status}
                  </span>
                </div>

                <h3 className="text-base font-special font-bold text-white uppercase mb-3">
                  {stage.phase}
                </h3>

                <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                  {stage.description}
                </p>

                <div className="space-y-1.5 border-t border-white/10 pt-3">
                  {stage.measurableTargets.slice(0, 2).map((tgt, idx) => (
                    <div key={idx} className="text-[11px] text-gray-400 flex items-start gap-1.5">
                      <span className="text-amber-400">›</span>
                      <span><strong className="text-white">{tgt.metric}:</strong> {tgt.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                {stage.initiatives.length} CORE INITIATIVES
              </div>
            </HudCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>EXPLORE FULL MISSION ROADMAP & BENCHMARKS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
