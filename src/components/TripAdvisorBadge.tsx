import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { TRIPADVISOR_URL } from '../constants/links';

/**
 * Official TripAdvisor Owl Icon Vector
 */
export const TripAdvisorIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TripAdvisor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 2.2c1.73 0 3.24.84 4.18 2.14H7.82A5.14 5.14 0 0 1 12 4.2zm-5.4 5.6a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm10.8 0a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm-10.8 1.6a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zm10.8 0a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zm-5.4.9c.8 0 1.54.27 2.14.73a4.7 4.7 0 0 1-2.14 1.47 4.7 4.7 0 0 1-2.14-1.47c.6-.46 1.34-.73 2.14-.73z" />
  </svg>
);

/**
 * TripAdvisor 5-Circle Rating Graphic
 */
export const TripAdvisorRatingCircles: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dotSize = size === 'sm' ? 'w-2.5 h-2.5' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`${dotSize} rounded-full bg-[#00AA6C] inline-block shadow-2xs`}
          title="5 of 5 bubbles"
        />
      ))}
    </div>
  );
};

/**
 * Compact Pill Badge for Hero & Headers
 */
export const TripAdvisorPill: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={TRIPADVISOR_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-white/90 hover:bg-white text-charcoal px-3.5 py-1.5 rounded-full border border-[#00AA6C]/30 shadow-xs hover:shadow-md transition-all duration-300 text-xs font-semibold group ${className}`}
  >
    <div className="bg-[#00AA6C]/10 text-[#00AA6C] p-1 rounded-full group-hover:scale-110 transition-transform">
      <TripAdvisorIcon className="h-4 w-4" />
    </div>
    <span className="font-bold text-primary">Tripadvisor</span>
    <TripAdvisorRatingCircles size="sm" />
    <span className="text-[#00AA6C] font-black text-xs">5.0</span>
    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
  </a>
);

/**
 * TripAdvisor Feature Banner for Reviews Page & Homepage
 */
export const TripAdvisorBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#00382B] via-[#004D3C] to-[#0A261E] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-[#00AA6C]/30 ${className}`}>
      {/* Subtle decorative background circles */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#00AA6C]/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -left-10 -top-10 w-36 h-36 bg-[#34E0A1]/10 rounded-full blur-xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand + Rating */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white text-[#00AA6C] flex items-center justify-center shadow-lg shrink-0 p-2">
            <TripAdvisorIcon className="w-12 h-12" />
          </div>
          
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#34E0A1]">Verified on Tripadvisor</span>
              <span className="bg-[#00AA6C]/20 text-[#34E0A1] text-[10px] font-black px-2 py-0.5 rounded-full border border-[#00AA6C]/40">
                5.0 EXCELLENT
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ceylon Nest Journeys
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md">
              Waskaduwa, Western Province, Sri Lanka • Top-rated private tours & chauffeur services
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
              <TripAdvisorRatingCircles size="md" />
              <span className="text-xs text-gray-300 font-semibold">(5.0 of 5 bubbles)</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00AA6C] hover:bg-[#008f5a] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>Write a Review</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[48px]"
          >
            <TripAdvisorIcon className="h-4 w-4" />
            <span>View Profile</span>
          </a>
        </div>

      </div>
    </div>
  );
};

/**
 * Compact TripAdvisor Card for Sidebars / Footer / About / Tour Detail
 */
export const TripAdvisorCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left space-y-4 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="bg-[#00AA6C]/10 text-[#00AA6C] p-2 rounded-xl">
            <TripAdvisorIcon className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary text-base leading-tight">Tripadvisor</h4>
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Ceylon Nest Journeys</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-[#00AA6C] block leading-none">5.0</span>
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Excellent</span>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-start gap-2">
        <TripAdvisorRatingCircles size="sm" />
        <span className="text-xs text-charcoal font-semibold">Recommended by Travelers</span>
      </div>

      <p className="text-xs text-charcoal-light leading-relaxed">
        Read genuine traveler reviews and stories from around the globe about our private Sri Lanka tours.
      </p>

      <a
        href={TRIPADVISOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#00AA6C] hover:bg-[#008f5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs min-h-[44px]"
      >
        <span>Check Tripadvisor Reviews</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};
