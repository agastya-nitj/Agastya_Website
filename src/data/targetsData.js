import { Calendar, Video, TrendingUp, Trophy, Mic, Users } from "lucide-react";

export const targetsData = {
  header: {
    badge: "OPERATIONAL_METRICS",
    title: "AGASTYA // TARGETS",
    subtitle: "Measurable Objectives Guiding Our Growth, Outreach & Engineering Cadence",
    disclaimer: "These metrics represent targeted operational benchmarks set by the Agastya core team."
  },
  targets: [
    {
      id: "target-01",
      number: "01",
      category: "EVENTS",
      metric: "1 Major Event / 2 Months",
      tagline: "Sustained Technical Cadence",
      icon: Calendar,
      description: "Organizing regular internal and open inter-departmental drone competitions, simulation rounds, and hands-on boot camps across each academic term."
    },
    {
      id: "target-02",
      number: "02",
      category: "INSTAGRAM",
      metric: "500 → 1,000 → 1,500",
      tagline: "Community Growth Milestones",
      icon: TrendingUp,
      description: "Progressive follower milestones to cultivate an engaged community of collegiate drone builders and aerospace enthusiasts."
    },
    {
      id: "target-03",
      number: "03",
      category: "COMPETITIONS",
      metric: "≥ 1 Contest / Semester",
      tagline: "Competitive Representation",
      icon: Trophy,
      description: "Fielding official Agastya pilot and engineering squads in at least one premier national collegiate UAV competition each semester."
    },
    {
      id: "target-04",
      number: "04",
      category: "INDUSTRY",
      metric: "Drone Specialist Talks",
      tagline: "Expert Knowledge Transfer",
      icon: Mic,
      description: "Hosting dedicated webinars and physical masterclasses by industry drone manufacturers, UAV pilots, and defense aerospace experts."
    },
    {
      id: "target-05",
      number: "05",
      category: "COLLABORATION",
      metric: "IIT & Industry Invites",
      tagline: "Aerospace Ecosystem at NITJ",
      icon: Users,
      description: "Inviting research teams from IITs/NITs, drone technology startups, and aerospace enterprises to conduct workshops and explore R&D at NIT Jalandhar."
    }
  ]
};

export default targetsData;
