import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations We Serve | Chicago Executive Charters" },
      {
        name: "description",
        content:
          "Chicago Executive Charters serves O'Hare, Midway, Downtown, Rosemont, Naperville, Schaumburg, Oak Brook, Evanston, and 40+ suburbs.",
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="SERVICE AREA"
        title={
          <>
            Serving Chicago{" "}
            <span className="text-gold-gradient">& the suburbs</span>
          </>
        }
        subtitle="Downtown to the far suburbs — airports, venues, and corporate campuses. Based in Elmwood Park for fast access to O'Hare and the expressway grid."
      />

      <section className="py-16">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to="/locations/$slug"
              params={{ slug: loc.slug }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-gold/35"
            >
              <MapPin className="h-5 w-5 text-gold mb-3" />
              <h2 className="font-sans text-lg font-semibold normal-case tracking-normal mb-2 group-hover:text-gold transition-colors">
                {loc.name}
              </h2>
              <p className="text-sm text-muted line-clamp-2 mb-4">{loc.blurb}</p>
              <span className="inline-flex items-center gap-1 text-sm text-gold">
                View area <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
