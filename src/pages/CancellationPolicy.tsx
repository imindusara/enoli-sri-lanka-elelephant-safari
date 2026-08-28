import React from 'react';

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-primary border-b border-gray-150 pb-4">
            Cancellation & Refund Policy
          </h1>

          <div className="space-y-4 text-charcoal-light text-xs sm:text-sm leading-relaxed">
            <p>At Ceylon Nest Journeys, we understand that travel plans can change unexpectedly. Below is our standard cancellation and refund structure.</p>

            <h2 className="font-serif font-bold text-lg text-primary mt-6">1. Cancellation Timelines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>30 days or more before arrival:</strong> Full refund of deposit, minus bank transfer/handling fees.</li>
              <li><strong>15 to 29 days before arrival:</strong> 50% refund of the deposit.</li>
              <li><strong>Less than 14 days before arrival:</strong> Deposit is non-refundable.</li>
            </ul>

            <h2 className="font-serif font-bold text-lg text-primary mt-6">2. Hotel Bookings & Train Tickets</h2>
            <p>Separate policies may apply for high-luxury hotel bookings and train ticket reservations, which are subject to individual operator terms and are often completely non-refundable once issued.</p>

            <h2 className="font-serif font-bold text-lg text-primary mt-6">3. Weather Delays & Force Majeure</h2>
            <p>If a tour is interrupted or cancelled due to extreme weather, safety alerts, or force majeure events, Ceylon Nest Journeys will offer alternative dates or equivalent credit for future travel tours.</p>

            <h2 className="font-serif font-bold text-lg text-primary mt-6">4. Submission of Claims</h2>
            <p>All cancellation requests must be sent in writing via email to <a href="mailto:ceylonnestjourneys@gmail.com" className="text-accent underline font-semibold">ceylonnestjourneys@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
