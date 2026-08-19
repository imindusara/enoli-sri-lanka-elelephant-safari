import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, MapPin, CreditCard, ChevronRight } from 'lucide-react';

export const AirportTransfers: React.FC = () => {
  const routes = [
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Colombo / Mount Lavinia', time: '45 mins', price: '$35' },
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Galle / Hikkaduwa', time: '1 hr 45 mins', price: '$75' },
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Mirissa / Weligama', time: '2 hrs', price: '$85' },
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Kandy Sacred City', time: '3 hrs', price: '$90' },
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Sigiriya / Dambulla', time: '3.5 hrs', price: '$100' },
    { from: 'Bandaranaike Intl Airport (CMB)', to: 'Ella / Highlands', time: '5 hrs', price: '$135' },
  ];

  const vehicles = [
    { name: 'Premium Sedan', capacity: '3 passengers + 3 bags', desc: 'Comfortable sedans like Toyota Prius or Allion. Perfect for couples or solo travelers.', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80' },
    { name: 'Spacious SUV', capacity: '4 passengers + 4 bags', desc: 'All-terrain SUVs like Honda Vezel or Toyota RAV4. Ideal for small families.', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80' },
    { name: 'Micro Passenger Van', capacity: '7 passengers + 7 bags', desc: 'Spacious high-roof vans like Toyota KDH or HiAce. Perfect for groups or surfers.', image: 'https://images.unsplash.com/photo-1563201412-f240ecf91439?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563201412-f240ecf91439?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Shield className="h-3.5 w-3.5" /> 24/7 Reliable Transfers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Airport Transfers</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Skip the hassle of local taxi queues. Safe, air-conditioned private vehicle airport pick-ups and drops across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-3">
            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Calendar className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Flight Monitoring</h4>
            <p className="text-charcoal-light text-xs leading-relaxed">
              We track your flight number in real time. If your arrival is delayed or early, your private driver will adjust their pickup time accordingly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-3">
            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Meet & Greet Service</h4>
            <p className="text-charcoal-light text-xs leading-relaxed">
              Your driver will be waiting outside the airport arrival terminal holding a placard with your name clearly visible.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-xs space-y-3">
            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <CreditCard className="h-5 w-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-primary">Inclusive Rates</h4>
            <p className="text-charcoal-light text-xs leading-relaxed">
              Our rates include all airport parking, fuel fees, driver charges, and highway toll charges with absolutely zero hidden fees.
            </p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-10 space-y-6">
          <h3 className="font-serif font-bold text-2xl text-primary border-b border-gray-100 pb-4">
            Popular Transfer Rates (One-Way)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-charcoal font-bold uppercase text-[10px] tracking-wider bg-cream">
                  <th className="py-4 px-4 rounded-l-xl">Pick-up From</th>
                  <th className="py-4 px-4">Destination</th>
                  <th className="py-4 px-4">Estimated Time</th>
                  <th className="py-4 px-4 rounded-r-xl">Price (Sedan)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-charcoal-light text-xs font-semibold">
                {routes.map((route, idx) => (
                  <tr key={idx} className="hover:bg-cream/40 transition-colors">
                    <td className="py-4 px-4">{route.from}</td>
                    <td className="py-4 px-4 font-bold text-primary">{route.to}</td>
                    <td className="py-4 px-4">{route.time}</td>
                    <td className="py-4 px-4 text-accent font-bold text-sm">{route.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-3xl text-primary text-center">Our Private Vehicle Fleet</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((v, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="h-48 overflow-hidden">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-serif font-bold text-lg text-primary">{v.name}</h4>
                    <span className="inline-block text-[10px] font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25">
                      {v.capacity}
                    </span>
                    <p className="text-charcoal-light text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="block text-center border-2 border-primary hover:border-accent text-primary hover:text-accent font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all duration-300"
                  >
                    Enquire Fleet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <h3 className="font-serif font-bold text-2xl sm:text-4xl text-white">Need an Airport Transfer Booking?</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            Provide your flight code, departure terminal details, arrival date, and vehicle size to ensure a smooth, worry-free start to your holiday.
          </p>
          <Link
            to="/book-now"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Book Airport Transfer</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
