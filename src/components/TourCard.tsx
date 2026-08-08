import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import type { Tour } from '../data/tours';

interface TourCardProps {
  tour: Tour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const displayPrice = tour.price 
    ? `From USD ${tour.price}`
    : tour.priceLabel || 'Contact for price';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full reveal-on-scroll group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-primary/95 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm shadow-sm">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {tour.duration}
          </span>
          {tour.category === 'multi-day' && (
            <span className="bg-accent/95 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm shadow-sm">
              <Star className="h-3 w-3 fill-white text-white" />
              4★ Hotel Stay
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md backdrop-blur-sm">
            {displayPrice}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 text-accent text-xs font-bold uppercase tracking-widest mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{tour.startLocation}</span>
        </div>
        <h3 className="font-serif font-bold text-2xl text-charcoal mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-charcoal-light text-sm line-clamp-3 mb-4 leading-relaxed">
          {tour.overview}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-grow">
          <div className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            Key Experiences:
          </div>
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="flex items-start text-xs text-charcoal-light gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <Link
            to={`/tours/${tour.id}`}
            className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 group-hover:shadow-md"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
