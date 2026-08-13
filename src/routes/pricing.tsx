import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Flat Rate Sprinter & Limo Pricing Chicago | No Surge" },
      {
        name: "description",
        content:
          "How flat-rate Sprinter and luxury ground transportation pricing works in Chicago. Transparent all-in quotes with no surge. Call for a custom rate.",
      },
    ],
  }),
  component: PricingPage,
});

const pricingFaq = [
  {
    q: "Do you use surge pricing?",
    a: "No. We quote flat, all-in rates based on route, vehicle, hours, and date. You approve before the charter.",
  },
  {
    q: "What affects the quote?",
    a: "Vehicle type, duration or distance, time of day for logistics planning, wait time, and special requirements — not opaque surge multipliers.",
  },
  {
    q: "Can corporate clients get standing rates?",
    a: "Yes. Talk to dispatch about recurring routes, preferred vehicles, and billing setups that fit your office.",
  },
];

function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="PRICING"
        title={
          <>
            Flat quoted.{" "}
            <span className="text-gold-gradient">No surge.</span>
          </>
        }
        subtitle="Every charter is priced clearly up front. Approve the rate before we roll — no metered surprises and no end-of-night math."
      />

      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-4 normal-case tracking-normal font-sans text-xl font-semibold">
              What goes into a quote
            </h2>
            <ul className="space-y-3">
              {[
                "Vehicle class (sedan, SUV, Sprinter, stretch, party bus, shuttle)",
                "Route or hourly block",
                "Headcount and luggage reality",
                "Date and timing windows",
                "Airport flight tracking / wait needs",
                "Multi-stop or multi-vehicle logistics",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-4 normal-case tracking-normal font-sans text-xl font-semibold">
              Sample positioning
            </h2>
            <p className="text-muted text-sm mb-4 leading-relaxed">
              Published sample rates from competitors vary widely by inclusion set. We provide{" "}
              <strong className="text-fg font-medium">custom flat quotes</strong> so your total is
              accurate for your exact itinerary — not a teaser hourly that balloons later.
            </p>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Call <a href={`tel:${SITE.phoneTel}`} className="text-gold">{SITE.phone}</a> or use
              the reserve form with date, route, and headcount for a same-day response in most cases.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#reserve">Request a quote</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/fleet">Compare vehicles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-16">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8">Pricing FAQ</h2>
          <FAQ items={pricingFaq} />
        </div>
      </section>
    </SiteShell>
  );
}
