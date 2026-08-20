export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  overnight?: string; // e.g. "4★ Hotel in Sigiriya"
}

export interface Tour {
  id: string;
  title: string;
  category: 'day' | 'multi-day';
  tagline: string;
  duration: string;
  startLocation: string;
  overview: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  imageUrl: string;
  gallery: string[];
  comingSoon?: boolean;
  price?: number; // USD price
  priceLabel?: string; // alternative price e.g. "Contact us for pricing"
  itinerary?: ItineraryDay[];
}

export const toursData: Tour[] = [
  {
    id: 'ella-one-day',
    title: 'Ella One Day Tour',
    category: 'day',
    tagline: 'Scenic Highlands, Iconic Bridges & Wildlife Safari',
    duration: '1 Day',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Discover the scenic beauty of Sri Lanka\'s misty highlands with our unforgettable Ella tour. This action-packed excursion takes you to the iconic Nine Arches Bridge, an architectural marvel nestled among lush tea plantations where you can capture the magic of the train crossing. Immerse yourself in nature at Ravana Falls, one of the island\'s most dramatic waterfalls, and hike up Little Adam\'s Peak for breathtaking panoramic vistas. You will also experience a nostalgic mini train ride through emerald landscapes and embark on a thrilling safari in Udawalawe National Park to observe majestic Asian elephants in their natural habitat.',
    highlights: [
      'Nine Arches Bridge & scenic train crossing',
      'Little Adam\'s Peak scenic hike',
      'Ella Train Ride experience',
      'Ravana Waterfall photo stop',
      'Udawalawe Elephant Safari'
    ],
    includes: [
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel fees, highway tolls & parking fees',
      'Driver\'s meals & accommodation'
    ],
    excludes: [
      'Food & beverages (lunch/snacks)',
      'Entrance fees & safari jeep costs',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/ella.webp',
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1588598126744-12502ef0a221?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=600&q=80'
    ],
    price: 85
  },
  {
    id: 'galle-one-day',
    title: 'Galle One Day Tour',
    category: 'day',
    tagline: 'Colonial History, Coastal Charms & River Safaris',
    duration: '1 Day',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Journey along Sri Lanka\'s southwestern coast to Galle, an enchanting seaside city rich in colonial heritage. The centerpiece of this tour is the Galle Dutch Fort, a UNESCO World Heritage site featuring cobblestone streets, chic boutiques, and historic ramparts overlooking the Indian Ocean. Along the way, enjoy a tranquil boat safari on the Madu River, navigating through dense mangrove forests and visiting local cinnamon islanders. Witness the vital conservation work at a sea turtle hatchery, explore the fascinating moonstone gem mines, and pay respects at the moving Tsunami Memorial Museum.',
    highlights: [
      'Galle Dutch Fort UNESCO walking tour',
      'Madu River scenic boat safari',
      'Sea Turtle Hatchery conservation project',
      'Moonstone Gem Mine Center visit',
      'Tsunami Memorial Museum'
    ],
    includes: [
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel fees, highway tolls & parking fees',
      'Driver\'s meals & accommodation'
    ],
    excludes: [
      'Food & beverages (lunch/snacks)',
      'Entrance fees & boat ride tickets',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/galle.webp',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563182660-983568a64d1c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80'
    ],
    price: 75
  },
  {
    id: 'sigiriya-one-day',
    title: 'Sigiriya One Day Tour',
    category: 'day',
    tagline: 'Ancient Fortresses, Cave Temples & Jungle Safaris',
    duration: '1 Day',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Step back in time to explore the wonders of Sri Lanka\'s cultural triangle. Climb the legendary Sigiriya Rock Fortress, a 5th-century palace constructed atop a colossal 200-meter-tall granite peak, famed for its ancient frescoes and majestic lion paw gates. Visit the Dambulla Cave Temple complex, a UNESCO site hosting awe-inspiring Buddhist statues and murals preserved inside five natural caverns. Delve into rural Sri Lankan life with a traditional village tour experience including a cart ride and local lunch. Conclude your day with an exciting safari in Minneriya or Kaudulla National Park, tracking herds of wild elephants.',
    highlights: [
      'Climb the legendary Sigiriya Rock Fortress',
      'Explore Dambulla Cave Temples',
      'Traditional Village Tour & local meal',
      'Wild Elephant Safari in national park'
    ],
    includes: [
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel fees, highway tolls & parking fees',
      'Driver\'s meals & accommodation'
    ],
    excludes: [
      'Food & beverages (except village lunch if included in package)',
      'Entrance fees & safari jeep costs',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/sigiriya.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1578590494538-cd46ea167b05?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608958223696-e251a37c3574?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    ],
    price: 90
  },
  {
    id: 'sigiriya-kandy-2-days',
    title: 'Sigiriya & Kandy Tour',
    category: 'multi-day',
    tagline: 'Culture, Heritage & Wildlife Tour (Half Board)',
    duration: '2 Days',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Experience the best of Sigiriya and Kandy on this 2-day private tour with deluxe accommodation (half board) and a dedicated tour guide. Explore Sigiriya\'s iconic Lion Rock, the enchanting Dambulla Golden Temple, the charming Hiriwadunna village, and an exhilarating wild elephant safari. In Kandy, visit the sacred Tooth Relic Temple, stroll along the scenic Kandy Lake, immerse yourself in the beauty of the Peradeniya Botanical Garden, and admire the historic Matale Hindu Temple. This unforgettable journey combines cultural, spiritual, and natural wonders, promising a perfect blend of adventure and relaxation.',
    highlights: [
      'Sigiriya Lion Rock Fortress climb',
      'Temple of the Sacred Tooth Relic in Kandy',
      'Dambulla Golden Cave Temple complex',
      'Wild Elephant Jeep Safari',
      'Hiriwadunna traditional village experience'
    ],
    includes: [
      'Deluxe Hotel Accommodation (Half Board - Dinner & Breakfast)',
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'Driver\'s accommodation & meals',
      '24-Hour dedicated service support',
      'All highway tolls, parking fees & fuel'
    ],
    excludes: [
      'Lunch & midday beverages',
      'Sightseeing entrance fees & safari jeep tickets',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/sigiriya and kandy.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1578590494538-cd46ea167b05?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608958223696-e251a37c3574?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    ],
    price: 350,
    itinerary: [
      {
        day: 1,
        title: 'Cultural Triangle Explorations & Safari',
        activities: [
          'Visit the ancient Dambulla Golden Cave Temple complex',
          'Scale the magnificent 5th-century Sigiriya Rock Fortress (Lion Rock)',
          'Experience traditional rural life with a Hiriwadunna village tour',
          'Embark on a wild elephant jeep safari in the national park'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 2,
        title: 'Spice Gardens, Sacred Temples & Botanical Walk',
        activities: [
          'Guided walk through a Matale Herbal & Spice Garden',
          'Visit the colorful Matale Sri Muthumariamman Hindu Temple',
          'Pay respect at the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
          'Stroll around Kandy Lake and visit Royal Botanic Gardens in Peradeniya'
        ],
        overnight: 'Departure / Return to hotel or airport'
      }
    ]
  },
  {
    id: 'sri-lanka-5-days',
    title: '5-Day Classic Sri Lanka Tour',
    category: 'multi-day',
    tagline: 'Cultural Triangle, Tea Highlands & Scenic South Coast',
    duration: '5 Days',
    startLocation: 'Any location in Sri Lanka',
    overview: 'A five-day private journey through Sri Lanka\'s cultural triangle, hill country, and southern coast — ancient rock fortresses, tea country, iconic train rides, wildlife safaris, and beach relaxation, all in one seamless itinerary.',
    highlights: [
      'Climb Sigiriya Rock & Dambulla Caves',
      'Tooth Relic Temple & Kandy Cultural Dance Show',
      'Highlands tea plantation tour & Ramboda Falls',
      'Nostalgic Ella-to-Yala scenic train ride',
      'Yala National Park Safari & Galle Dutch Fort'
    ],
    includes: [
      '4 Nights deluxe hotel accommodation (4★)',
      'Daily breakfast & dinner (Half Board)',
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel, highway tolls & parking fees',
      'Driver\'s accommodation & meals',
      'Bottled drinking water daily'
    ],
    excludes: [
      'Lunch & beverages',
      'Entrance fees & safari jeep costs',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/classic sri lanka tour.webp',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1588598126744-12502ef0a221?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608958223696-e251a37c3574?auto=format&fit=crop&w=600&q=80'
    ],
    price: 780,
    itinerary: [
      {
        day: 1,
        title: 'Sigiriya & Dambulla Antiquities',
        activities: [
          'Explore UNESCO-listed Dambulla Cave Temple',
          'Climb Sigiriya Lion Rock Fortress (or Pidurangala Rock for sunset view)',
          'Experience a village tour with a traditional local lunch',
          'Exhilarating wild elephant safari in the afternoon'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 2,
        title: 'Matale Gardens & Sacred Kandy',
        activities: [
          'Tour a Matale herbal & spice garden to learn about ayurveda',
          'Visit the historic Matale Hindu Temple',
          'Visit the sacred Temple of the Tooth Relic in Kandy',
          'Watch a traditional Sri Lankan cultural dance performance'
        ],
        overnight: '4★ Hotel in Kandy'
      },
      {
        day: 3,
        title: 'Ramboda Waterfalls & Tea Highlands to Ella',
        activities: [
          'Visit a gem museum & workshop',
          'Admire Ramboda viewpoint & the stunning Ramboda Falls',
          'Take a guided walk through a lush tea plantation & tea factory',
          'Hike up Little Adam\'s Peak and stand on the Nine Arches Bridge'
        ],
        overnight: '4★ Hotel in Ella'
      },
      {
        day: 4,
        title: 'Scenic Highlands Train & Yala Wilderness',
        activities: [
          'Embark on the iconic scenic train ride through mountain tunnels and tea hills',
          'Transfer to Tissamaharama for a wildlife safari in Yala National Park'
        ],
        overnight: '4★ Hotel in Tissamaharama'
      },
      {
        day: 5,
        title: 'Coastal Paradise, Turtles & Historic Galle Fort',
        activities: [
          'Stroll through the Mirissa Coconut Tree Hill and beach area',
          'Walk the historic ramparts of the Galle Dutch Fort',
          'Visit a sea turtle conservation centre',
          'Take a relaxing boat safari down the Madu River',
          'Drop-off at your hotel or the airport'
        ],
        overnight: 'Departure / Return'
      }
    ]
  },
  {
    id: 'sri-lanka-7-days',
    title: '7-Day Grand Sri Lanka Tour',
    category: 'multi-day',
    tagline: 'Deep Cultural Immersion, Wildlife Safaris & Southern Beaches',
    duration: '7 Days',
    startLocation: 'Any location in Sri Lanka',
    overview: 'A comprehensive week-long exploration covering the Cultural Triangle, hill country tea estates, iconic viewpoints, wildlife safaris, and the golden southern coast — Sri Lanka\'s essential experiences in one itinerary.',
    highlights: [
      'Climb both Sigiriya Rock & Pidurangala Rock',
      'Tooth Relic Temple & Kandy Cultural Dance',
      'Tea Factory & scenic Gregory Lake in Nuwara Eliya',
      'Nine Arches Bridge & Little Adam\'s Peak hike in Ella',
      'Yala National Park Safari, Galle Fort & Mirissa Beach'
    ],
    includes: [
      '6 Nights deluxe hotel accommodation (4★)',
      'Daily breakfast & dinner (Half Board)',
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel, highway tolls & parking fees',
      'Driver\'s accommodation & meals',
      'Bottled drinking water daily'
    ],
    excludes: [
      'Lunch & beverages',
      'Entrance fees & safari jeep costs',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/Grand Sri Lanka Tour.webp',
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608958223696-e251a37c3574?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
    ],
    price: 980,
    itinerary: [
      {
        day: 1,
        title: 'Sigiriya & Dambulla Monuments',
        activities: [
          'Visit the ancient Dambulla Cave Temple',
          'Climb the magnificent Sigiriya Rock Fortress',
          'Enjoy a traditional village tour with local cooking demo & lunch',
          'Relaxing evening Ayurvedic massage treatment'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 2,
        title: 'Pidurangala Ascent & Elephant Safari',
        activities: [
          'Climb Pidurangala Rock for panoramic views of Sigiriya',
          'Embark on an afternoon wild elephant safari in Minneriya'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 3,
        title: 'Spices, Hindu Temples & Sacred Kandy',
        activities: [
          'Walk through the Dambulla vegetable garden market',
          'Visit a herbal & spice garden in Matale',
          'Visit the colorful Matale Hindu Temple',
          'Pay respects at the Temple of the Sacred Tooth Relic',
          'Watch the cultural dance show'
        ],
        overnight: '4★ Hotel in Kandy'
      },
      {
        day: 4,
        title: 'Kandy Lake View & Ramboda Highlands',
        activities: [
          'Drive up to Kandy viewpoint for photos',
          'Walk through the Royal Botanic Gardens in Peradeniya',
          'Tour a gem museum & showroom',
          'Stop at Ramboda viewpoint & Ramboda Falls',
          'Guided tea plantation & factory tour'
        ],
        overnight: '4★ Hotel in Ramboda / Nuwara Eliya'
      },
      {
        day: 5,
        title: 'Nuwara Eliya Hills & Ella Highlands',
        activities: [
          'Relax at scenic Gregory Lake in Nuwara Eliya (Little England)',
          'Trek up Little Adam\'s Peak for mountain ridge views',
          'Walk along the famous Nine Arches Bridge railway track'
        ],
        overnight: '4★ Hotel in Ella'
      },
      {
        day: 6,
        title: 'Ella Scenic Train to Safari Country',
        activities: [
          'Take the spectacular scenic train ride from Ella',
          'Embark on a thrilling safari inside Yala National Park'
        ],
        overnight: '4★ Hotel in Tissamaharama'
      },
      {
        day: 7,
        title: 'Mirissa Coastal Blends & Galle Dutch Fort',
        activities: [
          'Relax and take photos at Mirissa Coconut Tree Hill and beach',
          'Walk on the pristine sand of Turtle Beach',
          'Wander the cobblestone streets of Galle Dutch Fort',
          'Visit a turtle conservation centre',
          'Take a scenic boat safari down the Madu River',
          'Drop-off at hotel or airport'
        ],
        overnight: 'Departure / Return'
      }
    ]
  },
  {
    id: 'sri-lanka-9-days',
    title: '9-Day Signature Sri Lanka Tour',
    category: 'multi-day',
    tagline: 'The Ultimate Island Journey — Culture, Tea, Safari & Coastline',
    duration: '9 Days',
    startLocation: 'Any location in Sri Lanka',
    overview: 'The complete Sri Lanka experience — an extended, unhurried journey through ancient kingdoms, misty tea country, wildlife-rich national parks, and pristine southern beaches, with extra time to soak in each region.',
    highlights: [
      'Climb Sigiriya Rock, Pidurangala & Dambulla Caves',
      'Tooth Relic Temple & Kandy Cultural Dance',
      'Peradeniya Gardens, Ramboda Falls & Tea Estate tour',
      'Gregory Lake, Little Adam\'s Peak & Nine Arches Bridge',
      'Yala National Park Safari, Mirissa beaches & Galle Fort'
    ],
    includes: [
      '8 Nights deluxe hotel accommodation (4★)',
      'Daily breakfast & dinner (Half Board)',
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'All fuel, highway tolls & parking fees',
      'Driver\'s accommodation & meals',
      'Bottled drinking water daily'
    ],
    excludes: [
      'Lunch & beverages',
      'Entrance fees & safari jeep costs',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/Signature Sri Lanka Tour.webp',
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608958223696-e251a37c3574?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
    ],
    priceLabel: 'Contact us for pricing',
    itinerary: [
      {
        day: 1,
        title: 'Dambulla, Sigiriya & Village Life',
        activities: [
          'Explore Dambulla Cave Temple',
          'Climb Sigiriya Rock Fortress',
          'Village tour with traditional lunch',
          'Optional Ayurvedic massage treatment'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 2,
        title: 'Pidurangala Sunrise & Elephant Safari',
        activities: [
          'Climb Pidurangala Rock for sunrise',
          'Afternoon wild elephant safari'
        ],
        overnight: '4★ Hotel in Sigiriya'
      },
      {
        day: 3,
        title: 'Dambulla Gardens & Sacred Kandy',
        activities: [
          'Walk through Dambulla vegetable garden',
          'Matale spice garden tour & Hindu Temple visit',
          'Temple of the Tooth Relic',
          'Traditional cultural dance show'
        ],
        overnight: '4★ Hotel in Kandy'
      },
      {
        day: 4,
        title: 'Peradeniya Gardens & Ramboda Highlands',
        activities: [
          'Kandy viewpoint and Royal Botanic Gardens Peradeniya',
          'Gem museum tour',
          'Stop at Ramboda viewpoint & Ramboda Falls',
          'Tea plantation & factory tour'
        ],
        overnight: '4★ Hotel in Ramboda / Nuwara Eliya'
      },
      {
        day: 5,
        title: 'Gregory Lake & Ella Highland Wonders',
        activities: [
          'Gregory Lake stroll in Nuwara Eliya',
          'Climb Little Adam\'s Peak',
          'Walk on Nine Arches Bridge'
        ],
        overnight: '4★ Hotel in Ella'
      },
      {
        day: 6,
        title: 'Ella Scenic Train to Safari Country',
        activities: [
          'Scenic train ride from Ella',
          'Yala National Park afternoon safari'
        ],
        overnight: '4★ Hotel in Tissamaharama'
      },
      {
        day: 7,
        title: 'Mirissa Beach & Galle Fort Extension',
        activities: [
          'Relax at Mirissa Coconut Tree Hill beach',
          'Turtle conservation centre visit',
          'Galle Dutch Fort historical stroll',
          'Madu River boat safari'
        ],
        overnight: '4★ Hotel in Mirissa / Galle'
      },
      {
        day: 8,
        title: 'Extended Coastal Leisure',
        activities: [
          'Full day at leisure on Mirissa / Galle beaches',
          'More details and custom options available on request'
        ],
        overnight: '4★ Hotel in Mirissa / Galle'
      },
      {
        day: 9,
        title: 'Leisure & Departure',
        activities: [
          'Relaxing beach morning or shopping in Galle',
          'Transfer to airport or Colombo hotel for departure'
        ],
        overnight: 'Departure'
      }
    ]
  }
];
