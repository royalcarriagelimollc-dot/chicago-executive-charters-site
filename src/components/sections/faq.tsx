import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-xl border border-border bg-surface/50 overflow-hidden"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={cn("font-medium", isOpen ? "text-gold" : "text-fg")}>
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                  isOpen && "rotate-180 text-gold",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-muted leading-relaxed">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
