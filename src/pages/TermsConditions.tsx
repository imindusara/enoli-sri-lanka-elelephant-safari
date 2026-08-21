import React from 'react';

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-primary border-b border-gray-150 pb-4">
            Terms & Conditions
          </h1>

          <div className="space-y-4 text-charcoal-light text-xs sm:text-sm leading-relaxed">
            <p>Welcome to Ceylon Nest Journeys. Please read these Terms & Conditions carefully before booking any tour services.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">1. Agreement</h3>
            <p>By making a reservation or using any travel services with Ceylon Nest Journeys, you agree to be bound by these terms. This contract constitutes the entire agreement between the client and Ceylon Nest Journeys.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">2. Bookings & Confirmation</h3>
            <p>All booking enquiries submitted via the website are subject to availability. A booking is only deemed confirmed once a written confirmation is sent by us and deposit requirements (if applicable) have been cleared.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">3. Price Adjustments</h3>
            <p>Prices published on the website are guideline estimates. Final prices are determined based on your custom itinerary details, hotel star selections, and seasonality. Once a booking price is confirmed, it is guaranteed not to change.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">4. Client Liability</h3>
            <p>It is the responsibility of the client to ensure they have valid travel insurance, visas, passports, and health vaccinations required to enter Sri Lanka. Ceylon Nest Journeys is not liable for travel delays due to missing documents.</p>

            <h3 className="font-serif font-bold text-lg text-primary mt-6">5. Contact Information</h3>
            <p>If you have any questions regarding our terms, please email us at <a href="mailto:ceylonnestjourneys@gmail.com" className="text-accent underline font-semibold">ceylonnestjourneys@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
