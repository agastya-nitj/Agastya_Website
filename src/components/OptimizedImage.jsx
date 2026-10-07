// components/OptimizedImage.jsx
import { useState } from "react";
import { User, Activity } from "lucide-react";

export default function OptimizedImage({ src, alt, className, fallbackText = "PHOTO COMING SOON" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`relative overflow-hidden bg-[#070b14] border border-amber-500/20 flex flex-col items-center justify-center p-3 text-center ${className}`}>
        {/* Tactical Ambient Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.08)_0%,_transparent_70%)] pointer-events-none" />
        
        {/* HUD Corner Accents */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-400/40" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-400/40" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-400/40" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-400/40" />

        <div className="p-2.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-2 relative">
          <User className="w-6 h-6 text-amber-300" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>

        <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest leading-tight block">
          {fallbackText}
        </span>
        <span className="text-[8px] font-mono text-cyan-400/70 uppercase tracking-tighter mt-0.5">
          [ TRANSMISSION PENDING ]
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Background */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse">
          <User className="w-1/2 h-1/2 text-white/20" />
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}