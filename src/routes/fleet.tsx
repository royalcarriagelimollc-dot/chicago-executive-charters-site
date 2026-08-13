import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { VehicleCard } from "@/components/sections/vehicle-card";
import { FAQ } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/sections/related";
import { vehicles } from "@/data/fleet";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Chicago Luxury Fleet | Sprinters, SUVs, Stretch Limos & Party Buses" },
      {
        name: "description",
        content:
          "Explore Chicago Executive Charters' luxury fleet: Mercedes Sprinters, executive sedans, SUVs, stretch limousines, and party buses. Flat quoted pricing.",
      },
    ],
  }),
  component: FleetPage,
});

const fleetFaq = [
  {
    q: "What vehicles are in the fleet?",
    a: "Executive sedans, luxury SUVs, Mercedes Sprinters (Executive up to 12 and Extended Lounge up to 14), stretch limousines, party buses (18–40), and luxury shuttle vans.",
  },
  {
    q: "Which vehicle should I book?",
    a: "1–3 → sedan. 4–6 → SUV. 8–14 → Sprinter. Formal celebration → stretch. Large energetic groups → party bus. Loops → shuttle van. Unsure? Call dispatch.",
  },
  {
    q: "Are all vehicles professionally chauffeured?",
    a: "Yes. Every charter includes a vetted professional chauffeur — no unsupervised rentals.",
  },
];

function FleetPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="CHICAGO LUXURY FLEET"
        title={
          <>
            The fleet that keeps{" "}
            <span className="text-gold-gradient">the whole group</span> together
          </>
        }
        subtitle="Executive sedans, Cadillac-style SUVs, Mercedes Sprinters, classic stretch limousines, and party buses — one professional standard across every coach."
      />

      <section className="py-12 border-b border-border">
        <div className="container-page">
          <TrustBar />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-4">Full lineup</h2>
            <p className="text-muted">
              Sprinters remain our flagship private-cabin solution. The expanded lineup competes
              head-to-head with full-service Chicago operators while keeping preparation and
              chauffeur standards uncompromised.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-16">
        <div className="container-page">
          <h2 className="mb-6">How to choose</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm text-left min-w-[36rem]">
              <thead className="bg-surface-2 text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Headcount / need</th>
                  <th className="px-4 py-3 font-medium">Recommended</th>
                  <th className="px-4 py-3 font-medium">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["1–3, discreet", "Executive Sedan", "Quiet black car presence"],
                  ["4–6 + luggage", "Luxury SUV", "Space without a full Sprinter"],
                  ["8–14 private cabin", "Mercedes Sprinter", "Best group value & cabin"],
                  ["Formal celebration", "Stretch Limousine", "Classic limo experience"],
                  ["18–40 energy", "Party Bus", "Lighting, sound, capacity"],
                  ["Repeating loops", "Luxury Shuttle Van", "Efficiency & consistency"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="bg-bg/40">
                    <td className="px-4 py-3 text-fg">{a}</td>
                    <td className="px-4 py-3 text-gold font-medium">{b}</td>
                    <td className="px-4 py-3 text-muted">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8">Fleet FAQ</h2>
          <FAQ items={fleetFaq} />
        </div>
      </section>

      <RelatedLinks
        title="Related services"
        items={[
          { label: "Airport Transfers", href: "/services/airport", detail: "ORD & Midway groups" },
          { label: "Corporate Transportation", href: "/services/corporate", detail: "Roadshows & teams" },
          { label: "Weddings & Events", href: "/services/weddings", detail: "Stretch + guest shuttles" },
          { label: "Pricing", href: "/pricing", detail: "Flat-rate philosophy" },
        ]}
      />
    </SiteShell>
  );
}
