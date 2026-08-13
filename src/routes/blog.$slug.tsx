import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { RelatedLinks } from "@/components/sections/related";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/app-link";
import { getPost, posts } from "@/data/blog";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | CEC Blog` },
          { name: "description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      label: p.title,
      href: `/blog/${p.slug}`,
      detail: p.category,
    }));

  return (
    <SiteShell>
      <article className="pt-32 pb-16">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold mb-3">
            {post.category.toUpperCase()}
          </p>
          <h1 className="mb-4 normal-case tracking-normal font-sans text-3xl md:text-4xl font-semibold leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-muted mb-8">
            Focus: {post.focusKeyword} ·{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </p>
          <div className="space-y-5 text-muted leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#reserve">Reserve a charter</a>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/blog">All posts</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">
            Related commercial pages:{" "}
            <AppLink href="/fleet/mercedes-sprinter" className="text-gold hover:underline">
              Mercedes Sprinter
            </AppLink>
            ,{" "}
            <AppLink href="/services/airport" className="text-gold hover:underline">
              Airport transfers
            </AppLink>
            ,{" "}
            <Link to="/pricing" className="text-gold hover:underline">
              Pricing
            </Link>
            .
          </p>
        </div>
      </article>
      <RelatedLinks title="More from the blog" items={related} />
    </SiteShell>
  );
}
