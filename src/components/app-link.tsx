import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Resolve string paths to typed TanStack Router Link props. */
export function AppLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const props = { className, onClick, children };

  if (href === "/") return <Link to="/" {...props} />;
  if (href === "/fleet") return <Link to="/fleet" {...props} />;
  if (href === "/services") return <Link to="/services" {...props} />;
  if (href === "/locations") return <Link to="/locations" {...props} />;
  if (href === "/about") return <Link to="/about" {...props} />;
  if (href === "/blog") return <Link to="/blog" {...props} />;
  if (href === "/contact") return <Link to="/contact" {...props} />;
  if (href === "/pricing") return <Link to="/pricing" {...props} />;
  if (href === "/login") return <Link to="/login" {...props} />;

  if (href.startsWith("/fleet/")) {
    const slug = href.slice("/fleet/".length);
    return <Link to="/fleet/$slug" params={{ slug }} {...props} />;
  }
  if (href.startsWith("/services/")) {
    const slug = href.slice("/services/".length);
    return <Link to="/services/$slug" params={{ slug }} {...props} />;
  }
  if (href.startsWith("/locations/")) {
    const slug = href.slice("/locations/".length);
    return <Link to="/locations/$slug" params={{ slug }} {...props} />;
  }
  if (href.startsWith("/blog/")) {
    const slug = href.slice("/blog/".length);
    return <Link to="/blog/$slug" params={{ slug }} {...props} />;
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
