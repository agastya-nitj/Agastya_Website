import { Crosshair, Plane, Wind, Rocket, Radio, Monitor, UserPlus, Flame, Cpu, Navigation, PackageCheck, Calendar, Clock, MapPin } from "lucide-react";

export const eventsData = {
  header: {
    badge: "MISSION_SCHEDULE_LOG",
    title: "EVENTS & MISSIONS",
    subtitle: "Flight Competitions, Hands-on Boot Camps, and Aerodynamic Showcases",
  },
  upcomingEvents: [
    {
      id: "up-01",
      title: "Morse Code — Round 1",
      category: "Telemetry & Signals",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "NIT Jalandhar Campus",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: Radio,
      image: "/events/racing/1.jpg",
      desc: "An aerospace telemetry and signal decoding competition where participants decode real-time audio and visual Morse signals under strict flight timing constraints.",
      highlights: [
        "Real-time audio/visual signal processing",
        "Timed telemetry transmission tests",
        "Individual and team-based tracks"
      ]
    },
    {
      id: "up-02",
      title: "Flight Simulation — Round 2",
      category: "Autonomous Simulation",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "Simulation Lab / Online",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: Monitor,
      image: "/events/racing/2.jpg",
      desc: "Advanced virtual flight physics challenges testing pilot control, aerodynamic maneuvering, and automated waypoint routing in simulated dynamic wind conditions.",
      highlights: [
        "Realistic aerodynamic physics engine",
        "Dynamic waypoint and obstacle routing",
        "Leaderboard telemetry scoring"
      ]
    },
    {
      id: "up-03",
      title: "Annual Induction Drive",
      category: "Club Recruitment",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "NIT Jalandhar",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: UserPlus,
      image: "/events/team/1.jpeg",
      desc: "Recruitment drive for undergraduate students passionate about Aerodynamics, Avionics, Autonomous AI, Embedded Firmware, Flight Mechanics, and Media.",
      highlights: [
        "Multidisciplinary sub-team interviews",
        "Hands-on mechanical and electronics tasks",
        "Mentorship by senior pilots and engineers"
      ]
    },
    {
      id: "up-04",
      title: "Aerospace Boot Camp",
      category: "Technical Training",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "Agastya Workspace / Lab",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: Flame,
      image: "/events/workshop/1.jpeg",
      desc: "Intensive multi-day technical training covering drone component selection, airframe assembly, ESC soldering, flight controller calibration, and safety protocols.",
      highlights: [
        "Hardware assembly from scratch",
        "PX4 / Betaflight firmware configuration",
        "Hands-on maiden hover testing"
      ]
    },
    {
      id: "up-05",
      title: "Microprocessor-Based Competition",
      category: "Embedded Avionics",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "Embedded Systems Lab, NITJ",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: Cpu,
      image: "/events/workshop/2.jpeg",
      desc: "Hardware and embedded firmware competition challenging students to build custom flight sensors, telemetry loggers, and real-time stabilization circuits.",
      highlights: [
        "Sensor fusion (IMU, Barometer, Magnetometer)",
        "Microcontroller interrupt-driven PID loops",
        "Real-time telemetry packet formatting"
      ]
    },
    {
      id: "up-06",
      title: "Manual Flight Demonstration",
      category: "Airshow & Piloting",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "NIT Jalandhar Main Grounds",
      status: "UPCOMING",
      registrationStatus: "OPEN ACCESS",
      registrationLink: null,
      icon: Navigation,
      image: "/events/racing/3.jpeg",
      desc: "Live acrobatic FPV and line-of-sight flight showcase demonstrating high-G maneuvers, precision inverted flight, and high-speed obstacle gate navigation.",
      highlights: [
        "Acrobatic freestyle FPV piloting",
        "High-speed gate pass demonstrations",
        "Interactive Q&A with club pilots"
      ]
    },
    {
      id: "up-07",
      title: "Payload Drop Competition",
      category: "Aerial Engineering",
      date: "TO BE ANNOUNCED",
      dateShort: "TBA",
      time: "TBA",
      venue: "NIT Jalandhar Open Grounds",
      status: "UPCOMING",
      registrationStatus: "COMING SOON",
      registrationLink: null,
      icon: PackageCheck,
      image: "/events/swayaan/1.jpeg",
      desc: "Engineering challenge to design, construct, and calibrate aerodynamic payload drop release mechanisms targeting bullseye landing zones from altitude.",
      highlights: [
        "Target accuracy calculation under wind drift",
        "Mechanical release servo mechanism design",
        "Payload structural integrity validation"
      ]
    }
  ],
  pastEvents: [
    {
      id: 0,
      title: "High-Speed Drone Racing",
      subtitle: "FPV Campus Circuit",
      category: "FPV RACING",
      date: "COMPLETED",
      status: "COMPLETED",
      desc: "Pushing the limits of agility and speed. Our pilots navigate complex obstacle courses in high-octane FPV drone races, testing both reflexes and custom builds.",
      images: ["/events/racing/1.jpg", "/events/racing/2.jpg", "/events/racing/3.jpeg", "/events/racing/4.jpeg"],
      icon: Crosshair,
    },
    {
      id: 1,
      title: "Swayaan Initiative",
      subtitle: "Govt. Technical Representation",
      category: "GOVT. REPRESENTATION",
      date: "COMPLETED",
      status: "COMPLETED",
      desc: "Proudly representing our institution at the government level. We showcase our autonomous flight research and aerodynamic models on a national stage.",
      images: ["/events/swayaan/1.jpeg", "/events/swayaan/2.jpeg", "/events/swayaan/3.jpeg"],
      icon: Plane,
    },
    {
      id: 2,
      title: "Aerodynamics Workshops",
      subtitle: "Design, Build, Fly",
      category: "WORKSHOPS",
      date: "COMPLETED",
      status: "COMPLETED",
      desc: "Hands-on sessions where members design, construct, and test fixed-wing aircraft and multicopters from scratch, turning theory into flight.",
      images: ["/events/workshop/1.jpeg", "/events/workshop/2.jpeg", "/events/workshop/3.jpeg"],
      icon: Wind,
    },
    {
      id: 3,
      title: "Team Agastya Showcase",
      subtitle: "The Engineers",
      category: "SHOWCASE",
      date: "COMPLETED",
      status: "COMPLETED",
      desc: "Meet the brilliant minds behind the machines. A collaborative team of designers, engineers, and pilots dedicated to conquering the skies.",
      images: ["/events/team/1.jpeg", "/events/team/2.jpeg", "/events/team/3.jpeg"],
      icon: Rocket,
    },
  ]
};

export default eventsData;
