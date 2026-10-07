import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import SectionHeader from "../SectionHeader";
import HudCard from "../HudCard";
import eventsData from "../../data/eventsData";

export default function HomeUpcomingEvents() {
  const { upcomingEvents } = eventsData;
  const previewEvents = upcomingEvents.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-[#090f1d] relative z-10 border-t border-white/5 font-mono">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          badge="FLIGHT_SCHEDULE_PREVIEW"
          title="UPCOMING"
          highlight="EVENTS"
          subtitle="Currently Planned Competitions, Inductions & Aerodynamic Boot Camps"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewEvents.map((event) => {
            const Icon = event.icon;
            return (
              <HudCard key={event.id} tag={event.category} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded font-bold uppercase tracking-widest">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-special font-bold text-white mb-2 uppercase tracking-wide">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                    {event.desc}
                  </p>

                  <div className="text-[11px] text-gray-400 border-t border-white/10 pt-3 space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">DATE:</span>
                      <span className="text-amber-300 font-bold">{event.dateShort}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">VENUE:</span>
                      <span className="text-gray-300 truncate max-w-[140px]">{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-center py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 uppercase font-bold tracking-wider">
                    {event.registrationStatus}
                  </div>
                </div>
              </HudCard>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-special font-bold text-xs uppercase tracking-widest text-white bg-white/5 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            <span>VIEW ALL {upcomingEvents.length} UPCOMING MISSIONS & ARCHIVES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
