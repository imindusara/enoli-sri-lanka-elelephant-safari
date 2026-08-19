import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/tours';
import { BookingForm } from '../components/BookingForm';
import { 
  Check, 
  X, 
  ChevronLeft, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Compass,
  Mountain,
  Eye,
  Droplets,
  Palmtree,
  Train,
  Leaf,
  Anchor,
  Hotel,
  Clock,
  Users,
  Compass as CompassIcon
} from 'lucide-react';
import { TourCard } from '../components/TourCard';

export const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tour = toursData.find((t) => t.id === id);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true });
  const [isIncludesOpen, setIsIncludesOpen] = useState(false);
  const [isExcludesOpen, setIsExcludesOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center bg-cream min-h-screen">
        <div className="max-w-md mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-charcoal mb-4">Tour Not Found</h2>
          <p className="text-charcoal-light mb-8">We couldn't find the tour package you were looking for.</p>
          <Link
            to="/tours"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-all inline-flex items-center gap-2"
          >
            <ChevronLeft className="h-5 w-5" /> Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const toggleDay = (dayNum: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  const getActivityIcon = (text: string) => {
    const lowercase = text.toLowerCase();
    if (lowercase.includes('temple') || lowercase.includes('relic') || lowercase.includes('sacred')) {
      return <Compass className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('climb') || lowercase.includes('hike') || lowercase.includes('rock') || lowercase.includes('peak')) {
      return <Mountain className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('safari') || lowercase.includes('elephant') || lowercase.includes('national park')) {
      return <Eye className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('falls') || lowercase.includes('waterfall') || lowercase.includes('water')) {
      return <Droplets className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('beach') || lowercase.includes('coconut') || lowercase.includes('coast')) {
      return <Palmtree className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('train')) {
      return <Train className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('tea') || lowercase.includes('garden') || lowercase.includes('herbal')) {
      return <Leaf className="h-5 w-5 text-accent" />;
    }
    if (lowercase.includes('boat') || lowercase.includes('river') || lowercase.includes('safari down')) {
      return <Anchor className="h-5 w-5 text-accent" />;
    }
    return <MapPin className="h-5 w-5 text-accent" />;
  };

  const relatedTours = toursData
    .filter((t) => t.id !== tour.id)
    .slice(0, 2);

  const displayPrice = tour.price 
    ? `From USD ${tour.price}` 
    : tour.priceLabel || 'Contact Us';

  return (
    <div className="pt-16 bg-cream min-h-screen">
      {/* Back navigation bar */}
      <div className="bg-white border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/tours"
            className="text-primary hover:text-accent font-semibold flex items-center gap-1 text-sm group min-h-[44px]"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to tours</span>
          </Link>
          <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
            {tour.category === 'multi-day' ? '★ Multi-Day' : 'Day Excursion'}
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-72 sm:h-96 md:h-[480px] bg-primary overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-3">
            <span className="bg-accent text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              {tour.duration} Package
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
              {tour.title}
            </h1>
            <p className="text-charcoal-light text-sm sm:text-lg max-w-3xl font-medium leading-relaxed">
              {tour.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Main Info Section */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            
            {/* Quick Info Grid - Responsive and spacious */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-gray-150 shadow-xs">
              <div className="flex flex-col items-center justify-center p-3 text-center border-r border-gray-100 last:border-none">
                <Clock className="h-6 w-6 text-accent mb-2" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Duration</span>
                <span className="text-sm font-semibold text-charcoal mt-0.5">{tour.duration}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 text-center sm:border-r border-gray-100 last:border-none">
                <MapPin className="h-6 w-6 text-accent mb-2" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Start/End</span>
                <span className="text-sm font-semibold text-charcoal mt-0.5 truncate max-w-full">{tour.startLocation}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 text-center border-r border-gray-100 last:border-none">
                <Users className="h-6 w-6 text-accent mb-2" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Group Type</span>
                <span className="text-sm font-semibold text-charcoal mt-0.5">Private Tour</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 text-center last:border-none">
                <CompassIcon className="h-6 w-6 text-accent mb-2" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Difficulty</span>
                <span className="text-sm font-semibold text-charcoal mt-0.5">Easy / Medium</span>
              </div>
            </div>

            {/* Prominent Pricing Block */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <div>
                <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider block">Estimated Price</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-primary block mt-1">{displayPrice}</span>
                <span className="text-xs text-charcoal-light font-medium block mt-1">per traveler</span>
              </div>
              <div className="text-xs text-charcoal-light bg-cream p-4 rounded-xl border border-gray-100 flex-grow max-w-md">
                <span className="font-bold text-charcoal block mb-1">Pricing Disclaimers:</span>
                *Based on double/twin sharing. Final price depends on exact group size, seasonal travel rates & choice of hotel category.
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-xs space-y-4">
              <h2 className="font-serif font-bold text-2xl text-charcoal border-b border-gray-100 pb-3">
                Tour Overview
              </h2>
              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                {tour.overview}
              </p>
            </div>

            {/* Day-by-day Itinerary Timeline */}
            {tour.category === 'multi-day' && tour.itinerary && (
              <div className="space-y-6">
                <h2 className="font-serif font-bold text-2xl text-primary">
                  Day-by-Day Itinerary
                </h2>
                <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-8 py-2">
                  {tour.itinerary.map((dayData) => {
                    const isExpanded = !!expandedDays[dayData.day];
                    return (
                      <div key={dayData.day} className="relative group">
                        <span className="absolute -left-[37px] top-1 bg-primary text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-md group-hover:bg-accent transition-colors">
                          {dayData.day}
                        </span>

                        <div className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden">
                          <button
                            onClick={() => toggleDay(dayData.day)}
                            className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base sm:text-lg text-charcoal hover:bg-cream/40 transition-colors min-h-[48px] cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-accent font-sans text-xs font-bold uppercase tracking-wider">
                                Day {dayData.day}:
                              </span>
                              <span>{dayData.title}</span>
                            </div>
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-charcoal-light" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-charcoal-light" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="px-5 pb-6 pt-2 border-t border-gray-100 space-y-4">
                              <ul className="space-y-3">
                                {dayData.activities.map((act, index) => (
                                  <li key={index} className="flex items-start gap-3 text-sm text-charcoal-light">
                                    <span className="p-1 bg-cream rounded-lg mt-0.5 shadow-xs shrink-0">
                                      {getActivityIcon(act)}
                                    </span>
                                    <span className="mt-1">{act}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              {dayData.overnight && (
                                <div className="mt-4 flex items-center gap-2 bg-primary/5 p-3 rounded-xl border border-primary/10 text-xs text-primary font-semibold">
                                  <Hotel className="h-4.5 w-4.5 text-accent" />
                                  <span>Overnight Stay: {dayData.overnight}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Highlights Gallery */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-xs space-y-4">
              <h2 className="font-serif font-bold text-2xl text-charcoal border-b border-gray-100 pb-3">
                Highlights Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tour.gallery.map((imgUrl, i) => (
                  <div key={i} className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-xs group">
                    <img
                      src={imgUrl}
                      alt={`${tour.title} scene ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Accordions for Mobile first cleanliness */}
            <div className="space-y-4">
              {/* What's Included Accordion */}
              <div className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsIncludesOpen(!isIncludesOpen)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-lg text-primary hover:bg-cream/40 transition-colors min-h-[48px] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Check className="h-5 w-5 bg-primary/10 text-primary p-0.5 rounded-full shrink-0" />
                    What's Included
                  </span>
                  {isIncludesOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </button>
                {isIncludesOpen && (
                  <div className="px-5 pb-6 pt-3 border-t border-gray-100 bg-cream/10 animate-fade-in">
                    <ul className="space-y-3 text-xs sm:text-sm text-charcoal-light">
                      {tour.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-primary font-bold text-xs mt-0.5">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* What's Excluded Accordion */}
              <div className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsExcludesOpen(!isExcludesOpen)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-lg text-red-600 hover:bg-cream/40 transition-colors min-h-[48px] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <X className="h-5 w-5 bg-red-100 text-red-600 p-0.5 rounded-full shrink-0" />
                    What's Excluded
                  </span>
                  {isExcludesOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </button>
                {isExcludesOpen && (
                  <div className="px-5 pb-6 pt-3 border-t border-gray-100 bg-cream/10 animate-fade-in">
                    <ul className="space-y-3 text-xs sm:text-sm text-charcoal-light">
                      {tour.excludes.map((exc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-red-500 font-bold text-xs mt-0.5">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1 space-y-8">
            <div className="lg:sticky lg:top-28">
              <BookingForm defaultTourId={tour.id} />
            </div>
          </div>
        </div>

        {/* Related Tours Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedTours.map((relTour) => (
              <div key={relTour.id}>
                <TourCard tour={relTour} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
