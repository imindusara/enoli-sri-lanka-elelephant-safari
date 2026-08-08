import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, User, Globe, PenTool, CheckCircle2 } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'read' | 'write'>('read');
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({
    author: '',
    location: '',
    rating: 5,
    text: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initial reviews
  const defaultReviews: Review[] = [
    {
      id: 'rev-1',
      author: 'Sarah & David M.',
      location: 'United Kingdom',
      rating: 5,
      text: 'Our trip with Ceylon Nest Journeys was incredible. The Nine Arches Bridge and Udawalawe safari were highlights, but what truly made it special was our driver. He felt like family, was extremely safe, and showed us the best local spots. Highly recommend!',
      date: '2026-07-15',
    },
    {
      id: 'rev-2',
      author: 'Markus K.',
      location: 'Germany',
      rating: 5,
      text: 'Flawless service from start to finish! The vehicle was clean and modern, and the Dambulla and Sigiriya climbs were unforgettable. We got custom stops along the way that weren\'t even on the main list. Real Sri Lankan hospitality!',
      date: '2026-08-01',
    },
    {
      id: 'rev-3',
      author: 'Elena R.',
      location: 'Italy',
      rating: 5,
      text: 'As a solo female traveler, safety was my biggest concern. Ceylon Nest Journeys provided a driver who was professional, polite, and extremely protective. I had the time of my life exploring Galle and Madu River!',
      date: '2026-07-28',
    },
    {
      id: 'rev-4',
      author: 'Jean-Pierre L.',
      location: 'France',
      rating: 5,
      text: 'Magnificent organization. The 7-day tour was perfectly calibrated. Excellent choice of boutique hotels. Our driver was extremely patient, an expert guide, and knew the best panoramic views. We will return soon!',
      date: '2026-06-12',
    },
  ];

  // Load reviews from local storage or set defaults
  useEffect(() => {
    const saved = localStorage.getItem('ceylon_nest_reviews');
    if (saved) {
      try {
        setReviewsList(JSON.parse(saved));
      } catch (e) {
        setReviewsList(defaultReviews);
      }
    } else {
      setReviewsList(defaultReviews);
      localStorage.setItem('ceylon_nest_reviews', JSON.stringify(defaultReviews));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.author.trim() || !formData.location.trim() || !formData.text.trim()) {
      setError('Please fill in all the fields before submitting.');
      return;
    }

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: formData.author,
      location: formData.location,
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString().split('T')[0],
    };

    const updatedList = [newReview, ...reviewsList];
    setReviewsList(updatedList);
    localStorage.setItem('ceylon_nest_reviews', JSON.stringify(updatedList));

    setIsSubmitted(true);
    setFormData({
      author: '',
      location: '',
      rating: 5,
      text: '',
    });

    // Automatically transition back after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setActiveTab('read');
    }, 2500);
  };

  return (
    <div className="pt-24 min-h-screen bg-cream text-charcoal pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: `url('/poswiecie-sigiriya-459197_1920.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] block">GUEST CHRONICLES</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">Traveler Testimonials</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover real stories, ratings, and memories shared by travelers who explored Sri Lanka with Ceylon Nest Journeys.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full inline-flex border border-gray-150 shadow-sm">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'read'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Read Reviews ({reviewsList.length})
            </button>
            <button
              onClick={() => setActiveTab('write')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'write'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              <PenTool className="h-4 w-4" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Read Tab */}
        {activeTab === 'read' && (
          <div className="space-y-6 animate-fade-in">
            {reviewsList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-150 shadow-sm">
                <p className="text-charcoal-light font-medium">No reviews posted yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Rating Stars */}
                      <div className="flex text-[#D4AF37]">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        {Array.from({ length: 5 - rev.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-250" />
                        ))}
                      </div>

                      <p className="text-charcoal-light text-sm sm:text-base leading-relaxed italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-4 mt-6 flex justify-between items-center text-xs">
                      <div>
                        <h4 className="font-serif font-bold text-primary text-sm sm:text-base">{rev.author}</h4>
                        <p className="text-charcoal-light flex items-center gap-1 mt-0.5 font-medium">
                          <Globe className="h-3 w-3 text-accent" />
                          {rev.location}
                        </p>
                      </div>
                      <span className="text-gray-400 font-semibold">{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Write Tab */}
        {activeTab === 'write' && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-gray-150 shadow-xl animate-fade-in">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-2">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-primary">Review Submitted!</h3>
                <p className="text-charcoal-light text-sm max-w-xs leading-relaxed">
                  Thank you so much for sharing your review! Redirecting to reviews list...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-primary">Share Your Experience</h3>
                  <p className="text-charcoal-light text-xs sm:text-sm">
                    Your feedback helps us maintain our premium standards of luxury Sri Lankan hospitality.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 text-xs font-semibold p-3 rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                {/* Rating Select */}
                <div className="space-y-2 flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal">Your Rating</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            star <= formData.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Author Name */}
                <div className="space-y-1">
                  <label htmlFor="author" className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-primary" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="e.g. John & Emily Smith"
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-primary" /> Country / Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Australia"
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Review Text */}
                <div className="space-y-1">
                  <label htmlFor="text" className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-primary" /> Your Experience
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    rows={4}
                    value={formData.text}
                    onChange={handleInputChange}
                    placeholder="Tell other travelers about your private tour, driver-guide, and overall experience..."
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-colors shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Luxury Review
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
