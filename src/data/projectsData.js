export const projectsData = {
  header: {
    badge: "ENGINEERING_REPOSITORY",
    title: "PROJECTS & PLATFORMS",
    subtitle: "Custom Unmanned Aerial Vehicles, Embedded Flight Hardware & Ground Control Systems",
  },
  categories: ["ALL", "MULTI-ROTOR", "FIXED-WING", "SOFTWARE & GCS", "PAYLOAD & AVIONICS"],
  projects: [
    {
      id: "proj-01",
      name: "AERO-X1 Autonomous Quadcopter",
      category: "MULTI-ROTOR",
      status: "COMPLETED",
      statusBadge: "OPERATIONAL",
      statusColor: "text-green-400 bg-green-500/10 border-green-500/30",
      image: "/events/racing/1.jpg",
      description: "Custom-engineered carbon fiber quadcopter platform equipped with autonomous waypoint navigation, fail-safe return-to-launch (RTL), and real-time telemetry streaming.",
      technologies: ["Carbon Fiber Airframe", "PX4 Autopilot", "GPS/RTK", "Telemetry 433MHz", "BLDC 2306"],
      team: "Agastya Avionics & Flight Team",
      details: "Built for high-stability autonomous aerial reconnaissance. Incorporates active vibration damping, custom power distribution board (PDB), and long-range telemetry link to ground station."
    },
    {
      id: "proj-02",
      name: "SWAYAAN High-Endurance Fixed-Wing",
      category: "FIXED-WING",
      status: "COMPLETED",
      statusBadge: "OPERATIONAL",
      statusColor: "text-green-400 bg-green-500/10 border-green-500/30",
      image: "/events/swayaan/1.jpeg",
      description: "Long-range aerodynamic fixed-wing platform engineered for sustained flight duration, high payload capacity, and aerial survey operations.",
      technologies: ["Aerodynamic Foil Design", "EPP / Balsa Composite", "Long Range RF", "Pitot Airspeed Sensor", "ArduPlane"],
      team: "Agastya Aerodynamics Division",
      details: "Developed and showcased at government technical representations. Features optimized high-lift wing profiles, low-drag fuselage contour, and automated gliding algorithms."
    },
    {
      id: "proj-03",
      name: "Agastya Micro-GCS Telemetry Suite",
      category: "SOFTWARE & GCS",
      status: "ONGOING",
      statusBadge: "ACTIVE DEVELOPMENT",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      image: "/drone-blueprint.png",
      description: "Tactical ground control station interface providing real-time telemetry visualization, battery health diagnostics, artificial horizon HUD, and mission route uploads.",
      technologies: ["React", "WebSockets", "MavLink Protocol", "Leaflet GeoHUD", "Node.js"],
      team: "Agastya Software Division",
      details: "Enables operators to monitor live pitch, roll, yaw, altitude, GPS lock, and battery voltage with sub-50ms latency over radio telemetry links."
    },
    {
      id: "proj-04",
      name: "Vision-Guided Precision Drop Mechanism",
      category: "PAYLOAD & AVIONICS",
      status: "IN DEVELOPMENT",
      statusBadge: "PROTOTYPING",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      image: "/events/workshop/1.jpeg",
      description: "Active electro-mechanical payload release mechanism coupled with lightweight optical flow target acquisition for high-accuracy precision drop competitions.",
      technologies: ["OpenCV", "Microcontroller", "PWM Servo Actuator", "ToF Distance Sensor"],
      team: "Agastya Mechanical & Avionics Crew",
      details: "Details and flight test telemetry logs coming soon as bench testing and drop calibration trials conclude."
    },
    {
      id: "proj-05",
      name: "Autonomous UAV Swarm Protocol Testbed",
      category: "MULTI-ROTOR",
      status: "IN DEVELOPMENT",
      statusBadge: "RESEARCH PHASE",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      image: "/events/team/1.jpeg",
      description: "Multi-UAV cooperative communication and distributed collision avoidance testbed evaluated in high-fidelity Software-In-The-Loop (SITL) simulators.",
      technologies: ["ROS2", "Gazebo SITL", "Mesh Networking Protocol", "Python"],
      team: "Agastya Autonomous AI Wing",
      details: "Details coming soon as physical multi-rotor airframes are prepared for indoor opti-track flight tests."
    }
  ]
};

export default projectsData;
