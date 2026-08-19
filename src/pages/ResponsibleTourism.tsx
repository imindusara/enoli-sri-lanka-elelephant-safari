import React from 'react';
import { Leaf, ShieldAlert, Heart, RefreshCw } from 'lucide-react';

export const ResponsibleTourism: React.FC = () => {
  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Leaf className="h-3.5 w-3.5" /> Conscious Exploration
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Responsible Tourism</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Preserving the natural environments, protecting native wildlife, and giving back to the local communities of Sri Lanka.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Core Philosophy */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6 text-center max-w-3xl mx-auto">
          <h3 className="font-serif font-bold text-2xl text-primary">Our Core Sustainability Policy</h3>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            At Ceylon Nest Journeys, we believe that travel should enrich both the traveler and the host country. We strive to minimize our carbon footprint, protect delicate natural habitats, support local micro-enterprises, and preserve Sri Lanka's beautiful cultural heritage for generations to come.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4">
            <div className="h-10 w-10 bg-accent/15 border border-accent/20 text-accent rounded-full flex items-center justify-center">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Ethical Wildlife Safaris</h4>
            <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
              We mandate strict guidelines for all national park safaris: maintaining safe boundaries from animals, turning off jeep engines when parked, and avoiding any interaction that disturbs nesting birds or leopards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4">
            <div className="h-10 w-10 bg-accent/15 border border-accent/20 text-accent rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Supporting Local Communities</h4>
            <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
              We consciously route our tours through local family-owned guest houses, hire local village guides, and patronize authentic craft cooperatives, ensuring your tourism dollars go directly to community families.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4">
            <div className="h-10 w-10 bg-accent/15 border border-accent/20 text-accent rounded-full flex items-center justify-center">
              <RefreshCw className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Plastic Waste Reduction</h4>
            <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
              We encourage travelers to minimize single-use plastics. Our vehicles provide water refills where possible, and we partner with eco-friendly accommodation hosts who reject plastic water bottles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
