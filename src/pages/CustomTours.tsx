import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';

export const CustomTours: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '7-10',
    travelers: '2',
    budget: 'mid-range',
    destinations: [] as string[],
    interests: [] as string[],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Custom Tour Design Request - ${formData.name}`;
    const body = `CEYLON NEST JOURNEYS - CUSTOM TOUR REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Duration: ${formData.duration} Days
Travelers: ${formData.travelers}
Budget Class: ${formData.budget}

Destinations Selected:
${formData.destinations.map(d => `- ${d}`).join('\n') || 'None'}

Interests Selected:
${formData.interests.map(i => `- ${i}`).join('\n') || 'None'}

Special Notes:
${formData.notes || 'None'}`;

    const mailtoUrl = `mailto:ceylonnestjourneys@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(true);
    }, 500);
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

                {/* Budget selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">Preferred Hotel Budget</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['budget', 'mid-range', 'luxury'].map((level) => (
                      <label
                        key={level}
                        className={`flex flex-col items-center justify-center p-4 border rounded-2xl cursor-pointer text-center capitalize transition-all ${
                          formData.budget === level
                            ? 'bg-primary/5 border-primary text-primary font-bold shadow-xs'
                            : 'bg-cream border-gray-200 text-charcoal-light hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={level}
                          checked={formData.budget === level}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="sr-only"
                        />
                        <span className="text-xs">{level}</span>
                      </label>
                    ))}
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
                  className="w-full bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Custom Plan Request</span>
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
