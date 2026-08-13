import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Sign In | Chicago Executive Charters" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <SiteShell showReserve={false}>
      <section className="pt-32 pb-20">
        <div className="container-page flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-card">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold mb-3">ACCOUNT</p>
            <h1 className="font-display text-3xl mb-2">Sign in</h1>
            <p className="text-sm text-muted mb-8">
              Access your charter account. Prefer to book by phone? Call{" "}
              <a href="tel:+17739230220" className="text-gold">
                (773) 923-0220
              </a>
              .
            </p>
            {authEnabled ? (
              <div className="space-y-3">
                {GROK_PROVIDERS.map((p) => (
                  <Button
                    key={p.providerId}
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                  >
                    Continue with {p.label}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Sign-in is disabled in this environment.</p>
            )}
            <p className="mt-8 text-center text-sm text-muted">
              <Link to="/" className="text-gold hover:underline">
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
