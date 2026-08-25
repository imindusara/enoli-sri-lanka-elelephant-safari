export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  bestTimeToVisit: string;
  activities: string[];
  gallery: string[];
  tips: string[];
}

export const destinationsData: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'Cultural Triangle',
    tagline: 'The Eighth Wonder of the Ancient World',
    description: 'Sigiriya, a UNESCO World Heritage site, is a spectacular ancient rock fortress rising 200 meters above the central forest plains. Built by King Kashyapa in the 5th century, the citadel features sophisticated water gardens, vibrant frescoes, the historic mirror wall, and colossal stone lion paws guarding the final climb to the summit palace ruins.',
    imageUrl: '/poswiecie-sigiriya-459197_1920.jpg',
    highlights: [
      'Climb the 1,200 steps to the summit palace ruins',
      'Admire the 1,600-year-old colorful frescoes',
      'Walk through the beautifully landscaped royal water gardens',
      'Ascend neighboring Pidurangala Rock for the best view of Sigiriya'
    ],
    bestTimeToVisit: 'January to April (Dry and cooler)',
    activities: [
      'Historical Walking Tours',
      'Archaeology & Photography',
      'Sigiriya Village Bicycle Tours'
    ],
    gallery: [
      '/poswiecie-sigiriya-459197_1920.jpg',
      '/sigiriya.jpg',
      '/sigiriya and kandy.jpg'
    ],
    tips: [
      'The fortress opens at 05:00 AM; start your climb early to beat the tropical sun and tourist crowds.',
      'Stay fully hydrated and wear sturdy walking shoes.',
      'Respect the local instructions regarding photography, especially near the frescoes.'
    ]
  },
  {
    id: 'ella',
    name: 'Ella',
    region: 'Hill Country',
    tagline: 'Misty Valleys, Tea Gardens & Epic Railways',
    description: 'Nestled in the lush, misty mountains of Sri Lanka, Ella is a small town famous for its laid-back vibe, breath-taking panoramas, and stunning hiking trails. Walk through emerald tea plantations, see the engineering marvel of the Nine Arches Bridge, climb Little Adam\'s Peak, and enjoy cascading waterfalls.',
    imageUrl: '/ella.webp',
    highlights: [
      'Watch trains cross the iconic Nine Arches Bridge',
      'Hike Little Adam\'s Peak at sunrise or sunset',
      'Ride the scenic train from Kandy to Ella',
      'Visit the cascading Ravana Falls'
    ],
    bestTimeToVisit: 'December to March (Clear blue skies)',
    activities: [
      'Hiking and Trekking',
      'Tea Factory and Tasting Tours',
      'Ziplining at Flying Ravana',
      'Local Cooking Masterclasses'
    ],
    gallery: [
      '/ella.webp',
      '/classic sri lanka tour.webp',
      '/Grand Sri Lanka Tour.webp'
    ],
    tips: [
      'Book train tickets well in advance for the Kandy-Ella scenic route.',
      'Bring a light jacket as mountain temperatures drop significantly in the evening.',
      'Check local train schedules before walking on the Nine Arches Bridge.'
    ]
  },
  {
    id: 'galle',
    name: 'Galle',
    region: 'Southern Coast',
    tagline: 'Colonial Splendor and Ocean Breezes',
    description: 'A historic coastal jewel, Galle boasts a magnificent 17th-century Dutch Fort, a UNESCO World Heritage site. Wander through its narrow cobblestone streets, flanked by colonial villas, chic cafes, antique shops, and boutique hotels, all enclosed by massive stone ramparts looking out over the Indian Ocean.',
    imageUrl: '/galle.webp',
    highlights: [
      'Walk the ramparts of Galle Dutch Fort at sunset',
      'Photograph the iconic white Galle Lighthouse',
      'Browse local gem showrooms and art galleries',
      'Go whale watching in nearby Mirissa'
    ],
    bestTimeToVisit: 'November to April (Calm seas and sunny days)',
    activities: [
      'Heritage Walking Tours',
      'Surfing & Scuba Diving',
      'Madu River Boat Safaris',
      'Sea Turtle Hatchery Visits'
    ],
    gallery: [
      '/galle.webp',
      '/classic sri lanka tour.webp',
      '/Signature Sri Lanka Tour.webp'
    ],
    tips: [
      'Enjoy dinner or drinks inside the fort walls; the ambiance is magical after dark.',
      'Apply plenty of sunscreen as the fort walls reflect the intense coastal heat.',
      'Visit the local fish and spice markets outside the fort for an authentic local vibe.'
    ]
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Central Province',
    tagline: 'The Sacred Kingdom and Cultural Capital',
    description: 'Kandy, nestled in the green hills of central Sri Lanka, is the country\'s cultural and spiritual center. It houses the sacred Temple of the Tooth Relic, which contains a tooth of the Buddha, and showcases majestic Kandyan dances, botanical gardens, and the serene Kandy Lake.',
    imageUrl: '/sigiriya and kandy.jpg',
    highlights: [
      'Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa)',
      'Stroll through the Royal Botanical Gardens in Peradeniya',
      'Watch a traditional Kandyan dance performance',
      'Walk around the scenic Kandy Lake'
    ],
    bestTimeToVisit: 'January to April (Dry weather)',
    activities: [
      'Cultural & Temple Tours',
      'Nature walks in Udawatta Kele Sanctuary',
      'Spices & Tea Plantation Visits',
      'Handicraft and Souvenir Shopping'
    ],
    gallery: [
      '/sigiriya and kandy.jpg',
      '/classic sri lanka tour.webp',
      '/Signature Sri Lanka Tour.webp'
    ],
    tips: [
      'Dress respectfully when visiting temples (cover shoulders and knees, remove shoes).',
      'The Temple of the Tooth can be extremely crowded during the evening puja (prayers).',
      'If visiting in July/August, don\'t miss the famous Kandy Esala Perahera festival.'
    ]
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    region: 'Southeast Coast',
    tagline: 'Leopard Kingdom and Wilderness Wildlife',
    description: 'Yala National Park is Sri Lanka\'s most famous wildlife sanctuary. Bordering the Indian Ocean, it contains a variety of ecosystems including moist monsoon forests, dry monsoon forests, thorn forests, grasslands, and freshwater wetlands. It has one of the highest leopard densities in the world.',
    imageUrl: '/Gallery/Yala National Park Leopard.webp',
    highlights: [
      'Spot elusive Sri Lankan leopards in the wild',
      'Observe herds of wild Asian elephants and sloth bears',
      'See colorful tropical birdlife and mugger crocodiles',
      'Enjoy the spectacular wild coastal landscapes'
    ],
    bestTimeToVisit: 'February to June (Dry season, animals gather at waterholes)',
    activities: [
      '4x4 Jeep Wildlife Safaris',
      'Wildlife Photography',
      'Tented Safari Camping',
      'Sithulpawwa Ancient Temple Exploration'
    ],
    gallery: [
      '/elephant.jpg',
      '/Signature Sri Lanka Tour.webp',
      '/classic sri lanka tour.webp'
    ],
    tips: [
      'Book a morning (6 AM) or afternoon (2:30 PM) safari for the best chance of leopard sightings.',
      'Yala National Park Block 1 is usually closed for maintenance from early September to mid-October.',
      'Maintain complete silence inside the park and never feed or disturb the animals.'
    ]
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'Southern Coast',
    tagline: 'Golden Beaches, Surf Breaks & Whale Watching',
    description: 'Mirissa is a beautiful crescent-shaped beach on the southern coast of Sri Lanka. It combines a laid-back tropical vibe with excellent surfing, trendy beach bars, and scenic lookouts. It is most famous as a premier base for whale watching excursions in the Indian Ocean.',
    imageUrl: '/Gallery/Coconut Tree Hill Mirissa.webp',
    highlights: [
      'Take photos at the iconic dome-shaped Coconut Tree Hill',
      'Go on a morning blue whale watching boat safari',
      'Surf the beginner-friendly point breaks at Mirissa Bay',
      'Relax at Secret Beach and watch sunset over the ocean'
    ],
    bestTimeToVisit: 'November to April (Calm waters, whale season)',
    activities: [
      'Whale & Dolphin Watching',
      'Surfing & Paddleboarding',
      'Beachside Dining & Nightlife',
      'Snorkeling with Sea Turtles'
    ],
    gallery: [
      '/Gallery/Coconut Tree Hill Mirissa.webp',
      '/Gallery/Traditional Stilt Fishermen.jpg'
    ],
    tips: [
      'Visit Coconut Tree Hill at sunrise to avoid the crowds and heat.',
      'Make sure to book whale watching tours with operators who follow ethical guidelines (keeping safe distance).',
      'Keep an eye out for sea turtles swimming near the main bay reef.'
    ]
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    region: 'Northeast Coast',
    tagline: 'Deep Natural Harbors, Hindu Temples & Marine Parks',
    description: 'Trincomalee (Trinco) is a historic port city on the northeast coast of Sri Lanka. Renowned for its calm, shallow blue beaches like Nilaveli and Uppuveli, Trinco offers exceptional diving, snorkeling around Pigeon Island Marine National Park, whale watching, and ancient spiritual landmarks.',
    imageUrl: '/Trincomalee.jpg',
    highlights: [
      'Snorkel above pristine coral reefs at Pigeon Island',
      'Visit the colorful Koneswaram Hindu Temple on Swami Rock',
      'Relax on the powdery white sands of Nilaveli Beach',
      'Explore Fort Frederick built by the Portuguese in 1623'
    ],
    bestTimeToVisit: 'May to October (Best sea conditions for east coast)',
    activities: [
      'Pigeon Island Snorkeling & Diving',
      'Spiritual & Heritage Sightseeing',
      'Dolphin & Whale Watching',
      'Coastal Relaxation'
    ],
    gallery: [
      '/Trincomalee.jpg',
      '/Gallery/River Boating Adventure.jpg'
    ],
    tips: [
      'Visit Koneswaram Temple in the afternoon for beautiful ocean sunset views.',
      'Pigeon Island has a strict no-plastic and no-litter policy; follow park ranger instructions.',
      'Rent a boat to Pigeon Island early in the morning to beat the peak tourist hours.'
    ]
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    region: 'Cultural Triangle',
    tagline: 'The First Ancient Capital & Sacred Buddhist Sanctuary',
    description: 'Anuradhapura is the historic first ancient capital of Sri Lanka, carrying immense heritage, architectural, and archaeological value. As a UNESCO World Heritage site and the cradle of ancient Sri Lankan civilization, it is a deeply sacred sanctuary and the primary center of Buddhist pilgrimage. The sacred city is home to monumental stupas (dagobas) like Ruwanwelisaya, monastic ruins, and the sacred Jaya Sri Maha Bodhi tree, the oldest historically documented tree in the world.',
    imageUrl: '/Anuradhapura.webp',
    highlights: [
      'Pay respects at Jaya Sri Maha Bodhi, the sacred Bodhi tree',
      'Marvel at the colossal brick dome of Ruwanwelisaya Stupa',
      'Explore the historic monastery ruins and twin ponds (Kuttam Pokuna)',
      'See Jetavanarama, once one of the tallest structures in the ancient world'
    ],
    bestTimeToVisit: 'January to April or September to December',
    activities: [
      'Archaeological Ruins Tour',
      'Buddhist Pilgrimage Walk',
      'Exploring Ancient Irrigation Reservoirs',
      'Mihintale Sacred Mountain Day Climb'
    ],
    gallery: [
      '/Anuradhapura.webp',
      '/jayasri maha bodhi.jpg'
    ],
    tips: [
      'Dress modestly when visiting the ancient city ruins (shoulders and knees covered).',
      'You must remove footwear and hats before entering active temple yards; socks are recommended to protect feet from hot stone floors.',
      'Hire a licensed local guide at the ticketing office to explain the deep history of each site.'
    ]
  },
  {
    id: 'polonnaruwa',
    name: 'Polonnaruwa',
    region: 'Cultural Triangle',
    tagline: 'Medieval Citadel Ruins & Monumental Stone Sculptures',
    description: 'Polonnaruwa is the historic second ancient capital of Sri Lanka, representing a majestic medieval kingdom of immense architectural and historical value. This UNESCO World Heritage site is highly celebrated for its beautifully preserved ruins of royal palaces, council chambers, monastic complexes, and the monumental Gal Vihara—a sacred rock temple housing four colossal Buddha statues masterfully carved from a single granite cliff face.',
    imageUrl: '/Polonnaruwa.jpg',
    highlights: [
      'Admire the masterfully carved granite Buddha statues at Gal Vihara',
      'Explore the ancient Royal Palace complex of King Parakramabahu',
      'Wander through the beautifully designed Polonnaruwa Vatadage',
      'View the massive ancient reservoir Parakrama Samudra (Sea of Parakrama)'
    ],
    bestTimeToVisit: 'January to April or July to September',
    activities: [
      'Bicycle Ruins Exploration Tour',
      'Stone Sculpture Photography',
      'Visiting Archaeological Museum',
      'Scenic Reservoir Lakeside Walks'
    ],
    gallery: [
      '/Polonnaruwa.jpg',
      '/Gallery/Dambulla Golden Cave Temple.jpg'
    ],
    tips: [
      'The archaeological site is flat and compact, making bicycle rental the absolute best and most enjoyable way to explore.',
      'Wear light clothing but keep a wrap/sarong handy to cover up when stepping into sacred temple terraces.',
      'Bring plenty of water, as walking or cycling in the ruins can be very dehydrating.'
    ]
  }
];
