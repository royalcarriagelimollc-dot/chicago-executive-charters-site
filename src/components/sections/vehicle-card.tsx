import { Link } from "@tanstack/react-router";
import { Users, ArrowRight } from "lucide-react";
import type { Vehicle } from "@/data/fleet";
import { cn } from "@/lib/utils";

export function VehicleCard({ vehicle, featured }: { vehicle: Vehicle; featured?: boolean }) {
  return (
    <Link
      to="/fleet/$slug"
      params={{ slug: vehicle.slug }}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-card",
        featured && "md:col-span-2 lg:col-span-1",
      )}
    >
      <div
        className={cn(
          "relative h-44 bg-gradient-to-br flex items-end p-5",
          vehicle.accent,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,108,0.15),transparent_55%)]" />
        <div className="relative">
          {vehicle.flagship && (
            <span className="mb-2 inline-block rounded-full border border-gold/40 bg-bg/40 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wider text-gold">
              FLAGSHIP
            </span>
          )}
          <p className="font-display text-2xl font-bold text-fg drop-shadow">{vehicle.shortName}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg mb-1 normal-case tracking-normal font-sans font-semibold text-fg group-hover:text-gold transition-colors">
          {vehicle.name}
        </h3>
        <p className="text-sm text-muted mb-4 line-clamp-2">{vehicle.tagline}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Users className="h-4 w-4 text-gold" />
            {vehicle.capacity}
          </span>
          <span className="inline-flex items-center gap-1 text-gold font-medium">
            Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
