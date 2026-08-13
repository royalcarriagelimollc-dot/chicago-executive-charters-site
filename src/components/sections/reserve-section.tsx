import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { vehicles } from "@/data/fleet";

export function ReserveSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    vehicle: "mercedes-sprinter",
    notes: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="reserve" className="border-t border-border bg-surface scroll-mt-28">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">
              RESERVE YOUR CHARTER
            </p>
            <h2 className="text-balance mb-4">Your group. Our coach. Chicago handled.</h2>
            <p className="text-muted max-w-lg mb-6">
              Tell us headcount, date, and route. We match the right vehicle — sedan, SUV, Sprinter,
              stretch, or party bus — and return a flat quote fast.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-5 py-3 text-gold hover:bg-gold/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{SITE.phone}</span>
              <span className="text-sm text-muted">24/7</span>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-bg p-6 md:p-8 shadow-card space-y-4"
          >
            {sent ? (
              <div className="py-10 text-center space-y-3">
                <p className="font-display text-2xl text-gold">Request received</p>
                <p className="text-muted text-sm">
                  This demo captures your details locally. Call {SITE.phone} to book for real, or
                  connect your live booking provider.
                </p>
                <Button type="button" variant="outline" onClick={() => setSent(false)}>
                  Send another request
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-muted">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-11 rounded-xl border border-border bg-surface px-3 text-fg placeholder:text-muted-2 focus:border-gold/50"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-muted">Phone</span>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-11 rounded-xl border border-border bg-surface px-3 text-fg placeholder:text-muted-2 focus:border-gold/50"
                      placeholder="(773) 000-0000"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-muted">Date</span>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full h-11 rounded-xl border border-border bg-surface px-3 text-fg focus:border-gold/50"
                    />
                  </label>
                  <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-muted">Vehicle interest</span>
                    <select
                      value={form.vehicle}
                      onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                      className="w-full h-11 rounded-xl border border-border bg-surface px-3 text-fg focus:border-gold/50"
                    >
                      {vehicles.map((v) => (
                        <option key={v.slug} value={v.slug}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block space-y-1.5">
                  <span className="text-xs font-medium text-muted">Route / notes</span>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-fg placeholder:text-muted-2 focus:border-gold/50 resize-y"
                    placeholder="Pickup, drop-off, headcount, occasion..."
                  />
                </label>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Request flat quote
                </Button>
                <p className="text-xs text-muted-2 text-center">
                  Flat quoted pricing · No surge · Licensed & insured
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
