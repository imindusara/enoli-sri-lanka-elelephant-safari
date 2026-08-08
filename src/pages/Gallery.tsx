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
      url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      title: 'Ella Scenic Train Ride',
      category: 'Adventure'
    },
    {
      id: 'adv-2',
      url: 'https://images.unsplash.com/photo-1578590494538-cd46ea167b05?auto=format&fit=crop&w=800&q=80',
      title: 'Hiking Little Adam\'s Peak',
      category: 'Adventure'
    },
    // Coastal
    {
      id: 'cst-1',
      url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      title: 'Coconut Tree Hill Mirissa',
      category: 'Coastal'
    },
    {
      id: 'cst-2',
      url: 'https://images.unsplash.com/photo-1563201412-f240ecf91439?auto=format&fit=crop&w=800&q=80',
      title: 'Traditional Stilt Fishermen',
      category: 'Coastal'
    },
    // Culture
    {
      id: 'clt-1',
      url: 'https://images.unsplash.com/photo-1608958416710-530bb662b2d7?auto=format&fit=crop&w=800&q=80',
      title: 'Traditional Kandy Dancer',
      category: 'Culture'
    },
    {
      id: 'clt-2',
      url: 'https://images.unsplash.com/photo-1588598126483-24124fe709b6?auto=format&fit=crop&w=800&q=80',
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
      url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
      title: 'Nine Arch Bridge Ella',
      category: 'Iconic'
    },
    // Moments
    {
      id: 'mom-1',
      url: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=80',
      title: 'Traditional Tea Plucking',
      category: 'Moments'
    },
    {
      id: 'mom-2',
      url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80',
      title: 'Clay Pot Traditional Cooking',
      category: 'Moments'
    },
    // Nature
    {
      id: 'nat-1',
      url: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=800&q=80',
      title: 'Misty Tea Hills Nuwara Eliya',
      category: 'Nature'
    },
    {
      id: 'nat-2',
      url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
      title: 'Ramboda Waterfall',
      category: 'Nature'
    },
    // River Safari
    {
      id: 'riv-1',
      url: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80',
      title: 'Madu Ganga Boat Safari',
      category: 'River Safari'
    },
    {
      id: 'riv-2',
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      title: 'River Boating Adventure',
      category: 'River Safari'
    },
    // Safari
    {
      id: 'saf-1',
      url: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80',
      title: 'Minneriya Wild Elephant Safari',
      category: 'Safari'
    },
    {
      id: 'saf-2',
      url: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80',
      title: 'Yala National Park Leopard',
      category: 'Safari'
    },
    // Spiritual
    {
      id: 'spi-1',
      url: 'https://images.unsplash.com/photo-1625736746816-ef163884e954?auto=format&fit=crop&w=800&q=80',
      title: 'Sacred Temple of the Tooth',
      category: 'Spiritual'
    },
    {
      id: 'spi-2',
      url: 'https://images.unsplash.com/photo-1576487244153-c415547c1e5d?auto=format&fit=crop&w=800&q=80',
      title: 'Dambulla Golden Cave Temple',
      category: 'Spiritual'
    },
    // Wildlife
    {
      id: 'wld-1',
      url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
      title: 'Majestic Sri Lankan Elephant',
      category: 'Wildlife'
    },
    {
      id: 'wld-2',
      url: 'https://images.unsplash.com/photo-1520111666666-e0e64c23dbd4?auto=format&fit=crop&w=800&q=80',
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
