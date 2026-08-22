import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Adventure',
    'Coastal',
    'Culture',
    'Iconic',
    'Moments',
    'Nature',
    'River Safari',
    'Safari',
    'Spiritual',
    'Wildlife'
  ];

  const galleryItems: GalleryItem[] = [
    // Adventure
    {
      id: 'adv-1',
      url: '/Gallery/Ella Scenic Train Ride.webp',
      title: 'Ella Scenic Train Ride',
      category: 'Adventure'
    },
    {
      id: 'adv-2',
      url: '/Gallery/Hiking Little Adam\'s Peak.webp',
      title: 'Hiking Little Adam\'s Peak',
      category: 'Adventure'
    },
    // Coastal
    {
      id: 'cst-1',
      url: '/Gallery/Coconut Tree Hill Mirissa.webp',
      title: 'Coconut Tree Hill Mirissa',
      category: 'Coastal'
    },
    {
      id: 'cst-2',
      url: '/Gallery/Traditional Stilt Fishermen.jpg',
      title: 'Traditional Stilt Fishermen',
      category: 'Coastal'
    },
    // Culture
    {
      id: 'clt-1',
      url: '/Gallery/Traditional Kandy Dancer.webp',
      title: 'Traditional Kandy Dancer',
      category: 'Culture'
    },
    {
      id: 'clt-2',
      url: '/Gallery/Polonnaruwa Ancient Ruins.webp',
      title: 'Polonnaruwa Ancient Ruins',
      category: 'Culture'
    },
    // Iconic
    {
      id: 'ico-1',
      url: '/poswiecie-sigiriya-459197_1920.jpg',
      title: 'Sigiriya Lion Rock Fortress',
      category: 'Iconic'
    },
    {
      id: 'ico-2',
      url: '/Gallery/Nine Arch Bridge Ella.webp',
      title: 'Nine Arch Bridge Ella',
      category: 'Iconic'
    },
    // Moments
    {
      id: 'mom-1',
      url: '/Gallery/Traditional Tea Plucking.webp',
      title: 'Traditional Tea Plucking',
      category: 'Moments'
    },
    {
      id: 'mom-2',
      url: '/Gallery/Clay Pot Traditional Cooking.jpg',
      title: 'Clay Pot Traditional Cooking',
      category: 'Moments'
    },
    // Nature
    {
      id: 'nat-1',
      url: '/Gallery/Misty Tea Hills Nuwara Eliya.webp',
      title: 'Misty Tea Hills Nuwara Eliya',
      category: 'Nature'
    },
    {
      id: 'nat-2',
      url: '/Gallery/Ramboda Waterfall.png',
      title: 'Ramboda Waterfall',
      category: 'Nature'
    },
    // River Safari
    {
      id: 'riv-1',
      url: '/Gallery/Madu Ganga Boat Safari.jpg',
      title: 'Madu Ganga Boat Safari',
      category: 'River Safari'
    },
    {
      id: 'riv-2',
      url: '/Gallery/River Boating Adventure.jpg',
      title: 'River Boating Adventure',
      category: 'River Safari'
    },
    // Safari
    {
      id: 'saf-1',
      url: '/Gallery/Minneriya Wild Elephant Safari.webp',
      title: 'Minneriya Wild Elephant Safari',
      category: 'Safari'
    },
    {
      id: 'saf-2',
      url: '/Gallery/Yala National Park Leopard.webp',
      title: 'Yala National Park Leopard',
      category: 'Safari'
    },
    // Spiritual
    {
      id: 'spi-1',
      url: '/Gallery/Sacred Temple of the Tooth.jpg',
      title: 'Sacred Temple of the Tooth',
      category: 'Spiritual'
    },
    {
      id: 'spi-2',
      url: '/Gallery/Dambulla Golden Cave Temple.jpg',
      title: 'Dambulla Golden Cave Temple',
      category: 'Spiritual'
    },
    // Wildlife
    {
      id: 'wld-1',
      url: '/Gallery/Majestic Sri Lankan Elephant.jpg',
      title: 'Majestic Sri Lankan Elephant',
      category: 'Wildlife'
    },
    {
      id: 'wld-2',
      url: '/Gallery/Wild Peacock in Habitat.jpg',
      title: 'Wild Peacock in Habitat',
      category: 'Wildlife'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: `url('/poswiecie-sigiriya-459197_1920.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] block">VISUAL CHRONICLES</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">Sri Lankan Gallery</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Immerse yourself in the spectacular beauty, rich heritage, and vibrant landscapes of Sri Lanka.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Filters Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl bg-white p-3 rounded-3xl border border-gray-150 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  closeLightbox();
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-accent text-white shadow-md'
                    : 'text-charcoal-light hover:text-charcoal bg-gray-50 hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-150 shadow-sm flex flex-col items-center">
            <ImageIcon className="h-12 w-12 text-gray-300 mb-3" />
            <p className="text-charcoal-light font-medium">No items found for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h3 className="text-white font-serif font-bold text-lg leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Main Image */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={filteredItems[activeImageIndex].url}
              alt={filteredItems[activeImageIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10 animate-fade-in"
            />
            <div className="text-center text-white">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">{filteredItems[activeImageIndex].category}</span>
              <h2 className="text-xl font-serif font-bold mt-1">{filteredItems[activeImageIndex].title}</h2>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};
