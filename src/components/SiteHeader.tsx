import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/artists", label: "Artists" },
  { to: "/estufa-radio", label: "Estufa Radio" },
  { to: "/send-your-music", label: "Send your music" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">ESTUFA</span>
          <span className="label-mono text-primary">Records</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="label-mono rounded-sm px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
