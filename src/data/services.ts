export type Service = {
  slug: string;
  name: string;
  focusKeyword: string;
  title: string;
  meta: string;
  tagline: string;
  description: string;
  highlights: string[];
  recommendedVehicles: string[];
  process: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "airport",
    name: "Airport Transfers",
    focusKeyword: "O'Hare Sprinter transfer",
    title: "O'Hare & Midway Group Airport Transfers | Chicago Sprinter",
    meta: "Group airport transfers to O'Hare and Midway. Sprinters, SUVs, and sedans with live flight tracking, meet-and-greet, and flat quoted pricing.",
    tagline: "Curb to gate. Group and luggage handled.",
    description:
      "O'Hare and Midway are core to what we do. From our Elmwood Park base — about seven miles from O'Hare — we run group airport transfers with live flight tracking, flexible meet points, and room for the whole party plus bags. One coach instead of a convoy of rideshares.",
    highlights: [
      "Live flight tracking and delay buffers",
      "Meet-and-greet or curbside options",
      "Sedan, SUV, Sprinter, or shuttle matched to headcount",
      "Flat all-in quotes — no airport surprise fees",
      "Early mornings and red-eyes covered 24/7",
    ],
    recommendedVehicles: ["executive-sedan", "luxury-suv", "mercedes-sprinter", "shuttle-van"],
    process: [
      { step: "Share flight details", detail: "Airline, flight number, terminals, and headcount." },
      { step: "Get a flat quote", detail: "All-in rate confirmed before we roll." },
      { step: "We track the flight", detail: "Dispatch monitors ETA and adjusts pickup." },
      { step: "Arrive together", detail: "Your chauffeur meets the group and handles bags." },
    ],
    faq: [
      {
        q: "Do you cover both O'Hare and Midway?",
        a: "Yes. Both airports are core service areas with the same flight-tracking standard.",
      },
      {
        q: "Can one Sprinter replace multiple Ubers for an airport group?",
        a: "Yes. An 8–14 person group with luggage typically rides more cleanly in one Sprinter than in several cars.",
      },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate & Executive",
    focusKeyword: "Corporate transportation Chicago",
    title: "Corporate Transportation Chicago | Executive Sprinter & Black Car",
    meta: "Corporate transportation Chicago for roadshows, client moves, and executive groups. Flat quoted Sprinters and black cars with professional chauffeurs.",
    tagline: "A moving boardroom for the way Chicago does business.",
    description:
      "Board members, clients, and teams moved on time with the discretion business demands. Roadshows, conventions, multi-stop days, and recurring executive transport — quoted flat, billed clean, easy to expense.",
    highlights: [
      "Roadshow and multi-stop logistics",
      "Quiet cabins with power for calls and laptops",
      "Discretion-first chauffeurs",
      "Standing accounts welcome",
      "McCormick Place, Loop, and corporate campuses covered",
    ],
    recommendedVehicles: ["executive-sedan", "luxury-suv", "mercedes-sprinter", "shuttle-van"],
    process: [
      { step: "Outline the itinerary", detail: "Stops, timing windows, and headcount." },
      { step: "We spec the fleet", detail: "Sedan splits, Sprinter groups, or mixed." },
      { step: "Approve the flat quote", detail: "No metered surprises at day end." },
      { step: "Execute on schedule", detail: "One point of contact and 24/7 dispatch." },
    ],
    faq: [
      {
        q: "Can you support multi-day roadshows?",
        a: "Yes. We plan routes, buffers, and vehicle mix so the group stays on schedule across the Loop, suburbs, and convention venues.",
      },
    ],
  },
  {
    slug: "weddings",
    name: "Weddings & Events",
    focusKeyword: "Chicago wedding transportation",
    title: "Chicago Wedding Transportation | Sprinter Shuttles & Stretch Limos",
    meta: "Chicago wedding transportation with stretch limousines, Sprinter guest shuttles, and coordinated multi-vehicle plans. Flat quoted pricing.",
    tagline: "Keep the wedding party together and on time.",
    description:
      "Climate-controlled comfort, ambient lighting, and chauffeurs who choreograph the day with the planner. Pair a stretch limousine for the bridal party with Sprinter guest shuttles so everyone arrives together without parking stress.",
    highlights: [
      "Stretch limo for bridal party",
      "Sprinter guest shuttle loops",
      "Timeline coordination with planners",
      "Photo-friendly interiors",
      "Venue-to-venue multi-stop plans",
    ],
    recommendedVehicles: ["stretch-limousine", "mercedes-sprinter", "luxury-suv", "party-bus"],
    process: [
      { step: "Share the timeline", detail: "Ceremony, photos, reception, and guest headcount." },
      { step: "Build the vehicle plan", detail: "Stretch + Sprinters + optional party bus." },
      { step: "Confirm flat pricing", detail: "Clear all-in rates before the wedding week." },
      { step: "Execute the day", detail: "Chauffeurs stay flexible as the timeline moves." },
    ],
    faq: [
      {
        q: "Should guests ride in a stretch or a Sprinter?",
        a: "Bridal party often prefers a stretch limousine. Guest groups of 8–14 ride better in Sprinters; larger parties may need a party bus or multiple coaches.",
      },
    ],
  },
  {
    slug: "group-charters",
    name: "Group Charters & Sprinters",
    focusKeyword: "Chicago group charter",
    title: "Chicago Group Charters | Mercedes Sprinter Group Transportation",
    meta: "Chicago group charters in Mercedes Sprinters for 8–14 passengers. Corporate, social, sports, and event transportation with flat quotes.",
    tagline: "One coach. One chauffeur. Zero parking drama.",
    description:
      "Group nights out, sports, concerts, brewery tours, and celebrations — gather everyone into one private cabin and let us drive. Our Sprinter fleet is built for the whole party, not split across multiple cars.",
    highlights: [
      "Private cabin for 8–14",
      "Ambient lighting and premium audio",
      "Ideal for nights out and venues",
      "Luggage and gear room when needed",
      "Flat pricing with no surge",
    ],
    recommendedVehicles: ["mercedes-sprinter", "party-bus", "shuttle-van"],
    process: [
      { step: "Tell us the plan", detail: "Headcount, route, and occasion." },
      { step: "Match the coach", detail: "Executive, Lounge, or larger options." },
      { step: "Confirm the quote", detail: "Flat rate approved before pickup." },
      { step: "Ride together", detail: "One vehicle, one timeline." },
    ],
    faq: [
      {
        q: "What's the minimum for a group charter?",
        a: "Sprinters shine from about 8 passengers up. Smaller groups often fit better in a sedan or SUV.",
      },
    ],
  },
  {
    slug: "stretch-limousine",
    name: "Stretch Limousines",
    focusKeyword: "Chicago stretch limousine",
    title: "Chicago Stretch Limousine Service | Weddings & Celebrations",
    meta: "Chicago stretch limousine service for weddings, proms, and special occasions. Professional chauffeurs and flat quoted pricing.",
    tagline: "Classic limousine presence for milestone nights.",
    description:
      "When the occasion calls for a traditional stretch limousine, we deliver formal chauffeurs, ambient lighting, and a cabin built for toasts and photos — coordinated cleanly with the rest of your transportation plan.",
    highlights: [
      "8–10 passenger stretch options",
      "Fiber-optic lighting and sound",
      "Wedding and prom specialists",
      "Planner-friendly coordination",
    ],
    recommendedVehicles: ["stretch-limousine", "mercedes-sprinter", "luxury-suv"],
    process: [
      { step: "Book the occasion", detail: "Date, pickup points, and headcount." },
      { step: "Confirm the coach", detail: "Stretch configuration and any multi-vehicle needs." },
      { step: "Approve pricing", detail: "Flat quote before the event." },
      { step: "Celebrate", detail: "Chauffeur handles timing and routes." },
    ],
    faq: [
      {
        q: "Can a stretch limo do airport runs?",
        a: "It can, but most airport groups prefer Sprinters for luggage capacity. Stretch limos excel for formal celebrations.",
      },
    ],
  },
  {
    slug: "party-bus",
    name: "Party Buses",
    focusKeyword: "Chicago party bus rental",
    title: "Chicago Party Bus Rental | Large Group Nightlife & Events",
    meta: "Chicago party bus rental for 18–40 passengers. Club lighting, sound systems, and professional chauffeurs for nightlife and large celebrations.",
    tagline: "Large groups. High energy. Managed professionally.",
    description:
      "For groups too large for a Sprinter, party buses keep everyone together with lighting, sound, and space to move — always with a professional chauffeur and a clear flat quote.",
    highlights: [
      "18–40 passenger options",
      "Club lighting and premium sound",
      "Bachelor / bachelorette ready",
      "Wedding guest overflow support",
    ],
    recommendedVehicles: ["party-bus", "mercedes-sprinter"],
    process: [
      { step: "Share headcount & route", detail: "Stops, vibe, and timing." },
      { step: "Select capacity", detail: "Match bus size to the group." },
      { step: "Confirm flat rate", detail: "All-in pricing, no surprises." },
      { step: "Roll with a chauffeur", detail: "Safe, coordinated group transport." },
    ],
    faq: [
      {
        q: "Do you allow unsupervised party bus rentals?",
        a: "No. Every charter includes a professional chauffeur. Safety and reliability come first.",
      },
    ],
  },
  {
    slug: "hourly",
    name: "Hourly As-Directed",
    focusKeyword: "Chicago hourly chauffeur",
    title: "Chicago Hourly Chauffeur Service | As-Directed Luxury Transport",
    meta: "Chicago hourly as-directed chauffeur service. Keep a sedan, SUV, or Sprinter on your schedule for multi-stop days and flexible itineraries.",
    tagline: "Your schedule. Our coach. On the clock your way.",
    description:
      "When the day has multiple stops, waiting time, or a fluid agenda, hourly as-directed service keeps a professional chauffeur and the right vehicle available for the full block — quoted clearly up front.",
    highlights: [
      "Flexible multi-stop days",
      "Waiting time included in the plan",
      "Sedan through Sprinter options",
      "Ideal for roadshows and events",
    ],
    recommendedVehicles: ["executive-sedan", "luxury-suv", "mercedes-sprinter"],
    process: [
      { step: "Estimate hours & route", detail: "Rough itinerary is enough to start." },
      { step: "Choose the vehicle", detail: "Matched to headcount and luggage." },
      { step: "Lock the flat hourly block", detail: "Minimums and total confirmed." },
      { step: "Direct as needed", detail: "Chauffeur adapts within the booked window." },
    ],
    faq: [
      {
        q: "What is the minimum for hourly service?",
        a: "Minimums vary by vehicle type. Dispatch will confirm the block that fits your day before you book.",
      },
    ],
  },
  {
    slug: "long-distance",
    name: "Long-Distance Charters",
    focusKeyword: "Chicago long distance charter",
    title: "Chicago Long-Distance Sprinter Charters | Milwaukee, Madison & Beyond",
    meta: "Long-distance group charters from Chicago to Milwaukee, Madison, Lake Geneva, and more. Private Sprinter cabin for the open road.",
    tagline: "From the Loop to the open road.",
    description:
      "Ski weekends, casino runs, college tours, lake houses, and out-of-state group trips. When the destination is hours away, your group travels together in a cabin built for the long haul — not crammed into three rental cars.",
    highlights: [
      "Popular runs: Milwaukee, Madison, Lake Geneva",
      "Private cabin for the full trip",
      "Luggage capacity for weekend gear",
      "Flat quotes for point-to-point or round trips",
    ],
    recommendedVehicles: ["mercedes-sprinter", "luxury-suv", "party-bus"],
    process: [
      { step: "Share destinations & dates", detail: "One-way or round trip." },
      { step: "Confirm vehicle & timing", detail: "Rest stops and buffers planned." },
      { step: "Approve the flat quote", detail: "Clear total before departure." },
      { step: "Travel together", detail: "One coach for the whole party." },
    ],
    faq: [
      {
        q: "Which long-distance routes do you run most?",
        a: "Milwaukee, Madison, Lake Geneva, Starved Rock, and other Midwest destinations are common. Ask dispatch about your route.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
