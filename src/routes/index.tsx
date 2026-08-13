import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/sections/trust-bar";
import { VehicleCard } from "@/components/sections/vehicle-card";
import { FAQ } from "@/components/sections/faq";
import { vehicles } from "@/data/fleet";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chicago Sprinter Charter | Luxury Group Transportation" },
      {
        name: "description",
        content:
          "Chauffeured Mercedes Sprinter charter in Chicago for groups of up to 14 — plus sedans, SUVs, stretch limos & party buses. Flat quoted pricing, 24/7 dispatch.",
      },
    ],
  }),
  component: HomePage,
});

const homeFaq = [
  {
    q: "How many passengers fit in a Sprinter charter?",
    a: "Executive Sprinters seat up to 12 guests. Extended Lounge configurations carry up to 14 with luggage room. Tell us headcount and we match the coach.",
  },
  {
    q: "Do you cover O'Hare and Midway?",
    a: "Yes — both airports are core. We track flights in real time, adjust for delays, and meet curbside or with meet-and-greet.",
  },
  {
    q: "How does pricing work?",
    a: "We quote a flat, all-in rate based on route, hours, and date. You approve before the charter — no surge, no end-of-night surprises.",
  },
  {
    q: "What vehicles do you offer beyond Sprinters?",
    a: "Executive sedans, luxury SUVs, stretch limousines, party buses, and shuttle vans — all with the same professional chauffeur standard.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Fully licensed, commercially insured livery service. Documentation available for corporate and event clients.",
  },
];

function HomePage() {
  const featured = vehicles.filter((v) =>
    ["mercedes-sprinter", "stretch-limousine", "party-bus", "luxury-suv"].includes(v.slug),
  );

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative min-h-[92dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,108,0.14),transparent_50%),linear-gradient(180deg,#0a0a0b_0%,#111_40%,#0a0a0b_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjBMMTAgNTBNMzAgNjBMNjAgMzBNMCAzMEwzMCAwTTYwIDYwTDAgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')]" />
        <div className="container-page relative pb-16 pt-36 md:pb-24 md:pt-44 w-full">
          <p className="text-xs font-semibold tracking-[0.32em] text-gold mb-5">
            CHICAGO · PRIVATE CHARTERS
          </p>
          <h1 className="max-w-4xl text-balance mb-6">
            Arrive in{" "}
            <span className="text-gold-gradient">executive</span>
            <br />
            comfort and quiet luxury.
          </h1>
          <p className="max-w-xl text-lg text-muted mb-8 leading-relaxed">
            Chauffeured Mercedes-Benz Sprinters, executive sedans, SUVs, stretch limousines, and
            party buses for Chicago's boardrooms, runways, and celebrations. Flat quoted.
            Professionally driven.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Button asChild size="lg">
              <a href="#reserve">Reserve Your Charter</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/fleet">Explore the Fleet</Link>
            </Button>
          </div>
          <TrustBar />
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">WHO WE ARE</p>
            <h2 className="mb-5 text-balance">A private cabin for the way Chicago really travels.</h2>
            <p className="text-muted mb-4">
              From our home base in Elmwood Park — seven miles from O'Hare — Chicago Executive
              Charters runs an immaculate fleet built for groups and executives who still expect
              first-class treatment.
            </p>
            <p className="text-muted mb-6">
              Whether it's a roadshow across the Loop, a wedding party headed downtown, or a
              12-seat airport run at 5 a.m., you get a spotless coach, professional chauffeur, and
              flat pricing you approve before we roll.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">
                About us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Chauffeurs, not gig drivers",
              "Detailed before every run",
              "Live flight tracking",
              "Flat quoted pricing",
              "24/7 live dispatch",
              "Licensed & insured",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-surface/40 py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">WHAT WE MOVE</p>
              <h2>Chicago charters for every occasion</h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/services">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-bg p-5 transition-all hover:-translate-y-1 hover:border-gold/35"
              >
                <h3 className="font-sans text-base font-semibold normal-case tracking-normal mb-2 group-hover:text-gold transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-muted line-clamp-2 mb-4">{s.tagline}</p>
                <span className="text-sm text-gold inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">THE FLEET</p>
              <h2>From black car to party bus</h2>
              <p className="text-muted mt-3 max-w-xl">
                Mercedes Sprinters remain our flagship. The expanded lineup matches full-service
                competitors with the same preparation and chauffeur standard.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/fleet">
                Full fleet <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-border bg-bg-deep py-16 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">WHY CEC</p>
          <h2 className="mb-10 max-w-2xl">The details are the difference.</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Chauffeurs, not drivers",
                d: "Vetted, background-checked, professionally dressed, route-fluent across Chicagoland.",
              },
              {
                n: "02",
                t: "Immaculate coaches",
                d: "Detailed before every charter — interior, glass, and exterior. Showroom condition.",
              },
              {
                n: "03",
                t: "On-time, every time",
                d: "Live flight tracking, smart buffers, and 24/7 dispatch keep your schedule first.",
              },
              {
                n: "04",
                t: "Transparent flat pricing",
                d: "Clear quotes with no surge and no end-of-night math. Approve before we roll.",
              },
            ].map((item) => (
              <div key={item.n} className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-gold font-display text-2xl mb-3">{item.n}</p>
                <h3 className="font-sans text-base font-semibold normal-case tracking-normal mb-2">
                  {item.t}
                </h3>
                <p className="text-sm text-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">FROM THE BLOG</p>
              <h2 className="normal-case tracking-normal font-sans text-2xl md:text-3xl">
                Guides that help you plan
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/blog">
                All posts <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-surface p-5 hover:border-gold/35 transition-colors"
              >
                <p className="text-xs text-gold mb-2">{p.category}</p>
                <h3 className="font-sans text-base font-semibold normal-case tracking-normal mb-2 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface/30 py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">GOOD TO KNOW</p>
          <h2 className="mb-8">Frequently asked questions</h2>
          <FAQ items={homeFaq} />
        </div>
      </section>
    </SiteShell>
  );
}
