import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Award, ThumbsUp, Car, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { toursData } from '../data/tours';
import { TourCard } from '../components/TourCard';
import { useTranslation } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'day' | 'multi-day'>('all');
  const { t, language } = useTranslation();

  const filteredTours = activeTab === 'all'
    ? toursData
    : toursData.filter((t) => t.category === activeTab);

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
      { number: '02', title: 'Ricevi un Preventivo', desc: 'Creeremo un intranet su misura e un preventivo di spesa trasparente e completo per te.' },
      { number: '03', title: 'Prenota e Divertiti!', desc: 'Conferma la prenotazione senza stress, rilassati e lasciati accogliere nella nostra isola paradiso.' }
    ]
  };

  const currentWhyChooseUs = whyChooseUsData[language] || whyChooseUsData['EN'];
  const currentSteps = stepsData[language] || stepsData['EN'];

  const testimonials = [
    {
      text: "Our trip with Ceylon Nest Journeys was incredible. The Nine Arches Bridge and Udawalawe safari were highlights, but what truly made it special was our driver. He felt like family, was extremely safe, and showed us the best local spots. Highly recommend!",
      author: "Sarah & David M.",
      location: "United Kingdom",
    },
    {
      text: "Flawless service from start to finish! The vehicle was clean and modern, and the Dambulla and Sigiriya climbs were unforgettable. We got custom stops along the way that weren't even on the main list. Real Sri Lankan hospitality!",
      author: "Markus K.",
      location: "Germany",
    },
    {
      text: "As a solo female traveler, safety was my biggest concern. Ceylon Nest Journeys provided a driver who was professional, polite, and extremely protective. I had the time of my life exploring Galle and Madu River!",
      author: "Elena R.",
      location: "Italy",
    },
  ];

  return (
    <div className="overflow-x-hidden text-charcoal bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen py-16 sm:py-24 md:py-32 flex items-center justify-center text-center bg-cream overflow-hidden">
        {/* Optimized Image Background instead of CSS background-image */}
        <img
          src="/poswiecie-sigiriya-459197_1920.jpg"
          alt="Sigiriya Rock Fortress Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative max-w-3xl mx-auto px-4 py-8 sm:px-12 sm:py-12 z-10 space-y-5 sm:space-y-8 my-4 flex flex-col items-center bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up">
          
          {/* Tagline / Sub-text header tag */}
          <span className="inline-block text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] animate-fade-in">
            {t('hero_welcome')}
          </span>

          {/* Main large heading text */}
          <h1 className="fluid-h1 font-serif font-bold tracking-tight text-primary leading-tight animate-fade-in-up">
            {t('hero_title')}
          </h1>

          {/* Body paragraph text */}
          <p className="fluid-body text-charcoal-light max-w-2xl font-medium font-sans leading-relaxed animate-fade-in-up">
            {t('hero_subtitle')}
          </p>

          {/* Single Clear CTA Button (Eliminated competing CTA) */}
          <div className="pt-2 w-full sm:w-auto animate-fade-in-up">
            <Link
              to="/custom-tours"
              className="w-full sm:w-auto inline-flex bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(30,77,59,0.4)] border border-transparent hover:border-accent hover:-translate-y-0.5 items-center justify-center text-center cursor-pointer min-h-[48px]"
            >
              {t('hero_cta_explore')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-cream border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story column */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] block">ABOUT CEYLON NEST JOURNEYS</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Your Trusted Travel Partner in Sri Lanka
              </h2>
              <div className="text-charcoal-light text-base sm:text-lg leading-relaxed font-sans space-y-4">
                <p>
                  Welcome to <strong>Ceylon Nest Journeys</strong>, your trusted travel partner for discovering the breathtaking beauty of Sri Lanka. We specialize in creating personalized tours that showcase the island's stunning landscapes, rich cultural heritage, diverse wildlife, and pristine beaches.
                </p>
                <p>
                  Our experienced team is dedicated to providing safe, comfortable, and unforgettable travel experiences infused with genuine Sri Lankan hospitality. Whether you're seeking adventure, relaxation, cultural exploration, or a luxury getaway, we carefully design every journey to match your interests and exceed your expectations. At Ceylon Nest Journeys, we don't just plan holidays—we create memories that last a lifetime.
                </p>
              </div>
            </div>

            {/* Vision & Mission cards column */}
            <div className="lg:col-span-5 space-y-6 reveal-on-scroll">
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Our Vision</h3>
                <p className="text-charcoal-light text-sm leading-relaxed font-sans">
                  To inspire the world to discover the true beauty of Sri Lanka through extraordinary travel experiences.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Our Mission</h3>
                <p className="text-charcoal-light text-sm leading-relaxed font-sans">
                  Crafting exceptional journeys with genuine hospitality, personalized service, and unforgettable memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="tours" className="py-24 px-4 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t('tours_badge')}</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-primary mb-4">
              {t('tours_title')}
            </h2>
            <p className="text-charcoal-light text-sm sm:text-base max-w-md mx-auto">
              Select one of our popular day trips or plan a fully customized multi-day journey.
            </p>

            {/* Day / Multi-day Toggles */}
            <div className="flex justify-center mt-8">
              <div className="bg-cream p-1.5 rounded-full inline-flex border border-gray-150 shadow-sm">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  All Tours
                </button>
                <button
                  onClick={() => setActiveTab('day')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === 'day'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  {t('tours_day')}
                </button>
                <button
                  onClick={() => setActiveTab('multi-day')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === 'multi-day'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  {t('tours_multi')}
                </button>
              </div>
            </div>

            {/* Sub-headers depending on selected tab */}
            {activeTab === 'day' && (
              <p className="text-accent text-xs font-bold uppercase tracking-wider mt-6 animate-fade-in bg-accent/5 py-2 px-4 rounded-full inline-block">
                Departing from any location in Sri Lanka | Includes Private A/C Transport & Professional Driver-Guide
              </p>
            )}
            {activeTab === 'multi-day' && (
              <p className="text-accent text-xs font-bold uppercase tracking-wider mt-6 animate-fade-in bg-accent/5 py-2 px-4 rounded-full inline-block">
                Tailored Journeys with Premium Accommodation, Meals, Guides & Curated Activities
              </p>
            )}
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

      {/* Global Inclusions / Exclusions Comparison Table */}
      <section className="py-24 px-4 bg-cream border-t border-b border-gray-150">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] block mb-3">TRANSPARENT TRAVELING</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              Global Inclusions & Exclusions
            </h2>
            <p className="text-charcoal-light max-w-md mx-auto text-sm sm:text-base mt-3">
              We believe in complete transparency. Know exactly what is covered in your custom luxury trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
            {/* Inclusions Card */}
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-6">
              <h3 className="text-xl font-serif font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" /> Included in Your Package
              </h3>
              <ul className="space-y-3.5 text-sm text-charcoal-light font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Private A/C Luxury Vehicle (suitable size for group)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Professional English-speaking Driver-Guide</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Fuel charges, highway tolls, and parking fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Driver-guide's meals, accommodation, and allowances</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Complimentary bottled drinking water daily</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <span>Deluxe hotel accommodation (for multi-day packages)</span>
                </li>
              </ul>
            </div>

            {/* Exclusions Card */}
            <div className="bg-amber-50/10 p-8 rounded-2xl border border-amber-100/60 space-y-6">
              <h3 className="text-xl font-serif font-bold text-accent-dark flex items-center gap-2">
                <span className="h-6 w-6 rounded-full border-2 border-accent-dark flex items-center justify-center font-bold text-xs">✕</span> Excluded from Package
              </h3>
              <ul className="space-y-3.5 text-sm text-charcoal-light font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Entrance tickets to historical sites, monuments, & temples</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Lunch and midday snack expenses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Safari Jeep rental and park guide fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Water sports, boat safari tickets, or extra excursions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Personal expenses (laundry, telephone calls, shopping)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>International flights and visa fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('why_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
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
                className="bg-cream p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-cream border-t border-b border-gray-150">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('tours_badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              {t('how_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[2px] bg-gray-200 -z-10"></div>
            
            {currentSteps.map((step, index) => (
              <div key={index} className="text-center px-4 reveal-on-scroll">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-cream text-2xl font-bold text-primary shadow-md mb-6 hover:scale-105 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{step.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">{t('nav_reviews')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
              {t('reviews_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl shadow-sm border border-gray-150 flex flex-col justify-between reveal-on-scroll animate-fade-in"
              >
                <p className="text-charcoal-light italic text-sm leading-relaxed mb-6 font-sans">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-serif font-bold text-primary text-base">{t.author}</h4>
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
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80')` }}></div>
        
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
              href="https://wa.me/94763586686"
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
