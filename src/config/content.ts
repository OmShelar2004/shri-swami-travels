export interface ItineraryDay {
  day: string;
  title: string;
  desc: string;
}

export interface TourPackage {
  slug: string;
  name: string;
  tag: string;
  category: "Hill Stations" | "Beaches" | "Pilgrimage" | "South India" | "Daily Tours";
  summary: string;
  duration: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
}

export interface VehicleDetail {
  name: string;
  category: "Car / SUV" | "Tempo Traveller" | "Luxury Coach";
  capacity: string;
  idealFor: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TravelService {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface DestinationSlide {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export const services: TravelService[] = [
  {
    title: "Tour Packages",
    description: "Handpicked holidays to India’s popular hill stations, valleys, and coastlines.",
    icon: "mountain",
    href: "/packages",
  },
  {
    title: "Vehicle Rentals",
    description: "Well-maintained Innova Crysta, Tempo Travellers, and luxury coaches for all groups.",
    icon: "bus",
    href: "/fleet",
  },
  {
    title: "Pilgrimage Tours",
    description: "Reverent temple journeys including Ashtvinayak and Tirupati paced for families.",
    icon: "temple",
    href: "/packages",
  },
  {
    title: "Daily Sightseeing",
    description: "Comfortable city tours and one-day getaways with punctual doorstep pickups.",
    icon: "compass",
    href: "/packages/daily-tour-package",
  },
];

export const packages: TourPackage[] = [
  {
    slug: "daily-tour-package",
    name: "Daily Tour Package",
    tag: "Daily sightseeing",
    category: "Daily Tours",
    summary: "Flexible, hassle-free daily sightseeing and day outings planned around your schedule and preferred pickup points.",
    duration: "Timings on request",
    image: "/images/destinations/daily-tours-fort.png",
    imageAlt: "Saffron flag waving over a historic mountain hill fort in Maharashtra during a daily tour",
    highlights: ["Doorstep pickup & drop points across Mumbai/Pune", "Customizable full-day or half-day sightseeing", "Dedicated sanitized vehicle and experienced local driver"],
    itinerary: [
      {
        day: "Morning",
        title: "Punctual Pickup & First Landmarks",
        desc: "Morning pickup from your residence, hotel, or station followed by travel to key local attractions and heritage sights.",
      },
      {
        day: "Afternoon",
        title: "Sightseeing & Leisure Halts",
        desc: "Comfortable halt for lunch at recommended family restaurants followed by continued sightseeing at scenic points.",
      },
      {
        day: "Evening",
        title: "Sunset View & Return Drop",
        desc: "Evening stroll at landmark viewpoints or markets, followed by safe drop-off at your starting location.",
      },
    ],
    inclusions: [
      "Dedicated AC vehicle for the scheduled day",
      "Experienced local driver & fuel charges",
      "Doorstep pickup & drop coordination",
      "Transparent toll and parking management",
    ],
  },
  {
    slug: "mahabaleshwar",
    name: "Mahabaleshwar",
    tag: "Hill getaway",
    category: "Hill Stations",
    summary: "Arthur's Seat, Venna Lake, Panchgani viewpoints and strawberry farms in the cool Western Ghats.",
    duration: "2 nights (promotional reference)",
    image: "/images/destinations/mahabaleshwar.png",
    imageAlt: "Scenic winding road through lush green Western Ghats mountains near Mahabaleshwar",
    highlights: ["Arthur's Seat & Kate's Point viewpoints", "Venna Lake boating & horse riding", "Panchgani Table Land & Mapro Garden"],
    itinerary: [
      {
        day: "Day 1",
        title: "Scenic Ghat Drive & Arrival",
        desc: "Scenic drive from Mumbai/Pune through Wai ghats to Mahabaleshwar. Hotel check-in, afternoon relaxation, and evening at Venna Lake.",
      },
      {
        day: "Day 2",
        title: "Viewpoints & Panchgani Exploration",
        desc: "Visit Old Mahabaleshwar temples, Arthur's Seat, Kate's Point, Panchgani Table Land, and famous fresh strawberry farms.",
      },
      {
        day: "Day 3",
        title: "Pratapgad Visit & Return Journey",
        desc: "Optional morning excursion to historic Pratapgad Fort, followed by comfortable return journey with drop-off.",
      },
    ],
    inclusions: [
      "Roundtrip sanitized vehicle transfer from Mumbai/Pune",
      "All interstate tolls, ghat permits & parking fees",
      "Dedicated driver allowance",
      "Assistance with family-friendly hotel bookings",
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    tag: "Coastal escape",
    category: "Beaches",
    summary: "Sun-drenched beaches, scenic coastal drives, heritage forts, and relaxed seaside stays.",
    duration: "Itinerary on request",
    image: "/images/destinations/goa-beach.png",
    imageAlt: "Golden sand beach lined with tropical palm trees in Goa at sunset",
    highlights: ["North Goa beaches & historic Fort Aguada", "South Goa heritage churches & Old Goa monuments", "Sunset cruise along Mandovi River"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Coastal Welcome",
        desc: "Arrival transfer to your hotel or resort. Unwind on the nearby beach and enjoy sunset dining.",
      },
      {
        day: "Day 2",
        title: "North Goa Sightseeing",
        desc: "Explore historic Fort Aguada, Calangute, Baga beach, and vibrant local handicraft markets.",
      },
      {
        day: "Day 3",
        title: "South Goa Heritage & Temples",
        desc: "Visit Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and evening Mandovi River boat cruise.",
      },
      {
        day: "Day 4",
        title: "Leisure & Departure Transfer",
        desc: "Morning at leisure for beach walks or spice plantation visits before scheduled departure transfer.",
      },
    ],
    inclusions: [
      "AC vehicle for all airport/station transfers and scheduled tours",
      "Professional driver with local route knowledge",
      "All vehicle fuel, state road permits, and tolls",
      "Flexible schedule tailored to your family's pace",
    ],
  },
  {
    slug: "shimla-kullu-manali",
    name: "Shimla Kullu Manali",
    tag: "Mountain holiday",
    category: "Hill Stations",
    summary: "A classic Himalayan journey through pine-covered slopes, mountain valleys, and snow points.",
    duration: "Itinerary on request",
    image: "/images/destinations/shimla-manali.png",
    imageAlt: "Snow-covered Himalayan town in Shimla featuring the historic Christ Church on Mall Road",
    highlights: ["Shimla Mall Road, Ridge & Christ Church", "Solang Valley & Rohtang snow route", "Kullu river valley & local wool markets"],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi/Chandigarh to Shimla",
        desc: "Scenic uphill drive through the Shivalik ranges to Shimla. Evening stroll on Mall Road and the historic Ridge.",
      },
      {
        day: "Day 2",
        title: "Kufri & Green Valley Excursion",
        desc: "Visit Kufri amusement park, Himalayan Nature Park, and panoramic viewpoints overlooking snow peaks.",
      },
      {
        day: "Day 3",
        title: "Scenic Transfer to Manali via Kullu",
        desc: "Drive alongside the Beas River through Kullu Valley. Stop for river rafting and authentic Kullu shawl weaving centers.",
      },
      {
        day: "Day 4",
        title: "Solang Valley & Local Manali",
        desc: "Full-day excursion to Solang Valley for snow activities and paragliding, followed by Hadimba Temple and Vashisht hot springs.",
      },
      {
        day: "Day 5",
        title: "Return Transfer",
        desc: "Leisurely departure transfer towards Chandigarh/Delhi with unforgettable mountain memories.",
      },
    ],
    inclusions: [
      "Dedicated private tourist vehicle for the complete Himalayan circuit",
      "Hilly-terrain experienced driver familiar with mountain roads",
      "All interstate border taxes, toll gates, and parking charges",
      "Assistance with hotel halts and sightseeing permits",
    ],
  },
  {
    slug: "exotic-kashmir",
    name: "Exotic Kashmir",
    tag: "Valley discovery",
    category: "Hill Stations",
    summary: "Dal Lake Shikara rides, Gulmarg gondolas, and the lush pine meadows of Pahalgam.",
    duration: "5 nights (promotional reference)",
    image: "/images/destinations/kashmir-shikara.png",
    imageAlt: "Traditional Shikara boat floating on Dal Lake with snow-capped Himalayan peaks in Kashmir",
    highlights: ["Dal Lake Shikara ride & houseboat stay", "Gulmarg Gondola cable car & snow peaks", "Pahalgam Betaab Valley & Lidder River"],
    itinerary: [
      {
        day: "Day 1",
        title: "Srinagar Arrival & Dal Lake Shikara",
        desc: "Warm welcome at Srinagar airport, transfer to luxury houseboat or hotel. Evening Shikara ride across Dal Lake and floating gardens.",
      },
      {
        day: "Day 2",
        title: "Gulmarg Day Trip",
        desc: "Day excursion to the meadow of flowers, Gulmarg. Experience the world-famous Gondola ride up to snow level.",
      },
      {
        day: "Day 3",
        title: "Pahalgam - Valley of Shepherds",
        desc: "Drive past saffron fields of Pampore to Pahalgam along the roaring Lidder River. Check-in and evening walk in pine forests.",
      },
      {
        day: "Day 4",
        title: "Aru & Betaab Valleys",
        desc: "Visit picturesque Aru Valley, Betaab Valley, and Chandanwari before returning to Srinagar.",
      },
      {
        day: "Day 5",
        title: "Mughal Gardens & Local Heritage",
        desc: "Explore Shalimar Bagh, Nishat Bagh, and Hazratbal Shrine. Shopping for authentic dry fruits and Kashmiri shawls.",
      },
    ],
    inclusions: [
      "Dedicated sanitized tourist vehicle for all transfers and excursions",
      "Experienced local driver for safe valley navigation",
      "Traditional Dal Lake Shikara ride arrangement",
      "All highway tolls, airport parking, and driver allowances",
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    tag: "South India",
    category: "South India",
    summary: "A rejuvenating escape across Munnar tea plantations, tranquil Alleppey backwaters, and lush tropical greenery.",
    duration: "Itinerary on request",
    image: "/images/destinations/kerala-backwaters.png",
    imageAlt: "Traditional Kerala houseboat cruising along peaceful palm-fringed backwaters with golden water reflections",
    highlights: ["Munnar misty tea gardens & Mattupetty Dam", "Alleppey backwaters & houseboat day cruise", "Periyar wildlife & spice plantation tour"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kochi to Munnar Tea Country",
        desc: "Arrival at Kochi and drive past Cheeyappara waterfalls to misty Munnar. Check-in and evening at leisure amidst tea gardens.",
      },
      {
        day: "Day 2",
        title: "Munnar Sightseeing",
        desc: "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and Tata Tea Museum.",
      },
      {
        day: "Day 3",
        title: "Munnar to Thekkady (Periyar)",
        desc: "Scenic drive through Western Ghats to Thekkady. Afternoon spice plantation tour and Periyar Lake boat safari.",
      },
      {
        day: "Day 4",
        title: "Thekkady to Alleppey Backwaters",
        desc: "Transfer to Alleppey. Board traditional houseboat for a serene cruise through paddy fields and palm canals.",
      },
      {
        day: "Day 5",
        title: "Kochi Heritage & Departure",
        desc: "Transfer to Kochi. Visit Fort Kochi Chinese fishing nets and Mattancherry before scheduled airport/station drop.",
      },
    ],
    inclusions: [
      "AC private vehicle for the full Kerala circuit",
      "Professional polite driver with South India route mastery",
      "All interstate permits, toll taxes, and parking fees",
      "Assistance with authentic backwater houseboat bookings",
    ],
  },
  {
    slug: "ashtavinayak-darshan",
    name: "Ashtvinayak Darshan",
    tag: "Pilgrimage",
    category: "Pilgrimage",
    summary: "A sacred journey across the eight revered Ganesha temples of Maharashtra planned with reverence and comfort.",
    duration: "Route on request",
    image: "/images/destinations/ashtavinayak-temple.png",
    imageAlt: "Ornate traditional temple gateway and sanctum during sacred Ashtvinayak Darshan pilgrimage",
    highlights: ["Complete 8-temple circuit coordination across Maharashtra", "Comfortable night halts with clean family accommodations", "Paced respectfully for senior citizen comfort"],
    itinerary: [
      {
        day: "Day 1",
        title: "First Temples Circuit",
        desc: "Early departure from Mumbai/Thane/Pune. Darshan at Varadvinayak (Mahad), Ballaleshwar (Pali), and Mahaganapati (Ranjangaon). Overnight halt.",
      },
      {
        day: "Day 2",
        title: "Central Maharashtra Temples",
        desc: "Darshan at Vighnahar (Ozar), Girijatmaj (Lenyadri caves), and Chintamani (Theur). Evening Aarti and restful overnight halt.",
      },
      {
        day: "Day 3",
        title: "Final Temples & Holy Completion",
        desc: "Darshan at Siddhivinayak (Siddhatek) and Mayureshwar (Morgaon), completing the revered 8-temple pradakshina before evening return drop.",
      },
    ],
    inclusions: [
      "Dedicated AC vehicle (Innova Crysta, Tempo Traveller, or Bus)",
      "Experienced driver well-versed with temple rituals and routes",
      "Punctual halts and senior-friendly rest breaks",
      "All state highway tolls, temple parking fees, and driver charges",
    ],
  },
  {
    slug: "mumbai-darshan",
    name: "Mumbai Darshan",
    tag: "Sightseeing",
    category: "Daily Tours",
    summary: "Experience the vibrant heart of Mumbai: Gateway of India, Marine Drive, Siddhivinayak Temple, and Sea Link.",
    duration: "Timings on request",
    image: "/images/destinations/mumbai-gateway.png",
    imageAlt: "Iconic Gateway of India and Taj Mahal Palace hotel on the Mumbai harbour waterfront at dusk",
    highlights: ["Gateway of India & Colaba heritage precinct", "Marine Drive & Bandra-Worli Sea Link scenic drive", "Siddhivinayak Temple & Mahalakshmi Temple darshan"],
    itinerary: [
      {
        day: "Morning",
        title: "South Mumbai Heritage Precinct",
        desc: "Pickup from your hotel/home. Visit Gateway of India, Taj Mahal Palace, Marine Drive Queen's Necklace, and CSMT heritage building.",
      },
      {
        day: "Afternoon",
        title: "Sacred Landmarks & Cultural Stops",
        desc: "Darshan at historic Siddhivinayak Temple and Mahalakshmi Temple, followed by lunch at recommended Mumbai eateries.",
      },
      {
        day: "Evening",
        title: "Sea Link Drive & Juhu Sunset",
        desc: "Drive over Bandra-Worli Sea Link, visit Bandra Bandstand and enjoy evening beach walk at Juhu Beach before return drop.",
      },
    ],
    inclusions: [
      "Clean AC vehicle dedicated to your family or group",
      "Doorstep pickup and return drop across Mumbai & Thane",
      "Bandra-Worli Sea Link toll and all city parking charges",
      "Knowledgeable local driver assisting with optimal route timing",
    ],
  },
  {
    slug: "tirupati-balaji-darshan",
    name: "Tirupati Balaji Darshan",
    tag: "Pilgrimage",
    category: "Pilgrimage",
    summary: "Dedicated pilgrimage travel arrangements to Lord Venkateswara Temple at Tirumala for family and devotee groups.",
    duration: "Itinerary on request",
    image: "/images/destinations/tirupati-balaji.png",
    imageAlt: "Golden temple gopuram tower of Tirumala Venkateswara Temple nestled among lush green holy hills in Tirupati",
    highlights: ["Coordinated transit to Tirumala hills and sacred sanctum", "Assistance for senior citizens and family devotee groups", "Local temple circuit including Padmavathi Temple"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Tirupati Foothills",
        desc: "Pickup from airport/railway station, hotel check-in at Tirupati. Visit Sri Padmavathi Ammavari Temple (Tiruchanur) in the evening.",
      },
      {
        day: "Day 2",
        title: "Tirumala Balaji Darshan",
        desc: "Morning ascent up the holy Seven Hills to Tirumala. Sri Venkateswara Swamy darshan, Laddu Prasadam collection, and return to foothills.",
      },
      {
        day: "Day 3",
        title: "Local Pilgrimage & Departure",
        desc: "Visit Sri Govindaraja Swamy Temple and Kapila Theertham before scheduled airport or railway station drop-off.",
      },
    ],
    inclusions: [
      "Private AC vehicle for all transfers and Tirumala hill transits",
      "Experienced driver with hill-permit clearance and route knowledge",
      "Assistance with reporting time coordination for darshan slots",
      "All toll taxes, parking permits, and driver allowances",
    ],
  },
];

