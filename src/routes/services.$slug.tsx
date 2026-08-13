import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { FAQ } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/sections/related";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { getVehicle } from "@/data/fleet";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.service.title },
          { name: "description", content: loaderData.service.meta },
        ]
      : [],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const recVehicles = service.recommendedVehicles
    .map((slug) => getVehicle(slug))
    .filter(Boolean)
    .map((v) => ({
      label: v!.name,
      href: `/fleet/${v!.slug}`,
      detail: v!.capacity,
    }));
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4)
    .map((s) => ({ label: s.name, href: `/services/${s.slug}`, detail: s.tagline }));

  return (
    <SiteShell>
      <PageHero
        eyebrow={service.focusKeyword.toUpperCase()}
        title={service.name}
        subtitle={service.tagline}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#reserve">Get a flat quote</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/services">All services</Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-4 normal-case tracking-normal font-sans text-2xl font-semibold">
              Overview
            </h2>
            <p className="text-muted leading-relaxed mb-8">{service.description}</p>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">HIGHLIGHTS</h3>
            <ul className="space-y-2">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sticky top-28">
              <h3 className="font-sans text-base font-semibold normal-case tracking-normal mb-4">
                How it works
              </h3>
              <ol className="space-y-4">
                {service.process.map((p, i) => (
                  <li key={p.step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs text-gold font-semibold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-fg">{p.step}</p>
                      <p className="text-xs text-muted mt-0.5">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-16">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8">FAQ</h2>
          <FAQ items={service.faq} />
        </div>
      </section>

      <RelatedLinks title="Recommended vehicles" items={recVehicles} />
      <RelatedLinks title="Related services" items={related} />
    </SiteShell>
  );
}
