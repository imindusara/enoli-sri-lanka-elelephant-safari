import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { toursData } from '../data/tours';
import { useTranslation } from '../contexts/LanguageContext';

interface BookingFormProps {
  defaultTourId?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ defaultTourId = '' }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourId: defaultTourId,
    date: '',
    travelers: '1',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp number is required';
    if (!formData.tourId) newErrors.tourId = 'Please select a tour';
    if (!formData.date) newErrors.date = 'Preferred travel date is required';
    if (parseInt(formData.travelers) < 1) newErrors.travelers = 'Must have at least 1 traveler';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedTourName = toursData.find(t => t.id === formData.tourId)?.title || formData.tourId;
    const text = `Hi Ceylon Nest Journeys! I would like to book a tour.
Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Tour Interested In: ${selectedTourName}
Date: ${formData.date}
Travelers: ${formData.travelers}
Message: ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/94763586686?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl text-center flex flex-col items-center justify-center animate-fade-in py-16">
        <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        <h3 className="font-serif font-bold text-3xl text-charcoal mb-4">
          Enquiry Received!
        </h3>
        <p className="text-charcoal-light max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to **Ceylon Nest Journeys**. Our travel specialists will customize your itinerary and contact you with a details quote within a few hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              tourId: defaultTourId,
              date: '',
              travelers: '1',
              message: '',
            });
          }}
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-all"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl">
      <h3 className="font-serif font-bold text-2xl text-charcoal mb-6 border-b border-gray-100 pb-4">
        {t('form_title')}
      </h3>
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            {t('form_name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-cream/40 focus:outline-none focus:ring-2 transition-all ${
              errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Email & Phone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              {t('form_email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-xl border bg-cream/40 focus:outline-none focus:ring-2 transition-all ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              {t('form_phone')}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              className={`w-full px-4 py-3 rounded-xl border bg-cream/40 focus:outline-none focus:ring-2 transition-all ${
                errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
          </div>
        </div>

        {/* Tour Selection */}
        <div>
          <label htmlFor="tourId" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            {t('form_tour')}
          </label>
          <select
            id="tourId"
            name="tourId"
            value={formData.tourId}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-cream/40 focus:outline-none focus:ring-2 transition-all ${
              errors.tourId ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
            }`}
          >
            <option value="" disabled>Choose a Tour</option>
            {toursData.map((tour) => (
              <option key={tour.id} value={tour.id} disabled={tour.comingSoon}>
                {tour.title} {tour.comingSoon ? '(Coming Soon)' : ''}
              </option>
            ))}
            <option value="custom">Custom Customized Tour</option>
          </select>
          {errors.tourId && <p className="text-red-500 text-xs mt-1 font-medium">{errors.tourId}</p>}
        </div>

        {/* Date & Travelers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              {t('form_date')}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-cream/40 focus:outline-none focus:ring-2 transition-all ${
                errors.date ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'
              }`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="travelers" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
              {t('form_travelers')}
            </label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              min="1"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border bg-cream/40 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Special Requirements */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
            {t('form_message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your interests, pacing preferences, hotel ratings, or diet restrictions..."
            className="w-full px-4 py-3 rounded-xl border bg-cream/40 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="flex-1 flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-xs uppercase tracking-wider"
          >
            <Send className="h-4 w-4" />
            <span>{isSubmitting ? 'Submitting...' : t('form_submit')}</span>
          </button>
          
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="flex-1 flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg text-xs uppercase tracking-wider"
          >
            <MessageSquare className="h-4 w-4" />
            <span>{t('form_whatsapp')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
