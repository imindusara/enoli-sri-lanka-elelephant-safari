import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { toursData } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const Tours: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [activeTab, setActiveTab] = useState<'all' | 'day' | 'multi-day' | 'transfers' | 'hire'>('all');
  const [durationFilter, setDurationFilter] = useState<'all' | '2' | '5' | '7' | '9'>('all');

  useEffect(() => {
    if (filterParam === 'day') {
      setActiveTab('day');
    } else if (filterParam === 'multi-day') {
      setActiveTab('multi-day');
    } else if (filterParam === 'transfers') {
      setActiveTab('transfers');
    } else if (filterParam === 'hire') {
      setActiveTab('hire');
    } else {
      setActiveTab('all');
    }
  }, [filterParam]);

  const handleTabChange = (tab: 'all' | 'day' | 'multi-day' | 'transfers' | 'hire') => {
    setActiveTab(tab);
    setDurationFilter('all'); // reset duration sub-filter
    if (tab === 'all') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', tab);
    }
    setSearchParams(searchParams);
  };

  const filteredTours = toursData.filter((tour) => {
    // category filter
    const matchesCategory = activeTab === 'all' || tour.category === activeTab;
    if (!matchesCategory) return false;

    // duration filter (for multi-day tours)
    if (activeTab === 'multi-day' && durationFilter !== 'all') {
      const days = tour.duration.split(' ')[0];
      return days === durationFilter;
    }
    
    return true;
  });

  const multiDayTours = toursData.filter((tour) => tour.category === 'multi-day');

  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578590494538-cd46ea167b05?auto=format&fit=crop&w=1200&q=80')` }}></div>
        
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Compass className="h-3.5 w-3.5" /> Carefully Crafted Journeys
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Our Tour Packages</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From single-day excursions to multi-day immersive packages, explore Sri Lanka in ultimate comfort and style.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          {/* Mobile Dropdown (Visible only on mobile screens < 640px) */}
          <div className="block sm:hidden w-full max-w-xs mx-auto px-4">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value as any)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base font-semibold text-charcoal focus:outline-none focus:border-primary min-h-[46px] shadow-xs cursor-pointer"
            >
              <option value="all">All Tours</option>
              <option value="day">Day Tours</option>
              <option value="multi-day">Multi-Day Tours</option>
              <option value="transfers">Scenic Transfers</option>
              <option value="hire">Car & Driver</option>
            </select>
          </div>

          {/* Desktop & Tablet Buttons (Hidden on mobile) */}
          <div className="hidden sm:inline-flex bg-white p-1 rounded-full border border-gray-205 shadow-sm max-w-full">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              All Tours
            </button>
            <button
              onClick={() => handleTabChange('day')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] ${
                activeTab === 'day'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Day Tours
            </button>
            <button
              onClick={() => handleTabChange('multi-day')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] ${
                activeTab === 'multi-day'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Multi-Day Tours
            </button>
            <button
              onClick={() => handleTabChange('transfers')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] ${
                activeTab === 'transfers'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Scenic Transfers
            </button>
            <button
              onClick={() => handleTabChange('hire')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[40px] ${
                activeTab === 'hire'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Car & Driver
            </button>
          </div>

          {/* Duration Filter Submenu for Multi-Day */}
          {activeTab === 'multi-day' && (
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full max-w-full">
              <span className="text-[10px] sm:text-xs font-bold text-charcoal-light uppercase tracking-wider">Duration:</span>
              
              {/* Mobile Duration Dropdown (Visible only on mobile screens < 640px) */}
              <div className="block sm:hidden w-full max-w-xs mx-auto px-4">
                <select
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value as any)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-charcoal focus:outline-none focus:border-primary min-h-[40px] shadow-xs cursor-pointer"
                >
                  <option value="all">All Durations</option>
                  <option value="2">2 Days</option>
                  <option value="5">5 Days</option>
                  <option value="7">7 Days</option>
                  <option value="9">9 Days</option>
                </select>
              </div>

              {/* Desktop & Tablet Duration Buttons (Hidden on mobile) */}
              <div className="hidden sm:flex flex-wrap justify-center gap-2 max-w-full">
                {(['all', '2', '5', '7', '9'] as const).map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDurationFilter(dur)}
                    className={`px-3.5 py-2 rounded-xl text-[10px] sm:text-xs font-semibold border transition-all cursor-pointer min-h-[38px] ${
                      durationFilter === dur
                        ? 'bg-accent text-white border-accent shadow-sm'
                        : 'bg-white text-charcoal-light border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {dur === 'all' ? 'All' : `${dur} Days`}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tour List Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>

        {/* Comparison Table Section for Multi-Day Tours */}
        {activeTab !== 'day' && (
          <div className="mt-20 reveal-on-scroll">
            <div className="text-center mb-10">
              <h2 className="font-serif font-bold text-3xl text-charcoal">Multi-Day Tours Comparison</h2>
              <p className="text-charcoal-light text-sm max-w-md mx-auto mt-2">
                Compare durations, highlight experiences, and base pricing side-by-side to choose your dream itinerary.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white text-sm font-semibold uppercase tracking-wider">
                      <th className="py-5 px-6">Tour Package</th>
                      <th className="py-5 px-6">Duration</th>
                      <th className="py-5 px-6">Top Highlights</th>
                      <th className="py-5 px-6">Base Price</th>
                      <th className="py-5 px-6 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {multiDayTours.map((tour) => (
                      <tr key={tour.id} className="hover:bg-cream/40 transition-colors">
                        <td className="py-5 px-6 font-serif font-bold text-charcoal text-base">
                          {tour.title}
                        </td>
                        <td className="py-5 px-6">
                          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                            {tour.duration}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <div className="space-y-1 max-w-sm">
                            {tour.highlights.slice(0, 3).map((hl, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-xs text-charcoal-light">
                                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="py-5 px-6 font-semibold text-charcoal">
                          {tour.price ? `From USD ${tour.price}` : tour.priceLabel || 'Contact us'}
                        </td>
                        <td className="py-5 px-6 text-center">
                          <Link
                            to={`/tours/${tour.id}`}
                            className="inline-flex items-center gap-1 text-primary hover:text-accent font-bold transition-all group"
                          >
                            <span>Details</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 py-4 px-6 border-t border-gray-100 text-xs text-charcoal-light italic text-center">
                *Prices are per person based on double/twin sharing. Final quote depends on group size, season & accommodation class.
              </div>
            </div>
          </div>
        )}

        {/* Custom Tour CTA Banner */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-lg mt-16 text-center max-w-4xl mx-auto reveal-on-scroll">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal mb-4">
            Looking for something unique?
          </h2>
          <p className="text-charcoal-light max-w-lg mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            All of our itineraries can be customized according to your travel dates, preferences, and interests. Tell us what you want to see, and we'll create the perfect trip for you.
          </p>
          <Link
            to="/contact?tour=custom"
            className="inline-flex justify-center bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg"
          >
            Design Custom Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
};
