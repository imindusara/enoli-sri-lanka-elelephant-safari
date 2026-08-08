import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Award, ThumbsUp, Car, Sparkles, MessageCircle } from 'lucide-react';
import { toursData } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { useTranslation } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day' | 'multi-day'>('day');
  const { t, language } = useTranslation();

  const filteredTours = toursData.filter((t) => t.category === activeTab);

  // Dynamic values depending on language
  const whyChooseUsData = {
    EN: [
      { icon: <Car className="h-8 w-8 text-accent" />, title: 'Comfortable A/C Vehicles', desc: 'Travel in modern, clean, air-conditioned cars or vans suited to your group size.' },
      { icon: <Award className="h-8 w-8 text-accent" />, title: 'Professional Driver-Guides', desc: 'Our friendly English-speaking driver-guides are licensed, reliable, and deeply knowledgeable.' },
      { icon: <Sparkles className="h-8 w-8 text-accent" />, title: 'Tailored Itineraries', desc: 'Fully customizable schedules and itineraries matched to your pacing and interests.' },
      { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Safe & Reliable Service', desc: 'Your safety is our top priority. We offer comprehensive insurance and safe driving standards.' },
      { icon: <ThumbsUp className="h-8 w-8 text-accent" />, title: 'Transparent Fair Pricing', desc: 'Honest rates with zero hidden charges. Vehicle, fuel, parking, and driver expenses included.' }
    ],
    DE: [
      { icon: <Car className="h-8 w-8 text-accent" />, title: 'Komfortable Klimatisierte Fahrzeuge', desc: 'Reisen Sie in modernen, sauberen, klimatisierten Autos oder Vans, passend für Ihre Gruppe.' },
      { icon: <Award className="h-8 w-8 text-accent" />, title: 'Professionelle Reiseleiter', desc: 'Unsere freundlichen, englischsprachigen Fahrer sind lizenziert, zuverlässig und sehr erfahren.' },
      { icon: <Sparkles className="h-8 w-8 text-accent" />, title: 'Maßgeschneiderte Routen', desc: 'Komplett anpassbare Zeitpläne und Routen, abgestimmt auf Ihr Tempo und Ihre Interessen.' },
      { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Sicherer & Zuverlässiger Service', desc: 'Ihre Sicherheit steht an erster Stelle. Wir bieten umfassenden Schutz und sichere Fahrstandards.' },
      { icon: <ThumbsUp className="h-8 w-8 text-accent" />, title: 'Transparente & Faire Preise', desc: 'Ehrliche Preise ohne versteckte Gebühren. Fahrzeug, Benzin, Maut und Fahrer inklusive.' }
    ],
    FR: [
      { icon: <Car className="h-8 w-8 text-accent" />, title: 'Véhicules Climatisés Confortables', desc: 'Voyagez dans des voitures ou des vans modernes, propres et climatisés, adaptés à votre groupe.' },
      { icon: <Award className="h-8 w-8 text-accent" />, title: 'Chauffeurs-Guides Professionnels', desc: 'Nos chauffeurs francophones et anglophones sont certifiés, fiables et passionnés.' },
      { icon: <Sparkles className="h-8 w-8 text-accent" />, title: 'Itinéraires sur Mesure', desc: 'Des plannings entièrement personnalisables adaptés à votre rythme et à vos centres d\'intérêt.' },
      { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Service Sûr et Fiable', desc: 'Votre sécurité est notre priorité absolue. Assurances complètes et conduite prudente.' },
      { icon: <ThumbsUp className="h-8 w-8 text-accent" />, title: 'Tarifs Transparents', desc: 'Des tarifs clairs sans frais cachés. Véhicule, carburant, péages et frais de chauffeur inclus.' }
    ],
    IT: [
      { icon: <Car className="h-8 w-8 text-accent" />, title: 'Veicoli Comfortevoli con A/C', desc: 'Viaggia in auto o van moderni, puliti e dotati di aria condizionata, ideali per ogni gruppo.' },
      { icon: <Award className="h-8 w-8 text-accent" />, title: 'Autisti-Guide Professionali', desc: 'I nostri autisti parlanti inglese sono amichevoli, certificati, affidabili e preparati.' },
      { icon: <Sparkles className="h-8 w-8 text-accent" />, title: 'Itinerari Personalizzati', desc: 'Orari e programmi flessibili e su misura, adattati al tuo ritmo e alle tue preferenze.' },
      { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Servizio Sicuro e Affidabile', desc: 'La tua sicurezza è al primo posto. Offriamo assicurazioni complete e alti standard di guida.' },
      { icon: <ThumbsUp className="h-8 w-8 text-accent" />, title: 'Prezzi Trasparenti', desc: 'Tariffe oneste senza costi nascosti. Veicolo, carburante, pedaggi e spese dell\'autista inclusi.' }
    ]
  };

  const stepsData = {
    EN: [
      { number: '01', title: 'Share Your Details', desc: 'Provide your dates, passenger count, and interests using our online form or directly over WhatsApp.' },
      { number: '02', title: 'Get Custom Quote', desc: 'We will construct a bespoke itinerary and a transparent, comprehensive price quotation just for you.' },
      { number: '03', title: 'Book & Enjoy!', desc: 'Confirm your booking with zero hassle, then relax as we welcome you to our paradise island.' }
    ],
    DE: [
      { number: '01', title: 'Details mitteilen', desc: 'Geben Sie Reisedaten, Personenzahl und Wünsche per Formular oder direkt via WhatsApp an.' },
      { number: '02', title: 'Angebot erhalten', desc: 'Wir erstellen einen maßgeschneiderten Reiseverlauf und ein transparentes Angebot nur für Sie.' },
      { number: '03', title: 'Buchen & Genießen!', desc: 'Bestätigen Sie Ihre Buchung unkompliziert und entspannen Sie sich auf unserer Trauminsel.' }
    ],
    FR: [
      { number: '01', title: 'Partagez vos Détails', desc: 'Indiquez vos dates, passagers et intérêts via notre formulaire en ligne ou directement par WhatsApp.' },
      { number: '02', title: 'Recevez un Devis', desc: 'Nous concevrons un itinéraire sur mesure et une proposition tarifaire transparente pour vous.' },
      { number: '03', title: 'Réservez & Profitez !', desc: 'Confirmez votre réservation facilement, puis détendez-vous. Bienvenue sur notre île paradisiaque.' },
    ],
    IT: [
      { number: '01', title: 'Condividi i Dettagli', desc: 'Fornisci date, numero di passeggeri e interessi con il modulo online o direttamente su WhatsApp.' },
      { number: '02', title: 'Ricevi un Preventivo', desc: 'Creeremo un itinerario su misura e un preventivo di spesa trasparente e completo per te.' },
      { number: '03', title: 'Prenota e Divertiti!', desc: 'Conferma la prenotazione senza stress, rilassati e lasciati accogliere nella nostra isola paradiso.' }
    ]
  };

  const currentWhyChooseUs = whyChooseUsData[language] || whyChooseUsData['EN'];
  const currentSteps = stepsData[language] || stepsData['EN'];

  const testimonials = [
    {
      text: "Our trip with Enoli Sri Lanka Elephant Safari was incredible. The Nine Arches Bridge and Udawalawe safari were highlights, but what truly made it special was our driver. He felt like family, was extremely safe, and showed us the best local spots. Highly recommend!",
      author: "Sarah & David M.",
      location: "United Kingdom",
    },
    {
      text: "Flawless service from start to finish! The vehicle was clean and modern, and the Dambulla and Sigiriya climbs were unforgettable. We got custom stops along the way that weren't even on the main list. Real Sri Lankan hospitality!",
      author: "Markus K.",
      location: "Germany",
    },
    {
      text: "As a solo female traveler, safety was my biggest concern. Enoli Sri Lanka Elephant Safari provided a driver who was professional, polite, and extremely protective. I had the time of my life exploring Galle and Madu River!",
      author: "Elena R.",
      location: "Italy",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-primary">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-55" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80')` }}></div>
        
        {/* Bottom curve gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-6 pt-16">
          <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-fade-in">
            <Compass className="h-4 w-4" /> {t('hero_welcome')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight animate-fade-in-up">
            {t('hero_title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in-up">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up">
            <Link
              to="/tours"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              {t('hero_cta_explore')}
            </Link>
            <a
              href="https://wa.me/94770000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <span>{t('hero_cta_whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro / Summary Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('intro_badge')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-6">
            {t('intro_title')}
          </h2>
          <p className="text-charcoal-light text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto font-sans">
            {t('intro_p1')}
          </p>
          <p className="text-charcoal-light text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto font-sans">
            {t('intro_p2')}
          </p>
          <p className="text-charcoal-light text-base sm:text-lg font-semibold leading-relaxed mb-8 max-w-3xl mx-auto font-sans">
            {t('intro_p3')}
          </p>
          <Link
            to="/about"
            className="text-primary hover:text-accent font-semibold flex items-center justify-center gap-1 group text-sm"
          >
            <span>{t('intro_learn_more')}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('tours_badge')}</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
              {t('tours_title')}
            </h2>
            <p className="text-charcoal-light text-sm sm:text-base max-w-md mx-auto">
              {t('tours_subtitle')}
            </p>

            {/* Day / Multi-day Toggles */}
            <div className="flex justify-center mt-8">
              <div className="bg-cream p-1.5 rounded-full inline-flex border border-gray-100 shadow-sm">
                <button
                  onClick={() => setActiveTab('day')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'day'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  {t('tours_day')}
                </button>
                <button
                  onClick={() => setActiveTab('multi-day')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'multi-day'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  {t('tours_multi')}
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('why_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              {t('why_title')}
            </h2>
            <p className="text-charcoal-light max-w-md mx-auto text-sm sm:text-base mt-3">
              {t('why_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentWhyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('tours_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              {t('how_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[2px] bg-cream -z-10"></div>
            
            {currentSteps.map((step, index) => (
              <div key={index} className="text-center px-4 reveal-on-scroll">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cream border-4 border-white text-2xl font-bold text-primary shadow-md mb-6 hover:scale-105 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('nav_reviews')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
              {t('reviews_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between reveal-on-scroll"
              >
                <p className="text-charcoal-light italic text-sm leading-relaxed mb-6 font-sans">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base">{t.author}</h4>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action banner */}
      <section className="relative py-24 px-4 bg-primary text-white text-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80')` }}></div>
        
        <div className="relative max-w-4xl mx-auto z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {t('ready_title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('ready_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              to="/contact?book=true"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg text-center"
            >
              {t('nav_book_now')}
            </Link>
            <a
              href="https://wa.me/94770000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t('hero_cta_whatsapp')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
