import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, UserPlus, ArrowDown, ChevronRight, Users } from "lucide-react";
import { Meteors } from "../components/Meteors";
import data from "../data/heroSectionData";

// Sub-component for individual stars to safely use hooks
const Star = ({ star, scrollY }) => {
  const yTransform = useTransform(scrollY, (val) => val * star.speed);

  return (
    <motion.div
      className="absolute rounded-full bg-white animate-twinkle"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        y: yTransform,
        animation: `twinkle ${star.twinkleDuration}s infinite ${star.twinkleDelay}s`,
      }}
    />
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);

  // Framer Motion scroll hooks
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax speeds
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const backMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Pilot parallax set between back (15%) and front (-10%) terrain
  const pilotY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  // Drone moves faster
  const droneY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const droneScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const frontMountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  useEffect(() => {
    const adjustedSize = window.innerWidth < 768 ? 0.5 : 1.5;
    const generatedStars = Array.from({ length: 220 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + adjustedSize,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.05 + 0.01,
      twinkleDuration: 2 + Math.random() * 3,
      twinkleDelay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  const handleScrollToExplore = () => {
    const el = document.getElementById("mission-preview") || document.getElementById("events-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#070c15] via-[#1c304d] to-[#2d4a65]"
    >
      {/* Meteors */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-[5]">
        {stars.map((star, index) => (
          <Star key={index} star={star} scrollY={scrollY} />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="absolute left-1/2 top-[10%] md:top-[5%] z-10 w-36 md:w-56 -translate-x-1/2"
        style={{ y: moonY }}
      >
        <img 
          src="/moon.png" 
          alt="Moon" 
          className="w-full h-auto drop-shadow-[0_0_40px_rgba(200,200,255,0.4)]" 
          fetchPriority="high"
          loading="eager"
          decoding="sync" />
      </motion.div>

      {/* Background Mountain */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 w-[800px] lg:w-full md:w-[1024px]"
        style={{ y: backMountainY }}
      >
        <img 
          src="/mountain-bg.png" 
          alt="Background Mountain" 
          className="w-full h-auto object-cover" 
          fetchPriority="high"
          loading="eager"
          decoding="sync" />
      </motion.div>

      {/* Landing Drone - Rotated and Hovering */}
      <motion.div
        className="absolute top-[20%] left-[20%] md:left-[25%] z-50 w-24 md:w-36"
        style={{ y: droneY, scale: droneScale, rotate: -25 }}
      >
        <motion.img
          src="/drone.png"
          alt="Drone"
          className="w-full h-auto drop-shadow-2xl"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          style={{ filter: "invert(1) brightness(2)" }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Club Name, Tagline & Tactical CTAs */}
      <motion.div
        className="absolute top-[40vh] md:top-[44vh] left-0 right-0 z-40 flex flex-col items-center text-center px-4"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-widest drop-shadow-lg font-special">
          {data.clubName}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-cyan-200 tracking-wide font-normal drop-shadow-md">
          {data.clubTagLine}
        </p>

        {/* Tactical HUD Integrated CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono z-50">
          
          {/* Primary CTA: EXPLORE AGASTYA */}
          <button
            onClick={handleScrollToExplore}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <span>EXPLORE AGASTYA</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary CTA: MISSION ROADMAP */}
          <Link
            to="/roadmap"
            className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-white bg-[#0a1324]/80 border border-amber-400/40 hover:border-amber-400 hover:bg-[#101e38] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-md flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>OUR ROADMAP</span>
          </Link>

          {/* Tertiary CTA: MEET OUR CREW */}
          <button
            onClick={() => {
              const el = document.getElementById("crew-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-amber-300 bg-[#0a1324]/80 border border-amber-400/40 hover:border-amber-400 hover:bg-[#101e38] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>MEET OUR CREW</span>
          </button>

          {/* Quaternary CTA: JOIN AGASTYA */}
          <Link
            to="/join"
            className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-special font-bold text-xs sm:text-sm tracking-widest uppercase text-cyan-300 bg-[#0a1324]/80 border border-cyan-500/40 hover:border-cyan-400 hover:bg-[#101e38] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 backdrop-blur-md flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4 text-cyan-400" />
            <span>JOIN AGASTYA</span>
          </Link>

        </div>
      </motion.div>

      {/* Foreground Mountain/Terrain */}
      <motion.div
        className="absolute bottom-[-5%] left-0 right-0 z-[60] w-[812px] md:w-[1024px] lg:w-full pointer-events-none"
        style={{ y: frontMountainY }}
      >
        <img 
          src="/mountain-fg.png" 
          alt="Foreground" 
          className="w-full h-auto object-cover" 
          fetchPriority="high"
          loading="eager"
          decoding="sync" />
      </motion.div>

      {/* Pilot / Person standing on cliff */}
      <motion.div
        className="absolute bottom-0 right-0 z-[70] w-[480px] sm:w-[512px] md:w-[700px] lg:w-[800px]"
        style={{ y: pilotY }}
      >
        <img
          src="/pilot_.png"
          alt="Drone Pilot on Cliff"
          className="w-full h-auto object-contain"
          fetchPriority="high"
          loading="eager"
          decoding="sync" />
      </motion.div>
    </section>
  );
}