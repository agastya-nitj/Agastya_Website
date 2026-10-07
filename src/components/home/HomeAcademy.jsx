import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, ArrowRight, Lock } from "lucide-react";
import SectionHeader from "../SectionHeader";
import TacticalComingSoon from "../TacticalComingSoon";

export default function HomeAcademy() {
  return (
    <section id="academy-preview" className="py-20 px-6 bg-[#070b14] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          badge="LEARNING_SUBSYSTEM"
          title="AGASTYA"
          highlight="ACADEMY"
          subtitle="Learn. Build. Certify. — Upcoming Aerospace Training & Certification Ecosystem"
        />

        <TacticalComingSoon 
          title="AGASTYA ACADEMY // COMING SOON"
          systemCode="FUTURE_LEARNING_MODULE"
          subtitle="UNDER CURRICULUM DEVELOPMENT"
          message="We are architecting structured, hands-on drone engineering masterclasses, PX4 autonomous autopilot boot camps, and practical flight certification tracks for NIT Jalandhar students."
          actionLabel="STANDBY"
        />

        <div className="text-center mt-8">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>PREVIEW ACADEMY ARCHITECTURE & TRACKS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
