import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chicago Executive Charters | Elmwood Park Luxury Transport" },
      {
        name: "description",
        content:
          "About Chicago Executive Charters — Elmwood Park based luxury Sprinter and group transportation with professional chauffeurs and flat quoted pricing.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="ABOUT"
        title={
          <>
            Built for groups that still expect{" "}
            <span className="text-gold-gradient">first-class</span> treatment
          </>
        }
        subtitle={`${SITE.name} operates from ${SITE.base} with a simple mandate: immaculate coaches, professional chauffeurs, and transparent flat pricing.`}
      />

      <section className="py-12 border-b border-border">
        <div className="container-page">
          <TrustBar />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page max-w-3xl space-y-6 text-muted leading-relaxed">
          <p>
            Some trips can't happen in a sedan and shouldn't happen in a van that feels
            like one. We built Chicago Executive Charters around the Mercedes-Benz Sprinter as a
            private cabin for corporate teams, wedding parties, airport groups, and celebrations —
            then expanded the lineup to include executive sedans, luxury SUVs, stretch limousines,
            and party buses so one company can cover the full range of Chicago luxury ground
            transportation.
          </p>
          <p>
            Our base in Elmwood Park sits near O'Hare and the major expressways, which is why
            airport reliability and multi-stop corporate days are core strengths. Every coach is
            detailed before it rolls. Every chauffeur is vetted. Every quote is flat and approved
            before the trip begins.
          </p>
          <p>
            Whether you are planning a board roadshow, a Midway arrival for twelve, or a wedding
            weekend with mixed vehicles, you get one standard and one point of contact — not a
            patchwork of gig drivers.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="#reserve">Reserve a charter</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/fleet">View the fleet</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Contact dispatch</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
