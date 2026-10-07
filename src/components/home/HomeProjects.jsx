import React from "react";
import { Link } from "react-router-dom";
import { FolderGit2, ArrowRight, ChevronRight } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import projectsData from "../../data/projectsData";

export default function HomeProjects() {
  const { projects } = projectsData;
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects-preview" className="py-20 px-6 bg-[#070b14] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge="HARDWARE_SOFTWARE_PREVIEW"
          title="LATEST"
          highlight="PROJECTS"
          subtitle="Autonomous Drones, High-Endurance Fixed-Wings & Tactical Telemetry Systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewProjects.map((project) => (
            <HudCard key={project.id} tag={project.category} className="flex flex-col justify-between overflow-hidden group p-6">
              <div>
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

                <h3 className="text-lg font-special font-bold text-white mb-2 group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                  {project.name}
                </h3>

                <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-cyan-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                <span>{project.team}</span>
                <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  SPECS <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </HudCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>EXPLORE ALL PLATFORMS & GCS SUITES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
