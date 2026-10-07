import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Wind, Cpu, Settings, Zap, Code, Camera, CheckCircle2, Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import TacticalComingSoon from "../components/TacticalComingSoon";

const whyJoinPoints = [
  {
    title: "Real Aerospace Engineering",
    description: "Hands-on experience designing, manufacturing, soldering, and piloting custom multi-rotor and fixed-wing UAVs."
  },
  {
    title: "National Competition Podiums",
    description: "Represent NIT Jalandhar in premier collegiate drone racing, SAE aero design, and autonomous robotics challenges."
  },
  {
    title: "Advanced Autonomous AI",
    description: "Implement edge computer vision, SLAM navigation, PX4/ROS2 autopilot stacks, and swarm flight protocols."
  },
  {
    title: "Industry & Faculty Mentorship",
    description: "Direct guidance from esteemed faculty coordinators and interactions with aerospace industry specialists."
  },
  {
    title: "Interdisciplinary Teamwork",
    description: "Collaborate across disciplines with passionate mechanical, electronics, computer science, and instrumentation engineers."
  },
  {
    title: "Strong Alumni Network",
    description: "Connect with Agastya alumni working in top aerospace, robotics, and high-tech industries globally."
  }
];

const subsystems = [
  {
    id: "sub-01",
    name: "Aerodynamics & Airframe",
    icon: Wind,
    desc: "Airfoil selection, CFD simulations, carbon-fiber fabrication, structural balance, and fixed-wing gliders."
  },
  {
    id: "sub-02",
    name: "Avionics & Embedded Hardware",
    icon: Settings,
    desc: "Custom PCB design, power distribution, ESC calibration, sensor fusion (IMU, barometer), and telemetry RF."
  },
  {
    id: "sub-03",
    name: "Autonomous Systems & AI",
    icon: Cpu,
    desc: "PX4 / ArduPilot autonomy, GPS waypoint navigation, edge computing, optical flow, and obstacle avoidance."
  },
  {
    id: "sub-04",
    name: "Control Systems & Flight Dynamics",
    icon: Zap,
    desc: "PID tuning, state estimation, stability modeling, and acrobatic FPV racing flight tuning."
  },
  {
    id: "sub-05",
    name: "Ground Station Software & Web",
    icon: Code,
    desc: "MavLink telemetry interfaces, real-time GCS flight mapping, dashboard systems, and web platforms."
  },
  {
    id: "sub-06",
    name: "Media, Operations & Flight Logs",
    icon: Camera,
    desc: "FPV cinematography, technical documentation, event coordination, sponsorships, and digital outreach."
  }
];

export default function JoinPage() {
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
              CADET_RECRUITMENT_PORTAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-special tracking-widest text-white mb-4 uppercase">
            JOIN <span className="text-amber-400">AGASTYA</span>
          </h1>

          <div className="text-sm sm:text-base md:text-lg text-cyan-300 font-mono tracking-widest uppercase mb-6">
            "Build. Learn. Fly."
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed mb-8">
            Are you ready to take flight? Join the interdisciplinary UAV research and aerial engineering squad at NIT Jalandhar.
          </p>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeader 
          badge="WHY_ENLIST"
          title="WHY JOIN"
          highlight="AGASTYA?"
          subtitle="Experience True Multidisciplinary Engineering and Push Aerospace Frontiers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJoinPoints.map((point, idx) => (
            <HudCard key={idx} tag={`0${idx + 1}`} className="p-6">
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="text-base font-special font-bold text-white uppercase">
                  {point.title}
                </h4>
              </div>
              <p className="text-xs text-gray-300 font-normal leading-relaxed">
                {point.description}
              </p>
            </HudCard>
          ))}
        </div>
      </section>

      {/* SUBSYSTEMS / DIVISIONS */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <SectionHeader 
          badge="ENGINEERING_DIVISIONS"
          title="CHOOSE YOUR"
          highlight="SUBSYSTEM"
          subtitle="Discover Where Your Skills, Passion & Aspirations Fit in Team Agastya"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsystems.map((sub) => {
            const Icon = sub.icon;
            return (
              <HudCard key={sub.id} tag={sub.id} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-special font-bold text-white uppercase mb-2">
                    {sub.name}
                  </h4>
                  <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                    {sub.desc}
                  </p>
                </div>
                <div className="text-[10px] text-cyan-400 uppercase font-mono tracking-wider pt-3 border-t border-white/10">
                  RECRUITING VIA INDUCTIONS
                </div>
              </HudCard>
            );
          })}
        </div>
      </section>

      {/* RECRUITMENT APPLICATION PORTAL (COMING SOON) */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">
        <SectionHeader 
          badge="ADMISSION_STANDBY"
          title="APPLICATION"
          highlight="PORTAL"
          subtitle="Official Recruitment Drives Occur Periodically Across Academic Semesters"
        />

        <TacticalComingSoon 
          title="CADET INDUCTION PORTAL // COMING SOON"
          systemCode="RECRUITMENT_GATEWAY_STANDBY"
          subtitle="APPLICATION FORM OPENING SOON"
          message="The online candidate application form will open during the next official induction cycle at NIT Jalandhar. Watch our Instagram (@the_agastya_nitj) for live announcement broadcasts and orientation dates."
          actionLabel="INDUCTION STANDBY"
        />
      </section>

      <Footer />
    </div>
  );
}
