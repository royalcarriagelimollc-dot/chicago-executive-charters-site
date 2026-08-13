export type Vehicle = {
  slug: string;
  name: string;
  shortName: string;
  focusKeyword: string;
  title: string;
  meta: string;
  capacity: string;
  capacityNum: number;
  tagline: string;
  description: string;
  bestFor: string[];
  features: string[];
  includes: string[];
  faq: { q: string; a: string }[];
  accent: string;
  category: "sedan" | "suv" | "sprinter" | "limo" | "party" | "shuttle";
  flagship?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    shortName: "Sedan",
    focusKeyword: "Chicago executive sedan",
    title: "Chicago Executive Sedan | Black Car Service & Airport Transfers",
    meta: "Discreet Chicago executive sedan and black car service. Professional chauffeurs, flat quoted pricing, flight tracking for O'Hare & Midway.",
    capacity: "1–3 passengers",
    capacityNum: 3,
    tagline: "Discreet, refined black car service",
    description:
      "Our executive sedans deliver quiet luxury for solo travelers, dual executive movements, and VIP airport transfers across Chicago. Premium leather, a professional chauffeur, and real-time flight tracking keep every trip precise and discreet.",
    bestFor: [
      "Executive airport transfers (O'Hare & Midway)",
      "Corporate roadshows and client meetings",
      "Discreet VIP movements",
      "Solo or dual passenger travel",
    ],
    features: [
      "Premium leather seating",
      "Quiet professional cabin",
      "Climate control",
      "Phone chargers & connectivity",
      "Formal-attire chauffeur",
      "Real-time flight tracking on airport jobs",
    ],
    includes: [
      "Professional chauffeur",
      "Flat all-in quote",
      "Door-to-door service",
      "Meet & greet available",
    ],
    faq: [
      {
        q: "How many passengers fit in an executive sedan?",
        a: "Comfortably 1–3 passengers with light luggage. For more people or heavy bags, we recommend a Luxury SUV or Sprinter.",
      },
      {
        q: "Do you track flights for airport sedan transfers?",
        a: "Yes. We monitor arrivals in real time and adjust pickup for delays at O'Hare and Midway.",
      },
    ],
    accent: "from-zinc-700 to-zinc-900",
    category: "sedan",
  },
  {
    slug: "luxury-suv",
    name: "Luxury SUV",
    shortName: "SUV",
    focusKeyword: "Chicago luxury SUV",
    title: "Chicago Luxury SUV | Escalade-Style Group Transport",
    meta: "Spacious Chicago luxury SUV service for up to 6 passengers. Ideal for families, small executive groups, and airport transfers with luggage.",
    capacity: "Up to 6 passengers",
    capacityNum: 6,
    tagline: "More space. More presence. Same standard.",
    description:
      "Our luxury SUVs (Escalade-style) give small groups the room and comfort they need without moving up to a Sprinter. Ideal when luggage, presence, and comfort all matter.",
    bestFor: [
      "Small executive or family groups",
      "Airport transfers with significant luggage",
      "Client entertainment",
      "When you want more room than a sedan",
    ],
    features: [
      "Premium leather seating",
      "Generous luggage capacity",
      "Tri-zone climate control",
      "High seating position",
      "Professional chauffeur",
      "Flight tracking available",
    ],
    includes: [
      "Professional chauffeur",
      "Flat quoted pricing",
      "Luggage assistance",
      "24/7 dispatch support",
    ],
    faq: [
      {
        q: "How many passengers fit in the luxury SUV?",
        a: "Up to 6 passengers depending on luggage. For 7+ we typically recommend a Mercedes Sprinter.",
      },
    ],
    accent: "from-neutral-600 to-neutral-900",
    category: "suv",
  },
  {
    slug: "mercedes-sprinter",
    name: "Mercedes-Benz Sprinter",
    shortName: "Sprinter",
    focusKeyword: "Chicago Sprinter charter",
    title: "Chicago Sprinter Charter | 12 & 14 Passenger Mercedes-Benz",
    meta: "Chicago Mercedes Sprinter charter for groups of 8–14. Executive captain's chairs or Extended Lounge. Flat quoted pricing, professional chauffeurs.",
    capacity: "8–14 passengers",
    capacityNum: 14,
    tagline: "The private cabin that keeps the whole group together",
    description:
      "The heart of our fleet. Two Mercedes-Benz Sprinter configurations — Executive (up to 12 with captain's chairs) and Extended Lounge (up to 14 with lounge seating). Ambient lighting, USB power, dual-zone climate, and dedicated luggage room. Detailed before every charter.",
    bestFor: [
      "Corporate roadshows and multi-stop days",
      "O'Hare & Midway group airport transfers",
      "Wedding parties and celebrations",
      "Nights out, concerts, and sports",
      "Any group of 8–14 that should ride together",
    ],
    features: [
      "Executive: captain's chairs up to 12",
      "Extended Lounge: lounge seating up to 14",
      "Ambient LED lighting",
      "USB & 12V power at every seat zone",
      "Premium audio system",
      "Dual-zone climate control",
      "Dedicated luggage room",
      "Pre-trip detailing to showroom standard",
    ],
    includes: [
      "Professional chauffeur",
      "Flat all-in quote",
      "Live flight tracking on airport runs",
      "Same standard of preparation every trip",
    ],
    faq: [
      {
        q: "How many passengers fit in a Sprinter charter?",
        a: "Executive Sprinter seats up to 12 in captain's chairs. Extended Sprinter Lounge carries up to 14 with lounge seating and luggage room.",
      },
      {
        q: "Can one Sprinter handle a full airport group with bags?",
        a: "Yes. That is the primary advantage — one vehicle instead of multiple cars, with proper luggage capacity behind the rear seats.",
      },
      {
        q: "Which Sprinter should I book?",
        a: "Up to 12 and a quieter productive cabin → Executive. 12–14 or a more social ride → Extended Lounge. Unsure? Tell dispatch headcount, route, and vibe.",
      },
    ],
    accent: "from-amber-800/40 to-zinc-950",
    category: "sprinter",
    flagship: true,
  },
  {
    slug: "stretch-limousine",
    name: "Stretch Limousine",
    shortName: "Stretch",
    focusKeyword: "Chicago stretch limousine",
    title: "Chicago Stretch Limousine | Wedding & Special Occasion Limos",
    meta: "Classic Chicago stretch limousine for weddings, proms, and celebrations. 8–10 passengers, premium lighting, sound system, professional chauffeur.",
    capacity: "8–10 passengers",
    capacityNum: 10,
    tagline: "The classic celebration vehicle",
    description:
      "Our stretch limousines deliver the traditional limousine experience for weddings, proms, anniversaries, and special nights out. Fiber-optic lighting, premium sound, and a celebratory atmosphere — with a professional chauffeur coordinating every stop.",
    bestFor: [
      "Wedding party transfers",
      "Proms and formals",
      "Anniversaries and milestone celebrations",
      "Special night-out arrivals",
    ],
    features: [
      "Wrap-around premium leather seating",
      "Fiber-optic and ambient lighting",
      "High-quality sound system",
      "Privacy partition",
      "Spacious cabin for photos and toasts",
      "Professional chauffeur in formal attire",
    ],
    includes: [
      "Professional chauffeur",
      "Flat quoted pricing",
      "Coordination with planners on request",
      "Climate-controlled cabin",
    ],
    faq: [
      {
        q: "How many people fit in a stretch limousine?",
        a: "Typically 8–10 passengers depending on configuration and attire. Larger wedding guest groups often pair a stretch for the bridal party with Sprinters for guests.",
      },
      {
        q: "Do you work with wedding planners?",
        a: "Yes. We coordinate timelines, venues, and multi-vehicle logistics so the stretch limo works seamlessly with guest shuttles.",
      },
    ],
    accent: "from-stone-700 to-black",
    category: "limo",
  },
  {
    slug: "party-bus",
    name: "Party Bus",
    shortName: "Party Bus",
    focusKeyword: "Chicago party bus rental",
    title: "Chicago Party Bus Rental | 18–40 Passenger Group Buses",
    meta: "Chicago party bus rental for large groups. 18–40 passengers, club lighting, premium sound, professional chauffeur. Nightlife, weddings, celebrations.",
    capacity: "18–40 passengers",
    capacityNum: 40,
    tagline: "Big group. Big energy. Professional execution.",
    description:
      "Our party buses handle large celebrations, nightlife, bachelor and bachelorette parties, and major events with style and reliability. Club lighting, powerful sound, and always a professional chauffeur — never an unsupervised rental.",
    bestFor: [
      "Large wedding guest groups",
      "Bachelor and bachelorette parties",
      "Nightlife and bar crawls",
      "Birthday celebrations",
      "Sports and concert groups",
    ],
    features: [
      "Club-style LED lighting",
      "Powerful sound system",
      "Open lounge and dance areas",
      "Multiple seating zones",
      "Climate controlled",
      "Professional chauffeur on every charter",
    ],
    includes: [
      "Professional chauffeur",
      "Flat quoted pricing",
      "Pre-trip vehicle prep",
      "24/7 dispatch",
    ],
    faq: [
      {
        q: "What sizes of party bus do you offer?",
        a: "Options typically range from approximately 18–20, 25–30, up to around 40 passengers. Tell us headcount and occasion and we will match the right coach.",
      },
      {
        q: "Is a chauffeur included?",
        a: "Yes. Every party bus charter includes a professional chauffeur. We focus on safe, well-managed group transportation.",
      },
    ],
    accent: "from-violet-950/50 to-zinc-950",
    category: "party",
  },
  {
    slug: "shuttle-van",
    name: "Luxury Shuttle Van",
    shortName: "Shuttle",
    focusKeyword: "Chicago shuttle van",
    title: "Chicago Luxury Shuttle Van | Conference & Hotel Loops",
    meta: "Professional Chicago shuttle van service for conferences, hotel blocks, employee transport, and repeating loops. Flat quoted pricing.",
    capacity: "Variable / high-volume",
    capacityNum: 15,
    tagline: "Reliable loops. Professional execution.",
    description:
      "The efficient workhorse for repeating loops, hotel blocks, conference shuttles, and higher-volume corporate or school movements. Same vetted chauffeurs and maintenance standards as the rest of the fleet.",
    bestFor: [
      "Conference and hotel shuttle loops",
      "Employee and campus transport",
      "High-frequency event runs",
      "School and sports team movements",
    ],
    features: [
      "Efficient loading and capacity",
      "Climate control",
      "Professional chauffeurs",
      "Consistent vehicle standards",
      "Ideal for multi-trip days",
    ],
    includes: [
      "Professional chauffeur",
      "Flat quoted pricing",
      "Dispatch coordination",
      "Reliable on-time performance",
    ],
    faq: [
      {
        q: "When should I choose a shuttle van over a Sprinter?",
        a: "When you need high-frequency loops, quick loading, or volume over lounge-style seating — conferences, hotel blocks, and repeating corporate routes.",
      },
    ],
    accent: "from-slate-700 to-zinc-950",
    category: "shuttle",
  },
];

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}
