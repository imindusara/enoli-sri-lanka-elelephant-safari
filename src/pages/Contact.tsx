import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookingForm } from '../components/BookingForm';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const bookParam = searchParams.get('book');
  const tourParam = searchParams.get('tour') || '';

  // Pre-select tour based on query parameter
  const defaultTourId = tourParam ? tourParam : (bookParam ? 'ella-one-day' : '');

  const contactDetails = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: 'Phone Inquiry',
      value: '+94 70 454 4096',
      link: 'tel:+94704544096',
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-accent" />,
      title: 'WhatsApp Chat',
      value: '+94 70 454 4096',
      link: 'https://wa.me/94704544096',
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: 'Email Us',
      value: 'Supundilhan2019@gmail.com',
      link: 'mailto:Supundilhan2019@gmail.com',
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Office Address',
      value: '123, Galle Road, Colombo 03, Sri Lanka',
      link: '#',
    },
  ];

  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80')` }}></div>
        
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Clock className="h-3.5 w-3.5" /> 24/7 Availability
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Contact & Bookings</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get in touch with our team to lock down your booking or ask any questions about customized itineraries.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-2xl text-charcoal border-b border-gray-100 pb-3">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/5 p-3 rounded-xl shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">{item.title}</h3>
                      {item.link !== '#' ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-charcoal-light hover:text-accent font-semibold transition-colors text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-charcoal-light text-sm font-semibold">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating hours note */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start space-x-3.5">
              <Clock className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-base text-charcoal">Quick Response Time</h4>
                <p className="text-charcoal-light text-xs sm:text-sm mt-1 leading-relaxed">
                  We usually reply to WhatsApp and email enquiries **within a few hours**. Feel free to ping us at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form Column */}
          <div className="lg:col-span-2">
            <BookingForm defaultTourId={defaultTourId} />
          </div>
        </div>

        {/* Embedded Google Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-4 border border-gray-100 shadow-lg reveal-on-scroll">
          <h3 className="font-serif font-bold text-xl text-charcoal mb-4 px-2">Our Office Location</h3>
          <div className="h-96 rounded-xl bg-gray-150 relative overflow-hidden flex items-center justify-center border border-gray-200">
            {/* Map image placeholder */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Map Location"
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter blur-xs"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="relative bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm text-center border border-gray-100 mx-4 space-y-3">
              <MapPin className="h-10 w-10 text-accent mx-auto animate-bounce" />
              <h4 className="font-serif font-bold text-lg text-charcoal">Ceylon Nest Journeys HQ</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">
                123, Galle Road, Colombo 03, Sri Lanka. Contact us for custom meetups or airport greetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
