import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import type { Language } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'tours' | 'destinations' | 'more' | 'language' | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }
    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [isOpen]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleLanguage = () => {
    setActiveDropdown(activeDropdown === 'language' ? null : 'language');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setActiveDropdown(null);
  };

  const toggleMobileExpand = (key: string) => {
    setMobileExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const languagesList: Language[] = ['EN', 'DE', 'FR', 'IT'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/20 flex items-center h-16 lg:h-24 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md lg:h-20' 
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          
          {/* LEFT: Logo & Brand Area */}
          <div className="w-[28%] min-w-[200px] shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.jpeg" 
                alt="Ceylon Nest Journeys Logo" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-serif text-xs lg:text-sm xl:text-base font-black tracking-wider text-primary leading-tight uppercase transition-colors group-hover:text-accent">
                CEYLON NEST
              </span>
            </Link>
          </div>

          {/* CENTER: Main Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 text-[13px] xl:text-[14px] font-semibold tracking-wide text-charcoal">
            
            {/* HOME */}
            <Link
              to="/"
              className={`relative py-2 hover:text-accent transition-colors ${
                isActive('/') && location.pathname === '/' ? 'text-primary font-bold' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_home')}</span>
              {isActive('/') && location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </Link>

            {/* TOURS Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('tours')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors cursor-pointer focus:outline-none ${
                  isActive('/tours') ? 'text-primary font-bold' : 'text-charcoal'
                }`}
              >
                <span>{t('nav_tours')}</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </button>
              
              {activeDropdown === 'tours' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[95%] pt-3 w-52 z-50">
                  <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 py-3 border border-gray-100 overflow-hidden animate-fade-in">
                    <Link to="/tours" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      All Tours
                    </Link>
                    <Link to="/tours?filter=day" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Day Tours
                    </Link>
                    <Link to="/tours?filter=multi-day" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Multi-Day Tours
                    </Link>
                  </div>
                </div>
              )}
              {isActive('/tours') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </div>

            {/* DESTINATIONS Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('destinations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors cursor-pointer focus:outline-none ${
                  isActive('/destinations') ? 'text-primary font-bold' : 'text-charcoal'
                }`}
              >
                <span>{t('nav_destinations')}</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </button>
              
              {activeDropdown === 'destinations' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[95%] pt-3 w-56 z-50">
                  <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 py-3 border border-gray-100 overflow-hidden animate-fade-in">
                    <Link to="/destinations" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all border-b border-gray-50 mb-1">
                      All Destinations
                    </Link>
                    <Link to="/destinations/sigiriya" className="block px-5 py-2 text-xs font-semibold text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Sigiriya Rock
                    </Link>
                    <Link to="/destinations/ella" className="block px-5 py-2 text-xs font-semibold text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Ella Valleys
                    </Link>
                    <Link to="/destinations/galle" className="block px-5 py-2 text-xs font-semibold text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Galle Dutch Fort
                    </Link>
                    <Link to="/destinations/kandy" className="block px-5 py-2 text-xs font-semibold text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Kandy Sacred City
                    </Link>
                    <Link to="/destinations/yala" className="block px-5 py-2 text-xs font-semibold text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Yala Wildlife
                    </Link>
                  </div>
                </div>
              )}
              {isActive('/destinations') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </div>

            {/* CUSTOM TOURS / PRIVATE TOURS */}
            <Link
              to="/custom-tours"
              className={`relative py-2 hover:text-accent transition-colors whitespace-nowrap ${
                isActive('/custom-tours') ? 'text-primary font-bold' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_custom_tours')}</span>
              {isActive('/custom-tours') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className={`relative py-2 hover:text-accent transition-colors ${
                isActive('/about') ? 'text-primary font-bold' : 'text-charcoal'
              }`}
            >
              <span>{t('nav_about')}</span>
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </Link>

            {/* MORE Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors cursor-pointer focus:outline-none ${
                  isActive('/reviews') || isActive('/gallery') || isActive('/blog') || isActive('/contact') ? 'text-primary font-bold' : 'text-charcoal'
                }`}
              >
                <span>More</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </button>
              
              {activeDropdown === 'more' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[95%] pt-3 w-52 z-50">
                  <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 py-3 border border-gray-100 overflow-hidden animate-fade-in">
                    <Link to="/reviews" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Reviews
                    </Link>
                    <Link to="/gallery" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Gallery
                    </Link>
                    <Link to="/blog" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      Travel Guide
                    </Link>
                    <Link to="/faq" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all">
                      FAQs
                    </Link>
                    <Link to="/contact" className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-cream hover:text-primary transition-all border-t border-gray-50 mt-1 pt-3">
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
              {(isActive('/reviews') || isActive('/gallery') || isActive('/blog') || isActive('/faq') || isActive('/contact')) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </div>

          </div>

          {/* RIGHT: Language Selector & BOOK NOW Button */}
          <div className="hidden lg:flex items-center justify-end space-x-6 w-[28%] shrink-0">
            {/* Language Selector */}
            <div 
              className="relative"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-charcoal hover:text-accent transition-colors cursor-pointer focus:outline-none"
              >
                <Globe className="h-4.5 w-4.5 text-charcoal-light" />
                <span>{language}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              
              {activeDropdown === 'language' && (
                <div className="absolute right-0 top-[110%] pt-2 w-28 z-50">
                  <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-1.5 border border-gray-100 overflow-hidden animate-fade-in">
                    {languagesList.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`block w-full text-left px-4 py-2 text-xs font-bold uppercase transition-colors hover:bg-cream cursor-pointer ${
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

            {/* BOOK NOW Button */}
            <Link
              to="/book-now"
              className="bg-accent hover:bg-accent-light text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-103 shadow-xs hover:shadow-md animate-pulse hover:animate-none whitespace-nowrap border border-accent-light/10"
            >
              {t('nav_book_now')}
            </Link>
          </div>

          {/* Mobile Actions (Mobile Hamburger & Quick Actions) */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link
              to="/book-now"
              className="bg-accent text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all shadow-xs"
            >
              Book Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-accent p-2 focus:outline-none cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE SLIDE-OUT DRAWER */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-150 shadow-2xl py-6 px-5 space-y-3 overflow-y-auto h-[calc(100vh-64px)] z-50">
          
          {/* HOME */}
          <Link
            to="/"
            className={`block py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-cream min-h-[48px] ${
              isActive('/') && location.pathname === '/' ? 'text-accent bg-cream font-black' : 'text-charcoal'
            }`}
          >
            {t('nav_home')}
          </Link>

          {/* TOURS */}
          <div className="space-y-1">
            <button
              onClick={() => toggleMobileExpand('tours')}
              className="w-full flex justify-between items-center py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase text-charcoal hover:bg-cream cursor-pointer min-h-[48px]"
            >
              <span>{t('nav_tours')}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded.tours ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.tours && (
              <div className="pl-6 space-y-1 border-l-2 border-accent/20 ml-4">
                <Link to="/tours" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  All Tours
                </Link>
                <Link to="/tours?filter=day" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Day Tours
                </Link>
                <Link to="/tours?filter=multi-day" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Multi-Day Tours
                </Link>
              </div>
            )}
          </div>

          {/* DESTINATIONS */}
          <div className="space-y-1">
            <button
              onClick={() => toggleMobileExpand('destinations')}
              className="w-full flex justify-between items-center py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase text-charcoal hover:bg-cream cursor-pointer min-h-[48px]"
            >
              <span>{t('nav_destinations')}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded.destinations ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.destinations && (
              <div className="pl-6 space-y-1 border-l-2 border-accent/20 ml-4">
                <Link to="/destinations" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  All Destinations
                </Link>
                <Link to="/destinations/sigiriya" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Sigiriya
                </Link>
                <Link to="/destinations/ella" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Ella
                </Link>
                <Link to="/destinations/galle" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Galle
                </Link>
                <Link to="/destinations/kandy" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Kandy
                </Link>
                <Link to="/destinations/yala" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Yala
                </Link>
              </div>
            )}
          </div>

          {/* CUSTOM TOURS / PRIVATE TOURS */}
          <Link
            to="/custom-tours"
            className={`block py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-cream min-h-[48px] ${
              isActive('/custom-tours') ? 'text-accent bg-cream font-black' : 'text-charcoal'
            }`}
          >
            {t('nav_custom_tours')}
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`block py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-cream min-h-[48px] ${
              isActive('/about') ? 'text-accent bg-cream font-black' : 'text-charcoal'
            }`}
          >
            {t('nav_about')}
          </Link>

          {/* MORE (Mobile Drawer) */}
          <div className="space-y-1">
            <button
              onClick={() => toggleMobileExpand('more')}
              className="w-full flex justify-between items-center py-3.5 px-4 rounded-xl text-sm font-bold tracking-widest uppercase text-charcoal hover:bg-cream cursor-pointer min-h-[48px]"
            >
              <span>More Options</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded.more ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.more && (
              <div className="pl-6 space-y-1 border-l-2 border-accent/20 ml-4">
                <Link to="/reviews" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Reviews
                </Link>
                <Link to="/gallery" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Gallery
                </Link>
                <Link to="/blog" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Travel Guide
                </Link>
                <Link to="/faq" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  FAQs
                </Link>
                <Link to="/contact" className="block py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-primary min-h-[44px] flex items-center">
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Language selection on Mobile drawer */}
          <div className="space-y-2 py-3 px-4 border-t border-gray-150">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Globe className="h-4.5 w-4.5" /> Language Selection
            </div>
            <div className="flex gap-2 pt-2">
              {languagesList.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[40px] ${
                    language === lang 
                      ? 'bg-primary text-white' 
                      : 'bg-cream text-charcoal border border-gray-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Book Now link */}
          <div className="pt-4 border-t border-gray-150">
            <Link
              to="/book-now"
              className="block w-full text-center bg-accent hover:bg-accent-light text-white py-4 rounded-xl font-bold tracking-widest uppercase transition-colors min-h-[48px] flex items-center justify-center"
            >
              {t('nav_book_now')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
