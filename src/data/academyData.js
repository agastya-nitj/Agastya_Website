import { BookOpen, Award, CheckCircle2, ShieldAlert, Cpu, Terminal, Compass, Zap } from "lucide-react";

export const academyData = {
  header: {
    badge: "AGASTYA_ACADEMY_SUBSYSTEM",
    title: "AGASTYA ACADEMY",
    tagline: "Learn. Build. Certify.",
    status: "COMING SOON",
    statusDetail: "SYSTEM IN ACTIVE DEVELOPMENT // STANDBY MODE",
    description: "An upcoming educational and certification ecosystem by Team Agastya designed to train the next generation of drone engineers, autonomous system pilots, and aerospace enthusiasts.",
    notice: "Notice: Agastya Academy is an upcoming initiative currently under curriculum and technical development. No live enrollments or certifications are active at this time."
  },
  futurePillars: [
    {
      id: "pillar-01",
      title: "Hands-on UAV Engineering",
      icon: Cpu,
      description: "From airframe dynamics and propulsion selection to flight controller soldering and ESC calibration."
    },
    {
      id: "pillar-02",
      title: "Autonomous Flight Stacks",
      icon: Terminal,
      description: "Mastering PX4 Autopilot, ArduPilot, ROS2, and MavLink telemetry networks for autonomous mission planning."
    },
    {
      id: "pillar-03",
      title: "Official Club Certification",
      icon: Award,
      description: "Rigorous milestone-based assessments and practical flight evaluation yielding verified digital credentials."
    },
    {
      id: "pillar-04",
      title: "Tactical Flight & Piloting",
      icon: Compass,
      description: "FPV acrobatic navigation, line-of-sight safety protocols, and competition circuit racing mastery."
    }
  ],
  plannedCurriculumTracks: [
    {
      id: "track-01",
      code: "AERO-101",
      title: "Fundamentals of UAV Airframe & Aerodynamics",
      category: "AERODYNAMICS",
      level: "FOUNDATION",
      status: "UNDER DEVELOPMENT",
      summary: "Explore lift-to-drag ratios, airfoil contours, multi-rotor thrust calculations, and structural airframe materials."
    },
    {
      id: "track-02",
      code: "AVION-201",
      title: "Avionics, Power Systems & Embedded Sensors",
      category: "AVIONICS",
      level: "INTERMEDIATE",
      status: "UNDER DEVELOPMENT",
      summary: "Understand LiPo battery management, power distribution boards, brushless motors, ESC protocols, and IMU sensor fusion."
    },
    {
      id: "track-03",
      code: "AUTO-301",
      title: "Autonomous Flight Controls & GCS Integration",
      category: "AUTONOMY & SOFTWARE",
      level: "ADVANCED",
      status: "UNDER DEVELOPMENT",
      summary: "Configure autonomous waypoint missions, fail-safe RTL geofencing, and telemetry communication with Ground Control Stations."
    },
    {
      id: "track-04",
      code: "FPV-202",
      title: "FPV Drone Assembly, Tuning & Acro Piloting",
      category: "PILOTING & RACING",
      level: "HANDS-ON",
      status: "UNDER DEVELOPMENT",
      summary: "Build, flash, and tune high-agility 5-inch FPV racing quads with low-latency video transmitters and PID tuning."
    }
  ],
  verificationModule: {
    badge: "CREDENTIAL_AUTHENTICATION_GATEWAY",
    title: "CERTIFICATE VERIFICATION PORTAL",
    status: "STANDBY // COMING SOON",
    description: "Future portal for recruiters and institutions to verify authentic Agastya Academy technical credentials via cryptographic certificate IDs."
  }
};

export default academyData;