/** The curated order used by the immersive destinations experience. */
const destinationSlideSlugs = [
  "mahabaleshwar",
  "goa",
  "shimla-kullu-manali",
  "exotic-kashmir",
  "kerala",
  "ashtavinayak-darshan",
  "mumbai-darshan",
  "tirupati-balaji-darshan",
] as const;

export const destinationSlides: DestinationSlide[] = destinationSlideSlugs.map((slug) => {
  const tour = packages.find((item) => item.slug === slug);

  if (!tour) {
    throw new Error(`Destination slide is missing a package: ${slug}`);
  }

  return {
    slug: tour.slug,
    name: tour.name === "Exotic Kashmir" ? "Kashmir" : tour.name,
    eyebrow: tour.tag,
    summary: tour.summary,
    image: tour.image,
    imageAlt: tour.imageAlt,
  };
});

export const vehicleDetails: VehicleDetail[] = [
  {
    name: "Innova Crysta",
    category: "Car / SUV",
    capacity: "6 to 7 Passengers",
    idealFor: "Family getaways, executive travel & airport transfers",
    description: "Premium comfort, dual-zone AC, plush captain seats, and ample luggage space for small family groups.",
    image: "/images/vehicles/innova-crysta.png",
    imageAlt: "White Toyota Innova Crysta parked at a scenic mountain overlook facing front-left",
  },
  {
    name: "17-seater Tempo Traveller",
    category: "Tempo Traveller",
    capacity: "17 Passengers",
    idealFor: "Extended families, pilgrimage groups & sightseeing",
    description: "Spacious pushback seats, individual AC vents, wide windows, and good headroom for relaxed touring.",
    image: "/images/vehicles/tempo-traveller-17.png",
    imageAlt: "17-seater Tempo Traveller van parked along a scenic road at sunset facing front-left",
  },
  {
    name: "20-seater Tempo Traveller",
    category: "Tempo Traveller",
    capacity: "20 Passengers",
    idealFor: "Group outings, religious yatras & weekend tours",
    description: "Balanced group comfort with generous legroom, luggage carrier, and smooth highway ride.",
    image: "/images/vehicles/tempo-traveller-20.png",
    imageAlt: "20-seater Tempo Traveller tourist coach driving on a mountain highway at sunset facing front-left",
  },
  {
    name: "26-seater Tempo Traveller",
    category: "Tempo Traveller",
    capacity: "26 Passengers",
    idealFor: "Medium tour groups, wedding guests & office teams",
    description: "High-capacity modified traveller offering maximum passenger room with air-conditioned comfort.",
    image: "/images/vehicles/tempo-traveller-26.png",
    imageAlt: "Spacious 26-seater Force Tempo Traveller bus during golden hour facing front-left",
  },
  {
    name: "35-seater bus",
    category: "Luxury Coach",
    capacity: "35 Passengers",
    idealFor: "Corporate retreats, school tours & large family trips",
    description: "Comfortable 2x2 seating coach with underfloor luggage compartments and smooth air suspension.",
    image: "/images/vehicles/bus-35-seater.png",
    imageAlt: "Deluxe 35-seater tourist coach bus parked at sunset facing front-left",
  },
  {
    name: "45-seater bus",
    category: "Luxury Coach",
    capacity: "45 Passengers",
    idealFor: "Large pilgrimage groups, wedding parties & long tours",
    description: "Full-sized tourist bus with reclining seats, audio system, large tinted windows, and dedicated luggage bays.",
    image: "/images/vehicles/bus-45-seater.png",
    imageAlt: "Full-sized 45-seater luxury tourist bus against a golden evening sky facing front-left",
  },
  {
    name: "49-seater bus",
    category: "Luxury Coach",
    capacity: "49 Passengers",
    idealFor: "Interstate group tours, university groups & conventions",
    description: "Maximum-capacity deluxe bus designed for long-distance group excursions and safe travel.",
    image: "/images/vehicles/bus-49-seater.png",
    imageAlt: "Premium 49-seater white tourist coach bus on a highway during golden sunset facing front-left",
  },
];

export const vehicles: string[] = vehicleDetails.map((v) => v.name);
