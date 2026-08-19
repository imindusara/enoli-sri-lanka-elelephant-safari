import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookingForm } from '../components/BookingForm';
import { Sparkles, ShieldCheck, Mail, CalendarDays } from 'lucide-react';

export const BookTour: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultTourId = searchParams.get('tour') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Book Your Adventure
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Reserve A Tour Package</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill in the details below to lock in your preferred travel dates and start customizing your dream Sri Lankan holiday.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Sidebar Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-xl text-primary border-b border-gray-150 pb-4">
              Booking Guidelines
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CalendarDays className="h-5 w-5 text-accent shrink-0" />
                <p className="text-xs text-charcoal-light leading-relaxed">
                  <strong className="text-primary block">Secure Reservations</strong>
                  We recommend submitting your enquiry at least 2-4 weeks prior to your arrival date to secure your driver-guide.
                </p>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <p className="text-xs text-charcoal-light leading-relaxed">
                  <strong className="text-primary block">No Immediate Charge</strong>
                  Your initial booking is a request. No charges are applied until we confirm the itinerary and price details with you.
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <p className="text-xs text-charcoal-light leading-relaxed">
                  <strong className="text-primary block">Fast Communication</strong>
                  We communicate via Email and WhatsApp to design and verify all travel itineraries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Wrap Column */}
        <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-2 sm:p-6 bg-white">
            <BookingForm defaultTourId={defaultTourId} />
          </div>
        </div>
      </div>
    </div>
  );
};
