import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Ticket, Hotel, Map, Sparkles, PhoneCall } from 'lucide-react';

export const TravelServices: React.FC = () => {
  const services = [
    {
      icon: Compass,
      title: 'Private Chauffeur-Guide Hire',
      desc: 'Our flagship service: professional, English-speaking driver-guides with clean, comfortable air-conditioned saloons, SUVs, or luxury passenger vans. We manage fuel, tolls, and parking.',
    },
    {
      icon: Ticket,
      title: 'Scenic Train Ticket Bookings',
      desc: 'Obtaining 1st and 2nd class tickets for the iconic Kandy-to-Ella railway route can be highly difficult. We pre-book tickets for our clients as soon as reservation portals open.',
    },
    {
      icon: Hotel,
      title: 'Hotel & Eco-Lodge Assistance',
      desc: 'Get access to special contract rates at partner boutique properties, heritage tea bungalow retreats, beachfront villas, and luxurious tented camping sites in Yala or Udawalawe.',
    },
    {
      icon: Map,
      title: 'Custom Itinerary Design',
      desc: 'Work 1-on-1 with our travel specialists to create a balanced travel schedule matching your pace, interests, budget, and travel style.',
    },
    {
      icon: ShieldCheck,
      title: 'Airport Fast-Track & Meet',
      desc: 'Ensure stress-free arrivals with pre-arranged vehicles. Our driver welcomes you with a personalized name card right outside the customs desk.',
    },
    {
      icon: Sparkles,
      title: 'Special Celebration Planning',
      desc: 'Celebrating a honeymoon, wedding anniversary, or birthday? We organize private candlelight dinners, surprise cakes, flower decorations, and champagne toasts.',
    },
  ];

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578590494538-cd46ea167b05?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Full-Service Travel Partner
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Travel Services</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From private vehicles and scenic train seat reservations to curated stays, we handle every detail of your Sri Lankan voyage.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-accent/15 border border-accent/20 text-accent rounded-2xl flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">{s.title}</h3>
                <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-2xl text-primary">Need assistance with reservations?</h3>
            <p className="text-charcoal-light text-sm max-w-xl leading-relaxed">
              Contact us via WhatsApp or Email if you have custom travel requirements or if you want to request help booking train tickets.
            </p>
          </div>

          <div className="flex gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300"
            >
              <PhoneCall className="h-3.5 w-3.5" /> Contact Us
            </Link>
            <Link
              to="/book-now"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
