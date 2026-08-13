import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Chicago Sprinter & Group Transportation Guides" },
      {
        name: "description",
        content:
          "Practical Chicago Sprinter charter guides: airport timing, corporate roadshows, wedding shuttles, fleet choices, and flat-rate pricing.",
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="BLOG"
        title="Practical guides for Chicago group travel"
        subtitle="Timing, capacity, airport logistics, and occasion playbooks — written to help you book the right coach the first time."
        compact
      />

      <section className="py-16">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-gold/35"
            >
              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <span className="text-gold">{p.category}</span>
                <span>·</span>
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2 className="font-sans text-lg font-semibold normal-case tracking-normal mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h2>
              <p className="text-sm text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
