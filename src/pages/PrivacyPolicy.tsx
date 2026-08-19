import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-primary border-b border-gray-150 pb-4">
            Privacy Policy
          </h1>

          <div className="space-y-4 text-charcoal-light text-xs sm:text-sm leading-relaxed">
            <p>This privacy notice describes how Ceylon Nest Journeys collects, protects, and handles details provided when using this website.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">1. Information We Collect</h3>
            <p>When submitting a booking or contact form, we collect personal information such as your name, email address, phone number (WhatsApp), travel dates, and travel choices. This data is only used to manage your booking.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">2. Data Security</h3>
            <p>We are committed to ensuring your information is secure. We use modern hosting standards and encryption to prevent unauthorized access or disclosure of your personal details.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">3. Third Party Sharing</h3>
            <p>We never sell, rent, or lease your personal information to third parties. We only share required passenger details with hotel partners, national park rangers, and transfer providers when reserving your tour itinerary items.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">4. Cookies</h3>
            <p>Our website utilizes minor cookies to improve your user experience and track anonymous analytical web traffic. You can choose to disable cookies in your browser settings if desired.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
