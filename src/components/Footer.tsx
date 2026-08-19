import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand/About Column */}
          <div className="space-y-4">
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
              <a href="#" className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-primary-dark hover:bg-accent hover:text-white p-2.5 rounded-full transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-200 block text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-accent transition-colors duration-200 block text-gray-400">All Tours</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-accent transition-colors duration-200 block text-gray-400">Destinations</Link>
              </li>
              <li>
                <Link to="/custom-tours" className="hover:text-accent transition-colors duration-200 block text-gray-400">Private Tours</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200 block text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-accent transition-colors duration-200 block text-gray-400">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Travel Services & Info */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Services & Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/airport-transfers" className="hover:text-accent transition-colors duration-200 block text-gray-400">Airport Transfers</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors duration-200 block text-gray-400">Travel Services</Link>
              </li>
              <li>
                <Link to="/responsible-tourism" className="hover:text-accent transition-colors duration-200 block text-gray-400">Responsible Tourism</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors duration-200 block text-gray-400">Travel FAQs</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors duration-200 block text-gray-400">Travel Guide / Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">123, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+94763586686" className="hover:text-accent transition-colors duration-200 text-gray-400">+94 76 358 6686</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@ceylonnestjourneys.com" className="hover:text-accent transition-colors duration-200 text-gray-400">info@ceylonnestjourneys.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-dark/60 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Ceylon Nest Journeys. All rights reserved. | Website by{' '}
            <a href="https://www.univerzlk.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors duration-200">
              univerzlk
            </a>{' '}
            (
            <a href="tel:+94778873302" className="hover:text-accent font-semibold transition-colors duration-200">
              +94 77 887 3302
            </a>
            )
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-accent transition-colors duration-200">Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="hover:text-accent transition-colors duration-200">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
