import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedLinks } from "@/components/sections/related";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Chicago Luxury Transportation Services | Airport, Corporate, Weddings" },
      {
        name: "description",
        content:
          "Chicago Executive Charters services: airport transfers, corporate roadshows, weddings, group charters, stretch limos, party buses, hourly and long-distance.",
      },
    ],
  }),
  component: ServicesHubPage,
});

function ServicesHubPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="SERVICES"
        title={
          <>
            Every charter{" "}
            <span className="text-gold-gradient">Chicago calls for</span>
          </>
        }
        subtitle="From 5 a.m. O'Hare runs to wedding parties and multi-stop corporate days — one standard of professional chauffeurs and flat quoted pricing."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-gold/35 hover:shadow-card"
            >
              <h2 className="font-sans text-lg font-semibold normal-case tracking-normal mb-2 group-hover:text-gold transition-colors">
                {s.name}
              </h2>
              <p className="text-sm text-muted mb-4 flex-1">{s.tagline}</p>
              <span className="inline-flex items-center gap-1 text-sm text-gold font-medium">
                View service <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks
        title="Browse the fleet"
        items={[
          { label: "Mercedes Sprinter", href: "/fleet/mercedes-sprinter" },
          { label: "Stretch Limousine", href: "/fleet/stretch-limousine" },
          { label: "Party Bus", href: "/fleet/party-bus" },
          { label: "Full Fleet", href: "/fleet" },
        ]}
      />
    </SiteShell>
  );
}
