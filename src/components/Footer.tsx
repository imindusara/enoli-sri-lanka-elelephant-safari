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
              <img src="/logo.png" alt="Ceylon Nest Journeys Logo" className="h-10 w-10 object-contain rounded-lg" />
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
                <Link to="/" className="hover:text-accent transition-colors duration-200 block">Home</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-accent transition-colors duration-200 block">All Tours</Link>
              </li>
              <li>
                <Link to="/tours?filter=day" className="hover:text-accent transition-colors duration-200 block">Day Tours</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200 block">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-200 block">Contact & Booking</Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations / Categories */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Top Attractions</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Nine Arches Bridge, Ella</li>
              <li>Sigiriya Rock Fortress</li>
              <li>Galle Historic Dutch Fort</li>
              <li>Udawalawe Elephant Safari</li>
              <li>Madu River Mangroves</li>
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
                <a href="tel:+94770000000" className="hover:text-accent transition-colors duration-200 text-gray-400">+94 77 000 0000</a>
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
          <p>© {new Date().getFullYear()} Ceylon Nest Journeys. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
