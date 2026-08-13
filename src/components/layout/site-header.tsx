import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { Button } from "@/components/ui/button";
import { NAV_FLEET, NAV_LOCATIONS, NAV_SERVICES, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-fg/90 transition-colors hover:text-gold"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[14rem] pt-3">
          <div className="rounded-xl border border-border bg-surface-2 p-2 shadow-card">
            {items.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen ? "glass-header border-b border-border py-2.5" : "bg-transparent py-4",
      )}
      style={{ paddingTop: "calc(0.75rem + var(--grok-banner-h, 0px))" }}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
            <span className="font-display text-lg font-bold">C</span>
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold">
              CHICAGO
            </span>
            <span className="font-display text-lg font-bold tracking-wide text-fg">
              EXECUTIVE CHARTERS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <NavDropdown label="Services" items={NAV_SERVICES} />
          <NavDropdown label="Fleet" items={NAV_FLEET} />
          <NavDropdown label="Locations" items={NAV_LOCATIONS} />
          <Link to="/blog" className="text-sm font-medium text-fg/90 hover:text-gold transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-sm font-medium text-fg/90 hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-fg/90 hover:text-gold transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4 text-gold" />
            {SITE.phone}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#reserve">Reserve Now</a>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-bg-deep/98 max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="container-page py-6 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold mb-2">SERVICES</p>
              <div className="grid gap-1">
                {NAV_SERVICES.map((item) => (
                  <AppLink key={item.href} href={item.href} className="py-2.5 text-fg/90 hover:text-gold">
                    {item.label}
                  </AppLink>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold mb-2">FLEET</p>
              <div className="grid gap-1">
                {NAV_FLEET.map((item) => (
                  <AppLink key={item.href} href={item.href} className="py-2.5 text-fg/90 hover:text-gold">
                    {item.label}
                  </AppLink>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold mb-2">LOCATIONS</p>
              <div className="grid gap-1">
                {NAV_LOCATIONS.map((item) => (
                  <AppLink key={item.href} href={item.href} className="py-2.5 text-fg/90 hover:text-gold">
                    {item.label}
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/blog" className="py-2 text-fg/90">Blog</Link>
              <Link to="/about" className="py-2 text-fg/90">About</Link>
              <Link to="/pricing" className="py-2 text-fg/90">Pricing</Link>
              <Link to="/contact" className="py-2 text-fg/90">Contact</Link>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 font-semibold text-gold">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <Button asChild className="w-full">
                <a href="#reserve">Reserve Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
