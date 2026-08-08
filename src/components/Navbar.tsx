import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
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

  const closeAllDropdowns = () => {
    setIsServicesDropdownOpen(false);
    setIsToursDropdownOpen(false);
    setIsGalleryDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleServices = () => {
    const nextState = !isServicesDropdownOpen;
    closeAllDropdowns();
    setIsServicesDropdownOpen(nextState);
  };

  const openServices = () => {
    closeAllDropdowns();
    setIsServicesDropdownOpen(true);
  };

  const toggleTours = () => {
    const nextState = !isToursDropdownOpen;
    closeAllDropdowns();
    setIsToursDropdownOpen(nextState);
  };

  const openTours = () => {
    closeAllDropdowns();
    setIsToursDropdownOpen(true);
  };

  const toggleGallery = () => {
    const nextState = !isGalleryDropdownOpen;
    closeAllDropdowns();
    setIsGalleryDropdownOpen(nextState);
  };

  const openGallery = () => {
    closeAllDropdowns();
    setIsGalleryDropdownOpen(true);
  };

  const toggleLanguage = () => {
    const nextState = !isLanguageDropdownOpen;
    closeAllDropdowns();
    setIsLanguageDropdownOpen(nextState);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const languagesList: Language[] = ['EN', 'DE', 'FR', 'IT'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/65 backdrop-blur-md shadow-sm border-b border-white/20 py-4.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img src="/logo.png" alt="Ceylon Nest Journeys Logo" className="h-10 w-10 object-contain rounded-lg" />
            <div>
              <span className="font-serif text-sm lg:text-base xl:text-lg font-bold tracking-tight text-primary leading-tight whitespace-nowrap">
                CEYLON NEST JOURNEYS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-5">
            <Link
              to="/"
              className={`relative text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent focus:outline-none focus:ring-0 whitespace-nowrap ${
                isActive('/') ? 'text-primary' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_home')}</span>
              {isActive('/') && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={closeAllDropdowns}>
              <button
                onClick={toggleServices}
                onMouseEnter={openServices}
                className="flex items-center space-x-0.5 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent text-charcoal cursor-pointer focus:outline-none focus:ring-0 whitespace-nowrap"
              >
                <span>{t('nav_services')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 pt-2 w-48 z-50">
                  <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in">
                    <Link to="/tours" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      Tour Guide Service
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      Hotel Booking Assist
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      Airport Transfers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tours (Packages) Dropdown */}
            <div className="relative" onMouseLeave={closeAllDropdowns}>
              <button
                onClick={toggleTours}
                onMouseEnter={openTours}
                className={`relative flex items-center space-x-0.5 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent cursor-pointer focus:outline-none focus:ring-0 whitespace-nowrap ${
                  isActive('/tours') ? 'text-primary' : 'text-charcoal'
                }`}
              >
                <span>{t('nav_tours')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
                {isActive('/tours') && (
                  <span className="absolute -bottom-2 left-[40%] -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
                )}
              </button>
              {isToursDropdownOpen && (
                <div className="absolute left-0 pt-2 w-48 z-50">
                  <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in">
                    <Link to="/tours?filter=day" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      {t('tours_day')}
                    </Link>
                    <Link to="/tours?filter=multi-day" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      {t('tours_multi')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`relative text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent focus:outline-none focus:ring-0 whitespace-nowrap ${
                isActive('/about') ? 'text-primary' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_about')}</span>
              {isActive('/about') && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
              )}
            </Link>

            {/* Gallery Dropdown */}
            <div className="relative" onMouseLeave={closeAllDropdowns}>
              <button
                onClick={toggleGallery}
                onMouseEnter={openGallery}
                className={`relative flex items-center space-x-0.5 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent cursor-pointer focus:outline-none focus:ring-0 whitespace-nowrap ${
                  isActive('/gallery') || isActive('/blog') ? 'text-primary' : 'text-charcoal'
                }`}
              >
                <span>{t('nav_gallery')}</span>
                <ChevronDown className="h-3.5 w-3.5" />
                {(isActive('/gallery') || isActive('/blog')) && (
                  <span className="absolute -bottom-2 left-[40%] -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
                )}
              </button>
              {isGalleryDropdownOpen && (
                <div className="absolute left-0 pt-2 w-48 z-50">
                  <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2 animate-fade-in">
                    <Link to="/gallery" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      Photo Gallery
                    </Link>
                    <Link to="/blog" className="block px-4 py-2 text-[11px] xl:text-xs font-bold tracking-wide uppercase text-charcoal hover:bg-cream hover:text-primary transition-colors focus:outline-none">
                      Travel Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/reviews"
              className={`relative text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent focus:outline-none focus:ring-0 whitespace-nowrap ${
                isActive('/reviews') ? 'text-primary' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_reviews')}</span>
              {isActive('/reviews') && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-accent focus:outline-none focus:ring-0 whitespace-nowrap ${
                isActive('/contact') ? 'text-primary' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_contact')}</span>
              {isActive('/contact') && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-fade-in" />
              )}
            </Link>
          </div>

          {/* Right Side Options (Language + Book Now) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {/* Language Selector */}
            <div className="relative" onMouseLeave={closeAllDropdowns}>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase text-charcoal hover:text-accent focus:outline-none cursor-pointer whitespace-nowrap"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 pt-2 w-28 z-50">
                  <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-1 animate-fade-in">
                    {languagesList.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`block w-full text-left px-4 py-2 text-[11px] xl:text-xs font-bold uppercase transition-colors hover:bg-cream cursor-pointer ${
                          language === lang ? 'text-accent bg-cream/50' : 'text-charcoal'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <Link
              to="/contact?book=true"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 xl:px-5 xl:py-2.5 rounded-full text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 focus:outline-none whitespace-nowrap"
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
                className="flex items-center space-x-1 text-xs font-bold uppercase text-charcoal cursor-pointer"
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
                      className="block w-full text-left px-4 py-2 text-xs font-bold uppercase text-charcoal hover:bg-cream cursor-pointer"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-accent p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-150 shadow-2xl py-4 px-4 space-y-3 absolute top-full left-0 right-0 animate-fade-in">
          <Link
            to="/"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/') ? 'text-accent bg-cream' : 'text-charcoal'
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
              isActive('/about') ? 'text-accent bg-cream' : 'text-charcoal'
            }`}
          >
            {t('nav_about')}
          </Link>
          
          <div className="space-y-1">
            <div className="py-2 px-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t('nav_gallery')}
            </div>
            <Link
              to="/gallery"
              className={`block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase hover:bg-cream ${
                isActive('/gallery') ? 'text-accent bg-cream' : 'text-gray-500'
              }`}
            >
              Photo Gallery
            </Link>
            <Link
              to="/blog"
              className={`block py-2 pl-6 pr-3 rounded-lg text-xs font-bold uppercase hover:bg-cream ${
                isActive('/blog') ? 'text-accent bg-cream' : 'text-gray-500'
              }`}
            >
              Travel Blog
            </Link>
          </div>
          
          <Link
            to="/reviews"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/reviews') ? 'text-accent bg-cream' : 'text-charcoal'
            }`}
          >
            {t('nav_reviews')}
          </Link>

          <Link
            to="/contact"
            className={`block py-2 px-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-cream ${
              isActive('/contact') ? 'text-accent bg-cream' : 'text-charcoal'
            }`}
          >
            {t('nav_contact')}
          </Link>

          <div className="pt-2">
            <Link
              to="/contact?book=true"
              className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold tracking-widest uppercase transition-colors focus:outline-none"
            >
              {t('nav_book_now')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
