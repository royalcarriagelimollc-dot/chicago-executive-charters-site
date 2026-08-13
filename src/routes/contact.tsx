import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Chicago Executive Charters Dispatch" },
      {
        name: "description",
        content: `Contact Chicago Executive Charters 24/7 at ${SITE.phone}. Flat quotes for Sprinters, sedans, SUVs, stretch limos, and party buses.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to live dispatch"
        subtitle="24/7 phone support for quotes, changes, and day-of coordination. Or use the reserve form for a structured request."
        compact
      />

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: SITE.phone,
              href: `tel:${SITE.phoneTel}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: SITE.email,
              href: `mailto:${SITE.email}`,
            },
            {
              icon: MapPin,
              label: "Base",
              value: SITE.base,
            },
            {
              icon: Clock,
              label: "Hours",
              value: "24/7 dispatch",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <item.icon className="h-5 w-5 text-gold mb-3" />
              <p className="text-xs tracking-wider text-muted mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="font-semibold text-fg hover:text-gold break-all">
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold text-fg">{item.value}</p>
              )}
            </div>
          ))}
        </div>
        <p className="container-page mt-10 text-sm text-muted max-w-2xl">
          For the fastest quote, include date, pickup and drop-off, headcount, luggage notes, and
          preferred vehicle. Corporate accounts and recurring transport are welcome.
        </p>
      </section>
    </SiteShell>
  );
}
