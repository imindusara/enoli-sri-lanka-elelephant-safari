export interface BlogPost {
  id: string;
  title: string;
  category: 'TRAVEL TIPS' | 'DESTINATIONS' | 'CULTURE & FOOD' | 'SAFARI & WILDLIFE' | 'BEACH & SURF';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
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
    id: 'post-3',
    title: 'Colombo Airport to Galle Transfer Guide',
    category: 'TRAVEL TIPS',
    date: '2026-07-28',
    readTime: '5 min read',
    image: '/galle.webp',
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
    image: '/Sri Lankan Clay Pot Cooking.jpg',
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
    image: '/isit Yala National Park for Leopard Safaris.jpg',
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
    image: '/Mirissa Coconut Tree Hill & Surf Spots.jpg',
    excerpt: 'A comprehensive guide to finding the secret paths to Coconut Tree Hill and the best beginner-friendly surf breaks in Mirissa.',
    content: `Mirissa is a beautiful crescent-shaped beach on the southern coast of Sri Lanka. It combines a laid-back backpacker atmosphere with luxury beach resorts and excellent surfing conditions.

### Finding Coconut Tree Hill
This iconic dome-shaped hill covered in towering coconut palms is one of the most photographed spots in the country. To reach it, walk east along Mirissa Beach past the rocky headland, or take a short Tuk-Tuk ride to the harbor access path. It is best visited at sunrise for calm waters and soft light.

### Surfing in Mirissa
- **Mirissa Bay (Left Hand Point Break):** Ideal for intermediate surfers. It breaks over a reef but is generally safe.
- **Beginner Sandy Breaks:** Located in the main bay, perfect for taking your first lessons from local surf schools.`
  }
];
