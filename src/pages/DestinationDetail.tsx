import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinationsData } from '../data/destinations';
import { toursData } from '../data/tours';
import { MapPin, Calendar, Compass, Star, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinationsData.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center border border-gray-150 shadow-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-2xl text-primary mb-2">Destination Not Found</h2>
          <p className="text-charcoal-light text-sm mb-6">The destination you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Destinations
          </button>
        </div>
      </div>
    );
  }

  // Find tours that relate to this destination (e.g. by checking if the tour title or highlights contains the destination name)
  const relatedTours = toursData.filter((tour) => {
    const term = destination.name.toLowerCase();
    return (
      tour.title.toLowerCase().includes(term) ||
      tour.tagline.toLowerCase().includes(term) ||
      tour.overview.toLowerCase().includes(term) ||
      tour.highlights.some((h) => h.toLowerCase().includes(term))
    );
  });

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-charcoal hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Destinations
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Detail Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm p-6 sm:p-10 space-y-6">
            {/* Header info */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 bg-accent/15 text-accent font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-accent/25">
                <MapPin className="h-3 w-3" /> {destination.region}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-primary tracking-tight">
                {destination.name}
              </h1>
              <p className="text-accent text-sm sm:text-base font-bold uppercase tracking-wider">
                {destination.tagline}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-primary border-b border-gray-100 pb-3">
                About the Destination
              </h3>
              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-primary border-b border-gray-100 pb-3">
                Key Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2 text-sm text-charcoal-light leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Must-do Activities */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-primary border-b border-gray-100 pb-3">
                Recommended Activities
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="bg-cream border border-gray-200 text-charcoal font-medium text-xs px-4 py-2 rounded-full"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Carousels/Grid */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-primary border-b border-gray-100 pb-3">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.gallery.map((img, idx) => (
                  <div key={idx} className="h-40 rounded-xl overflow-hidden shadow-sm group">
                    <img
                      src={img}
                      alt={`${destination.name} Gallery ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          {/* Quick Facts Card */}
          <div className="bg-primary text-white rounded-3xl p-8 border border-white/10 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-xl tracking-tight border-b border-white/20 pb-4">
              Quick Travel Facts
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-accent-light shrink-0" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Best Time to Visit</span>
                  <span className="text-sm font-semibold">{destination.bestTimeToVisit}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-5 w-5 text-accent-light shrink-0" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">Essential Tips</span>
                  <ul className="text-xs text-gray-300 list-disc list-inside mt-1 space-y-1">
                    {destination.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/book-now"
              className="block text-center bg-accent hover:bg-accent-light text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Plan a Trip Here
            </Link>
          </div>

          {/* Related Tours Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-xl text-primary tracking-tight border-b border-gray-100 pb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-accent" /> Passing Tours
            </h3>

            {relatedTours.length === 0 ? (
              <p className="text-charcoal-light text-xs leading-relaxed">
                We currently run customized private expeditions through {destination.name}. Submit a custom request to plan yours today!
              </p>
            ) : (
              <div className="space-y-4">
                {relatedTours.map((tour) => (
                  <Link
                    key={tour.id}
                    to={`/tours/${tour.id}`}
                    className="block group border border-gray-100 p-4 rounded-2xl hover:border-accent hover:bg-cream transition-all duration-300"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-accent">{tour.duration}</span>
                    <h4 className="font-serif font-semibold text-primary group-hover:text-accent transition-colors">
                      {tour.title}
                    </h4>
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/custom-tours"
              className="block text-center border-2 border-primary hover:border-accent text-primary hover:text-accent font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all duration-300"
            >
              Request Custom Itinerary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
