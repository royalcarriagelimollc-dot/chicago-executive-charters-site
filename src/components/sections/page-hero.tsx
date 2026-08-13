import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  compact,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        compact ? "pt-28 pb-12 md:pt-32 md:pb-16" : "pt-32 pb-16 md:pt-40 md:pb-24",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,108,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-surface/40" />
      <div className="container-page relative">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="text-balance max-w-4xl mb-5">{title}</h1>
        {subtitle && (
          <p className="text-muted text-lg max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
        )}
        {children ?? (
          <div className="flex flex-wrap gap-3">
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
        )}
      </div>
    </section>
  );
}
