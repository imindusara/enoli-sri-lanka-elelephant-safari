import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Compass, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import type { Language } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsToursDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsGalleryDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const languagesList: Language[] = ['EN', 'DE', 'FR', 'IT'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FDFBF7] shadow-sm border-b border-gray-100 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="bg-[#1E3A2F]/10 p-2 rounded-lg">
              <Compass className="h-6 w-6 text-[#1E3A2F]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1E3A2F] leading-tight">
                CEYLON NEST
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-accent font-semibold leading-none">
                {t('nav_services').split(' ')[0]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-[#2D3A34]'
              }`}
            >
              {t('nav_home')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className="flex items-center space-x-1 text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent text-[#2D3A34]"
              >
                <span>{t('nav_services')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isServicesDropdownOpen && (
                <div
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in"
                >
                  <Link to="/tours" className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors">
                    Tour Guide Service
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors">
                    Hotel Booking Assist
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors">
                    Airport Transfers
                  </Link>
                </div>
              )}
            </div>

            {/* Tours (Packages) Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsToursDropdownOpen(!isToursDropdownOpen)}
                onMouseEnter={() => setIsToursDropdownOpen(true)}
                className={`flex items-center space-x-1 text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent ${
                  isActive('/tours') ? 'text-accent' : 'text-[#2D3A34]'
                }`}
              >
                <span>{t('nav_tours')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isToursDropdownOpen && (
                <div
                  onMouseLeave={() => setIsToursDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in"
                >
                  <Link to="/tours?filter=day" className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors">
                    {t('tours_day')}
                  </Link>
                  <Link to="/tours?filter=multi-day" className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors">
                    {t('tours_multi')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : 'text-[#2D3A34]'
              }`}
            >
              {t('nav_about')}
            </Link>

            {/* Gallery Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
                onMouseEnter={() => setIsGalleryDropdownOpen(true)}
                className="flex items-center space-x-1 text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent text-[#2D3A34]"
              >
                <span>{t('nav_gallery')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isGalleryDropdownOpen && (
                <div
                  onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in"
                >
                  <span className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-gray-400">
                    Photos (Coming Soon)
                  </span>
                  <span className="block px-4 py-2 text-xs font-bold tracking-wide uppercase text-gray-400">
                    Videos (Coming Soon)
                  </span>
                </div>
              )}
            </div>

            <Link
              to="/"
              className="text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent text-[#2D3A34]"
            >
              {t('nav_reviews')}
            </Link>

            <Link
              to="/contact"
              className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-[#2D3A34]'
              }`}
            >
              {t('nav_contact')}
            </Link>
          </div>

          {/* Right Side Options (Language + Book Now) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1.5 text-xs font-bold tracking-widest uppercase text-[#2D3A34] hover:text-accent focus:outline-none"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-1 z-50 animate-fade-in">
                  {languagesList.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-2 text-xs font-bold uppercase transition-colors hover:bg-cream ${
                        language === lang ? 'text-accent bg-cream/50' : 'text-charcoal'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <Link
              to="/contact?book=true"
              className="bg-[#E4A834] hover:bg-[#D39723] text-[#1E3A2F] px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              {t('nav_book_now')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language select on Mobile header */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 text-xs font-bold uppercase text-[#2D3A34]"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-lg bg-white shadow-xl ring-1 ring-black/5 py-1 z-50">
                  {languagesList.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left px-4 py-2 text-xs font-bold uppercase text-charcoal hover:bg-cream"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D3A34] hover:text-accent p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-t border-gray-150 shadow-2xl py-4 px-4 space-y-3 absolute top-full left-0 right-0 animate-fade-in">
          <Link
            to="/"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/') ? 'text-accent bg-cream' : 'text-[#2D3A34]'
            }`}
          >
            {t('nav_home')}
          </Link>

          <div className="space-y-1">
            <div className="py-2 px-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t('nav_services')}
            </div>
            <Link to="/tours" className="block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase text-gray-500 hover:bg-cream">
              Tour Guides
            </Link>
            <Link to="/contact" className="block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase text-gray-500 hover:bg-cream">
              Hotel Bookings
            </Link>
          </div>

          <div className="space-y-1">
            <div className="py-2 px-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t('nav_tours')}
            </div>
            <Link
              to="/tours?filter=day"
              className="block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase text-gray-500 hover:bg-cream"
            >
              {t('tours_day')}
            </Link>
            <Link
              to="/tours?filter=multi-day"
              className="block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase text-gray-500 hover:bg-cream"
            >
              {t('tours_multi')}
            </Link>
          </div>

          <Link
            to="/about"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/about') ? 'text-accent bg-cream' : 'text-[#2D3A34]'
            }`}
          >
            {t('nav_about')}
          </Link>

          <Link
            to="/contact"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/contact') ? 'text-accent bg-cream' : 'text-[#2D3A34]'
            }`}
          >
            {t('nav_contact')}
          </Link>

          <div className="pt-2">
            <Link
              to="/contact?book=true"
              className="block w-full text-center bg-[#E4A834] hover:bg-[#D39723] text-[#1E3A2F] py-3 rounded-xl font-bold tracking-widest uppercase transition-colors"
            >
              {t('nav_book_now')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
