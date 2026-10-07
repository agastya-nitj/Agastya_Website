import { Target, Eye, Zap, Shield, Award, Sparkles, Cpu, Layers } from "lucide-react";

export const missionVisionData = {
  header: {
    badge: "SYSTEM_CORE_MANIFESTO",
    title: "MISSION & VISION",
    subtitle: "The Aerodynamic Philosophy & Strategic Trajectory of Team Agastya",
  },
  mission: {
    id: "mission",
    label: "MISSION",
    tagline: "Engineering Autonomous Flight",
    statement: "To design, develop, and deploy autonomous UAV systems that showcase cutting-edge innovation in aerodynamics, avionics, and artificial intelligence while proudly representing NIT Jalandhar on national and global stages.",
    points: [
      "Pioneer collegiate autonomous drone research and aerodynamic airframe optimization.",
      "Cultivate hands-on engineering mastery across mechanical, electronics, and software disciplines.",
      "Represent NIT Jalandhar at premier national UAV and robotics competitions.",
      "Bridge academic theoretical foundations with industry-standard drone hardware standards."
    ]
  },
  vision: {
    id: "vision",
    label: "VISION",
    tagline: "India's Collegiate UAV Hub",
    statement: "To become India's leading collegiate UAV research and innovation hub, setting benchmarks in autonomous flight technology, sustainable aerospace engineering, and inspiring the next generation of aerospace pioneers.",
    points: [
      "Establish an advanced prototyping laboratory for indigenous UAV systems.",
      "Foster high-impact collaborative research with industry leaders and premier technical institutes.",
      "Drive open technical education and hands-on aerospace workshops for passionate students.",
      "Build a world-class alumni network of aerospace engineers and drone technologists."
    ]
  },
  coreValues: [
    {
      id: "01",
      title: "Interdisciplinary Synergy",
      icon: Layers,
      content: "Combining aerodynamics, embedded electronics, real-time software, and mechanical precision into cohesive aerospace platforms."
    },
    {
      id: "02",
      title: "Industry-Grade Engineering",
      icon: Cpu,
      content: "Utilizing professional-grade CAD/CFD tools, telemetry protocols, and flight validation methodologies comparable to industrial standards."
    },
    {
      id: "03",
      title: "Continuous Innovation",
      icon: Sparkles,
      content: "Every airframe iteration and firmware release pushes limits in endurance, speed, agility, and autonomous decision-making."
    },
    {
      id: "04",
      title: "Flight Safety & Rigor",
      icon: Shield,
      content: "Strict pre-flight diagnostics, fail-safe RTL algorithms, and thorough bench testing to ensure flight safety and operational excellence."
    },
    {
      id: "05",
      title: "National Technical Impact",
      icon: Award,
      content: "Demonstrating collegiate technical caliber at government initiatives, aerospace symposiums, and national robotics challenges."
    }
  ],
  story: {
    badge: "HISTORICAL_LOG",
    title: "OUR STORY",
    subtitle: "From Vision to Flight at NIT Jalandhar",
    paragraphs: [
      "Founded by a group of passionate aerospace enthusiasts and robotics engineers at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, Team Agastya was born out of a bold aspiration: to design, build, and fly indigenous unmanned aerial systems from scratch.",
      "What started as experimental bench tests and fixed-wing gliders has rapidly evolved into an interdisciplinary UAV development ecosystem encompassing autonomous quadcopters, long-endurance fixed-wing aircraft, high-speed FPV racing builds, and custom ground control software.",
      "Under the mentorship of esteemed faculty coordinators and driven by student engineers across disciplines, Agastya continues to elevate NIT Jalandhar's aerospace footprint across the nation."
    ]
  },
  origin: {
    badge: "ETYMOLOGY_&_HERITAGE",
    title: "ORIGIN & MEANING",
    subtitle: "The Astronomical & Ancient Roots Behind AGASTYA",
    paragraphs: [
      "AGASTYA is named after Maharishi Agastya, one of the revered sages of ancient India and a figure associated with knowledge, exploration and the study of the natural world. In Indian astronomical tradition, Agastya is also the name given to Canopus, one of the brightest stars in the night sky.",
      "The name therefore reflects the spirit of looking beyond the horizon, understanding the skies and pushing the boundaries of knowledge—values that closely align with our pursuit of aerospace, autonomous aerial systems and robotics.",
      "From the ancient seeker of the skies to the engineers building the future of flight — AGASTYA carries that journey forward."
    ],
    citation: {
      label: "CICT Research Paper (Parasahara Agastya Visibility - IJHS)",
      url: "https://cict.in/cict2023/wp-content/uploads/2025/3-Highly_Technical_Papers/Parasahara-agastya-visibility-IJHS-2014-RNIyengar.pdf.pdf"
    }
  }
};

export default missionVisionData;
