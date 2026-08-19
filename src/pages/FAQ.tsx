import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Do I need a visa to visit Sri Lanka?',
      a: 'Yes, most foreign nationals require an Electronic Travel Authorization (ETA) or eVisa to enter Sri Lanka. You can apply easily online via the official government portal before departure. Ensure your passport is valid for at least 6 months from your arrival date.',
    },
    {
      q: 'When is the best time to visit Sri Lanka?',
      a: 'Sri Lanka has two distinct monsoon seasons, meaning there is always a dry coast. The southwest coast and hill country are best visited from December to April, while the northeast coast is ideal from May to September.',
    },
    {
      q: 'Is Sri Lanka safe for solo travelers and families?',
      a: 'Yes, Sri Lanka is a highly welcoming and safe destination. Crime rates against tourists are low. Booking with Ceylon Nest Journeys ensures you have a reliable, vetted driver-chauffeur, providing high levels of security and peace of mind.',
    },
    {
      q: 'What is included in the tour packages pricing?',
      a: 'Our rates typically cover private transportation in air-conditioned vehicles, professional driver-guide services, fuel, highway toll charges, and driver lodging. Entrance tickets, meals, and safari jeep rentals are usually excluded unless customized in your contract.',
    },
    {
      q: 'How do I pay for my tour bookings?',
      a: 'We accept payments via credit card links, bank telegraphic transfers, or cash payments in USD, EUR, or LKR upon arrival. All terms will be explicitly confirmed during itinerary finalization.',
    },
    {
      q: 'What clothes should I pack for the trip?',
      a: 'Lightweight cotton clothing is ideal for the tropical coasts. Bring a warm sweater or light jacket for the cooler hill country (Ella, Nuwara Eliya). Ensure you pack modest clothing covering shoulders and knees for temple visits.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="h-3.5 w-3.5" /> Quick Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            All the key travel details, visa information, weather updates, and booking questions answered in one place.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-cream/45 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-primary">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-accent shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                    <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
