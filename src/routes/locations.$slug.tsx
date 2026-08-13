import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedLinks } from "@/components/sections/related";
import { Button } from "@/components/ui/button";
import { getLocation, locations } from "@/data/locations";
import { getService } from "@/data/services";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.location.title },
          { name: "description", content: loaderData.location.meta },
        ]
      : [],
  }),
  component: LocationDetailPage,
});

function LocationDetailPage() {
  const { location } = Route.useLoaderData();
  const serviceLinks = location.services
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((s) => ({
      label: s!.name,
      href: `/services/${s!.slug}`,
      detail: s!.tagline,
    }));
  const nearby = locations
    .filter((l) => l.slug !== location.slug)
    .slice(0, 4)
    .map((l) => ({ label: l.name, href: `/locations/${l.slug}`, detail: l.focusKeyword }));

  return (
    <SiteShell>
      <PageHero
        eyebrow={location.focusKeyword.toUpperCase()}
        title={location.name}
        subtitle={location.blurb}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#reserve">Reserve for this area</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/locations">All locations</Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <h2 className="mb-6 normal-case tracking-normal font-sans text-xl font-semibold">
            Local notes
          </h2>
          <ul className="space-y-3">
            {location.notes.map((n) => (
              <li
                key={n}
                className="flex gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm"
              >
                <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted text-sm leading-relaxed">
            Chicago Executive Charters is based in Elmwood Park with strong access to the
            expressway grid. Whether you need a sedan for a VIP, a Sprinter for the whole team, or
            multi-vehicle wedding logistics, we quote flat and dispatch professionally.
          </p>
        </div>
      </section>

      <RelatedLinks title="Services in this area" items={serviceLinks} />
      <RelatedLinks title="Nearby / related areas" items={nearby} />
    </SiteShell>
  );
}
