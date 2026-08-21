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
    imageUrl: '/elephant.jpg',
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
  }
];
