import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';

export const CustomTours: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '7-10',
    travelers: '2',
    serviceType: 'full-package' as 'full-package' | 'driver-only',
    destinations: [] as string[],
    interests: [] as string[],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinationOptions = [
    'Sigiriya & Cultural Triangle',
    'Ella & Highlands',
    'Galle & Southern Coast',
    'Kandy Sacred City',
    'Yala National Park Safari',
    'Nuwara Eliya (Little England)',
    'Mirissa Beach & Whale Watching',
    'Trincomalee & East Coast beaches',
  ];

  const interestOptions = [
    'Wildlife & Safaris',
    'Cultural Heritage & Temples',
    'Hiking & Adventure',
    'Beach & Surf Relaxation',
    'Local Culinary Experience',
    'Ayurveda & Wellness',
    'Photography & Scenic Views',
  ];

  const handleDestinationToggle = (dest: string) => {
    setFormData((prev) => {
      const exists = prev.destinations.includes(dest);
      return {
        ...prev,
        destinations: exists
          ? prev.destinations.filter((d) => d !== dest)
          : [...prev.destinations, dest],
      };
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = `Custom Tour Design Request - ${formData.name}`;
    const serviceLabel = formData.serviceType === 'driver-only' 
      ? 'Driver & Vehicle Hire Only (No Hotels)' 
      : 'Full Tour Package (includes 4★ Hotels)';

    const whatsappMsg = `CEYLON NEST JOURNEYS - CUSTOM TOUR REQUEST\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nDuration: ${formData.duration} Days\nTravelers: ${formData.travelers}\nService Type: ${serviceLabel}\n\nDestinations:\n${formData.destinations.map(d => `- ${d}`).join('\n') || 'None'}\n\nInterests:\n${formData.interests.map(i => `- ${i}`).join('\n') || 'None'}\n\nNotes:\n${formData.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/94771112040?text=${encodeURIComponent(whatsappMsg)}`;

    try {
      await fetch("https://formsubmit.co/ajax/ceylonnestjourneys@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: subject,
          Name: formData.name,
          Email: formData.email,
          "Phone / WhatsApp": formData.phone,
          "Trip Duration": `${formData.duration} Days`,
          "Travelers Count": formData.travelers,
          "Service Type Selected": serviceLabel,
          "Preferred Hotspots": formData.destinations.join(', ') || 'None',
          "Tour Focus & Interests": formData.interests.join(', ') || 'None',
          "Special Requests": formData.notes || 'None'
        })
      });
    } catch (error) {
      console.error("Silent background email submission failed:", error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp pre-filled chat in a new tab
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="inline-flex items-center gap-1 bg-accent/20 border border-accent/40 text-accent-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Tailor-made Travel
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">Private Tours</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let our experienced designers craft your perfect, personalized Sri Lankan dream vacation.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Column */}
        <div className="space-y-8 lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-2xl text-primary leading-tight">
              Why Private Tours?
            </h3>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Every traveler is unique. With our Private Trip Designer, we adjust everything from luxury levels to activity speeds to match your interests.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-2 items-start text-xs text-charcoal-light leading-relaxed">
                <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                <div>
                  <span className="block font-bold text-primary">Private Chauffeur-Guide</span>
                  Your own private vehicle with dedicated guiding hospitality.
                </div>
              </li>
              <li className="flex gap-2 items-start text-xs text-charcoal-light leading-relaxed">
                <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                <div>
                  <span className="block font-bold text-primary">Flexible Itinerary</span>
                  Spend as much time as you like at stops; change plans on the fly.
                </div>
              </li>
              <li className="flex gap-2 items-start text-xs text-charcoal-light leading-relaxed">
                <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                <div>
                  <span className="block font-bold text-primary">Curated 4★ Hotels</span>
                  Hand-picked stays, specializing in premium 4★ hotels.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-500 border border-green-200">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-primary">Proposal Request Received!</h3>
                <p className="text-charcoal-light text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your custom itinerary details. Our private tour consultant will design a bespoke draft proposal and email it to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  Create Another Plan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif font-bold text-2xl text-primary pb-3 border-b border-gray-100">
                  Trip Designer Form
                </h3>

                {/* Basic Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent min-h-[48px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent min-h-[48px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Trip Duration *</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent min-h-[48px]"
                    >
                      <option value="1-3">1 to 3 Days</option>
                      <option value="4-6">4 to 6 Days</option>
                      <option value="7-10">7 to 10 Days</option>
                      <option value="11-14">11 to 14 Days</option>
                      <option value="15+">15+ Days</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Travelers Count *</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Destinations Select */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Preferred Hotspots to Include</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {destinationOptions.map((dest) => {
                      const selected = formData.destinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => handleDestinationToggle(dest)}
                          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            selected
                              ? 'bg-accent/10 border-accent text-accent'
                              : 'bg-cream border-gray-150 text-charcoal hover:border-gray-300'
                          }`}
                        >
                          <span>{dest}</span>
                          {selected && <CheckCircle2 className="h-4 w-4" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interests Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Tour Focus & Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((interest) => {
                      const selected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                            selected
                              ? 'bg-primary text-white border-primary shadow-sm'
                              : 'bg-cream border-gray-200 text-charcoal-light hover:border-gray-300'
                          }`}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Select Service Type *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: 'full-package' })}
                      className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[120px] ${
                        formData.serviceType === 'full-package'
                          ? 'border-accent bg-primary/5 ring-2 ring-accent/10'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-sm text-primary">Full Tour Package</span>
                        <span className="text-[11px] text-charcoal-light block mt-2 leading-relaxed">
                          Includes premium 4★ hotel accommodation, daily breakfast & dinner, private vehicle, and guiding driver.
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: 'driver-only' })}
                      className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer min-h-[120px] ${
                        formData.serviceType === 'driver-only'
                          ? 'border-accent bg-primary/5 ring-2 ring-accent/10'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-sm text-primary">Driver & Vehicle Only</span>
                        <span className="text-[11px] text-charcoal-light block mt-2 leading-relaxed">
                          Includes private vehicle, fuel, parking, highway tolls, and English-speaking driver. Excludes hotels (you book your own accommodation).
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Extra Notes */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Special Requests or Custom Requests</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your flight timings, dietary options, accessibility requirements, or special milestones."
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Custom Plan Request'}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
