import React from 'react';
import { Link } from 'react-router-dom';
import { destinationsData } from '../data/destinations';
import { MapPin, ArrowRight } from 'lucide-react';

export const Destinations: React.FC = () => {
  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" /> Iconic Hotspots
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Explore Destinations</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover the beauty of Sri Lanka, from mist-shrouded tea kingdoms to sunny coasts and ancient forest citadels.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-primary font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-gray-150 flex items-center gap-1 shadow-sm">
                  <MapPin className="h-3 w-3 text-accent" /> {destination.region}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-2xl text-primary leading-tight group-hover:text-accent transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider">
                    {destination.tagline}
                  </p>
                  <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                    {destination.description}
                  </p>
                </div>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border-t border-gray-100 pt-4"
                >
                  <span>Explore Destination</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
