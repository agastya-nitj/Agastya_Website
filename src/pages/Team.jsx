import { useRef, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  motion, 
  AnimatePresence,
  useScroll, 
  useTransform, 
  useAnimationFrame, 
  useVelocity, 
  useSpring, 
  useMotionValue
} from "framer-motion";
import priorityMembers, { order } from "../data/membersData";
import { Linkedin, Instagram, Activity, X, LayoutGrid, Film, Users, Sparkles } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import heroSectionData from "../data/heroSectionData";

// --- Card Component for Orbit / Strips ---
const OrbitMemberCard = ({ member, direction, onClick }) => {
  const cardRef = useRef(null);

  useAnimationFrame(() => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    const focusX =
      direction === "right"
        ? window.innerWidth * 0.25
        : window.innerWidth * 0.75;

    const distance = Math.abs(centerX - focusX);
    const effectRadius = window.innerWidth * 0.2; 

    let scale = 1;
    if (distance < effectRadius) {
      scale = 1 + 0.25 * (1 - distance / effectRadius);
    }

    cardRef.current.style.transform = `scale(${scale})`;
    cardRef.current.style.zIndex = scale > 1.1 ? "10" : "1";
  });

  return (
    <div
      ref={cardRef}
      onClick={() => onClick && onClick(member)}
      className="relative flex-shrink-0 w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-44 lg:w-44 lg:h-60 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-amber-400 cursor-pointer shadow-2xl bg-[#0a0f1a] will-change-transform group"
    >
      <OptimizedImage
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 md:p-3 flex flex-col justify-end h-3/5">
        <span className="text-[8px] sm:text-[9px] text-amber-400 font-mono uppercase tracking-wider font-semibold">
          {member.team}
        </span>
        <h3 className="text-white font-bold font-special text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wide truncate drop-shadow-md">
          {member.name}
        </h3>
        <span className="text-[8px] text-cyan-300 font-mono">
          {member.year ? `Batch ${member.year}` : `Crew`}
        </span>
      </div>
    </div>
  );
};

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Strip = ({ teamName, members, direction, rotate, scrollYProgress, onMemberClick }) => {
  const baseX = useMotionValue(0);
  
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1], [0, 32], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-40, -20, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = (direction === "right" ? 1.4 : -1.4) * (delta / 1000);
    const acceleration = velocityFactor.get() * (delta / 1000);
    moveBy += direction === "right" ? acceleration : -acceleration;
    baseX.set(baseX.get() + moveBy);
  });

  const loopedMembers = [
    ...members, 
    ...members, 
    ...members, 
    ...members, 
    ...members  
  ];

  return (
    <div className="relative w-full h-36 md:h-48 lg:h-60 my-10 flex items-center justify-center">
      <div 
        className="absolute z-20 pointer-events-none"
        style={{ 
          [direction === "right" ? "left" : "right"]: "8vw", 
          top: "-15%", 
          transform: `rotate(${rotate}deg)`,
          transformOrigin: direction === "right" ? "left bottom" : "right bottom"
        }}
      >
        <h3 className="text-amber-500 font-special text-2xl md:text-4xl font-bold uppercase tracking-tighter opacity-80">
          {teamName}
        </h3>
      </div>

      <div 
        className="absolute w-[500%] flex items-center justify-center" 
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <motion.div
          className="flex gap-4 md:gap-8 px-4 items-center w-max"
          style={{ x }}
        >
          {loopedMembers.map((member, idx) => (
            <OrbitMemberCard
              key={`${member.id}-${idx}`}
              member={member}
              direction={direction}
              onClick={onMemberClick}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// --- Grid Member Card Component ---
const GridMemberCard = ({ member, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(member)}
      className="group relative bg-[#0c1424]/90 border border-white/10 hover:border-amber-400 rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1 flex flex-col font-mono"
    >
      {/* Corner Brackets on Hover */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

      {/* Photo Frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070b14]">
        <OptimizedImage
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1424] via-transparent to-transparent opacity-80" />

        {/* Team Tag Badge */}
        <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 border border-amber-400/40 text-amber-400 text-[9px] font-bold uppercase tracking-widest rounded backdrop-blur-sm z-10">
          {member.team}
        </span>

        {/* Batch Tag on Photo */}
        <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[9px] font-mono font-bold tracking-wider rounded backdrop-blur-sm z-10">
          BATCH {member.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 bg-[#0c1424]">
        <div>
          <h3 className="text-white font-bold font-special text-xs sm:text-sm md:text-base tracking-wide group-hover:text-amber-400 transition-colors truncate">
            {member.name}
          </h3>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest block mt-0.5 font-mono">
            {member.team}
          </span>
        </div>

        {/* Social Buttons Strip */}
        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-[9px] text-gray-400 uppercase tracking-wider group-hover:text-amber-300 transition-colors">
            [ PROFILE ]
          </span>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="p-1 rounded bg-white/5 hover:bg-amber-400/20 text-amber-400 transition-all hover:scale-110"
              >
                <Linkedin size={13} />
              </a>
            )}
            {member.socials?.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Instagram`}
                className="p-1 rounded bg-white/5 hover:bg-cyan-400/20 text-cyan-400 transition-all hover:scale-110"
              >
                <Instagram size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Team Component ---
export default function Team() {
  const containerRef = useRef(null);
  const [groupedTeams, setGroupedTeams] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewMode, setViewMode] = useState("GRID"); // "GRID" or "MARQUEE"

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  useEffect(() => {
    const teams = {};

    priorityMembers.forEach((member) => {
      const team = member.team.toLowerCase();
      if (!teams[team]) {
        teams[team] = [];
      }
      teams[team].push(member);
    });

    setGroupedTeams(teams);
  }, []);

  const teamKeys = Object.keys(groupedTeams);

  // Filter Categories: ALL, CORE, TECHNICAL, MARKETING, SOCIAL, PUBLIC RELATION
  const categories = useMemo(() => {
    const customOrder = ["core", "technical", "marketing", "social", "public relation"];
    const existing = teamKeys.map(k => k.toLowerCase());
    const sortedKeys = customOrder.filter(k => existing.includes(k));
    return ["ALL", ...sortedKeys.map(k => k.toUpperCase())];
  }, [teamKeys]);

  // Unique member list for ALL tab (Ascending Batch 2022 -> 2023 -> 2024 -> 2025)
  const uniqueMembers = useMemo(() => {
    const seen = new Set();
    return priorityMembers.filter(m => {
      const baseId = String(m.id).replace('_core', '');
      if (seen.has(baseId)) return false;
      seen.add(baseId);
      return true;
    });
  }, []);

  // Filtered members for Grid view
  const filteredMembers = useMemo(() => {
    if (selectedCategory === "ALL") {
      return uniqueMembers;
    }
    return priorityMembers.filter(
      (m) => m.team.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory, uniqueMembers]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0a0f1a] overflow-hidden py-16 md:py-24 z-10 flex flex-col font-mono text-white" 
      id="crew-section"
    >
      {/* Left Fade */}
      <div className="absolute top-0 left-0 h-full w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-r from-[#0a0f1a] to-transparent" />
      
      {/* Right Fade */}
      <div className="absolute top-0 right-0 h-full w-20 md:w-40 z-30 pointer-events-none bg-gradient-to-l from-[#0a0f1a] to-transparent" />

      <div
        className="absolute inset-0 -z-20 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroSectionData.logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "80%",
        }}
      />

      {/* Section Header */}
      <div className="relative z-50 flex flex-col items-center text-center w-full mb-8 md:mb-12 px-4 max-w-6xl mx-auto">
        <div className="absolute top-[-25px] md:top-[-30px] left-1/2 -translate-x-1/2 w-px h-6 md:h-8 border-l border-dashed border-amber-400/30"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-3">
          <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-[10px] text-amber-400 tracking-[0.25em] uppercase font-bold">
            THE PEOPLE BEHIND THE MISSION
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold font-special tracking-widest text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          THE <span className="text-amber-400">CREW</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Link
            to="/alumni"
            className="inline-block px-5 py-2 rounded-full font-bold tracking-widest uppercase text-xs text-white transition-all duration-500 bg-[linear-gradient(to_right,#92400e_0%,#f59e0b_50%,#92400e_100%)] bg-[length:200%_auto] shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:bg-right hover:scale-105"
          >
            Visit Alumni
          </Link>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-[#0c1424] border border-white/10 rounded-full p-1">
            <button
              onClick={() => setViewMode("GRID")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                viewMode === "GRID"
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={13} />
              <span>GRID</span>
            </button>
            <button
              onClick={() => setViewMode("MARQUEE")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                viewMode === "MARQUEE"
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Film size={13} />
              <span>ORBIT</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        {viewMode === "GRID" && (
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === "ALL" 
                ? uniqueMembers.length 
                : priorityMembers.filter(m => m.team.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? "bg-amber-400/20 text-amber-300 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                      : "bg-[#0c1424]/80 text-gray-400 border-white/10 hover:border-amber-400/50 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? "bg-amber-400 text-black font-bold" : "bg-white/10 text-gray-300"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-px h-6 border-l border-dashed border-amber-400/30"></div>
      </div>

      {/* Main Display Area */}
      {viewMode === "GRID" ? (
        <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredMembers.map((member) => (
                <GridMemberCard
                  key={member.id}
                  member={member}
                  onClick={setSelectedMember}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        /* Render Strips Marquee layout */
        <div className="flex flex-col w-full h-full justify-center gap-8 md:gap-16 lg:gap-32">
          {teamKeys.map((teamName, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <Strip
                key={teamName}
                teamName={teamName}
                members={groupedTeams[teamName]}
                direction={isEven ? "right" : "left"}
                rotate={isEven ? -6 : 6}
                scrollYProgress={scrollYProgress} 
                onMemberClick={setSelectedMember}
              />
            );
          })}
        </div>
      )}

      {/* TACTICAL HUD PROFILE MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div 
              className="fixed inset-0"
              onClick={() => setSelectedMember(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-md bg-[#0c1424] border-2 border-amber-400/50 rounded-2xl p-6 shadow-[0_0_50px_rgba(245,158,11,0.3)] font-mono text-white overflow-hidden z-10"
            >
              {/* Corner HUD Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold tracking-widest uppercase">
                  <Activity className="w-4 h-4 animate-pulse text-cyan-400" />
                  <span>AGASTYA // CREW PROFILE</span>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Profile"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Member Info Body */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border border-amber-400/40 shrink-0 shadow-lg bg-[#070b14]">
                  <OptimizedImage
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block">
                      [ID_0{selectedMember.id}]
                    </span>
                    <h3 className="text-xl font-bold font-special text-white uppercase tracking-wider mt-0.5">
                      {selectedMember.name}
                    </h3>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-white/40 uppercase">DIVISION:</span>
                      <span className="text-amber-400 font-semibold uppercase">{selectedMember.team}</span>
                    </div>
                    {selectedMember.year && (
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-white/40 uppercase">BATCH:</span>
                        <span className="text-cyan-300 font-semibold">{selectedMember.year}</span>
                      </div>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    {selectedMember.socials?.linkedin && (
                      <a
                        href={selectedMember.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/40 text-amber-300 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember.socials?.instagram && (
                      <a
                        href={selectedMember.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      >
                        <Instagram className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-500 uppercase">
                <span className="text-green-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  STATUS: ACTIVE_CREW
                </span>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-amber-400 hover:text-amber-300 font-bold tracking-widest uppercase"
                >
                  [ CLOSE PROFILE ]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
}