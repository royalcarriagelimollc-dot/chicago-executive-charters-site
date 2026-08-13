import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Users } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { FAQ } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/sections/related";
import { Button } from "@/components/ui/button";
import { getVehicle, vehicles } from "@/data/fleet";
import { services } from "@/data/services";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/fleet/$slug")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.vehicle.title },
          { name: "description", content: loaderData.vehicle.meta },
        ]
      : [],
  }),
  component: VehicleDetailPage,
});

function VehicleDetailPage() {
  const { vehicle } = Route.useLoaderData();
  const relatedVehicles = vehicles
    .filter((v) => v.slug !== vehicle.slug)
    .slice(0, 3)
    .map((v) => ({
      label: v.name,
      href: `/fleet/${v.slug}`,
      detail: v.capacity,
    }));
  const relatedServices = services
    .filter((s) => s.recommendedVehicles.includes(vehicle.slug))
    .slice(0, 4)
    .map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      detail: s.tagline,
    }));

  return (
    <SiteShell>
      <PageHero
        eyebrow={vehicle.focusKeyword.toUpperCase()}
        title={vehicle.name}
        subtitle={vehicle.tagline}
      >
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold">
            <Users className="h-4 w-4" />
            {vehicle.capacity}
          </span>
          {vehicle.flagship && (
            <span className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wider text-muted">
              FLAGSHIP
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <Button asChild size="lg">
            <a href="#reserve">Reserve this vehicle</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/fleet">All fleet</Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div
            className={cn(
              "min-h-[18rem] rounded-2xl bg-gradient-to-br border border-border relative overflow-hidden",
              vehicle.accent,
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,108,0.2),transparent_60%)]" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-4xl text-fg">{vehicle.shortName}</p>
              <p className="text-muted mt-1">{vehicle.capacity}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 normal-case tracking-normal font-sans text-2xl font-semibold">
              Overview
            </h2>
            <p className="text-muted mb-6 leading-relaxed">{vehicle.description}</p>
            <h3 className="font-sans text-sm font-semibold tracking-wide text-gold mb-3">
              BEST FOR
            </h3>
            <ul className="space-y-2 mb-8">
              {vehicle.bestFor.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-fg/90">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-16">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 normal-case tracking-normal font-sans text-xl font-semibold">
              Features
            </h2>
            <ul className="grid gap-2">
              {vehicle.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm"
                >
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 normal-case tracking-normal font-sans text-xl font-semibold">
              What's included
            </h2>
            <ul className="grid gap-2">
              {vehicle.includes.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm"
                >
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8">FAQ</h2>
          <FAQ items={vehicle.faq} />
        </div>
      </section>

      <RelatedLinks title="Related vehicles" items={relatedVehicles} />
      <RelatedLinks title="Popular with this vehicle" items={relatedServices} />
    </SiteShell>
  );
}
