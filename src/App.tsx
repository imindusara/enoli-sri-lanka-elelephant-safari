import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Tours } from './pages/Tours';
import { TourDetail } from './pages/TourDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Reviews } from './pages/Reviews';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Destinations } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { CustomTours } from './pages/CustomTours';
import { BookTour } from './pages/BookTour';
import { AirportTransfers } from './pages/AirportTransfers';
import { TravelServices } from './pages/TravelServices';
import { FAQ } from './pages/FAQ';
import { ResponsibleTourism } from './pages/ResponsibleTourism';
import { TermsConditions } from './pages/TermsConditions';
import { CancellationPolicy } from './pages/CancellationPolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Preloader } from './components/Preloader';
import { useScrollReveal } from './hooks/useScrollReveal';
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll reveal application wrapper
const AppContent: React.FC = () => {
  useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/custom-tours" element={<CustomTours />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/airport-transfers" element={<AirportTransfers />} />
          <Route path="/services" element={<TravelServices />} />
          <Route path="/book-now" element={<BookTour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/responsible-tourism" element={<ResponsibleTourism />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
