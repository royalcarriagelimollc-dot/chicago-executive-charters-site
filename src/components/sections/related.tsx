import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/app-link";

export function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; detail?: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="border-t border-border bg-bg-deep">
      <div className="container-page py-14">
        <h2 className="mb-8 normal-case tracking-normal font-sans text-xl font-semibold">{title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-gold/35 hover:-translate-y-0.5 block"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-fg group-hover:text-gold transition-colors">
                    {item.label}
                  </p>
                  {item.detail && <p className="text-sm text-muted mt-1">{item.detail}</p>}
                </div>
                <ArrowRight className="h-4 w-4 text-gold shrink-0 mt-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  );
}
