import React, { useState } from 'react';
import { Calendar, Clock, X, ArrowRight, FileText } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: 'TRAVEL TIPS' | 'DESTINATIONS' | 'CULTURE & FOOD' | 'SAFARI & WILDLIFE' | 'BEACH & SURF';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL POSTS');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    'ALL POSTS',
    'TRAVEL TIPS',
    'DESTINATIONS',
    'CULTURE & FOOD',
    'SAFARI & WILDLIFE',
    'BEACH & SURF'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'Ultimate Guide to Climbing Sigiriya Rock Fortress',
      category: 'TRAVEL TIPS',
      date: '2026-08-05',
      readTime: '6 min read',
      image: '/poswiecie-sigiriya-459197_1920.jpg',
      excerpt: 'Discover distance, timing, entry fees, and tips for climbing the UNESCO World Heritage site Sigiriya Rock Fortress at sunrise.',
      content: `Climbing the iconic Sigiriya Rock Fortress is one of the most memorable experiences you can have in Sri Lanka. Standing over 200 meters high, this ancient palace ruins built by King Kashyapa in the 5th century offers breath-taking panoramic views of the surrounding green jungles.

### Key Details & Timing
- **Opening Hours:** 6:30 AM to 5:30 PM daily. We highly recommend climbing at sunrise (6:30 AM) to beat the tropical heat and crowd.
- **Duration:** It takes approximately 1.5 to 2 hours for a round-trip climb, depending on your physical fitness and crowd flow on the stairs.
- **Stairs:** There are exactly 1,200 steps to the top. The path includes secure metal stairs alongside vertical rock faces.

### What You Will See
- **The Water Gardens:** Lush terraced landscapes at the base.
- **The Mirror Wall:** Historic plaster wall covered in ancient graffiti from visitors centuries ago.
- **Sigiriya Frescoes:** Vibrant paintings of celestial maidens preserved in a sheltered rock pocket.
- **The Lion Paw Entrance:** The massive stone paws flanking the final climb to the summit palace.`
    },
    {
      id: 'post-2',
      title: 'Aesthetic Road Trip Routes Across Sri Lanka',
      category: 'DESTINATIONS',
      date: '2026-08-01',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Explore the best scenic routes from Colombo to Galle, Kandy to Nuwara Eliya, and Ella to Haputale for the ultimate road trip experience.',
      content: `Sri Lanka features some of the most scenic road networks in South Asia, taking you from coastal expressway views to winding misty tea hills. Here are our top pick routes:

### 1. Southern Coastal Route (Colombo to Galle)
Cruising along the coastal road or taking the Southern Expressway offers immediate vistas of palm-fringed beaches, stilt fishermen, and tropical lagoons. Be sure to stop at Hikkaduwa for fresh coconut water.

### 2. The Tea Country Climb (Kandy to Nuwara Eliya)
A winding road that takes you past lush green mountains, cascading waterfalls (like Ramboda Falls), and colonial tea factory buildings. The temperature drops noticeably as you rise above 1,800 meters.

### 3. Ella to Haputale (Highlands Route)
A road that hugs the mountainside, offering sweeping views of the southern plains. Pass by pine trees, small fruit stalls, and train tracks running parallel to the road.`
    },
    {
      id: 'post-3',
      title: 'Colombo Airport to Galle Transfer Guide',
      category: 'TRAVEL TIPS',
      date: '2026-07-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1563201412-f240ecf91439?auto=format&fit=crop&w=800&q=80',
      excerpt: 'All you need to know about airport transfers: public buses, trains, Tuk-Tuks, and private vehicle bookings via the Southern Highway.',
      content: `Getting from Bandaranaike International Airport (BIA) in Colombo to the historic city of Galle is straightforward when you know the options. The distance is roughly 150 km.

### Private Vehicle (Recommended)
By far the most comfortable and stress-free option. A private air-conditioned vehicle with a professional driver takes you via the Southern Highway in under 2 hours. Booking via Ceylon Nest Journeys ensures pre-arranged flight monitoring, so your driver is ready when you land.

### Highway Bus
You can take a taxi to Makumbura Multimodal Center (Kottawa) and board a luxury highway bus directly to Galle. Total travel time is about 2.5 hours.

### Scenic Train
For travelers looking to enjoy local life, travel to Colombo Fort Station and board the coastal train line. The tracks run right next to the beach, offering gorgeous ocean views.`
    },
    {
      id: 'post-4',
      title: 'A Culinary Journey: Sri Lankan Clay Pot Cooking',
      category: 'CULTURE & FOOD',
      date: '2026-07-15',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Experience the authentic aromas of traditional coconut milk curries and spices slow-cooked to perfection in earthenware.',
      content: `Sri Lankan cuisine is defined by its deep spices, fresh grated coconut, and traditional clay pot cooking methods. Earthenware pots are porous, allowing heat and moisture to circulate evenly, producing rich, earthy flavors.

### Essential Spices Used
- **Ceylon Cinnamon:** Sweet and aromatic, distinct from Cassia.
- **Cardamom & Cloves:** Bruised gently to release oils.
- **Roasted Curry Powder:** A dark blend of coriander, cumin, fennel, and black pepper.
- **Curry Leaves & Pandan (Rampe):** Added to almost every dish for visual appeal and aroma.

### Slow Cooking Curries
Traditional clay pot curries like Jackfruit (Polos) curry or Fish Ambul Thiyal (sour fish curry) are simmered slowly over firewood embers. The clay absorbs excess acidity, creating a perfectly balanced flavor profile.`
    },
    {
      id: 'post-5',
      title: 'Best Time to Visit Yala National Park for Leopard Safaris',
      category: 'SAFARI & WILDLIFE',
      date: '2026-07-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Get details on leopard sightings, park opening times, jeep rentals, and recommendations for high-chance wildlife safari hours.',
      content: `Yala National Park hosts one of the highest leopard densities in the world, making it the premier destination for big cat photography in Asia.

### Choosing Your Safari Time
- **Morning Safari (6:00 AM - 10:00 AM):** Leopards are active hunters and can often be seen walking along jeep tracks or perched on rocky outcrops before the sun gets too hot.
- **Afternoon Safari (2:00 PM - 6:00 PM):** Best for spotting leopards heading down to waterholes to drink as the temperature cools.

### Dry Season Advantage
The absolute best months for spotting leopards are **February to June**. As water sources inside the park dry up, animals are forced to gather around remaining waterholes, making them much easier to locate.`
    },
    {
      id: 'post-6',
      title: 'Mirissa Coconut Tree Hill & Surf Spots',
      category: 'BEACH & SURF',
      date: '2026-06-25',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      excerpt: 'A comprehensive guide to finding the secret paths to Coconut Tree Hill and the best beginner-friendly surf breaks in Mirissa.',
      content: `Mirissa is a beautiful crescent-shaped beach on the southern coast of Sri Lanka. It combines a laid-back backpacker atmosphere with luxury beach resorts and excellent surfing conditions.

### Finding Coconut Tree Hill
This iconic dome-shaped hill covered in towering coconut palms is one of the most photographed spots in the country. To reach it, walk east along Mirissa Beach past the rocky headland, or take a short Tuk-Tuk ride to the harbor access path. It is best visited at sunrise for calm waters and soft light.

### Surfing in Mirissa
- **Mirissa Bay (Left Hand Point Break):** Ideal for intermediate surfers. It breaks over a reef but is generally safe.
- **Beginner Sandy Breaks:** Located in the main bay, perfect for taking your first lessons from local surf schools.`
    }
  ];

  const filteredPosts = selectedCategory === 'ALL POSTS'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 bg-cream min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: `url('/poswiecie-sigiriya-459197_1920.jpg')` }}></div>
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] block">JOURNEY LOGS</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">Travel Blog</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Expert travel tips, local cuisine guides, destination breakdowns, and wildlife safari insights from Ceylon Nest Journeys.
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
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'text-charcoal-light hover:text-charcoal bg-gray-50 hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-150 shadow-sm flex flex-col items-center">
            <FileText className="h-12 w-12 text-gray-300 mb-3" />
            <p className="text-charcoal-light font-medium">No posts found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-primary font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-gray-150">
                    {post.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="mt-6 inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border-t border-gray-100 pt-4"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost !== null && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Cover Image Header */}
            <div className="relative h-64 sm:h-80 w-full">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-white bg-black/45 hover:bg-black/60 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-accent text-white font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4 text-xs text-charcoal-light font-bold border-b border-gray-100 pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-accent" />
                  Published: {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-accent" />
                  Reading Time: {selectedPost.readTime}
                </span>
              </div>

              <div className="prose prose-sm max-w-none text-charcoal-light leading-relaxed font-sans space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="border-t border-gray-100 pt-6 mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
