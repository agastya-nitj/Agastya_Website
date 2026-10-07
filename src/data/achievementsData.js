import { Trophy, Award, ShieldCheck, Flag, Sparkles, Star } from "lucide-react";

export const achievementsData = {
  header: {
    badge: "MISSION_LOG_HONORS",
    title: "HONORS & ACHIEVEMENTS",
    subtitle: "Verified Technical Milestones, Institutional Representations & Aerodynamic Accomplishments",
  },
  verifiedAchievements: [
    {
      id: "ach-01",
      title: "Swayaan Government Technical Representation",
      category: "GOVERNMENT & INSTITUTIONAL",
      year: "2024",
      icon: Flag,
      badge: "NATIONAL STAGE",
      description: "Represented Dr. B. R. Ambedkar National Institute of Technology Jalandhar at the prestigious Swayaan initiative, demonstrating autonomous flight research and aerodynamic models to dignitaries and technical evaluators.",
      impact: "Showcased indigenous UAV innovation and placed NIT Jalandhar's aerospace credentials in high technical regard."
    },
    {
      id: "ach-02",
      title: "FPV Campus Circuit Championship",
      category: "RACING & PILOTING",
      year: "2024",
      icon: Trophy,
      badge: "PILOTING EXCELLENCE",
      description: "Engineered and piloted high-speed custom racing drones across multi-gate complex obstacle circuits, achieving benchmark lap times and zero critical fail-rates.",
      impact: "Validated agile custom airframe durability, high-current ESC reliability, and extreme-low-latency video transmission."
    },
    {
      id: "ach-03",
      title: "Design, Build, Fly Aerodynamics Workshops",
      category: "TECHNICAL OUTREACH",
      year: "2024-2025",
      icon: Award,
      badge: "STUDENT IMPACT",
      description: "Successfully trained hundreds of undergraduate students in multi-rotor flight theory, CAD modeling, airframe balance, and electronic speed controller calibration.",
      impact: "Empowered future aerospace engineers with real, hands-on flight construction experience."
    },
    {
      id: "ach-04",
      title: "Establishment of Interdisciplinary UAV Lab Hub",
      category: "CLUB MILESTONE",
      year: "ESTABLISHED",
      icon: ShieldCheck,
      badge: "LAB INFRASTRUCTURE",
      description: "Consolidated five specialized technical disciplines—Aerodynamics, Autonomous AI, Embedded Avionics, Flight Controls, and Ground Software—under a unified tactical development framework at NIT Jalandhar.",
      impact: "Accelerated the pace of rapid prototyping from conceptual sketches to live flight validation."
    }
  ],
  milestoneStats: [
    { label: "Subsystem Wings", val: "05", sub: "Aerodynamics to AI" },
    { label: "Active Flights Logged", val: "100+", sub: "Bench & Field Trials" },
    { label: "Students Mentored", val: "150+", sub: "Hands-on Workshops" },
    { label: "Govt / Tech Honors", val: "Verified", sub: "Institutional Pride" }
  ]
};

export default achievementsData;
