export type LocationPage = {
  slug: string;
  name: string;
  focusKeyword: string;
  title: string;
  meta: string;
  blurb: string;
  notes: string[];
  services: string[];
};

export const locations: LocationPage[] = [
  {
    slug: "ohare",
    name: "O'Hare International Airport (ORD)",
    focusKeyword: "O'Hare Sprinter transfer",
    title: "O'Hare Sprinter Transfer | Group Airport Transportation Chicago",
    meta: "O'Hare group airport transfers in Mercedes Sprinters, SUVs, and sedans. Live flight tracking from Elmwood Park base. Flat quoted pricing.",
    blurb:
      "From our Elmwood Park base — roughly seven miles from O'Hare — we specialize in group ORD transfers. Live flight tracking, meet-and-greet options, and luggage room for the whole party.",
    notes: [
      "Base proximity to ORD for reliable early and late flights",
      "Terminal-aware chauffeurs",
      "Group Sprinter capacity for 8–14 with bags",
    ],
    services: ["airport", "corporate", "group-charters"],
  },
  {
    slug: "midway",
    name: "Midway International Airport (MDW)",
    focusKeyword: "Midway group transportation",
    title: "Midway Airport Group Transportation | Sprinter & Black Car",
    meta: "Midway airport group transfers with Sprinters, SUVs, and sedans. Flight tracking and flat quoted Chicago pricing.",
    blurb:
      "Midway group transfers with the same standard as O'Hare: flight tracking, professional chauffeurs, and the right vehicle for headcount and luggage.",
    notes: [
      "Curbside or meet-and-greet options",
      "Ideal for groups splitting between MDW and city venues",
      "Flat all-in quotes",
    ],
    services: ["airport", "corporate", "group-charters"],
  },
  {
    slug: "downtown",
    name: "Downtown Chicago / The Loop",
    focusKeyword: "Downtown Chicago charter",
    title: "Downtown Chicago Group Transportation | Loop Sprinter Charters",
    meta: "Group transportation for Downtown Chicago and the Loop. Corporate, events, and nightlife charters with flat quoted pricing.",
    blurb:
      "Boardrooms, hotels, theaters, and venues across the Loop and River North. Keep executives and guests moving without parking or multi-car coordination.",
    notes: [
      "Corporate roadshow friendly",
      "Hotel and venue coordination",
      "Evening group nights out",
    ],
    services: ["corporate", "group-charters", "weddings", "hourly"],
  },
  {
    slug: "rosemont",
    name: "Rosemont",
    focusKeyword: "Rosemont group transportation",
    title: "Rosemont Group Transportation | Convention & Hotel Shuttles",
    meta: "Rosemont group transportation for conventions, hotels, and events near O'Hare. Sprinters and shuttle vans with flat quotes.",
    blurb:
      "Convention traffic, hotel blocks, and entertainment venues around Rosemont. Efficient shuttles and private Sprinter cabins for groups that need reliability near ORD.",
    notes: [
      "Strong for conference shuttle loops",
      "Close coordination with O'Hare arrivals",
      "Hotel block multi-trip days",
    ],
    services: ["airport", "corporate", "group-charters"],
  },
  {
    slug: "naperville",
    name: "Naperville",
    focusKeyword: "Naperville Sprinter charter",
    title: "Naperville Sprinter Charter | Group Transportation West Suburbs",
    meta: "Naperville Sprinter charters and group transportation for corporate, airport, and event travel across the western suburbs.",
    blurb:
      "Western suburb groups heading to O'Hare, downtown venues, or corporate campuses. Private cabin comfort without the multi-car scramble.",
    notes: ["Airport runs to ORD/MDW", "Corporate campus moves", "Event and wedding support"],
    services: ["airport", "corporate", "weddings", "group-charters"],
  },
  {
    slug: "schaumburg",
    name: "Schaumburg",
    focusKeyword: "Schaumburg group transportation",
    title: "Schaumburg Group Transportation | Corporate & Airport Charters",
    meta: "Schaumburg group transportation for corporate teams, airport transfers, and events. Flat quoted Sprinter and SUV service.",
    blurb:
      "Corporate campuses and northwest suburban groups benefit from a single professional coach for airport, downtown, and multi-stop days.",
    notes: ["Corporate-friendly logistics", "ORD access", "Event group moves"],
    services: ["corporate", "airport", "group-charters"],
  },
  {
    slug: "oak-brook",
    name: "Oak Brook",
    focusKeyword: "Oak Brook charter",
    title: "Oak Brook Luxury Charter | Group & Executive Transportation",
    meta: "Oak Brook executive and group transportation. Sedans, SUVs, and Sprinters for corporate, airport, and event travel.",
    blurb:
      "Executive campuses and hospitality venues around Oak Brook — discreet sedans for VIPs and Sprinters when the whole team rides together.",
    notes: ["Executive black car options", "Group Sprinter capacity", "Airport connectivity"],
    services: ["corporate", "airport", "hourly"],
  },
  {
    slug: "evanston",
    name: "Evanston",
    focusKeyword: "Evanston group transportation",
    title: "Evanston Group Transportation | Campus, Events & Airport",
    meta: "Evanston group transportation for campus events, airport runs, and celebrations. Professional Sprinter and SUV charters.",
    blurb:
      "North Shore groups, campus events, and airport connections with professional chauffeurs and flat quoted pricing.",
    notes: ["Campus and event friendly", "Airport group transfers", "Celebration nights out"],
    services: ["group-charters", "airport", "weddings"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
