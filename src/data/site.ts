export const SITE = {
  name: "Chicago Executive Charters",
  shortName: "CEC",
  phone: "(773) 923-0220",
  phoneTel: "+17739230220",
  email: "dispatch@chicagoexecutivecharters.com",
  base: "Elmwood Park, IL",
  tagline: "Private Sprinter Charters & Luxury Ground Transportation",
  domain: "chicagoexecutivecharters.com",
} as const;

export const NAV_SERVICES = [
  { label: "Airport Transfers", href: "/services/airport" },
  { label: "Corporate & Executive", href: "/services/corporate" },
  { label: "Weddings & Events", href: "/services/weddings" },
  { label: "Group Charters & Sprinters", href: "/services/group-charters" },
  { label: "Stretch Limousines", href: "/services/stretch-limousine" },
  { label: "Party Buses", href: "/services/party-bus" },
  { label: "Hourly As-Directed", href: "/services/hourly" },
  { label: "Long-Distance", href: "/services/long-distance" },
  { label: "All Services", href: "/services" },
] as const;

export const NAV_FLEET = [
  { label: "Executive Sedan", href: "/fleet/executive-sedan" },
  { label: "Luxury SUV", href: "/fleet/luxury-suv" },
  { label: "Mercedes Sprinter", href: "/fleet/mercedes-sprinter" },
  { label: "Stretch Limousine", href: "/fleet/stretch-limousine" },
  { label: "Party Bus", href: "/fleet/party-bus" },
  { label: "Luxury Shuttle Van", href: "/fleet/shuttle-van" },
  { label: "Full Fleet Overview", href: "/fleet" },
] as const;

export const NAV_LOCATIONS = [
  { label: "O'Hare (ORD)", href: "/locations/ohare" },
  { label: "Midway (MDW)", href: "/locations/midway" },
  { label: "Downtown / The Loop", href: "/locations/downtown" },
  { label: "Rosemont", href: "/locations/rosemont" },
  { label: "Naperville", href: "/locations/naperville" },
  { label: "Schaumburg", href: "/locations/schaumburg" },
  { label: "Oak Brook", href: "/locations/oak-brook" },
  { label: "Evanston", href: "/locations/evanston" },
  { label: "All Locations", href: "/locations" },
] as const;

export const TRUST_ITEMS = [
  { label: "Licensed & Insured", detail: "Commercially certified" },
  { label: "24/7 Dispatch", detail: "Live flight tracking" },
  { label: "Professional Chauffeurs", detail: "Vetted & background-checked" },
  { label: "Flat Quoted Pricing", detail: "No surge surprises" },
] as const;
