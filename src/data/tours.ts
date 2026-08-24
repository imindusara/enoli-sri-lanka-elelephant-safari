export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  overnight?: string; // e.g. "4★ Hotel in Sigiriya"
}

export interface Tour {
  id: string;
  title: string;
  category: 'day' | 'multi-day' | 'transfers' | 'hire';
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
      '/ella.webp',
      '/Ella Misty Valleys, Tea Gardens & Epic Railways1.webp',
      '/Ella Misty Valleys, Tea Gardens & Epic Railways 02.webp',
      '/Ella Misty Valleys, Tea Gardens & Epic Railways 03.webp'
    ],
    price: 230
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
      '/galle.webp',
      '/Mirissa Coconut Tree Hill & Surf Spots.jpg',
      '/Colombo Airport to Bentota Scenic Transfer.jpg',
      '/Sri Lankan Clay Pot Cooking.jpg'
    ],
    price: 170
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
      '/sigiriya.jpg',
      '/Anuradhapura.webp',
      '/Polonnaruwa.jpg',
      '/sigiriya and kandy.jpg'
    ],
    price: 300
  },
  {
    id: 'sigiriya-kandy-2-days',
    title: 'Sigiriya & Kandy Tour',
    category: 'multi-day',
    tagline: 'Culture, Heritage & Wildlife Tour (Half Board)',
    duration: '2 Days',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Experience the best of Sigiriya and Kandy on this 2-day private tour with deluxe accommodation (half board) and a dedicated tour guide. Explore Sigiriya\'s iconic Lion Rock, the charming Hiriwadunna village, and an exhilarating wild elephant safari. In Kandy, visit the sacred Tooth Relic Temple, stroll along the scenic Kandy Lake, immerse yourself in the beauty of the Peradeniya Botanical Garden, and admire the historic Matale Hindu Temple. This unforgettable journey combines cultural, spiritual, and natural wonders, promising a perfect blend of adventure and relaxation.',
    highlights: [
      'Sigiriya Lion Rock Fortress climb',
      'Temple of the Sacred Tooth Relic in Kandy',
      'Wild Elephant Jeep Safari',
      'Hiriwadunna traditional village experience'
    ],
    includes: [
      '4★ Hotel Accommodation (Half Board - Dinner & Breakfast)',
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
      '/sigiriya.jpg',
      '/sigiriya and kandy.jpg',
      '/Anuradhapura.webp',
      '/Polonnaruwa.jpg'
    ],
    price: 350,
    itinerary: [
      {
        day: 1,
        title: 'Cultural Triangle Explorations & Safari',
        activities: [
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
      '/sigiriya.jpg',
      '/sigiriya and kandy.jpg',
      '/ella.webp',
      '/Yala National Park.jpg',
      '/Polonnaruwa.jpg'
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
      '/sigiriya.jpg',
      '/sigiriya and kandy.jpg',
      '/ella.webp',
      '/Yala National Park.jpg',
      '/Mirissa Coconut Tree Hill & Surf Spots.jpg',
      '/Polonnaruwa.jpg',
      '/Anuradhapura.webp'
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
      '/sigiriya.jpg',
      '/sigiriya and kandy.jpg',
      '/ella.webp',
      '/Yala National Park.jpg',
      '/Mirissa Coconut Tree Hill & Surf Spots.jpg',
      '/Polonnaruwa.jpg',
      '/Anuradhapura.webp',
      '/Trincomalee.jpg'
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
  },
  {
    id: 'sightseeing-transfer-galle',
    title: 'Colombo/Airport to Galle Sightseeing Transfer',
    category: 'transfers',
    tagline: 'Travel from Colombo/Airport to Galle with 3-4 Scenic Sightseeing Stops',
    duration: '1 Day (Transfer + Tour)',
    startLocation: 'Colombo or Bandaranaike International Airport (CMB)',
    overview: 'Transform your transport into an adventure! Instead of a plain taxi ride, book our premium sightseeing transfer from Colombo City or the International Airport to Galle. Along the way, we stop at 3 to 4 major highlights of the southwestern coast, including the Madu River boat safari, a sea turtle conservation hatchery, traditional stilt fishermen spots, and historic coastal sites. Travel in a comfortable private A/C vehicle with a dedicated driver-guide who handles your luggage safely.',
    highlights: [
      'Madu River mangrove boat safari',
      'Sea Turtle hatchery & conservation project',
      'Traditional stilt fishermen photo stop',
      'Private A/C transfer with luggage security'
    ],
    includes: [
      'Air-conditioned private vehicle',
      'Professional English-speaking driver-guide',
      'Luggage transport & transfer to Galle hotel',
      'All fuel fees, highway tolls & parking fees'
    ],
    excludes: [
      'Food & beverages (lunch/snacks)',
      'Entrance fees & safari tickets',
      'Personal expenses & gratuities'
    ],
    imageUrl: '/galle.webp',
    gallery: [
      '/galle.webp',
      '/ella.webp'
    ],
    price: 95
  },
  {
    id: 'car-driver-hire',
    title: 'Private Car & Driver Hire',
    category: 'hire',
    tagline: 'Rent a Private Car/Van with English-Speaking Driver',
    duration: 'Flexible',
    startLocation: 'Any location in Sri Lanka',
    overview: 'Explore Sri Lanka at your own pace! Rent a private air-conditioned vehicle with a professional, English-speaking driver. Choose between a standard car ($80/day) or a comfortable van ($120/day). You plan your own hotel bookings and sightseeing stops, while we handle all transport costs, driver needs, and highway fees.',
    highlights: [
      'Private air-conditioned car ($80/day) or van ($120/day)',
      'Includes driver salary, driver accommodation, and meals',
      'All fuel costs, highway fees, and parking fees included',
      'Professional English-speaking driver'
    ],
    includes: [
      'Private air-conditioned Car or Van with professional driver',
      'English-speaking driver service',
      'Driver salary, driver accommodation, and meals',
      'All fuel costs, highway fees, and parking fees covered'
    ],
    excludes: [
      'Guest hotel bookings & accommodation (guests must arrange their own hotels)',
      'Entrance tickets to attractions, safari costs, and activity fees'
    ],
    imageUrl: '/classic sri lanka tour.webp',
    gallery: [
      '/classic sri lanka tour.webp',
      '/Signature Sri Lanka Tour.webp'
    ],
    price: 80,
    priceLabel: 'From $80 (Car) / $120 (Van) per day'
  },
  {
    id: 'airport-bentota-transfer',
    title: 'Colombo Airport to Bentota Scenic Transfer',
    category: 'transfers',
    tagline: 'Comfortable coastal ride to Bentota with sightseeing stops',
    duration: '1 Day',
    startLocation: 'Bandaranaike International Airport (CMB) or Colombo',
    overview: 'Travel in comfort from Colombo Airport to the beach resort of Bentota. Our private sightseeing transfer service allows you to stop at popular coastal sites, such as a turtle hatchery or take a boat safari on the Madu River, with our professional English-speaking driver handling the route.',
    highlights: [
      'Private Car ($65) or Van ($95) options available',
      'Sightseeing stops along the scenic southern expressway',
      'English-speaking driver-guide who handles highway tolls & parking',
      'Door-to-door transfer directly to your Bentota hotel'
    ],
    includes: [
      'Private air-conditioned Car or Van with driver',
      'All fuel costs, highway tolls, and parking fees',
      'Professional English-speaking driver'
    ],
    excludes: [
      'Entrance fees to optional stops (Turtle Hatchery, Boat Safari)',
      'Meals and personal snacks'
    ],
    imageUrl: '/Colombo Airport to Bentota Scenic Transfer.jpg',
    gallery: [
      '/Colombo Airport to Bentota Scenic Transfer.jpg'
    ],
    price: 65,
    priceLabel: 'From $65 (Car) / $95 (Van)'
  },
  {
    id: 'airport-galle-transfer',
    title: 'Colombo Airport to Galle Scenic Transfer',
    category: 'transfers',
    tagline: 'Custom coastal transfer to the historic Galle Dutch Fort',
    duration: '1 Day',
    startLocation: 'Bandaranaike International Airport (CMB) or Colombo',
    overview: 'Make your transfer from Colombo Airport to Galle an adventure! Ride along the southwestern coast and request stops at key highlights (e.g. stilt fishermen or turtle sanctuaries) before arriving at your hotel in the historic Galle Dutch Fort.',
    highlights: [
      'Private Car ($80) or Van ($110) options available',
      'Stop at scenic coastal lookouts and heritage locations',
      'Stress-free ride with all fuel, highway bills, and parking included',
      'Door-to-door drop-off at your Galle destination'
    ],
    includes: [
      'Private air-conditioned Car or Van with driver',
      'All fuel, expressway bills, and parking fees',
      'Friendly English-speaking driver-guide'
    ],
    excludes: [
      'Optional attraction entrance fees',
      'Meals & personal refreshments'
    ],
    imageUrl: '/galle.webp',
    gallery: [
      '/galle.webp'
    ],
    price: 80,
    priceLabel: 'From $80 (Car) / $110 (Van)'
  },
  {
    id: 'airport-ella-transfer',
    title: 'Colombo Airport to Ella Scenic Transfer',
    category: 'transfers',
    tagline: 'Travel to the misty mountain town of Ella with highland stops',
    duration: '1 Day',
    startLocation: 'Bandaranaike International Airport (CMB) or Colombo',
    overview: 'Journey from the airport up into the spectacular tea country of Ella. Climb the winding hills and take photo stops at cascading waterfalls and scenic viewpoints along the route in a comfortable private A/C vehicle.',
    highlights: [
      'Private Car ($200) or Van ($280) options available',
      'Stops at waterfalls and panoramic mountain lookouts',
      'Licensed English-speaking driver-guide',
      'Tolls, fuel, and driver fees fully covered'
    ],
    includes: [
      'Private air-conditioned Car or Van with driver',
      'All fuel, expressway tolls, and parking fees',
      'Professional English-speaking driver'
    ],
    excludes: [
      'Meals, drinks & personal snacks',
      'Attraction entry fees'
    ],
    imageUrl: '/ella.webp',
    gallery: [
      '/ella.webp'
    ],
    price: 200,
    priceLabel: 'From $200 (Car) / $280 (Van)'
  },
  {
    id: 'airport-kandy-transfer',
    title: 'Colombo Airport to Kandy Scenic Transfer',
    category: 'transfers',
    tagline: 'Ride to the sacred capital of Kandy with cultural stops',
    duration: '1 Day',
    startLocation: 'Bandaranaike International Airport (CMB) or Colombo',
    overview: 'Transfer from Colombo Airport to the royal hill capital of Kandy. Relax in a private vehicle and enjoy opportunities to stop at the Millennium Elephant Foundation or spice gardens along the route.',
    highlights: [
      'Private Car ($100) or Van ($130) options available',
      'Custom stops at spice gardens or elephant centers',
      'Comfortable private A/C ride with professional driver',
      'Tolls, fuel, and parking fully included'
    ],
    includes: [
      'Private air-conditioned Car or Van with driver',
      'All fuel, highway tolls, and parking fees',
      'English-speaking driver-guide'
    ],
    excludes: [
      'Optional attraction tickets',
      'Meals & personal expenses'
    ],
    imageUrl: '/sigiriya and kandy.jpg',
    gallery: [
      '/sigiriya and kandy.jpg'
    ],
    price: 100,
    priceLabel: 'From $100 (Car) / $130 (Van)'
  },
  {
    id: 'airport-sigiriya-transfer',
    title: 'Colombo Airport to Sigiriya Scenic Transfer',
    category: 'transfers',
    tagline: 'Travel to the central Cultural Triangle with historical stops',
    duration: '1 Day',
    startLocation: 'Bandaranaike International Airport (CMB) or Colombo',
    overview: 'Enjoy a private sightseeing transfer to the ancient heart of Sri Lanka. Journey from the airport directly to your hotel in Sigiriya or Dambulla, with the option to stop at historical sights along the way.',
    highlights: [
      'Private Car ($120) or Van ($160) options available',
      'Travel in air-conditioned comfort to the Cultural Triangle',
      'English-speaking driver handles all tolls, parking, and fuel',
      'Door-to-door hotel transfers included'
    ],
    includes: [
      'Private air-conditioned Car or Van with driver',
      'All fuel, highway bills, and parking fees',
      'Professional English-speaking driver'
    ],
    excludes: [
      'Meals, drinks & personal snacks',
      'Attraction entry tickets'
    ],
    imageUrl: '/sigiriya.jpg',
    gallery: [
      '/sigiriya.jpg'
    ],
    price: 120,
    priceLabel: 'From $120 (Car) / $160 (Van)'
  }
];
