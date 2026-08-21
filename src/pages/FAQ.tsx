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
      a: 'Sri Lanka has two distinct monsoon seasons, meaning there is always a dry coast. The southwest coast and hill country (Colombo, Galle, Ella, Kandy) are best visited from December to April, while the northeast coast (Trincomalee, Arugam Bay) is ideal from May to September.',
    },
    {
      q: 'Is Sri Lanka safe for solo travelers and families?',
      a: 'Yes, Sri Lanka is a highly welcoming and safe destination. Crime rates against tourists are extremely low. Booking with Ceylon Nest Journeys ensures you have a reliable, vetted driver-chauffeur, providing high levels of security and peace of mind.',
    },
    {
      q: 'What is included in the tour packages pricing?',
      a: 'Our rates typically cover private transportation in modern air-conditioned vehicles, professional driver-guide services, fuel, highway toll charges, parking fees, and driver lodging/meals. Entrance tickets, meals, and safari jeep rentals are usually excluded unless customized in your contract.',
    },
    {
      q: 'How do I pay for my tour bookings?',
      a: 'We accept payments via secure credit card links, bank telegraphic transfers, or cash payments in USD, EUR, or LKR upon arrival. All terms will be explicitly confirmed during itinerary finalization.',
    },
    {
      q: 'What clothes should I pack for the trip?',
      a: 'Lightweight cotton clothing is ideal for the tropical coasts. Bring a warm sweater or light jacket for the cooler hill country (Ella, Nuwara Eliya). Ensure you pack modest clothing covering shoulders and knees for temple visits.',
    },
    {
      q: 'Is tap water safe to drink in Sri Lanka?',
      a: 'No, tap water is not safe to drink for travelers. Always drink sealed bottled water, which is readily available everywhere on the island, or filtered water provided by your hotels.',
    },
    {
      q: 'Do I need any vaccinations or malaria pills?',
      a: 'Sri Lanka is malaria-free. No special malaria pills are required. Ensure your routine vaccinations are up to date. A Yellow Fever vaccination certificate is required only if you are arriving from an infected area.',
    },
    {
      q: 'How can I get a local SIM card and mobile internet?',
      a: 'You can easily buy a local tourist SIM card at the Colombo Airport arrivals lobby. Operators like Dialog and Mobitel offer cheap packages with excellent 4G/5G coverage across most parts of the island.',
    },
    {
      q: 'Is vegetarian or vegan food easily available in Sri Lanka?',
      a: 'Yes, Sri Lankan cuisine is highly accommodating for vegetarians and vegans. Traditional dishes like dhal (lentil) curry, coconut sambol, gotu kola, and various vegetable curries are naturally vegan and delicious.',
    },
    {
      q: 'What is the electrical socket type and voltage in Sri Lanka?',
      a: 'Sri Lanka operates on a 230V supply voltage and 50Hz. The common socket types are Type G (UK three-pin rectangular), Type D, and Type M. We recommend bringing a universal travel adapter.',
    },
    {
      q: 'Can I use my international credit cards in Sri Lanka?',
      a: 'Yes, Visa and Mastercard are widely accepted in hotels, supermarkets, and premium restaurants. However, cash (LKR) is highly recommended for small local shops, street food stalls, tipping, and tuk-tuk rides.',
    },
    {
      q: 'Is tipping customary in Sri Lanka?',
      a: 'Yes, tipping is customary and deeply appreciated in Sri Lanka. It serves as a sign of gratitude for good service. We suggest tipping hotel porters, safari drivers, and especially your dedicated private driver-guide at the end of the tour.',
    },
    {
      q: 'What are the rules for visiting Buddhist and Hindu temples?',
      a: 'You must remove footwear and hats before entering temple grounds. Dress modestly by covering your shoulders and knees. Never take photos standing with your back directly facing a Buddha statue, as this is considered highly disrespectful.',
    },
    {
      q: 'Is it safe to take the train in Sri Lanka? How do I buy tickets?',
      a: 'Yes, train travel is safe and the Kandy-to-Ella scenic train is world-famous. Because tickets sell out quickly, we recommend letting us book reserved seats for you at least 30 days prior to your arrival.',
    },
    {
      q: 'Are there wild animal hazards on safaris?',
      a: 'Safari jeeps are driven by experienced guides who understand animal behavior. To ensure safety, always remain inside the vehicle, do not make loud noises, and never attempt to feed or touch the animals.',
    },
    {
      q: 'What should I do if I get sick during the tour?',
      a: 'Sri Lanka has excellent private hospitals and clinics in major cities (Colombo, Kandy, Galle, Negombo). Your private driver-guide is trained to assist in medical emergencies and will take you to the nearest clinic immediately.',
    },
    {
      q: 'How do local drivers handle traffic? Is it safe?',
      a: 'Road traffic in Sri Lanka can look chaotic to foreigners. Our drivers are licensed professionals with years of experience navigating these roads safely, always prioritizing your comfort and safety over speed.',
    },
    {
      q: 'Can I customize my private itinerary during the trip?',
      a: 'Yes! One of the main benefits of a private tour with Ceylon Nest Journeys is flexibility. You can adjust departure times, request photo stops, or skip certain activities in consultation with your driver-guide.',
    },
    {
      q: 'Are there issues with power cuts or fuel shortages currently?',
      a: 'No, the economic situation in Sri Lanka has stabilized completely. Fuel is freely available, and major tourist hotels have backup generators to handle any brief, routine electricity disruptions without impacting your stay.',
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url('/poswiecie-sigiriya-459197_1920.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="h-3.5 w-3.5" /> Quick Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            All the key travel details, visa information, weather updates, safety precautions, and booking questions answered in one place.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-xs transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 hover:bg-cream/40 transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-primary">
                    {index + 1}. {faq.q}
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
