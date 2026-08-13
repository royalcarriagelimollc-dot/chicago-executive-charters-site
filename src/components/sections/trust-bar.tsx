import { Shield, Clock, Star, BadgeCheck } from "lucide-react";
import { TRUST_ITEMS } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = [Shield, Clock, Star, BadgeCheck];

export function TrustBar({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {TRUST_ITEMS.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={item.label}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-fg">{item.label}</p>
              <p className="text-xs text-muted">{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
