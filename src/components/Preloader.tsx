import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Start zooming and fading out at 6.0 seconds (right when they meet)
    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
    }, 6000);

    // Completely unmount at 8.0 seconds (after 2s zoom transition)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 8000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden select-none transition-opacity duration-500 ${
        isZooming ? 'pointer-events-none' : ''
      }`}
    >
      {/* Animation wrapper container with zoom-in transition */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4 max-w-5xl transition-all duration-[2000ms] ease-out origin-center ${
          isZooming ? 'scale-[1.3] opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        
        {/* Left Elephant: Slides in from the left slowly */}
        <div className="animate-slide-in-left-slow shrink-0">
          <img
            src="/elephant.png"
            alt="Ceylon Nest Journeys Elephant Mascot Left"
            className="h-28 w-28 sm:h-36 sm:w-36 object-contain elephant-silhouette"
          />
        </div>

        {/* Central Text: Slides down from top slowly */}
        <div className="animate-slide-down-slow text-center space-y-2.5 z-10 py-6 border-y border-[#D4AF37]/30 min-w-[280px]">
          <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] block">
            PREMIUM TRAVELS & TOURS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-widest leading-none">
            CEYLON NEST
          </h1>
          <h2 className="text-xl sm:text-2xl font-serif text-[#D4AF37] tracking-widest leading-none mt-1">
            JOURNEYS
          </h2>
        </div>

        {/* Right Elephant: Slides in from the right slowly (flipped horizontally) */}
        <div className="animate-slide-in-right-slow shrink-0">
          <img
            src="/elephant.png"
            alt="Ceylon Nest Journeys Elephant Mascot Right"
            className="h-28 w-28 sm:h-36 sm:w-36 object-contain elephant-silhouette transform scale-x-[-1]"
          />
        </div>

      </div>
    </div>
  );
};
