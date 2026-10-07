import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Cpu, ExternalLink, Sparkles, Layers, CheckCircle2, ChevronRight, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import HudCard from "../components/HudCard";
import projectsData from "../data/projectsData";

export default function ProjectsPage() {
  const { header, categories, projects } = projectsData;
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
              {header.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-special tracking-widest text-white mb-6 uppercase">
            OUR <span className="text-amber-400">PROJECTS</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg md:text-xl text-cyan-200 font-normal max-w-3xl mx-auto tracking-wide leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="py-6 px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-[#0c1424] text-gray-400 border-white/10 hover:border-amber-400/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <HudCard 
              key={project.id}
              tag={project.category}
              className="flex flex-col justify-between overflow-hidden group"
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-black/40 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-widest font-bold backdrop-blur-md ${project.statusColor}`}>
                      {project.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-special font-bold text-white mb-2 group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-cyan-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] px-1.5 py-0.5 text-gray-500 font-mono">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                <span>{project.team}</span>
                <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  VIEW SPECS <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </HudCard>
          ))}
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0c1424] border-2 border-amber-400 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Corner Reticles */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

              <button 
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] px-2.5 py-0.5 rounded border uppercase tracking-widest font-bold ${activeModalProject.statusColor}`}>
                  {activeModalProject.statusBadge}
                </span>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest">
                  {activeModalProject.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-special font-bold text-white mb-4 uppercase tracking-wider">
                {activeModalProject.name}
              </h2>

              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-gray-300 font-normal leading-relaxed">
                <div>
                  <h4 className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-1 font-mono">
                    ENGINEERING OVERVIEW
                  </h4>
                  <p>{activeModalProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-1 font-mono">
                    TECHNICAL SPECIFICATIONS
                  </h4>
                  <p>{activeModalProject.details}</p>
                </div>

                <div>
                  <h4 className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2 font-mono">
                    INTEGRATED TECHNOLOGIES & STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>DIVISION: {activeModalProject.team}</span>
                  <span className="text-green-400">TELEMETRY: VERIFIED</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
