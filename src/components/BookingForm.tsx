import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';
import { toursData } from '../data/tours';
import { useTranslation } from '../contexts/LanguageContext';

interface BookingFormProps {
  defaultTourId?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ defaultTourId = '' }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourId: defaultTourId || (toursData[0]?.id || ''),
    date: '',
    travelers: '1',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.tourId) newErrors.tourId = 'Please select a tour';
    }
    if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Preferred travel date is required';
    }
    if (currentStep === 3) {
      if (parseInt(formData.travelers) < 1) newErrors.travelers = 'Must have at least 1 traveler';
    }
    if (currentStep === 4) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    const selectedTourName = formData.tourId === 'customized-trip' 
      ? 'Customized Tour (Design My Own Trip)'
      : (toursData.find(t => t.id === formData.tourId)?.title || formData.tourId);

    try {
      await fetch("https://formsubmit.co/ajax/ceylonnestjourneys@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Tour Booking Enquiry - ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          "Phone / WhatsApp": formData.phone,
          "Tour Selected": selectedTourName,
          "Preferred Date": formData.date,
          "Travelers Count": formData.travelers,
          "Message / Special Requests": formData.message || 'None'
        })
      });
    } catch (error) {
      console.error("Booking form silent email submission failed:", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    const selectedTourName = formData.tourId === 'customized-trip' 
      ? 'Customized Tour (Design My Own Trip)'
      : (toursData.find(t => t.id === formData.tourId)?.title || formData.tourId);

    const text = `Hi Ceylon Nest Journeys! I would like to book a tour.
Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Tour Interested In: ${selectedTourName}
Date: ${formData.date}
Travelers: ${formData.travelers}
Message: ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/94771112040?text=${encodeURIComponent(text)}`;
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
          Thank you for reaching out to <strong className="font-bold text-primary">Ceylon Nest Journeys</strong>. Our travel specialists will customize your itinerary and contact you with a detailed quote within a few hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              name: '',
              email: '',
              phone: '',
              tourId: defaultTourId || (toursData[0]?.id || ''),
              date: '',
              travelers: '1',
              message: '',
            });
          }}
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-150 shadow-lg">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="flex items-center flex-1 last:flex-initial">
            <div 
              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {s}
            </div>
            {s < 5 && (
              <div 
                className={`h-1 flex-1 mx-2 transition-colors ${
                  step > s ? 'bg-primary' : 'bg-gray-100'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <h3 className="font-serif font-bold text-xl text-primary mb-6">
        {step === 1 && 'Step 1: Choose Your Tour'}
        {step === 2 && 'Step 2: Choose Your Date'}
        {step === 3 && 'Step 3: Number of Travelers'}
        {step === 4 && 'Step 4: Contact Details'}
        {step === 5 && 'Step 5: Special Requests'}
      </h3>

      <div className="space-y-6 min-h-[160px]">
        {/* Step 1: Choose Tour */}
        {step === 1 && (
          <div className="space-y-2">
            <label htmlFor="tourId" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
              {t('form_tour')}
            </label>
            <div className="relative w-full bg-cream/40 border border-gray-200 rounded-xl flex justify-center items-center min-h-[48px] focus-within:border-primary transition-colors cursor-pointer">
              <div className="flex items-center space-x-2 text-sm text-charcoal pointer-events-none">
                <span>
                  {formData.tourId === 'customized-trip' 
                    ? 'Customized Tour (Design My Own Trip)' 
                    : formData.tourId 
                      ? (toursData.find(t => t.id === formData.tourId)?.title || 'Select a Tour')
                      : 'Select a Tour'
                  }
                </span>
                <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <select
                id="tourId"
                name="tourId"
                value={formData.tourId || ''}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="" disabled>Select a Tour</option>
                {toursData.map(tour => (
                  <option key={tour.id} value={tour.id}>
                    {tour.title}
                  </option>
                ))}
                <option value="customized-trip">
                  Customized Tour (Design My Own Trip)
                </option>
              </select>
            </div>
            {errors.tourId && <p className="text-red-500 text-xs mt-1 font-medium">{errors.tourId}</p>}
          </div>
        )}

        {/* Step 2: Choose Date */}
        {step === 2 && (
          <div className="space-y-2">
            <label htmlFor="date" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
              {t('form_date')}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm min-h-[48px]"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
          </div>
        )}

        {/* Step 3: Travelers */}
        {step === 3 && (
          <div className="space-y-2">
            <label htmlFor="travelers" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
              {t('form_travelers')}
            </label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              min="1"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm min-h-[48px]"
            />
            {errors.travelers && <p className="text-red-500 text-xs mt-1 font-medium">{errors.travelers}</p>}
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                {t('form_name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm min-h-[48px]"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                {t('form_email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm min-h-[48px]"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                {t('form_phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm min-h-[48px]"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
            </div>
          </div>
        )}

        {/* Step 5: Special Requests */}
        {step === 5 && (
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
              {t('form_message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any dietary requirements, health issues, or airport pickup flight codes?"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-cream/40 focus:outline-none focus:border-primary text-sm"
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex-1 border border-gray-200 text-charcoal font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 min-h-[48px] hover:bg-cream transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 min-h-[48px] transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="flex-1 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 min-h-[48px] transition-colors cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send Email'}</span>
            </button>
            <button
              onClick={handleWhatsAppSubmit}
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 min-h-[48px] transition-colors cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
