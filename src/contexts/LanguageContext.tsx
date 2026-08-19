import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'EN' | 'DE' | 'FR' | 'IT';

interface TranslationDict {
  [key: string]: {
    EN: string;
    DE: string;
    FR: string;
    IT: string;
  };
}

export const translations: TranslationDict = {
  // Navigation
  nav_home: { EN: 'Home', DE: 'Startseite', FR: 'Accueil', IT: 'Home' },
  nav_services: { EN: 'Services', DE: 'Dienstleistungen', FR: 'Services', IT: 'Servizi' },
  nav_tours: { EN: 'Tours', DE: 'Touren', FR: 'Circuits', IT: 'Tour' },
  nav_about: { EN: 'About', DE: 'Über uns', FR: 'À propos', IT: 'Chi Siamo' },
  nav_destinations: { EN: 'Destinations', DE: 'Reiseziele', FR: 'Destinations', IT: 'Destinazioni' },
  nav_custom_tours: { EN: 'Private Tours', DE: 'Maßgeschneidert', FR: 'Circuits sur Mesure', IT: 'Tour su Misura' },
  nav_gallery: { EN: 'Gallery', DE: 'Galerie', FR: 'Galerie', IT: 'Galleria' },
  nav_reviews: { EN: 'Reviews', DE: 'Bewertungen', FR: 'Avis', IT: 'Recensioni' },
  nav_blog: { EN: 'Travel Guide', DE: 'Reiseführer', FR: 'Guide de Voyage', IT: 'Guida di Viaggio' },
  nav_contact: { EN: 'Contact', DE: 'Kontakt', FR: 'Contact', IT: 'Contatti' },
  nav_book_now: { EN: 'Book Now', DE: 'Jetzt Buchen', FR: 'Réserver', IT: 'Prenota Ora' },
  
  // Hero Section
  hero_welcome: { EN: 'PREMIUM SRI LANKAN TRAVELS', DE: 'PREMIUM SRI LANKA REISEN', FR: 'VOYAGES DE LUXE AU SRI LANKA', IT: 'VIAGGI DI LUSSO IN SRI LANKA' },
  hero_title: {
    EN: 'Private, Personalized Tours Across Sri Lanka',
    DE: 'Private, personalisierte Touren durch Sri Lanka',
    FR: 'Circuits privés et personnalisés au Sri Lanka',
    IT: 'Tour privati e personalizzati in Sri Lanka'
  },
  hero_subtitle: {
    EN: 'Explore pristine beaches, ancient cities, and lush tea plantations with your own dedicated driver-guide.',
    DE: 'Erkunden Sie Traumstrände, antike Städte und Teeplantagen mit Ihrem eigenen privaten Fahrer und Guide.',
    FR: 'Découvrez des plages de rêve, des cités anciennes et des plantations de thé avec votre chauffeur-guide privé.',
    IT: 'Esplora spiagge incontaminate, città antiche e piantagioni di tè con la tua guida-autista privata.'
  },
  hero_cta_explore: { EN: 'Plan My Trip', DE: 'Meine Reise Planen', FR: 'Planifier Mon Voyage', IT: 'Pianifica il Mio Viaggio' },
  hero_cta_whatsapp: { EN: 'Book via WhatsApp', DE: 'Per WhatsApp Buchen', FR: 'Réserver via WhatsApp', IT: 'Prenota via WhatsApp' },

  // Intro Section
  intro_badge: { EN: 'Our Identity', DE: 'Unsere Identität', FR: 'Notre Identité', IT: 'La Nostra Identità' },
  intro_title: { EN: 'Your Trusted Travel Partner for Discovering Sri Lanka', DE: 'Ihr zuverlässiger Reisepartner für Sri Lanka', FR: 'Votre Partenaire Voyage de Confiance pour le Sri Lanka', IT: 'Il Tuo Partner di Viaggio di Fiducia per lo Sri Lanka' },
  intro_p1: {
    EN: 'Welcome to Ceylon Nest Journeys, your trusted travel partner for discovering the beauty of Sri Lanka. We specialize in creating personalized tours that showcase the island\'s breathtaking landscapes, rich cultural heritage, diverse wildlife, and pristine beaches.',
    DE: 'Willkommen bei Ceylon Nest Journeys, Ihrem zuverlässigen Partner zur Entdeckung der Schönheit Sri Lankas. Wir spezialisieren uns auf maßgeschneiderte Touren durch atemberaubende Landschaften, reiches Kulturerbe, vielfältige Tierwelt und goldene Strände.',
    FR: 'Bienvenue chez Ceylon Nest Journeys, votre partenaire de confiance pour découvrir la beauté du Sri Lanka. Nous concevons des circuits personnalisés à travers des paysages magnifiques, un riche patrimoine culturel, une faune variée et des plages dorées.',
    IT: 'Benvenuti in Ceylon Nest Journeys, il vostro partner di fiducia per scoprire la bellezza dello Sri Lanka. Siamo specializzati nella creazione di tour personalizzati che mostrano i paesaggi mozzafiato dell\'isola, il ricco patrimonio culturale, la fauna selvatica e le spiagge.'
  },
  intro_p2: {
    EN: 'Our experienced team is dedicated to providing safe, comfortable, and unforgettable travel experiences with genuine Sri Lankan hospitality. Whether you\'re seeking adventure, relaxation, cultural exploration, or a luxury getaway, we carefully design every journey to match your interests and exceed your expectations.',
    DE: 'Unser erfahrenes Team sorgt mit echter sri-lankischer Gastfreundschaft für sichere, komfortable und unvergessliche Erlebnisse. Egal ob Abenteuer, Entspannung, Kultur oder Luxus – wir passen jede Reise an Ihre Wünsche an.',
    FR: 'Notre équipe expérimentée s\'engage à vous offrir des expériences sûres, confortables et inoubliables avec l\'hospitalité sri-lankaise. Que vous cherchiez l\'aventure, la détente, la culture ou le luxe, nous personnalisons votre voyage.',
    IT: 'Il nostro team di esperti si impegna a fornire esperienze di viaggio sicure, confortevoli e indimenticabili con l\'autentica ospitalità dello Sri Lanka. Che cerchiate avventura, relax, cultura o lusso, personalizziamo il vostro viaggio.'
  },
  intro_p3: {
    EN: 'At Ceylon Nest Journeys, we don\'t just plan holidays — we create memories that last a lifetime.',
    DE: 'Bei Ceylon Nest Journeys planen wir nicht nur Urlaub – wir schaffen Erinnerungen fürs Leben.',
    FR: 'Chez Ceylon Nest Journeys, nous ne planifions pas seulement des vacances – nous créons des souvenirs pour la vie.',
    IT: 'A Ceylon Nest Journeys, non pianifichiamo solo vacanze, creiamo ricordi che durano una vita.'
  },
  intro_learn_more: { EN: 'Learn More About Us', DE: 'Mehr über uns erfahren', FR: 'En savoir plus', IT: 'Scopri di più su di noi' },

  // Tours Section
  tours_badge: { EN: 'Explore Sri Lanka', DE: 'Sri Lanka Erkunden', FR: 'Explorer Le Sri Lanka', IT: 'Esplora lo Sri Lanka' },
  tours_title: { EN: 'Featured Tour Packages', DE: 'Beliebte Tour-Pakete', FR: 'Circuits Populaires', IT: 'Pacchetti Tour in Evidenza' },
  tours_subtitle: { EN: 'Select one of our popular day trips or plan a fully customized multi-day journey.', DE: 'Wählen Sie einen beliebten Tagesausflug oder planen Sie eine individuelle Mehrtagestour.', FR: 'Sélectionnez une excursion d\'une journée ou planifiez un voyage sur mesure de plusieurs jours.', IT: 'Seleziona una gita giornaliera o pianifica un viaggio personalizzato di più giorni.' },
  tours_all: { EN: 'All Tours', DE: 'Alle Touren', FR: 'Tous les Circuits', IT: 'Tutti i Tour' },
  tours_day: { EN: 'Day Tours', DE: 'Tagestouren', FR: 'Excursions d\'un Jour', IT: 'Tour Giornalieri' },
  tours_multi: { EN: 'Multi-Day Tours', DE: 'Mehrtägige Touren', FR: 'Circuits de Plusieurs Jours', IT: 'Tour di Più Giorni' },
  tours_details: { EN: 'View Details', DE: 'Details Anzeigen', FR: 'Voir les Détails', IT: 'Visualizza Dettagli' },
  tours_coming_soon: { EN: 'Coming Soon', DE: 'Demnächst verfügbar', FR: 'Bientôt disponible', IT: 'Prossimamente' },
  tours_itinerary_soon: { EN: 'Itinerary Coming Soon', DE: 'Reiseverlauf folgt bald', FR: 'Itinéraire disponible bientôt', IT: 'Itinerario in arrivo' },
  
  // Why Choose Us
  why_badge: { EN: 'Why Travel With Us', DE: 'Warum mit uns reisen', FR: 'Pourquoi Voyager Avec Nous', IT: 'Perché Viaggiare Con Noi' },
  why_title: { EN: 'A Premium Travel Experience', DE: 'Ein Premium-Reiseerlebnis', FR: 'Une Expérience de Voyage Premium', IT: 'Un\'Esperienza di Viaggio Premium' },
  why_subtitle: { EN: 'We go the extra mile to guarantee safety, convenience, and genuine Sri Lankan hospitality.', DE: 'Wir tun alles für Ihre Sicherheit, Ihren Komfort und echte sri-lankische Gastfreundschaft.', FR: 'Nous faisons tout pour vous garantir sécurité, confort et hospitalité authentique.', IT: 'Facciamo il massimo per garantire sicurezza, comfort e autentica ospitalità dello Sri Lanka.' },

  // How It Works
  how_title: { EN: 'How It Works', DE: 'Wie es funktioniert', FR: 'Comment Ça Marche', IT: 'Come Funziona' },

  // Reviews
  reviews_title: { EN: 'Loved by Travelers Worldwide', DE: 'Beliebt bei Reisenden weltweit', FR: 'Aimé par les Voyageurs du Monde Entier', IT: 'Amato dai Viaggiatori di Tutto il Mondo' },

  // CTA Footer Banner
  ready_title: { EN: 'Ready to Discover the True Beauty of Sri Lanka?', DE: 'Bereit, die wahre Schönheit Sri Lankas zu entdecken?', FR: 'Prêt à Découvrir la Vraie Beauté du Sri Lanka?', IT: 'Pronti a Scoprire la Vera Bellezza dello Sri Lanka?' },
  ready_subtitle: { EN: 'Let Ceylon Nest Journeys design a tailored holiday experience filled with comfort, wonder, and lasting memories.', DE: 'Lassen Sie uns eine maßgeschneiderte Urlaubsreise voller Komfort, Wunder und bleibender Erinnerungen für Sie planen.', FR: 'Laissez-nous concevoir une expérience de vacances sur mesure, pleine de confort, d\'émerveillement et de souvenirs.', IT: 'Lasciate che Ceylon Nest Journeys crei un\'esperienza di vacanza su misura ricca di comfort, meraviglia e ricordi.' },

  // Booking Form
  form_title: { EN: 'Plan Your Journey', DE: 'Planen Sie Ihre Reise', FR: 'Planifiez Votre Voyage', IT: 'Pianifica il Tuo Viaggio' },
  form_name: { EN: 'Full Name *', DE: 'Vollständiger Name *', FR: 'Nom Complet *', IT: 'Nome Completo *' },
  form_email: { EN: 'Email Address *', DE: 'E-Mail-Adresse *', FR: 'Adresse E-mail *', IT: 'Indirizzo Email *' },
  form_phone: { EN: 'WhatsApp / Phone *', DE: 'WhatsApp / Telefon *', FR: 'WhatsApp / Téléphone *', IT: 'WhatsApp / Telefono *' },
  form_tour: { EN: 'Select Tour Package *', DE: 'Tour-Paket auswählen *', FR: 'Sélectionner le Circuit *', IT: 'Seleziona Pacchetto Tour *' },
  form_date: { EN: 'Preferred Date *', DE: 'Gewünschtes Datum *', FR: 'Date Souhaitée *', IT: 'Data Preferita *' },
  form_travelers: { EN: 'Number of Travelers', DE: 'Anzahl der Reisenden', FR: 'Nombre de Voyageurs', IT: 'Numero di Viaggiatori' },
  form_message: { EN: 'Special Requests / Message', DE: 'Besondere Wünsche / Nachricht', FR: 'Demandes Spéciales / Message', IT: 'Richieste Speciali / Messaggio' },
  form_submit: { EN: 'Submit Enquiry', DE: 'Anfrage Senden', FR: 'Envoyer la Demande', IT: 'Invia Richiesta' },
  form_whatsapp: { EN: 'Book via WhatsApp', DE: 'Per WhatsApp buchen', FR: 'Réserver via WhatsApp', IT: 'Prenota via WhatsApp' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key]['EN'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
