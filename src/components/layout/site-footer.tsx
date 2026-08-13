import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { NAV_FLEET, NAV_SERVICES, SITE, TRUST_ITEMS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-display text-2xl font-bold tracking-wide text-fg">
              Chicago Executive Charters
            </p>
            <p className="text-muted max-w-md text-[0.95rem]">
              Luxury Sprinters, executive sedans, SUVs, stretch limousines, and party buses —
              professional chauffeurs, flat quoted pricing, 24/7 dispatch from {SITE.base}.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-fg hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-muted hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4 text-gold" /> {SITE.base}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">SERVICES</p>
            <ul className="space-y-2 text-sm text-muted">
              {NAV_SERVICES.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <AppLink href={s.href} className="hover:text-gold transition-colors">
                    {s.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">FLEET</p>
            <ul className="space-y-2 text-sm text-muted">
              {NAV_FLEET.slice(0, 6).map((v) => (
                <li key={v.href}>
                  <AppLink href={v.href} className="hover:text-gold transition-colors">
                    {v.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">COMPANY</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
              <li><Link to="/locations" className="hover:text-gold">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
              <li><Link to="/login" className="hover:text-gold">Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          {TRUST_ITEMS.map((t) => (
            <span
              key={t.label}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
            >
              <span className="text-fg font-medium">{t.label}</span>
              <span className="mx-1.5 text-border-gold">·</span>
              {t.detail}
            </span>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-2">
          © {new Date().getFullYear()} {SITE.name}. Licensed & commercially insured livery service.
        </p>
      </div>
    </footer>
  );
}
