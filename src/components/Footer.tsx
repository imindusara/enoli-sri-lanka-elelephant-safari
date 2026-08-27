import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-primary text-gray-300 pt-10 pb-8 border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand/About Column */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.jpeg" alt="Ceylon Nest Journeys Logo" className="h-10 w-10 object-contain rounded-lg" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ceylon Nest<span className="text-accent font-sans font-light"> Journeys</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting exceptional journeys with genuine hospitality, personalized service, and unforgettable memories in Sri Lanka.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/share/1Mb9JS24sS/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300" 
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/ceylonnestjourneys?utm_source=qr&igsi=d2ExNXpqNXJ0bnlz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300" 
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@ceylohbyun2?_r=1&_t=ZS-996EzvCnX4j" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center" 
                aria-label="TikTok"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (Accordion on Mobile) */}
          <div className="border-b border-white/5 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('quick-links')}
              className="w-full flex justify-between items-center md:block text-left text-white font-serif font-semibold text-lg mb-2 md:mb-4 min-h-[48px] md:min-h-0 cursor-pointer"
            >
              <span>Quick Links</span>
              <span className="md:hidden">
                {expandedSection === 'quick-links' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </span>
            </button>
            <ul className={`space-y-3 text-sm md:block ${expandedSection === 'quick-links' ? 'block' : 'hidden'}`}>
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Home</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">All Tours</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Destinations</Link>
              </li>
              <li>
                <Link to="/custom-tours" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Private Tours</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">About Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Travel Services & Info (Accordion on Mobile) */}
          <div className="border-b border-white/5 md:border-none pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('services')}
              className="w-full flex justify-between items-center md:block text-left text-white font-serif font-semibold text-lg mb-2 md:mb-4 min-h-[48px] md:min-h-0 cursor-pointer"
            >
              <span>Services & Info</span>
              <span className="md:hidden">
                {expandedSection === 'services' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </span>
            </button>
            <ul className={`space-y-3 text-sm text-gray-400 md:block ${expandedSection === 'services' ? 'block' : 'hidden'}`}>
              <li>
                <Link to="/airport-transfers" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Airport Transfers</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Travel Services</Link>
              </li>
              <li>
                <Link to="/responsible-tourism" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Responsible Tourism</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Travel FAQs</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors duration-200 block text-gray-400 py-2 md:py-0">Travel Guide / Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Accordion on Mobile) */}
          <div className="pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('contact')}
              className="w-full flex justify-between items-center md:block text-left text-white font-serif font-semibold text-lg mb-2 md:mb-4 min-h-[48px] md:min-h-0 cursor-pointer"
            >
              <span>Contact Info</span>
              <span className="md:hidden">
                {expandedSection === 'contact' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </span>
            </button>
            <ul className={`space-y-4 text-sm md:block ${expandedSection === 'contact' ? 'block' : 'hidden'}`}>
              <li className="flex items-start space-x-3 py-2 md:py-0">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">No 124, kanda kurudu watta, dediyawala, waskaduwa, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3 py-2 md:py-0">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+94771112040" className="hover:text-accent transition-colors duration-200 text-gray-400">+94 77 111 2040</a>
              </li>
              <li className="flex items-center space-x-3 py-2 md:py-0">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:ceylonnestjourneys@gmail.com" className="hover:text-accent transition-colors duration-200 text-gray-400">ceylonnestjourneys@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Ceylon Nest Journeys. All rights reserved.</p>
            <p className="text-xs text-gray-450 mt-1">
              Developed by <a href="https://www.univerzlk.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-400 hover:text-accent transition-colors">univerz</a> (<a href="https://wa.me/94778873302?text=Hi%20Univerz%20Im%20Found%20You%20your%20web%20site%20i%20want%20create%20a%20web%20site%20can%20you%20contact%20me" target="_blank" rel="noopener noreferrer" className="hover:text-accent text-accent-light transition-colors font-semibold">+94 77 887 3302</a>)
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="hover:text-accent transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
